"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Template, TemplateCategory } from "@/types/template";
import { CATEGORY_LABELS, TEMPLATE_CATEGORIES } from "@/types/template";
import { TemplateCard } from "./TemplateCard";

export function FeaturedTemplates({ templates }: { templates: Template[] }) {
  const [active, setActive] = useState<TemplateCategory | "all">("all");

  const visible = useMemo(() => {
    if (active === "all") return templates;
    return templates.filter((t) => t.category === active);
  }, [active, templates]);

  return (
    <section id="templates" className="relative px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-[40px] leading-[1.05] tracking-[-0.035em] text-[#f6f1ea] md:text-[52px]">
              Featured templates
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[#b8b3aa]">
              Each one is a 3D product. Hover to inspect. Drop a GLB later — the card does not change.
            </p>
          </div>
          <Link
            href="/templates"
            className="self-start text-[13px] uppercase tracking-[0.16em] text-[#d4af7a] hover:text-[#f0d9a8]"
          >
            Open the full floor
          </Link>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          <FilterChip active={active === "all"} onClick={() => setActive("all")}>
            All
          </FilterChip>
          {TEMPLATE_CATEGORIES.map((id) => (
            <FilterChip key={id} active={active === id} onClick={() => setActive(id)}>
              {CATEGORY_LABELS[id]}
            </FilterChip>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-16 text-[#8a847c]">No templates in this category yet.</p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {visible.map((template, index) => (
              <TemplateCard key={template.id} template={template} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border px-4 py-2 text-[12px] uppercase tracking-[0.14em] transition-colors ${
        active
          ? "border-[#d4af7a]/50 bg-[#d4af7a]/15 text-[#f0d9a8]"
          : "border-white/10 bg-white/[0.03] text-[#9a958c] hover:border-white/20 hover:text-[#e8e4dc]"
      }`}
    >
      {children}
    </button>
  );
}
