"use client";

import type { ReactNode } from "react";
import type { TemplateTheme } from "@/types/template";

export function ScenePoster({
  theme,
  label,
  message = "WebGL در این مرورگر در دسترس نیست.",
  compact = false,
}: {
  theme: TemplateTheme;
  label?: string;
  message?: string;
  compact?: boolean;
}) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(120% 90% at 70% 25%, ${theme.accentSoft}55 0%, ${theme.atmosphere} 38%, ${theme.background} 74%)`,
      }}
    >
      <div
        className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-30"
        style={{ borderColor: theme.accent }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-20"
        style={{ borderColor: theme.accent }}
      />
      <div className="relative z-10 max-w-[18rem] px-6 text-center">
        <p className="text-[13px] uppercase tracking-[0.22em]" style={{ color: theme.accent }}>
          ۳بعدی پیش‌نمایش
        </p>
        {label ? (
          <p className="mt-3 font-display text-[24px] leading-none tracking-[0.01em]" style={{ color: theme.foreground }}>
            {label}
          </p>
        ) : null}
        {!compact ? (
          <p className="mt-4 text-[12px] leading-relaxed" style={{ color: theme.muted }}>
            {message} شتاب سخت‌افزاری را فعال کنید یا قالب را در مرورگری با پشتیبانی WebGL باز کنید.
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function SceneLoading({ theme, label }: { theme: TemplateTheme; label?: string }) {
  return (
    <div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4"
      style={{ background: theme.background }}
      role="status"
      aria-live="polite"
    >
      <span
        className="h-8 w-8 animate-spin rounded-full border-2 border-transparent"
        style={{ borderTopColor: theme.accent, borderRightColor: `${theme.accent}55` }}
      />
      <p className="text-[13px] uppercase tracking-[0.22em]" style={{ color: theme.muted }}>
        {label ? `در حال رندر ${label}` : "در حال رندر سه‌بعدی"}
      </p>
    </div>
  );
}

export function SceneError({
  theme,
  label,
}: {
  theme: TemplateTheme;
  label?: string;
}) {
  return (
    <ScenePoster
      theme={theme}
      label={label}
      message="صحنهٔ سه‌بعدی آغاز نشد."
    />
  );
}

export type SceneBoundaryFallback = ReactNode;
