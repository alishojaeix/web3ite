"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { VaultMark } from "./Artwork";
import { vaultNav } from "./content";

export function VaultNav() {
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
    <header className="vl-nav">
      <div className="vl-wrap vl-nav-bar">
        <a href="#top" className="vl-brand" aria-label="والت‌لاین، بازگشت به بالا">
          <VaultMark className="vl-brand-mark" />
          <span className="vl-brand-word">والت‌لاین</span>
          <span className="vl-brand-sub">زیرساخت نگه‌داری</span>
        </a>

        <nav aria-label="پیمایش اصلی" className="vl-nav-links">
          {vaultNav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="vl-nav-tail">
          <a href="#contact" className="vl-nav-cta">
            مشاهدهٔ افشا
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="vl-nav-toggle"
            aria-label={open ? "بستن پیمایش" : "باز کردن پیمایش"}
            aria-expanded={open}
            aria-controls="vl-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="vl-mobile-wrap">
          <nav id="vl-mobile-nav" aria-label="پیمایش موبایل" className="vl-mobile-nav">
            {vaultNav.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="vl-mobile-cta" onClick={() => setOpen(false)}>
              مشاهدهٔ افشا
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <p className="vl-mobile-note">
              7 Bastion Court, London E2
              <br />
              نمای کلی کنترل‌ها · دوشنبه تا جمعه
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
