"use client";

import { useState } from "react";
import { CigarStudy } from "./Artwork";
import { collection } from "./content";

export function CigarCollection() {
  const [selectedId, setSelectedId] = useState<string>(collection.items[0].id);
  const active =
    collection.items.find((item) => item.id === selectedId) ?? collection.items[0];

  return (
    <div className="ca-collection-grid">
      <figure className="ca-collection-stage">
        <div className="ca-stage-head">
          <span>نمای پرونده</span>
          <span>
            {active.index} / {String(collection.items.length).padStart(2, "0")}
          </span>
        </div>
        <CigarStudy item={active} className="ca-study" />
        <figcaption className="ca-stage-foot">
          <span>{active.caption}</span>
          <span>تصویری · بدون مقیاس</span>
        </figcaption>
      </figure>

      <div className="ca-collection-panel">
        <fieldset className="ca-records">
          <legend>یک پرونده انتخاب کنید</legend>
          <div className="ca-record-options">
            {collection.items.map((item) => {
              const selected = item.id === selectedId;
              return (
                <label
                  key={item.id}
                  className={`ca-record ${selected ? "is-active" : ""}`}
                >
                  <input
                    type="radio"
                    name="ca-record"
                    value={item.id}
                    checked={selected}
                    onChange={() => setSelectedId(item.id)}
                  />
                  <span className="ca-record-index" aria-hidden="true">
                    {item.index}
                  </span>
                  <span className="ca-record-name">{item.name}</span>
                  <span className="ca-record-format">{item.format}</span>
                  <span className="ca-record-tick" aria-hidden="true" />
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="ca-readout" aria-live="polite">
          <div className="ca-readout-top">
            <p>پرونده {active.index}</p>
            <p>{active.format}</p>
          </div>

          <dl className="ca-record-facts">
            <div>
              <dt>روکش</dt>
              <dd>{active.wrapper}</dd>
            </div>
            <div>
              <dt>تنباکوی داخلی</dt>
              <dd>{active.fill}</dd>
            </div>
          </dl>

          <p className="ca-readout-body">{active.body}</p>

          <ul className="ca-tags" aria-label="یادداشت‌های پرونده">
            {active.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>

        <p className="ca-panel-note">{collection.note}</p>
      </div>
    </div>
  );
}
