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
import { VaultNav } from "./VaultNav";
import { VaultDisclosure } from "./VaultDisclosure";
import { MaterialSwatch, SeamRule, VaultMark, VaultStack } from "./Artwork";
import {
  assurance,
  disclosure,
  hero,
  heroMeta,
  materials,
  platform,
  showcase,
  strip,
  vaultNav,
} from "./content";

export function VaultSite() {
  return (
    <div className="vl-site" id="top" dir="rtl">
      <a className="vl-skip" href="#vl-main">
        رفتن به محتوای اصلی
      </a>

      <VaultNav />

      <main id="vl-main" lang="fa" dir="rtl">
        <section className="vl-hero" aria-labelledby="vl-hero-title">
          <div className="vl-wrap vl-hero-top">
            <p>باستیون کورت ۷ · لندن E2</p>
            <p className="vl-status">
              <span className="vl-status-dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="vl-wrap vl-hero-grid">
            <div className="vl-hero-copy">
              <p className="vl-eyebrow">
                <VaultMark className="vl-eyebrow-mark" />
                {hero.eyebrow}
              </p>

              <h1 id="vl-hero-title">
                {hero.headline}
                <br />
                <span>{hero.headlineAccent}</span>
              </h1>

              <p className="vl-hero-lede">{hero.intro}</p>

              <div className="vl-actions">
                <a className="vl-btn vl-btn--solid" href="#showcase">
                  خواندن کنترل‌ها
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="vl-btn vl-btn--line" href="#contact">
                  گشودن افشاگری
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>

              <dl className="vl-hero-meta">
                {heroMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="vl-demo-note">{hero.note}</p>
            </div>

            <figure className="vl-hero-figure">
              <div className="vl-hero-plate">
                <div className="vl-plate-head">
                  <span>نقشه / ۰۱ — حضانت</span>
                  <span>بازبینی C · ۲۰۲۶</span>
                </div>
                <VaultStack />
              </div>
              <figcaption>
                {hero.caption.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </figcaption>
            </figure>
          </div>

          <div className="vl-wrap vl-hero-foot">
            <a className="vl-scroll-cue" href="#showcase">
              خواندن کنترل‌ها
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>{hero.footNote}</p>
          </div>
        </section>

        <div className="vl-strip">
          <div className="vl-wrap">
            <ul>
              {strip.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <section
          id="showcase"
          className="vl-section vl-vault"
          aria-labelledby="vl-vault-title"
        >
          <div className="vl-wrap">
            <SeamRule />
            <div className="vl-section-head">
              <div>
                <p className="vl-eyebrow">{showcase.label}</p>
                <h2 id="vl-vault-title">{showcase.title}</h2>
              </div>
              <p className="vl-section-lede">{showcase.intro}</p>
            </div>

            <div className="vl-features">
              {showcase.features.map((feature) => (
                <article className="vl-feature" key={feature.index}>
                  <div className="vl-feature-top">
                    <span className="vl-feature-index" aria-hidden="true">
                      {feature.index}
                    </span>
                    <VaultMark className="vl-feature-mark" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                  <p className="vl-feature-detail">{feature.detail}</p>
                </article>
              ))}
            </div>

            <div className="vl-quote-band">
              <p className="vl-quote">&ldquo;{showcase.quote.text}&rdquo;</p>
              <p className="vl-quote-note">{showcase.quote.note}</p>
            </div>

            <p className="vl-note-line">{showcase.note}</p>
          </div>
        </section>

        <section
          id="story"
          className="vl-section vl-assurance"
          aria-labelledby="vl-assurance-title"
        >
          <div className="vl-wrap vl-assurance-grid">
            <div className="vl-assurance-copy">
              <p className="vl-eyebrow">{assurance.label}</p>
              <h2 id="vl-assurance-title">{assurance.title}</h2>
              <p className="vl-section-lede">{assurance.intro}</p>

              <ol className="vl-principles">
                {assurance.principles.map((principle, index) => (
                  <li key={principle.title}>
                    <span className="vl-principle-step" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{principle.title}</h3>
                      <p>{principle.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="vl-note-line">{assurance.note}</p>
            </div>

            <aside className="vl-record" aria-label="پروندهٔ حسابرسی نمایشی">
              <div className="vl-record-head">
                <div>
                  <p className="vl-record-label">{assurance.record.label}</p>
                  <p className="vl-record-meta">حسابرسی / گزیده · سال مالی ۲۰۲۶</p>
                </div>
                <span className="vl-record-stamp">نمونه</span>
              </div>

              <ol className="vl-record-list">
                {assurance.record.events.map((event, index) => (
                  <li key={`${event.date}-${event.title}`}>
                    <div className="vl-record-item-head">
                      <span className="vl-record-date">{event.date}</span>
                      <span className="vl-record-tag">{event.tag}</span>
                    </div>
                    <h3>
                      <span aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {event.title}
                    </h3>
                    <p>{event.body}</p>
                  </li>
                ))}
              </ol>

              <p className="vl-record-note">{assurance.record.note}</p>
            </aside>
          </div>
        </section>

        <section
          id="specs"
          className="vl-section vl-platform"
          aria-labelledby="vl-platform-title"
        >
          <div className="vl-wrap">
            <div className="vl-section-head">
              <div>
                <p className="vl-eyebrow">{platform.label}</p>
                <h2 id="vl-platform-title">{platform.title}</h2>
              </div>
              <p className="vl-section-lede">{platform.intro}</p>
            </div>

            <div className="vl-spec-panel">
              <div className="vl-panel-head">
                <span>پلتفرم / خلاصه</span>
                <span aria-hidden="true">والت / ۰۱</span>
              </div>
              <dl className="vl-spec-grid">
                {platform.rows.map((row) => (
                  <div key={row.label}>
                    <dt>
                      <span>{row.label}</span>
                      <span className="vl-spec-note">{row.note}</span>
                    </dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="vl-notclaimed">
              <p className="vl-mini-label">
                <ShieldCheck size={13} aria-hidden="true" />
                این صفحه چه چیزی را ادعا نمی‌کند
              </p>
              <ul>
                {platform.notClaimed.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">×</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="vl-notclaimed-note">{platform.notClaimedNote}</p>
            </div>

            <p className="vl-note-line">{platform.note}</p>
          </div>
        </section>

        <section
          id="materials"
          className="vl-section vl-materials"
          aria-labelledby="vl-materials-title"
        >
          <div className="vl-wrap">
            <div className="vl-section-head">
              <div>
                <p className="vl-eyebrow">{materials.label}</p>
                <h2 id="vl-materials-title">{materials.title}</h2>
              </div>
              <p className="vl-section-lede">{materials.intro}</p>
            </div>

            <div className="vl-material-grid">
              {materials.items.map((item) => (
                <article className="vl-material" key={item.name}>
                  <div className="vl-swatch-frame">
                    <MaterialSwatch variant={item.swatch} />
                    <span className="vl-swatch-tag" aria-hidden="true">
                      {item.note}
                    </span>
                  </div>
                  <div className="vl-material-copy">
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="vl-note-line">{materials.note}</p>
          </div>
        </section>

        <section
          id="contact"
          className="vl-section vl-disclosure"
          aria-labelledby="vl-disclosure-title"
        >
          <div className="vl-wrap vl-disclosure-grid">
            <div className="vl-disclosure-copy">
              <p className="vl-eyebrow">{disclosure.label}</p>
              <h2 id="vl-disclosure-title">{disclosure.title}</h2>
              <p className="vl-section-lede">{disclosure.intro}</p>

              <dl className="vl-disclosure-facts">
                {disclosure.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="vl-bring">
                <p className="vl-mini-label">همراه با درخواست</p>
                <ul>
                  {disclosure.bring.map((item) => (
                    <li key={item}>
                      <ArrowRight size={13} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="vl-quote-block">
                <p>&ldquo;{disclosure.quote}&rdquo;</p>
                <cite>{disclosure.quoteNote}</cite>
              </blockquote>

              <div className="vl-contact-lines">
                <a href={`mailto:${disclosure.email}`}>
                  <Mail size={15} aria-hidden="true" />
                  {disclosure.email}
                </a>
                <a href="tel:+442079460004">
                  <Phone size={15} aria-hidden="true" />
                  {disclosure.phone}
                </a>
                <div>
                  <MapPin size={15} aria-hidden="true" />
                  <address>
                    {disclosure.address.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </div>
                <p>
                  <Clock size={15} aria-hidden="true" />
                  {disclosure.hours}
                </p>
              </div>

              <p className="vl-contact-note">{disclosure.note}</p>
            </div>

            <VaultDisclosure />
          </div>
        </section>
      </main>

      <footer className="vl-footer">
        <div className="vl-wrap">
          <div className="vl-footer-top">
            <div className="vl-footer-brand">
              <p className="vl-footer-word">
                <VaultMark className="vl-footer-mark" />
                Vaultline <span>حضانت</span>
              </p>
              <p>
                یک پلتفرم حضانت که کارش را نشان می‌دهد: مالکان نام‌برده،
                کنترل‌های مستند و پروندهٔ حسابرسی خوانا.
              </p>
              <a href="#top" className="vl-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="vl-footer-cols">
              <div>
                <p className="vl-footer-label">دفتر</p>
                <address>
                  {disclosure.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <a href={`mailto:${disclosure.email}`}>
                  <Mail size={13} aria-hidden="true" />
                  {disclosure.email}
                </a>
              </div>

              <div>
                <p className="vl-footer-label">کاوش</p>
                {vaultNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
                <a href="#materials">جزئیات</a>
              </div>

              <div>
                <p className="vl-footer-label">قالب</p>
                <Link href="/templates/vaultline">جزئیات قالب</Link>
                <Link href="/checkout/vaultline">خرید این قالب</Link>
                <Link href="/templates">همهٔ قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="vl-footer-bottom">
            <p>
              © ۲۰۲۶ Vaultline (خیالی). یک وب‌سایت نمایشی: شرکت، پلتفرم و پروندهٔ
              حسابرسی نمایشی‌اند. هیچ گواهی، نظر حسابرسی یا تضمین امنیتی
              ارائه نمی‌شود.
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
