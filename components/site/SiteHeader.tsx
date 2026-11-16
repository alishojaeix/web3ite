"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/templates", label: "Templates" },
  { href: "/#industries", label: "Industries" },
  { href: "/#studio", label: "How it works" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/auth/me", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload: { user?: { email: string } | null } | null) => {
        setUser(payload?.user ?? null);
      })
      .catch(() => {
        if (!controller.signal.aborted) setUser(null);
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-8">
      <div
        className={`pointer-events-auto mx-auto flex max-w-[1440px] items-center justify-between rounded-lg border px-4 py-3 transition-all duration-500 ${
          scrolled || open
            ? "border-white/10 bg-[#07080b]/85 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="group flex items-center gap-3" aria-label="Web3ite home">
          <span className="grid h-8 w-8 place-items-center rounded-sm border border-[#d4af7a]/35 bg-[#1a140c] font-display text-[12px] tracking-[-0.04em] text-[#f0d9a8] transition-colors group-hover:border-[#d4af7a]/60">
            W3
          </span>
          <span className="font-display text-[18px] tracking-[-0.04em] text-[#f6f1ea]">
            Web3ite
          </span>
          <span className="hidden rounded-full border border-white/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-[#8a847c] sm:inline">
            Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.18em] text-[#a7a198] transition-colors hover:text-[#f6f1ea]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={user ? "/account" : "/login"}
            className="hidden min-h-10 items-center text-[11px] uppercase tracking-[0.18em] text-[#a7a198] transition-colors hover:text-[#f6f1ea] sm:inline-flex"
          >
            {user ? "Account" : "Sign in"}
          </Link>
          <Link
            href="/templates"
            className="group hidden items-center gap-2 rounded-sm bg-[#f4efe6] px-4 py-2.5 text-[12px] font-medium text-[#111] transition-colors hover:bg-white sm:inline-flex"
          >
            Browse the floor
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-sm border border-white/10 text-[#f6f1ea] transition-colors hover:border-white/20 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="pointer-events-auto mx-auto mt-2 max-w-[1440px] rounded-lg border border-white/10 bg-[#07080b]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/[0.06] py-4 text-[15px] text-[#e8e4dc]"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 text-[#8a847c]" />
              </Link>
            ))}
            <Link
              href={user ? "/account" : "/login"}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/[0.06] py-4 text-[15px] text-[#e8e4dc]"
            >
              {user ? "Your account" : "Sign in / create account"}
              <ArrowUpRight className="h-4 w-4 text-[#8a847c]" />
            </Link>
          </nav>
          <Link
            href="/templates"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center rounded-sm bg-[#f4efe6] px-4 py-3 text-[13px] font-medium text-[#111]"
          >
            Browse the floor
          </Link>
        </div>
      ) : null}
    </header>
  );
}
