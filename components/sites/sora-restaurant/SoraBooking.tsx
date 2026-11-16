"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Clock, Mail, Phone } from "lucide-react";
import { booking, visit } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function SoraBooking() {
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
    const service = String(data.get("service") ?? "dinner");
    const party = String(data.get("party") ?? "2");
    const seating = String(data.get("seating") ?? "either");
    const notes = String(data.get("notes") ?? "").trim();

    if (!date) {
      setStatus("error");
      setMessage("Please choose a preferred date.");
      return;
    }

    if (service === "lunch") {
      setStatus("error");
      setMessage("Lunch is walk-in only. Please choose dinner, or simply come by.");
      return;
    }

    const partyLabel =
      booking.partySizes.find((option) => option.value === party)?.label ?? `${party} guests`;
    const seatingLabel =
      booking.seating.find((option) => option.value === seating)?.label ?? "Either is fine";
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
          site: "sora-restaurant",
          name,
          email,
          message: `Table request - ${partyLabel}, ${dateLabel}, dinner. Seating: ${seatingLabel}. Notes: ${
            notes || "none noted"
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
      setMessage(booking.confirmation);
    } catch {
      setStatus("error");
      setMessage("The request could not be sent. Check your connection and try again.");
    }
  }

  return (
    <div className="sr-book-grid">
      <div className="sr-book-copy">
        <p className="sr-eyebrow">{booking.label}</p>
        <h2 id="sr-book-title">
          An easy{" "}
          <br />
          <em>evening.</em>
        </h2>
        <p className="sr-intro">{booking.intro}</p>

        <dl className="sr-book-facts">
          <div>
            <dt>
              <Clock size={14} aria-hidden="true" />
              Dinner
            </dt>
            <dd>{booking.sitting}</dd>
          </div>
          <div>
            <dt>Last orders</dt>
            <dd>{booking.lastOrders}</dd>
          </div>
          <div>
            <dt>Tables</dt>
            <dd>Ten seats</dd>
          </div>
          <div>
            <dt>Counter</dt>
            <dd>Walk-in</dd>
          </div>
        </dl>

        <p className="sr-book-release">{visit.lunchNote}</p>

        <div className="sr-book-contact">
          <p className="sr-mini-label">The room</p>
          <a href={`mailto:${visit.email}`}>
            <Mail size={14} aria-hidden="true" />
            {visit.email}
          </a>
          <a href="tel:+442079460000">
            <Phone size={14} aria-hidden="true" />
            {visit.phone}
          </a>
        </div>
      </div>

      <div className="sr-book-card">
        <form className="sr-form" onSubmit={onSubmit}>
          <div className="sr-form-head">
            <p className="sr-form-title">Request a table</p>
            <p className="sr-form-sub">A reply within one working day</p>
          </div>

          <div className="sr-form-row">
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

          <div className="sr-form-row">
            <label>
              <span>Preferred date</span>
              <input name="date" type="date" required min={minDate} />
            </label>
            <label>
              <span>Party</span>
              <select name="party" defaultValue="2" required>
                {booking.partySizes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="sr-form-row">
            <label>
              <span>Service</span>
              <select name="service" defaultValue="dinner">
                {booking.services.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Seating</span>
              <select name="seating" defaultValue="either">
                {booking.seating.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="sr-field-full">
            <span>Notes for the room</span>
            <textarea
              name="notes"
              rows={4}
              maxLength={500}
              placeholder="Allergies, access needs, a celebration (optional)"
            />
          </label>

          <button type="submit" className="sr-btn sr-btn--ink" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Request a table"}
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>

          <p className="sr-form-demo">{booking.note}</p>
          <p className={`sr-form-status sr-form-status--${status}`} role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </div>
  );
}
