"use client";

import { useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
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
          site: "cigar-atelier",
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
      <div className="ca-card ca-success" role="status" aria-live="polite">
        <span className="ca-success-mark" aria-hidden="true">
          <Check size={20} />
        </span>
        <p className="ca-success-title">Notice request logged</p>
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
          Log another request
        </button>
      </div>
    );
  }

  return (
    <div className="ca-card">
      <div className="ca-form-head">
        <div>
          <p className="ca-form-title">{contact.form.title}</p>
          <p className="ca-form-sub">{contact.form.sub}</p>
        </div>
        <span className="ca-form-code" aria-hidden="true">
          ATELIER / 18+
        </span>
      </div>

      <form className="ca-form" onSubmit={onSubmit}>
        <div className="ca-form-row">
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
            placeholder="Confirm you are 18 or older and specify the notice or index cards you wish to receive."
          />
        </label>

        <button
          type="submit"
          className="ca-btn ca-btn--solid ca-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Recording request…" : "Request the notice"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>

        {status === "error" ? (
          <p className="ca-form-error" role="alert">
            {message}
          </p>
        ) : null}

        <p className="ca-form-demo">{contact.form.note}</p>
      </form>
    </div>
  );
}