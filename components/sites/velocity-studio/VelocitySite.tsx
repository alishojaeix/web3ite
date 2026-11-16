import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Clock,
  Film,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { VelocityNav } from "./VelocityNav";
import { VelocityLab } from "./VelocityLab";
import { VelocityBrief } from "./VelocityBrief";
import { AeroStudy, MaterialSwatch, VelocityMark } from "./Artwork";
import {
  aero,
  contact,
  hero,
  heroMeta,
  materials,
  reel,
  specification,
  stats,
  study,
  velocityNav,
} from "./content";

export function VelocitySite() {
  return (
    <div className="vs-site" id="top">
      <a className="vs-skip" href="#vs-main">
        Skip to content
      </a>

      <VelocityNav />

      <main id="vs-main">
        <section className="vs-hero" aria-labelledby="vs-hero-title">
          <div className="vs-wrap vs-hero-top">
            <p>8 Aero Court · London SE1</p>
            <p className="vs-status">
              <span className="vs-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="vs-wrap vs-hero-grid">
            <div className="vs-hero-copy">
              <p className="vs-eyebrow">
                <VelocityMark className="vs-eyebrow-mark" />
                {hero.eyebrow}
              </p>

              <h1 id="vs-hero-title">
                <span className="vs-h1-word">{hero.headline}</span>
                <span className="vs-h1-accent">{hero.headlineAccent}</span>
              </h1>

              <p className="vs-hero-lede">{hero.intro}</p>

              <div className="vs-actions">
                <a className="vs-btn vs-btn--solid" href="#showcase">
                  See the study
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="vs-btn vs-btn--line" href="#story">
                  Read the aero notes
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>

              <dl className="vs-hero-meta">
                {heroMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="vs-demo-note">{hero.note}</p>
            </div>

            <figure className="vs-hero-art">
              <div className="vs-hero-frame">
                <div className="vs-frame-head">
                  <span>Still / frame 01</span>
                  <span aria-hidden="true">00:00</span>
                </div>
                <AeroStudy />
              </div>
              <figcaption>
                {hero.caption.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </figcaption>
            </figure>
          </div>

          <div className="vs-wrap">
            <div className="vs-reel">
              <div className="vs-reel-head">
                <p>
                  <Film size={14} aria-hidden="true" />
                  {reel.title}
                </p>
                <span>{reel.duration}</span>
              </div>
              <ol className="vs-reel-frames">
                {reel.frames.map((frame) => (
                  <li key={frame.time}>
                    <span className="vs-reel-time">{frame.time}</span>
                    <strong>{frame.title}</strong>
                    <span className="vs-reel-note">{frame.note}</span>
                  </li>
                ))}
              </ol>
              <div className="vs-reel-track" aria-hidden="true">
                <span />
              </div>
              <p className="vs-reel-caption">{reel.caption}</p>
            </div>
          </div>

          <div className="vs-stats">
            <div className="vs-wrap">
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
          className="vs-section vs-study"
          aria-labelledby="vs-study-title"
        >
          <div className="vs-wrap">
            <div className="vs-section-head">
              <div>
                <p className="vs-eyebrow">{study.label}</p>
                <h2 id="vs-study-title">{study.title}</h2>
              </div>
              <p className="vs-section-lede">{study.intro}</p>
            </div>

            <VelocityLab />

            <p className="vs-note-line">{study.note}</p>
          </div>
        </section>

        <section
          id="story"
          className="vs-section vs-aero"
          aria-labelledby="vs-aero-title"
        >
          <div className="vs-wrap">
            <div className="vs-section-head">
              <div>
                <p className="vs-eyebrow">{aero.label}</p>
                <h2 id="vs-aero-title">{aero.title}</h2>
              </div>
              <p className="vs-section-lede">{aero.intro}</p>
            </div>

            <div className="vs-quote-band">
              <p>&ldquo;{aero.quote.text}&rdquo;</p>
              <cite>{aero.quote.note}</cite>
            </div>

            <div className="vs-aero-grid">
              <ol className="vs-principles">
                {aero.principles.map((principle, index) => (
                  <li key={principle.title}>
                    <span className="vs-principle-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <aside className="vs-sheet" aria-label="Illustrative wind tunnel sheet">
                <div className="vs-sheet-head">
                  <div>
                    <p className="vs-sheet-title">{aero.sheet.title}</p>
                    <p className="vs-sheet-caption">{aero.sheet.caption}</p>
                  </div>
                  <span className="vs-sheet-code" aria-hidden="true">
                    AERO / 03
                  </span>
                </div>

                <ol className="vs-sheet-rows">
                  {aero.sheet.rows.map((row) => (
                    <li key={row.area}>
                      <span className="vs-sheet-value">{row.value}</span>
                      <div>
                        <h3>{row.area}</h3>
                        <p>{row.note}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="vs-sheet-note">{aero.sheet.note}</p>
              </aside>
            </div>

            <p className="vs-note-line">{aero.note}</p>
          </div>
        </section>

        <section
          id="specs"
          className="vs-section vs-specs"
          aria-labelledby="vs-specs-title"
        >
          <div className="vs-wrap">
            <div className="vs-section-head">
              <div>
                <p className="vs-eyebrow">{specification.label}</p>
                <h2 id="vs-specs-title">{specification.title}</h2>
              </div>
              <p className="vs-section-lede">{specification.intro}</p>
            </div>

            <div className="vs-spec-groups">
              {specification.groups.map((group, index) => (
                <article className="vs-spec-group" key={group.title}>
                  <div className="vs-spec-head">
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{group.title}</h3>
                  </div>
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

            <div className="vs-notclaimed">
              <div>
                <p className="vs-mini-label">
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
              <p className="vs-notclaimed-note">
                {specification.notClaimedNote}
              </p>
            </div>

            <p className="vs-note-line">{specification.note}</p>
          </div>
        </section>

        <section
          id="materials"
          className="vs-section vs-materials"
          aria-labelledby="vs-materials-title"
        >
          <div className="vs-wrap">
            <div className="vs-section-head">
              <div>
                <p className="vs-eyebrow">{materials.label}</p>
                <h2 id="vs-materials-title">{materials.title}</h2>
              </div>
              <p className="vs-section-lede">{materials.intro}</p>
            </div>

            <div className="vs-material-grid">
              {materials.items.map((item, index) => (
                <article className="vs-material-card" key={item.name}>
                  <div className="vs-swatch-frame">
                    <MaterialSwatch
                      variant={item.swatch as "carbon" | "signal" | "tunnel"}
                    />
                    <span className="vs-swatch-tag" aria-hidden="true">
                      {item.note}
                    </span>
                  </div>
                  <div className="vs-material-copy">
                    <span className="vs-material-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="vs-note-line">{materials.note}</p>
          </div>
        </section>

        <section
          id="contact"
          className="vs-section vs-contact"
          aria-labelledby="vs-contact-title"
        >
          <div className="vs-wrap vs-contact-grid">
            <div className="vs-contact-copy">
              <p className="vs-eyebrow">{contact.label}</p>
              <h2 id="vs-contact-title">{contact.title}</h2>
              <p className="vs-section-lede">{contact.intro}</p>

              <dl className="vs-contact-facts">
                {contact.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="vs-bring">
                <p className="vs-mini-label">Bring to the request</p>
                <ul>
                  {contact.bring.map((item) => (
                    <li key={item}>
                      <ArrowRight size={13} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="vs-quote-block">
                <p>&ldquo;{contact.quote}&rdquo;</p>
                <cite>{contact.quoteNote}</cite>
              </blockquote>

              <div className="vs-contact-lines">
                <a href={`mailto:${contact.email}`}>
                  <Mail size={15} aria-hidden="true" />
                  {contact.email}
                </a>
                <a href="tel:+442079460009">
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

              <p className="vs-contact-note">{contact.note}</p>
            </div>

            <VelocityBrief />
          </div>
        </section>
      </main>

      <footer className="vs-footer">
        <div className="vs-wrap">
          <div className="vs-footer-top">
            <div className="vs-footer-brand">
              <p className="vs-footer-word">
                <VelocityMark className="vs-footer-mark" />
                Velocity Studio <span>Aero 01</span>
              </p>
              <p>
                Shape in motion: one aero study, one launch film and a
                specification that shows its workings.
              </p>
              <a href="#top" className="vs-footer-back">
                Back to top
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="vs-footer-cols">
              <div>
                <p className="vs-footer-label">Studio</p>
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
                <p className="vs-footer-label">Explore</p>
                {velocityNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>

              <div>
                <p className="vs-footer-label">Template</p>
                <Link href="/templates/velocity-studio">Template details</Link>
                <Link href="/checkout/velocity-studio">Use this template</Link>
                <Link href="/templates">All templates</Link>
              </div>
            </div>
          </div>

          <div className="vs-footer-bottom">
            <p>
              © 2026 Velocity Studio (fictional). A demonstration website: the
              studio, study, film and figures are illustrative. No production
              vehicle, measured aero result or offer is represented.
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
