"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { menu } from "./content";

export function MenuCard() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  function select(index: number, focus = true) {
    setActive(index);
    if (focus) tabs.current[index]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = menu.options.length - 1;
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
    <div className="md-menu-card">
      <div className="md-menu-main">
        <div className="md-menu-card-head">
          <div>
            <p className="md-menu-date">{menu.date}</p>
            <p className="md-menu-service">پنج دور · یک سِرویس</p>
          </div>
          <p className="md-menu-stamp" aria-hidden="true">
            M
          </p>
        </div>

        <div className="md-menu-tabs" role="tablist" aria-label="انتخاب منو">
          {menu.options.map((option, index) => (
            <button
              key={option.id}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              id={`md-menu-tab-${option.id}`}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-controls={`md-menu-panel-${option.id}`}
              tabIndex={index === active ? 0 : -1}
              className="md-menu-tab"
              onClick={() => select(index, false)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span>{option.label}</span>
              <small>{option.note}</small>
            </button>
          ))}
        </div>

        {menu.options.map((option, index) => (
          <div
            key={option.id}
            id={`md-menu-panel-${option.id}`}
            role="tabpanel"
            aria-labelledby={`md-menu-tab-${option.id}`}
            tabIndex={0}
            hidden={index !== active}
            className="md-menu-panel"
          >
            <ol className="md-courses">
              {option.courses.map((course) => (
                <li key={course.name} className="md-course">
                  <span className="md-course-numeral" aria-hidden="true">
                    {course.numeral}
                  </span>
                  <div className="md-course-copy">
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                  </div>
                  <p className="md-course-pairing">
                    <span>همراهی</span>
                    {course.pairing}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        ))}

        <p className="md-menu-note">{menu.note}</p>
      </div>

      <aside className="md-menu-side" aria-label="جزئیات منو">
        <p className="md-mini-label">کارت</p>
        <p className="md-menu-price">
          <span aria-hidden="true">€</span>
          {menu.price}
          <small>برای هر مهمان</small>
        </p>
        <dl className="md-menu-facts">
          <div>
            <dt>همراهی شراب</dt>
            <dd>€{menu.pairing}</dd>
          </div>
          <div>
            <dt>سِرویس</dt>
            <dd>18:30</dd>
          </div>
          <div>
            <dt>مدت</dt>
            <dd>{menu.duration}</dd>
          </div>
          <div>
            <dt>رژیم غذایی</dt>
            <dd>۴۸ ساعت اطلاع قبلی</dd>
          </div>
        </dl>
        <p className="md-menu-side-note">
          کارت چاپی تاریخ‌دار است و به‌عنوان یادگاری از آن شب نگه داشته می‌شود.
          هنگام خروج، نسخه‌ای از اتاق بخواهید.
        </p>
        <a href="#reserve" className="md-btn md-btn--ink">
          رزرو میز
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </aside>
    </div>
  );
}
