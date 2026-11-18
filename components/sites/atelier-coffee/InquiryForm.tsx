"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function InquiryForm() {
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
          site: "atelier-coffee",
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
          ageConfirmed: false,
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(
          payload.error ??
            "ذخیرهٔ پیام ممکن نشد. لطفاً کمی بعد دوباره تلاش کنید."
        );
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(
        "پیام دریافت شد. این صندوق نمایشی است؛ یادداشت شما روی همین سرور ذخیره می‌شود و ایمیلی ارسال نمی‌شود."
      );
    } catch {
      setStatus("error");
      setMessage(
        "ارسال پیام ممکن نشد. اتصال خود را بررسی و دوباره تلاش کنید."
      );
    }
  }

  return (
    <form className="at-form" onSubmit={onSubmit}>
      <div className="at-form-grid">
        <label>
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
        <span>پیام</span>
        <textarea
          name="message"
          required
          minLength={5}
          maxLength={2000}
          rows={4}
          placeholder="یک چشایی برای چهار نفر، صبح پنجشنبه، یا پرسشی دربارهٔ قهوه."
        />
      </label>
      <div className="at-form-foot">
        <button type="submit" className="at-btn at-btn--solid" disabled={status === "sending"}>
          {status === "sending" ? "در حال ارسال…" : "ارسال یادداشت"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>
        <p className="at-form-note">
          فرم نمایشی است و ایمیلی ارسال نمی‌شود. لطفاً اطلاعات شخصی واقعی وارد نکنید.
        </p>
      </div>
      <p className={`at-form-status at-form-status--${status}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
