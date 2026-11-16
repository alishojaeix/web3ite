import { createHmac, timingSafeEqual } from "node:crypto";
import type { Template } from "@/types/template";

type StripeSession = {
  id: string;
  url?: string | null;
  payment_status?: string;
  status?: string | null;
  amount_total?: number | null;
  currency?: string | null;
  client_reference_id?: string | null;
  metadata?: Record<string, string> | null;
};

export function stripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export function webhookConfigured(): boolean {
  return Boolean(process.env.STRIPE_WEBHOOK_SECRET);
}

function secretKey(): string {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  return key;
}

async function stripeRequest(
  path: string,
  body?: URLSearchParams
): Promise<StripeSession> {
  const response = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${secretKey()}`,
      ...(body ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    },
    body: body?.toString(),
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });

  const payload = (await response.json().catch(() => null)) as
    | (StripeSession & { error?: { message?: string } })
    | null;

  if (!response.ok || !payload) {
    throw new Error(payload?.error?.message ?? `Stripe responded ${response.status}`);
  }
  return payload;
}

export async function createCheckoutSession(input: {
  template: Template;
  userId: string;
  email: string;
  origin: string;
}): Promise<{ id: string; url: string }> {
  const { template, userId, email, origin } = input;
  const base = origin.replace(/\/$/, "");

  const body = new URLSearchParams({
    mode: "payment",
    success_url: `${base}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${base}/checkout/${template.id}?canceled=1`,
    customer_email: email,
    client_reference_id: userId,
    "metadata[templateId]": template.id,
    "metadata[userId]": userId,
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "usd",
    "line_items[0][price_data][unit_amount]": String(Math.round(template.price * 100)),
    "line_items[0][price_data][product_data][name]": `${template.title} — website template`,
    "line_items[0][price_data][product_data][description]": `One-time licence for one commercial website project. ${template.title} by Web3ite.`,
  });

  const session = await stripeRequest("checkout/sessions", body);
  if (!session.id || !session.url) {
    throw new Error("Stripe did not return a checkout URL");
  }
  return { id: session.id, url: session.url };
}

export async function retrieveCheckoutSession(sessionId: string): Promise<StripeSession> {
  if (!/^cs_[A-Za-z0-9_]+$/.test(sessionId)) {
    throw new Error("Invalid checkout session id");
  }
  return stripeRequest(`checkout/sessions/${encodeURIComponent(sessionId)}`);
}

/**
 * Verify a Stripe webhook signature without the SDK:
 * v1 = HMAC-SHA256(`${timestamp}.${rawBody}`, webhookSecret)
 */
export function verifyStripeSignature(
  rawBody: string,
  header: string | null,
  secret: string,
  toleranceSeconds = 300
): boolean {
  if (!header) return false;
  const parts = header.split(",").reduce<Record<string, string[]>>((acc, part) => {
    const [key, value] = part.split("=");
    if (!key || !value) return acc;
    acc[key] = [...(acc[key] ?? []), value];
    return acc;
  }, {});

  const timestamp = Number(parts.t?.[0]);
  if (!Number.isFinite(timestamp)) return false;
  if (Math.abs(Date.now() / 1000 - timestamp) > toleranceSeconds) return false;

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${rawBody}`)
    .digest("hex");

  return (parts.v1 ?? []).some((signature) => {
    const a = Buffer.from(signature);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
  });
}

export type { StripeSession };
