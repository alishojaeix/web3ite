"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Clock, Mail, Phone } from "lucide-react";
import { booking, visit } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function EmberBooking() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [minDate, setMinDate] = useState<string>();

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow.toISOString().slice(0, 10));
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const date = String(data.get("date") ?? "");
    const party = String(data.get("party") ?? "2");
    const preference = String(data.get("preference") ?? "either");
    const notes = String(data.get("notes") ?? "").trim();

    if (!date) {
      setStatus("error");
      setMessage("لطفاً تاریخ دلخواه را انتخاب کنید.");
      return;
    }

    const partyLabel =
      booking.partySizes.find((option) => option.value === party)?.label ?? `${party} مهمان`;
    const preferenceLabel =
      booking.preferences.find((option) => option.value === preference)?.label ??
      "هر دو مناسب است";
    const dateLabel = new Date(`${date}T12:00:00`).toLocaleDateString("fa-IR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/site-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "ember-kitchen",
          name,
          email,
          message: `درخواست کانتر — ${partyLabel}، ${dateLabel}. صندلی: ${preferenceLabel}. یادداشت: ${
            notes || "یادداشتی ثبت نشده"
          }.`,
          ageConfirmed: false,
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error ?? "ثبت درخواست ممکن نشد. لطفاً دوباره تلاش کنید.");
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(booking.confirmation);
    } catch {
      setStatus("error");
      setMessage("ارسال درخواست ممکن نشد. اتصال خود را بررسی و دوباره تلاش کنید.");
    }
  }

  return (
    <div className="ek-wrap ek-book-grid">
      <div className="ek-book-copy">
        <p className="ek-eyebrow">{booking.label}</p>
        <h2 id="ek-book-title">
          کنار آتش{" "}
          <br />
          <em>بنشینید</em>
        </h2>
        <p className="ek-intro">{booking.intro}</p>

        <dl className="ek-book-facts">
          <div>
            <dt>
              <Clock size={14} aria-hidden="true" />
              سرویس
            </dt>
            <dd>{booking.sitting}</dd>
          </div>
          <div>
            <dt>آخرین سفارش</dt>
            <dd>{booking.lastOrders}</dd>
          </div>
          <div>
            <dt>اتاق</dt>
            <dd>۲۴ صندلی</dd>
          </div>
          <div>
            <dt>کارت</dt>
            <dd>هر صبح نوشته می‌شود</dd>
          </div>
        </dl>

        <p className="ek-book-release">
          صندلی‌های کانتر هر صبح برای همان شب آزاد می‌شوند. میزِ پاس شش نفره است و برای یک گروه
          قابل رزرو است؛ کل اتاق را می‌توان دوشنبه یا سه‌شنبه گرفت.
        </p>

        <div className="ek-book-contact">
          <p className="ek-mini-label">آشپزخانه</p>
          <a href={`mailto:${visit.email}`}>
            <Mail size={14} aria-hidden="true" />
            {visit.email}
          </a>
          <a href="tel:+442079460000">
            <Phone size={14} aria-hidden="true" />
            {visit.phone}
          </a>
        </div>
      </div>

      <div className="ek-book-card">
        <form className="ek-form" onSubmit={onSubmit}>
          <div className="ek-form-head">
            <p className="ek-form-title">درخواست کانتر</p>
            <p className="ek-form-sub">یک درخواست برای هر گروه · پاسخ در یک روز کاری</p>
          </div>

          <div className="ek-form-row">
            <label>
              <span>نام</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                required
                minLength={2}
                maxLength={120}
                placeholder="نام شما"
              />
            </label>
            <label>
              <span>ایمیل</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={180}
                placeholder="you@example.com" dir="ltr"
              />
            </label>
          </div>

          <div className="ek-form-row">
            <label>
              <span>تاریخ دلخواه</span>
              <input name="date" type="date" required min={minDate} />
            </label>
            <label>
              <span>گروه</span>
              <select name="party" defaultValue="2" required>
                {booking.partySizes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="ek-field-full">
            <span>کجا ترجیح می‌دهید بنشینید؟</span>
            <select name="preference" defaultValue="either">
              {booking.preferences.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="ek-field-full">
            <span>یادداشت برای آشپزخانه</span>
            <textarea
              name="notes"
              rows={4}
              maxLength={500}
              placeholder="آلرژی‌ها، نیازهای دسترسی، جشن‌ها (اختیاری)"
            />
          </label>

          <button type="submit" className="ek-btn ek-btn--ember" disabled={status === "sending"}>
            {status === "sending" ? "در حال ارسال…" : "درخواست صندلی"}
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>

          <p className="ek-form-demo">{booking.note}</p>
          <p className={`ek-form-status ek-form-status--${status}`} role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </div>
  );
}