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
    <div className="ap-site" id="top" dir="rtl">
      <a className="ap-skip" href="#ap-main">
        رفتن به محتوای اصلی
      </a>

      <ApexNav />

      <main id="ap-main" lang="fa" dir="rtl">
        <section className="ap-hero" aria-labelledby="ap-hero-title">
          <div className="ap-wrap ap-hero-top">
            <p>خیابان کانسور ۱ · لندن W1K</p>
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
                  کاوش خودرو
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="ap-btn ap-btn--line" href="#contact">
                  ساخت مشخصات
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
              خودرو، به‌روشنی توصیف‌شده
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
                    <span>اپکس GT / در یک نگاه</span>
                    <span aria-hidden="true">APX / ۰۱</span>
                  </div>
                  <dl className="ap-spec-rows">
                    <div>
                      <dt>بدنه</dt>
                      <dd>
                        تور بزرگ
                        <span>۲+۲</span>
                      </dd>
                    </div>
                    <div>
                      <dt>چیدمان</dt>
                      <dd>
                        موتور جلو
                        <span>دیفرانسیل عقب</span>
                      </dd>
                    </div>
                    <div>
                      <dt>جعبه‌دنده</dt>
                      <dd>
                        ۸ سرعته
                        <span>خودکار</span>
                      </dd>
                    </div>
                    <div>
                      <dt>ساخت</dt>
                      <dd>
                        به سفارش
                        <span>بدون بیعانه</span>
                      </dd>
                    </div>
                  </dl>
                  <p className="ap-panel-foot">
                    فقط نمایشی. هیچ خودروی تولیدی نمایش داده نمی‌شود.
                  </p>
                </div>

                <figure className="ap-detail">
                  <figcaption>
                    <span>جزئیات / فورج ۲۱ اینچی</span>
                    <span aria-hidden="true">نمونه</span>
                  </figcaption>
                  <div className="ap-detail-art">
                    <WheelStudy size={168} />
                  </div>
                  <p>
                    رویهٔ ماشین‌کاری‌شده و استوانهٔ تیره و گرم. ترسیم‌شده، نه عکس‌برداری‌شده — مانند بقیهٔ خودرو.
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
                  این صفحه چه چیزی را ادعا نمی‌کند
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
                <p className="ap-mini-label">همراه با درخواست</p>
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
                اپکس مارک <span>تور بزرگ</span>
              </p>
              <p>
                از راهِ دور به خانه: یک خودرو، یک نور کلیدی و مشخصاتی که جزئیات کار خود را نشان می‌دهد.
              </p>
              <a href="#top" className="ap-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="ap-footer-cols">
              <div>
                <p className="ap-footer-label">نمایشگاه</p>
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
                <p className="ap-footer-label">کاوش</p>
                {apexNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>

              <div>
                <p className="ap-footer-label">قالب</p>
                <Link href="/templates/apex-marque">جزئیات قالب</Link>
                <Link href="/checkout/apex-marque">خرید این قالب</Link>
                <Link href="/templates">همهٔ قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="ap-footer-bottom">
            <p>
              © ۲۰۲۶ اپکس مارک (خیالی). یک وب‌سایت نمایشی: برند، خودرو، تیپ‌ها و اعداد نمایشی‌اند. هیچ خودروی تولیدی، سفارش، قیمت یا بیعانه‌ای نمایش داده نمی‌شود.
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
