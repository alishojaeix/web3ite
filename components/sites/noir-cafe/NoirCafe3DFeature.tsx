"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Box } from "lucide-react";

const NoirCafeSceneCanvas = dynamic(
  () => import("./NoirCafeSceneCanvas").then((module) => module.NoirCafeSceneCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="grid aspect-[4/3] place-items-center bg-[#090806] text-sm text-[#b8ad9f]" role="status">
        Preparing the coffee scene…
      </div>
    ),
  }
);

export function NoirCafe3DFeature() {
  const [requested, setRequested] = useState(false);

  return (
    <section className="bg-[var(--nc-ink)] px-6 pb-20 sm:px-10 lg:px-16" aria-labelledby="noir-3d-heading">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 border-t border-[var(--nc-line)] pt-10 md:grid-cols-[1fr_auto]">
        <div>
          <h2 id="noir-3d-heading" className="font-editorial text-3xl text-[var(--nc-cream)]">A closer look at the cup</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--nc-muted)]">
            Optional interactive 3D. The café website remains complete without it.
          </p>
        </div>
        {!requested ? (
          <button
            type="button"
            onClick={() => setRequested(true)}
            className="inline-flex min-h-12 w-fit items-center justify-center gap-3 border border-[var(--nc-brass)]/70 px-5 text-sm text-[var(--nc-cream)] transition-colors hover:bg-[var(--nc-brass)] hover:text-[var(--nc-ink)] focus-visible:outline-offset-4"
          >
            <Box size={17} aria-hidden="true" />
            Explore in 3D
          </button>
        ) : null}
        {requested ? <div className="md:col-span-2"><NoirCafeSceneCanvas /></div> : null}
      </div>
    </section>
  );
}
