"use client";

import { useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
import { contact } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function NeuralIntake() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const details = String(data.get("message") ?? "").trim();

    const brief = [
      projectType ? `Project type: ${projectType}` : "",
      company ? `Company: ${company}` : "",
      details,
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
          site: "neural-studio",
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
      <div className="ns-intake-card ns-intake-success" role="status" aria-live="polite">
        <span className="ns-success-mark" aria-hidden="true">
          <Check size={22} />
        </span>
        <p className="ns-success-title">بریف ثبت شد</p>
        <p className="ns-success-body">{message}</p>
        <button
          type="button"
          className="ns-btn ns-btn--line ns-success-reset"
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
    <div className="ns-intake-card">
      <div className="ns-form-head">
        <p className="ns-form-title">{contact.form.title}</p>
        <p className="ns-form-sub">{contact.form.sub}</p>
      </div>

      <form className="ns-form" onSubmit={onSubmit}>
        <div className="ns-form-row">
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

        <div className="ns-form-row">
          <label>
            <span>شرکت</span>
            <input
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={90}
              placeholder="اختیاری"
            />
          </label>
          <label>
            <span>نوع پروژه</span>
            <select name="projectType" defaultValue={contact.form.projectTypes[0]}>
              {contact.form.projectTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="ns-field-full">
          <span>بریف</span>
          <textarea
            name="message"
            rows={5}
            required
            minLength={5}
            maxLength={1500}
            placeholder="تصمیم، داده‌ای که دارید و دشواری آن."
          />
        </label>

        <button
          type="submit"
          className="ns-btn ns-btn--solid ns-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "در حال ارسال…" : "ارسال بریف"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>

        {status === "error" ? (
          <p className="ns-form-error" role="alert">
            {message}
          </p>
        ) : null}

        <p className="ns-form-demo" id="ns-form-demo">
          {contact.form.note}
        </p>
      </form>
    </div>
  );
}
