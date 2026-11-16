import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, BookOpen, Scale, ShieldAlert } from "lucide-react";
import { CigarMark, CigarAtelierScene, MaterialSwatch } from "./Artwork";
import { CigarNav } from "./CigarNav";
import { CigarShowcase, CigarMaterials, CigarDetails } from "./CigarSections";
import { CigarNotice } from "./CigarNotice";
import {
  atelier,
  contact,
  cigarNav,
  hero,
  heroMeta,
  materials,
  specification,
} from "./content";

export function CigarSite() {
  return (
    <div className="ca-site" id="top">
      <a href="#ca-main" className="ca-skip">
        Skip to content
      </a>

      <div className="ca-topbar" role="note" aria-label="Atelier status">
        <div className="ca-wrap ca-topbar-inner">
          <span className="ca-topbar-status">
            <span className="ca-dot" aria-hidden="true" />
            {hero.status}
          </span>
          <span className="ca-topbar-sep" aria-hidden="true" />
          <span className="ca-topbar-note">{hero.note}</span>
          <a href="#contact" className="ca-topbar-link">
            Read the notice
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </div>
      </div>

      <CigarNav />

      <main id="ca-main">
        {/* HERO — Split editorial with vitrine illustration */}
        <section className="ca-hero" aria-labelledby="ca-hero-title">
          <div className="ca-wrap ca-hero-split">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">
                <CigarMark className="ca-eyebrow-mark" />
                <span>{hero.eyebrow}</span>
              </p>

              <h1 className="ca-display" id="ca-hero-title">
                <span>{hero.headline}</span>{" "}
                <span className="ca-display-accent">{hero.headlineAccent}</span>
              </h1>

              <p className="ca-lede">{hero.intro}</p>

              <div className="ca-actions">
                <a href="#showcase" className="ca-btn ca-btn--solid">
                  View the collection
                  <ArrowDownRight size={15} aria-hidden="true" />
                </a>
                <a href="#contact" className="ca-btn ca-btn--line">
                  Read the notice
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>

              <dl className="ca-hero-meta" aria-label="House overview">
                {heroMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="ca-hero-stage">
              <figure className="ca-stage-frame">
                <div className="ca-stage-bar" aria-hidden="true">
                  <span>ATELIER // VITRINE</span>
                  <span>INDEXED FORMATS · CEDAR-LINED</span>
                  <span>ADULTS 18+ ONLY</span>
                </div>
                <CigarAtelierScene />
                <figcaption className="ca-stage-caption">
                  <span>{hero.caption[0]}</span>
                  <span>{hero.caption[1]}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* 01 / THE ATELIER — Collection */}
        <section
          className="ca-section"
          id="showcase"
          aria-labelledby="ca-atelier-title"
        >
          <div className="ca-wrap">
            <div className="ca-sec-head">
              <div>
                <p className="ca-kicker">
                  <BookOpen size={13} aria-hidden="true" />
                  {atelier.label}
                </p>
                <h2 className="ca-h2" id="ca-atelier-title">
                  {atelier.title}
                </h2>
              </div>
              <p className="ca-sec-intro">{atelier.intro}</p>
            </div>

            <CigarShowcase />
          </div>
        </section>

        {/* 02 / THE MATERIALS */}
        <section
          className="ca-section ca-section--surface"
          id="materials"
          aria-labelledby="ca-materials-title"
        >
          <div className="ca-wrap">
            <div className="ca-sec-head">
              <div>
                <p className="ca-kicker">{materials.label}</p>
                <h2 className="ca-h2" id="ca-materials-title">
                  {materials.title}
                </h2>
              </div>
              <p className="ca-sec-intro">{materials.intro}</p>
            </div>

            <CigarMaterials />

            <p className="ca-footnote">{materials.note}</p>
          </div>
        </section>

        {/* 03 / DETAILS — Specification & Compliance */}
        <section
          className="ca-section"
          id="specs"
          aria-labelledby="ca-specs-title"
        >
          <div className="ca-wrap">
            <div className="ca-sec-head">
              <div>
                <p className="ca-kicker">
                  <Scale size={13} aria-hidden="true" />
                  {specification.label}
                </p>
                <h2 className="ca-h2" id="ca-specs-title">
                  {specification.title}
                </h2>
              </div>
              <p className="ca-sec-intro">{specification.intro}</p>
            </div>

            <CigarDetails />
          </div>
        </section>

        {/* 04 / NOTICE — Age-gated contact form */}
        <section
          className="ca-section ca-section--surface"
          id="contact"
          aria-labelledby="ca-contact-title"
        >
          <div className="ca-wrap ca-contact-grid">
            <div className="ca-contact-copy">
              <p className="ca-kicker">{contact.label}</p>
              <h2 className="ca-h2" id="ca-contact-title">
                {contact.title}
              </h2>
              <p className="ca-sec-intro">{contact.intro}</p>

              <dl className="ca-contact-facts" aria-label="House details">
                {contact.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="ca-address-grid">
                <div>
                  <span className="ca-meta-label">House desk</span>
                  <a href={`mailto:${contact.email}`} className="ca-mail-link">
                    {contact.email}
                  </a>
                  <p className="ca-meta-sub">{contact.phone}</p>
                </div>
                <div>
                  <span className="ca-meta-label">Location & hours</span>
                  <p className="ca-meta-sub">
                    {contact.address.join(" · ")}
                    <br />
                    {contact.hours}
                  </p>
                </div>
              </div>
            </div>

            <CigarNotice />
          </div>
        </section>
      </main>

      <footer className="ca-footer">
        <div className="ca-wrap ca-footer-top">
          <div className="ca-footer-brand">
            <p className="ca-brand">
              <CigarMark className="ca-brand-mark" />
              <span className="ca-brand-word">Cigar Atelier</span>
              <span className="ca-brand-sub">Adults 18+</span>
            </p>
            <p className="ca-footer-disclaimer">{contact.note}</p>
          </div>

          <nav aria-label="Footer navigation" className="ca-footer-links">
            {cigarNav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="ca-wrap ca-footer-bottom">
          <span>
            Cigar Atelier — fictional luxury tobacco demonstration. Adults 18+ only.
          </span>
          <div className="ca-footer-market">
            <Link href="/templates/cigar-atelier">Template detail</Link>
            <Link href="/templates">All templates</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}