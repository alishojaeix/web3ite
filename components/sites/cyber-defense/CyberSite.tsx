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
import { CyberNav } from "./CyberNav";
import { CyberBrief } from "./CyberBrief";
import {
  MaterialSwatch,
  RecordGlyph,
  ScanRule,
  ShieldMark,
  ShieldScan,
} from "./Artwork";
import {
  contact,
  cyberNav,
  hero,
  heroMeta,
  model,
  practice,
  record,
  response,
  strip,
} from "./content";

export function CyberSite() {
  return (
    <div className="cd-site" id="top" dir="rtl">
      <a className="cd-skip" href="#cd-main">
        رفتن به محتوای اصلی
      </a>

      <CyberNav />

      <main id="cd-main" lang="fa" dir="rtl">
        <section className="cd-hero" aria-labelledby="cd-hero-title">
          <div className="cd-wrap cd-hero-top">
            <p>میدان واچ‌تاور ۵ · لندن E1</p>
            <p className="cd-status">
              <span className="cd-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="cd-wrap cd-hero-grid">
            <div className="cd-hero-copy">
              <p className="cd-eyebrow">
                <ShieldMark className="cd-eyebrow-mark" />
                {hero.eyebrow}
              </p>

              <h1 id="cd-hero-title">
                {hero.headline}
                <br />
                <span>{hero.headlineAccent}</span>
              </h1>

              <p className="cd-hero-lede">{hero.intro}</p>

              <div className="cd-actions">
                <a className="cd-btn cd-btn--solid" href="#showcase">
                  مدل پاسخ را ببینید
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="cd-btn cd-btn--line" href="#contact">
                  درخواست بریف
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>

              <dl className="cd-hero-meta">
                {heroMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="cd-demo-note">{hero.note}</p>
            </div>

            <figure className="cd-hero-art">
              <div className="cd-hero-frame">
                <ShieldScan />
              </div>
              <figcaption>
                {hero.caption.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </figcaption>
            </figure>
          </div>

          <div className="cd-wrap cd-hero-foot">
            <a className="cd-scroll-cue" href="#showcase">
              مدل پاسخ را ببینید
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>{hero.footNote}</p>
          </div>
        </section>

        <div className="cd-strip">
          <div className="cd-wrap">
            <ul>
              {strip.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <section
          id="showcase"
          className="cd-section cd-model"
          aria-labelledby="cd-model-title"
        >
          <div className="cd-wrap">
            <ScanRule />
            <div className="cd-section-head">
              <div>
                <p className="cd-eyebrow">{model.label}</p>
                <h2 id="cd-model-title">{model.title}</h2>
              </div>
              <p className="cd-section-lede">{model.intro}</p>
            </div>

            <ol className="cd-timeline">
              {model.steps.map((step) => (
                <li key={step.step}>
                  <div className="cd-step-top">
                    <span className="cd-step-node" aria-hidden="true">
                      {step.step}
                    </span>
                    <span className="cd-step-detail">{step.detail}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>

            <div className="cd-board">
              <div className="cd-board-head">
                <div>
                  <p className="cd-board-title">{model.board.title}</p>
                  <p className="cd-board-caption">{model.board.caption}</p>
                </div>
                <span className="cd-board-live" aria-hidden="true">
                  <span className="cd-board-dot" />
                  نمونه
                </span>
              </div>
              <ul className="cd-board-list">
                {model.board.rows.map((row) => (
                  <li key={row.area}>
                    <span className="cd-board-area">{row.area}</span>
                    <span className="cd-board-note">{row.note}</span>
                    <span className="cd-board-status">{row.status}</span>
                  </li>
                ))}
              </ul>
              <p className="cd-board-foot">{model.board.note}</p>
            </div>

            <div className="cd-quote-band">
              <p className="cd-quote">&ldquo;{model.quote.text}&rdquo;</p>
              <p className="cd-quote-note">{model.quote.note}</p>
            </div>

            <p className="cd-note-line">{model.note}</p>
          </div>
        </section>

        <section
          id="story"
          className="cd-section cd-response"
          aria-labelledby="cd-response-title"
        >
          <div className="cd-wrap cd-response-grid">
            <div className="cd-response-copy">
              <p className="cd-eyebrow">{response.label}</p>
              <h2 id="cd-response-title">{response.title}</h2>
              <p className="cd-section-lede">{response.intro}</p>

              <ol className="cd-principles">
                {response.principles.map((principle, index) => (
                  <li key={principle.title}>
                    <span className="cd-principle-step" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="cd-note-line">{response.note}</p>
            </div>

            <aside className="cd-clock" aria-label="ساعت پاسخ نمایشی">
              <div className="cd-clock-head">
                <div>
                  <p className="cd-clock-title">{response.clock.title}</p>
                  <p className="cd-clock-caption">{response.clock.caption}</p>
                </div>
                <Clock size={17} aria-hidden="true" />
              </div>

              <ol className="cd-clock-list">
                {response.clock.events.map((event) => (
                  <li key={event.time}>
                    <span className="cd-clock-time">{event.time}</span>
                    <div>
                      <h3>{event.title}</h3>
                      <p>{event.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="cd-clock-note">{response.clock.note}</p>
            </aside>
          </div>
        </section>

        <section
          id="materials"
          className="cd-section cd-record"
          aria-labelledby="cd-record-title"
        >
          <div className="cd-wrap">
            <div className="cd-section-head">
              <div>
                <p className="cd-eyebrow">{record.label}</p>
                <h2 id="cd-record-title">{record.title}</h2>
              </div>
              <p className="cd-section-lede">{record.intro}</p>
            </div>

            <div className="cd-record-grid">
              {record.items.map((item) => (
                <article className="cd-record-card" key={item.name}>
                  <div className="cd-swatch-frame">
                    <MaterialSwatch variant={item.swatch} />
                    <span className="cd-swatch-tag" aria-hidden="true">
                      {item.note}
                    </span>
                  </div>
                  <div className="cd-record-copy">
                    <div className="cd-record-title-row">
                      <h3>{item.name}</h3>
                      <RecordGlyph className="cd-record-glyph" />
                    </div>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="cd-note-line">{record.note}</p>
          </div>
        </section>

        <section
          id="specs"
          className="cd-section cd-practice"
          aria-labelledby="cd-practice-title"
        >
          <div className="cd-wrap">
            <div className="cd-section-head">
              <div>
                <p className="cd-eyebrow">{practice.label}</p>
                <h2 id="cd-practice-title">{practice.title}</h2>
              </div>
              <p className="cd-section-lede">{practice.intro}</p>
            </div>

            <div className="cd-practice-grid">
              <div className="cd-practice-main">
                <dl className="cd-facts">
                  {practice.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                      <span>{fact.note}</span>
                    </div>
                  ))}
                </dl>

                <div className="cd-spec-panel">
                  <div className="cd-panel-head">
                    <span>تمرین / خلاصه</span>
                    <span aria-hidden="true">CD / ۰۱</span>
                  </div>
                  <dl className="cd-spec-rows">
                    {practice.rows.map((row) => (
                      <div key={row.label}>
                        <dt>{row.label}</dt>
                        <dd>
                          {row.value}
                          <span>{row.note}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="cd-notclaimed">
                <p className="cd-mini-label">
                  <ShieldCheck size={13} aria-hidden="true" />
                  این صفحه چه چیزی را ادعا نمی‌کند
                </p>
                <ul>
                  {practice.notClaimed.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="cd-notclaimed-note">{practice.notClaimedNote}</p>
              </div>
            </div>

            <p className="cd-note-line">{practice.note}</p>
          </div>
        </section>

        <section
          id="contact"
          className="cd-section cd-contact"
          aria-labelledby="cd-contact-title"
        >
          <div className="cd-wrap cd-contact-grid">
            <div className="cd-contact-copy">
              <p className="cd-eyebrow">{contact.label}</p>
              <h2 id="cd-contact-title">{contact.title}</h2>
              <p className="cd-section-lede">{contact.intro}</p>

              <dl className="cd-contact-facts">
                {contact.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="cd-bring">
                <p className="cd-mini-label">همراه با بریف</p>
                <ul>
                  {contact.bring.map((item) => (
                    <li key={item}>
                      <ArrowRight size={13} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="cd-quote-block">
                <p>&ldquo;{contact.quote}&rdquo;</p>
                <cite>{contact.quoteNote}</cite>
              </blockquote>

              <div className="cd-contact-lines">
                <a href={`mailto:${contact.email}`}>
                  <Mail size={15} aria-hidden="true" />
                  {contact.email}
                </a>
                <a href="tel:+442079460007">
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

              <p className="cd-contact-note">{contact.note}</p>
            </div>

            <CyberBrief />
          </div>
        </section>
      </main>

      <footer className="cd-footer">
        <div className="cd-wrap">
          <div className="cd-footer-top">
            <div className="cd-footer-brand">
              <p className="cd-footer-word">
                <ShieldMark className="cd-footer-mark" />
                سایبر دیفنس <span>پاسخ</span>
              </p>
              <p>
                آماده پیش از ضربه: یک مدل پاسخِ آرام، رویه‌های تمرین‌شده و سابقه‌ای مکتوب از آنچه رخ داد.
              </p>
              <a href="#top" className="cd-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="cd-footer-cols">
              <div>
                <p className="cd-footer-label">میز پاسخ</p>
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
                <p className="cd-footer-label">کاوش</p>
                {cyberNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>

              <div>
                <p className="cd-footer-label">قالب</p>
                <Link href="/templates/cyber-defense">جزئیات قالب</Link>
                <Link href="/checkout/cyber-defense">خرید این قالب</Link>
                <Link href="/templates">همهٔ قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="cd-footer-bottom">
            <p>
              © ۲۰۲۶ سایبر دیفنس (خیالی). یک وب‌سایت نمایشی: تمرین، مدل و سوابق نمایشی‌اند. هیچ پایش زنده، گواهی یا تضمین امنیتی نمایش داده نمی‌شود.
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
