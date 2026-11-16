"use client";

import { useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
import { reserve } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function LaunchReserve() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const edition = String(data.get("edition") ?? "").trim();
    const note = String(data.get("message") ?? "").trim();

    const request = [
      edition ? `Edition: ${edition}` : "",
      note,
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
          site: "ai-product-launch",
          name,
          email,
          message: request,
          ageConfirmed: false,
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error || reserve.form.fallback);
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(reserve.form.confirmation);
    } catch {
      setStatus("error");
      setMessage(reserve.form.fallback);
    }
  }

  if (status === "success") {
    return (
      <div className="la-reserve-card la-reserve-success" role="status" aria-live="polite">
        <span className="la-success-mark" aria-hidden="true">
          <Check size={22} />
        </span>
        <p className="la-success-title">Reservation recorded</p>
        <p className="la-success-body">{message}</p>
        <button
          type="button"
          className="la-btn la-btn--line la-success-reset"
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
    <div className="la-reserve-card">
      <div className="la-form-head">
        <div>
          <p className="la-form-title">{reserve.form.title}</p>
          <p className="la-form-sub">{reserve.form.sub}</p>
        </div>
        <span className="la-form-code" aria-hidden="true">
          RUN / 01
        </span>
      </div>

      <form className="la-form" onSubmit={onSubmit}>
        <div className="la-form-row">
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
              placeholder="you@studio.com"
            />
          </label>
        </div>

        <label>
          <span>Configuration</span>
          <select name="edition" defaultValue={reserve.form.editions[0]}>
            {reserve.form.editions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Where will it sit?</span>
          <textarea
            name="message"
            rows={4}
            maxLength={1200}
            placeholder="Optional: desk, studio or rack — and what you want it to run."
          />
        </label>

        <button
          type="submit"
          className="la-btn la-btn--solid la-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending request…" : "Request a reservation"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>

        {status === "error" ? (
          <p className="la-form-error" role="alert">
            {message}
          </p>
        ) : null}

        <p className="la-form-demo">{reserve.form.note}</p>
      </form>
    </div>
  );
}
