"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CigarMark } from "./Artwork";
import { cigarNav } from "./content";

export function CigarNav() {
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
    <header className="ca-nav">
      <div className="ca-wrap ca-nav-bar">
        <a href="#top" className="ca-brand" aria-label="Cigar Atelier, back to top">
          <CigarMark className="ca-brand-mark" />
          <span className="ca-brand-word">Cigar Atelier</span>
          <span className="ca-brand-sub">Adults 18+</span>
        </a>

        <nav aria-label="Primary" className="ca-nav-links">
          {cigarNav.map((item, idx) => (
            <a key={item.href} href={item.href}>
              <span className="ca-nav-idx" aria-hidden="true">
                0{idx + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ca-nav-tail">
          <a href="#contact" className="ca-nav-cta">
            Read the notice
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="ca-nav-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="ca-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="ca-mobile-wrap">
          <nav id="ca-mobile-nav" aria-label="Mobile navigation" className="ca-mobile-nav">
            {cigarNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ca-mobile-cta" onClick={() => setOpen(false)}>
              Read the notice
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="ca-mobile-note">
              By appointment only · Fictional house · Adults 18+
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}