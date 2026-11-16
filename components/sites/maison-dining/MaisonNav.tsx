"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { maisonNav } from "./content";

export function MaisonNav() {
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
    <header className="md-nav">
      <div className="md-wrap md-nav-grid">
        <nav aria-label="Primary" className="md-nav-side md-nav-side--left">
          {maisonNav.slice(0, 2).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#top" className="md-brand" aria-label="Maison Dining, back to top">
          <span className="md-brand-name">Maison</span>
          <span className="md-brand-sub">Dining room · Paris</span>
        </a>

        <div className="md-nav-side md-nav-side--right">
          <nav aria-label="Secondary">
            {maisonNav.slice(2).map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#reserve" className="md-nav-cta">
            Reserve
          </a>
        </div>

        <button
          type="button"
          className="md-nav-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="md-mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="md-mobile-wrap">
          <nav id="md-mobile-nav" aria-label="Mobile navigation" className="md-mobile-nav">
            {maisonNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#reserve" className="md-mobile-cta" onClick={() => setOpen(false)}>
              Reserve a table
            </a>
            <p className="md-mobile-note">
              One seating · 18:30{" "}
              <br />
              6 Rue des Orfèvres, Paris 1er
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
