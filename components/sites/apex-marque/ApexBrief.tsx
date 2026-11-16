"use client";

import { useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
import { contact } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function ApexBrief() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const trim = String(data.get("trim") ?? "").trim();
    const detail = String(data.get("message") ?? "").trim();

    const brief = [trim ? `Trim: ${trim}` : "", detail]
      .filter(Boolean)
      .join("\n\n");

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/site-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "apex-marque",
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
      <div className="ap-card ap-success" role="status" aria-live="polite">
        <span className="ap-success-mark" aria-hidden="true">
          <Check size={22} />
        </span>
        <p className="ap-success-title">Build request recorded</p>
        <p className="ap-success-body">{message}</p>
        <button
          type="button"
          className="ap-btn ap-btn--line ap-success-reset"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
        >
          <RotateCcw size={14} aria-hidden="true" />
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="ap-card">
      <div className="ap-form-head">
        <div>
          <p className="ap-form-title">{contact.form.title}</p>
          <p className="ap-form-sub">{contact.form.sub}</p>
        </div>
        <span className="ap-form-code" aria-hidden="true">
          APEX / GT
        </span>
      </div>

      <form className="ap-form" onSubmit={onSubmit}>
        <div className="ap-form-row">
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
          <span>Trim</span>
          <select name="trim" defaultValue={contact.form.trims[1]}>
            {contact.form.trims.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>The route</span>
          <textarea
            name="message"
            rows={4}
            required
            maxLength={1200}
            placeholder="The route the car has to make easy, and the detail you would change."
          />
        </label>

        <button
          type="submit"
          className="ap-btn ap-btn--solid ap-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending request…" : "Send the build request"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>

        {status === "error" ? (
          <p className="ap-form-error" role="alert">
            {message}
          </p>
        ) : null}

        <p className="ap-form-demo">{contact.form.note}</p>
      </form>
    </div>
  );
}
