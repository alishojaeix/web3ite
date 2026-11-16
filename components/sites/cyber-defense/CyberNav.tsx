"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ShieldMark } from "./Artwork";
import { cyberNav } from "./content";

export function CyberNav() {
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
    <header className="cd-nav">
      <div className="cd-wrap cd-nav-bar">
        <a href="#top" className="cd-brand" aria-label="Cyber Defense, back to top">
          <ShieldMark className="cd-brand-mark" />
          <span className="cd-brand-word">Cyber Defense</span>
          <span className="cd-brand-sub">Managed response</span>
        </a>

        <nav aria-label="Primary" className="cd-nav-links">
          {cyberNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="cd-nav-tail">
          <a href="#contact" className="cd-nav-cta">
            Request a brief
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="cd-nav-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="cd-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="cd-mobile-wrap">
          <nav id="cd-mobile-nav" aria-label="Mobile navigation" className="cd-mobile-nav">
            {cyberNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="cd-mobile-cta" onClick={() => setOpen(false)}>
              Request a brief
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="cd-mobile-note">
              5 Watchtower Square, London E1
              <br />
              24/7 response desk · sample practice
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
