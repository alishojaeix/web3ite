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
import { AtelierStill, CigarMark, MaterialSwatch } from "./Artwork";
import { CigarCollection } from "./CigarCollection";
import { CigarNav } from "./CigarNav";
import { CigarNotice } from "./CigarNotice";
import {
  cigarNav,
  collection,
  contact,
  footer,
  healthWarning,
  hero,
  heroMeta,
  materials,
  specification,
  story,
} from "./content";

export function CigarSite() {
  return (
    <div className="ca-site" id="top" dir="rtl">
      <a className="ca-skip" href="#ca-main">
        رفتن به محتوای اصلی
      </a>

      <div
        className="ca-topbar"
        role="note"
        aria-label="اطلاعیه نمایشی با محدودیت سنی"
      >
        <div className="ca-wrap ca-topbar-inner">
          <span className="ca-topbar-status">
            <span className="ca-dot" aria-hidden="true" />
            بزرگسالان بالای ۱۸ سال · نمایش با محدودیت سنی
          </span>
          <span className="ca-topbar-note">
            خانه خیالی · بدون فروش · بدون ادعای سلامت
          </span>
          <a href="#contact" className="ca-topbar-link">
            مطالعه اطلاعیه
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>

      <CigarNav />

      <main id="ca-main" lang="fa" dir="rtl">
        <section className="ca-hero" aria-labelledby="ca-hero-title">
          <div className="ca-wrap ca-hero-top">
            <p>نمایه خانه ۰۱ · با هماهنگی قبلی (خیالی)</p>
            <p className="ca-status">
              <span className="ca-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="ca-wrap ca-hero-grid">
            <div className="ca-hero-copy">
              <p className="ca-eyebrow">
                <CigarMark className="ca-eyebrow-mark" />
                {hero.eyebrow}
              </p>

              <h1 id="ca-hero-title">
                <span className="ca-h1-word">{hero.headline}</span>
                <span className="ca-h1-accent">{hero.headlineAccent}</span>
              </h1>

              <p className="ca-hero-lede">{hero.intro}</p>

              <div className="ca-actions">
                <a className="ca-btn ca-btn--solid" href="#showcase">
                  مشاهده مجموعه
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="ca-btn ca-btn--line" href="#story">
                  مطالعه یادداشت‌های خانه
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>

              <dl className="ca-hero-meta">
                {heroMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="ca-demo-note">{hero.note}</p>
            </div>

            <figure className="ca-hero-art">
              <div className="ca-hero-frame">
                <div className="ca-frame-head">
                  <span>تصویر ثابت / خانه ۰۱</span>
                  <span aria-hidden="true">18+</span>
                </div>
                <AtelierStill className="ca-hero-still" />
              </div>
              <figcaption>
                {hero.caption.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </figcaption>
            </figure>
          </div>

          <div className="ca-wrap">
            <div className="ca-archive-rail">
              <div>
                <span>دسترسی</span>
                <strong>محدودیت ۱۸+</strong>
                <small>ویژه بزرگسالان</small>
              </div>
              <div>
                <span>پرونده‌ها</span>
                <strong>۰۴ مورد فهرست‌شده</strong>
                <small>قالب‌های تصویری</small>
              </div>
              <div>
                <span>اثر هنری</span>
                <strong>ترسیم درون‌خطی</strong>
                <small>بدون عکس محصول</small>
              </div>
              <div>
                <span>فروش</span>
                <strong>ندارد</strong>
                <small>بدون موجودی یا سفارش</small>
              </div>
            </div>
          </div>
        </section>

        <aside className="ca-warning" role="note" aria-label="هشدار سلامت">
          <div className="ca-wrap ca-warning-inner">
            <span className="ca-warning-icon" aria-hidden="true">
              <ShieldAlert size={20} />
            </span>
            <div>
              <p className="ca-warning-label">هشدار سلامت</p>
              <p className="ca-warning-text">{healthWarning}</p>
            </div>
          </div>
        </aside>

        <section
          id="story"
          className="ca-section ca-story"
          aria-labelledby="ca-story-title"
        >
          <div className="ca-wrap">
            <div className="ca-section-head">
              <div>
                <p className="ca-eyebrow">{story.label}</p>
                <h2 id="ca-story-title">{story.title}</h2>
              </div>
              <p className="ca-section-lede">{story.intro}</p>
            </div>

            <div className="ca-quote-band">
              <p>&ldquo;{story.quote.text}&rdquo;</p>
              <cite>{story.quote.note}</cite>
            </div>

            <div className="ca-story-grid">
              <ol className="ca-principles">
                {story.notes.map((note) => (
                  <li key={note.title}>
                    <span className="ca-principle-index" aria-hidden="true">
                      {note.index}
                    </span>
                    <div>
                      <h3>{note.title}</h3>
                      <p>{note.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

                <aside className="ca-sheet" aria-label="پرونده تصویری آتلیه">
                <div className="ca-sheet-head">
                  <div>
                    <p className="ca-sheet-title">{story.sheet.title}</p>
                    <p className="ca-sheet-caption">{story.sheet.caption}</p>
                  </div>
                  <span className="ca-sheet-code" aria-hidden="true">
                    {story.sheet.code}
                  </span>
                </div>

                <ol className="ca-sheet-rows">
                  {story.sheet.rows.map((row) => (
                    <li key={row.area}>
                      <span className="ca-sheet-value">{row.value}</span>
                      <div>
                        <h3>{row.area}</h3>
                        <p>{row.note}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <p className="ca-sheet-note">{story.sheet.note}</p>
              </aside>
            </div>

            <p className="ca-note-line">{story.note}</p>
          </div>
        </section>

        <section
          id="showcase"
          className="ca-section ca-collection"
          aria-labelledby="ca-collection-title"
        >
          <div className="ca-wrap">
            <div className="ca-section-head">
              <div>
                <p className="ca-eyebrow">{collection.label}</p>
                <h2 id="ca-collection-title">{collection.title}</h2>
              </div>
              <p className="ca-section-lede">{collection.intro}</p>
            </div>

            <CigarCollection />

            <p className="ca-note-line">{collection.note}</p>
          </div>
        </section>

        <section
          id="materials"
          className="ca-section ca-materials"
          aria-labelledby="ca-materials-title"
        >
          <div className="ca-wrap">
            <div className="ca-section-head">
              <div>
                <p className="ca-eyebrow">{materials.label}</p>
                <h2 id="ca-materials-title">{materials.title}</h2>
              </div>
              <p className="ca-section-lede">{materials.intro}</p>
            </div>

            <div className="ca-material-grid">
              {materials.items.map((item, index) => (
                <article className="ca-material-card" key={item.name}>
                  <div className="ca-swatch-frame">
                    <MaterialSwatch
                      variant={item.swatch as "cedar" | "brass" | "paper"}
                      className="ca-swatch"
                    />
                    <span className="ca-swatch-tag" aria-hidden="true">
                      {item.note}
                    </span>
                  </div>
                  <div className="ca-material-copy">
                    <span className="ca-material-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="ca-note-line">{materials.note}</p>
          </div>
        </section>

        <section
          id="specs"
          className="ca-section ca-specs"
          aria-labelledby="ca-specs-title"
        >
          <div className="ca-wrap">
            <div className="ca-section-head">
              <div>
                <p className="ca-eyebrow">{specification.label}</p>
                <h2 id="ca-specs-title">{specification.title}</h2>
              </div>
              <p className="ca-section-lede">{specification.intro}</p>
            </div>

            <div className="ca-spec-groups">
              {specification.groups.map((group, index) => (
                <article className="ca-spec-group" key={group.title}>
                  <div className="ca-spec-head">
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

            <div className="ca-notclaimed">
              <div>
                <p className="ca-mini-label">
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
              <p className="ca-notclaimed-note">
                {specification.notClaimedNote}
              </p>
            </div>

            <p className="ca-note-line">{specification.note}</p>
          </div>
        </section>

        <section
          id="contact"
          className="ca-section ca-contact"
          aria-labelledby="ca-contact-title"
        >
          <div className="ca-wrap ca-contact-grid">
            <div className="ca-contact-copy">
              <p className="ca-eyebrow">{contact.label}</p>
              <h2 id="ca-contact-title">{contact.title}</h2>
              <p className="ca-section-lede">{contact.intro}</p>

              <dl className="ca-contact-facts">
                {contact.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="ca-bring">
                <p className="ca-mini-label">
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

              <blockquote className="ca-quote-block">
                <p>&ldquo;{contact.quote}&rdquo;</p>
                <cite>{contact.quoteNote}</cite>
              </blockquote>

              <div className="ca-contact-lines">
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

              <p className="ca-contact-note">{contact.note}</p>
            </div>

            <CigarNotice />
          </div>
        </section>
      </main>

      <footer className="ca-footer">
        <div className="ca-wrap">
          <div className="ca-footer-top">
            <div className="ca-footer-brand">
              <p className="ca-footer-word">
                <CigarMark className="ca-footer-mark" />
                سیگار آتلیه <span>خانه ۰۱</span>
              </p>
              <p>{footer.blurb}</p>
              <a href="#top" className="ca-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="ca-footer-cols">
              <div>
                <p className="ca-footer-label">خانه</p>
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
                <p className="ca-footer-label">بخش‌ها</p>
                {cigarNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>

              <div>
                <p className="ca-footer-label">قالب</p>
                <Link href="/templates/cigar-atelier">جزئیات قالب</Link>
                <Link href="/checkout/cigar-atelier">خرید این قالب</Link>
                <Link href="/templates">همه قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="ca-footer-warning">
            <ShieldAlert size={17} aria-hidden="true" />
            <p>
              <strong>هشدار سلامت.</strong> {healthWarning}
            </p>
          </div>

          <div className="ca-footer-bottom">
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
