"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Clock, Mail, Phone } from "lucide-react";
import { reservation, visit } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function ReservationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [minDate, setMinDate] = useState<string>();

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow.toISOString().slice(0, 10));
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const date = String(data.get("date") ?? "");
    const party = String(data.get("party") ?? "2");
    const dietary = String(data.get("dietary") ?? "").trim();

    if (!date) {
      setStatus("error");
      setMessage("Please choose a preferred date.");
      return;
    }

    const partyLabel =
      reservation.partySizes.find((option) => option.value === party)?.label ??
      `${party} guests`;
    const dateLabel = new Date(`${date}T12:00:00`).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/site-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "maison-dining",
          name,
          email,
          message: `Table request — ${partyLabel}, ${dateLabel}. Dietary: ${
            dietary || "none noted"
          }.`,
          ageConfirmed: false,
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.error ?? "The request could not be stored. Please try again.");
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(reservation.confirmation);
    } catch {
      setStatus("error");
      setMessage("The request could not be sent. Check your connection and try again.");
    }
  }

  return (
    <div className="md-reserve-grid">
      <div className="md-reserve-copy">
        <p className="md-eyebrow">{reservation.label}</p>
        <h2 id="md-reserve-title">
          Reserve{" "}
          <br />
          <em>the room.</em>
        </h2>
        <p className="md-intro">{reservation.intro}</p>

        <dl className="md-reserve-facts">
          <div>
            <dt>
              <Clock size={14} aria-hidden="true" />
              Seating
            </dt>
            <dd>{reservation.sitting}</dd>
          </div>
          <div>
            <dt>Menu</dt>
            <dd>€{reservation.price}</dd>
          </div>
          <div>
            <dt>Pairing</dt>
            <dd>€{reservation.pairing}</dd>
          </div>
          <div>
            <dt>Party</dt>
            <dd>Two to twelve</dd>
          </div>
        </dl>

        <div className="md-reserve-contact">
          <p className="md-mini-label">The reservations desk</p>
          <a href={`mailto:${visit.email}`}>
            <Mail size={14} aria-hidden="true" />
            {visit.email}
          </a>
          <a href="tel:+33184000000">
            <Phone size={14} aria-hidden="true" />
            {visit.phone}
          </a>
        </div>
      </div>

      <div className="md-reserve-card">
        <form className="md-form" onSubmit={onSubmit} noValidate={false}>
          <p className="md-form-heading">Request a table</p>

          <div className="md-form-row">
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

          <div className="md-form-row">
            <label>
              <span>Preferred date</span>
              <input name="date" type="date" required min={minDate} />
            </label>
            <label>
              <span>Party</span>
              <select name="party" defaultValue="2" required>
                {reservation.partySizes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="md-field-full">
            <span>Dietary requirements or notes</span>
            <textarea
              name="dietary"
              rows={4}
              maxLength={500}
              placeholder="Allergies, celebrations, access needs (optional)"
            />
          </label>

          <button type="submit" className="md-btn md-btn--copper" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Request a table"}
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>

          <p className="md-form-demo">{reservation.note}</p>
          <p className={`md-form-status md-form-status--${status}`} role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </div>
  );
}
