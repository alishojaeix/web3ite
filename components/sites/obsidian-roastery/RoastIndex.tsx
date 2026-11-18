"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { roasts } from "./content";
import { CanisterArt } from "./Artwork";

export function RoastIndex() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  function select(index: number, focus = true) {
    setActive(index);
    if (focus) tabs.current[index]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = roasts.length - 1;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      select(index === last ? 0 : index + 1);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      select(index === 0 ? last : index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(last);
    }
  }

  return (
    <div className="ob-roast-index">
      <div className="ob-roast-list">
        <p className="ob-mini-label">قفسه · ۳ قهوه</p>
        <div className="ob-roast-tabs" role="tablist" aria-label="بو داده‌ها" aria-orientation="vertical">
          {roasts.map((roast, index) => (
            <button
              key={roast.id}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              id={`ob-roast-tab-${roast.id}`}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-controls={`ob-roast-panel-${roast.id}`}
              tabIndex={index === active ? 0 : -1}
              className="ob-roast-tab"
              onClick={() => select(index, false)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span className="ob-roast-number" aria-hidden="true">
                {roast.number}
              </span>
              <span className="ob-roast-tab-copy">
                <span className="ob-roast-tab-name">{roast.name}</span>
                <span className="ob-roast-tab-origin">
                  {roast.origin} · {roast.process}
                </span>
              </span>
              <span className="ob-roast-tab-price">£{roast.price}</span>
            </button>
          ))}
        </div>
        <p className="ob-roast-list-note">
          فهرست پنجشنبه‌ها عوض می‌شود. وقتی دسته‌ای تمام شود، تا برداشت
          بعدی تمام است.
        </p>
      </div>

      <div className="ob-roast-panels">
        {roasts.map((roast, index) => (
          <div
            key={roast.id}
            id={`ob-roast-panel-${roast.id}`}
            role="tabpanel"
            aria-labelledby={`ob-roast-tab-${roast.id}`}
            tabIndex={0}
            hidden={index !== active}
            className="ob-roast-panel"
          >
            <div className="ob-roast-visual">
              <CanisterArt
                prefix={`ob-roast-${roast.id}`}
                number={roast.number}
                name={roast.name}
                origin={roast.origin}
              />
              <p className="ob-roast-visual-note">
                {roast.lot} · {roast.weight}
              </p>
            </div>

            <div className="ob-roast-detail">
              <p className="ob-mini-label">
                No. {roast.number} / {roast.roast} roast
              </p>
              <h3>{roast.name}</h3>
              <p className="ob-roast-origin">
                {roast.origin} · {roast.process}
              </p>
              <p className="ob-roast-story">{roast.story}</p>

              <ul className="ob-notes" aria-label="یادداشت‌های چشایی">
                {roast.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>

              <dl className="ob-roast-specs">
                <div>
                  <dt>گونه</dt>
                  <dd>{roast.varietal}</dd>
                </div>
                <div>
                  <dt>ارتفاع</dt>
                  <dd>{roast.altitude}</dd>
                </div>
                <div>
                  <dt>فرآوری</dt>
                  <dd>{roast.process}</dd>
                </div>
                <div>
                  <dt>برشت</dt>
                  <dd>{roast.roast}</dd>
                </div>
              </dl>

              <div className="ob-roast-buy">
                <p>
                  <span aria-hidden="true">£</span>
                  {roast.price}
                  <small>{roast.weight}</small>
                </p>
                <a href="#subscribe" className="ob-btn ob-btn--brass">
                  رزرو این بسته
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
