import Link from "next/link";
import { ArrowDown, ArrowUp, ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";
import { ObsidianNav } from "./ObsidianNav";
import { RoastIndex } from "./RoastIndex";
import { SubscriptionBuilder } from "./SubscriptionBuilder";
import { Obsidian3D } from "./Obsidian3D";
import {
  CanisterArt,
  CanisterDrawing,
  RoastCurve,
  SealMark,
  YardPlan,
} from "./Artwork";
import {
  heroMeta,
  object,
  obsidianNav,
  roastery,
  subscription,
  ticker,
  visit,
} from "./content";

export function ObsidianSite() {
  return (
    <div className="ob-site" id="top" dir="rtl">
      <a className="ob-skip" href="#ob-main">
        رفتن به محتوای اصلی
      </a>

      <ObsidianNav />

      <main id="ob-main" lang="fa" dir="rtl">
        <section className="ob-hero" aria-labelledby="ob-hero-title">
          <div className="ob-wrap ob-hero-top">
            <p>قهوهٔ خُرد‌دست / لندن E9</p>
            <p>یک روز بو دادن · پنجشنبه</p>
          </div>

          <div className="ob-wrap ob-hero-grid">
            <div className="ob-hero-copy">
              <p className="ob-kicker">
                <span aria-hidden="true" />
                رُستری ابسیدین / تأسیس ۲۰۲۱
              </p>
              <h1 id="ob-hero-title">
                بوداده‌شده در{" "}
                <br />
                <em>تاریکی</em>
              </h1>
              <p className="ob-lede">
                سه قهوه، یک روز بو دادن و قوطی‌ای که همهٔ آنچه باید بدانید را
                می‌گوید. قهوهٔ خُرد‌دست از یک کارخانهٔ آجرپزی سابق در شرق لندن.
              </p>
              <div className="ob-actions">
                <a className="ob-btn ob-btn--brass" href="#roasts">
                  دیدن بو داده‌ها
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="ob-btn ob-btn--ghost" href="#roastery">
                  درون رُستری
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>

              <dl className="ob-hero-meta">
                {heroMeta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="ob-demo-note">
                طرح نمایشی وب‌سایت · رُستری، قهوه‌ها و تصویرها خیالی‌اند
              </p>
            </div>

            <div className="ob-hero-visual">
              <div className="ob-hero-art">
                <CanisterArt prefix="ob-hero-visual" />
              </div>
              <aside className="ob-hero-tag" aria-label="قهوهٔ در حال بو دادن">
                <p className="ob-mini-label">در حال بو دادن</p>
                <p className="ob-hero-tag-name">شمارهٔ ۰۱ / کنیا AA</p>
                <p className="ob-hero-tag-notes">انگورفرنگی سیاه · شکر نیشکر · تمیز</p>
                <p className="ob-hero-tag-lot">دستهٔ ۰۴ · بوداده در پنجشنبه</p>
              </aside>
              <p className="ob-hero-side">خُرد‌دست / درام ۱۲ کیلو</p>
            </div>
          </div>

          <div className="ob-wrap ob-hero-foot">
            <a href="#roasts" className="ob-scroll-cue">
              رفتن به قفسه
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>استراحت ۷ تا ۱۴ روز · تاریخ بو دادن روی قوطی</p>
          </div>
        </section>

        <div className="ob-ticker" aria-hidden="true">
          <div className="ob-ticker-track">
            {[...ticker, ...ticker, ...ticker].map((phrase, index) => (
              <span key={`${phrase}-${index}`}>
                {phrase}
                <i>/</i>
              </span>
            ))}
          </div>
        </div>

        <section id="roasts" className="ob-section ob-roasts" aria-labelledby="ob-roasts-title">
          <div className="ob-wrap">
            <div className="ob-section-head ob-section-head--split">
              <div>
                <p className="ob-eyebrow">۰۱ / قفسه</p>
                <h2 id="ob-roasts-title">
                  سه قهوه،
                  <br />
                  <em>یک روز بو دادن</em>
                </h2>
              </div>
              <p className="ob-intro">
                کل کاتالوگ سه دسته است. هر کدام سبز خریداری می‌شود، پنجشنبه
                بوداده و پیش از رسیدن به قفسه استراحت می‌کند. یکی را انتخاب کنید تا
                برگهٔ دسته را بخوانید.
              </p>
            </div>
            <RoastIndex />
          </div>
        </section>

        <section id="object" className="ob-section ob-object" aria-labelledby="ob-object-title">
          <div className="ob-wrap">
            <div className="ob-section-head ob-section-head--split">
              <div>
                <p className="ob-eyebrow">۰۲ / این شیء</p>
                <h2 id="ob-object-title">
                  قوطی‌ای
                  <br />
                  <em>که ارزش نگه‌داشتن دارد</em>
                </h2>
              </div>
              <p className="ob-intro">{object.intro}</p>
            </div>

            <div className="ob-object-grid">
              <Obsidian3D />

              <div className="ob-object-copy">
                <div className="ob-seal-row">
                  <SealMark number="01" />
                  <div>
                    <p className="ob-mini-label">مهر برنجی</p>
                    <p className="ob-seal-copy">
                      ماشین‌کاری در شفیلد. یک خط به‌صورت فرورفته، بدون چاپ.
                    </p>
                  </div>
                </div>

                <dl className="ob-object-specs">
                  {object.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>

                <ol className="ob-object-notes">
                  {object.notes.map((note, index) => (
                    <li key={note}>
                      <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <p>{note}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <figure className="ob-drawing-card">
              <CanisterDrawing />
              <figcaption>
                <span>قوطی ۰۱ / ۲۵۰ گرم</span>
                <span>فولاد مات · برنج · کاغذ چاپی</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          id="roastery"
          className="ob-section ob-roastery"
          aria-labelledby="ob-roastery-title"
        >
          <div className="ob-wrap">
            <div className="ob-roastery-top">
              <div>
                <p className="ob-eyebrow">۰۳ / رُستری</p>
                <h2 id="ob-roastery-title">
                  بقیهٔ هفته از آنِ{" "}
                  <em>قهوه است</em>
                </h2>
                <p className="ob-roastery-quote">
                  «کمتر بو بده. تاریخ را روی همه‌چیز بگذار. بگذار قهوه جمله را
                  تمام کند.»
                </p>
              </div>
              <div className="ob-prose">
                {roastery.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="ob-roastery-grid">
              <figure className="ob-curve-card">
                <div className="ob-curve-head">
                  <p className="ob-mini-label">پروفایل / شمارهٔ ۰۱</p>
                  <p>۱۲ کیلوگرم · ۱۲ دقیقه</p>
                </div>
                <RoastCurve />
                <figcaption>
                  پروفایل نمایشی بو دادن. هر دسته ثبت و پیش از خروج از رُستری
                  چشیده می‌شود.
                </figcaption>
              </figure>

              <dl className="ob-facts">
                {roastery.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ol className="ob-process" aria-label="از مبدأ تا ارسال">
              {roastery.process.map((step) => (
                <li key={step.number}>
                  <span aria-hidden="true">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="subscribe"
          className="ob-section ob-subscribe"
          aria-labelledby="ob-subscribe-title"
        >
          <div className="ob-wrap">
            <div className="ob-subscribe-head">
              <div>
                <p className="ob-eyebrow">۰۴ / فهرست بو داده</p>
                <h2 id="ob-subscribe-title">
                  پیشخوان را
                  <br />
                  <em>پر نگه دارید</em>
                </h2>
              </div>
              <p className="ob-intro">{subscription.intro}</p>
            </div>
            <SubscriptionBuilder />
          </div>
        </section>

        <section id="visit" className="ob-section ob-visit" aria-labelledby="ob-visit-title">
          <div className="ob-wrap">
            <div className="ob-visit-grid">
              <div className="ob-visit-copy">
                <p className="ob-eyebrow">۰۵ / بازدید</p>
                <h2 id="ob-visit-title">
                  بیایید و بچشید
                  <br />
                  <em>قهوهٔ هفته را</em>
                </h2>
                <p className="ob-intro">
                  رُستری سه روز در هفته باز است. یک پیشخوان چشایی کوچک، فیلتر
                  روز روی دَم و معمولاً یک یا دو کیسه روی قفسه استراحت می‌کنند.
                </p>

                <div className="ob-visit-details">
                  <div>
                    <h3>
                      <MapPin size={16} aria-hidden="true" />
                      حیاط را پیدا کنید
                    </h3>
                    <address>
                      {visit.address.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </address>
                    <p>{visit.transport}</p>
                  </div>
                  <div>
                    <h3>
                      <Clock size={16} aria-hidden="true" />
                      ساعات بازدید
                    </h3>
                    <dl>
                      {visit.hours.map((row) => (
                        <div key={row.day}>
                          <dt>{row.day}</dt>
                          <dd>{row.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <p className="ob-visit-note">{visit.note}</p>
                <a className="ob-text-link" href={`mailto:${visit.email}`}>
                  {visit.email}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>

              <div className="ob-visit-side">
                <figure className="ob-yard">
                  <YardPlan />
                  <figcaption>
                    <span>کیلن‌یارد ۸ / محلهٔ E9</span>
                    <span>طرح نمایشی · بدون مقیاس</span>
                  </figcaption>
                </figure>
                <div className="ob-visit-card">
                  <p className="ob-mini-label">پنجشنبه، ۰۹:۰۰</p>
                  <p className="ob-visit-card-title">فیلتر این هفته دم است</p>
                  <p>
                    برای نخستین فنجان پس از بو دادن زود بیایید. یک دستگاه دم‌آوری
                    خانگی بیاورید تا درجهٔ آسیاب را تنظیم کنیم.
                  </p>
                  <a href={`mailto:${visit.email}`} className="ob-text-link">
                    <Mail size={14} aria-hidden="true" />
                    ایمیل رُستری
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="ob-footer">
        <div className="ob-wrap">
          <div className="ob-footer-top">
            <div className="ob-footer-brand">
              <p className="ob-footer-word">OBSIDIAN</p>
              <p>بوداده در تاریکی. لندن E9.</p>
              <a href="#top" className="ob-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="ob-footer-cols">
              <div>
                <p className="ob-footer-label">بازدید</p>
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
                <p className="ob-footer-label">کاوش</p>
                {obsidianNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
              <div>
                <p className="ob-footer-label">قالب</p>
                <Link href="/templates/obsidian-roastery">جزئیات قالب</Link>
                <Link href="/checkout/obsidian-roastery">خرید این قالب</Link>
                <Link href="/templates">همهٔ قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="ob-footer-bottom">
            <p>
              © ۲۰۲۶ رُستری ابسیدین (خیالی). یک وب‌سایت نمایشی: رُستری،
              قهوه‌ها، قیمت‌ها و تصویرها نمایشی‌اند. هیچ سفارش یا اشتراکی
              پذیرفته نمی‌شود.
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
