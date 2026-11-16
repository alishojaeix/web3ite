import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { LaunchNav } from "./LaunchNav";
import { LaunchReserve } from "./LaunchReserve";
import {
  BeamRule,
  MaterialSwatch,
  PrismMark,
  PrismStage,
  SectionStack,
} from "./Artwork";
import {
  hero,
  heroMeta,
  launchNav,
  materials,
  reserve,
  showcase,
  specs,
  story,
  strip,
} from "./content";

export function LaunchSite() {
  return (
    <div className="la-site" id="top">
      <a className="la-skip" href="#la-main">
        Skip to content
      </a>

      <LaunchNav />

      <main id="la-main">
        <section className="la-hero" aria-labelledby="la-hero-title">
          <div className="la-wrap la-hero-top">
            <p>9 Studio Row · London E2</p>
            <p className="la-status">
              <span className="la-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="la-wrap la-hero-copy">
            <p className="la-eyebrow">
              <PrismMark className="la-eyebrow-mark" />
              {hero.eyebrow}
            </p>

            <h1 id="la-hero-title">
              {hero.headline}
              <br />
              <span>{hero.headlineAccent}</span>
            </h1>

            <p className="la-hero-lede">{hero.intro}</p>

            <div className="la-actions">
              <a className="la-btn la-btn--solid" href="#showcase">
                {hero.primaryCta}
                <ArrowDown size={15} aria-hidden="true" />
              </a>
              <a className="la-btn la-btn--line" href="#specs">
                {hero.secondaryCta}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <dl className="la-hero-meta">
              {heroMeta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <p className="la-demo-note">{hero.note}</p>
          </div>

          <figure className="la-stage-figure">
            <div className="la-stage-frame">
              <PrismStage />
              <span className="la-stage-badge" aria-hidden="true">
                PRISM 01
              </span>
            </div>
            <figcaption className="la-wrap">
              {hero.caption.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </figcaption>
          </figure>

          <div className="la-wrap la-hero-foot">
            <a className="la-scroll-cue" href="#showcase">
              Meet the product
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>{hero.footNote}</p>
          </div>
        </section>

        <div className="la-strip">
          <div className="la-wrap">
            <ul>
              {strip.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <section
          id="showcase"
          className="la-section la-object"
          aria-labelledby="la-object-title"
        >
          <div className="la-wrap">
            <BeamRule />
            <div className="la-section-head">
              <div>
                <p className="la-eyebrow">{showcase.label}</p>
                <h2 id="la-object-title">{showcase.title}</h2>
              </div>
              <p className="la-section-lede">{showcase.intro}</p>
            </div>

            <div className="la-features">
              {showcase.features.map((feature) => (
                <article className="la-feature" key={feature.index}>
                  <div className="la-feature-top">
                    <span className="la-feature-index" aria-hidden="true">
                      {feature.index}
                    </span>
                    <PrismMark className="la-feature-mark" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                  <p className="la-feature-detail">{feature.detail}</p>
                </article>
              ))}
            </div>

            <div className="la-quote-band">
              <p className="la-quote">&ldquo;{showcase.quote.text}&rdquo;</p>
              <p className="la-quote-note">{showcase.quote.note}</p>
            </div>

            <p className="la-note-line">{showcase.note}</p>
          </div>
        </section>

        <section
          id="specs"
          className="la-section la-specs"
          aria-labelledby="la-specs-title"
        >
          <div className="la-wrap">
            <div className="la-section-head">
              <div>
                <p className="la-eyebrow">{specs.label}</p>
                <h2 id="la-specs-title">{specs.title}</h2>
              </div>
              <p className="la-section-lede">{specs.intro}</p>
            </div>

            <div className="la-spec-grid">
              {specs.groups.map((group) => (
                <div className="la-spec-panel" key={group.title}>
                  <div className="la-panel-head">
                    <span>{group.title}</span>
                    <span aria-hidden="true">PRISM / 01</span>
                  </div>
                  <dl className="la-spec-dl">
                    {group.rows.map((row) => (
                      <div key={row.label}>
                        <dt>
                          <span>{row.label}</span>
                          <span className="la-spec-note">{row.note}</span>
                        </dt>
                        <dd>{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>

            <div className="la-spec-foot">
              <p>{specs.note}</p>
              <p className="la-spec-stamp" aria-hidden="true">
                DEMO VALUES · NOT A DATASHEET
              </p>
            </div>
            <p className="la-spec-footnote">{specs.footnote}</p>
          </div>
        </section>

        <section
          id="story"
          className="la-section la-story"
          aria-labelledby="la-story-title"
        >
          <div className="la-wrap la-story-grid">
            <div className="la-story-copy">
              <p className="la-eyebrow">{story.label}</p>
              <h2 id="la-story-title">{story.title}</h2>
              <p className="la-section-lede">{story.intro}</p>

              <ol className="la-beats">
                {story.beats.map((beat) => (
                  <li key={beat.step}>
                    <div className="la-beat-head">
                      <span className="la-beat-step" aria-hidden="true">
                        {beat.step}
                      </span>
                      <span className="la-beat-tag">{beat.tag}</span>
                    </div>
                    <h3>{beat.title}</h3>
                    <p>{beat.body}</p>
                  </li>
                ))}
              </ol>

              <p className="la-note-line">{story.note}</p>
            </div>

            <figure className="la-stack-frame">
              <div className="la-panel-head">
                <span>FIG. 02 / EXPLODED VIEW</span>
                <span>A / B / C</span>
              </div>
              <SectionStack />
              <figcaption>Illustrative section drawing · not an engineering file</figcaption>
            </figure>
          </div>
        </section>

        <section
          id="materials"
          className="la-section la-materials"
          aria-labelledby="la-materials-title"
        >
          <div className="la-wrap">
            <div className="la-section-head">
              <div>
                <p className="la-eyebrow">{materials.label}</p>
                <h2 id="la-materials-title">{materials.title}</h2>
              </div>
              <p className="la-section-lede">{materials.intro}</p>
            </div>

            <div className="la-material-grid">
              {materials.items.map((item) => (
                <article className="la-material" key={item.name}>
                  <div className="la-swatch-frame">
                    <MaterialSwatch variant={item.swatch} />
                    <span className="la-swatch-tag" aria-hidden="true">
                      {item.note}
                    </span>
                  </div>
                  <div className="la-material-copy">
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="la-note-line">{materials.note}</p>
          </div>
        </section>

        <section
          id="contact"
          className="la-section la-reserve"
          aria-labelledby="la-reserve-title"
        >
          <div className="la-wrap la-reserve-grid">
            <div className="la-reserve-copy">
              <p className="la-eyebrow">{reserve.label}</p>
              <h2 id="la-reserve-title">{reserve.title}</h2>
              <p className="la-section-lede">{reserve.intro}</p>

              <dl className="la-reserve-facts">
                {reserve.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="la-reserve-bullets">
                {reserve.bullets.map((item) => (
                  <li key={item}>
                    <ArrowRight size={13} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <blockquote className="la-reserve-quote">
                <p>&ldquo;{reserve.quote}&rdquo;</p>
                <cite>{reserve.quoteNote}</cite>
              </blockquote>

              <div className="la-contact-lines">
                <a href={`mailto:${reserve.email}`}>
                  <Mail size={15} aria-hidden="true" />
                  {reserve.email}
                </a>
                <a href="tel:+442079460003">
                  <Phone size={15} aria-hidden="true" />
                  {reserve.phone}
                </a>
                <div>
                  <MapPin size={15} aria-hidden="true" />
                  <address>
                    {reserve.address.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </div>
                <p>
                  <Clock size={15} aria-hidden="true" />
                  {reserve.hours}
                </p>
              </div>

              <p className="la-contact-note">{reserve.contactNote}</p>
            </div>

            <LaunchReserve />
          </div>
        </section>
      </main>

      <footer className="la-footer">
        <div className="la-wrap">
          <div className="la-footer-top">
            <div className="la-footer-brand">
              <p className="la-footer-word">
                <PrismMark className="la-footer-mark" />
                Prism <span>Compute</span>
              </p>
              <p>
                A compact compute layer for the desk. Local inference, an open
                interface and nothing hidden.
              </p>
              <a href="#top" className="la-footer-back">
                Back to top
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="la-footer-cols">
              <div>
                <p className="la-footer-label">Studio</p>
                <address>
                  {reserve.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <a href={`mailto:${reserve.email}`}>
                  <Mail size={13} aria-hidden="true" />
                  {reserve.email}
                </a>
              </div>

              <div>
                <p className="la-footer-label">Explore</p>
                {launchNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
                <a href="#materials">Materials</a>
              </div>

              <div>
                <p className="la-footer-label">Template</p>
                <Link href="/templates/ai-product-launch">Template details</Link>
                <Link href="/checkout/ai-product-launch">Use this template</Link>
                <Link href="/templates">All templates</Link>
              </div>
            </div>
          </div>

          <div className="la-footer-bottom">
            <p>
              © 2026 Prism Compute (fictional). A demonstration website: the
              product, specifications and availability are illustrative. No
              device is sold and no payment is taken.
            </p>
            <p>
              Template by <Link href="/">Web3ite</Link>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
