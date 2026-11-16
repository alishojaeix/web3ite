"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { obsidianNav } from "./content";

export function ObsidianNav() {
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
    <header className="ob-nav">
      <div className="ob-wrap ob-nav-inner">
        <a href="#top" className="ob-brand" aria-label="Obsidian Roastery, back to top">
          <span className="ob-brand-word">OBSIDIAN</span>
          <span className="ob-brand-sub">Roastery · London E9</span>
        </a>

        <nav aria-label="Main navigation" className="ob-nav-links">
          {obsidianNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#subscribe" className="ob-nav-cta">
          Join the roast list
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="ob-nav-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="ob-mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="ob-mobile-wrap">
          <nav id="ob-mobile-nav" aria-label="Mobile navigation" className="ob-mobile-nav">
            {obsidianNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#subscribe" className="ob-mobile-cta" onClick={() => setOpen(false)}>
              Join the roast list
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
