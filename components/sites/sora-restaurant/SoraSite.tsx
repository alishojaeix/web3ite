import Link from "next/link";
import { ArrowDown, ArrowUp, ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { SoraNav } from "./SoraNav";
import { SoraMenu } from "./SoraMenu";
import { SoraBooking } from "./SoraBooking";
import { BowlScene, RoomPlan } from "./Artwork";
import { hero, heroMeta, house, sake, visit } from "./content";

export function SoraSite() {
  return (
    <div className="sr-site" id="top" dir="rtl">
      <a className="sr-skip" href="#sr-main">
        رفتن به محتوای اصلی
      </a>

      <SoraNav />

      <main id="sr-main" lang="fa" dir="rtl">
        <section className="sr-hero" aria-labelledby="sr-hero-title">
          <div className="sr-wrap sr-hero-top">
            <p>کوچهٔ گاردن ۳ · لندن E2</p>
            <p className="sr-hero-status">
              <span className="sr-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="sr-wrap sr-hero-inner">
            <p className="sr-vertical" aria-hidden="true">
              空 · 静かな食卓
            </p>

            <p className="sr-kicker">
              <span className="sr-seal" aria-hidden="true">
                空
              </span>
              {hero.eyebrow}
            </p>

            <h1 id="sr-hero-title">
              {hero.headline} <em>{hero.headlineAccent}</em>
            </h1>
            <p className="sr-hero-jp" lang="ja">
              {hero.japanese}
            </p>
            <p className="sr-hero-lede">{hero.intro}</p>

            <div className="sr-actions">
              <a className="sr-btn sr-btn--ink" href="#menu">
                دیدن منو
                <ArrowDown size={15} aria-hidden="true" />
              </a>
              <a className="sr-btn sr-btn--line" href="#visit">
                درخواست میز
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <figure className="sr-hero-figure">
              <BowlScene />
              <figcaption>
                {hero.caption.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </figcaption>
            </figure>

            <dl className="sr-hero-meta">
              {heroMeta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <p className="sr-demo-note">{hero.note}</p>
          </div>

          <div className="sr-wrap sr-hero-foot">
            <a className="sr-scroll-cue" href="#menu">
              خواندن منو
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>{hero.footNote}</p>
          </div>
        </section>

        <section id="menu" className="sr-menu-section" aria-labelledby="sr-menu-title">
          <div className="sr-wrap">
            <div className="sr-section-head sr-section-head--split">
              <div>
                <p className="sr-eyebrow">۰۲ / منو</p>
                <h2 id="sr-menu-title">
                  فصلی،{" "}
                  <br />
                  <em>بی‌هیاهو</em>
                </h2>
              </div>
              <p className="sr-intro">
                منویی جمع‌وجور از بشقاب‌های کوچک و یک پایانِ برنج. ساکه به‌ازای لیوان، هرگز
                اصرارآمیز. آشپزخانه آنچه را هفته می‌فرستد می‌پزد.
              </p>
            </div>

            <SoraMenu />
          </div>
        </section>

        <section id="house" className="sr-house-section" aria-labelledby="sr-house-title">
          <div className="sr-wrap">
            <div className="sr-section-head sr-section-head--split">
              <div>
                <p className="sr-eyebrow">{house.label}</p>
                <h2 id="sr-house-title">
                  چوبِ روشن،{" "}
                  <br />
                  <em>نورِ نرم</em>
                </h2>
              </div>
              <p className="sr-intro">{house.intro}</p>
            </div>

            <div className="sr-house-grid">
              <div className="sr-house-copy">
                <div className="sr-prose">
                  {house.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <ul className="sr-house-materials" aria-label="مواد اتاق">
                  {house.materials.map((material) => (
                    <li key={material.label}>
                      <span>{material.label}</span>
                      {material.note}
                    </li>
                  ))}
                </ul>
              </div>

              <figure className="sr-plan-card">
                <RoomPlan />
                <figcaption>
                  <span>{house.plan.note}</span>
                  <span>طرح نمایشی · بدون مقیاس</span>
                </figcaption>
              </figure>
            </div>

            <dl className="sr-house-facts">
              {house.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <p className="sr-house-quote">
              &ldquo;{hero.closing}&rdquo;
            </p>
          </div>
        </section>

        <section id="sake" className="sr-sake-section" aria-labelledby="sr-sake-title">
          <div className="sr-wrap">
            <div className="sr-section-head sr-section-head--split">
              <div>
                <p className="sr-eyebrow">{sake.label}</p>
                <h2 id="sr-sake-title">
                  به‌ازای لیوان،{" "}
                  <br />
                  <em>هرگز اصرارآمیز</em>
                </h2>
              </div>
              <p className="sr-intro">{sake.intro}</p>
            </div>

            <ul className="sr-sakes">
              {sake.bottles.map((bottle, index) => (
                <li key={bottle.name}>
                  <span className="sr-sake-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3>{bottle.name}</h3>
                  <p className="sr-sake-style">{bottle.style}</p>
                  <p className="sr-sake-note">{bottle.note}</p>
                  <p className="sr-sake-price">
                    <span aria-hidden="true">£</span>
                    {bottle.price}
                    <small>لیوان</small>
                  </p>
                </li>
              ))}
            </ul>

            <p className="sr-sake-note-line">{sake.note}</p>
          </div>
        </section>

        <section
          id="visit"
          className="sr-visit-section"
          aria-labelledby="sr-book-title"
        >
          <div className="sr-wrap">
            <SoraBooking />

            <div className="sr-visit-strip">
              <div className="sr-visit-block">
                <p className="sr-mini-label">
                  <MapPin size={13} aria-hidden="true" />
                  اتاق
                </p>
                <address className="sr-address">
                  {visit.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <p className="sr-transport">{visit.transport}</p>
              </div>

              <div className="sr-visit-block">
                <p className="sr-mini-label">
                  <Clock size={13} aria-hidden="true" />
                  ساعات
                </p>
                <dl className="sr-hours">
                  {visit.hours.map((row) => (
                    <div key={`${row.day}-${row.time}`}>
                      <dt>{row.day}</dt>
                      <dd>{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="sr-visit-block">
                <p className="sr-mini-label">اتاق، با ایمیل</p>
                <a href={`mailto:${visit.email}`} className="sr-contact-link">
                  <Mail size={14} aria-hidden="true" />
                  {visit.email}
                </a>
                <a href="tel:+442079460000" className="sr-contact-link">
                  <Phone size={14} aria-hidden="true" />
                  {visit.phone}
                </a>
                <p className="sr-visit-note">{visit.note}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="sr-footer">
        <div className="sr-wrap">
          <div className="sr-footer-top">
            <div className="sr-footer-brand">
              <p className="sr-footer-word">
                Sora <span aria-hidden="true">空</span>
              </p>
              <p>
                غذاخوری ژاپنی مدرن در کوچۀ گاردن. بشقاب‌های فصلی، یک برنج، ساکه به‌ازای لیوان.
              </p>
              <a href="#top" className="sr-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="sr-footer-cols">
              <div>
                <p className="sr-footer-label">بازدید</p>
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
                <p className="sr-footer-label">کاوش</p>
                <a href="#menu">منو</a>
                <a href="#house">خانه</a>
                <a href="#sake">ساکه</a>
                <a href="#visit">بازدید</a>
              </div>
              <div>
                <p className="sr-footer-label">قالب</p>
                <Link href="/templates/sora-restaurant">جزئیات قالب</Link>
                <Link href="/checkout/sora-restaurant">خرید این قالب</Link>
                <Link href="/templates">همهٔ قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="sr-footer-bottom">
            <p>
              © ۲۰۲۶ Sora (خیالی). یک وب‌سایت نمایشی: مکان، منو، قیمت‌ها و تصویرها نمایشی‌اند.
              هیچ میزی رزرو نمی‌شود و پولی گرفته نمی‌شود.
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