"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import {
  subscription,
  type BagSize,
  type Cadence,
  type Grind,
} from "./content";

type Status = "idle" | "sending" | "success" | "error";

export function SubscriptionBuilder() {
  const [cadence, setCadence] = useState<Cadence>("fortnightly");
  const [grind, setGrind] = useState<Grind>("whole-bean");
  const [size, setSize] = useState<BagSize>("250g");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const selectedSize = subscription.sizes.find((option) => option.id === size) ?? subscription.sizes[0];
  const cadenceLabel = subscription.cadences.find((option) => option.id === cadence)?.label.toLowerCase() ?? cadence;
  const grindLabel = subscription.grinds.find((option) => option.id === grind)?.label.toLowerCase() ?? grind;

  const summary = useMemo(
    () => `${selectedSize.label}, ${grindLabel}, ${cadenceLabel}`,
    [selectedSize.label, grindLabel, cadenceLabel]
  );

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
          site: "obsidian-roastery",
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: `Roast list request — ${summary}.`,
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
      setMessage(
        "You are on the demonstration roast list. No payment was taken and no coffee will be shipped."
      );
    } catch {
      setStatus("error");
      setMessage("The request could not be sent. Check your connection and try again.");
    }
  }

  return (
    <div className="ob-subscribe-grid">
      <div className="ob-builder">
        <fieldset className="ob-fieldset">
          <legend>Cadence</legend>
          <div className="ob-options">
            {subscription.cadences.map((option) => (
              <label key={option.id} className="ob-option">
                <input
                  type="radio"
                  name="cadence"
                  value={option.id}
                  checked={cadence === option.id}
                  onChange={() => setCadence(option.id)}
                />
                <span>
                  <strong>{option.label}</strong>
                  <small>{option.note}</small>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="ob-fieldset">
          <legend>Grind</legend>
          <div className="ob-options ob-options--three">
            {subscription.grinds.map((option) => (
              <label key={option.id} className="ob-option">
                <input
                  type="radio"
                  name="grind"
                  value={option.id}
                  checked={grind === option.id}
                  onChange={() => setGrind(option.id)}
                />
                <span>
                  <strong>{option.label}</strong>
                  <small>{option.note}</small>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="ob-fieldset">
          <legend>Size</legend>
          <div className="ob-options">
            {subscription.sizes.map((option) => (
              <label key={option.id} className="ob-option">
                <input
                  type="radio"
                  name="size"
                  value={option.id}
                  checked={size === option.id}
                  onChange={() => setSize(option.id)}
                />
                <span>
                  <strong>{option.label}</strong>
                  <small>{option.note}</small>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <form className="ob-subscribe-form" onSubmit={onSubmit}>
          <p className="ob-mini-label">Join the list</p>
          <div className="ob-subscribe-fields">
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
          <button type="submit" className="ob-btn ob-btn--brass" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Request the roast list"}
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>
          <p className="ob-form-note">
            Demo form · no email is sent. Please do not submit real personal details.
          </p>
          <p className={`ob-form-status ob-form-status--${status}`} role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </div>

      <aside className="ob-plan" aria-labelledby="ob-plan-title">
        <p className="ob-mini-label">Your selection</p>
        <h3 id="ob-plan-title">
          <span aria-hidden="true">£</span>
          {selectedSize.price}
          <small>/ {cadence === "weekly" ? "week" : "fortnight"}</small>
        </h3>
        <p className="ob-plan-summary">{summary}</p>

        <ul className="ob-plan-included">
          {subscription.included.map((item) => (
            <li key={item}>
              <Check size={14} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="ob-plan-next">
          <p className="ob-mini-label">Next roast</p>
          <p>Thursday · No. 01 Kenia AA</p>
          <p className="ob-plan-next-note">
            You can change the coffee after the first delivery. The roast list is
            chosen by the roastery, not the algorithm.
          </p>
        </div>

        <p className="ob-plan-note">{subscription.note}</p>
      </aside>
    </div>
  );
}
