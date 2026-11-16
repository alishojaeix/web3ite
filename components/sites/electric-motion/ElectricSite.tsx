import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Sparkles, Sun, Zap } from "lucide-react";
import { MaterialSwatch, PodArchHeroStage, PodMark } from "./Artwork";
import { ElectricBooking } from "./ElectricBooking";
import { ElectricNav } from "./ElectricNav";
import { ElectricPlanner } from "./ElectricPlanner";
import {
  cityStory,
  contact,
  electricNav,
  hero,
  heroBadges,
  highlights,
  materials,
  specification,
  vehicleShowcase,
} from "./content";

export function ElectricSite() {
  return (
    <div className="em-site" id="top">
      <a href="#em-main" className="em-skip">
        Skip to content
      </a>

      <div className="em-topbar" role="note" aria-label="Mobility pilot notice">
        <div className="em-wrap em-topbar-inner">
          <span className="em-topbar-status">
            <span className="em-dot" aria-hidden="true" />
            {hero.status}
          </span>
          <span className="em-topbar-note">{hero.note}</span>
          <a href="#showcase" className="em-topbar-link">
            Charge &amp; range calculator
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </div>
      </div>

      <ElectricNav />

      <main id="em-main">
        {/* HERO — Centered Daylight Courtyard with Pod & Semicircular Arch */}
        <section className="em-hero" aria-labelledby="em-hero-title">
          <div className="em-wrap">
            <div className="em-hero-center">
              <p className="em-eyebrow">
                <PodMark className="em-eyebrow-icon" />
                <span>{hero.eyebrow}</span>
              </p>

              <h1 className="em-display" id="em-hero-title">
                <span>{hero.headline}</span>{" "}
                <span className="em-display-accent">{hero.headlineAccent}</span>
              </h1>

              <p className="em-lede">{hero.intro}</p>

              <div className="em-actions">
                <a href="#showcase" className="em-btn em-btn--solid">
                  Meet the vehicle
                  <ArrowDownRight size={15} aria-hidden="true" />
                </a>
                <a href="#contact" className="em-btn em-btn--line">
                  Book a test drive
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>

              <ul className="em-badge-row" aria-label="Key vehicle highlights">
                {heroBadges.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="em-hero-stage">
              <PodArchHeroStage />
              <figcaption className="em-hero-caption">
                <span>{hero.caption[0]}</span>
                <span>{hero.caption[1]}</span>
              </figcaption>
            </figure>

            <dl className="em-highlights" aria-label="Illustrative figures">
              {highlights.map((item) => (
                <div key={item.label} className="em-highlight-card">
                  <dt>{item.label}</dt>
                  <dd className="em-highlight-val">
                    {item.value}
                    <span>{item.unit}</span>
                  </dd>
                  <dd className="em-highlight-note">{item.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 01 / THE CITY — Built for Short Distances */}
        <section
          className="em-section"
          id="story"
          aria-labelledby="em-story-title"
        >
          <div className="em-wrap">
            <div className="em-sec-head">
              <div>
                <p className="em-kicker">
                  <Sun size={14} aria-hidden="true" />
                  {cityStory.label}
                </p>
                <h2 className="em-h2" id="em-story-title">
                  {cityStory.title}
                </h2>
              </div>
              <p className="em-sec-intro">{cityStory.intro}</p>
            </div>

            <div className="em-story-grid">
              {cityStory.chapters.map((chapter) => (
                <article key={chapter.index} className="em-story-card">
                  <div className="em-story-card-top">
                    <span className="em-story-num">{chapter.index}</span>
                    <span className="em-pill">{chapter.metric}</span>
                  </div>
                  <h3 className="em-h3">{chapter.title}</h3>
                  <p>{chapter.body}</p>
                </article>
              ))}
            </div>

            <blockquote className="em-quote-banner">
              <p>&ldquo;{cityStory.quote.text}&rdquo;</p>
              <footer>{cityStory.quote.note}</footer>
            </blockquote>
          </div>
        </section>

        {/* 02 / THE VEHICLE & CHARGE — Interactive Loop & Hub Planner */}
        <section
          className="em-section em-section--tinted"
          id="showcase"
          aria-labelledby="em-showcase-title"
        >
          <div className="em-wrap">
            <div className="em-sec-head">
              <div>
                <p className="em-kicker">
                  <Zap size={14} aria-hidden="true" />
                  {vehicleShowcase.label}
                </p>
                <h2 className="em-h2" id="em-showcase-title">
                  {vehicleShowcase.title}
                </h2>
              </div>
              <p className="em-sec-intro">{vehicleShowcase.intro}</p>
            </div>

            <ElectricPlanner />

            <p className="em-footnote">{vehicleShowcase.note}</p>
          </div>
        </section>

        {/* 03 / SPECIFICATION — Contrasting Dark Forest Pavilion Chapter */}
        <section
          className="em-section em-section--dark"
          id="specs"
          aria-labelledby="em-specs-title"
        >
          <div className="em-wrap">
            <div className="em-sec-head">
              <div>
                <p className="em-kicker">{specification.label}</p>
                <h2 className="em-h2" id="em-specs-title">
                  {specification.title}
                </h2>
              </div>
              <p className="em-sec-intro">{specification.intro}</p>
            </div>

            <div className="em-spec-grid">
              {specification.groups.map((group, idx) => (
                <div key={group.title} className="em-spec-card">
                  <div className="em-spec-head">
                    <span>0{idx + 1}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <dl className="em-spec-dl">
                    {group.rows.map((row) => (
                      <div key={row.label} className="em-spec-row">
                        <dt>{row.label}</dt>
                        <dd>{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>

            <p className="em-honest-box">{specification.honestNote}</p>
          </div>
        </section>

        {/* 04 / MATERIALS — Daylight, Textile & Arch */}
        <section
          className="em-section"
          id="materials"
          aria-labelledby="em-materials-title"
        >
          <div className="em-wrap">
            <div className="em-sec-head">
              <div>
                <p className="em-kicker">
                  <Sparkles size={14} aria-hidden="true" />
                  {materials.label}
                </p>
                <h2 className="em-h2" id="em-materials-title">
                  {materials.title}
                </h2>
              </div>
              <p className="em-sec-intro">{materials.intro}</p>
            </div>

            <div className="em-materials-grid">
              {materials.items.map((item) => (
                <article key={item.name} className="em-material-card">
                  <MaterialSwatch variant={item.swatch} />
                  <div className="em-material-body">
                    <span className="em-material-tag">{item.note}</span>
                    <h3 className="em-h3">{item.name}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="em-footnote">{materials.note}</p>
          </div>
        </section>

        {/* 05 / VISIT & TEST DRIVE */}
        <section
          className="em-section em-section--tinted"
          id="contact"
          aria-labelledby="em-contact-title"
        >
          <div className="em-wrap em-contact-grid">
            <div className="em-contact-copy">
              <p className="em-kicker">{contact.label}</p>
              <h2 className="em-h2" id="em-contact-title">
                {contact.title}
              </h2>
              <p className="em-sec-intro">{contact.intro}</p>

              <dl className="em-contact-facts">
                {contact.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="em-address-cards">
                <div>
                  <span className="em-meta-label">Studio courtyard</span>
                  <p className="em-meta-val">
                    {contact.address.join(", ")}
                    <br />
                    {contact.hours}
                  </p>
                </div>
                <div>
                  <span className="em-meta-label">Direct desk</span>
                  <a href={`mailto:${contact.email}`} className="em-mail-link">
                    {contact.email}
                  </a>
                  <p className="em-meta-val">{contact.phone}</p>
                </div>
              </div>
            </div>

            <ElectricBooking />
          </div>
        </section>
      </main>

      <footer className="em-footer">
        <div className="em-wrap em-footer-top">
          <div>
            <p className="em-brand">
              <span className="em-brand-badge">
                <PodMark className="em-brand-mark" />
              </span>
              <span className="em-brand-word">Electric Motion</span>
              <span className="em-brand-sub">Urban mobility</span>
            </p>
            <p className="em-footer-note">{contact.note}</p>
          </div>

          <nav aria-label="Footer navigation" className="em-footer-links">
            {electricNav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="em-wrap em-footer-bottom">
          <span>
            Electric Motion — fictional urban electric mobility demonstration.
          </span>
          <div className="em-footer-market">
            <Link href="/templates/electric-motion">Template detail</Link>
            <Link href="/templates">All templates</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
