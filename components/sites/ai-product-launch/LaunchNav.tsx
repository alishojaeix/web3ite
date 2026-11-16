"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PrismMark } from "./Artwork";
import { launchNav } from "./content";

export function LaunchNav() {
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
    <header className="la-nav">
      <div className="la-wrap la-nav-bar">
        <a href="#top" className="la-brand" aria-label="Prism, back to top">
          <PrismMark className="la-brand-mark" />
          <span className="la-brand-word">Prism</span>
          <span className="la-brand-sub">Compute layer</span>
        </a>

        <nav aria-label="Primary" className="la-nav-links">
          {launchNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="la-nav-tail">
          <a href="#contact" className="la-nav-cta">
            Reserve the first run
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="la-nav-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="la-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="la-mobile-wrap">
          <nav id="la-mobile-nav" aria-label="Mobile navigation" className="la-mobile-nav">
            {launchNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="la-mobile-cta" onClick={() => setOpen(false)}>
              Reserve the first run
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="la-mobile-note">
              9 Studio Row, London E2
              <br />
              First run · Monday to Friday
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
