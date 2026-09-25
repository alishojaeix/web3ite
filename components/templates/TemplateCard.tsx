"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { LazyModelCanvas } from "@/components/3d/LazyStage";
import { CATEGORY_LABELS } from "@/types/template";
import type { Template } from "@/types/template";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function TemplateCard({ template, index = 0 }: { template: Template; index?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.3), ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative isolate overflow-hidden rounded-xl border border-white/[0.07] bg-[#0b0d11]/80 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-md"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-void">
        <LazyModelCanvas
          model={template.model}
          sculpture={template.sculpture}
          accent={template.accent}
          hovered={hovered}
          autoRotate
          className="absolute inset-0 h-full w-full"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07080b] to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#e8e4dc] backdrop-blur-md">
            {CATEGORY_LABELS[template.category]}
          </span>
        </div>
        <div className="absolute right-4 top-4">
          <span className="rounded-sm border border-[#d4af7a]/40 bg-[#1a140c]/80 px-2.5 py-1 font-display text-[13px] text-[#f0d9a8] backdrop-blur-md">
            {formatPrice(template.price)}
          </span>
        </div>

        <div
          className={`absolute inset-x-4 bottom-4 flex gap-2 transition-all duration-500 max-md:translate-y-0 max-md:opacity-100 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 md:pointer-events-none"
          } ${hovered ? "md:pointer-events-auto" : ""}`}
        >
          <Link
            href={`/templates/${template.id}`}
            className="flex-1 rounded-sm bg-[#f4efe6] px-3 py-2.5 text-center text-[13px] font-medium text-[#111] transition-colors hover:bg-white"
          >
            Preview
          </Link>
          <Link
            href={`/templates/${template.id}?view=customize`}
            className="flex-1 rounded-sm border border-white/20 bg-white/8 px-3 py-2.5 text-center text-[13px] font-medium text-white backdrop-blur-md hover:bg-white/16"
          >
            Customize
          </Link>
        </div>
      </div>

      <div className="border-t border-white/[0.06] px-5 py-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-[22px] leading-none tracking-[-0.03em] text-[#f6f1ea]">
            {template.title}
          </h3>
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#8a847c]">Demo</span>
        </div>
        <p className="mt-3 line-clamp-2 text-[14px] leading-relaxed text-[#b8b3aa]">{template.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {template.tags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/[0.06] px-2.5 py-1 text-[11px] text-[#9a958c]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
