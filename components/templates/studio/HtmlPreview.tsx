"use client";

import { useState } from "react";
import { fa } from "@/lib/i18n/fa";

/**
 * Renders a self-contained static HTML template verbatim inside an iframe.
 *
 * The iframe is its own document, so the template's CSS and JS cannot leak
 * into the Web3ite shell (and vice versa). No `sandbox` attribute: the
 * templates load remote scripts and use storage, and the iframe boundary is
 * already the isolation we need.
 */
export function HtmlPreview({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-[#0d0c0b] lg:min-h-screen">
      {!loaded ? (
        <div className="absolute inset-0 grid place-items-center">
          <div className="flex flex-col items-center gap-4">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-[#d4af7a]" />
            <p className="text-[12px] tracking-[0.18em] text-[#8a847c]">
              {fa.studio.loadingPreview}
            </p>
          </div>
        </div>
      ) : null}
      <iframe
        src={url}
        title="پیش‌نمایش زنده"
        onLoad={() => setLoaded(true)}
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
      />
    </section>
  );
}
