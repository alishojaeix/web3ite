"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { atelierNav } from "./content";

export function AtelierNav() {
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
    <header className="at-nav">
      <div className="at-wrap at-nav-inner">
        <a href="#top" className="at-brand" aria-label="آتلیه قهوه، بازگشت به بالا">
          <span className="at-brand-mark" aria-hidden="true">
            A
          </span>
          <span className="at-brand-name">
            <em>آتلیه</em> قهوه
          </span>
        </a>

        <nav aria-label="پیمایش اصلی" className="at-nav-links">
          {atelierNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#visit" className="at-nav-cta">
          درخواست جلسهٔ چشیدن
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="at-nav-toggle"
          aria-label={open ? "بستن پیمایش" : "باز کردن پیمایش"}
          aria-expanded={open}
          aria-controls="at-mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="at-mobile-wrap">
          <nav id="at-mobile-nav" aria-label="پیمایش موبایل" className="at-mobile-nav">
            {atelierNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a
              href="#visit"
              className="at-mobile-cta"
              onClick={() => setOpen(false)}
            >
              درخواست جلسهٔ چشیدن
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
