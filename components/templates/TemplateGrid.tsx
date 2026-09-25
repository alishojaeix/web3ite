"use client";

import { useMemo, useState } from "react";
import type { Template, TemplateCategory } from "@/types/template";
import { CATEGORY_LABELS, TEMPLATE_CATEGORIES } from "@/types/template";
import { TemplateCard } from "./TemplateCard";

export function TemplateGrid({ templates }: { templates: Template[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<TemplateCategory | "all">("all");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return templates.filter((t) => {
      if (category !== "all" && t.category !== category) return false;
      if (!q) return true;
      return (
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [templates, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the floor"
          className="h-12 flex-1 rounded-sm border border-white/10 bg-black/30 px-4 text-[15px] text-[#f6f1ea] outline-none placeholder:text-[#6d6860] focus:border-[#d4af7a]/50"
        />
        <div className="flex gap-2 overflow-x-auto">
          <Chip active={category === "all"} onClick={() => setCategory("all")}>
            All
          </Chip>
          {TEMPLATE_CATEGORIES.map((id) => (
            <Chip key={id} active={category === id} onClick={() => setCategory(id)}>
              {CATEGORY_LABELS[id]}
            </Chip>
          ))}
        </div>
      </div>

      <p className="mt-5 text-[13px] text-[#8a847c]">
        {visible.length} of {templates.length} templates
      </p>

      {visible.length === 0 ? (
        <div className="mt-20 text-center">
          <p className="font-display text-[28px] text-[#f6f1ea]">Nothing on this aisle</p>
          <p className="mt-2 text-[#9a958c]">Clear the search or pick another category.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="mt-6 rounded-sm bg-[#f4efe6] px-5 py-3 text-[13px] font-medium text-[#111]"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-[12px] uppercase tracking-[0.12em] ${
        active
          ? "border-[#d4af7a]/50 bg-[#d4af7a]/15 text-[#f0d9a8]"
          : "border-white/10 text-[#9a958c] hover:text-[#e8e4dc]"
      }`}
    >
      {children}
    </button>
  );
}
