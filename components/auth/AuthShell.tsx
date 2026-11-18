import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { fa } from "@/lib/i18n/fa";

export function AuthShell({
  title,
  intro,
  children,
  footer,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="px-6 pb-24 pt-32 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1080px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <Link
              href="/templates"
              className="inline-flex min-h-11 items-center gap-2 text-[13px] tracking-[0.18em] text-[#8a847c] transition-colors hover:text-[#f0d9a8]"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              {fa.auth.backToCatalog}
            </Link>
            <p className="eyebrow mt-8 flex items-center gap-3 text-[#8a847c]">
              <span className="h-px w-8 bg-[#d4af7a]/60" />
              عضویت
            </p>
            <h1 className="display-face mt-6 max-w-[12ch] text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.94] text-[#f6f1ea]">
              {title}
            </h1>
            <p className="mt-5 max-w-md text-[14px] leading-7 text-[#a7a198]">{intro}</p>
            <div className="mt-8 rounded-lg border border-white/[0.07] bg-white/[0.02] p-5 text-[13px] leading-6 text-[#8a847c]">
              حساب‌ها در همین استقرار نمایشی ذخیره می‌شوند. از یک گذرواژهٔ
              نمایشی استفاده کنید، نه گذرواژه‌ای که جای دیگری به کار می‌برید.
              پرداخت فقط زمانی فعال می‌شود که Stripe پیکربندی شده باشد.
            </div>
          </div>

          <div className="rounded-lg border border-white/[0.08] bg-[#0b0d11]/85 p-6 shadow-[0_32px_80px_rgba(0,0,0,0.35)] sm:p-8">
            {children}
            <div className="mt-6 border-t border-white/[0.07] pt-5 text-[12px] text-[#8a847c]">
              {footer}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
