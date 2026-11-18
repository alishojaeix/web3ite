"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { PurchaseCta } from "@/components/checkout/PurchaseCta";
import { StudioCanvas } from "./studio/StudioCanvas";
import { StudioPanel } from "./studio/StudioPanel";
import { StudioTabs, type StudioView } from "./studio/StudioTabs";
import { CustomizePanel } from "./studio/CustomizePanel";
import { getSitePreviewRoute } from "@/lib/templates/sitePreviewRoutes";
import type { Template } from "@/types/template";
import { faCurrency } from "@/lib/i18n/format";

/**
 * The template's own preview page. The canvas resolves the same
 * `template.scene` + `template.theme` through the scene registry that the
 * homepage showroom and catalog cards use, so the room that was advertised
 * is the room that opens here.
 */
export function TemplateStudio({
  template,
  initialView,
  owned = false,
}: {
  template: Template;
  initialView?: string;
  owned?: boolean;
}) {
  const start: StudioView = initialView === "customize" ? "customize" : "preview";
  const [view, setView] = useState<StudioView>(start);
  const [accent, setAccent] = useState(template.theme.accent);
  const [spin, setSpin] = useState(true);
  const sitePreviewRoute = getSitePreviewRoute(template.id);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="grid min-h-screen pt-24 lg:grid-cols-[minmax(0,1fr)_380px]">
        <StudioCanvas template={template} accent={accent} autoRotate={spin} />

        <aside className="border-t border-white/10 bg-[#0b0d11]/90 p-6 backdrop-blur-xl lg:border-s lg:border-t-0">
          <Link
            href="/templates"
            className="text-[12px] tracking-[0.16em] text-[#8a847c] hover:text-[#f0d9a8]"
          >
            بازگشت به قالب‌ها
          </Link>
          <StudioPanel template={template} />
          {template.ageRestricted && template.healthWarning ? (
            <aside className="mt-5 rounded-sm border border-[#d4af7a]/25 bg-[#d4af7a]/[0.06] p-4">
              <p className="text-[12px] tracking-[0.16em] text-[#f0d9a8]">
                بزرگسالان ۱۸+ · هشدار سلامت
              </p>
              <p className="mt-2 text-[13px] leading-5 text-[#b8b3aa]">
                {template.healthWarning}
              </p>
            </aside>
          ) : null}
          {sitePreviewRoute ? (
            <Link
              href={sitePreviewRoute}
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-[#d4af7a]/45 px-4 py-3 text-[13px] font-medium text-[#f0d9a8] transition-colors hover:border-[#d4af7a] hover:bg-[#d4af7a]/10 focus-visible:outline-offset-4"
            >
              دیدن وب‌سایت کامل
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : null}
          <div className="mt-8">
            <StudioTabs view={view} onChange={setView} />
          </div>

          {view === "customize" ? (
            <CustomizePanel
              template={template}
              accent={accent}
              onAccentChange={setAccent}
              spin={spin}
              onSpinChange={setSpin}
            />
          ) : null}

          <div className="mt-10 flex flex-col gap-3">
            <PurchaseCta
              templateId={template.id}
              price={template.price}
              title={template.title}
              owned={owned}
            />
            <Link
              href={`/checkout/${template.id}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-white/15 px-4 py-3 text-center text-[12px] text-[#b8b3aa] transition-colors hover:border-white/30 hover:text-[#f6f1ea]"
            >
              {faCurrency(template.price)} · مشاهده جزئیات خرید
            </Link>
            <Link
              href="/templates"
              className="rounded-sm px-4 py-3 text-center text-[14px] text-[#8a847c] transition-colors hover:text-[#f6f1ea]"
            >
              دیدن قالب‌های دیگر
            </Link>
          </div>
        </aside>
      </main>
    </div>
  );
}
