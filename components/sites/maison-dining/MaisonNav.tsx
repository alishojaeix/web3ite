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
        <nav aria-label="اصلی" className="md-nav-side md-nav-side--left">
          {maisonNav.slice(0, 2).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#top" className="md-brand" aria-label="مزون داینینگ، بازگشت به بالا">
          <span className="md-brand-name">مزون</span>
          <span className="md-brand-sub">سالن غذاخوری · پاریس</span>
        </a>

        <div className="md-nav-side md-nav-side--right">
          <nav aria-label="فرعی">
            {maisonNav.slice(2).map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#reserve" className="md-nav-cta">
            رزرو
          </a>
        </div>

        <button
          type="button"
          className="md-nav-toggle"
          aria-label={open ? "بستن پیمایش" : "باز کردن پیمایش"}
          aria-expanded={open}
          aria-controls="md-mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="md-mobile-wrap">
          <nav id="md-mobile-nav" aria-label="پیمایش موبایل" className="md-mobile-nav">
            {maisonNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#reserve" className="md-mobile-cta" onClick={() => setOpen(false)}>
              رزرو میز
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
