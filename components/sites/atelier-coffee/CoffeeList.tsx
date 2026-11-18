"use client";

import { useRef, useState } from "react";
import { menuGroups } from "./content";

export function CoffeeList() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  function select(index: number, focus = true) {
    setActive(index);
    if (focus) tabs.current[index]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = menuGroups.length - 1;
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
    <div className="at-menu">
      <div className="at-tabs" role="tablist" aria-label="فهرست قهوه">
        {menuGroups.map((item, index) => (
          <button
            key={item.id}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            id={`at-menu-tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-controls={`at-menu-panel-${item.id}`}
            tabIndex={index === active ? 0 : -1}
            className="at-tab"
            onClick={() => select(index, false)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {item.label}
            <span aria-hidden="true">{String(item.items.length).padStart(2, "0")}</span>
          </button>
        ))}
      </div>

      {menuGroups.map((group, index) => (
        <div
          key={group.id}
          id={`at-menu-panel-${group.id}`}
          role="tabpanel"
          aria-labelledby={`at-menu-tab-${group.id}`}
          tabIndex={0}
          hidden={index !== active}
          className="at-menu-panel"
        >
          <p className="at-menu-note">{group.note}</p>
          <ul className="at-menu-list">
            {group.items.map((item) => (
              <li key={item.name}>
                <div className="at-menu-copy">
                  <div className="at-menu-title">
                    <h3>{item.name}</h3>
                    {item.tag ? <span className="at-pill">{item.tag}</span> : null}
                  </div>
                  <p className="at-menu-origin">{item.origin}</p>
                  <p className="at-menu-notes">{item.notes}</p>
                </div>
                <p className="at-menu-price">
                  <span aria-hidden="true">£</span>
                  {item.price}
                </p>
              </li>
            ))}
          </ul>
          <p className="at-menu-foot">
            شیر جو، شیر پیشنهادی ماست. قیمت‌ها شامل سرویس است؛ کارمزد
            کارت گرفته نمی‌شود. منو نمایشی است.
          </p>
        </div>
      ))}
    </div>
  );
}
