import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowUpRight, CreditCard, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LogoutButton } from "@/components/auth/LogoutButton";
import { getSessionUser } from "@/lib/server/auth";
import {
  formatPurchaseAmount,
  listPurchasesForUser,
  type PurchaseRecord,
} from "@/lib/server/purchases";
import { stripeConfigured } from "@/lib/server/stripe";
import { getTemplateById } from "@/lib/templates";
import { CATEGORY_LABELS } from "@/types/template";
import { fa } from "@/lib/i18n/fa";
import { faDate, faNumber } from "@/lib/i18n/format";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "حساب شما",
  description: "حساب نمایشی Web3ite و قالب‌های خریداری‌شدهٔ شما.",
  robots: { index: false, follow: false },
};

type PurchaseView = PurchaseRecord & { templateTitle: string; category: string };

export default async function AccountPage() {
  const user = await getSessionUser();
  if (!user) redirect("/login?next=/account");

  let purchases: PurchaseView[] = [];
  let storeError = "";
  try {
    const records = await listPurchasesForUser(user.id);
    purchases = (
      await Promise.all(
        records.map(async (record) => {
          const template = await getTemplateById(record.templateId);
          if (!template) return null;
          return {
            ...record,
            templateTitle: template.title,
            category: CATEGORY_LABELS[template.category],
          };
        })
      )
    ).filter((record): record is PurchaseView => Boolean(record));
  } catch {
    storeError = "تاریخچهٔ خرید موقتاً در دسترس نیست.";
  }

  const memberSince = faDate(user.createdAt);

  return (
    <>
      <SiteHeader />
      <main className="px-6 pb-24 pt-32 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 border-b border-white/[0.08] pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow flex items-center gap-3 text-[#8a847c]">
                <span className="h-px w-8 bg-[#d4af7a]/60" />
                حساب عضو
              </p>
              <h1 className="display-face mt-5 text-[clamp(2.6rem,5vw,4.2rem)] leading-[0.95] text-[#f6f1ea]">
                حساب شما
              </h1>
              <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-[#a7a198]">
                <span dir="ltr">{user.email}</span>
                <span>· عضو از {memberSince}</span>
              </p>
            </div>
            <LogoutButton />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
            <section aria-labelledby="purchases-title">
              <div className="flex items-center justify-between gap-4">
                <h2
                  id="purchases-title"
                  className="font-display text-[24px] tracking-[0.01em] text-[#f6f1ea]"
                >
                  خریدها
                </h2>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[13px] tracking-[0.16em] text-[#8a847c]">
                  {faNumber(purchases.length)} قالب
                </span>
              </div>

              {storeError ? (
                <p
                  role="alert"
                  className="mt-5 rounded-sm border border-[#ef4444]/25 bg-[#ef4444]/10 px-4 py-3 text-[12px] text-[#f2b6b0]"
                >
                  {storeError}
                </p>
              ) : null}

              {purchases.length === 0 ? (
                <div className="mt-5 rounded-lg border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
                  <p className="font-display text-[22px] tracking-[0.01em] text-[#f6f1ea]">
                    هنوز خریدی ثبت نشده است.
                  </p>
                  <p className="mt-2 max-w-md text-[13px] leading-6 text-[#a7a198]">
                    یک قالب انتخاب کنید، وب‌سایتش را ببینید و بعد پرداخت را کامل
                    کنید. پرداخت تأییدشده به این حساب پیوند داده می‌شود و همین‌جا
                    نمایش داده خواهد شد.
                  </p>
                  <Link
                    href="/templates"
                    className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#f4efe6] px-4 py-2.5 text-[12px] font-medium text-[#111] hover:bg-white"
                  >
                    دیدن کاتالوگ
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
              ) : (
                <ul className="mt-5 space-y-3">
                  {purchases.map((purchase) => (
                    <li
                      key={purchase.id}
                      className="rounded-lg border border-white/[0.08] bg-[#0b0d11] p-5"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="text-[12px] tracking-[0.16em] text-[#8a847c]">
                            {purchase.category}
                          </p>
                          <p className="mt-1 font-display text-[22px] tracking-[0.01em] text-[#f6f1ea]">
                            {purchase.templateTitle}
                          </p>
                          <p className="mt-2 text-[13px] text-[#8a847c]">
                            پرداخت‌شده {formatPurchaseAmount(purchase.amount, purchase.currency)} ·{" "}
                            {faDate(purchase.createdAt)}
                          </p>
                        </div>
                        <span className="rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-3 py-1 text-[12px] tracking-[0.16em] text-[#7dd8b4]">
                          پرداخت‌شده
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-4 border-t border-white/[0.06] pt-4 text-[13px] tracking-[0.15em]">
                        <Link
                          href={`/sites/${purchase.templateId}`}
                          className="text-[#d4af7a] hover:text-[#f0d9a8]"
                        >
                          باز کردن وب‌سایت
                        </Link>
                        <Link
                          href={`/templates/${purchase.templateId}`}
                          className="text-[#8a847c] hover:text-[#f6f1ea]"
                        >
                          جزئیات قالب
                        </Link>
                        <span className="ms-auto text-[#5f5b54]" dir="ltr">
                          Ref {purchase.stripeSessionId.slice(-10)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <aside className="space-y-4">
              <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 text-[#f0d9a8]">
                  <ShieldCheck className="h-4 w-4" aria-hidden />
                  <p className="text-[13px] tracking-[0.16em]">نشست</p>
                </div>
                <p className="mt-3 text-[12px] leading-6 text-[#a7a198]">
                  ورود با کوکی امضاشده و HttpOnly انجام شده است. گذرواژه‌ها به
                  صورت هش scrypt ذخیره می‌شوند، هرگز به شکل متن ساده.
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5">
                <div className="flex items-center gap-2 text-[#f0d9a8]">
                  <CreditCard className="h-4 w-4" aria-hidden />
                  <p className="text-[13px] tracking-[0.16em]">پرداخت‌ها</p>
                </div>
                <p className="mt-3 text-[12px] leading-6 text-[#a7a198]">
                  {stripeConfigured()
                    ? "پرداخت Stripe پیکربندی شده است. خریدها پیش از نمایش در این صفحه با Stripe تأیید می‌شوند."
                    : "پرداخت در این استقرار پیکربندی نشده است. تکمیل خرید غیرفعال است و مبلغی دریافت نمی‌شود."}
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5">
                <p className="text-[13px] tracking-[0.16em] text-[#8a847c]">
                  تأیید سن
                </p>
                <p className="mt-3 text-[12px] leading-6 text-[#a7a198]">
                  نمایش‌های توتون مخصوص بزرگسالان به تأیید جداگانهٔ ۱۸+ نیاز دارند.
                  تأیید شما روی این دستگاه ۳۰ روز معتبر است.
                </p>
                <Link
                  href="/legal"
                  className="mt-3 inline-block text-[13px] tracking-[0.15em] text-[#d4af7a] hover:text-[#f0d9a8]"
                >
                  خواندن سیاست
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
