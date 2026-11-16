import { NextResponse } from "next/server";
import { getSiteConfig } from "@/lib/sites";
import { getTemplateById } from "@/lib/templates";
import { appendToCollection } from "@/lib/server/store";
import { clientKey, rateLimit } from "@/lib/server/rate-limit";

export const runtime = "nodejs";

type Payload = {
  site?: unknown;
  name?: unknown;
  email?: unknown;
  message?: unknown;
  ageConfirmed?: unknown;
};

type Inquiry = {
  id: string;
  site: string;
  name: string;
  email: string;
  message: string;
  ageConfirmed: boolean;
  createdAt: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  const limit = rateLimit(`site-interest:${clientKey(request)}`, 5, 10 * 60 * 1000);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } }
    );
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const site = typeof payload.site === "string" ? payload.site : "";
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const ageConfirmed = payload.ageConfirmed === true;

  if (!getSiteConfig(site)) {
    return NextResponse.json({ error: "Unknown template website." }, { status: 400 });
  }
  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ error: "Please enter a name (2–120 characters)." }, { status: 400 });
  }
  if (!EMAIL.test(email) || email.length > 180) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length < 5 || message.length > 2000) {
    return NextResponse.json(
      { error: "Please enter a message between 5 and 2,000 characters." },
      { status: 400 }
    );
  }

  const template = await getTemplateById(site);
  if (!template) {
    return NextResponse.json({ error: "Unknown template website." }, { status: 400 });
  }
  if (template.ageRestricted && !ageConfirmed) {
    return NextResponse.json(
      { error: "This site is for adults only. Please confirm you are 18 or older." },
      { status: 400 }
    );
  }

  const inquiry: Inquiry = {
    id: globalThis.crypto.randomUUID(),
    site,
    name: name.slice(0, 120),
    email: email.slice(0, 180),
    message: message.slice(0, 2000),
    ageConfirmed,
    createdAt: new Date().toISOString(),
  };

  const webhook = process.env.SITE_INBOX_WEBHOOK_URL;
  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
        signal: AbortSignal.timeout(8000),
      });
      if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
      return NextResponse.json({ ok: true }, { status: 201 });
    } catch {
      return NextResponse.json(
        { error: "The inbox is temporarily unavailable. Please email the address on this page." },
        { status: 503 }
      );
    }
  }

  try {
    await appendToCollection<Inquiry>("inquiries", inquiry);
  } catch {
    return NextResponse.json(
      {
        error:
          "This demo inbox is read-only on the current deployment. Please use the email address on this page.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
