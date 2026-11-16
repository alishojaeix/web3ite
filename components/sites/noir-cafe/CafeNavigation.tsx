"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { noirCafeContent } from "./content";

export function CafeNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-5 pt-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between border-b border-white/25 pb-4">
        <Link
          href="#top"
          aria-label="Noir Café, back to top"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3 text-[var(--nc-cream)]"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--nc-brass)]/80 font-editorial text-lg text-[var(--nc-brass)] transition-colors group-hover:bg-[var(--nc-brass)] group-hover:text-[var(--nc-ink)]">
            N
          </span>
          <span className="font-editorial text-xl tracking-[0.04em]">Noir Café</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {noirCafeContent.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 transition-colors hover:text-[var(--nc-brass)] focus-visible:text-[var(--nc-brass)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="noir-mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/35 text-white transition-colors hover:border-[var(--nc-brass)] hover:text-[var(--nc-brass)] focus-visible:outline-offset-4 md:hidden"
        >
          {open ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
        </button>
      </div>

      {open ? (
        <nav
          id="noir-mobile-navigation"
          aria-label="Mobile navigation"
          className="mx-auto mt-2 max-w-[1440px] border border-white/15 bg-[var(--nc-ink)]/95 p-3 shadow-2xl backdrop-blur-md md:hidden"
        >
          {noirCafeContent.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-white/10 px-3 text-[15px] text-[var(--nc-cream)] last:border-0 hover:text-[var(--nc-brass)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
