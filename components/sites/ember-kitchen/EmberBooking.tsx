"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Clock, Mail, Phone } from "lucide-react";
import { booking, visit } from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function EmberBooking() {
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
    const preference = String(data.get("preference") ?? "either");
    const notes = String(data.get("notes") ?? "").trim();

    if (!date) {
      setStatus("error");
      setMessage("Please choose a preferred date.");
      return;
    }

    const partyLabel =
      booking.partySizes.find((option) => option.value === party)?.label ?? `${party} guests`;
    const preferenceLabel =
      booking.preferences.find((option) => option.value === preference)?.label ??
      "Either is fine";
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
          site: "ember-kitchen",
          name,
          email,
          message: `Counter request — ${partyLabel}, ${dateLabel}. Seat: ${preferenceLabel}. Notes: ${
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
    <div className="ek-wrap ek-book-grid">
      <div className="ek-book-copy">
        <p className="ek-eyebrow">{booking.label}</p>
        <h2 id="ek-book-title">
          Take a seat{" "}
          <br />
          <em>by the fire.</em>
        </h2>
        <p className="ek-intro">{booking.intro}</p>

        <dl className="ek-book-facts">
          <div>
            <dt>
              <Clock size={14} aria-hidden="true" />
              Service
            </dt>
            <dd>{booking.sitting}</dd>
          </div>
          <div>
            <dt>Last orders</dt>
            <dd>{booking.lastOrders}</dd>
          </div>
          <div>
            <dt>The room</dt>
            <dd>24 seats</dd>
          </div>
          <div>
            <dt>The card</dt>
            <dd>Set each morning</dd>
          </div>
        </dl>

        <p className="ek-book-release">
          Counter seats are released each morning for the same evening. The pass
          table seats six and can be held for a group; the whole room can be taken
          on a Monday or Tuesday.
        </p>

        <div className="ek-book-contact">
          <p className="ek-mini-label">The kitchen</p>
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

      <div className="ek-book-card">
        <form className="ek-form" onSubmit={onSubmit}>
          <div className="ek-form-head">
            <p className="ek-form-title">Request the counter</p>
            <p className="ek-form-sub">One request per party · reply within one working day</p>
          </div>

          <div className="ek-form-row">
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

          <div className="ek-form-row">
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

          <label className="ek-field-full">
            <span>Where would you rather sit?</span>
            <select name="preference" defaultValue="either">
              {booking.preferences.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="ek-field-full">
            <span>Notes for the kitchen</span>
            <textarea
              name="notes"
              rows={4}
              maxLength={500}
              placeholder="Allergies, access needs, celebrations (optional)"
            />
          </label>

          <button type="submit" className="ek-btn ek-btn--ember" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Request a seat"}
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>

          <p className="ek-form-demo">{booking.note}</p>
          <p className={`ek-form-status ek-form-status--${status}`} role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </div>
  );
}
