import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_LABELS, TEMPLATE_CATEGORIES } from "@/types/template";
import { fa } from "@/lib/i18n/fa";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 pb-8 pt-16 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-3">
              <span className="font-display text-[32px] tracking-[0.01em] text-[#f6f1ea]">
                Web3ite
              </span>
              <span className="text-[13px] tracking-[0.2em] text-[#8a847c]">
                {fa.brand.studio}
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-[#9a958c]">
              {fa.footer.body}
            </p>
            <div className="mt-7 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b7c7a8]" />
              <span className="text-[13px] text-[#8a847c]">
                {fa.footer.status}
              </span>
            </div>
          </div>

          <div>
            <p className="eyebrow text-[#8a847c]">{fa.footer.catalog}</p>
            <ul className="mt-5 space-y-2.5">
              {TEMPLATE_CATEGORIES.map((category) => (
                <li key={category}>
                  <Link
                    href={`/templates?category=${category}`}
                    className="text-[13px] text-[#b8b3aa] transition-colors hover:text-[#f6f1ea]"
                  >
                    {CATEGORY_LABELS[category]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[#8a847c]">{fa.footer.platform}</p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link
                  href="/templates"
                  className="text-[13px] text-[#b8b3aa] transition-colors hover:text-[#f6f1ea]"
                >
                  {fa.footer.allTemplates}
                </Link>
              </li>
              <li>
                <Link
                  href="/#studio"
                  className="text-[13px] text-[#b8b3aa] transition-colors hover:text-[#f6f1ea]"
                >
                  {fa.footer.howStudioWorks}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-[13px] text-[#b8b3aa] transition-colors hover:text-[#f6f1ea]"
                >
                  {fa.footer.demoPolicy}
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/alishojaeix/web3ite"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] text-[#b8b3aa] transition-colors hover:text-[#f6f1ea]"
                >
                  {fa.footer.source}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-5">
            <p className="eyebrow text-[#8a847c]">{fa.footer.launchAccess}</p>
            <p className="mt-4 text-[14px] leading-relaxed text-[#b8b3aa]">
              {fa.footer.launchBody}
            </p>
            <Link
              href="/#waitlist"
              className="mt-5 inline-flex items-center gap-2 text-[12px] text-[#d4af7a] hover:text-[#f0d9a8]"
            >
              {fa.footer.joinList}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 hairline" />

        <div className="mt-6 flex flex-col gap-3 text-[13px] leading-relaxed text-[#6d6860] md:flex-row md:items-start md:justify-between">
          <p>{fa.footer.copyright}</p>
          <p className="max-w-xl md:text-end">{fa.footer.tobacco}</p>
        </div>
      </div>
    </footer>
  );
}
