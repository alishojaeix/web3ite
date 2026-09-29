import { CATEGORY_LABELS } from "@/types/template";
import type { Template } from "@/types/template";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function StudioPanel({ template }: { template: Template }) {
  return (
    <div>
      <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-[#d4af7a]">
        {CATEGORY_LABELS[template.category]}
      </p>
      <h1 className="mt-2 font-display text-[40px] leading-none tracking-[-0.04em] text-[#f6f1ea]">
        {template.title}
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-[#b8b3aa]">
        {template.description}
      </p>
      <p className="mt-6 font-display text-[28px] text-[#f0d9a8]">
        {formatPrice(template.price)}
      </p>

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
    </div>
  );
}
