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
            "The request could not be stored. Please try again in a moment."
        );
        return;
      }
      form.reset();
      setStatus("success");
      setMessage(
        "Request received. This is a demonstration inbox — your message is stored on this server and no email is sent."
      );
    } catch {
      setStatus("error");
      setMessage("The request could not be sent. Check your connection and try again.");
    }
  }

  return (
    <form className="site-form" onSubmit={onSubmit}>
      <div className="site-form-grid">
        <label className="site-field">
          <span>Name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            placeholder="Your name"
          />
        </label>
        <label className="site-field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={180}
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="site-field">
        <span>Message</span>
        <textarea
          name="message"
          required
          maxLength={2000}
          rows={4}
          placeholder="Tell us what you need."
        />
      </label>

      {ageRestricted ? (
        <label className="site-check">
          <input type="checkbox" name="ageConfirmed" required />
          <span>I confirm I am 18 or older.</span>
        </label>
      ) : null}

      <div className="site-form-foot">
        <button
          type="submit"
          className="site-btn site-btn--primary"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : ctaLabel}
        </button>
        <p className="site-form-note">
          Demo form · no email is sent. Do not submit real personal details.
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
