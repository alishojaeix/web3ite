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
import { QuantumNav } from "./QuantumNav";
import { QuantumBrief } from "./QuantumBrief";
import { CalibrationRule, QMark, RingAssembly, SystemSchematic } from "./Artwork";
import {
  assembly,
  company,
  contact,
  hero,
  heroMeta,
  method,
  platform,
  qsNav,
  research,
} from "./content";

export function QuantumSite() {
  return (
    <div className="qs-site" id="top" dir="rtl">
      <a className="qs-skip" href="#qs-main">
        رفتن به محتوای اصلی
      </a>

      <QuantumNav />

      <main id="qs-main" lang="fa" dir="rtl">
        <section className="qs-hero" aria-labelledby="qs-hero-title">
          <div className="qs-wrap qs-hero-top">
            <p>مریکن ورکس ۱ · لندن E2</p>
            <p className="qs-status">
              <span className="qs-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="qs-wrap qs-hero-copy">
            <p className="qs-eyebrow">
              <QMark className="qs-eyebrow-mark" />
              {hero.eyebrow}
            </p>

            <h1 id="qs-hero-title">
              {hero.headline}
              <br />
              <span>{hero.headlineAccent}</span>
            </h1>

            <p className="qs-hero-lede">{hero.intro}</p>

            <div className="qs-actions">
              <a className="qs-btn qs-btn--solid" href="#platform">
                کاوش در پلتفرم
                <ArrowDown size={15} aria-hidden="true" />
              </a>
              <a className="qs-btn qs-btn--line" href="#research">
                خواندن پژوهش‌ها
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <dl className="qs-hero-meta">
              {heroMeta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>

            <p className="qs-demo-note">{hero.note}</p>
          </div>

          <figure className="qs-wrap qs-plate">
            <div className="qs-plate-frame">
              <span className="qs-plate-rev" aria-hidden="true">
                نسخهٔ C · ۲۰۲۶
              </span>
              <RingAssembly />
            </div>
            <figcaption>
              {hero.caption.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </figcaption>
          </figure>

          <div className="qs-wrap qs-hero-foot">
            <a className="qs-scroll-cue" href="#platform">
              خواندن پلتفرم
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>{hero.footNote}</p>
          </div>
        </section>

        <section id="platform" className="qs-section qs-platform" aria-labelledby="qs-platform-title">
          <div className="qs-wrap">
            <CalibrationRule />

            <div className="qs-section-head">
              <div>
                <p className="qs-eyebrow">{platform.label}</p>
                <h2 id="qs-platform-title">{platform.title}</h2>
              </div>
              <p className="qs-section-lede">{platform.intro}</p>
            </div>

            <div className="qs-platform-grid">
              <figure className="qs-schematic-frame">
                <div className="qs-schematic-head">
                  <span>شکل ۰۱ / پشتهٔ سیستم</span>
                  <span>ماژولار</span>
                </div>
                <SystemSchematic />
                <figcaption>شمای نمایشی · نه نقشهٔ سیم‌کشی</figcaption>
              </figure>

              <div className="qs-platform-list">
                {platform.items.map((item) => (
                  <article className="qs-platform-item" key={item.index}>
                    <span className="qs-item-index" aria-hidden="true">
                      {item.index}
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                      <ul className="qs-outputs" aria-label={`${item.title} outputs`}>
                        {item.outputs.map((output) => (
                          <li key={output}>{output}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="qs-limits">
              <p className="qs-mini-label">محدودیت‌های مستند</p>
              <ul>
                {platform.limits.map((limit) => (
                  <li key={limit}>
                    <span aria-hidden="true">—</span>
                    {limit}
                  </li>
                ))}
              </ul>
            </div>

            <p className="qs-note-line">{platform.note}</p>
          </div>
        </section>

        <section id="method" className="qs-section qs-method" aria-labelledby="qs-method-title">
          <div className="qs-wrap">
            <div className="qs-section-head">
              <div>
                <p className="qs-eyebrow">{method.label}</p>
                <h2 id="qs-method-title">{method.title}</h2>
              </div>
              <p className="qs-section-lede">{method.intro}</p>
            </div>

            <ol className="qs-steps">
              {method.steps.map((step) => (
                <li key={step.step}>
                  <div className="qs-step-head">
                    <span className="qs-step-index" aria-hidden="true">
                      {step.step}
                    </span>
                    <span className="qs-step-tick" aria-hidden="true" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <p className="qs-step-output">
                    <span>خروجی</span>
                    {step.output}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="assembly" className="qs-section qs-assembly" aria-labelledby="qs-assembly-title">
          <div className="qs-wrap">
            <div className="qs-section-head">
              <div>
                <p className="qs-eyebrow">{assembly.label}</p>
                <h2 id="qs-assembly-title">{assembly.title}</h2>
              </div>
              <p className="qs-section-lede">{assembly.intro}</p>
            </div>

            <div className="qs-assembly-grid">
              <div className="qs-spec-panel">
                <div className="qs-panel-head">
                  <span>مشخصات / کیفی</span>
                  <span>QS-03</span>
                </div>
                <dl className="qs-spec-dl">
                  {assembly.rows.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="qs-parts-panel">
                <p className="qs-mini-label">سه بخش</p>
                <ul className="qs-parts">
                  {assembly.parts.map((part) => (
                    <li key={part.code}>
                      <span className="qs-part-code" aria-hidden="true">
                        {part.code}
                      </span>
                      <div>
                        <h3>{part.title}</h3>
                        <p>{part.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <p className="qs-parts-quote">
                  &ldquo;{company.quote}&rdquo;
                  <cite>{company.quoteNote}</cite>
                </p>
              </div>
            </div>

            <p className="qs-note-line">{assembly.note}</p>
          </div>
        </section>

        <section id="research" className="qs-section qs-research" aria-labelledby="qs-research-title">
          <div className="qs-wrap">
            <div className="qs-section-head">
              <div>
                <p className="qs-eyebrow">{research.label}</p>
                <h2 id="qs-research-title">{research.title}</h2>
              </div>
              <p className="qs-section-lede">{research.intro}</p>
            </div>

            <div className="qs-research-list">
              {research.items.map((item) => (
                <article className="qs-research-row" key={item.index}>
                  <div className="qs-research-id">
                    <span>{item.index}</span>
                    <time dateTime={item.year}>{item.year}</time>
                  </div>
                  <div className="qs-research-copy">
                    <h3>{item.title}</h3>
                    <p>{item.abstract}</p>
                  </div>
                  <ul className="qs-tags" aria-label={`${item.title} topics`}>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <ArrowUpRight className="qs-research-arrow" size={18} aria-hidden="true" />
                </article>
              ))}
            </div>

            <p className="qs-note-line">{research.note}</p>

            <div className="qs-cta-band">
              <div>
                <p className="qs-cta-title">روش را بخوانید</p>
                <p className="qs-cta-body">
                  یادداشت‌های فنی، تلورانس‌ها و جزئیات استقرار.
                </p>
              </div>
              <a className="qs-btn qs-btn--line" href="#contact">
                درخواست بریف فنی
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="company" className="qs-section qs-company" aria-labelledby="qs-company-title">
          <div className="qs-wrap qs-company-grid">
            <div className="qs-company-copy">
              <p className="qs-eyebrow">{company.label}</p>
              <h2 id="qs-company-title">{company.title}</h2>

              <div className="qs-prose">
                {company.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul className="qs-principles">
                {company.principles.map((principle, index) => (
                  <li key={principle.title}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="qs-record" aria-label="پروندهٔ شرکت">
              <div className="qs-record-head">
                <span>پرونده / ۰۵</span>
                <QMark className="qs-record-mark" />
              </div>

              <dl className="qs-facts">
                {company.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="qs-record-sign" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <p className="qs-record-note">
                پرونده‌ای از روش کاری، نه یک گواهی. متن نمونهٔ شرکت برای
                نمایش این قالب.
              </p>
            </aside>
          </div>
        </section>

        <section id="contact" className="qs-section qs-contact" aria-labelledby="qs-contact-title">
          <div className="qs-wrap qs-contact-grid">
            <div className="qs-contact-copy">
              <p className="qs-eyebrow">{contact.label}</p>
              <h2 id="qs-contact-title">{contact.title}</h2>
              <p className="qs-section-lede">{contact.intro}</p>

              <div className="qs-bring">
                <p className="qs-mini-label">چه چیزی همراه بیاورید</p>
                <ul>
                  {contact.bring.map((item) => (
                    <li key={item}>
                      <ArrowRight size={13} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="qs-contact-lines">
                <a href={`mailto:${contact.email}`}>
                  <Mail size={15} aria-hidden="true" />
                  {contact.email}
                </a>
                <a href="tel:+442079460002">
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

              <p className="qs-contact-note">{contact.note}</p>
            </div>

            <QuantumBrief />
          </div>
        </section>
      </main>

      <footer className="qs-footer">
        <div className="qs-wrap">
          <div className="qs-footer-top">
            <div className="qs-footer-brand">
              <p className="qs-footer-word">
                <QMark className="qs-footer-mark" />
                Quantum <span>سیستم‌ها</span>
              </p>
              <p>
                پردازش دقیق، ارائه‌شده به‌صورت بخش‌های قابل مشاهده. روش‌های
                مستند، محدودیت‌های منتشرشده، بدون افسانه.
              </p>
              <a href="#top" className="qs-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="qs-footer-cols">
              <div>
                <p className="qs-footer-label">شرکت</p>
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
                <p className="qs-footer-label">کاوش</p>
                {qsNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact">بریف فنی</a>
              </div>

              <div>
                <p className="qs-footer-label">قالب</p>
                <Link href="/templates/quantum-systems">جزئیات قالب</Link>
                <Link href="/checkout/quantum-systems">خرید این قالب</Link>
                <Link href="/templates">همهٔ قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="qs-footer-bottom">
            <p>
              © ۲۰۲۶ کوانتوم سیستمز (خیالی). یک وب‌سایت نمایشی: شرکت، پلتفرم و
              فهرست پژوهش‌ها نمایشی‌اند. هیچ محصولی فروخته نمی‌شود و هیچ گواهی
              ادعا نمی‌شود.
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
