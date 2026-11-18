"use client";

import { useEffect, useState } from "react";
import { Flame, Menu, X } from "lucide-react";
import { emberNav } from "./content";

export function EmberNav() {
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
    <header className="ek-nav">
      <div className="ek-wrap ek-nav-bar">
        <a href="#top" className="ek-brand" aria-label="امبر کیچن، بازگشت به بالا">
          <span className="ek-brand-mark" aria-hidden="true">
            <Flame size={16} strokeWidth={1.6} />
          </span>
          <span className="ek-brand-word">
            Ember
            <small>آشپزخانه</small>
          </span>
        </a>

        <nav aria-label="پیمایش اصلی" className="ek-nav-links">
          {emberNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ek-nav-tail">
          <a href="#book" className="ek-nav-cta">
            رزرو کانتر
          </a>
          <button
            type="button"
            className="ek-nav-toggle"
            aria-label={open ? "بستن پیمایش" : "باز کردن پیمایش"}
            aria-expanded={open}
            aria-controls="ek-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="ek-mobile-wrap">
          <nav id="ek-mobile-nav" aria-label="پیمایش موبایل" className="ek-mobile-nav">
            {emberNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#book" className="ek-mobile-cta" onClick={() => setOpen(false)}>
              رزرو کانتر
            </a>
            <p className="ek-mobile-note">
              22 خیابان کیلن، لندن E2
              <br />
              سه‌شنبه تا شنبه · از ۱۷:۳۰
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
