import Link from "next/link";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Clock,
  Flame,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { EmberNav } from "./EmberNav";
import { MenuBoard } from "./MenuBoard";
import { EmberHearth } from "./EmberHearth";
import { EmberBooking } from "./EmberBooking";
import { HearthHero, RoomScene } from "./Artwork";
import { booking, hero, heroMeta, menu, room, visit } from "./content";

export function EmberSite() {
  return (
    <div className="ek-site" id="top" dir="rtl">
      <a className="ek-skip" href="#ek-main">
        رفتن به محتوای اصلی
      </a>

      <EmberNav />

      <main id="ek-main" lang="fa" dir="rtl">
        <section className="ek-hero" aria-labelledby="ek-hero-title">
          <div className="ek-wrap ek-hero-top">
            <p>آتش زنده / لندن E2</p>
            <p className="ek-hero-status">
              <span className="ek-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="ek-wrap ek-hero-grid">
            <div className="ek-hero-copy">
              <p className="ek-kicker">
                <Flame size={13} strokeWidth={1.8} aria-hidden="true" />
                {hero.eyebrow}
              </p>
              <h1 id="ek-hero-title">
                {hero.headline} <em>{hero.headlineAccent}</em>
              </h1>
              <p className="ek-hero-sub">{hero.subline}</p>
              <p className="ek-lede">{hero.intro}</p>

              <div className="ek-actions">
                <a className="ek-btn ek-btn--ember" href="#menu">
                  کارت امشب را ببینید
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="ek-btn ek-btn--ghost" href="#book">
                  رزرو کانتر
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>

              <dl className="ek-hero-meta">
                {heroMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="ek-demo-note">{hero.note}</p>
            </div>

            <figure className="ek-hero-figure">
              <HearthHero />
              <figcaption>
                {hero.caption.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </figcaption>
            </figure>
          </div>

          <div className="ek-wrap ek-hero-foot">
            <a className="ek-scroll-cue" href="#menu">
              خواندن کارت
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>{hero.footNote}</p>
          </div>
        </section>

        <section id="menu" className="ek-menu-section" aria-labelledby="ek-menu-title">
          <div className="ek-wrap">
            <div className="ek-section-head ek-section-head--split">
              <div>
                <p className="ek-eyebrow">{menu.label}</p>
                <h2 id="ek-menu-title">
                  کارت{" "}
                  <br />
                  <em>در پاس نوشته می‌شود</em>
                </h2>
              </div>
              <p className="ek-intro">{menu.intro}</p>
            </div>

            <MenuBoard />
          </div>
        </section>

        <section id="hearth" className="ek-hearth-section" aria-labelledby="ek-hearth-title">
          <EmberHearth />
        </section>

        <section id="room" className="ek-room-section" aria-labelledby="ek-room-title">
          <div className="ek-wrap">
            <div className="ek-section-head ek-section-head--split">
              <div>
                <p className="ek-eyebrow">{room.label}</p>
                <h2 id="ek-room-title">
                  بهترین صندلی{" "}
                  <br />
                  <em>نزدیک‌ترین به آتش است</em>
                </h2>
              </div>
              <p className="ek-intro">{room.intro}</p>
            </div>

            <figure className="ek-room-figure">
              <RoomScene />
              <figcaption>
                <span>اتاق در ۱۷:۲۰ · پیش از سرویس</span>
                <span>بلوطِ سوخته · آهنِ سیاه‌شده · بتن</span>
              </figcaption>
            </figure>

            <div className="ek-room-grid">
              <div className="ek-room-copy">
                <div className="ek-prose">
                  {room.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <ul className="ek-seats" aria-label="کجا بنشینیم">
                  {room.seats.map((seat) => (
                    <li key={seat.label}>
                      <h3>{seat.label}</h3>
                      <p>{seat.note}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="ek-room-side" aria-label="اتاق در اعداد">
                <dl className="ek-room-facts">
                  {room.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="ek-materials">
                  <p className="ek-mini-label">مواد</p>
                  <ul>
                    {room.materials.map((material) => (
                      <li key={material.label}>
                        <span>{material.label}</span>
                        {material.note}
                      </li>
                    ))}
                  </ul>
                </div>

                <a className="ek-text-link" href="#book">
                  انتخاب صندلی
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section className="ek-quote-band" aria-label="فلسفهٔ آشپزخانه">
          <div className="ek-wrap">
            <p className="ek-quote-mark" aria-hidden="true">
              “
            </p>
            <p className="ek-quote-line">{hero.closing}</p>
            <p className="ek-quote-credit">امبر کیچن · خیابان کیلن</p>
          </div>
        </section>

        <section id="book" className="ek-book-section" aria-labelledby="ek-book-title">
          <EmberBooking />
        </section>

        <section id="visit" className="ek-visit-section" aria-labelledby="ek-visit-title">
          <div className="ek-wrap">
            <div className="ek-section-head">
              <p className="ek-eyebrow">{visit.label}</p>
              <h2 id="ek-visit-title">
                <em>آتش</em> را پیدا کنید
              </h2>
            </div>

            <div className="ek-visit-grid">
              <div className="ek-visit-main">
                <address className="ek-address">
                  {visit.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <p className="ek-transport">{visit.transport}</p>

                <ol className="ek-route" aria-label="مسیر پیاده از هاکستون">
                  {visit.steps.map((step) => (
                    <li key={step.number}>
                      <span className="ek-route-number" aria-hidden="true">
                        {step.number}
                      </span>
                      <div>
                        <h3>{step.label}</h3>
                        <p>{step.note}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <aside className="ek-visit-side">
                <div className="ek-hours">
                  <p className="ek-mini-label">
                    <Clock size={13} aria-hidden="true" />
                    ساعات
                  </p>
                  <dl>
                    {visit.hours.map((row) => (
                      <div key={row.day}>
                        <dt>{row.day}</dt>
                        <dd>{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="ek-hours-note">
                    در ساعت {booking.sitting.split("–")[0]?.trim()} باز می‌شود. آتش یک ساعت
                    پیش از آن روشن می‌شود.
                  </p>
                </div>

                <div className="ek-visit-contact">
                  <p className="ek-mini-label">
                    <MapPin size={13} aria-hidden="true" />
                    آشپزخانه
                  </p>
                  <a href={`mailto:${visit.email}`}>
                    <Mail size={14} aria-hidden="true" />
                    {visit.email}
                  </a>
                  <a href="tel:+442079460000">
                    <Phone size={14} aria-hidden="true" />
                    {visit.phone}
                  </a>
                </div>

                <p className="ek-visit-note">{visit.note}</p>

                <a className="ek-btn ek-btn--ember ek-btn--block" href="#book">
                  پیش از حرکت رزرو کنید
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="ek-footer">
        <div className="ek-wrap">
          <div className="ek-footer-top">
            <div className="ek-footer-brand">
              <p className="ek-footer-word">
                Ember
                <span>آشپزخانه</span>
              </p>
              <p>یک آتش، یک منو، هجده صندلی کانتر. لندن E2.</p>
              <a href="#top" className="ek-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="ek-footer-cols">
              <div>
                <p className="ek-footer-label">بازدید</p>
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
                <p className="ek-footer-label">کاوش</p>
                <a href="#menu">امشب</a>
                <a href="#hearth">اجاق</a>
                <a href="#room">اتاق</a>
                <a href="#visit">بازدید</a>
              </div>
              <div>
                <p className="ek-footer-label">قالب</p>
                <Link href="/templates/ember-kitchen">جزئیات قالب</Link>
                <Link href="/checkout/ember-kitchen">خرید این قالب</Link>
                <Link href="/templates">همهٔ قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="ek-footer-bottom">
            <p>
              © ۲۰۲۶ امبر کیچن (خیالی). یک وب‌سایت نمایشی: مکان، منو، قیمت‌ها و تصویرها
              نمایشی‌اند. هیچ میزی رزرو نمی‌شود و پولی گرفته نمی‌شود.
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