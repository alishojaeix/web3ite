"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Mark } from "./Artwork";
import { neuralNav } from "./content";

export function NeuralNav() {
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
    <header className="ns-nav">
      <div className="ns-wrap ns-nav-bar">
        <a href="#top" className="ns-brand" aria-label="Neural Studio, back to top">
          <Mark className="ns-brand-mark" />
          <span className="ns-brand-word">Neural</span>
          <span className="ns-brand-sub">Applied AI</span>
        </a>

        <nav aria-label="Primary" className="ns-nav-links">
          {neuralNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ns-nav-tail">
          <a href="#contact" className="ns-nav-cta">
            Start a project
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="ns-nav-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="ns-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="ns-mobile-wrap">
          <nav id="ns-mobile-nav" aria-label="Mobile navigation" className="ns-mobile-nav">
            {neuralNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ns-mobile-cta" onClick={() => setOpen(false)}>
              Start a project
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="ns-mobile-note">
              4 Signal Yard, London E2
              <br />
              Applied AI · Monday to Friday
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
