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
import { NeuralNav } from "./NeuralNav";
import { NeuralIntake } from "./NeuralIntake";
import { Mark, NodeField, SignalTrace, SystemDiagram } from "./Artwork";
import {
  contact,
  hero,
  heroMeta,
  method,
  neuralNav,
  notes,
  strip,
  studio,
  systems,
  work,
} from "./content";

export function NeuralSite() {
  return (
    <div className="ns-site" id="top" dir="rtl">
      <a className="ns-skip" href="#ns-main">
        رفتن به محتوای اصلی
      </a>

      <NeuralNav />

      <main id="ns-main" lang="fa" dir="rtl">
        <section className="ns-hero" aria-labelledby="ns-hero-title">
          <div className="ns-wrap ns-hero-top">
            <p>سیگنال‌یارد ۴ · لندن E2</p>
            <p className="ns-hero-status">
              <span className="ns-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="ns-wrap ns-hero-grid">
            <div className="ns-hero-copy">
              <p className="ns-eyebrow">
                <Mark className="ns-eyebrow-mark" />
                {hero.eyebrow}
              </p>

              <h1 id="ns-hero-title">
                {hero.headline}
                <br />
                <span>{hero.headlineAccent}</span>
              </h1>

              <p className="ns-hero-lede">{hero.intro}</p>

              <div className="ns-actions">
                <a className="ns-btn ns-btn--solid" href="#systems">
                  مشاهدهٔ سیستم‌ها
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="ns-btn ns-btn--line" href="#contact">
                  شروع گفت‌وگو
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>

              <dl className="ns-hero-meta">
                {heroMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="ns-demo-note">{hero.note}</p>
            </div>

            <figure className="ns-hero-figure">
              <span className="ns-figure-tag" aria-hidden="true">
                SYS / 01
              </span>
              <NodeField />
              <figcaption>
                {hero.caption.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </figcaption>
            </figure>
          </div>

          <div className="ns-wrap ns-hero-foot">
            <a className="ns-scroll-cue" href="#systems">
              خواندن سیستم‌ها
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>{hero.footNote}</p>
          </div>
        </section>

        <div className="ns-strip">
          <div className="ns-wrap">
            <ul>
              {strip.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <section
          id="systems"
          className="ns-section ns-systems"
          aria-labelledby="ns-systems-title"
        >
          <div className="ns-wrap">
            <div className="ns-section-head">
              <div>
                <p className="ns-eyebrow">{systems.label}</p>
                <h2 id="ns-systems-title">{systems.title}</h2>
              </div>
              <p className="ns-section-lede">{systems.intro}</p>
            </div>

            <div className="ns-systems-grid">
              {systems.items.map((item) => (
                <article className="ns-card" key={item.index}>
                  <div className="ns-card-top">
                    <span className="ns-card-index" aria-hidden="true">
                      {item.index}
                    </span>
                    <span className="ns-card-mark" aria-hidden="true">
                      <Mark />
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <ul className="ns-deliverables" aria-label={`${item.title} outputs`}>
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="ns-note-line">{systems.note}</p>
          </div>
        </section>

        <section
          id="work"
          className="ns-section ns-work"
          aria-labelledby="ns-work-title"
        >
          <div className="ns-wrap">
            <div className="ns-section-head">
              <div>
                <p className="ns-eyebrow">{work.label}</p>
                <h2 id="ns-work-title">{work.title}</h2>
              </div>
              <p className="ns-section-lede">{work.intro}</p>
            </div>

            <div className="ns-projects">
              {work.projects.map((project) => (
                <article className="ns-project" key={project.name}>
                  <span className="ns-project-index" aria-hidden="true">
                    {project.index}
                  </span>

                  <div className="ns-project-copy">
                    <p className="ns-project-kind">{project.kind}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul className="ns-tags" aria-label={`${project.name} disciplines`}>
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>

                  <figure className="ns-project-figure">
                    <SystemDiagram variant={project.variant} />
                    <figcaption>سیستم نمایشی · {project.index}</figcaption>
                  </figure>
                </article>
              ))}
            </div>

            <p className="ns-note-line">{work.note}</p>
          </div>
        </section>

        <section
          id="method"
          className="ns-section ns-method"
          aria-labelledby="ns-method-title"
        >
          <div className="ns-wrap">
            <div className="ns-section-head">
              <div>
                <p className="ns-eyebrow">{method.label}</p>
                <h2 id="ns-method-title">{method.title}</h2>
              </div>
              <p className="ns-section-lede">{method.intro}</p>
            </div>

            <ol className="ns-steps">
              {method.steps.map((step) => (
                <li key={step.step}>
                  <div className="ns-step-top">
                    <span className="ns-step-index" aria-hidden="true">
                      {step.step}
                    </span>
                    <span className="ns-step-node" aria-hidden="true" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <p className="ns-step-output">
                    <span>خروجی</span>
                    {step.output}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="studio"
          className="ns-section ns-studio"
          aria-labelledby="ns-studio-title"
        >
          <div className="ns-wrap ns-studio-grid">
            <div className="ns-studio-copy">
              <p className="ns-eyebrow">{studio.label}</p>
              <h2 id="ns-studio-title">{studio.title}</h2>

              <div className="ns-prose">
                {studio.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul className="ns-principles">
                {studio.principles.map((principle, index) => (
                  <li key={principle.title}>
                    <span aria-hidden="true">0{index + 1}</span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="ns-studio-card" aria-label="واقعیت‌های استودیو">
              <div className="ns-studio-card-head">
                <span>استودیو / ۰۴</span>
                <span>لندن · E2</span>
              </div>

              <dl className="ns-facts">
                {studio.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <SignalTrace />

              <blockquote className="ns-quote">
                <p>&ldquo;{studio.quote}&rdquo;</p>
                <cite>{studio.quoteNote}</cite>
              </blockquote>
            </aside>
          </div>
        </section>

        <section className="ns-section ns-notes" aria-labelledby="ns-notes-title">
          <div className="ns-wrap">
            <div className="ns-notes-head">
              <div>
                <p className="ns-eyebrow">{notes.label}</p>
                <h2 id="ns-notes-title">{notes.title}</h2>
              </div>
              <p className="ns-section-lede">{notes.intro}</p>
            </div>

            <div className="ns-notes-grid">
              {notes.items.map((note) => (
                <article className="ns-note" key={note.title}>
                  <div className="ns-note-top">
                    <span>{note.index}</span>
                    <span>{note.tag}</span>
                  </div>
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                  <span className="ns-note-rule" aria-hidden="true" />
                </article>
              ))}
            </div>

            <p className="ns-note-line">{notes.note}</p>
          </div>
        </section>

        <section
          id="contact"
          className="ns-section ns-contact"
          aria-labelledby="ns-contact-title"
        >
          <div className="ns-wrap ns-contact-grid">
            <div className="ns-contact-copy">
              <p className="ns-eyebrow">{contact.label}</p>
              <h2 id="ns-contact-title">{contact.title}</h2>
              <p className="ns-section-lede">{contact.intro}</p>

              <div className="ns-bring">
                <p className="ns-mini-label">چه چیزی همراه بیاورید</p>
                <ul>
                  {contact.bring.map((item) => (
                    <li key={item}>
                      <ArrowRight size={13} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ns-contact-lines">
                <a href={`mailto:${contact.email}`}>
                  <Mail size={15} aria-hidden="true" />
                  {contact.email}
                </a>
                <a href="tel:+442079460001">
                  <Phone size={15} aria-hidden="true" />
                  {contact.phone}
                </a>
                <div className="ns-contact-line">
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

              <p className="ns-contact-note">{contact.note}</p>
            </div>

            <NeuralIntake />
          </div>
        </section>
      </main>

      <footer className="ns-footer">
        <div className="ns-wrap">
          <div className="ns-footer-top">
            <div className="ns-footer-brand">
              <p className="ns-footer-word">
                <Mark className="ns-footer-mark" />
                Neural <span>استودیو</span>
              </p>
              <p>
                هوش مصنوعی کاربردی، ساخته‌شده حول رابط. ارزیابی، منشأ و
                یک مسیر انسانی برای ورود.
              </p>
              <a href="#top" className="ns-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="ns-footer-cols">
              <div>
                <p className="ns-footer-label">استودیو</p>
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
                <p className="ns-footer-label">کاوش</p>
                {neuralNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>

              <div>
                <p className="ns-footer-label">قالب</p>
                <Link href="/templates/neural-studio">جزئیات قالب</Link>
                <Link href="/checkout/neural-studio">خرید این قالب</Link>
                <Link href="/templates">همهٔ قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="ns-footer-bottom">
            <p>
              © ۲۰۲۶ استودیوی نیورال (خیالی). یک وب‌سایت نمایشی: استودیو، سیستم‌ها و
              جزئیات نمایشی‌اند. هیچ پروژه‌ای پذیرفته نمی‌شود و پولی گرفته نمی‌شود.
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
