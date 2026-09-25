"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ModelCanvas } from "@/components/3d/CanvasStage";
import { SiteHeader } from "@/components/site/SiteHeader";
import { CATEGORY_LABELS } from "@/types/template";
import type { Template } from "@/types/template";

type View = "preview" | "customize";

export function TemplateStudio({
  template,
  initialView,
}: {
  template: Template;
  initialView?: string;
}) {
  const start: View = initialView === "customize" ? "customize" : "preview";
  const [view, setView] = useState<View>(start);
  const [accent, setAccent] = useState(template.accent);
  const [spin, setSpin] = useState(true);

  const accents = useMemo(
    () => [template.accent, "#7EE0FF", "#F0D9A8", "#FF5A36", "#C8F27A", "#C4B5FD"],
    [template.accent]
  );

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="grid min-h-screen pt-24 lg:grid-cols-[minmax(0,1fr)_380px]">
        <section className="relative min-h-[60vh] lg:min-h-screen">
          <ModelCanvas
            model={template.model}
            sculpture={template.sculpture}
            accent={accent}
            autoRotate={spin}
            interactive
            className="absolute inset-0 h-full w-full"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07080b] to-transparent" />
          <p className="absolute bottom-6 left-6 text-[12px] uppercase tracking-[0.18em] text-[#8a847c]">
            Drag to orbit · scroll to zoom
          </p>
        </section>

        <aside className="border-t border-white/10 bg-[#0b0d11]/90 p-6 backdrop-blur-xl lg:border-l lg:border-t-0">
          <Link href="/templates" className="text-[12px] uppercase tracking-[0.16em] text-[#8a847c] hover:text-[#f0d9a8]">
            Back to the floor
          </Link>
          <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-[#d4af7a]">
            {CATEGORY_LABELS[template.category]}
          </p>
          <h1 className="mt-2 font-display text-[40px] leading-none tracking-[-0.04em] text-[#f6f1ea]">
            {template.title}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[#b8b3aa]">{template.description}</p>
          <p className="mt-6 font-display text-[28px] text-[#f0d9a8]">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(template.price)}
          </p>

          <div className="mt-8 flex gap-2">
            <Tab active={view === "preview"} onClick={() => setView("preview")}>
              Preview
            </Tab>
            <Tab active={view === "customize"} onClick={() => setView("customize")}>
              Customize
            </Tab>
          </div>

          {view === "customize" ? (
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-[12px] uppercase tracking-[0.14em] text-[#8a847c]">Accent</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {accents.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setAccent(color)}
                      aria-label={`Accent ${color}`}
                      className={`h-9 w-9 rounded-full border ${
                        accent === color ? "border-white" : "border-white/20"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              <label className="flex items-center justify-between text-[14px] text-[#c4bfb6]">
                Auto rotate
                <input
                  type="checkbox"
                  checked={spin}
                  onChange={(e) => setSpin(e.target.checked)}
                  className="h-4 w-4 accent-[#d4af7a]"
                />
              </label>
              <p className="text-[13px] text-[#8a847c]">
                Model path: {template.model}. Drop a GLB there to replace the sculpture.
              </p>
            </div>
          ) : (
            <ul className="mt-8 flex flex-wrap gap-2">
              {template.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-[#9a958c]">
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 flex flex-col gap-3">
            <button
              type="button"
              className="rounded-sm bg-[#f4efe6] px-4 py-3 text-[14px] font-medium text-[#111]"
            >
              Request this body
            </button>
            <Link
              href="/templates"
              className="rounded-sm border border-white/15 px-4 py-3 text-center text-[14px] text-[#f6f1ea]"
            >
              Browse others
            </Link>
          </div>
        </aside>
      </main>
    </div>
  );
}

function Tab({
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
      className={`rounded-sm px-4 py-2 text-[12px] uppercase tracking-[0.14em] ${
        active ? "bg-[#f4efe6] text-[#111]" : "border border-white/10 text-[#9a958c]"
      }`}
    >
      {children}
    </button>
  );
}
