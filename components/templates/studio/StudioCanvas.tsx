"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { LazyTemplateScene } from "@/components/3d/CanvasStage";
import { CATEGORY_LABELS } from "@/types/template";
import type { Template } from "@/types/template";
import { fa } from "@/lib/i18n/fa";

/**
 * Left half of the preview page. Renders the template's registry scene —
 * the identical scene id and theme the homepage showroom stage and the
 * catalog card resolve — with orbit controls, a full-screen toggle and the
 * template's identity pinned over the canvas.
 */
export function StudioCanvas({
  template,
  accent,
  autoRotate,
}: {
  template: Template;
  accent: string;
  autoRotate: boolean;
}) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  function toggleFullscreen() {
    const node = containerRef.current;
    if (!node) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void node.requestFullscreen?.();
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] bg-[#07080b] lg:min-h-screen"
    >
      <LazyTemplateScene
        scene={template.scene}
        theme={template.theme}
        accent={accent}
        label={template.title}
        variant="detail"
        interactive
        autoRotate={autoRotate}
        active
        modelPath={template.modelPath}
        className="absolute inset-0 h-full w-full"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07080b] to-transparent" />

      <div className="pointer-events-none absolute start-6 top-6 flex flex-col items-start gap-2">
        <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[13px] tracking-[0.16em] text-[#e8e4dc] backdrop-blur-md">
          {CATEGORY_LABELS[template.category]}
        </span>
        <span className="font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-none tracking-[0.01em] text-[#f6f1ea] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          {template.title}
        </span>
        <span className="text-[13px] tracking-[0.16em] text-[#a7a198]">
          صحنهٔ زنده · همان اتاق نمایشگاه
        </span>
      </div>

      <button
        type="button"
        onClick={toggleFullscreen}
        className="absolute end-6 top-6 inline-flex items-center gap-2 rounded-sm border border-white/15 bg-black/45 px-3 py-2 text-[13px] tracking-[0.16em] text-[#e8e4dc] backdrop-blur-md transition-colors hover:border-white/30 hover:bg-black/70"
      >
        {fullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
        {fullscreen ? fa.studio.exitFullscreen : fa.studio.fullscreen}
      </button>

      <p className="pointer-events-none absolute bottom-6 start-6 text-[13px] tracking-[0.18em] text-[#8a847c]">
        برای چرخش بکشید · برای بزرگ‌نمایی اسکرول کنید
      </p>
    </section>
  );
}
