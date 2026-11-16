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
  ShieldCheck,
} from "lucide-react";
import { ApexNav } from "./ApexNav";
import { ApexTrim } from "./ApexTrim";
import { ApexBrief } from "./ApexBrief";
import {
  GrandTourer,
  MarqueMark,
  MaterialSwatch,
  WheelStudy,
} from "./Artwork";
import {
  apexNav,
  contact,
  hero,
  heroMeta,
  marque,
  materials,
  showcase,
  specification,
  stats,
} from "./content";

export function ApexSite() {
  return (
    <div className="ap-site" id="top">
      <a className="ap-skip" href="#ap-main">
        Skip to content
      </a>

      <ApexNav />

      <main id="ap-main">
        <section className="ap-hero" aria-labelledby="ap-hero-title">
          <div className="ap-wrap ap-hero-top">
            <p>1 Concours Way · London W1K</p>
            <p className="ap-status">
              <span className="ap-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="ap-wrap ap-hero-copy">
            <p className="ap-eyebrow">
              <MarqueMark className="ap-eyebrow-mark" />
              {hero.eyebrow}
            </p>

            <h1 id="ap-hero-title">
              {hero.headline}
              <br />
              <span>{hero.headlineAccent}</span>
            </h1>

            <div className="ap-hero-lede-row">
              <p className="ap-hero-lede">{hero.intro}</p>

              <div className="ap-actions">
                <a className="ap-btn ap-btn--solid" href="#showcase">
                  Explore the car
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="ap-btn ap-btn--line" href="#contact">
                  Build a spec
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>

            <dl className="ap-hero-meta">
              {heroMeta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <p className="ap-demo-note">{hero.note}</p>
          </div>

          <figure className="ap-hero-stage">
            <div className="ap-hero-frame">
              <GrandTourer />
            </div>
            <figcaption className="ap-wrap">
              {hero.caption.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </figcaption>
          </figure>

          <div className="ap-wrap ap-hero-foot">
            <a className="ap-scroll-cue" href="#showcase">
              The car, clearly described
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>{hero.footNote}</p>
          </div>

          <div className="ap-stats">
            <div className="ap-wrap">
              <dl>
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt>{stat.label}</dt>
                    <dd>
                      {stat.value}
                      <span>{stat.unit}</span>
                    </dd>
                    <small>{stat.note}</small>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section
          id="showcase"
          className="ap-section ap-showcase"
          aria-labelledby="ap-showcase-title"
        >
          <div className="ap-wrap">
            <div className="ap-section-head">
              <div>
                <p className="ap-eyebrow">{showcase.label}</p>
                <h2 id="ap-showcase-title">{showcase.title}</h2>
              </div>
              <p className="ap-section-lede">{showcase.intro}</p>
            </div>

            <div className="ap-showcase-grid">
              <div className="ap-showcase-aside">
                <div className="ap-spec-panel">
                  <div className="ap-panel-head">
                    <span>Apex GT / At a glance</span>
                    <span aria-hidden="true">APX / 01</span>
                  </div>
                  <dl className="ap-spec-rows">
                    <div>
                      <dt>Body</dt>
                      <dd>
                        Grand tourer
                        <span>2+2</span>
                      </dd>
                    </div>
                    <div>
                      <dt>Layout</dt>
                      <dd>
                        Front-engine
                        <span>Rear-wheel drive</span>
                      </dd>
                    </div>
                    <div>
                      <dt>Gearbox</dt>
                      <dd>
                        8-speed
                        <span>Automatic</span>
                      </dd>
                    </div>
                    <div>
                      <dt>Build</dt>
                      <dd>
                        To order
                        <span>No deposit</span>
                      </dd>
                    </div>
                  </dl>
                  <p className="ap-panel-foot">
                    Illustrative only. No production vehicle is represented.
                  </p>
                </div>

                <figure className="ap-detail">
                  <figcaption>
                    <span>Detail / 21-inch forged</span>
                    <span aria-hidden="true">Sample</span>
                  </figcaption>
                  <div className="ap-detail-art">
                    <WheelStudy size={168} />
                  </div>
                  <p>
                    A machined face and a warm dark barrel. Drawn, not
                    photographed — like the rest of the car.
                  </p>
                </figure>
              </div>

              <ApexTrim />
            </div>

            <p className="ap-note-line">{showcase.note}</p>
          </div>
        </section>

        <section
          id="story"
          className="ap-section ap-story"
          aria-labelledby="ap-story-title"
        >
          <div className="ap-wrap">
            <div className="ap-story-top">
              <div>
                <p className="ap-eyebrow ap-eyebrow--dark">{marque.label}</p>
                <h2 id="ap-story-title">{marque.title}</h2>
              </div>
              <div className="ap-story-intro">
                <p>{marque.intro}</p>
                <blockquote>
                  <p>&ldquo;{marque.quote.text}&rdquo;</p>
                  <cite>{marque.quote.note}</cite>
                </blockquote>
              </div>
            </div>

            <ol className="ap-timeline">
              {marque.timeline.map((entry) => (
                <li key={entry.year}>
                  <span className="ap-timeline-year">{entry.year}</span>
                  <h3>{entry.title}</h3>
                  <p>{entry.body}</p>
                </li>
              ))}
            </ol>

            <p className="ap-story-note">{marque.note}</p>
          </div>
        </section>

        <section
          id="specs"
          className="ap-section ap-specs"
          aria-labelledby="ap-specs-title"
        >
          <div className="ap-wrap">
            <div className="ap-section-head">
              <div>
                <p className="ap-eyebrow">{specification.label}</p>
                <h2 id="ap-specs-title">{specification.title}</h2>
              </div>
              <p className="ap-section-lede">{specification.intro}</p>
            </div>

            <div className="ap-spec-groups">
              {specification.groups.map((group) => (
                <article className="ap-spec-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <dl>
                    {group.rows.map((row) => (
                      <div key={row.label}>
                        <dt>{row.label}</dt>
                        <dd>{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>

            <div className="ap-notclaimed">
              <div>
                <p className="ap-mini-label">
                  <ShieldCheck size={13} aria-hidden="true" />
                  What this page does not claim
                </p>
                <ul>
                  {specification.notClaimed.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="ap-notclaimed-note">
                {specification.notClaimedNote}
              </p>
            </div>

            <p className="ap-note-line">{specification.note}</p>
          </div>
        </section>

        <section
          id="materials"
          className="ap-section ap-materials"
          aria-labelledby="ap-materials-title"
        >
          <div className="ap-wrap">
            <div className="ap-section-head">
              <div>
                <p className="ap-eyebrow">{materials.label}</p>
                <h2 id="ap-materials-title">{materials.title}</h2>
              </div>
              <p className="ap-section-lede">{materials.intro}</p>
            </div>

            <div className="ap-material-grid">
              {materials.items.map((item) => (
                <article className="ap-material-card" key={item.name}>
                  <div className="ap-swatch-frame">
                    <MaterialSwatch
                      variant={item.swatch as "paint" | "alloy" | "leather"}
                    />
                    <span className="ap-swatch-tag" aria-hidden="true">
                      {item.note}
                    </span>
                  </div>
                  <div className="ap-material-copy">
                    <p className="ap-material-index" aria-hidden="true">
                      {String(
                        materials.items.findIndex(
                          (entry) => entry.name === item.name
                        ) + 1
                      ).padStart(2, "0")}
                    </p>
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="ap-note-line">{materials.note}</p>
          </div>
        </section>

        <section
          id="contact"
          className="ap-section ap-contact"
          aria-labelledby="ap-contact-title"
        >
          <div className="ap-wrap ap-contact-grid">
            <div className="ap-contact-copy">
              <p className="ap-eyebrow">{contact.label}</p>
              <h2 id="ap-contact-title">{contact.title}</h2>
              <p className="ap-section-lede">{contact.intro}</p>

              <dl className="ap-contact-facts">
                {contact.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="ap-bring">
                <p className="ap-mini-label">Bring to the request</p>
                <ul>
                  {contact.bring.map((item) => (
                    <li key={item}>
                      <ArrowRight size={13} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="ap-quote-block">
                <p>&ldquo;{contact.quote}&rdquo;</p>
                <cite>{contact.quoteNote}</cite>
              </blockquote>

              <div className="ap-contact-lines">
                <a href={`mailto:${contact.email}`}>
                  <Mail size={15} aria-hidden="true" />
                  {contact.email}
                </a>
                <a href="tel:+442079460008">
                  <Phone size={15} aria-hidden="true" />
                  {contact.phone}
                </a>
                <div>
                  <MapPin size={15} aria-hidden="true" />
                  <address>
                    {contact.address.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </div>
                <p>
                  <Clock size={15} aria-hidden="true" />
                  {contact.hours}
                </p>
              </div>

              <p className="ap-contact-note">{contact.note}</p>
            </div>

            <ApexBrief />
          </div>
        </section>
      </main>

      <footer className="ap-footer">
        <div className="ap-wrap">
          <div className="ap-footer-top">
            <div className="ap-footer-brand">
              <p className="ap-footer-word">
                <MarqueMark className="ap-footer-mark" />
                Apex Marque <span>Grand tourer</span>
              </p>
              <p>
                The long way home: one car, one key light and a specification
                that shows its workings.
              </p>
              <a href="#top" className="ap-footer-back">
                Back to top
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="ap-footer-cols">
              <div>
                <p className="ap-footer-label">Showroom</p>
                <address>
                  {contact.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <a href={`mailto:${contact.email}`}>
                  <Mail size={13} aria-hidden="true" />
                  {contact.email}
                </a>
              </div>

              <div>
                <p className="ap-footer-label">Explore</p>
                {apexNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>

              <div>
                <p className="ap-footer-label">Template</p>
                <Link href="/templates/apex-marque">Template details</Link>
                <Link href="/checkout/apex-marque">Use this template</Link>
                <Link href="/templates">All templates</Link>
              </div>
            </div>
          </div>

          <div className="ap-footer-bottom">
            <p>
              © 2026 Apex Marque (fictional). A demonstration website: the
              marque, car, trims and figures are illustrative. No production
              vehicle, order, price or deposit is represented.
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
