"use client";

import { useState } from "react";
import { ArrowUpRight, Check, RotateCcw } from "lucide-react";
import { disclosure } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function VaultDisclosure() {
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

    const request = [type ? `Type: ${type}` : "", detail]
      .filter(Boolean)
      .join("\n\n");

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/site-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "vaultline",
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
        setMessage(payload.error || disclosure.form.fallback);
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(disclosure.form.confirmation);
    } catch {
      setStatus("error");
      setMessage(disclosure.form.fallback);
    }
  }

  if (status === "success") {
    return (
      <div className="vl-card vl-success" role="status" aria-live="polite">
        <span className="vl-success-mark" aria-hidden="true">
          <Check size={22} />
        </span>
        <p className="vl-success-title">Request recorded</p>
        <p className="vl-success-body">{message}</p>
        <button
          type="button"
          className="vl-btn vl-btn--line vl-success-reset"
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
    <div className="vl-card">
      <div className="vl-form-head">
        <div>
          <p className="vl-form-title">{disclosure.form.title}</p>
          <p className="vl-form-sub">{disclosure.form.sub}</p>
        </div>
        <span className="vl-form-code" aria-hidden="true">
          SEC / 01
        </span>
      </div>

      <form className="vl-form" onSubmit={onSubmit}>
        <div className="vl-form-row">
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
              placeholder="you@company.com"
            />
          </label>
        </div>

        <label>
          <span>Request type</span>
          <select name="type" defaultValue={disclosure.form.types[0]}>
            {disclosure.form.types.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>What do you need to inspect?</span>
          <textarea
            name="message"
            rows={4}
            required
            maxLength={1200}
            placeholder="Control area, deployment model and the decision your review has to support."
          />
        </label>

        <button
          type="submit"
          className="vl-btn vl-btn--solid vl-form-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending request…" : "Request the overview"}
          <ArrowUpRight size={15} aria-hidden="true" />
        </button>

        {status === "error" ? (
          <p className="vl-form-error" role="alert">
            {message}
          </p>
        ) : null}

        <p className="vl-form-demo">{disclosure.form.note}</p>
      </form>
    </div>
  );
}
