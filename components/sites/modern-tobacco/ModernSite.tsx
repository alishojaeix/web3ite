import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Edit, Grid, ShieldAlert } from "lucide-react";
import { TinMark, ModernTobaccoScene, MaterialSwatch } from "./Artwork";
import { ModernNav } from "./ModernNav";
import { ModernEdit, ModernShelf, ModernMaterials, ModernDetails } from "./ModernSections";
import { ModernNotice } from "./ModernNotice";
import {
  edit,
  contact,
  modernNav,
  hero,
  heroMeta,
  materials,
  shelf,
  specification,
} from "./content";

export function ModernSite() {
  return (
    <div className="mt-site" id="top">
      <a href="#mt-main" className="mt-skip">
        Skip to content
      </a>

      <div className="mt-topbar" role="note" aria-label="Boutique status">
        <div className="mt-wrap mt-topbar-inner">
          <span className="mt-topbar-status">
            <span className="mt-dot" aria-hidden="true" />
            {hero.status}
          </span>
          <span className="mt-topbar-sep" aria-hidden="true" />
          <span className="mt-topbar-note">{hero.note}</span>
          <a href="#contact" className="mt-topbar-link">
            Read the notice
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </div>
      </div>

      <ModernNav />

      <main id="mt-main">
        {/* HERO — Split editorial with steel tin shelf illustration */}
        <section className="mt-hero" aria-labelledby="mt-hero-title">
          <div className="mt-wrap mt-hero-split">
            <div className="mt-hero-copy">
              <p className="mt-eyebrow">
                <TinMark className="mt-eyebrow-mark" />
                <span>{hero.eyebrow}</span>
              </p>

              <h1 className="mt-display" id="mt-hero-title">
                <span>{hero.headline}</span>{" "}
                <span className="mt-display-accent">{hero.headlineAccent}</span>
              </h1>

              <p className="mt-lede">{hero.intro}</p>

              <div className="mt-actions">
                <a href="#showcase" className="mt-btn mt-btn--solid">
                  Browse the edit
                  <ArrowDownRight size={15} aria-hidden="true" />
                </a>
                <a href="#contact" className="mt-btn mt-btn--line">
                  Read the notice
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>

              <dl className="mt-hero-meta" aria-label="Boutique overview">
                {heroMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-hero-stage">
              <figure className="mt-stage-frame">
                <div className="mt-stage-bar" aria-hidden="true">
                  <span>BOUTIQUE // SHELF</span>
                  <span>STEEL · LIGHT · PAPER</span>
                  <span>ADULTS 18+ ONLY</span>
                </div>
                <ModernTobaccoScene />
                <figcaption className="mt-stage-caption">
                  <span>{hero.caption[0]}</span>
                  <span>{hero.caption[1]}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 01 / THE EDIT */}
        <section
          className="mt-section"
          id="showcase"
          aria-labelledby="mt-edit-title"
        >
          <div className="mt-wrap">
            <div className="mt-sec-head">
              <div>
                <p className="mt-kicker">
                  <Edit size={13} aria-hidden="true" />
                  {edit.label}
                </p>
                <h2 className="mt-h2" id="mt-edit-title">
                  {edit.title}
                </h2>
              </div>
              <p className="mt-sec-intro">{edit.intro}</p>
            </div>

            <ModernEdit />
          </div>
        </section>

        {/* 02 / THE SHELF */}
        <section
          className="mt-section mt-section--surface"
          id="story"
          aria-labelledby="mt-shelf-title"
        >
          <div className="mt-wrap">
            <div className="mt-sec-head">
              <div>
                <p className="mt-kicker">{shelf.label}</p>
                <h2 className="mt-h2" id="mt-shelf-title">
                  {shelf.title}
                </h2>
              </div>
              <p className="mt-sec-intro">{shelf.intro}</p>
            </div>

            <ModernShelf />
          </div>
        </section>

        {/* 03 / MATERIALS */}
        <section
          className="mt-section"
          id="materials"
          aria-labelledby="mt-materials-title"
        >
          <div className="mt-wrap">
            <div className="mt-sec-head">
              <div>
                <p className="mt-kicker">{materials.label}</p>
                <h2 className="mt-h2" id="mt-materials-title">
                  {materials.title}
                </h2>
              </div>
              <p className="mt-sec-intro">{materials.intro}</p>
            </div>

            <ModernMaterials />

            <p className="mt-footnote">{materials.note}</p>
          </div>
        </section>

        {/* 04 / DETAILS — Specification & Compliance */}
        <section
          className="mt-section mt-section--surface"
          id="specs"
          aria-labelledby="mt-specs-title"
        >
          <div className="mt-wrap">
            <div className="mt-sec-head">
              <div>
                <p className="mt-kicker">
                  <ShieldAlert size={13} aria-hidden="true" />
                  {specification.label}
                </p>
                <h2 className="mt-h2" id="mt-specs-title">
                  {specification.title}
                </h2>
              </div>
              <p className="mt-sec-intro">{specification.intro}</p>
            </div>

            <ModernDetails />
          </div>
        </section>

        {/* 05 / NOTICE — Age-gated contact form */}
        <section
          className="mt-section"
          id="contact"
          aria-labelledby="mt-contact-title"
        >
          <div className="mt-wrap mt-contact-grid">
            <div className="mt-contact-copy">
              <p className="mt-kicker">{contact.label}</p>
              <h2 className="mt-h2" id="mt-contact-title">
                {contact.title}
              </h2>
              <p className="mt-sec-intro">{contact.intro}</p>

              <dl className="mt-contact-facts" aria-label="Boutique details">
                {contact.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-address-grid">
                <div>
                  <span className="mt-meta-label">Boutique desk</span>
                  <a href={`mailto:${contact.email}`} className="mt-mail-link">
                    {contact.email}
                  </a>
                  <p className="mt-meta-sub">{contact.phone}</p>
                </div>
                <div>
                  <span className="mt-meta-label">Location & hours</span>
                  <p className="mt-meta-sub">
                    {contact.address.join(" · ")}
                    <br />
                    {contact.hours}
                  </p>
                </div>
              </div>
            </div>

            <ModernNotice />
          </div>
        </section>
      </main>

      <footer className="mt-footer">
        <div className="mt-wrap mt-footer-top">
          <div className="mt-footer-brand">
            <p className="mt-brand">
              <TinMark className="mt-brand-mark" />
              <span className="mt-brand-word">Modern Tobacco</span>
              <span className="mt-brand-sub">Adults 18+</span>
            </p>
            <p className="mt-footer-disclaimer">{contact.note}</p>
          </div>

          <nav aria-label="Footer navigation" className="mt-footer-links">
            {modernNav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-wrap mt-footer-bottom">
          <span>
            Modern Tobacco — fictional contemporary tobacco boutique demonstration. Adults 18+ only.
          </span>
          <div className="mt-footer-market">
            <Link href="/templates/modern-tobacco">Template detail</Link>
            <Link href="/templates">All templates</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}