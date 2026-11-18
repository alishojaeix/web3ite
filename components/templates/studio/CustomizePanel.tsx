"use client";

import type { Template } from "@/types/template";
import { fa } from "@/lib/i18n/fa";

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
          {fa.studio.staticHtmlBody}
        </p>
        <p className="text-[13px] leading-relaxed text-[#b8b3aa]">
          {fa.studio.staticHtmlCustomize}{" "}
          <code
            dir="ltr"
            className="rounded-sm bg-white/[0.06] px-1.5 py-0.5 font-mono text-[12px] text-[#d4af7a]"
          >
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
        <p className="text-[12px] tracking-[0.14em] text-[#8a847c]">
          {fa.studio.accent}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {swatches.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => onAccentChange(color)}
              aria-label={`${fa.studio.accent} ${color}`}
              aria-pressed={accent === color}
              className={`h-9 w-9 rounded-full border ${
                accent === color ? "border-white" : "border-white/20"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <p className="mt-3 text-[12px] leading-relaxed text-[#8a847c]">
          رنگ تأکید به متریال و نور صحنهٔ زنده متصل است — اتاق بی‌درنگ
          رنگ عوض می‌کند.
        </p>
      </div>

      <label className="flex items-center justify-between text-[14px] text-[#c4bfb6]">
        {fa.studio.autoRotate}
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
            جایگاه مدل:{" "}
            <code
              dir="ltr"
              className="rounded-sm bg-white/[0.06] px-1.5 py-0.5 font-mono text-[12px] text-[#d4af7a]"
            >
              {template.modelPath}
            </code>{" "}
            — پیش‌نمایش در صورت وجود فایل، همان GLB را نمایش می‌دهد.
          </>
        ) : (
          <>
            این پیش‌نمایش صحنهٔ رویه‌ای قالب را رندر می‌کند. بعداً می‌توانید با
            قرار دادن فایل در{" "}
            <code
              dir="ltr"
              className="rounded-sm bg-white/[0.06] px-1.5 py-0.5 font-mono text-[12px] text-[#d4af7a]"
            >
              public/models/{template.id}.glb
            </code>{" "}
            و تنظیم{" "}
            <code
              dir="ltr"
              className="rounded-sm bg-white/[0.06] px-1.5 py-0.5 font-mono text-[12px] text-[#d4af7a]"
            >
              modelPath
            </code>{" "}
            آن را با یک GLB جایگزین کنید.
          </>
        )}
      </p>
    </div>
  );
}
