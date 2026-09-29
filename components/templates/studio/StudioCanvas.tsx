"use client";

import { ModelCanvas } from "@/components/3d/CanvasStage";
import type { SculptureKind } from "@/types/template";

export function StudioCanvas({
  model,
  sculpture,
  accent,
  autoRotate,
}: {
  model: string;
  sculpture: SculptureKind;
  accent: string;
  autoRotate: boolean;
}) {
  return (
    <section className="relative min-h-[60vh] lg:min-h-screen">
      <ModelCanvas
        model={model}
        sculpture={sculpture}
        accent={accent}
        autoRotate={autoRotate}
        interactive
        className="absolute inset-0 h-full w-full"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07080b] to-transparent" />
      <p className="absolute bottom-6 left-6 text-[12px] uppercase tracking-[0.18em] text-[#8a847c]">
        Drag to orbit · scroll to zoom
      </p>
    </section>
  );
}
