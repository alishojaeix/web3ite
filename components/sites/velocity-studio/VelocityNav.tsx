"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { VelocityMark } from "./Artwork";
import { velocityNav } from "./content";

export function VelocityNav() {
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
    <header className="vs-nav">
      <div className="vs-wrap vs-nav-bar">
        <a href="#top" className="vs-brand" aria-label="استودیوی ولوکیتی، بازگشت به بالا">
          <VelocityMark className="vs-brand-mark" />
          <span className="vs-brand-word">استودیوی ولوکیتی</span>
          <span className="vs-brand-sub">آیرودینامیک ۰۱</span>
        </a>

        <nav aria-label="پیمایش اصلی" className="vs-nav-links">
          {velocityNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="vs-nav-tail">
          <a href="#showcase" className="vs-nav-cta">
            دیدن مطالعه
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="vs-nav-toggle"
            aria-label={open ? "بستن پیمایش" : "باز کردن پیمایش"}
            aria-expanded={open}
            aria-controls="vs-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="vs-mobile-wrap">
          <nav id="vs-mobile-nav" aria-label="پیمایش موبایل" className="vs-mobile-nav">
            {velocityNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#showcase" className="vs-mobile-cta" onClick={() => setOpen(false)}>
              دیدن مطالعه
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="vs-mobile-note">
              خیابان آیرو ۸، لندن SE1
              <br />
              دوشنبه تا جمعه · استودیوی نمونه
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
