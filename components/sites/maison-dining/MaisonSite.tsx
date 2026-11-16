import Link from "next/link";
import { ArrowDown, ArrowUp, ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";
import { MaisonNav } from "./MaisonNav";
import { MenuCard } from "./MenuCard";
import { ReservationForm } from "./ReservationForm";
import { Carte, ClocheScene, Ornament, RoomPlan } from "./Artwork";
import { evening, heroMeta, maisonNav, menu, reservation, room, visit } from "./content";

export function MaisonSite() {
  return (
    <div className="md-site" id="top">
      <a className="md-skip" href="#md-main">
        Skip to content
      </a>

      <MaisonNav />

      <main id="md-main">
        <section className="md-hero" aria-labelledby="md-hero-title">
          <div className="md-wrap">
            <div className="md-hero-topline">
              <p>One seating · Wednesday to Sunday</p>
              <p>Paris 1er · Twelve covers</p>
            </div>

            <div className="md-hero-head">
              <p className="md-kicker">
                <Ornament />
                Maison Dining · Tasting room
              </p>
              <h1 id="md-hero-title">
                A table set{" "}
                <br />
                <em>for the evening.</em>
              </h1>
              <p className="md-lede">
                A twelve-seat dining room built around one seasonal menu, quiet
                service, and a long view of the kitchen.
              </p>
              <div className="md-actions">
                <a className="md-btn md-btn--copper" href="#menu">
                  Read the menu
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="md-btn md-btn--ghost" href="#reserve">
                  Reserve a table
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>

            <figure className="md-hero-figure">
              <ClocheScene />
              <figcaption>
                <span>Silver cloche · linen · one candle</span>
                <span>18:20, before service</span>
              </figcaption>
            </figure>

            <dl className="md-hero-meta">
              {heroMeta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <p className="md-demo-note">
              Sample website concept · fictional dining room, menu and imagery
            </p>

            <div className="md-hero-foot">
              <a href="#menu" className="md-scroll-cue">
                Scroll to the menu
                <ArrowDown size={14} aria-hidden="true" />
              </a>
              <p>Menu €{menu.price} · pairing €{menu.pairing}</p>
            </div>
          </div>
        </section>

        <section id="menu" className="md-menu-section" aria-labelledby="md-menu-title">
          <div className="md-wrap">
            <div className="md-section-head md-section-head--split">
              <div>
                <p className="md-eyebrow">{menu.label}</p>
                <h2 id="md-menu-title">
                  One menu,{" "}
                  <br />
                  <em>written each morning.</em>
                </h2>
              </div>
              <p className="md-intro">{menu.intro}</p>
            </div>

            <MenuCard />
          </div>
        </section>

        <section id="room" className="md-room-section" aria-labelledby="md-room-title">
          <div className="md-wrap">
            <div className="md-room-grid">
              <div className="md-room-copy">
                <p className="md-eyebrow">{room.label}</p>
                <h2 id="md-room-title">
                  Twelve seats,{" "}
                  <br />
                  <em>around the pass.</em>
                </h2>
                <p className="md-intro">{room.intro}</p>
                <div className="md-prose">
                  {room.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <dl className="md-room-facts">
                  {room.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <figure className="md-plan-card">
                <RoomPlan />
                <figcaption>
                  <span>{room.plan.note}</span>
                  <span>Illustrative plan · not to scale</span>
                </figcaption>
              </figure>
            </div>

            <ul className="md-materials" aria-label="The materials of the room">
              {room.materials.map((material) => (
                <li key={material.label}>
                  <span className="md-material-label">{material.label}</span>
                  <span>{material.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="evening" className="md-evening" aria-labelledby="md-evening-title">
          <div className="md-wrap">
            <div className="md-section-head md-section-head--split">
              <div>
                <p className="md-eyebrow">{evening.label}</p>
                <h2 id="md-evening-title">
                  The room sets{" "}
                  <br />
                  <em>its own pace.</em>
                </h2>
              </div>
              <p className="md-intro">{evening.intro}</p>
            </div>

            <ol className="md-timeline">
              {evening.timeline.map((item) => (
                <li key={item.time}>
                  <p className="md-timeline-time">{item.time}</p>
                  <span className="md-timeline-dot" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>

            <figure className="md-quote">
              <Ornament />
              <blockquote>“{evening.quote}”</blockquote>
              <figcaption>— {evening.attribution}</figcaption>
            </figure>

            <p className="md-evening-note">{evening.note}</p>
          </div>
        </section>

        <section id="reserve" className="md-reserve" aria-labelledby="md-reserve-title">
          <div className="md-wrap">
            <ReservationForm />
          </div>
        </section>

        <section id="visit" className="md-visit" aria-labelledby="md-visit-title">
          <div className="md-wrap">
            <div className="md-visit-grid">
              <div className="md-visit-copy">
                <p className="md-eyebrow">{visit.label}</p>
                <h2 id="md-visit-title">
                  Find{" "}
                  <br />
                  <em>the room.</em>
                </h2>

                <div className="md-visit-details">
                  <div>
                    <h3>
                      <MapPin size={16} aria-hidden="true" />
                      Address
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
                      Hours
                    </h3>
                    <dl>
                      {visit.hours.map((row) => (
                        <div key={row.day}>
                          <dt>{row.day}</dt>
                          <dd>{row.time}</dd>
                        </div>
                      ))}
                    </dl>
                    <p>The door opens at 18:15. Service begins at {reservation.sitting}.</p>
                  </div>
                </div>

                <p className="md-visit-private">{visit.privateNote}</p>

                <a className="md-text-link" href={`mailto:${visit.email}`}>
                  <Mail size={14} aria-hidden="true" />
                  {visit.email}
                </a>
                <p className="md-visit-note">{visit.note}</p>
              </div>

              <figure className="md-carte-card">
                <Carte />
                <figcaption>
                  <span>6 Rue des Orfèvres · 75001</span>
                  <span>Métro Pont Neuf · 4 min</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>

      <footer className="md-footer">
        <div className="md-wrap">
          <div className="md-footer-top">
            <div className="md-footer-brand">
              <p className="md-footer-word">Maison</p>
              <p>A table set for the evening. Paris 1er.</p>
              <a href="#top" className="md-footer-back">
                Back to top
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="md-footer-cols">
              <div>
                <p className="md-footer-label">Visit</p>
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
                <p className="md-footer-label">Explore</p>
                {maisonNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
                <a href="#reserve">Reservations</a>
              </div>
              <div>
                <p className="md-footer-label">Template</p>
                <Link href="/templates/maison-dining">Template details</Link>
                <Link href="/checkout/maison-dining">Use this template</Link>
                <Link href="/templates">All templates</Link>
              </div>
            </div>
          </div>

          <div className="md-footer-bottom">
            <p>
              © 2026 Maison Dining (fictional). A demonstration website: the venue,
              menu, prices and imagery are illustrative. No reservations are taken.
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
