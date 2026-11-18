"use client";

import { useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
import { contact } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function CyberBrief() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const type = String(data.get("type") ?? "").trim();
    const detail = String(data.get("message") ?? "").trim();

    const brief = [type ? `نوع: ${type}` : "", detail]
      .filter(Boolean)
      .join("\n\n");

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/site-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "cyber-defense",
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
      <div className="cd-card cd-success" role="status" aria-live="polite">
        <span className="cd-success-mark" aria-hidden="true">
          <Check size={22} />
        </span>
        <p className="cd-success-title">بریف ثبت شد</p>
        <p className="cd-success-body">{message}</p>
        <button
          type="button"
          className="cd-btn cd-btn--line cd-success-reset"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
        >
          <RotateCcw size={14} aria-hidden="true" />
          ارسال بریف دیگر
        </button>
      </div>
    );
  }

  return (
    <div className="cd-card">
      <div className="cd-form-head">
        <div>
          <p className="cd-form-title">{contact.form.title}</p>
          <p className="cd-form-sub">{contact.form.sub}</p>
        </div>
        <span className="cd-form-code" aria-hidden="true">
          BRIEF / ۰۱
        </span>
      </div>

      <form className="cd-form" onSubmit={onSubmit}>
        <div className="cd-form-row">
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
              placeholder="you@company.com" dir="ltr"
            />
          </label>
        </div>

        <label>
          <span>چه چیزی نیاز دارید؟</span>
          <select name="type" defaultValue={contact.form.types[0]}>
            {contact.form.types.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>بریف</span>
          <textarea
            name="message"
            rows={4}
            required
            maxLength={1200}
            placeholder="تصمیمی که نقشهٔ پاسخ شما باید پشتیبانی کند، تیمِ در مسیر و محدودیتی که نمی‌توانید جابه‌جا کنید."
          />
        </label>

        <button
          type="submit"
          className="cd-btn cd-btn--solid cd-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "در حال ارسال…" : "ارسال بریف"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>

        {status === "error" ? (
          <p className="cd-form-error" role="alert">
            {message}
          </p>
        ) : null}

        <p className="cd-form-demo">{contact.form.note}</p>
      </form>
    </div>
  );
}
