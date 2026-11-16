"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PodMark } from "./Artwork";
import { electricNav } from "./content";

export function ElectricNav() {
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
    <header className="em-nav">
      <div className="em-wrap em-nav-bar">
        <a href="#top" className="em-brand" aria-label="Electric Motion, back to top">
          <span className="em-brand-badge">
            <PodMark className="em-brand-mark" />
          </span>
          <span className="em-brand-word">Electric Motion</span>
          <span className="em-brand-sub">Urban mobility</span>
        </a>

        <nav aria-label="Primary" className="em-nav-links">
          {electricNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="em-nav-tail">
          <a href="#contact" className="em-nav-cta">
            Book a test drive
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="em-nav-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="em-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="em-mobile-wrap">
          <nav id="em-mobile-nav" aria-label="Mobile navigation" className="em-mobile-nav">
            {electricNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="em-mobile-cta" onClick={() => setOpen(false)}>
              Book a test drive
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="em-mobile-note">
              3 Depot Lane, London SE1 4QT
              <br />
              Sample mobility studio &amp; charge network
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
