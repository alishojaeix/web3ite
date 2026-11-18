import { CATEGORY_LABELS } from "@/types/template";
import type { Template } from "@/types/template";
import { faCurrency } from "@/lib/i18n/format";

export function StudioPanel({ template }: { template: Template }) {
  return (
    <div>
      <p className="mt-6 text-[13px] tracking-[0.18em] text-[#d4af7a]">
        {CATEGORY_LABELS[template.category]}
      </p>
      <h1 className="mt-2 font-display text-[40px] leading-none tracking-[0.01em] text-[#f6f1ea]">
        {template.title}
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-[#b8b3aa]">
        {template.description}
      </p>
      <p className="mt-6 flex items-baseline gap-3 font-display text-[28px] text-[#f0d9a8]">
        {faCurrency(template.price)}
        {template.isDemo ? (
          <span className="text-[13px] tracking-[0.16em] text-[#8a847c]">
            قالب نمایشی
          </span>
        ) : null}
      </p>

      {template.ageRestricted && template.healthWarning ? (
        <div
          className="mt-6 rounded-sm border border-[#d4af7a]/25 bg-[#d4af7a]/[0.06] p-4"
          role="note"
        >
          <p className="text-[13px] tracking-[0.16em] text-[#f0d9a8]">
            ۱۸+ · هشدار سلامت
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-[#b8b3aa]">
            {template.healthWarning}
          </p>
        </div>
      ) : null}

      {template.features.length > 0 ? (
        <ul className="mt-8 flex flex-wrap gap-2">
          {template.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-[#9a958c]"
            >
              {feature}
            </li>
          ))}
        </ul>
      ) : null}

      {template.content.specs.length > 0 ? (
        <dl className="mt-8 border-t border-white/[0.08]">
          {template.content.specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-center justify-between gap-4 border-b border-white/[0.08] py-2.5"
            >
              <dt className="text-[13px] tracking-[0.14em] text-[#6f6a62]">
                {spec.label}
              </dt>
              <dd className="text-end text-[13px] text-[#b8b3aa]">{spec.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {template.technologies.length > 0 ? (
        <div className="mt-8">
          <p className="text-[13px] tracking-[0.16em] text-[#6f6a62]">
            ساخته‌شده با
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {template.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-white/[0.06] px-2.5 py-1 text-[13px] text-[#8f8a81]"
                dir="ltr"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
