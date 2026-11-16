"use client";

import { useEffect, useState } from "react";
import { Flame, Menu, X } from "lucide-react";
import { emberNav } from "./content";

export function EmberNav() {
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
    <header className="ek-nav">
      <div className="ek-wrap ek-nav-bar">
        <a href="#top" className="ek-brand" aria-label="Ember Kitchen, back to top">
          <span className="ek-brand-mark" aria-hidden="true">
            <Flame size={16} strokeWidth={1.6} />
          </span>
          <span className="ek-brand-word">
            Ember
            <small>Kitchen</small>
          </span>
        </a>

        <nav aria-label="Primary" className="ek-nav-links">
          {emberNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ek-nav-tail">
          <a href="#book" className="ek-nav-cta">
            Book the counter
          </a>
          <button
            type="button"
            className="ek-nav-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="ek-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="ek-mobile-wrap">
          <nav id="ek-mobile-nav" aria-label="Mobile navigation" className="ek-mobile-nav">
            {emberNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#book" className="ek-mobile-cta" onClick={() => setOpen(false)}>
              Book the counter
            </a>
            <p className="ek-mobile-note">
              22 Kiln Street, London E2
              <br />
              Tuesday – Saturday · from 17:30
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
