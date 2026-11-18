"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { HearthDiagram, type Zone } from "./Artwork";
import { hearth } from "./content";

/**
 * The four working stations of the hearth. Selecting a station dims the other
 * zones of the section drawing, so the copy and the illustration stay in step.
 */
export function EmberHearth() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const station = hearth.stations[active];

  function select(index: number, focus = true) {
    setActive(index);
    if (focus) tabs.current[index]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = hearth.stations.length - 1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      select(index === last ? 0 : index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
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
    <div className="ek-wrap">
      <div className="ek-section-head ek-section-head--split">
        <div>
          <p className="ek-eyebrow">{hearth.label}</p>
          <h2 id="ek-hearth-title">
            یک آتش.{" "}
            <br />
            <em>هر بشقاب</em>
          </h2>
        </div>
        <p className="ek-intro">{hearth.intro}</p>
      </div>

      <div className="ek-hearth-grid">
        <figure className="ek-hearth-figure">
          <div className="ek-hearth-plate">
            <HearthDiagram active={station.id as Zone} />
          </div>
          <figcaption>
            <span>مقطع A–A · اجاق</span>
            <span>طراحی نمایشی · بدون مقیاس</span>
          </figcaption>
        </figure>

        <div className="ek-hearth-console">
          <div
            className="ek-hearth-tabs"
            role="tablist"
            aria-label="ایستگاه‌های اجاق"
            aria-orientation="horizontal"
          >
            {hearth.stations.map((item, index) => (
              <button
                key={item.id}
                ref={(node) => {
                  tabs.current[index] = node;
                }}
                id={`ek-hearth-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-controls="ek-hearth-panel"
                tabIndex={index === active ? 0 : -1}
                className="ek-hearth-tab"
                onClick={() => select(index, false)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <span aria-hidden="true">{item.numeral}</span>
                {item.label}
              </button>
            ))}
          </div>

          <div
            id="ek-hearth-panel"
            role="tabpanel"
            aria-labelledby={`ek-hearth-tab-${station.id}`}
            tabIndex={0}
            className="ek-hearth-panel"
          >
            <p className="ek-hearth-panel-label">
              <span aria-hidden="true">{station.numeral}</span>
              {station.label}
            </p>
            <h3>{station.title}</h3>
            <p>{station.body}</p>
            <ul className="ek-hearth-details" aria-label={`جزئیات ${station.label}`}>
              {station.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <a className="ek-text-link" href="#book">
              رزرو صندلی در کانتر
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <p className="ek-hearth-note">{hearth.note}</p>
    </div>
  );
}
