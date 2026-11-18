"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Clock, Mail, Phone } from "lucide-react";
import { booking, visit } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function SoraBooking() {
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
    const service = String(data.get("service") ?? "dinner");
    const party = String(data.get("party") ?? "2");
    const seating = String(data.get("seating") ?? "either");
    const notes = String(data.get("notes") ?? "").trim();

    if (!date) {
      setStatus("error");
      setMessage("لطفاً تاریخ دلخواه را انتخاب کنید.");
      return;
    }

    if (service === "lunch") {
      setStatus("error");
      setMessage("ناهار فقط ورودِ آزاد است. لطفاً شام را انتخاب کنید یا بی‌واسطه تشریف بیاورید.");
      return;
    }

    const partyLabel =
      booking.partySizes.find((option) => option.value === party)?.label ?? `${party} مهمان`;
    const seatingLabel =
      booking.seating.find((option) => option.value === seating)?.label ?? "هر دو مناسب است";
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
          site: "sora-restaurant",
          name,
          email,
          message: `درخواست میز - ${partyLabel}، ${dateLabel}، شام. صندلی: ${seatingLabel}. یادداشت: ${
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
    <div className="sr-book-grid">
      <div className="sr-book-copy">
        <p className="sr-eyebrow">{booking.label}</p>
        <h2 id="sr-book-title">
          یک شبِ{" "}
          <br />
          <em>آسان</em>
        </h2>
        <p className="sr-intro">{booking.intro}</p>

        <dl className="sr-book-facts">
          <div>
            <dt>
              <Clock size={14} aria-hidden="true" />
              شام
            </dt>
            <dd>{booking.sitting}</dd>
          </div>
          <div>
            <dt>آخرین سفارش</dt>
            <dd>{booking.lastOrders}</dd>
          </div>
          <div>
            <dt>میزها</dt>
            <dd>ده صندلی</dd>
          </div>
          <div>
            <dt>کانتر</dt>
            <dd>ورودِ آزاد</dd>
          </div>
        </dl>

        <p className="sr-book-release">{visit.lunchNote}</p>

        <div className="sr-book-contact">
          <p className="sr-mini-label">اتاق</p>
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

      <div className="sr-book-card">
        <form className="sr-form" onSubmit={onSubmit}>
          <div className="sr-form-head">
            <p className="sr-form-title">درخواست میز</p>
            <p className="sr-form-sub">پاسخ در یک روز کاری</p>
          </div>

          <div className="sr-form-row">
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

          <div className="sr-form-row">
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

          <div className="sr-form-row">
            <label>
              <span>سرویس</span>
              <select name="service" defaultValue="dinner">
                {booking.services.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>صندلی</span>
              <select name="seating" defaultValue="either">
                {booking.seating.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="sr-field-full">
            <span>یادداشت برای اتاق</span>
            <textarea
              name="notes"
              rows={4}
              maxLength={500}
              placeholder="آلرژی‌ها، نیازهای دسترسی، یک جشن (اختیاری)"
            />
          </label>

          <button type="submit" className="sr-btn sr-btn--ink" disabled={status === "sending"}>
            {status === "sending" ? "در حال ارسال…" : "درخواست میز"}
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>

          <p className="sr-form-demo">{booking.note}</p>
          <p className={`sr-form-status sr-form-status--${status}`} role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </div>
  );
}