"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { fa } from "@/lib/i18n/fa";

const links = [
  { href: "/templates", label: fa.nav.templates },
  { href: "/#industries", label: fa.nav.industries },
  { href: "/#studio", label: fa.nav.howItWorks },
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
        <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label={fa.nav.home}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm border border-[#d4af7a]/35 bg-[#1a140c] font-display text-[13px] font-semibold tracking-[0.01em] text-[#f0d9a8] transition-colors group-hover:border-[#d4af7a]/60">
            W3
          </span>
          <span className="whitespace-nowrap font-display text-[19px] font-semibold tracking-[0.01em] text-[#f6f1ea] sm:text-[20px]">
            Web3ite
          </span>
          <span className="hidden whitespace-nowrap rounded-full border border-white/10 px-2.5 py-1 text-[12px] font-medium text-[#8a847c] md:inline">
            {fa.brand.studio}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={fa.nav.primary}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[15px] font-medium text-[#a7a198] transition-colors hover:text-[#f6f1ea]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={user ? "/account" : "/login"}
            className="hidden min-h-10 items-center whitespace-nowrap text-[14px] font-medium text-[#a7a198] transition-colors hover:text-[#f6f1ea] sm:inline-flex"
          >
            {user ? fa.nav.account : fa.nav.signIn}
          </Link>
          <Link
            href="/templates"
            className="group hidden items-center gap-2 whitespace-nowrap rounded-sm bg-[#f4efe6] px-4 py-2.5 text-[15px] font-semibold text-[#111] transition-colors hover:bg-white sm:inline-flex"
          >
            {fa.nav.browse}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-sm border border-white/10 text-[#f6f1ea] transition-colors hover:border-white/20 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? fa.nav.closeMenu : fa.nav.openMenu}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="pointer-events-auto mx-auto mt-2 max-w-[1440px] rounded-lg border border-white/10 bg-[#07080b]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col" aria-label={fa.nav.mobile}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-4 border-b border-white/[0.06] py-4 text-[16px] font-medium text-[#e8e4dc]"
              >
                {link.label}
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[#8a847c]" />
              </Link>
            ))}
            <Link
              href={user ? "/account" : "/login"}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between gap-4 border-b border-white/[0.06] py-4 text-[16px] font-medium text-[#e8e4dc]"
            >
              {user ? fa.nav.yourAccount : fa.nav.signInOrRegister}
              <ArrowUpRight className="h-5 w-5 shrink-0 text-[#8a847c]" />
            </Link>
          </nav>
          <Link
            href="/templates"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center whitespace-nowrap rounded-sm bg-[#f4efe6] px-4 py-3 text-[15px] font-semibold text-[#111]"
          >
            {fa.nav.browse}
          </Link>
        </div>
      ) : null}
    </header>
  );
}
