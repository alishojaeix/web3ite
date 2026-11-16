import Link from "next/link";
import { ArrowDown, ArrowUp, ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";
import { ObsidianNav } from "./ObsidianNav";
import { RoastIndex } from "./RoastIndex";
import { SubscriptionBuilder } from "./SubscriptionBuilder";
import { Obsidian3D } from "./Obsidian3D";
import {
  CanisterArt,
  CanisterDrawing,
  RoastCurve,
  SealMark,
  YardPlan,
} from "./Artwork";
import {
  heroMeta,
  object,
  obsidianNav,
  roastery,
  subscription,
  ticker,
  visit,
} from "./content";

export function ObsidianSite() {
  return (
    <div className="ob-site" id="top">
      <a className="ob-skip" href="#ob-main">
        Skip to content
      </a>

      <ObsidianNav />

      <main id="ob-main">
        <section className="ob-hero" aria-labelledby="ob-hero-title">
          <div className="ob-wrap ob-hero-top">
            <p>Small batch coffee / London E9</p>
            <p>One roast day · Thursday</p>
          </div>

          <div className="ob-wrap ob-hero-grid">
            <div className="ob-hero-copy">
              <p className="ob-kicker">
                <span aria-hidden="true" />
                Obsidian Roastery / Established 2021
              </p>
              <h1 id="ob-hero-title">
                Roasted in{" "}
                <br />
                the <em>dark.</em>
              </h1>
              <p className="ob-lede">
                Three coffees, one roast day, and a canister that tells you
                everything you need to know. Small-batch coffee from a former kiln
                yard in East London.
              </p>
              <div className="ob-actions">
                <a className="ob-btn ob-btn--brass" href="#roasts">
                  See the roasts
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="ob-btn ob-btn--ghost" href="#roastery">
                  Inside the roastery
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>

              <dl className="ob-hero-meta">
                {heroMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="ob-demo-note">
                Sample website concept · fictional roastery, coffees and imagery
              </p>
            </div>

            <div className="ob-hero-visual">
              <div className="ob-hero-art">
                <CanisterArt prefix="ob-hero-visual" />
              </div>
              <aside className="ob-hero-tag" aria-label="Coffee currently roasting">
                <p className="ob-mini-label">Now roasting</p>
                <p className="ob-hero-tag-name">No. 01 / Kenia AA</p>
                <p className="ob-hero-tag-notes">Blackcurrant · cane sugar · clean</p>
                <p className="ob-hero-tag-lot">Lot 04 · roasted Thursday</p>
              </aside>
              <p className="ob-hero-side">Small batch / 12 kg drum</p>
            </div>
          </div>

          <div className="ob-wrap ob-hero-foot">
            <a href="#roasts" className="ob-scroll-cue">
              Scroll to the shelf
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>Rest 7–14 days · roast date on the base</p>
          </div>
        </section>

        <div className="ob-ticker" aria-hidden="true">
          <div className="ob-ticker-track">
            {[...ticker, ...ticker, ...ticker].map((phrase, index) => (
              <span key={`${phrase}-${index}`}>
                {phrase}
                <i>/</i>
              </span>
            ))}
          </div>
        </div>

        <section id="roasts" className="ob-section ob-roasts" aria-labelledby="ob-roasts-title">
          <div className="ob-wrap">
            <div className="ob-section-head ob-section-head--split">
              <div>
                <p className="ob-eyebrow">01 / The shelf</p>
                <h2 id="ob-roasts-title">
                  Three coffees.
                  <br />
                  <em>One roast day.</em>
                </h2>
              </div>
              <p className="ob-intro">
                The whole catalogue is three lots. Each is bought green, roasted on
                Thursday and rested before it reaches the shelf. Choose one to read
                the lot sheet.
              </p>
            </div>
            <RoastIndex />
          </div>
        </section>

        <section id="object" className="ob-section ob-object" aria-labelledby="ob-object-title">
          <div className="ob-wrap">
            <div className="ob-section-head ob-section-head--split">
              <div>
                <p className="ob-eyebrow">02 / The object</p>
                <h2 id="ob-object-title">
                  A canister
                  <br />
                  <em>worth keeping.</em>
                </h2>
              </div>
              <p className="ob-intro">{object.intro}</p>
            </div>

            <div className="ob-object-grid">
              <Obsidian3D />

              <div className="ob-object-copy">
                <div className="ob-seal-row">
                  <SealMark number="01" />
                  <div>
                    <p className="ob-mini-label">The brass seal</p>
                    <p className="ob-seal-copy">
                      Machined in Sheffield. Debossed with one line, not printed.
                    </p>
                  </div>
                </div>

                <dl className="ob-object-specs">
                  {object.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>

                <ol className="ob-object-notes">
                  {object.notes.map((note, index) => (
                    <li key={note}>
                      <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <p>{note}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <figure className="ob-drawing-card">
              <CanisterDrawing />
              <figcaption>
                <span>Canister 01 / 250 g</span>
                <span>Matte steel · brass · printed paper</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          id="roastery"
          className="ob-section ob-roastery"
          aria-labelledby="ob-roastery-title"
        >
          <div className="ob-wrap">
            <div className="ob-roastery-top">
              <div>
                <p className="ob-eyebrow">03 / The roastery</p>
                <h2 id="ob-roastery-title">
                  The rest of the week belongs to{" "}
                  <em>the coffee.</em>
                </h2>
                <p className="ob-roastery-quote">
                  “Roast less. Put the date on everything. Let the coffee finish the
                  sentence.”
                </p>
              </div>
              <div className="ob-prose">
                {roastery.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="ob-roastery-grid">
              <figure className="ob-curve-card">
                <div className="ob-curve-head">
                  <p className="ob-mini-label">Profile / No. 01</p>
                  <p>12 kg · 12 min</p>
                </div>
                <RoastCurve />
                <figcaption>
                  Illustrative roast profile. Every batch is logged and cupped
                  before it leaves the roastery.
                </figcaption>
              </figure>

              <dl className="ob-facts">
                {roastery.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ol className="ob-process" aria-label="From source to ship">
              {roastery.process.map((step) => (
                <li key={step.number}>
                  <span aria-hidden="true">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="subscribe"
          className="ob-section ob-subscribe"
          aria-labelledby="ob-subscribe-title"
        >
          <div className="ob-wrap">
            <div className="ob-subscribe-head">
              <div>
                <p className="ob-eyebrow">04 / The roast list</p>
                <h2 id="ob-subscribe-title">
                  Keep the counter
                  <br />
                  <em>stocked.</em>
                </h2>
              </div>
              <p className="ob-intro">{subscription.intro}</p>
            </div>
            <SubscriptionBuilder />
          </div>
        </section>

        <section id="visit" className="ob-section ob-visit" aria-labelledby="ob-visit-title">
          <div className="ob-wrap">
            <div className="ob-visit-grid">
              <div className="ob-visit-copy">
                <p className="ob-eyebrow">05 / Visit</p>
                <h2 id="ob-visit-title">
                  Come and taste
                  <br />
                  <em>the week.</em>
                </h2>
                <p className="ob-intro">
                  The roastery opens three days a week. There is a small tasting
                  counter, the current filter on brew, and usually a bag or two
                  resting on the shelf.
                </p>

                <div className="ob-visit-details">
                  <div>
                    <h3>
                      <MapPin size={16} aria-hidden="true" />
                      Find the yard
                    </h3>
                    <address>
                      {visit.address.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </address>
                    <p>{visit.transport}</p>
                  </div>
                  <div>
                    <h3>
                      <Clock size={16} aria-hidden="true" />
                      Opening hours
                    </h3>
                    <dl>
                      {visit.hours.map((row) => (
                        <div key={row.day}>
                          <dt>{row.day}</dt>
                          <dd>{row.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <p className="ob-visit-note">{visit.note}</p>
                <a className="ob-text-link" href={`mailto:${visit.email}`}>
                  {visit.email}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>

              <div className="ob-visit-side">
                <figure className="ob-yard">
                  <YardPlan />
                  <figcaption>
                    <span>8 Kiln Yard / E9</span>
                    <span>Illustrative plan · not to scale</span>
                  </figcaption>
                </figure>
                <div className="ob-visit-card">
                  <p className="ob-mini-label">Thursday, 09:00</p>
                  <p className="ob-visit-card-title">The week&apos;s filter is on.</p>
                  <p>
                    Come early for the first cup after roasting. Bring a home brewer
                    and we will set the grind.
                  </p>
                  <a href={`mailto:${visit.email}`} className="ob-text-link">
                    <Mail size={14} aria-hidden="true" />
                    Email the roastery
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="ob-footer">
        <div className="ob-wrap">
          <div className="ob-footer-top">
            <div className="ob-footer-brand">
              <p className="ob-footer-word">OBSIDIAN</p>
              <p>Roasted in the dark. London E9.</p>
              <a href="#top" className="ob-footer-back">
                Back to top
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="ob-footer-cols">
              <div>
                <p className="ob-footer-label">Visit</p>
                <address>
                  {visit.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <a href={`mailto:${visit.email}`}>
                  <Mail size={13} aria-hidden="true" />
                  {visit.email}
                </a>
              </div>
              <div>
                <p className="ob-footer-label">Explore</p>
                {obsidianNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
              <div>
                <p className="ob-footer-label">Template</p>
                <Link href="/templates/obsidian-roastery">Template details</Link>
                <Link href="/checkout/obsidian-roastery">Use this template</Link>
                <Link href="/templates">All templates</Link>
              </div>
            </div>
          </div>

          <div className="ob-footer-bottom">
            <p>
              © 2026 Obsidian Roastery (fictional). A demonstration website: the
              roastery, coffees, prices and imagery are illustrative. No orders or
              subscriptions are taken.
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
