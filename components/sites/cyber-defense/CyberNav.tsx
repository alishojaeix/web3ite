"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ShieldMark } from "./Artwork";
import { cyberNav } from "./content";

export function CyberNav() {
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
    <header className="cd-nav">
      <div className="cd-wrap cd-nav-bar">
        <a href="#top" className="cd-brand" aria-label="سایبر دیفنس، بازگشت به بالا">
          <ShieldMark className="cd-brand-mark" />
          <span className="cd-brand-word">سایبر دیفنس</span>
          <span className="cd-brand-sub">پاسخ‌گویی مدیریت‌شده</span>
        </a>

        <nav aria-label="پیمایش اصلی" className="cd-nav-links">
          {cyberNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="cd-nav-tail">
          <a href="#contact" className="cd-nav-cta">
            درخواست شرح نیاز
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="cd-nav-toggle"
            aria-label={open ? "بستن پیمایش" : "باز کردن پیمایش"}
            aria-expanded={open}
            aria-controls="cd-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="cd-mobile-wrap">
          <nav id="cd-mobile-nav" aria-label="پیمایش موبایل" className="cd-mobile-nav">
            {cyberNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="cd-mobile-cta" onClick={() => setOpen(false)}>
              درخواست شرح نیاز
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="cd-mobile-note">
              میدان واچ‌تاور ۵، لندن E1
              <br />
              میز پاسخ‌گویی شبانه‌روزی · مجموعهٔ نمونه
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
