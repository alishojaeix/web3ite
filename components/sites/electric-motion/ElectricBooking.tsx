"use client";

import { useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
import { contact } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function ElectricBooking() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const hub = String(data.get("hub") ?? "").trim();
    const detail = String(data.get("message") ?? "").trim();

    const brief = [hub ? `ایستگاه: ${hub}` : "", detail]
      .filter(Boolean)
      .join("\n\n");

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/site-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "electric-motion",
          name,
          email,
          message: brief,
          ageConfirmed: false,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error || contact.form.fallback);
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(contact.form.confirmation);
    } catch {
      setStatus("error");
      setMessage(contact.form.fallback);
    }
  }

  if (status === "success") {
    return (
      <div className="em-form-card em-success" role="status" aria-live="polite">
        <span className="em-success-mark" aria-hidden="true">
          <Check size={20} />
        </span>
        <p className="em-success-title">درخواست رانندگی آزمایشی ثبت شد</p>
        <p className="em-success-body">{message}</p>
        <button
          type="button"
          className="em-btn em-btn--line"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
        >
          <RotateCcw size={14} aria-hidden="true" />
          ارسال درخواست دیگر
        </button>
      </div>
    );
  }

  return (
    <div className="em-form-card">
      <div className="em-form-head">
        <div>
          <p className="em-form-title">{contact.form.title}</p>
          <p className="em-form-sub">{contact.form.sub}</p>
        </div>
        <span className="em-pill">کپسول ۰۱</span>
      </div>

      <form className="em-form" onSubmit={onSubmit}>
        <div className="em-form-row">
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

        <label>
          <span>ایستگاه حرکت</span>
          <select name="hub" defaultValue={contact.form.hubs[0]}>
            {contact.form.hubs.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>سفر شهری همیشگی شما</span>
          <textarea
            name="message"
            rows={4}
            required
            maxLength={1200}
            placeholder="روز دلخواه، تعداد مسافران همیشگی، یا هر نیاز دسترس‌پذیری."
          />
        </label>

        <button
          type="submit"
          className="em-btn em-btn--solid em-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "در حال ثبت درخواست…" : "رزرو رانندگی نمایشی"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>

        {status === "error" ? (
          <p className="em-form-error" role="alert">
            {message}
          </p>
        ) : null}

        <p className="em-form-note">{contact.form.note}</p>
      </form>
    </div>
  );
}
