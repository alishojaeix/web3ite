import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, CreditCard, LockKeyhole } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CheckoutButton } from "@/components/checkout/CheckoutButton";
import { PurchaseTerms } from "@/components/checkout/PurchaseTerms";
import { getSessionUser } from "@/lib/server/auth";
import { hasPurchased } from "@/lib/server/purchases";
import { stripeConfigured } from "@/lib/server/stripe";
import { getTemplateById } from "@/lib/templates";
import { getSitePreviewRoute } from "@/lib/templates/sitePreviewRoutes";
import { CATEGORY_LABELS } from "@/types/template";
import { faCurrency } from "@/lib/i18n/format";
import { fa } from "@/lib/i18n/fa";

type PageProps = {
  params: { id: string };
  searchParams: { canceled?: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const template = await getTemplateById(params.id);
  return {
    title: template ? `تکمیل خرید — ${template.title}` : "تکمیل خرید",
    robots: { index: false, follow: false },
  };
}

export default async function CheckoutPage({ params, searchParams }: PageProps) {
  const template = await getTemplateById(params.id);
  if (!template) notFound();

  const user = await getSessionUser();
  if (!user) {
    redirect(`/login?next=${encodeURIComponent(`/checkout/${template.id}`)}`);
  }

  let owned = false;
  let storeError = "";
  try {
    owned = await hasPurchased(user.id, template.id);
  } catch {
    storeError = "انبار خرید در دسترس نیست، بنابراین پرداخت آماده نمی‌شود.";
  }

  const configured = stripeConfigured();
  const siteRoute = getSitePreviewRoute(template.id);
  const price = faCurrency(template.price);

  return (
    <>
      <SiteHeader />
      <main className="px-6 pb-24 pt-32 lg:px-10">
        <div className="mx-auto max-w-[1180px]">
          <Link
            href={`/templates/${template.id}`}
            className="inline-flex min-h-11 items-center gap-2 text-[13px] tracking-[0.18em] text-[#8a847c] transition-colors hover:text-[#f0d9a8]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            بازگشت به {template.title}
          </Link>

          <div className="mt-7">
            <p className="eyebrow flex items-center gap-3 text-[#8a847c]">
              <span className="h-px w-8 bg-[#d4af7a]/60" />
              تکمیل خرید
            </p>
            <h1 className="display-face mt-5 max-w-[18ch] text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.94] text-[#f6f1ea]">
              یک قالب. یک مجوز.
            </h1>
            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#a7a198]">
              خرید را بررسی کنید و شرایط را بپذیرید. پرداخت آنلاین در این نسخه از
              سایت فعال نیست؛ هیچ مبلغی در این صفحه دریافت نمی‌شود.
            </p>
          </div>

          {searchParams.canceled === "1" ? (
            <div
              role="status"
              className="mt-7 rounded-sm border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-4 py-3 text-[12px] leading-6 text-[#f3d19a]"
            >
              پرداخت لغو شد. مبلغی دریافت نشد و چیزی به حساب شما اضافه نشد.
            </div>
          ) : null}

          {storeError ? (
            <div
              role="alert"
              className="mt-7 rounded-sm border border-[#ef4444]/25 bg-[#ef4444]/10 px-4 py-3 text-[12px] leading-6 text-[#f2b6b0]"
            >
              {storeError}
            </div>
          ) : null}

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <section className="rounded-lg border border-white/[0.08] bg-[#0b0d11]/70 p-6 sm:p-8">
              <p className="text-[13px] tracking-[0.16em] text-[#8a847c]">
                قالب {CATEGORY_LABELS[template.category]}
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] tracking-[0.01em] text-[#f6f1ea]">
                {template.title}
              </h2>
              <p className="mt-3 max-w-xl text-[14px] leading-7 text-[#a7a198]">
                {template.description}
              </p>

              <div className="mt-7 grid gap-6 border-t border-white/[0.07] pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-[13px] tracking-[0.16em] text-[#8a847c]">
                    شامل
                  </p>
                  <ul className="mt-3 space-y-2">
                    {template.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[12px] leading-5 text-[#b8b3aa]"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d4af7a]" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[13px] tracking-[0.16em] text-[#8a847c]">
                    ساخته‌شده با
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {template.technologies.map((technology) => (
                      <span
                        key={technology}
                        dir="ltr"
                        className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[13px] text-[#8f8a81]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {siteRoute ? (
                <Link
                  href={siteRoute}
                  className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-[#d4af7a]/40 pb-1 text-[13px] tracking-[0.16em] text-[#f0d9a8] hover:border-[#f0d9a8]"
                >
                  دیدن دوبارهٔ وب‌سایت زنده
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              ) : null}

              {template.ageRestricted ? (
                <p className="mt-6 rounded-sm border border-white/[0.08] bg-white/[0.02] p-4 text-[13px] leading-5 text-[#8a847c]">
                  این یک نمایش طراحی مخصوص بزرگسالان است. خرید مربوط به قالب
                  وب‌سایت است، نه هیچ محصول توتونی. {template.healthWarning}
                </p>
              ) : null}

              <div className="mt-8 border-t border-white/[0.07] pt-6">
                <p className="text-[13px] tracking-[0.16em] text-[#8a847c]">
                  {fa.checkout.sections.customer}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[13px] text-[#e8e4dc]">
                    {fa.checkout.customer.signedInAs}{" "}
                    <span dir="ltr" className="text-[#f0d9a8]">
                      {user.email}
                    </span>
                  </p>
                  <Link
                    href="/account"
                    className="inline-flex min-h-11 items-center gap-1.5 text-[13px] text-[#d4af7a] hover:text-[#f0d9a8]"
                  >
                    {fa.checkout.customer.manageAccount}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
                <p className="mt-2 text-[13px] leading-6 text-[#8a847c]">
                  {fa.checkout.customer.accountNote}
                </p>
              </div>

              <div className="mt-8">
                <PurchaseTerms
                  gatewayConfigured={configured}
                  templateId={template.id}
                  owned={owned}
                />
              </div>
            </section>

            <aside className="rounded-lg border border-white/[0.1] bg-[#0b0d11] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] lg:sticky lg:top-32">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[13px] tracking-[0.16em] text-[#8a847c]">
                  خلاصهٔ سفارش
                </p>
                <CreditCard className="h-4 w-4 text-[#8a847c]" aria-hidden />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-[18px] tracking-[0.01em] text-[#f6f1ea]">
                    {template.title}
                  </p>
                  <p className="mt-1 text-[13px] text-[#8a847c]">
                    مجوز یک‌باره · یک پروژه
                  </p>
                </div>
                <p className="font-display text-[18px] text-[#f0d9a8]">{price}</p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-5 text-[12px] text-[#b8b3aa]">
                <span>مبلغ قابل پرداخت امروز</span>
                <span className="font-display text-[24px] tracking-[0.01em] text-[#f6f1ea]">
                  {price}
                </span>
              </div>

              <div className="mt-5 rounded-sm border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-[13px] leading-5 text-[#8a847c]">
                صادرشده برای <span dir="ltr" className="text-[#e8e4dc]">{user.email}</span>
              </div>

              <div className="mt-5">
                {owned ? (
                  <div className="space-y-3">
                    <p className="rounded-sm border border-[#10b981]/25 bg-[#10b981]/10 px-4 py-3 text-[12px] text-[#7dd8b4]">
                      این قالب از قبل در حساب شماست.
                    </p>
                    <Link
                      href="/account"
                      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm border border-white/15 px-4 py-2.5 text-[12px] text-[#f6f1ea] hover:border-white/30"
                    >
                      باز کردن داشبورد
                    </Link>
                  </div>
                ) : storeError ? (
                  <p className="rounded-sm border border-[#ef4444]/25 bg-[#ef4444]/10 px-4 py-3 text-[12px] leading-6 text-[#f2b6b0]">
                    تکمیل خرید تا پیکربندی انبار خرید در دسترس نیست.
                  </p>
                ) : configured ? (
                  <CheckoutButton templateId={template.id} />
                ) : (
                  <div>
                    <button
                      type="button"
                      disabled
                      className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-sm border border-white/10 bg-white/[0.04] px-5 py-3 text-[13px] font-medium text-[#6f6a62]"
                    >
                      <LockKeyhole className="h-4 w-4" aria-hidden />
                      {fa.checkout.purchase.gatewayUnavailable}
                    </button>
                    <p className="mt-3 text-[13px] leading-5 text-[#f3d19a]">
                      {fa.checkout.purchase.gatewayBody}
                    </p>
                    <Link
                      href="/#waitlist"
                      className="mt-4 inline-flex min-h-11 items-center gap-2 text-[13px] tracking-[0.16em] text-[#d4af7a] hover:text-[#f0d9a8]"
                    >
                      پیوستن به فهرست راه‌اندازی
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                )}
              </div>

              <p className="mt-5 text-[13px] leading-5 text-[#6f6a62]">
                با ادامه،{" "}
                <Link href="/legal" className="underline decoration-white/20 underline-offset-2 hover:text-[#f0d9a8]">
                  مجوز نمایشی و سیاست سنی
                </Link>{" "}
                را می‌پذیرید. خرید فقط پس از تأیید پرداخت واقعی ثبت می‌شود؛ در
                وضعیت فعلی هیچ پرداختی انجام یا شبیه‌سازی نمی‌شود.
              </p>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
