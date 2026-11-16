"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { MarqueMark } from "./Artwork";
import { apexNav } from "./content";

export function ApexNav() {
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
    <header className="ap-nav">
      <div className="ap-wrap ap-nav-bar">
        <a href="#top" className="ap-brand" aria-label="Apex Marque, back to top">
          <MarqueMark className="ap-brand-mark" />
          <span className="ap-brand-word">Apex Marque</span>
          <span className="ap-brand-sub">Grand tourer</span>
        </a>

        <nav aria-label="Primary" className="ap-nav-links">
          {apexNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ap-nav-tail">
          <a href="#contact" className="ap-nav-cta">
            Build a spec
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="ap-nav-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="ap-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="ap-mobile-wrap">
          <nav id="ap-mobile-nav" aria-label="Mobile navigation" className="ap-mobile-nav">
            {apexNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ap-mobile-cta" onClick={() => setOpen(false)}>
              Build a spec
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="ap-mobile-note">
              1 Concours Way, London W1K
              <br />
              By appointment · sample marque
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
