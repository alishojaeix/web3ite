import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "فقط برای بزرگسالان",
  description:
    "تأیید سن برای نمایش‌های طراحی خیالی توتون در کاتالوگ Web3ite.",
  robots: { index: false, follow: false },
};

const ALLOWED_RETURNS = [
  "/sites/aldane-voss",
  "/sites/cigar-atelier",
  "/sites/modern-tobacco",
  "/previews/aldane-voss",
];

function safeReturn(value: string | undefined): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/templates";
  const path = value.split("?")[0].split("#")[0];
  return ALLOWED_RETURNS.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`)
  )
    ? value
    : "/templates";
}

export default function AgeGatePage({
  searchParams,
}: {
  searchParams: { returnTo?: string; denied?: string };
}) {
  const returnTo = safeReturn(searchParams.returnTo);
  const denied = searchParams.denied === "1";

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-[560px]">
        <Link
          href="/templates"
          className="inline-flex min-h-11 items-center gap-2 text-[13px] tracking-[0.18em] text-[#8a847c] transition-colors hover:text-[#f0d9a8]"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          بازگشت به قالب‌ها
        </Link>

        <div className="mt-8 rounded-lg border border-white/[0.08] bg-[#0b0d11]/85 p-6 shadow-[0_32px_80px_rgba(0,0,0,0.45)] sm:p-9">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#d4af7a]/35 text-[#f0d9a8]">
              <ShieldCheck className="h-5 w-5" aria-hidden />
            </span>
            <p className="text-[13px] tracking-[0.22em] text-[#8a847c]">
              محتوای محدود به سن
            </p>
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.2rem,7vw,3.4rem)] font-light leading-[0.98] tracking-[0.01em] text-[#f6f1ea]">
            فقط برای بزرگسالان
          </h1>
          <p className="mt-5 text-[14px] leading-relaxed text-[#a7a198]">
            وب‌سایت‌های توتون و سیگار برگ در این کاتالوگ، نمایش‌های طراحی خیالی
            برای بزرگسالان هستند. هیچ محصولی برای فروش ندارند و هیچ ادعای سلامتی
            نمی‌کنند.
          </p>

          <div className="mt-6 rounded-sm border border-white/[0.07] bg-white/[0.02] p-4 text-[13px] leading-relaxed text-[#8a847c]">
            مصرف توتون برای سلامت مضر است. بهره‌برداران مسئول رعایت محدودیت‌های
            سنی، قوانین تبلیغات و هشدارهای سلامت لازم در بازار خود هستند.
          </div>

          {denied ? (
            <p
              role="alert"
              className="mt-5 rounded-sm border border-[#ef4444]/25 bg-[#ef4444]/10 px-4 py-3 text-[12px] leading-relaxed text-[#f2b6b0]"
            >
              برای دیدن این محتوا باید ۱۸ سال یا بیشتر باشید. می‌توانید به
              کاتالوگ عمومی بازگردید.
            </p>
          ) : null}

          <form action="/api/age-gate" method="post" className="mt-7">
            <input type="hidden" name="returnTo" value={returnTo} />
            <button
              type="submit"
              name="decision"
              value="adult"
              className="min-h-12 w-full rounded-sm bg-[#f4efe6] px-5 py-3 text-[14px] font-medium text-[#111] transition-colors hover:bg-white"
            >
              ۱۸ سال یا بیشتر هستم — ادامه
            </button>
            <button
              type="submit"
              name="decision"
              value="under"
              className="mt-3 min-h-12 w-full rounded-sm border border-white/15 px-5 py-3 text-[13px] text-[#b8b3aa] transition-colors hover:border-white/30 hover:text-[#f6f1ea]"
            >
              زیر ۱۸ سال هستم — خروج
            </button>
          </form>

          <p className="mt-5 text-[13px] leading-relaxed text-[#6d6860]">
            تأیید به صورت کوکی روی این دستگاه برای ۳۰ روز ذخیره می‌شود.{" "}
            <Link href="/legal" className="underline decoration-white/20 underline-offset-2 hover:text-[#f0d9a8]">
              سیاست نمایشی و سنی
            </Link>{" "}
            را بخوانید.
          </p>
        </div>

        <p className="mt-6 text-center text-[13px] tracking-[0.18em] text-[#4f4b45]">
          Web3ite · نمایش‌های خیالی
        </p>
      </div>
    </main>
  );
}
