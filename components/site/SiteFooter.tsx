import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_LABELS, TEMPLATE_CATEGORIES } from "@/types/template";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 pb-8 pt-16 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-3">
              <span className="font-display text-[32px] tracking-[-0.05em] text-[#f6f1ea]">
                Web3ite
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8a847c]">
                3D website studio
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-[#9a958c]">
              Industry-specific 3D websites, built as inspectable products. Choose a room,
              tune the details, launch when the fit is right.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b7c7a8]" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#8a847c]">
                Catalog open · studio in preview
              </span>
            </div>
          </div>

          <div>
            <p className="eyebrow text-[#8a847c]">Catalog</p>
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
            <p className="eyebrow text-[#8a847c]">Platform</p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link
                  href="/templates"
                  className="text-[13px] text-[#b8b3aa] transition-colors hover:text-[#f6f1ea]"
                >
                  All templates
                </Link>
              </li>
              <li>
                <Link
                  href="/#studio"
                  className="text-[13px] text-[#b8b3aa] transition-colors hover:text-[#f6f1ea]"
                >
                  How the studio works
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-[13px] text-[#b8b3aa] transition-colors hover:text-[#f6f1ea]"
                >
                  Demo & age policy
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/alishojaeix/web3ite"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] text-[#b8b3aa] transition-colors hover:text-[#f6f1ea]"
                >
                  Source
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-white/[0.07] bg-white/[0.02] p-5">
            <p className="eyebrow text-[#8a847c]">Launch access</p>
            <p className="mt-4 text-[14px] leading-relaxed text-[#b8b3aa]">
              The studio is being prepared for production. Join the launch list to
              receive the first open slots.
            </p>
            <Link
              href="/#waitlist"
              className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#d4af7a] hover:text-[#f0d9a8]"
            >
              Join the list
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 hairline" />

        <div className="mt-6 flex flex-col gap-3 text-[11px] leading-relaxed text-[#6d6860] md:flex-row md:items-start md:justify-between">
          <p>© 2026 Web3ite. Demo catalog. Checkout runs only with payment configuration.</p>
          <p className="max-w-xl md:text-right">
            Tobacco-related templates are fictional, adult-only design demonstrations.
            Operators are responsible for local age restrictions, advertising rules and
            required health warnings.
          </p>
        </div>
      </div>
    </footer>
  );
}
