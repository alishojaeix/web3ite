import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_DESCRIPTIONS, CATEGORY_LABELS, TEMPLATE_CATEGORIES } from "@/types/template";
import type { Template } from "@/types/template";
import { faNumber } from "@/lib/i18n/format";

export function IndustryRail({ templates }: { templates: Template[] }) {
  return (
    <section id="industries" className="px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow flex items-center gap-3 text-[#8a847c]">
              <span className="h-px w-8 bg-[#d4af7a]/60" />
              صنایع
            </p>
            <h2 className="display-face mt-6 text-[clamp(2.4rem,4.4vw,4rem)] leading-[0.98] text-[#f6f1ea]">
              اتاقی برای
              <span className="editorial-face ms-3 text-[#e4c69c]">کسب‌وکار</span>
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-[#8f8a81]">
            هر صنعت زبان مادی خودش را دارد، نه یک قالب کافه با رنگ عوض‌شده.
            از اتاقی شروع کنید که با کار شما جور است.
          </p>
        </div>

        <div className="mt-12 border-t border-white/[0.08]">
          {TEMPLATE_CATEGORIES.map((category) => {
            const inCategory = templates.filter((template) => template.category === category);
            const accent = inCategory[0]?.theme.accent ?? "#d4af7a";
            return (
              <Link
                key={category}
                href={`/templates?category=${category}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-white/[0.08] py-5 transition-colors hover:bg-white/[0.018] md:grid-cols-[5rem_1fr_0.9fr_auto] md:gap-8 md:py-6"
              >
                <span className="text-[13px] tracking-[0.18em] text-[#6f6a62]">
                  {faNumber(TEMPLATE_CATEGORIES.indexOf(category) + 1, {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </span>
                <span className="flex items-center gap-3">
                  <span
                    className="h-1.5 w-1.5 rounded-full opacity-80"
                    style={{ backgroundColor: accent }}
                  />
                  <span className="font-display text-[22px] tracking-[0.01em] text-[#f6f1ea] transition-transform duration-300 group-hover:-translate-x-1 md:text-[26px]">
                    {CATEGORY_LABELS[category]}
                  </span>
                </span>
                <span className="hidden text-[13px] leading-relaxed text-[#8f8a81] md:block">
                  {CATEGORY_DESCRIPTIONS[category]}
                </span>
                <span className="flex items-center gap-3 text-[13px] tracking-[0.16em] text-[#7f7a72]">
                  {inCategory.length > 0
                    ? `${faNumber(inCategory.length)} اتاق`
                    : "به‌زودی"}
                  <ArrowUpRight className="h-4 w-4 text-[#d4af7a] transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
