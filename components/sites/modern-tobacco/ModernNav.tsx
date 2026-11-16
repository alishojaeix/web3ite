"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { TinMark } from "./Artwork";
import { modernNav } from "./content";

export function ModernNav() {
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
    <header className="mt-nav">
      <div className="mt-wrap mt-nav-bar">
        <a href="#top" className="mt-brand" aria-label="Modern Tobacco, back to top">
          <TinMark className="mt-brand-mark" />
          <span className="mt-brand-word">Modern Tobacco</span>
          <span className="mt-brand-sub">Adults 18+</span>
        </a>

        <nav aria-label="Primary" className="mt-nav-links">
          {modernNav.map((item, idx) => (
            <a key={item.href} href={item.href}>
              <span className="mt-nav-idx" aria-hidden="true">
                0{idx + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-nav-tail">
          <a href="#contact" className="mt-nav-cta">
            Read the notice
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="mt-nav-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mt-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mt-mobile-wrap">
          <nav id="mt-mobile-nav" aria-label="Mobile navigation" className="mt-mobile-nav">
            {modernNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="mt-mobile-cta" onClick={() => setOpen(false)}>
              Read the notice
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="mt-mobile-note">
              By appointment only · Fictional boutique · Adults 18+
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}