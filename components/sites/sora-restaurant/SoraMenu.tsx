"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Leaf } from "lucide-react";
import { counterMenu, tableMenu } from "./content";

const tabs = [
  { id: counterMenu.id, label: counterMenu.label, note: counterMenu.note },
  { id: tableMenu.id, label: tableMenu.label, note: tableMenu.note },
];

export function SoraMenu() {
  const [active, setActive] = useState(0);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  function select(index: number, focus = true) {
    setActive(index);
    if (focus) buttons.current[index]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = tabs.length - 1;
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
    <div className="sr-menu-shell">
      <div className="sr-menu-tabs" role="tablist" aria-label="Choose a menu">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(node) => {
              buttons.current[index] = node;
            }}
            id={`sr-menu-tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-controls={`sr-menu-panel-${tab.id}`}
            tabIndex={index === active ? 0 : -1}
            className="sr-menu-tab"
            onClick={() => select(index, false)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            <span>{tab.label}</span>
            <small>{tab.note}</small>
          </button>
        ))}
      </div>

      <div
        id={`sr-menu-panel-${counterMenu.id}`}
        role="tabpanel"
        aria-labelledby={`sr-menu-tab-${counterMenu.id}`}
        tabIndex={0}
        hidden={active !== 0}
        className="sr-menu-panel"
      >
        <div className="sr-menu-side">
          <p className="sr-menu-side-label">The counter menu</p>
          <p className="sr-menu-price">
            <span aria-hidden="true">£</span>
            {counterMenu.price}
            <small>per guest</small>
          </p>
          <p className="sr-menu-side-copy">{counterMenu.intro}</p>
          <dl className="sr-menu-facts">
            <div>
              <dt>Pairing</dt>
              <dd>£{counterMenu.pairing} · four glasses</dd>
            </div>
            <div>
              <dt>Seats</dt>
              <dd>Ten at the counter</dd>
            </div>
            <div>
              <dt>Dietary</dt>
              <dd>48 hours&rsquo; notice</dd>
            </div>
          </dl>
          <a className="sr-text-link" href="#visit">
            Request the counter
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <ol className="sr-courses" aria-label="The counter menu courses">
          {counterMenu.courses.map((course) => (
            <li key={course.name} className="sr-course">
              <span className="sr-course-numeral" aria-hidden="true">
                {course.numeral}
              </span>
              <div className="sr-course-copy">
                <h3>{course.name}</h3>
                <p>{course.description}</p>
              </div>
              <span className="sr-course-note">{course.note}</span>
            </li>
          ))}
        </ol>
      </div>

      <div
        id={`sr-menu-panel-${tableMenu.id}`}
        role="tabpanel"
        aria-labelledby={`sr-menu-tab-${tableMenu.id}`}
        tabIndex={0}
        hidden={active !== 1}
        className="sr-menu-panel"
      >
        <div className="sr-menu-side">
          <p className="sr-menu-side-label">The table menu</p>
          <p className="sr-menu-price">
            <span aria-hidden="true">£</span>6
            <small>plates from</small>
          </p>
          <p className="sr-menu-side-copy">{tableMenu.intro}</p>
          <dl className="sr-menu-facts">
            <div>
              <dt>Order</dt>
              <dd>Two or three plates each</dd>
            </div>
            <div>
              <dt>Rice</dt>
              <dd>One pot for the table</dd>
            </div>
            <div>
              <dt>Course</dt>
              <dd>Arrives as it is ready</dd>
            </div>
          </dl>
          <a className="sr-text-link" href="#visit">
            Request a table
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="sr-table-groups">
          {tableMenu.groups.map((group) => (
            <section
              key={group.id}
              className="sr-table-group"
              aria-labelledby={`sr-table-group-${group.id}`}
            >
              <div className="sr-table-group-head">
                <h3 id={`sr-table-group-${group.id}`}>{group.title}</h3>
                <p>{group.note}</p>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div>
                      <p className="sr-dish-name">
                        {item.name}
                        {item.vegetarian ? (
                          <>
                            <span className="sr-veg-mark" aria-hidden="true">
                              <Leaf size={9} />
                            </span>
                            <span className="sr-sr-only">Vegetarian</span>
                          </>
                        ) : null}
                      </p>
                      <p className="sr-dish-desc">{item.description}</p>
                    </div>
                    <p className="sr-dish-price">
                      <span aria-hidden="true">£</span>
                      {item.price}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <p className="sr-menu-note">
        Sample menu. Dishes, prices and availability are illustrative. The card
        changes with the market; tell the kitchen about allergies when you book.
      </p>
    </div>
  );
}
