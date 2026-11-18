import Link from "next/link";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Plus,
} from "lucide-react";
import { AtelierNav } from "./AtelierNav";
import { BrewGuide } from "./BrewGuide";
import { CoffeeList } from "./CoffeeList";
import { InquiryForm } from "./InquiryForm";
import { CounterArt, MapArt, PourOverArt, ShelfArt, WindowArt } from "./Artwork";
import {
  atelierNav,
  heroLot,
  heroMeta,
  hours,
  journalEntries,
  roomScenes,
  story,
  ticker,
  visit,
} from "./content";

function RoomArt({ id }: { id: (typeof roomScenes)[number]["id"] }) {
  if (id === "counter") return <CounterArt />;
  if (id === "window") return <WindowArt />;
  return <ShelfArt />;
}

export function AtelierSite() {
  return (
    <div className="at-site" id="top" dir="rtl">
      <a className="at-skip" href="#at-main">
        رفتن به محتوا
      </a>

      <AtelierNav />

      <main id="at-main" lang="fa" dir="rtl">
        <section className="at-hero" aria-labelledby="at-hero-title">
          <div className="at-wrap at-hero-grid">
            <div className="at-hero-copy">
              <p className="at-kicker">
                <span className="at-kicker-dot" aria-hidden="true" />
                  آتلیه کافی / کافهٔ دمی — لندن
              </p>
              <h1 id="at-hero-title" className="at-display">
                قهوه‌ای آرام‌تر{" "}
                <br />
                <em>از</em> قهوه
              </h1>
              <p className="at-lede">
                پیشخوانی دوازده‌نفره برای قهوهٔ دمی، صبح‌های آرام و گفت‌وگویی که
                از فنجان قهوه طولانی‌تر می‌شود.
              </p>
              <div className="at-actions">
                <a className="at-btn at-btn--solid" href="#coffee">
                  کاوش در قهوه‌ها
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
                <a className="at-btn at-btn--quiet" href="#visit">
                  بازدید از آتلیه
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <ul className="at-hero-meta">
                {heroMeta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="at-demo-note">
                طرح مفهومی وب‌سایت · مکان، منو و تصاویر همگی خیالی‌اند
              </p>
            </div>

            <div className="at-hero-visual">
              <div className="at-arch">
                <PourOverArt />
              </div>
              <aside className="at-lot-card" aria-label="قهوهٔ روی بار این هفته">
                <p className="at-mini-label">{heroLot.label}</p>
                <p className="at-lot-name">{heroLot.name}</p>
                <p className="at-lot-origin">{heroLot.origin}</p>
                <p className="at-lot-notes">{heroLot.notes}</p>
                <ul className="at-lot-facts">
                  {heroLot.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </aside>
              <p className="at-art-caption">تصویرسازی · فضا مفهومی است</p>
            </div>
          </div>

          <div className="at-wrap at-hero-foot">
            <a href="#story" className="at-scroll-cue">
              پیمایش — پیشخوان
              <ArrowDown size={14} aria-hidden="true" />
            </a>
            <p>پذیرش صندلی‌های پیشخوان بدون رزرو · سه‌شنبه تا یکشنبه</p>
          </div>
        </section>

        <div className="at-ticker" aria-hidden="true">
          <div className="at-ticker-track">
            {[...ticker, ...ticker, ...ticker].map((phrase, index) => (
              <span key={`${phrase}-${index}`}>
                {phrase}
                <i>·</i>
              </span>
            ))}
          </div>
        </div>

        <section id="story" className="at-section at-story" aria-labelledby="at-story-title">
          <div className="at-wrap at-section-grid">
            <div className="at-section-label">
              <p className="at-eyebrow">{story.label}</p>
              <p className="at-side-note">روایتی از پیشخوان</p>
            </div>
            <div>
              <h2 id="at-story-title" className="at-display at-h2">
                {story.title}
              </h2>
              <div className="at-story-grid">
                <div className="at-prose">
                  {story.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <blockquote>
                    <p>“{story.quote}”</p>
                    <cite>{story.quoteBy}</cite>
                  </blockquote>
                </div>
                <div className="at-story-details">
                  {story.details.map((detail) => (
                    <article key={detail.index}>
                      <span aria-hidden="true">{detail.index}</span>
                      <h3>{detail.title}</h3>
                      <p>{detail.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="coffee" className="at-section at-coffee" aria-labelledby="at-coffee-title">
          <div className="at-wrap">
            <div className="at-section-head">
              <p className="at-eyebrow">۰۲ / فهرست</p>
              <h2 id="at-coffee-title" className="at-display at-h2">
                فهرست با تقویم برشته‌کاری تغییر می‌کند، نه با فصل
              </h2>
              <p className="at-intro">
                سه قهوهٔ دمی، دو گزینهٔ اسپرسو و منویی کوچک برای پیشخوان. همه‌چیز
                پس از سفارش دم می‌شود و چیزی گرم نگه داشته نمی‌شود.
              </p>
            </div>

            <div className="at-coffee-grid">
              <CoffeeList />

              <aside className="at-lot-panel" aria-labelledby="at-lot-title">
                <p className="at-mini-label">قهوهٔ باز این هفته</p>
                <h3 id="at-lot-title">کنیا AA</h3>
                <p className="at-lot-panel-origin">نیِری، کنیا</p>
                <dl>
                  <div>
                    <dt>تولیدکننده</dt>
                    <dd>کارخانهٔ گیچاتینی</dd>
                  </div>
                  <div>
                    <dt>ارتفاع</dt>
                    <dd>۱٬۷۵۰ متر</dd>
                  </div>
                  <div>
                    <dt>فرآوری</dt>
                    <dd>شسته</dd>
                  </div>
                  <div>
                    <dt>گونه</dt>
                    <dd>SL28، SL34</dd>
                  </div>
                  <div>
                    <dt>برشت</dt>
                    <dd>متوسط-روشن</dd>
                  </div>
                </dl>
                <p className="at-lot-panel-notes">
                  با نت انگورفرنگی سیاه و شکر نیشکر و پایانی تمیز و چای‌مانند. آن را
                  به‌صورت دمی آماده می‌کنیم و بستهٔ دیگری برای مصرف خانگی پشت
                  پیشخوان نگه می‌داریم.
                </p>
                <p className="at-lot-panel-price">
                  دانه برای خانه <span>۲۵۰ گرم · ۱۴ پوند</span>
                </p>
                <a href="#visit" className="at-text-link">
                  از پیشخوان بپرسید
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section id="brew" className="at-section at-brew-section" aria-labelledby="at-brew-title">
          <div className="at-wrap">
            <div className="at-section-head at-section-head--split">
              <div>
                <p className="at-eyebrow">۰۳ / دستور دم‌آوری</p>
                <h2 id="at-brew-title" className="at-display at-h2">
                  دستوری برای دم‌آوری در خانه
                </h2>
              </div>
              <p className="at-intro">
                همان نقطهٔ شروعی که روی بسته می‌نویسیم. دم‌افزار را انتخاب کنید،
                زمان‌سنج را تنظیم کنید و هر بار یک متغیر را تغییر دهید.
              </p>
            </div>
            <BrewGuide />
          </div>
        </section>

        <section id="room" className="at-section at-room" aria-labelledby="at-room-title">
          <div className="at-wrap">
            <div className="at-section-head at-section-head--split">
              <div>
                <p className="at-eyebrow">۰۴ / فضا</p>
                <h2 id="at-room-title" className="at-display at-h2">
                  دیوارهای کرم، بلوط روشن، نیمکتی بلند
                </h2>
              </div>
              <p className="at-intro">
                این فضا چهل سال کارگاه چاپ بود. نور، نیمکت و آرشیو کاری را حفظ کردیم
                و پیشخوان قهوه را افزودیم.
              </p>
            </div>

            <div className="at-room-grid">
              {roomScenes.map((scene, index) => (
                <figure key={scene.id} className="at-room-card">
                  <div className="at-room-art">
                    <RoomArt id={scene.id} />
                  </div>
                  <figcaption>
                    <div className="at-room-title">
                      <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <h3>{scene.title}</h3>
                    </div>
                    <p>{scene.caption}</p>
                    <p className="at-room-detail">{scene.detail}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="at-figure-note">
              تصویرسازی است، نه عکس. آتلیه کافی مکانی خیالی است که برای این قالب
              ساخته شده است.
            </p>
          </div>
        </section>

        <section id="journal" className="at-section at-journal" aria-labelledby="at-journal-title">
          <div className="at-wrap at-journal-grid">
            <div className="at-journal-head">
              <p className="at-eyebrow">۰۵ / یادداشت‌ها</p>
              <h2 id="at-journal-title" className="at-display at-h2">
                یادداشت‌هایی از پیشخوان
              </h2>
              <p className="at-intro">
                نوشته‌هایی گاه‌به‌گاه دربارهٔ دم‌آوری، خرید و توجه‌کردن. برای خواندن
                یادداشت، آن را باز کنید.
              </p>
            </div>

            <div className="at-journal-list">
              {journalEntries.map((entry) => (
                <details key={entry.title} className="at-entry">
                  <summary>
                    <span className="at-entry-copy">
                      <span className="at-entry-date">
                        {entry.date} · {entry.readingTime}
                      </span>
                      <span className="at-entry-title">{entry.title}</span>
                      <span className="at-entry-excerpt">{entry.excerpt}</span>
                    </span>
                    <span className="at-entry-marker" aria-hidden="true">
                      <Plus size={18} />
                    </span>
                  </summary>
                  <div className="at-entry-body">
                    {entry.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="at-section at-visit" aria-labelledby="at-visit-title">
          <div className="at-wrap">
            <div className="at-visit-grid">
              <div className="at-visit-copy">
              <p className="at-eyebrow">۰۶ / بازدید</p>
                <h2 id="at-visit-title" className="at-display at-h2">
                  بیایید پشت پیشخوان بنشینید
                </h2>
                <p className="at-intro">
                  برای نشستن پشت پیشخوان نه صف لازم است، نه اپلیکیشن و نه رزرو. پرسشی
                  دربارهٔ قهوه بیاورید؛ برایش وقت می‌گذاریم.
                </p>

                <div className="at-visit-details">
                  <div>
                    <h3>
                      <MapPin size={16} aria-hidden="true" />
                      نشانی آتلیه
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
                      ساعت کاری
                    </h3>
                    <dl>
                      {hours.map((row) => (
                        <div key={row.day}>
                          <dt>{row.day}</dt>
                          <dd>{row.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <p className="at-visit-note">{visit.note}</p>
                <a className="at-text-link" href={`mailto:${visit.email}`}>
                  {visit.email}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>

              <div className="at-visit-side">
                <div className="at-map">
                  <MapArt />
                  <p>نقشهٔ تصویری · بدون مقیاس</p>
                </div>

                <div className="at-form-card">
                  <p className="at-mini-label">درخواست جلسهٔ چشیدن قهوه</p>
                  <h3>زمان و تعداد نفرات را بنویسید</h3>
                  <p className="at-form-intro">
                    جلسهٔ چشیدن برای چهار تا شش نفر، معمولاً صبح یکی از روزهای کاری.
                    ظرف دو روز پاسخ می‌دهیم.
                  </p>
                  <InquiryForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="at-footer">
        <div className="at-wrap">
          <div className="at-footer-top">
            <div className="at-footer-brand">
              <p className="at-footer-word">
                Atelier <em>قهوه</em>
              </p>
              <p>قهوه‌ای آرام‌تر.</p>
              <a href="#top" className="at-footer-back">
                بازگشت به بالا
                <ArrowUp size={14} aria-hidden="true" />
              </a>
            </div>

            <div className="at-footer-cols">
              <div>
                <p className="at-footer-label">بازدید</p>
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
                <p className="at-footer-label">کاوش</p>
                {atelierNav.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
              <div>
                <p className="at-footer-label">قالب</p>
                <Link href="/templates/atelier-coffee">جزئیات قالب</Link>
                <Link href="/checkout/atelier-coffee">خرید این قالب</Link>
                <Link href="/templates">همهٔ قالب‌ها</Link>
              </div>
            </div>
          </div>

          <div className="at-footer-bottom">
            <p>
              © ۲۰۲۶ آتلیه کافی (خیالی). وب‌سایتی نمایشی: مکان، منو، ساعت‌ها و تصاویر
              همگی برای نمونه هستند. سفارش یا رزروی ثبت نمی‌شود.
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
