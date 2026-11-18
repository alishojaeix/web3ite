"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { showcase, trims } from "./content";

export function ApexTrim() {
  const [active, setActive] = useState<string>(trims[1].id);
  const current = trims.find((trim) => trim.id === active) ?? trims[1];

  return (
    <div className="ap-config">
      <div className="ap-config-head">
        <div>
          <p className="ap-config-label">{showcase.config.label}</p>
          <p className="ap-config-title">{showcase.config.title}</p>
        </div>
        <span className="ap-config-code" aria-hidden="true">
          ۰۳ / تیپ
        </span>
      </div>

      <fieldset className="ap-trim-fieldset">
        <legend className="ap-visually-hidden">یک تیپ انتخاب کنید</legend>
        <div className="ap-trim-options">
          {trims.map((trim) => {
            const selected = trim.id === active;
            return (
              <label
                key={trim.id}
                className={`ap-trim-option${selected ? " is-active" : ""}`}
              >
                <input
                  className="ap-visually-hidden"
                  type="radio"
                  name="trim"
                  value={trim.id}
                  checked={selected}
                  onChange={() => setActive(trim.id)}
                />
                <span className="ap-trim-name">{trim.name}</span>
                <span className="ap-trim-sub">{trim.subtitle}</span>
                <span className="ap-trim-check" aria-hidden="true">
                  {selected ? <Check size={12} /> : null}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="ap-trim-detail" aria-live="polite">
        <p className="ap-trim-kicker">
          <span>{current.name}</span>
          {current.subtitle}
        </p>
        <p className="ap-trim-character">{current.character}</p>
        <dl className="ap-trim-rows">
          <div>
            <dt>چرخ‌ها</dt>
            <dd>{current.wheels}</dd>
          </div>
          <div>
            <dt>کابین</dt>
            <dd>{current.cabin}</dd>
          </div>
        </dl>
      </div>

      <p className="ap-config-note">{showcase.config.note}</p>
    </div>
  );
}
