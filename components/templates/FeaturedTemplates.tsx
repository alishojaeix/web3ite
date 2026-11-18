import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Template } from "@/types/template";
import { TemplateCard } from "./TemplateCard";
import { faNumber } from "@/lib/i18n/format";

export function FeaturedTemplates({
  templates,
  total = templates.length,
  ownedIds = [],
}: {
  templates: Template[];
  total?: number;
  /** Template ids the signed-in visitor already owns. */
  ownedIds?: string[];
}) {
  const visible = templates.slice(0, 12);
  const owned = new Set(ownedIds);

  return (
    <section id="templates" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <div>
            <p className="eyebrow flex items-center gap-3 text-[#8a847c]">
              <span className="h-px w-8 bg-[#d4af7a]/60" />
              اتاق‌های منتخب
            </p>
            <h2 className="display-face mt-6 max-w-[13ch] text-balance text-[clamp(2.7rem,5.4vw,5rem)] leading-[0.95] text-[#f6f1ea]">
              کاتالوگی که می‌توانید
              <span className="editorial-face ms-3 text-[#e4c69c]">بررسی کنید</span>
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:pb-1">
            <p className="max-w-md text-[15px] leading-relaxed text-[#a7a198]">
              هر مدخل یک وب‌سایت کامل و مستقل با هویت، محتوا و تصاویر خودش است.
              وب‌سایت زنده را باز کنید یا وارد استودیو شوید تا صحنهٔ سه‌بعدی آن را
              بررسی کنید.
            </p>
            <Link
              href="/templates"
              className="group inline-flex w-fit items-center gap-2 text-[13px] tracking-[0.18em] text-[#d4af7a] transition-colors hover:text-[#f0d9a8]"
            >
              دیدن همهٔ {faNumber(total)} قالب
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visible.map((template, index) => (
            <TemplateCard
              key={template.id}
              template={template}
              index={index}
              owned={owned.has(template.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
