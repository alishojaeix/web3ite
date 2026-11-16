"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { soraNav } from "./content";

export function SoraNav() {
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
    <header className="sr-nav">
      <div className="sr-wrap sr-nav-bar">
        <a href="#top" className="sr-brand" aria-label="Sora, back to top">
          <span className="sr-brand-word">Sora</span>
          <span className="sr-brand-sub">Modern Japanese dining</span>
        </a>

        <nav aria-label="Primary" className="sr-nav-links">
          {soraNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sr-nav-tail">
          <a href="#visit" className="sr-nav-cta">
            Request a table
          </a>
          <button
            type="button"
            className="sr-nav-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="sr-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="sr-mobile-wrap">
          <nav id="sr-mobile-nav" aria-label="Mobile navigation" className="sr-mobile-nav">
            {soraNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#visit" className="sr-mobile-cta" onClick={() => setOpen(false)}>
              Request a table
            </a>
            <p className="sr-mobile-note">
              3 Garden Lane, London E2
              <br />
              Lunch and dinner · Tuesday to Sunday
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
