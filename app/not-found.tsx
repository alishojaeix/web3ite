import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { fa } from "@/lib/i18n/fa";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[78vh] items-center px-6 pb-20 pt-32 lg:px-10">
        <div className="mx-auto w-full max-w-[1440px]">
          <p className="eyebrow flex items-center gap-3 text-[#8a847c]">
            <span className="h-px w-8 bg-[#d4af7a]/60" />
            خطای ۴۰۴
          </p>
          <h1 className="display-face mt-7 max-w-[16ch] text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-[#f6f1ea]">
            {fa.errors.notFoundTitle}
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[#a7a198]">
            {fa.errors.notFoundBody}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/templates"
              className="inline-flex min-h-12 items-center gap-2 rounded-sm bg-[#f4efe6] px-5 py-3 text-[13px] font-medium text-[#111] transition-colors hover:bg-white"
            >
              بازگشت به کاتالوگ
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center gap-2 rounded-sm border border-white/15 px-5 py-3 text-[13px] text-[#f6f1ea] transition-colors hover:border-white/30"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              خانه
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
