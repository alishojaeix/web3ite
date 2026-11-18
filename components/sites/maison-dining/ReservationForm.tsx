"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Clock, Mail, Phone } from "lucide-react";
import { reservation, visit } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function ReservationForm() {
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
    const dietary = String(data.get("dietary") ?? "").trim();

    if (!date) {
      setStatus("error");
      setMessage("لطفاً تاریخ مورد نظر را انتخاب کنید.");
      return;
    }

    const partyLabel =
      reservation.partySizes.find((option) => option.value === party)?.label ??
      `${party} مهمان`;
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
          site: "maison-dining",
          name,
          email,
          message: `درخواست میز — ${partyLabel}، ${dateLabel}. رژیم غذایی: ${
            dietary || "ذکر نشده"
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
      setMessage(reservation.confirmation);
    } catch {
      setStatus("error");
      setMessage("ارسال درخواست ممکن نشد. اتصال خود را بررسی و دوباره تلاش کنید.");
    }
  }

  return (
    <div className="md-reserve-grid">
      <div className="md-reserve-copy">
        <p className="md-eyebrow">{reservation.label}</p>
        <h2 id="md-reserve-title">
          رزرو{" "}
          <br />
          <em>اتاق</em>
        </h2>
        <p className="md-intro">{reservation.intro}</p>

        <dl className="md-reserve-facts">
          <div>
            <dt>
              <Clock size={14} aria-hidden="true" />
              سِرویس
            </dt>
            <dd>{reservation.sitting}</dd>
          </div>
          <div>
            <dt>منو</dt>
            <dd>€{reservation.price}</dd>
          </div>
          <div>
            <dt>همراهی</dt>
            <dd>€{reservation.pairing}</dd>
          </div>
          <div>
            <dt>تعداد مهمان</dt>
            <dd>دو تا دوازده</dd>
          </div>
        </dl>

        <div className="md-reserve-contact">
          <p className="md-mini-label">میز رزرو</p>
          <a href={`mailto:${visit.email}`}>
            <Mail size={14} aria-hidden="true" />
            {visit.email}
          </a>
          <a href="tel:+33184000000">
            <Phone size={14} aria-hidden="true" />
            {visit.phone}
          </a>
        </div>
      </div>

      <div className="md-reserve-card">
        <form className="md-form" onSubmit={onSubmit} noValidate={false}>
          <p className="md-form-heading">درخواست میز</p>

          <div className="md-form-row">
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

          <div className="md-form-row">
            <label>
              <span>تاریخ مورد نظر</span>
              <input name="date" type="date" required min={minDate} />
            </label>
            <label>
              <span>تعداد مهمان</span>
              <select name="party" defaultValue="2" required>
                {reservation.partySizes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="md-field-full">
            <span>رژیم غذایی یا یادداشت‌ها</span>
            <textarea
              name="dietary"
              rows={4}
              maxLength={500}
              placeholder="حساسیت‌ها، مناسبت‌ها، نیازهای دسترسی (اختیاری)"
            />
          </label>

          <button type="submit" className="md-btn md-btn--copper" disabled={status === "sending"}>
            {status === "sending" ? "در حال ارسال…" : "درخواست میز"}
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>

          <p className="md-form-demo">{reservation.note}</p>
          <p className={`md-form-status md-form-status--${status}`} role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </div>
  );
}
