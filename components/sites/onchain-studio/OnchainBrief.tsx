"use client";

import { useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
import { contact } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function OnchainBrief() {
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
          site: "onchain-studio",
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
      <div className="oc-card oc-success" role="status" aria-live="polite">
        <span className="oc-success-mark" aria-hidden="true">
          <Check size={22} />
        </span>
        <p className="oc-success-title">بریف ثبت شد</p>
        <p className="oc-success-body">{message}</p>
        <button
          type="button"
          className="oc-btn oc-btn--line oc-success-reset"
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
    <div className="oc-card">
      <div className="oc-form-head">
        <div>
          <p className="oc-form-title">{contact.form.title}</p>
          <p className="oc-form-sub">{contact.form.sub}</p>
        </div>
        <span className="oc-form-code" aria-hidden="true">
          BRIEF / ۰۱
        </span>
      </div>

      <form className="oc-form" onSubmit={onSubmit}>
        <div className="oc-form-row">
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
              placeholder="you@studio.com" dir="ltr"
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
            placeholder="پیوندی به محصول، شبکه‌ای که روی آن اجرا می‌شود و تصمیمِ رابط که باید پشتیبانی شود."
          />
        </label>

        <button
          type="submit"
          className="oc-btn oc-btn--solid oc-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "در حال ارسال…" : "ارسال بریف"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>

        {status === "error" ? (
          <p className="oc-form-error" role="alert">
            {message}
          </p>
        ) : null}

        <p className="oc-form-demo">{contact.form.note}</p>
      </form>
    </div>
  );
}
