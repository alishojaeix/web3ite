"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#templates", label: "Templates" },
  { href: "/templates", label: "Floor" },
  { href: "/#studio", label: "Studio" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-8">
      <div className="pointer-events-auto mx-auto flex max-w-[1440px] items-center justify-between rounded-lg border border-white/10 bg-[#07080b]/70 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-sm border border-[#d4af7a]/40 bg-[#1a140c] font-display text-[13px] text-[#f0d9a8]">
            W
          </span>
          <span className="font-display text-[18px] tracking-[-0.03em] text-[#f6f1ea]">Web3ite</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] uppercase tracking-[0.16em] text-[#b8b3aa] hover:text-[#f6f1ea]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/templates"
            className="hidden rounded-sm bg-[#f4efe6] px-4 py-2 text-[13px] font-medium text-[#111] hover:bg-white sm:inline-flex"
          >
            Launch a site
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-sm border border-white/10 text-[#f6f1ea] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[1440px] rounded-lg border border-white/10 bg-[#07080b]/90 p-4 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[14px] text-[#e8e4dc]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
