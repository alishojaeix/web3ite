"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function SiteContactForm({
  siteId,
  ctaLabel,
  ageRestricted = false,
}: {
  siteId: string;
  ctaLabel: string;
  ageRestricted?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/site-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: siteId,
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
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
            "امکان ثبت درخواست وجود ندارد. لطفاً کمی بعد دوباره تلاش کنید."
        );
        return;
      }
      form.reset();
      setStatus("success");
      setMessage(
        "درخواست دریافت شد. این صندوق پیام نمایشی است؛ پیام شما روی همین سرور ذخیره می‌شود و ایمیلی ارسال نخواهد شد."
      );
    } catch {
      setStatus("error");
      setMessage("ارسال درخواست ممکن نشد. اتصال اینترنت را بررسی و دوباره تلاش کنید.");
    }
  }

  return (
    <form className="site-form" onSubmit={onSubmit}>
      <div className="site-form-grid">
        <label className="site-field">
          <span>نام</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            placeholder="نام شما"
          />
        </label>
        <label className="site-field">
          <span>ایمیل</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={180}
            placeholder="name@example.com" dir="ltr"
          />
        </label>
      </div>
      <label className="site-field">
        <span>پیام</span>
        <textarea
          name="message"
          required
          maxLength={2000}
          rows={4}
          placeholder="نیازتان را برای ما بنویسید."
        />
      </label>

      {ageRestricted ? (
        <label className="site-check">
          <input type="checkbox" name="ageConfirmed" required />
          <span>تأیید می‌کنم که ۱۸ سال یا بیشتر دارم.</span>
        </label>
      ) : null}

      <div className="site-form-foot">
        <button
          type="submit"
          className="site-btn site-btn--primary"
          disabled={status === "sending"}
        >
          {status === "sending" ? "در حال ارسال…" : ctaLabel}
        </button>
        <p className="site-form-note">
          فرم نمایشی است و ایمیلی ارسال نمی‌شود. اطلاعات شخصی واقعی وارد نکنید.
        </p>
      </div>

      <p
        className={`site-form-status site-form-status--${status}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
