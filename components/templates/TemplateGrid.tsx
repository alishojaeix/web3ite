"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { CATEGORY_LABELS, TEMPLATE_CATEGORIES } from "@/types/template";
import type { Template, TemplateCategory } from "@/types/template";
import { TemplateCard } from "./TemplateCard";

export function TemplateGrid({
  templates,
  initialCategory = "all",
}: {
  templates: Template[];
  initialCategory?: TemplateCategory | "all";
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<TemplateCategory | "all">(initialCategory);
  const deferredQuery = useDeferredValue(query);

  const counts = useMemo(() => {
    const result = new Map<TemplateCategory, number>();
    for (const template of templates) {
      result.set(template.category, (result.get(template.category) ?? 0) + 1);
    }
    return result;
  }, [templates]);

  const visible = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase();
    return templates.filter((template) => {
      if (category !== "all" && template.category !== category) return false;
      if (!normalized) return true;
      return (
        template.title.toLowerCase().includes(normalized) ||
        template.description.toLowerCase().includes(normalized) ||
        CATEGORY_LABELS[template.category].toLowerCase().includes(normalized) ||
        template.features.some((feature) => feature.toLowerCase().includes(normalized)) ||
        template.technologies.some((technology) =>
          technology.toLowerCase().includes(normalized)
        )
      );
    });
  }, [templates, deferredQuery, category]);

  return (
    <div>
      <div className="sticky top-[5.25rem] z-30 -mx-2 mb-6 rounded-lg border border-white/[0.07] bg-[#07080b]/82 p-2.5 backdrop-blur-xl">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <label className="relative flex-1">
            <span className="sr-only">Search templates</span>
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6f6a62]" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, industry or capability"
              className="h-11 w-full rounded-sm border border-white/[0.08] bg-black/25 pl-10 pr-10 text-[14px] text-[#f6f1ea] outline-none transition-colors placeholder:text-[#5f5b54] focus:border-[#d4af7a]/45"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-2.5 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-full text-[#8a847c] hover:bg-white/[0.06] hover:text-[#f6f1ea]"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            ) : null}
          </label>

          <div className="flex items-center gap-2 overflow-x-auto pb-0.5">
            <span className="hidden items-center gap-1.5 pl-1 pr-2 text-[10px] uppercase tracking-[0.16em] text-[#6f6a62] lg:flex">
              <SlidersHorizontal className="h-3 w-3" />
              Filter
            </span>
            <Chip
              active={category === "all"}
              onClick={() => setCategory("all")}
              count={templates.length}
            >
              All
            </Chip>
            {TEMPLATE_CATEGORIES.map((id) => (
              <Chip
                key={id}
                active={category === id}
                onClick={() => setCategory(id)}
                count={counts.get(id) ?? 0}
              >
                {CATEGORY_LABELS[id]}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-[11px] uppercase tracking-[0.16em] text-[#7f7a72]">
          {visible.length} of {templates.length} templates
          {category !== "all" ? (
            <span className="text-[#b8b3aa]"> · {CATEGORY_LABELS[category]}</span>
          ) : null}
        </p>
        {category !== "all" || query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="text-[10px] uppercase tracking-[0.16em] text-[#d4af7a] hover:text-[#f0d9a8]"
          >
            Reset
          </button>
        ) : null}
      </div>

      {visible.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.015] px-6 py-24 text-center">
          <p className="font-display text-[30px] tracking-[-0.03em] text-[#f6f1ea]">
            Nothing on this aisle
          </p>
          <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-[#9a958c]">
            Clear the search or choose another industry. New rooms are added to the
            catalog as they are finished.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="mt-7 rounded-sm bg-[#f4efe6] px-5 py-3 text-[13px] font-medium text-[#111]"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
  count,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-3 py-2 text-[10px] uppercase tracking-[0.14em] transition-colors ${
        active
          ? "border-[#d4af7a]/45 bg-[#d4af7a]/12 text-[#f0d9a8]"
          : "border-white/[0.08] text-[#8f8a81] hover:border-white/[0.16] hover:text-[#e8e4dc]"
      }`}
    >
      {children}
      <span className={active ? "text-[#d4af7a]/70" : "text-[#5f5b54]"}>{count}</span>
    </button>
  );
}
