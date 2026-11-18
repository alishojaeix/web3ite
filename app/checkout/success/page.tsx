import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AlertTriangle, ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getSessionUser } from "@/lib/server/auth";
import { formatPurchaseAmount, recordPurchase } from "@/lib/server/purchases";
import {
  retrieveCheckoutSession,
  stripeConfigured,
  type StripeSession,
} from "@/lib/server/stripe";
import { getTemplateById } from "@/lib/templates";
import { getSitePreviewRoute } from "@/lib/templates/sitePreviewRoutes";
import { CATEGORY_LABELS, type Template } from "@/types/template";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "نتیجهٔ پرداخت",
  robots: { index: false, follow: false },
};

type Result =
  | { kind: "success"; template: Template; paid: string }
  | { kind: "pending"; template: Template | null }
  | { kind: "error"; title: string; body: string }
  | { kind: "recorded_failed"; template: Template; sessionId: string };

function Panel({
  tone,
  icon,
  title,
  children,
}: {
  tone: "success" | "error" | "pending";
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  const color =
    tone === "success"
      ? "text-[#7dd8b4] border-[#10b981]/25 bg-[#10b981]/10"
      : tone === "pending"
        ? "text-[#f3d19a] border-[#f59e0b]/25 bg-[#f59e0b]/10"
        : "text-[#f2b6b0] border-[#ef4444]/25 bg-[#ef4444]/10";
  return (
    <div className={`rounded-lg border px-6 py-7 sm:px-8 ${color}`}>
      <div className="flex items-start gap-3">
        <span className="mt-0.5">{icon}</span>
        <div>
          <h1 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.02] tracking-[0.01em] text-[#f6f1ea]">
            {title}
          </h1>
          <div className="mt-3 text-[13px] leading-6 text-[#c7c1b8]">{children}</div>
        </div>
      </div>
    </div>
  );
}

async function resolveResult(
  sessionId: string,
  userId: string
): Promise<Result> {
  if (!stripeConfigured()) {
    return {
      kind: "error",
      title: "پرداخت پیکربندی نشده است.",
      body: "این استقرار اطلاعات ورود Stripe ندارد، بنابراین پرداختی انجام نشد و چیزی ثبت نشد.",
    };
  }

  let session: StripeSession;
  try {
    session = await retrieveCheckoutSession(sessionId);
  } catch {
    return {
      kind: "error",
      title: "نتوانستیم این پرداخت را تأیید کنیم.",
      body: "Stripe نشست پرداخت قابل تأییدی برنگرداند. چیزی ثبت نشد. اگر مبلغی از حساب شما کسر شده، این ارجاع صفحه را نگه دارید و پیش از تلاش دوباره با پشتیبانی تماس بگیرید.",
    };
  }

  const templateId = session.metadata?.templateId ?? "";
  const template = await getTemplateById(templateId);
  if (!template) {
    return {
      kind: "error",
      title: "این پرداخت با هیچ قالبی مطابقت ندارد.",
      body: "نشست پرداخت ارجاع معتبری به قالب ندارد. چیزی ثبت نشد.",
    };
  }

  if (
    session.metadata?.userId !== userId ||
    session.client_reference_id !== userId
  ) {
    return {
      kind: "error",
      title: "این پرداخت به حساب شما پیوند ندارد.",
      body: "نشست پرداخت متعلق به حساب دیگری است. با همان حسابی وارد شوید که در پرداخت استفاده کردید، یا با استفاده از ارجاع زیر با پشتیبانی تماس بگیرید.",
    };
  }

  if (session.payment_status !== "paid") {
    return { kind: "pending", template };
  }

  try {
    await recordPurchase({
      userId,
      templateId: template.id,
      amount: session.amount_total ?? Math.round(template.price * 100),
      currency: session.currency ?? "usd",
      stripeSessionId: session.id,
    });
  } catch {
    return {
      kind: "recorded_failed",
      template,
      sessionId: session.id,
    };
  }

  return {
    kind: "success",
    template,
    paid: formatPurchaseAmount(
      session.amount_total ?? Math.round(template.price * 100),
      session.currency ?? "usd"
    ),
  };
}

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId = searchParams.session_id ?? "";
  const user = await getSessionUser();

  if (!user) {
    const next = `/checkout/success${sessionId ? `?session_id=${encodeURIComponent(sessionId)}` : ""}`;
    redirect(`/login?next=${encodeURIComponent(next)}`);
  }

  const result: Result = sessionId
    ? await resolveResult(sessionId, user.id)
    : {
        kind: "error",
        title: "هیچ نشست پرداختی ارائه نشده است.",
        body: "این صفحه یک پرداخت واقعی Stripe را تأیید می‌کند. آن را از تغییرمسیر Stripe باز کنید یا پرداخت را از یک قالب آغاز کنید.",
      };

  return (
    <>
      <SiteHeader />
      <main className="px-6 pb-24 pt-32 lg:px-10">
        <div className="mx-auto max-w-[820px]">
          {result.kind === "success" ? (
            <>
              <Panel
                tone="success"
                icon={<CheckCircle2 className="h-6 w-6" aria-hidden />}
                title="پرداخت تأیید شد."
              >
                <p>
                  {result.template.title} با مبلغ {result.paid} به حساب شما
                  اضافه شد. خرید با Stripe تأیید شده است.
                </p>
              </Panel>
              <div className="mt-6 rounded-lg border border-white/[0.08] bg-[#0b0d11] p-6 sm:p-8">
                <p className="text-[13px] tracking-[0.16em] text-[#8a847c]">
                  قالب {CATEGORY_LABELS[result.template.category]}
                </p>
                <h2 className="mt-2 font-display text-[28px] tracking-[0.01em] text-[#f6f1ea]">
                  {result.template.title}
                </h2>
                <p className="mt-3 max-w-lg text-[13px] leading-6 text-[#a7a198]">
                  {result.template.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/account"
                    className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#f4efe6] px-4 py-2.5 text-[12px] font-medium text-[#111] hover:bg-white"
                  >
                    باز کردن داشبورد
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                  {getSitePreviewRoute(result.template.id) ? (
                    <Link
                      href={getSitePreviewRoute(result.template.id)!}
                      className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/15 px-4 py-2.5 text-[12px] text-[#f6f1ea] hover:border-white/30"
                    >
                      دیدن وب‌سایت
                    </Link>
                  ) : null}
                </div>
                <p className="mt-5 text-[13px] leading-5 text-[#6f6a62]">
                  این نسخهٔ نمایشی فایل‌های منبع را به‌صورت خودکار تحویل نمی‌دهد.
                  حساب شما خرید را برای پیگیری ثبت می‌کند.
                </p>
              </div>
            </>
          ) : null}

          {result.kind === "pending" ? (
            <>
              <Panel
                tone="pending"
                icon={<Clock className="h-6 w-6" aria-hidden />}
                title="پرداخت هنوز در حال پردازش است."
              >
                <p>
                  Stripe هنوز این پرداخت را تأیید نکرده است. هیچ خریدی ثبت نشده.
                  کمی بعد حساب خود را بررسی کنید — پرداخت کامل معمولاً در عرض یک
                  دقیقه به‌صورت خودکار نمایش داده می‌شود.
                </p>
              </Panel>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/account"
                  className="inline-flex min-h-11 items-center rounded-sm bg-[#f4efe6] px-4 py-2.5 text-[12px] font-medium text-[#111] hover:bg-white"
                >
                  بررسی حساب
                </Link>
                <Link
                  href="/templates"
                  className="inline-flex min-h-11 items-center rounded-sm border border-white/15 px-4 py-2.5 text-[12px] text-[#f6f1ea] hover:border-white/30"
                >
                  بازگشت به قالب‌ها
                </Link>
              </div>
            </>
          ) : null}

          {result.kind === "error" ? (
            <>
              <Panel
                tone="error"
                icon={<AlertTriangle className="h-6 w-6" aria-hidden />}
                title={result.title}
              >
                <p>{result.body}</p>
                <p className="mt-3 text-[13px] text-[#8a847c]">
                  ارجاع نشست پرداخت:{" "}
                  <span dir="ltr" className="font-mono text-[#c7c1b8]">
                    {sessionId || "none provided"}
                  </span>
                </p>
              </Panel>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/account"
                  className="inline-flex min-h-11 items-center rounded-sm bg-[#f4efe6] px-4 py-2.5 text-[12px] font-medium text-[#111] hover:bg-white"
                >
                  باز کردن حساب
                </Link>
                <Link
                  href="/templates"
                  className="inline-flex min-h-11 items-center rounded-sm border border-white/15 px-4 py-2.5 text-[12px] text-[#f6f1ea] hover:border-white/30"
                >
                  بازگشت به قالب‌ها
                </Link>
              </div>
            </>
          ) : null}

          {result.kind === "recorded_failed" ? (
            <>
              <Panel
                tone="error"
                icon={<AlertTriangle className="h-6 w-6" aria-hidden />}
                title="پرداخت شد، اما هنوز به حساب شما اضافه نشده است."
              >
                <p>
                  Stripe پرداخت {result.template.title} را تأیید کرد، اما این
                  استقرار نتوانست رکورد خرید را بنویسد. چیزی پنهان نشده است:
                  ارجاع پرداخت شما در زیر آمده. دوباره پرداخت نکنید.
                </p>
                <p dir="ltr" className="mt-3 font-mono text-[13px] text-[#f6f1ea]">
                  {result.sessionId}
                </p>
              </Panel>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/account"
                  className="inline-flex min-h-11 items-center rounded-sm bg-[#f4efe6] px-4 py-2.5 text-[12px] font-medium text-[#111] hover:bg-white"
                >
                  بررسی حساب
                </Link>
                <Link
                  href="/legal"
                  className="inline-flex min-h-11 items-center rounded-sm border border-white/15 px-4 py-2.5 text-[12px] text-[#f6f1ea] hover:border-white/30"
                >
                  سیاست پرداخت
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
