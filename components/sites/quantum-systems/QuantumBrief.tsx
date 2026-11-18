"use client";

import { useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
import { contact } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function QuantumBrief() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const application = String(data.get("application") ?? "").trim();
    const requirement = String(data.get("message") ?? "").trim();

    const brief = [
      application ? `کاربرد: ${application}` : "",
      organisation ? `سازمان: ${organisation}` : "",
      requirement,
    ]
      .filter(Boolean)
      .join("\n\n");

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/site-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "quantum-systems",
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
      <div className="qs-brief-card qs-brief-success" role="status" aria-live="polite">
        <span className="qs-success-mark" aria-hidden="true">
          <Check size={22} />
        </span>
        <p className="qs-success-title">درخواست ثبت شد</p>
        <p className="qs-success-body">{message}</p>
        <button
          type="button"
          className="qs-btn qs-btn--line qs-success-reset"
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
    <div className="qs-brief-card">
      <div className="qs-form-head">
        <p className="qs-form-title">{contact.form.title}</p>
        <p className="qs-form-sub">{contact.form.sub}</p>
        <span className="qs-form-code" aria-hidden="true">
          QS / BRIEF-01
        </span>
      </div>

      <form className="qs-form" onSubmit={onSubmit}>
        <div className="qs-form-row">
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

        <div className="qs-form-row">
          <label>
            <span>سازمان</span>
            <input
              name="organisation"
              type="text"
              autoComplete="organization"
              maxLength={90}
              placeholder="اختیاری"
            />
          </label>
          <label>
            <span>کاربرد</span>
            <select name="application" defaultValue={contact.form.applications[0]}>
              {contact.form.applications.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="qs-field-full">
          <span>نیاز</span>
          <textarea
            name="message"
            rows={5}
            required
            minLength={5}
            maxLength={1500}
            placeholder="اندازه‌گیری، محیط و محدودیت."
          />
        </label>

        <button
          type="submit"
          className="qs-btn qs-btn--solid qs-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "در حال ارسال…" : "ارسال درخواست"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>

        {status === "error" ? (
          <p className="qs-form-error" role="alert">
            {message}
          </p>
        ) : null}

        <p className="qs-form-demo">{contact.form.note}</p>
      </form>
    </div>
  );
}
