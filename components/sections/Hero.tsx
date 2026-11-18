"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { TemplateSceneCanvas } from "@/components/3d/CanvasStage";
import { useInView } from "@/hooks/useInView";
import { CATEGORY_LABELS } from "@/types/template";
import type { Template } from "@/types/template";
import { faCurrency, faNumber } from "@/lib/i18n/format";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The showroom. The stage renders the exact scene of the template selected
 * in the rail below it — the same `scene` + `theme` the catalog card and
 * the template's own preview page resolve from the registry, so what is
 * advertised here is what opens after the click.
 */
export function Hero({
  templates,
  templateCount,
  categoryCount,
}: {
  templates: Template[];
  templateCount: number;
  categoryCount: number;
}) {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(templates[0]?.id ?? null);
  const active = templates.find((template) => template.id === activeId) ?? templates[0];
  const first = templates[0];
  const { ref, inView } = useInView<HTMLDivElement>("600px", false);

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Stage: the active template's own 3D website scene */}
      <div ref={ref} className="absolute inset-0">
        {active ? (
          <TemplateSceneCanvas
            scene={active.scene}
            theme={active.theme}
            accent={active.theme.accent}
            label={active.title}
            variant="detail"
            align="stage-left"
            autoRotate
            active={inView}
            modelPath={active.modelPath}
            className="absolute inset-0 h-full w-full"
          />
        ) : null}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(270deg,rgba(7,8,11,0.92)_0%,rgba(7,8,11,0.55)_36%,transparent_68%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#07080b] via-[#07080b]/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#07080b] via-[#07080b]/85 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-32 lg:px-10 lg:pb-10">
        <div className="flex items-start justify-between gap-6">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="eyebrow flex items-center gap-3 text-[#b8b3aa]"
          >
            <span className="h-px w-8 bg-[#d4af7a]/60" />
            استودیوی وب‌سایت سه‌بعدی
          </motion.p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[13px] tracking-[0.18em] text-[#a7a198] backdrop-blur-md sm:flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#b7c7a8]" />
            <span dir="ltr">WebGL · زنده</span>
          </motion.div>
        </div>

        <div className="max-w-[52rem]">
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 26, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.18, ease: EASE }}
            className="display-face text-balance text-[clamp(2.25rem,6.2vw,3.5rem)] leading-[1.32] text-[#f6f1ea]"
          >
            وب‌سایت‌هایی که می‌توانید{" "}
            <span className="editorial-face ms-[0.12em] text-[#e8cfaa]">
              در آن‌ها قدم بزنید
            </span>
          </motion.h1>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="mt-7 flex max-w-xl flex-col gap-7 border-s border-[#d4af7a]/30 ps-5 md:ps-6"
          >
            <p className="text-pretty text-[16px] leading-relaxed text-[#c0bbb2] md:text-[18px]">
              وب‌سایت‌های سه‌بعدی صنعت‌محور، ساخته‌شده به‌عنوان اتاق‌هایی قابل بررسی.
              یک قالب انتخاب کنید، جزئیات را تنظیم کنید و چیزی راه‌اندازی کنید
              که حضوری فیزیکی دارد.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/templates"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-[#f4efe6] px-5 py-3.5 text-[13px] font-medium text-[#111] transition-colors hover:bg-white"
              >
                ورود به کاتالوگ
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
              </Link>
              {first ? (
                <Link
                  href={`/templates/${first.id}?view=customize`}
                  className="group inline-flex items-center justify-center gap-2 rounded-sm border border-white/15 bg-white/[0.03] px-5 py-3.5 text-[13px] font-medium text-[#f6f1ea] backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.07]"
                >
                  باز کردن یک استودیوی زنده
                  <MoveUpRight className="h-4 w-4 text-[#d4af7a] transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
                </Link>
              ) : null}
            </div>
            <p className="text-[13px] tracking-[0.2em] text-[#7f7a72]">
              {faNumber(templateCount)} قالب · {faNumber(categoryCount)} صنعت · WebGL واقعی
            </p>
          </motion.div>
        </div>

        {/* Showroom selector: hover or focus a room to wake it on stage,
            click to open that exact template's preview page. */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: EASE }}
          className="mt-12 border-t border-white/[0.08] pt-5"
        >
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
            <div>
              <p className="eyebrow text-[#6f6a62]">در حال نمایش</p>
              {active ? (
                <motion.p
                  key={active.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1"
                >
                  <span className="font-display text-[clamp(1.25rem,2.4vw,1.75rem)] leading-[1.42] text-[#f6f1ea]">
                    {active.title}
                  </span>
                  <span className="text-[13px] text-[#a7a198]">
                    {CATEGORY_LABELS[active.category]}
                  </span>
                  <span className="font-display text-[14px] text-[#f0d9a8]">
                    {faCurrency(active.price)}
                  </span>
                </motion.p>
              ) : null}
            </div>
            {active ? (
              <Link
                href={`/templates/${active.id}`}
                className="group inline-flex items-center gap-2 rounded-sm bg-[#f4efe6] px-4 py-2.5 text-[12px] font-medium text-[#111] transition-colors hover:bg-white"
              >
                بررسی این قالب
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
              </Link>
            ) : null}
          </div>

          <div className="mask-fade-x mt-4 flex gap-2 overflow-x-auto pb-1">
            {templates.map((template) => {
              const isActive = template.id === active?.id;
              return (
                <Link
                  key={template.id}
                  href={`/templates/${template.id}`}
                  onMouseEnter={() => setActiveId(template.id)}
                  onFocus={() => setActiveId(template.id)}
                  onClick={() => setActiveId(template.id)}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`پیش‌نمایش ${template.title} در نمایشگاه`}
                  className={`group inline-flex shrink-0 items-center gap-3 rounded-sm border px-3.5 py-2.5 backdrop-blur-md transition-colors ${
                    isActive
                      ? "border-white/25 bg-white/[0.09]"
                      : "border-white/[0.08] bg-black/30 hover:border-white/[0.16] hover:bg-black/50"
                  }`}
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: template.theme.accent }}
                    aria-hidden
                  />
                  <span className="flex flex-col items-start leading-none">
                    <span
                      className={`text-[12px] font-medium ${isActive ? "text-[#f6f1ea]" : "text-[#c0bbb2]"}`}
                    >
                      {template.title}
                    </span>
                    <span className="mt-1 text-[12px] tracking-[0.16em] text-[#8a847c]">
                      {CATEGORY_LABELS[template.category]}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={`h-3.5 w-3.5 shrink-0 transition-colors ${
                      isActive ? "text-[#d4af7a]" : "text-[#5f5b54] group-hover:text-[#a7a198]"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-2 text-[13px] tracking-[0.18em] text-[#7f7a72]">
            <span className="hidden sm:inline">
              برای پیش‌نمایش روی اتاق نگه دارید · برای باز کردن کلیک کنید
            </span>
            <span className="inline-flex items-center gap-2 sm:ms-4">
              اسکرول
              <ArrowDown className="h-3.5 w-3.5 text-[#d4af7a]" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
