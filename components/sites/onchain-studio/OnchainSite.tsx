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
} from "lucide-react";
import { OnchainNav } from "./OnchainNav";
import { OnchainBrief } from "./OnchainBrief";
import { BlockMark, LedgerRule, LedgerStack, NoteGlyph } from "./Artwork";
import {
  contact,
  details,
  hero,
  heroMeta,
  notes,
  onchainNav,
  protocols,
  strip,
  studio,
  work,
} from "./content";

export function OnchainSite() {
  return (
    <div className="oc-site" id="top" dir="rtl">
      <a className="oc-skip" href="#oc-main">
        رفتن به محتوای اصلی
      </a>

      <OnchainNav />

      <main id="oc-main" lang="fa" dir="rtl">
        <section className="oc-hero" aria-labelledby="oc-hero-title">
          <div className="oc-wrap oc-hero-top">
            <p>کوچهٔ لجر ۱۲ · لندن E2</p>
            <p className="oc-status">
              <span className="oc-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="oc-wrap oc-hero-grid">
            <div className="oc-hero-copy">
              <p className="oc-eyebrow">
                <BlockMark className="oc-eyebrow-mark" />
                {hero.eyebrow}
              </p>

              <h1 id="oc-hero-title">
                {hero.headline}
                <br />
                <span>{hero.headlineAccent}</span>
              </h1>

              <p className="oc-hero-lede">{hero.intro}</p>

              <div className="oc-actions">
                <a className="oc-btn oc-btn--solid" href="#showcase">
                  کارها را ببینید
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="oc-btn oc-btn--line" href="#materials">
                  یادداشت‌ها را بخوانید
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>

              <dl className="oc-hero-meta">
                {heroMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="oc-demo-note">{hero.note}</p>
            </div>

            <figure className="oc-hero-art">
              <div className="oc-plate">
                <LedgerStack />
              </div>
              <figcaption>
                {hero.caption.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </figcaption>
            </figure>
          </div>

          <div className="oc-wrap oc-hero-foot">
            <a className="oc-scroll-cue" href="#showcase">
              کارها را ببینید
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>{hero.footNote}</p>
          </div>
        </section>

        <div className="oc-strip">
          <div className="oc-wrap">
            <ul>
              {strip.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <section
          id="showcase"
          className="oc-section oc-protocols"
          aria-labelledby="oc-protocols-title"
        >
          <div className="oc-wrap">
            <LedgerRule />
            <div className="oc-section-head">
              <div>
                <p className="oc-eyebrow">{protocols.label}</p>
                <h2 id="oc-protocols-title">{protocols.title}</h2>
              </div>
              <p className="oc-section-lede">{protocols.intro}</p>
            </div>

            <ol className="oc-capabilities">
              {protocols.items.map((item) => (
                <li key={item.index}>
                  <span className="oc-cap-index" aria-hidden="true">
                    {item.index}
                  </span>
                  <div className="oc-cap-body">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                  <p className="oc-cap-detail">{item.detail}</p>
                </li>
              ))}
            </ol>

            <div className="oc-quote-band">
              <p className="oc-quote">&ldquo;{protocols.quote.text}&rdquo;</p>
              <p className="oc-quote-note">{protocols.quote.note}</p>
            </div>

            <div className="oc-work-head">
              <div>
                <p className="oc-mini-label">{work.label}</p>
                <h3 className="oc-work-title">سه مسئله، سه رابط</h3>
              </div>
              <p className="oc-work-note">{work.note}</p>
            </div>

            <div className="oc-work-grid">
              {work.projects.map((project) => (
                <article className="oc-work-card" key={project.name}>
                  <div className="oc-work-top">
                    <span className="oc-work-index" aria-hidden="true">
                      {project.index}
                    </span>
                    <span className="oc-work-kind">{project.kind}</span>
                  </div>
                  <h4>{project.name}</h4>
                  <dl className="oc-work-dl">
                    <div>
                      <dt>مسئله</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>رابط</dt>
                      <dd>{project.interface}</dd>
                    </div>
                    <div>
                      <dt>مبادله</dt>
                      <dd>{project.tradeoff}</dd>
                    </div>
                  </dl>
                  <ul className="oc-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="oc-note-line">{protocols.note}</p>
          </div>
        </section>

        <section
          id="story"
          className="oc-section oc-studio"
          aria-labelledby="oc-studio-title"
        >
          <div className="oc-wrap oc-studio-grid">
            <div className="oc-studio-copy">
              <p className="oc-eyebrow">{studio.label}</p>
              <h2 id="oc-studio-title">{studio.title}</h2>
              <p className="oc-section-lede">{studio.intro}</p>

              <ol className="oc-principles">
                {studio.principles.map((principle, index) => (
                  <li key={principle.title}>
                    <span className="oc-principle-step" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="oc-note-line">{studio.note}</p>
            </div>

            <aside className="oc-method" aria-label="روش کاری استودیو">
              <div className="oc-method-head">
                <p className="oc-mini-label">{studio.method.label}</p>
                <span aria-hidden="true">شکل / ۰۲</span>
              </div>
              <ol className="oc-method-list">
                {studio.method.steps.map((step) => (
                  <li key={step.step}>
                    <span className="oc-method-node" aria-hidden="true">
                      {step.step}
                    </span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="oc-method-note">
                یک روش، نه یک وعده: هر گام یک یافتهٔ مکتوب بر جای می‌گذارد.
              </p>
            </aside>
          </div>
        </section>

        <section
          id="materials"
          className="oc-section oc-notes"
          aria-labelledby="oc-notes-title"
        >
          <div className="oc-wrap">
            <div className="oc-section-head">
              <div>
                <p className="oc-eyebrow">{notes.label}</p>
                <h2 id="oc-notes-title">{notes.title}</h2>
              </div>
              <p className="oc-section-lede">{notes.intro}</p>
            </div>

            <div className="oc-note-grid">
              {notes.items.map((note) => (
                <article className="oc-note" key={note.title}>
                  <div className="oc-note-top">
                    <NoteGlyph className="oc-note-glyph" />
                    <span className="oc-note-date">{note.date}</span>
                  </div>
                  <p className="oc-note-tag">{note.tag}</p>
                  <h3>{note.title}</h3>
                  <p className="oc-note-excerpt">{note.excerpt}</p>
                  <p className="oc-note-foot">
                    <span>{note.read} read</span>
                    <span className="oc-note-sample">یادداشت نمونه</span>
                  </p>
                </article>
              ))}
            </div>

            <p className="oc-note-line">{notes.note}</p>
          </div>
        </section>

        <section
          id="specs"
          className="oc-section oc-details"
          aria-labelledby="oc-details-title"
        >
          <div className="oc-wrap">
            <div className="oc-section-head">
              <div>
                <p className="oc-eyebrow">{details.label}</p>
                <h2 id="oc-details-title">{details.title}</h2>
              </div>
              <p className="oc-section-lede">{details.intro}</p>
            </div>

            <div className="oc-details-grid">
              <div className="oc-details-main">
                <dl className="oc-facts">
                  {details.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                      <span>{fact.note}</span>
                    </div>
                  ))}
                </dl>

                <div className="oc-disciplines">
                  <p className="oc-mini-label">حرفه‌ها</p>
                  <ul>
                    {details.disciplines.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="oc-notclaimed">
                <p className="oc-mini-label">
                  <BlockMark className="oc-notclaimed-mark" />
                  این صفحه چه چیزی را ادعا نمی‌کند
                </p>
                <ul>
                  {details.notClaimed.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="oc-notclaimed-note">{details.notClaimedNote}</p>
              </div>
            </div>

            <p className="oc-note-line">{details.note}</p>
          </div>
        </section>

        <section
          id="contact"
          className="oc-section oc-contact"
          aria-labelledby="oc-contact-title"
        >
          <div className="oc-wrap oc-contact-grid">
            <div className="oc-contact-copy">
              <p className="oc-eyebrow">{contact.label}</p>
              <h2 id="oc-contact-title">{contact.title}</h2>
              <p className="oc-section-lede">{contact.intro}</p>

              <dl className="oc-contact-facts">
                {contact.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="oc-bring">
                <p className="oc-mini-label">همراه با بریف</p>
                <ul>
                  {contact.bring.map((item) => (
                    <li key={item}>
                      <ArrowRight size={13} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="oc-quote-block">
                <p>&ldquo;{contact.quote}&rdquo;</p>
                <cite>{contact.quoteNote}</cite>
              </blockquote>

              <div className="oc-contact-lines">
                <a href={`mailto:${contact.email}`}>
                  <Mail size={15} aria-hidden="true" />
                  {contact.email}
                </a>
                <a href="tel:+442079460006">
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

              <p className="oc-contact-note">{contact.note}</p>
            </div>

            <OnchainBrief />
          </div>
        </section>
      </main>

      <footer className="oc-footer">
        <div className="oc-wrap">
          <div className="oc-footer-top">
            <div className="oc-footer-brand">
              <p className="oc-footer-word">
                <BlockMark className="oc-footer-mark" />
                Onchain <span>استودیو</span>
              </p>
              <p>
                محصول، نه روایت. رابط‌های روشن، مکانیک‌های مستند و کارهایی که می‌توان
                حسابرسی کرد.
              </p>
              <a href="#top" className="oc-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="oc-footer-cols">
              <div>
                <p className="oc-footer-label">استودیو</p>
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
                <p className="oc-footer-label">کاوش</p>
                {onchainNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>

              <div>
                <p className="oc-footer-label">قالب</p>
                <Link href="/templates/onchain-studio">جزئیات قالب</Link>
                <Link href="/checkout/onchain-studio">خرید این قالب</Link>
                <Link href="/templates">همهٔ قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="oc-footer-bottom">
            <p>
              © ۲۰۲۶ آن‌چین استودیو (خیالی). یک وب‌سایت نمایشی: استودیو، پروژه‌ها و یادداشت‌ها نمایشی‌اند. هیچ مشتری، توکن یا محصول مالی نمایش داده نمی‌شود.
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
