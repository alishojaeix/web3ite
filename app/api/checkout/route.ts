import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/server/auth";
import { hasPurchased } from "@/lib/server/purchases";
import { createCheckoutSession, stripeConfigured } from "@/lib/server/stripe";
import { getTemplateById } from "@/lib/templates";
import { clientKey, rateLimit } from "@/lib/server/rate-limit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json(
      { error: "Sign in to continue to checkout.", code: "unauthorized" },
      { status: 401 }
    );
  }

  const limit = rateLimit(`checkout:${clientKey(request)}`, 10, 10 * 60 * 1000);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many checkout attempts. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }

  let body: { templateId?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const templateId = typeof body.templateId === "string" ? body.templateId : "";
  const template = await getTemplateById(templateId);
  if (!template) {
    return NextResponse.json({ error: "Unknown template." }, { status: 404 });
  }

  try {
    if (await hasPurchased(user.id, template.id)) {
      return NextResponse.json(
        { error: "This template is already in your account.", code: "already_owned" },
        { status: 409 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Purchase storage is unavailable. Please try again later." },
      { status: 503 }
    );
  }

  if (!stripeConfigured()) {
    return NextResponse.json(
      {
        error:
          "Payments are not configured on this deployment. No payment was taken.",
        code: "not_configured",
      },
      { status: 503 }
    );
  }

  try {
    const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
    const origin = configuredOrigin
      ? new URL(configuredOrigin).origin
      : new URL(request.url).origin;
    const session = await createCheckoutSession({
      template,
      userId: user.id,
      email: user.email,
      origin,
    });
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(
      "Stripe checkout session failed:",
      error instanceof Error ? error.message : "unknown error"
    );
    return NextResponse.json(
      {
        error:
          "The payment provider could not start checkout. No payment was taken. Please try again.",
      },
      { status: 502 }
    );
  }
}
