"use client";

import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SitePoster } from "@/components/sites/engine/SitePoster";
import { getSiteConfig } from "@/lib/sites";
import { siteSkins } from "@/lib/sites/skins";
import { getSitePreviewRoute } from "@/lib/templates/sitePreviewRoutes";
import { CATEGORY_LABELS } from "@/types/template";
import type { Template } from "@/types/template";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function TemplateCard({
  template,
  index = 0,
}: {
  template: Template;
  index?: number;
}) {
  const siteRoute = getSitePreviewRoute(template.id);
  const config = getSiteConfig(template.id);
  const skin = config ? siteSkins[config.layout] : undefined;

  return (
    <Reveal delay={Math.min(index * 0.045, 0.25)} className="h-full">
      <article
        className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/[0.07] bg-[#0b0d11]/70 transition-colors duration-500 hover:border-white/[0.16]"
        style={{ ["--card-accent" as string]: template.theme.accent }}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-[#07080b]">
          {config && skin ? (
            <SitePoster
              motif={config.motif}
              accent={template.theme.accent}
              accentSoft={template.theme.accentSoft}
              background={skin.background}
              ink={skin.ink}
              surface={skin.surface}
              label={template.title}
              className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
          ) : null}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,11,0.18)_0%,transparent_30%,transparent_54%,rgba(7,8,11,0.9)_100%)]" />

          <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#e8e4dc] backdrop-blur-md">
              {CATEGORY_LABELS[template.category]}
            </span>
            <div className="flex flex-col items-end gap-2">
              <span className="rounded-sm border border-white/10 bg-black/45 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-[#b8b3aa] backdrop-blur-md">
                {String(index + 1).padStart(2, "0")}
              </span>
              {template.ageRestricted ? (
                <span className="rounded-sm border border-[#d4af7a]/30 bg-black/55 px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-[#f0d9a8] backdrop-blur-md">
                  18+
                </span>
              ) : null}
            </div>
          </div>

          <div className="absolute inset-x-4 bottom-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#b8b3aa]">
                  {template.isDemo ? "Demo template" : "Template"}
                </p>
                <h3 className="mt-1 font-display text-[26px] leading-[0.95] tracking-[-0.04em] text-[#f6f1ea]">
                  {template.title}
                </h3>
              </div>
              <span className="shrink-0 rounded-sm border border-white/10 bg-black/40 px-2.5 py-1.5 font-display text-[13px] text-[#f0d9a8] backdrop-blur-md">
                {formatPrice(template.price)}
              </span>
            </div>

            <div className="mt-3 flex gap-2">
              {siteRoute ? (
                <Link
                  href={siteRoute}
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-sm bg-[#f4efe6] px-3 py-2.5 text-[12px] font-medium text-[#111] transition-colors hover:bg-white"
                >
                  View website
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              ) : null}
              <Link
                href={`/templates/${template.id}`}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-sm border border-white/20 bg-black/50 px-3 py-2.5 text-[12px] font-medium text-white backdrop-blur-md transition-colors hover:bg-black/70"
              >
                Template
                <MoveUpRight className="h-3.5 w-3.5 text-[#d4af7a]" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
          <div className="flex items-start justify-between gap-4">
            <p className="line-clamp-2 max-w-[26rem] text-[13px] leading-relaxed text-[#a7a198]">
              {template.description}
            </p>
            <span
              className="mt-1 h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: template.theme.accent }}
              aria-hidden
            />
          </div>
          <div className="mt-auto flex items-center justify-between gap-4 pt-5">
            <div className="flex flex-wrap gap-1.5">
              {template.features.slice(0, 2).map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/[0.06] px-2.5 py-1 text-[10px] text-[#8f8a81]"
                >
                  {feature}
                </span>
              ))}
            </div>
            <Link
              href={`/checkout/${template.id}`}
              className="inline-flex shrink-0 items-center gap-1 text-[10px] uppercase tracking-[0.16em] text-[#8a847c] transition-colors group-hover:text-[#f0d9a8]"
            >
              Buy
              <ArrowUpRight className="h-3 w-3" aria-hidden />
            </Link>
          </div>
        </div>

        <span
          className="absolute inset-x-0 top-0 h-px opacity-60"
          style={{
            background: `linear-gradient(90deg, transparent, ${template.theme.accent}, transparent)`,
          }}
          aria-hidden
        />
      </article>
    </Reveal>
  );
}
