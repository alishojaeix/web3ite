"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { QMark } from "./Artwork";
import { qsNav } from "./content";

export function QuantumNav() {
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
    <header className="qs-nav">
      <div className="qs-wrap qs-nav-bar">
        <a href="#top" className="qs-brand" aria-label="کوانتوم سیستمز، بازگشت به بالا">
          <QMark className="qs-brand-mark" />
          <span className="qs-brand-word">
            کوانتوم <span>سیستمز</span>
          </span>
          <span className="qs-brand-sub">پردازش دقیق</span>
        </a>

        <nav aria-label="پیمایش اصلی" className="qs-nav-links">
          {qsNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="qs-nav-tail">
          <a href="#contact" className="qs-nav-cta">
            شرح فنی
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="qs-nav-toggle"
            aria-label={open ? "بستن پیمایش" : "باز کردن پیمایش"}
            aria-expanded={open}
            aria-controls="qs-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="qs-mobile-wrap">
          <nav id="qs-mobile-nav" aria-label="پیمایش موبایل" className="qs-mobile-nav">
            {qsNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="qs-mobile-cta" onClick={() => setOpen(false)}>
              درخواست شرح فنی
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="qs-mobile-note">
              1 Meridian Works, London E2
              <br />
              پردازش دقیق · دوشنبه تا جمعه
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
