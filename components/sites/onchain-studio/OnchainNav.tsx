"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BlockMark } from "./Artwork";
import { onchainNav } from "./content";

export function OnchainNav() {
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
    <header className="oc-nav">
      <div className="oc-wrap oc-nav-bar">
        <a href="#top" className="oc-brand" aria-label="Onchain Studio, back to top">
          <BlockMark className="oc-brand-mark" />
          <span className="oc-brand-word">Onchain</span>
          <span className="oc-brand-sub">Product studio</span>
        </a>

        <nav aria-label="Primary" className="oc-nav-links">
          {onchainNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="oc-nav-tail">
          <a href="#contact" className="oc-nav-cta">
            Start a project
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="oc-nav-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="oc-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="oc-mobile-wrap">
          <nav id="oc-mobile-nav" aria-label="Mobile navigation" className="oc-mobile-nav">
            {onchainNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="oc-mobile-cta" onClick={() => setOpen(false)}>
              Start a project
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="oc-mobile-note">
              12 Ledger Lane, London E2
              <br />
              Project brief · Monday to Friday
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
