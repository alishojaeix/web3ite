"use client";

import { useState } from "react";
import { Leaf } from "lucide-react";
import { menu } from "./content";

export function MenuBoard() {
  const [vegetarianOnly, setVegetarianOnly] = useState(false);
  const vegetarianCount = menu.groups.reduce(
    (total, group) => total + group.items.filter((item) => item.vegetarian).length,
    0
  );
  const totalCount = menu.groups.reduce((total, group) => total + group.items.length, 0);

  return (
    <div className="ek-menu">
      <div className="ek-menu-toolbar">
        <div>
          <p className="ek-menu-date">{menu.date}</p>
          <p className="ek-menu-service">
            یک نشست · چهار خوراک کوچک، سه بشقاب، دو مورد برای تقسیم
          </p>
        </div>
        <label className="ek-toggle">
          <input
            type="checkbox"
            checked={vegetarianOnly}
            onChange={(event) => setVegetarianOnly(event.target.checked)}
          />
          <span className="ek-toggle-track" aria-hidden="true">
            <span />
          </span>
          <span className="ek-toggle-label">
            <Leaf size={13} aria-hidden="true" />
            فقط گیاهی
          </span>
        </label>
      </div>

      <p className="ek-menu-count" role="status" aria-live="polite">
        {vegetarianOnly
          ? `نمایش ${vegetarianCount} غذای گیاهی از ${totalCount}.`
          : `${totalCount} غذا در کارت امشب · ${vegetarianCount} گیاهی.`}
      </p>

      <div className="ek-menu-groups">
        {menu.groups.map((group) => {
          const visibleItems = vegetarianOnly
            ? group.items.filter((item) => item.vegetarian)
            : group.items;
          if (visibleItems.length === 0) return null;
          return (
            <section
              key={group.id}
              className="ek-menu-group"
              aria-labelledby={`ek-menu-group-${group.id}`}
            >
              <div className="ek-menu-group-head">
                <span className="ek-menu-numeral" aria-hidden="true">
                  {group.numeral}
                </span>
                <div>
                  <h3 id={`ek-menu-group-${group.id}`}>{group.title}</h3>
                  <p>{group.note}</p>
                </div>
              </div>
              <ul className="ek-dishes">
                {visibleItems.map((item) => (
                  <li key={item.name} className="ek-dish" hidden={false}>
                    <div className="ek-dish-copy">
                      <p className="ek-dish-name">
                        {item.name}
                        {item.vegetarian ? (
                          <span className="ek-veg-mark" aria-hidden="true">
                            V
                          </span>
                        ) : null}
                        {item.vegetarian ? <span className="ek-sr-only">گیاهی</span> : null}
                      </p>
                      <p className="ek-dish-desc">{item.description}</p>
                    </div>
                    <p className="ek-dish-price">
                      <span aria-hidden="true">£</span>
                      {item.price}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <div className="ek-menu-foot">
        <p>{menu.note}</p>
        <p className="ek-menu-foot-right">قیمت‌ها به پوند · نان و آب شامل است</p>
      </div>
    </div>
  );
}