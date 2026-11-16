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
            "The message could not be stored. Please try again in a moment."
        );
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(
        "Message received. This is a demonstration inbox: your note is stored on this server and no email is sent."
      );
    } catch {
      setStatus("error");
      setMessage(
        "The message could not be sent. Check your connection and try again."
      );
    }
  }

  return (
    <form className="at-form" onSubmit={onSubmit}>
      <div className="at-form-grid">
        <label>
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
        <label>
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
      <label>
        <span>Message</span>
        <textarea
          name="message"
          required
          minLength={5}
          maxLength={2000}
          rows={4}
          placeholder="A tasting for four, a Thursday morning, or a question about the coffee."
        />
      </label>
      <div className="at-form-foot">
        <button type="submit" className="at-btn at-btn--solid" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send the note"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>
        <p className="at-form-note">
          Demo form · no email is sent. Please do not submit real personal details.
        </p>
      </div>
      <p className={`at-form-status at-form-status--${status}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
