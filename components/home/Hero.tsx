"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroCanvas } from "@/components/3d/CanvasStage";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <HeroCanvas className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_40%,transparent_0%,rgba(7,8,11,0.35)_55%,rgba(7,8,11,0.88)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07080b] to-transparent" />

      <div className="relative z-10 flex min-h-[100svh] items-end px-6 pb-16 pt-28 lg:px-10 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto max-w-xl rounded-xl border border-white/10 bg-[#0b0d11]/55 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-9"
        >
          <h1 className="font-display text-[42px] leading-[0.98] tracking-[-0.04em] text-[#f6f1ea] sm:text-[56px] lg:text-[64px]">
            Create, customize and launch premium 3D websites
          </h1>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[#c4bfb6]">
            A showroom of finished 3D sites. Inspect the object, put your brand on it, go live. No WebGL stack to assemble.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/templates"
              className="rounded-sm bg-[#f4efe6] px-5 py-3 text-center text-[14px] font-medium text-[#111] hover:bg-white"
            >
              Browse templates
            </Link>
            <Link
              href="/templates/orbital"
              className="rounded-sm border border-white/20 bg-white/[0.04] px-5 py-3 text-center text-[14px] font-medium text-[#f6f1ea] hover:bg-white/[0.08]"
            >
              Open a live studio
            </Link>
          </div>
          <p className="mt-6 text-[12px] uppercase tracking-[0.18em] text-[#8a847c]">
            Move the pointer — the room follows
          </p>
        </motion.div>
      </div>
    </section>
  );
}
