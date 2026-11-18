"use client";

import { useState } from "react";
import { AeroPlan, type AeroModeId } from "./Artwork";
import { study } from "./content";

export function VelocityLab() {
  const [mode, setMode] = useState<AeroModeId>("aero");
  const current = study.modes.find((item) => item.id === mode) ?? study.modes[1];

  return (
    <div className="vs-lab">
      <div className="vs-lab-visual">
        <div className="vs-lab-visual-head">
          <span>نقشهٔ فشار / {current.name}</span>
          <span>نمایشی</span>
        </div>
        <AeroPlan mode={mode} />
        <div className="vs-lab-visual-foot">
          <span>جریان</span>
          <span>تعادل {current.balance}</span>
        </div>
      </div>

      <div className="vs-lab-controls">
        <fieldset className="vs-modes">
          <legend>{study.config.label}</legend>
          <div className="vs-mode-options">
            {study.modes.map((item, index) => {
              const selected = item.id === mode;
              return (
                <label key={item.id} className={`vs-mode${selected ? " is-active" : ""}`}>
                  <input
                    className="vs-visually-hidden"
                    type="radio"
                    name="aero-mode"
                    value={item.id}
                    checked={selected}
                    onChange={() => setMode(item.id as AeroModeId)}
                  />
                  <span className="vs-mode-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="vs-mode-name">{item.name}</span>
                  <span className="vs-mode-note">{item.note}</span>
                  <span className="vs-mode-tick" aria-hidden="true" />
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="vs-readout" aria-live="polite">
          <div className="vs-readout-top">
            <p>حالت / {current.name}</p>
            <p>{current.note}</p>
          </div>

          <div className="vs-metrics">
            <div>
              <span>نیروی پایین‌فشار</span>
              <strong>{current.downforce}</strong>
              <div className="vs-bar" aria-hidden="true">
                <i style={{ width: `${current.downforceValue}%` }} />
              </div>
            </div>
            <div>
              <span>پسا</span>
              <strong>{current.drag}</strong>
              <div className="vs-bar" aria-hidden="true">
                <i style={{ width: `${current.dragValue}%` }} />
              </div>
            </div>
          </div>

          <p className="vs-readout-body">{current.body}</p>

          <dl className="vs-mode-rows">
            <div>
              <dt>فلپ جلو</dt>
              <dd>{current.front}</dd>
            </div>
            <div>
              <dt>بال عقب</dt>
              <dd>{current.rear}</dd>
            </div>
            <div>
              <dt>تعادل</dt>
              <dd>{current.balance}</dd>
            </div>
          </dl>
        </div>

        <p className="vs-lab-note">{study.config.note}</p>
      </div>
    </div>
  );
}
