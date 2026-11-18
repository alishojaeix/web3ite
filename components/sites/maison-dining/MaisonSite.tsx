import Link from "next/link";
import { ArrowDown, ArrowUp, ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";
import { MaisonNav } from "./MaisonNav";
import { MenuCard } from "./MenuCard";
import { ReservationForm } from "./ReservationForm";
import { Carte, ClocheScene, Ornament, RoomPlan } from "./Artwork";
import { evening, heroMeta, maisonNav, menu, reservation, room, visit } from "./content";

export function MaisonSite() {
  return (
    <div className="md-site" id="top" dir="rtl">
      <a className="md-skip" href="#md-main">
        رفتن به محتوای اصلی
      </a>

      <MaisonNav />

      <main id="md-main" lang="fa" dir="rtl">
        <section className="md-hero" aria-labelledby="md-hero-title">
          <div className="md-wrap">
            <div className="md-hero-topline">
              <p>یک سِرویس · چهارشنبه تا یکشنبه</p>
              <p>پاریس ۱ · دوازده مهمان</p>
            </div>

            <div className="md-hero-head">
              <p className="md-kicker">
                <Ornament />
                مزون داینینگ · اتاق چشایی
              </p>
              <h1 id="md-hero-title">
                میزی چیده‌شده{" "}
                <br />
                <em>برای این شب</em>
              </h1>
              <p className="md-lede">
                اتاق غذاخوری دوازده‌نفره‌ای با یک منوی فصلی، سرویسِ آرام و
                دیدی بلند به آشپزخانه.
              </p>
              <div className="md-actions">
                <a className="md-btn md-btn--copper" href="#menu">
                  خواندن منو
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="md-btn md-btn--ghost" href="#reserve">
                  رزرو میز
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>

            <figure className="md-hero-figure">
              <ClocheScene />
              <figcaption>
                <span>کلاچ نقره‌ای · کتان · یک شمع</span>
                <span>۱۸:۲۰، پیش از سرویس</span>
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
              طرح نمایشی وب‌سایت · اتاق غذاخوری، منو و تصویرها خیالی‌اند
            </p>

            <div className="md-hero-foot">
              <a href="#menu" className="md-scroll-cue">
                اسکرول تا منو
                <ArrowDown size={14} aria-hidden="true" />
              </a>
              <p>منو €{menu.price} · همراهی €{menu.pairing}</p>
            </div>
          </div>
        </section>

        <section id="menu" className="md-menu-section" aria-labelledby="md-menu-title">
          <div className="md-wrap">
            <div className="md-section-head md-section-head--split">
              <div>
                <p className="md-eyebrow">{menu.label}</p>
                <h2 id="md-menu-title">
                  یک منو،{" "}
                  <br />
                  <em>هر روز صبح نوشته می‌شود</em>
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
                  دوازده صندلی،{" "}
                  <br />
                  <em>گردِ پاس</em>
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
                  <span>طرح نمایشی · بدون مقیاس</span>
                </figcaption>
              </figure>
            </div>

            <ul className="md-materials" aria-label="مواد اتاق">
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
                  اتاق ریتمش را{" "}
                  <br />
                  <em>خودش تعیین می‌کند</em>
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
                  پیدا کردن{" "}
                  <br />
                  <em>اتاق</em>
                </h2>

                <div className="md-visit-details">
                  <div>
                    <h3>
                      <MapPin size={16} aria-hidden="true" />
                      نشانی
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
                      ساعات
                    </h3>
                    <dl>
                      {visit.hours.map((row) => (
                        <div key={row.day}>
                          <dt>{row.day}</dt>
                          <dd>{row.time}</dd>
                        </div>
                      ))}
                    </dl>
                    <p>در ساعت ۱۸:۱۵ باز می‌شود. سرویس از {reservation.sitting} آغاز می‌شود.</p>
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
                  <span>خیابان اورفِور ۶ · ۷۵۰۰۱</span>
                  <span>مترو پون‌نُف · ۴ دقیقه</span>
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
              <p className="md-footer-word">مزون</p>
              <p>میزی برای این شب. پاریس ۱.</p>
              <a href="#top" className="md-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="md-footer-cols">
              <div>
                <p className="md-footer-label">بازدید</p>
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
                <p className="md-footer-label">کاوش</p>
                {maisonNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
                <a href="#reserve">رزروها</a>
              </div>
              <div>
                <p className="md-footer-label">قالب</p>
                <Link href="/templates/maison-dining">جزئیات قالب</Link>
                <Link href="/checkout/maison-dining">خرید این قالب</Link>
                <Link href="/templates">همهٔ قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="md-footer-bottom">
            <p>
              © ۲۰۲۶ مزون داینینگ (خیالی). یک وب‌سایت نمایشی: مکان، منو، قیمت‌ها و
              تصویرها نمایشی‌اند. هیچ رزروی انجام نمی‌شود.
            </p>
            <p>
              قالب از <Link href="/">Web3ite</Link>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
