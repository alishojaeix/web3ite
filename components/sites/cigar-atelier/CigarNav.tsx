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
        <a href="#top" className="ca-brand" aria-label="سیگار آتلیه، بازگشت به بالا">
          <CigarMark className="ca-brand-mark" />
          <span className="ca-brand-word">سیگار آتلیه</span>
          <span className="ca-brand-sub">نمایه خانه</span>
        </a>

        <nav aria-label="پیمایش اصلی" className="ca-nav-links">
          {cigarNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ca-nav-tail">
          <span className="ca-age-badge" aria-label="فقط برای بزرگسالان بالای ۱۸ سال">
            18+
          </span>
          <a href="#contact" className="ca-nav-cta">
            مطالعه اطلاعیه
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="ca-nav-toggle"
            aria-label={open ? "بستن پیمایش" : "باز کردن پیمایش"}
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
          <nav id="ca-mobile-nav" aria-label="پیمایش موبایل" className="ca-mobile-nav">
            {cigarNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ca-mobile-cta" onClick={() => setOpen(false)}>
              مطالعه اطلاعیه
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="ca-mobile-note">
              خانه سیگار برگ خیالی · فقط بزرگسالان بالای ۱۸ سال.
              <br />
              بدون فروش، موجودی یا ادعای سلامت.
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
