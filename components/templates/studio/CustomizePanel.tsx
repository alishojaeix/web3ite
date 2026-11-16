"use client";

import type { Template } from "@/types/template";

/** Warm, brand-adjacent swatches — no neon, no bright cyan. */
const ACCENT_SWATCHES = ["#d4af7a", "#c47a5f", "#a8b9a1", "#9aa8ff", "#c9a0a0"];

export function CustomizePanel({
  template,
  accent,
  onAccentChange,
  spin,
  onSpinChange,
}: {
  template: Template;
  accent: string;
  onAccentChange: (accent: string) => void;
  spin: boolean;
  onSpinChange: (spin: boolean) => void;
}) {
  if (template.previewUrl) {
    const sourcePath = `public${template.previewUrl}index.html`;
    return (
      <div className="mt-8 space-y-4">
        <p className="text-[13px] leading-relaxed text-[#b8b3aa]">
          This template ships as a self-contained static HTML document. Its
          styling and motion are authored inside that file, so the accent and
          rotation controls do not apply to it.
        </p>
        <p className="text-[13px] leading-relaxed text-[#b8b3aa]">
          Customizing it means editing that document directly. The source is at{" "}
          <code className="rounded-sm bg-white/[0.06] px-1.5 py-0.5 font-mono text-[12px] text-[#d4af7a]">
            {sourcePath}
          </code>
          .
        </p>
      </div>
    );
  }

  const swatches = [accent, ...ACCENT_SWATCHES.filter((color) => color !== accent)];

  return (
    <div className="mt-8 space-y-6">
      <div>
        <p className="text-[12px] uppercase tracking-[0.14em] text-[#8a847c]">Accent</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {swatches.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => onAccentChange(color)}
              aria-label={`Accent ${color}`}
              aria-pressed={accent === color}
              className={`h-9 w-9 rounded-full border ${
                accent === color ? "border-white" : "border-white/20"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <p className="mt-3 text-[12px] leading-relaxed text-[#8a847c]">
          The accent feeds the live scene materials and lighting — the room
          recolors instantly.
        </p>
      </div>

      <label className="flex items-center justify-between text-[14px] text-[#c4bfb6]">
        Auto rotate
        <input
          type="checkbox"
          checked={spin}
          onChange={(event) => onSpinChange(event.target.checked)}
          className="h-4 w-4 accent-[#d4af7a]"
        />
      </label>

      <p className="text-[13px] leading-relaxed text-[#8a847c]">
        {template.modelPath ? (
          <>
            Model slot:{" "}
            <code className="rounded-sm bg-white/[0.06] px-1.5 py-0.5 font-mono text-[12px] text-[#d4af7a]">
              {template.modelPath}
            </code>{" "}
            — the preview renders that GLB when the file is present.
          </>
        ) : (
          <>
            This preview renders the template&apos;s procedural scene. A GLB can
            replace it later by dropping the file at{" "}
            <code className="rounded-sm bg-white/[0.06] px-1.5 py-0.5 font-mono text-[12px] text-[#d4af7a]">
              public/models/{template.id}.glb
            </code>{" "}
            and setting <code className="rounded-sm bg-white/[0.06] px-1.5 py-0.5 font-mono text-[12px] text-[#d4af7a]">modelPath</code>.
          </>
        )}
      </p>
    </div>
  );
}
