"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StudioCanvas } from "./studio/StudioCanvas";
import { StudioPanel } from "./studio/StudioPanel";
import { StudioTabs, type StudioView } from "./studio/StudioTabs";
import { CustomizePanel } from "./studio/CustomizePanel";
import type { Template } from "@/types/template";

export function TemplateStudio({
  template,
  initialView,
}: {
  template: Template;
  initialView?: string;
}) {
  const start: StudioView = initialView === "customize" ? "customize" : "preview";
  const [view, setView] = useState<StudioView>(start);
  const [accent, setAccent] = useState(template.accent);
  const [spin, setSpin] = useState(true);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="grid min-h-screen pt-24 lg:grid-cols-[minmax(0,1fr)_380px]">
        <StudioCanvas
          model={template.model}
          sculpture={template.sculpture}
          accent={accent}
          autoRotate={spin}
        />

        <aside className="border-t border-white/10 bg-[#0b0d11]/90 p-6 backdrop-blur-xl lg:border-l lg:border-t-0">
          <Link
            href="/templates"
            className="text-[12px] uppercase tracking-[0.16em] text-[#8a847c] hover:text-[#f0d9a8]"
          >
            Back to templates
          </Link>
          <StudioPanel template={template} />
          <div className="mt-8">
            <StudioTabs view={view} onChange={setView} />
          </div>

          {view === "customize" ? (
            <CustomizePanel
              accent={accent}
              onAccentChange={setAccent}
              spin={spin}
              onSpinChange={setSpin}
              model={template.model}
            />
          ) : null}

          <div className="mt-10 flex flex-col gap-3">
            <button
              type="button"
              className="rounded-sm bg-[#f4efe6] px-4 py-3 text-[14px] font-medium text-[#111]"
            >
              Request this template
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
