import { NextResponse } from "next/server";
import { findUserById } from "@/lib/server/auth";
import { recordPurchase } from "@/lib/server/purchases";
import { verifyStripeSignature, type StripeSession } from "@/lib/server/stripe";
import { getTemplateById } from "@/lib/templates";

export const runtime = "nodejs";

type StripeEvent = {
  id?: string;
  type?: string;
  data?: { object?: StripeSession };
};

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Stripe webhook is not configured." },
      { status: 503 }
    );
  }

  const rawBody = await request.text();
  if (!verifyStripeSignature(rawBody, request.headers.get("stripe-signature"), secret)) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  let event: StripeEvent;
  try {
    event = JSON.parse(rawBody) as StripeEvent;
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  if (
    event.type !== "checkout.session.completed" &&
    event.type !== "checkout.session.async_payment_succeeded"
  ) {
    return NextResponse.json({ received: true });
  }

  const session = event.data?.object;
  if (!session?.id || session.payment_status !== "paid") {
    return NextResponse.json({ received: true, pending: true });
  }

  const userId = session.metadata?.userId;
  const templateId = session.metadata?.templateId;
  if (!userId || !templateId) {
    return NextResponse.json({ error: "Missing purchase metadata." }, { status: 400 });
  }

  const [user, template] = await Promise.all([
    findUserById(userId),
    getTemplateById(templateId),
  ]);
  if (!user || !template) {
    return NextResponse.json({ error: "Unknown user or template." }, { status: 400 });
  }

  try {
    await recordPurchase({
      userId: user.id,
      templateId: template.id,
      amount: session.amount_total ?? Math.round(template.price * 100),
      currency: session.currency ?? "usd",
      stripeSessionId: session.id,
    });
  } catch {
    // A non-2xx response asks Stripe to retry the webhook.
    return NextResponse.json({ error: "Could not record purchase." }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
