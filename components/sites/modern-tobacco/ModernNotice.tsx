"use client";

import { useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
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
    const type = String(data.get("type") ?? "").trim();
    const detail = String(data.get("message") ?? "").trim();

    const brief = [type ? `Request: ${type}` : "", detail]
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
          message: brief,
          ageConfirmed: true,
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
      <div className="mt-card mt-success" role="status" aria-live="polite">
        <span className="mt-success-mark" aria-hidden="true">
          <Check size={20} />
        </span>
        <p className="mt-success-title">Notice request logged</p>
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
          Log another request
        </button>
      </div>
    );
  }

  return (
    <div className="mt-card">
      <div className="mt-form-head">
        <div>
          <p className="mt-form-title">{contact.form.title}</p>
          <p className="mt-form-sub">{contact.form.sub}</p>
        </div>
        <span className="mt-form-code" aria-hidden="true">
          MODERN / 18+
        </span>
      </div>

      <form className="mt-form" onSubmit={onSubmit}>
        <div className="mt-form-row">
          <label>
            <span>Name</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              minLength={2}
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
          <span>Request type</span>
          <select name="type" defaultValue={contact.form.types[0]}>
            {contact.form.types.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Your note</span>
          <textarea
            name="message"
            rows={4}
            required
            maxLength={1200}
            placeholder="Confirm you are 18 or older and specify the notice or stockist sheet you wish to receive."
          />
        </label>

        <button
          type="submit"
          className="mt-btn mt-btn--solid mt-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Recording request…" : "Request the notice"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>

        {status === "error" ? (
          <p className="mt-form-error" role="alert">
            {message}
          </p>
        ) : null}

        <p className="mt-form-demo">{contact.form.note}</p>
      </form>
    </div>
  );
}