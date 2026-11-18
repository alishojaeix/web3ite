"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { TinMark } from "./Artwork";
import { modernNav } from "./content";

export function ModernNav() {
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
    <header className="mt-nav">
      <div className="mt-wrap mt-nav-bar">
        <a href="#top" className="mt-brand" aria-label="مدرن توباکو، بازگشت به بالا">
          <span className="mt-brand-badge">
            <TinMark className="mt-brand-mark" />
          </span>
          <span className="mt-brand-word">مدرن توباکو</span>
          <span className="mt-brand-sub">بوتیک</span>
        </a>

        <nav aria-label="پیمایش اصلی" className="mt-nav-links">
          {modernNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-nav-tail">
          <span className="mt-age-badge" aria-label="فقط برای بزرگسالان بالای ۱۸ سال">
            18+
          </span>
          <a href="#contact" className="mt-nav-cta">
            مطالعه اطلاعیه
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="mt-nav-toggle"
            aria-label={open ? "بستن پیمایش" : "باز کردن پیمایش"}
            aria-expanded={open}
            aria-controls="mt-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mt-mobile-wrap">
          <nav id="mt-mobile-nav" aria-label="پیمایش موبایل" className="mt-mobile-nav">
            {modernNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="mt-mobile-cta" onClick={() => setOpen(false)}>
              مطالعه اطلاعیه
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="mt-mobile-note">
              بوتیک خیالی · فقط بزرگسالان بالای ۱۸ سال.
              <br />
              بدون فروش، موجودی یا ادعای سلامت.
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
