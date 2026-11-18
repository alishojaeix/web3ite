"use client";

import { useState } from "react";
import { Check, RotateCcw, ShieldCheck } from "lucide-react";
import { contact } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function ModernNotice() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const detail = String(data.get("message") ?? "").trim();

    const notes = [subject ? `درخواست: ${subject}` : "", detail]
      .filter(Boolean)
      .join("\n\n");

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/site-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "modern-tobacco",
          name,
          email,
          message: notes,
          ageConfirmed: data.get("ageConfirmed") === "on",
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(
          payload.error ??
            "ثبت درخواست ممکن نشد. کمی بعد دوباره تلاش کنید."
        );
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(
        "درخواست یادداشت‌های قفسه ثبت شد. این صندوق صرفاً نمایشی است؛ ایمیلی ارسال نمی‌شود و هیچ محصول، قیمت یا سفارشی ایجاد نمی‌شود."
      );
    } catch {
      setStatus("error");
      setMessage(
        "ارسال درخواست ممکن نشد. اتصال خود را بررسی و دوباره تلاش کنید."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="mt-form-card mt-success" role="status" aria-live="polite">
        <span className="mt-success-mark" aria-hidden="true">
          <Check size={20} />
        </span>
        <p className="mt-success-title">درخواست یادداشت‌ها ثبت شد</p>
        <p className="mt-success-body">{message}</p>
        <button
          type="button"
          className="mt-btn mt-btn--line mt-success-reset"
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
    <div className="mt-form-card">
      <div className="mt-form-head">
        <div>
          <p className="mt-form-title">{contact.formTitle}</p>
          <p className="mt-form-sub">{contact.formSub}</p>
        </div>
        <span className="mt-form-code" aria-hidden="true">
          {contact.formCode}
        </span>
      </div>

      <form className="mt-form" onSubmit={onSubmit}>
        <div className="mt-form-row">
          <label>
            <span>نام</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              maxLength={120}
              required
              placeholder="نام شما"
            />
          </label>
          <label>
            <span>ایمیل</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              maxLength={180}
              required
              placeholder="name@example.com" dir="ltr"
            />
          </label>
        </div>

        <label>
            <span>یادداشت‌ها درباره چه موضوعی باشند؟</span>
          <select name="subject" defaultValue={contact.formOptions[0]}>
            {contact.formOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>پیام</span>
          <textarea
            name="message"
            rows={4}
            maxLength={2000}
            required
            placeholder="یادداشتی کوتاه برای این بوتیک خیالی بنویسید."
          />
        </label>

        <label className="mt-check">
          <input type="checkbox" name="ageConfirmed" required />
          <span>
            <ShieldCheck size={15} aria-hidden="true" />
            تأیید می‌کنم ۱۸ سال یا بیشتر دارم. ویژه بزرگسالان.
          </span>
        </label>

        <button
          type="submit"
          className="mt-btn mt-btn--solid mt-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "در حال ارسال…" : contact.cta}
        </button>

        {status === "error" ? (
          <p className="mt-form-error" role="alert">
            {message}
          </p>
        ) : null}

        <p className="mt-form-demo">{contact.formNote}</p>
      </form>
    </div>
  );
}
