"use client";

import { useState } from "react";
import { Check, RotateCcw, ShieldCheck } from "lucide-react";
import { contact } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function CigarNotice() {
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

    const notice = [subject ? `درخواست: ${subject}` : "", detail]
      .filter(Boolean)
      .join("\n\n");

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/site-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "cigar-atelier",
          name,
          email,
          message: notice,
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
        "درخواست اطلاعیه ثبت شد. این صندوق صرفاً نمایشی است؛ ایمیلی ارسال نمی‌شود و هیچ محصول، قیمت یا سفارشی ایجاد نمی‌شود."
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
      <div className="ca-form-card ca-success" role="status" aria-live="polite">
        <span className="ca-success-mark" aria-hidden="true">
          <Check size={20} />
        </span>
        <p className="ca-success-title">درخواست اطلاعیه ثبت شد</p>
        <p className="ca-success-body">{message}</p>
        <button
          type="button"
          className="ca-btn ca-btn--line ca-success-reset"
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
    <div className="ca-form-card">
      <div className="ca-form-head">
        <div>
          <p className="ca-form-title">{contact.formTitle}</p>
          <p className="ca-form-sub">{contact.formSub}</p>
        </div>
        <span className="ca-form-code" aria-hidden="true">
          {contact.formCode}
        </span>
      </div>

      <form className="ca-form" onSubmit={onSubmit}>
        <div className="ca-form-row">
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
            <span>اطلاعیه درباره چه موضوعی باشد؟</span>
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
            placeholder="یادداشتی کوتاه برای این خانه خیالی بنویسید."
          />
        </label>

        <label className="ca-check">
          <input type="checkbox" name="ageConfirmed" required />
          <span>
            <ShieldCheck size={15} aria-hidden="true" />
            تأیید می‌کنم ۱۸ سال یا بیشتر دارم. ویژه بزرگسالان.
          </span>
        </label>

        <button
          type="submit"
          className="ca-btn ca-btn--solid ca-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "در حال ارسال…" : contact.cta}
        </button>

        {status === "error" ? (
          <p className="ca-form-error" role="alert">
            {message}
          </p>
        ) : null}

        <p className="ca-form-demo">{contact.formNote}</p>
      </form>
    </div>
  );
}
