import Link from "next/link";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Plus,
} from "lucide-react";
import { AtelierNav } from "./AtelierNav";
import { BrewGuide } from "./BrewGuide";
import { CoffeeList } from "./CoffeeList";
import { InquiryForm } from "./InquiryForm";
import { CounterArt, MapArt, PourOverArt, ShelfArt, WindowArt } from "./Artwork";
import {
  atelierNav,
  heroLot,
  heroMeta,
  hours,
  journalEntries,
  roomScenes,
  story,
  ticker,
  visit,
} from "./content";

function RoomArt({ id }: { id: (typeof roomScenes)[number]["id"] }) {
  if (id === "counter") return <CounterArt />;
  if (id === "window") return <WindowArt />;
  return <ShelfArt />;
}

export function AtelierSite() {
  return (
    <div className="at-site" id="top">
      <a className="at-skip" href="#at-main">
        Skip to content
      </a>

      <AtelierNav />

      <main id="at-main">
        <section className="at-hero" aria-labelledby="at-hero-title">
          <div className="at-wrap at-hero-grid">
            <div className="at-hero-copy">
              <p className="at-kicker">
                <span className="at-kicker-dot" aria-hidden="true" />
                Atelier Coffee / Slow bar — London
              </p>
              <h1 id="at-hero-title" className="at-display">
                A quieter{" "}
                <br />
                <em>kind</em> of coffee.
              </h1>
              <p className="at-lede">
                A twelve-seat counter for filter coffee, slow mornings and the kind
                of conversation that outlasts the cup.
              </p>
              <div className="at-actions">
                <a className="at-btn at-btn--solid" href="#coffee">
                  Explore the coffee
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="at-btn at-btn--quiet" href="#visit">
                  Visit the atelier
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <ul className="at-hero-meta">
                {heroMeta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="at-demo-note">
                Sample website concept · fictional venue, menu and imagery
              </p>
            </div>

            <div className="at-hero-visual">
              <div className="at-arch">
                <PourOverArt />
              </div>
              <aside className="at-lot-card" aria-label="Coffee on the bar this week">
                <p className="at-mini-label">{heroLot.label}</p>
                <p className="at-lot-name">{heroLot.name}</p>
                <p className="at-lot-origin">{heroLot.origin}</p>
                <p className="at-lot-notes">{heroLot.notes}</p>
                <ul className="at-lot-facts">
                  {heroLot.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </aside>
              <p className="at-art-caption">Illustration · the room is a concept</p>
            </div>
          </div>

          <div className="at-wrap at-hero-foot">
            <a href="#story" className="at-scroll-cue">
              Scroll — the bar
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>Counter seats are walk-in · Tue–Sun</p>
          </div>
        </section>

        <div className="at-ticker" aria-hidden="true">
          <div className="at-ticker-track">
            {[...ticker, ...ticker, ...ticker].map((phrase, index) => (
              <span key={`${phrase}-${index}`}>
                {phrase}
                <i>·</i>
              </span>
            ))}
          </div>
        </div>

        <section id="story" className="at-section at-story" aria-labelledby="at-story-title">
          <div className="at-wrap at-section-grid">
            <div className="at-section-label">
              <p className="at-eyebrow">{story.label}</p>
              <p className="at-side-note">As told at the counter</p>
            </div>
            <div>
              <h2 id="at-story-title" className="at-display at-h2">
                {story.title}
              </h2>
              <div className="at-story-grid">
                <div className="at-prose">
                  {story.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <blockquote>
                    <p>“{story.quote}”</p>
                    <cite>{story.quoteBy}</cite>
                  </blockquote>
                </div>
                <div className="at-story-details">
                  {story.details.map((detail) => (
                    <article key={detail.index}>
                      <span aria-hidden="true">{detail.index}</span>
                      <h3>{detail.title}</h3>
                      <p>{detail.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="coffee" className="at-section at-coffee" aria-labelledby="at-coffee-title">
          <div className="at-wrap">
            <div className="at-section-head">
              <p className="at-eyebrow">02 / The list</p>
              <h2 id="at-coffee-title" className="at-display at-h2">
                The list changes with the roast calendar, not the season.
              </h2>
              <p className="at-intro">
                Three filter coffees, two espresso options and a small counter
                menu. Everything is brewed to order; nothing is kept warm.
              </p>
            </div>

            <div className="at-coffee-grid">
              <CoffeeList />

              <aside className="at-lot-panel" aria-labelledby="at-lot-title">
                <p className="at-mini-label">This week&apos;s open bag</p>
                <h3 id="at-lot-title">Kenia AA</h3>
                <p className="at-lot-panel-origin">Nyeri, Kenya</p>
                <dl>
                  <div>
                    <dt>Producer</dt>
                    <dd>Gichathaini factory</dd>
                  </div>
                  <div>
                    <dt>Altitude</dt>
                    <dd>1,750 m</dd>
                  </div>
                  <div>
                    <dt>Process</dt>
                    <dd>Washed</dd>
                  </div>
                  <div>
                    <dt>Varietal</dt>
                    <dd>SL28, SL34</dd>
                  </div>
                  <div>
                    <dt>Roast</dt>
                    <dd>Medium-light</dd>
                  </div>
                </dl>
                <p className="at-lot-panel-notes">
                  Blackcurrant and cane sugar, with a clean, tea-like finish. We
                  brew it as filter and keep a second bag behind the counter for
                  home.
                </p>
                <p className="at-lot-panel-price">
                  Beans to take home <span>250 g · £14</span>
                </p>
                <a href="#visit" className="at-text-link">
                  Ask at the counter
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section id="brew" className="at-section at-brew-section" aria-labelledby="at-brew-title">
          <div className="at-wrap">
            <div className="at-section-head at-section-head--split">
              <div>
                <p className="at-eyebrow">03 / The recipe</p>
                <h2 id="at-brew-title" className="at-display at-h2">
                  A recipe you can take home.
                </h2>
              </div>
              <p className="at-intro">
                The same starting points we write on the bag. Choose a brewer,
                set the timer and change one variable at a time.
              </p>
            </div>
            <BrewGuide />
          </div>
        </section>

        <section id="room" className="at-section at-room" aria-labelledby="at-room-title">
          <div className="at-wrap">
            <div className="at-section-head at-section-head--split">
              <div>
                <p className="at-eyebrow">04 / The room</p>
                <h2 id="at-room-title" className="at-display at-h2">
                  Cream walls, pale oak, one long bench.
                </h2>
              </div>
              <p className="at-intro">
                The room was a print workshop for forty years. We kept the light,
                the bench and the working archive, and added a coffee bar.
              </p>
            </div>

            <div className="at-room-grid">
              {roomScenes.map((scene, index) => (
                <figure key={scene.id} className="at-room-card">
                  <div className="at-room-art">
                    <RoomArt id={scene.id} />
                  </div>
                  <figcaption>
                    <div className="at-room-title">
                      <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <h3>{scene.title}</h3>
                    </div>
                    <p>{scene.caption}</p>
                    <p className="at-room-detail">{scene.detail}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="at-figure-note">
              Illustrations, not photographs. Atelier Coffee is a fictional venue
              created for this template.
            </p>
          </div>
        </section>

        <section id="journal" className="at-section at-journal" aria-labelledby="at-journal-title">
          <div className="at-wrap at-journal-grid">
            <div className="at-journal-head">
              <p className="at-eyebrow">05 / Journal</p>
              <h2 id="at-journal-title" className="at-display at-h2">
                Notes from the counter.
              </h2>
              <p className="at-intro">
                Occasional writing on brewing, buying and paying attention. Open a
                note to read it here.
              </p>
            </div>

            <div className="at-journal-list">
              {journalEntries.map((entry) => (
                <details key={entry.title} className="at-entry">
                  <summary>
                    <span className="at-entry-copy">
                      <span className="at-entry-date">
                        {entry.date} · {entry.readingTime}
                      </span>
                      <span className="at-entry-title">{entry.title}</span>
                      <span className="at-entry-excerpt">{entry.excerpt}</span>
                    </span>
                    <span className="at-entry-marker" aria-hidden="true">
                      <Plus size={18} />
                    </span>
                  </summary>
                  <div className="at-entry-body">
                    {entry.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="at-section at-visit" aria-labelledby="at-visit-title">
          <div className="at-wrap">
            <div className="at-visit-grid">
              <div className="at-visit-copy">
                <p className="at-eyebrow">06 / Visit</p>
                <h2 id="at-visit-title" className="at-display at-h2">
                  Come sit at the counter.
                </h2>
                <p className="at-intro">
                  No queue, no app, no reservation needed for a counter seat. Bring
                  a question about the coffee and we will make time for it.
                </p>

                <div className="at-visit-details">
                  <div>
                    <h3>
                      <MapPin size={16} aria-hidden="true" />
                      Find the atelier
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
                      {hours.map((row) => (
                        <div key={row.day}>
                          <dt>{row.day}</dt>
                          <dd>{row.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <p className="at-visit-note">{visit.note}</p>
                <a className="at-text-link" href={`mailto:${visit.email}`}>
                  {visit.email}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>

              <div className="at-visit-side">
                <div className="at-map">
                  <MapArt />
                  <p>Illustrative map · not to scale</p>
                </div>

                <div className="at-form-card">
                  <p className="at-mini-label">Book a tasting</p>
                  <h3>Tell us when, and for how many.</h3>
                  <p className="at-form-intro">
                    Tastings for four to six people, usually on a weekday morning.
                    We will reply within two days.
                  </p>
                  <InquiryForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="at-footer">
        <div className="at-wrap">
          <div className="at-footer-top">
            <div className="at-footer-brand">
              <p className="at-footer-word">
                Atelier <em>Coffee</em>
              </p>
              <p>A quieter kind of coffee.</p>
              <a href="#top" className="at-footer-back">
                Back to top
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="at-footer-cols">
              <div>
                <p className="at-footer-label">Visit</p>
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
                <p className="at-footer-label">Explore</p>
                {atelierNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
              <div>
                <p className="at-footer-label">Template</p>
                <Link href="/templates/atelier-coffee">Template details</Link>
                <Link href="/checkout/atelier-coffee">Use this template</Link>
                <Link href="/templates">All templates</Link>
              </div>
            </div>
          </div>

          <div className="at-footer-bottom">
            <p>
              © 2026 Atelier Coffee (fictional). A demonstration website: venue,
              menu, hours and imagery are illustrative. No orders or bookings are
              taken.
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
