import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { MaterialSwatch, ShelfElevation, TinHero, TinMark } from "./Artwork";
import { ModernEdit } from "./ModernEdit";
import { ModernNav } from "./ModernNav";
import { ModernNotice } from "./ModernNotice";
import {
  contact,
  edit,
  footer,
  healthWarning,
  hero,
  heroMeta,
  materials,
  modernNav,
  specification,
  story,
} from "./content";

export function ModernSite() {
  return (
    <div className="mt-site" id="top" dir="rtl">
      <a className="mt-skip" href="#mt-main">
        رفتن به محتوای اصلی
      </a>

      <div
        className="mt-topbar"
        role="note"
        aria-label="اطلاعیه نمایشی با محدودیت سنی"
      >
        <div className="mt-wrap mt-topbar-inner">
          <span className="mt-topbar-status">
            <span className="mt-dot" aria-hidden="true" />
            بزرگسالان بالای ۱۸ سال · نمایش با محدودیت سنی
          </span>
          <span className="mt-topbar-note">
            بوتیک خیالی · بدون فروش · بدون ادعای سلامت
          </span>
          <a href="#contact" className="mt-topbar-link">
            مطالعه اطلاعیه
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>

      <ModernNav />

      <main id="mt-main" lang="fa" dir="rtl">
        <section className="mt-hero" aria-labelledby="mt-hero-title">
          <div className="mt-wrap mt-hero-top">
            <p>نمایه بوتیک ۰۱ · با هماهنگی قبلی (خیالی)</p>
            <p className="mt-status">
              <span className="mt-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="mt-wrap mt-hero-grid">
            <div className="mt-hero-copy">
              <p className="mt-eyebrow">
                <TinMark className="mt-eyebrow-mark" />
                {hero.eyebrow}
              </p>

              <h1 id="mt-hero-title">
                <span className="mt-h1-word">{hero.headline}</span>
                <span className="mt-h1-accent">{hero.headlineAccent}</span>
              </h1>

              <p className="mt-hero-lede">{hero.intro}</p>

              <div className="mt-actions">
                <a className="mt-btn mt-btn--solid" href="#showcase">
                  مرور مجموعه
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="mt-btn mt-btn--line" href="#contact">
                  مطالعه اطلاعیه
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>

              <dl className="mt-hero-meta">
                {heroMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-demo-note">{hero.note}</p>
            </div>

            <figure className="mt-hero-art">
              <div className="mt-hero-frame">
                <div className="mt-frame-head">
                  <span>قفسه / بررسی ۰۱</span>
                  <span aria-hidden="true">18+</span>
                </div>
                <TinHero className="mt-hero-study" />
              </div>
              <figcaption>
                {hero.caption.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </figcaption>
            </figure>
          </div>

          <div className="mt-wrap">
            <div className="mt-archive-rail">
              <div>
                <span>دسترسی</span>
                <strong>محدودیت ۱۸+</strong>
                <small>ویژه بزرگسالان</small>
              </div>
              <div>
                <span>اشیا</span>
                <strong>۰۳ مورد فهرست‌شده</strong>
                <small>مجموعه تصویری</small>
              </div>
              <div>
                <span>جنس</span>
                <strong>فولاد برس‌خورده</strong>
                <small>یک فلز، یک نور</small>
              </div>
              <div>
                <span>فروش</span>
                <strong>ندارد</strong>
                <small>بدون موجودی یا سفارش</small>
              </div>
            </div>
            <p className="mt-footnote">{hero.footNote}</p>
          </div>
        </section>

        <aside className="mt-warning" role="note" aria-label="هشدار سلامت">
          <div className="mt-wrap mt-warning-inner">
            <span className="mt-warning-icon" aria-hidden="true">
              <ShieldAlert size={20} />
            </span>
            <div>
              <p className="mt-warning-label">هشدار سلامت</p>
              <p className="mt-warning-text">{healthWarning}</p>
            </div>
          </div>
        </aside>

        <section
          id="showcase"
          className="mt-section mt-edit"
          aria-labelledby="mt-edit-title"
        >
          <div className="mt-wrap">
            <div className="mt-section-head">
              <div>
                <p className="mt-eyebrow">{edit.label}</p>
                <h2 id="mt-edit-title">{edit.title}</h2>
              </div>
              <p className="mt-section-lede">{edit.intro}</p>
            </div>

            <ModernEdit />

            <p className="mt-note-line">{edit.note}</p>
          </div>
        </section>

        <section
          id="story"
          className="mt-section mt-story"
          aria-labelledby="mt-story-title"
        >
          <div className="mt-wrap">
            <div className="mt-section-head">
              <div>
                <p className="mt-eyebrow">{story.label}</p>
                <h2 id="mt-story-title">{story.title}</h2>
              </div>
              <p className="mt-section-lede">{story.intro}</p>
            </div>

            <div className="mt-quote-band">
              <p>&ldquo;{story.quote.text}&rdquo;</p>
              <cite>{story.quote.note}</cite>
            </div>

            <div className="mt-story-grid">
              <ol className="mt-principles">
                {story.principles.map((principle) => (
                  <li key={principle.title}>
                    <span className="mt-principle-index" aria-hidden="true">
                      {principle.index}
                    </span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <aside className="mt-elevation" aria-label="نمای تصویری قفسه">
                <div className="mt-elevation-head">
                  <div>
                    <p className="mt-elevation-title">{story.elevation.title}</p>
                    <p className="mt-elevation-caption">{story.elevation.caption}</p>
                  </div>
                  <span className="mt-elevation-code" aria-hidden="true">
                    {story.elevation.code}
                  </span>
                </div>

                <ShelfElevation className="mt-elevation-svg" />

                <dl className="mt-elevation-rows">
                  {story.elevation.rows.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-elevation-note">{story.elevation.note}</p>
              </aside>
            </div>

            <p className="mt-note-line">{story.note}</p>
          </div>

          <div id="stockists" className="mt-stockists">
            <div className="mt-wrap">
              <div className="mt-stockist-head">
                <div>
                  <p className="mt-eyebrow">{story.stockists.label}</p>
                  <h3>{story.stockists.title}</h3>
                </div>
                <p>{story.stockists.intro}</p>
              </div>

              <ol className="mt-stockist-list">
                {story.stockists.items.map((item, index) => (
                  <li key={item.name}>
                    <span className="mt-stockist-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-stockist-name">{item.name}</span>
                    <span className="mt-stockist-city">{item.city}</span>
                    <span className="mt-stockist-note">{item.note}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-stockist-disclaimer">{story.stockists.note}</p>
            </div>
          </div>
        </section>

        <section
          id="materials"
          className="mt-section mt-materials"
          aria-labelledby="mt-materials-title"
        >
          <div className="mt-wrap">
            <div className="mt-section-head">
              <div>
                <p className="mt-eyebrow">{materials.label}</p>
                <h2 id="mt-materials-title">{materials.title}</h2>
              </div>
              <p className="mt-section-lede">{materials.intro}</p>
            </div>

            <div className="mt-material-grid">
              {materials.items.map((item, index) => (
                <article className="mt-material-card" key={item.name}>
                  <div className="mt-swatch-frame">
                    <MaterialSwatch
                      variant={item.swatch as "steel" | "light" | "paper"}
                      className="mt-swatch"
                    />
                    <span className="mt-swatch-tag" aria-hidden="true">
                      {item.note}
                    </span>
                  </div>
                  <div className="mt-material-copy">
                    <span className="mt-material-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-note-line">{materials.note}</p>
          </div>
        </section>

        <section
          id="specs"
          className="mt-section mt-section--dark mt-specs"
          aria-labelledby="mt-specs-title"
        >
          <div className="mt-wrap">
            <div className="mt-section-head">
              <div>
                <p className="mt-eyebrow">{specification.label}</p>
                <h2 id="mt-specs-title">{specification.title}</h2>
              </div>
              <p className="mt-section-lede">{specification.intro}</p>
            </div>

            <div className="mt-spec-groups">
              {specification.groups.map((group, index) => (
                <article className="mt-spec-group" key={group.title}>
                  <div className="mt-spec-head">
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

            <div className="mt-notclaimed">
              <div>
                <p className="mt-mini-label">
                  <ShieldCheck size={13} aria-hidden="true" />
                  این صفحه چه ادعاهایی ندارد
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
              <p className="mt-notclaimed-note">
                {specification.notClaimedNote}
              </p>
            </div>

            <p className="mt-note-line mt-note-line--dark">
              {specification.note}
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="mt-section mt-contact"
          aria-labelledby="mt-contact-title"
        >
          <div className="mt-wrap mt-contact-grid">
            <div className="mt-contact-copy">
              <p className="mt-eyebrow">{contact.label}</p>
              <h2 id="mt-contact-title">{contact.title}</h2>
              <p className="mt-section-lede">{contact.intro}</p>

              <dl className="mt-contact-facts">
                {contact.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-bring">
                <p className="mt-mini-label">
                  <ShieldCheck size={13} aria-hidden="true" />
                  موضوعات این اطلاعیه
                </p>
                <ul>
                  {contact.lines.map((line) => (
                    <li key={line}>
                      <span aria-hidden="true">×</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="mt-quote-block">
                <p>&ldquo;{contact.quote}&rdquo;</p>
                <cite>{contact.quoteNote}</cite>
              </blockquote>

              <div className="mt-contact-lines">
                <a href={`mailto:${contact.email}`}>
                  <Mail size={15} aria-hidden="true" />
                  {contact.email}
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

              <p className="mt-contact-note">{contact.note}</p>
            </div>

            <ModernNotice />
          </div>
        </section>
      </main>

      <footer className="mt-footer">
        <div className="mt-wrap">
          <div className="mt-footer-top">
            <div className="mt-footer-brand">
              <p className="mt-footer-word">
                <TinMark className="mt-footer-mark" />
                Modern Tobacco <span>بوتیک ۰۱</span>
              </p>
              <p>{footer.blurb}</p>
              <a href="#top" className="mt-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-footer-cols">
              <div>
                <p className="mt-footer-label">بوتیک</p>
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
                <p className="mt-footer-label">بخش‌ها</p>
                {modernNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>

              <div>
                <p className="mt-footer-label">قالب</p>
                <Link href="/templates/modern-tobacco">جزئیات قالب</Link>
                <Link href="/checkout/modern-tobacco">خرید این قالب</Link>
                <Link href="/templates">همه قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="mt-footer-warning">
            <ShieldAlert size={17} aria-hidden="true" />
            <p>
              <strong>هشدار سلامت.</strong> {healthWarning}
            </p>
          </div>

          <div className="mt-footer-bottom">
            <p>{footer.note}</p>
            <p>
              قالب از <Link href="/">Web3ite</Link>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
