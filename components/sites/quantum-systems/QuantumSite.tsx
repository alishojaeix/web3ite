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
import { QuantumNav } from "./QuantumNav";
import { QuantumBrief } from "./QuantumBrief";
import { CalibrationRule, QMark, RingAssembly, SystemSchematic } from "./Artwork";
import {
  assembly,
  company,
  contact,
  hero,
  heroMeta,
  method,
  platform,
  qsNav,
  research,
} from "./content";

export function QuantumSite() {
  return (
    <div className="qs-site" id="top">
      <a className="qs-skip" href="#qs-main">
        Skip to content
      </a>

      <QuantumNav />

      <main id="qs-main">
        <section className="qs-hero" aria-labelledby="qs-hero-title">
          <div className="qs-wrap qs-hero-top">
            <p>1 Meridian Works · London E2</p>
            <p className="qs-status">
              <span className="qs-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="qs-wrap qs-hero-copy">
            <p className="qs-eyebrow">
              <QMark className="qs-eyebrow-mark" />
              {hero.eyebrow}
            </p>

            <h1 id="qs-hero-title">
              {hero.headline}
              <br />
              <span>{hero.headlineAccent}</span>
            </h1>

            <p className="qs-hero-lede">{hero.intro}</p>

            <div className="qs-actions">
              <a className="qs-btn qs-btn--solid" href="#platform">
                Explore the platform
                <ArrowDown size={15} aria-hidden="true" />
              </a>
              <a className="qs-btn qs-btn--line" href="#research">
                Read the research
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <dl className="qs-hero-meta">
              {heroMeta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <p className="qs-demo-note">{hero.note}</p>
          </div>

          <figure className="qs-wrap qs-plate">
            <div className="qs-plate-frame">
              <span className="qs-plate-rev" aria-hidden="true">
                REV C · 2026
              </span>
              <RingAssembly />
            </div>
            <figcaption>
              {hero.caption.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </figcaption>
          </figure>

          <div className="qs-wrap qs-hero-foot">
            <a className="qs-scroll-cue" href="#platform">
              Read the platform
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>{hero.footNote}</p>
          </div>
        </section>

        <section id="platform" className="qs-section qs-platform" aria-labelledby="qs-platform-title">
          <div className="qs-wrap">
            <CalibrationRule />

            <div className="qs-section-head">
              <div>
                <p className="qs-eyebrow">{platform.label}</p>
                <h2 id="qs-platform-title">{platform.title}</h2>
              </div>
              <p className="qs-section-lede">{platform.intro}</p>
            </div>

            <div className="qs-platform-grid">
              <figure className="qs-schematic-frame">
                <div className="qs-schematic-head">
                  <span>FIG. 01 / SYSTEM STACK</span>
                  <span>MODULAR</span>
                </div>
                <SystemSchematic />
                <figcaption>Illustrative schematic · not a wiring diagram</figcaption>
              </figure>

              <div className="qs-platform-list">
                {platform.items.map((item) => (
                  <article className="qs-platform-item" key={item.index}>
                    <span className="qs-item-index" aria-hidden="true">
                      {item.index}
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                      <ul className="qs-outputs" aria-label={`${item.title} outputs`}>
                        {item.outputs.map((output) => (
                          <li key={output}>{output}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="qs-limits">
              <p className="qs-mini-label">Documented limits</p>
              <ul>
                {platform.limits.map((limit) => (
                  <li key={limit}>
                    <span aria-hidden="true">—</span>
                    {limit}
                  </li>
                ))}
              </ul>
            </div>

            <p className="qs-note-line">{platform.note}</p>
          </div>
        </section>

        <section id="method" className="qs-section qs-method" aria-labelledby="qs-method-title">
          <div className="qs-wrap">
            <div className="qs-section-head">
              <div>
                <p className="qs-eyebrow">{method.label}</p>
                <h2 id="qs-method-title">{method.title}</h2>
              </div>
              <p className="qs-section-lede">{method.intro}</p>
            </div>

            <ol className="qs-steps">
              {method.steps.map((step) => (
                <li key={step.step}>
                  <div className="qs-step-head">
                    <span className="qs-step-index" aria-hidden="true">
                      {step.step}
                    </span>
                    <span className="qs-step-tick" aria-hidden="true" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <p className="qs-step-output">
                    <span>Output</span>
                    {step.output}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="assembly" className="qs-section qs-assembly" aria-labelledby="qs-assembly-title">
          <div className="qs-wrap">
            <div className="qs-section-head">
              <div>
                <p className="qs-eyebrow">{assembly.label}</p>
                <h2 id="qs-assembly-title">{assembly.title}</h2>
              </div>
              <p className="qs-section-lede">{assembly.intro}</p>
            </div>

            <div className="qs-assembly-grid">
              <div className="qs-spec-panel">
                <div className="qs-panel-head">
                  <span>SPECIFICATION / QUALITATIVE</span>
                  <span>QS-03</span>
                </div>
                <dl className="qs-spec-dl">
                  {assembly.rows.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="qs-parts-panel">
                <p className="qs-mini-label">Three parts</p>
                <ul className="qs-parts">
                  {assembly.parts.map((part) => (
                    <li key={part.code}>
                      <span className="qs-part-code" aria-hidden="true">
                        {part.code}
                      </span>
                      <div>
                        <h3>{part.title}</h3>
                        <p>{part.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="qs-parts-quote">
                  &ldquo;{company.quote}&rdquo;
                  <cite>{company.quoteNote}</cite>
                </p>
              </div>
            </div>

            <p className="qs-note-line">{assembly.note}</p>
          </div>
        </section>

        <section id="research" className="qs-section qs-research" aria-labelledby="qs-research-title">
          <div className="qs-wrap">
            <div className="qs-section-head">
              <div>
                <p className="qs-eyebrow">{research.label}</p>
                <h2 id="qs-research-title">{research.title}</h2>
              </div>
              <p className="qs-section-lede">{research.intro}</p>
            </div>

            <div className="qs-research-list">
              {research.items.map((item) => (
                <article className="qs-research-row" key={item.index}>
                  <div className="qs-research-id">
                    <span>{item.index}</span>
                    <time dateTime={item.year}>{item.year}</time>
                  </div>
                  <div className="qs-research-copy">
                    <h3>{item.title}</h3>
                    <p>{item.abstract}</p>
                  </div>
                  <ul className="qs-tags" aria-label={`${item.title} topics`}>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <ArrowUpRight className="qs-research-arrow" size={18} aria-hidden="true" />
                </article>
              ))}
            </div>

            <p className="qs-note-line">{research.note}</p>

            <div className="qs-cta-band">
              <div>
                <p className="qs-cta-title">Read the method.</p>
                <p className="qs-cta-body">
                  Technical notes, tolerances and deployment details.
                </p>
              </div>
              <a className="qs-btn qs-btn--line" href="#contact">
                Request the technical brief
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="company" className="qs-section qs-company" aria-labelledby="qs-company-title">
          <div className="qs-wrap qs-company-grid">
            <div className="qs-company-copy">
              <p className="qs-eyebrow">{company.label}</p>
              <h2 id="qs-company-title">{company.title}</h2>

              <div className="qs-prose">
                {company.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul className="qs-principles">
                {company.principles.map((principle, index) => (
                  <li key={principle.title}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="qs-record" aria-label="Company record">
              <div className="qs-record-head">
                <span>RECORD / 05</span>
                <QMark className="qs-record-mark" />
              </div>

              <dl className="qs-facts">
                {company.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="qs-record-sign" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <p className="qs-record-note">
                A record of the working method, not a certificate. Sample company
                copy for the template demonstration.
              </p>
            </aside>
          </div>
        </section>

        <section id="contact" className="qs-section qs-contact" aria-labelledby="qs-contact-title">
          <div className="qs-wrap qs-contact-grid">
            <div className="qs-contact-copy">
              <p className="qs-eyebrow">{contact.label}</p>
              <h2 id="qs-contact-title">{contact.title}</h2>
              <p className="qs-section-lede">{contact.intro}</p>

              <div className="qs-bring">
                <p className="qs-mini-label">What to bring</p>
                <ul>
                  {contact.bring.map((item) => (
                    <li key={item}>
                      <ArrowRight size={13} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="qs-contact-lines">
                <a href={`mailto:${contact.email}`}>
                  <Mail size={15} aria-hidden="true" />
                  {contact.email}
                </a>
                <a href="tel:+442079460002">
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

              <p className="qs-contact-note">{contact.note}</p>
            </div>

            <QuantumBrief />
          </div>
        </section>
      </main>

      <footer className="qs-footer">
        <div className="qs-wrap">
          <div className="qs-footer-top">
            <div className="qs-footer-brand">
              <p className="qs-footer-word">
                <QMark className="qs-footer-mark" />
                Quantum <span>Systems</span>
              </p>
              <p>
                Precision compute, presented as observable parts. Documented
                methods, published limits, no mythology.
              </p>
              <a href="#top" className="qs-footer-back">
                Back to top
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="qs-footer-cols">
              <div>
                <p className="qs-footer-label">Company</p>
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
                <p className="qs-footer-label">Explore</p>
                {qsNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact">Technical brief</a>
              </div>

              <div>
                <p className="qs-footer-label">Template</p>
                <Link href="/templates/quantum-systems">Template details</Link>
                <Link href="/checkout/quantum-systems">Use this template</Link>
                <Link href="/templates">All templates</Link>
              </div>
            </div>
          </div>

          <div className="qs-footer-bottom">
            <p>
              © 2026 Quantum Systems (fictional). A demonstration website: the
              company, platform and research index are illustrative. No product
              is sold and no certification is claimed.
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
