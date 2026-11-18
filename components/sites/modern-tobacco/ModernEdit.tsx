"use client";

import { useState } from "react";
import { EditStudy } from "./Artwork";
import { edit } from "./content";

export function ModernEdit() {
  const [selectedId, setSelectedId] = useState<string>(edit.items[0].id);
  const active =
    edit.items.find((item) => item.id === selectedId) ?? edit.items[0];

  return (
    <div className="mt-edit-grid">
      <figure className="mt-edit-stage">
        <div className="mt-stage-head">
          <span>بررسی شیء</span>
          <span>
            {active.index} / {String(edit.items.length).padStart(2, "0")}
          </span>
        </div>
        <EditStudy item={active} className="mt-study" />
        <figcaption className="mt-stage-foot">
          <span>{active.caption}</span>
          <span>تصویری · صرفاً برای نمایش</span>
        </figcaption>
      </figure>

      <div className="mt-edit-panel">
        <fieldset className="mt-objects">
          <legend>یک شیء انتخاب کنید</legend>
          <div className="mt-object-options">
            {edit.items.map((item) => {
              const selected = item.id === selectedId;
              return (
                <label
                  key={item.id}
                  className={`mt-object ${selected ? "is-active" : ""}`}
                >
                  <input
                    type="radio"
                    name="mt-object"
                    value={item.id}
                    checked={selected}
                    onChange={() => setSelectedId(item.id)}
                  />
                  <span className="mt-object-index" aria-hidden="true">
                    {item.index}
                  </span>
                  <span className="mt-object-name">{item.name}</span>
                  <span className="mt-object-spec">{item.spec}</span>
                  <span className="mt-object-tick" aria-hidden="true" />
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-readout" aria-live="polite">
          <div className="mt-readout-top">
            <p>شیء {active.index}</p>
            <p>{active.spec}</p>
          </div>
          <p className="mt-readout-body">{active.body}</p>
          <ul className="mt-tags" aria-label="یادداشت‌های شیء">
            {active.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <p className="mt-panel-note">{edit.note}</p>
      </div>
    </div>
  );
}
