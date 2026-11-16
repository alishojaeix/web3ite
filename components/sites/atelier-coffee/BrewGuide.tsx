"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { brewRecipes } from "./content";

function formatTime(total: number) {
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function BrewGuide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [remaining, setRemaining] = useState(brewRecipes[0].duration);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const recipe = brewRecipes[activeIndex];
  const progress = recipe.duration > 0 ? 1 - remaining / recipe.duration : 0;

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setRemaining((value) => Math.max(0, value - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (running && remaining === 0) {
      setRunning(false);
      setDone(true);
    }
  }, [remaining, running]);

  function select(index: number, focus = true) {
    const next = brewRecipes[index];
    setActiveIndex(index);
    setRemaining(next.duration);
    setRunning(false);
    setDone(false);
    if (focus) tabs.current[index]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = brewRecipes.length - 1;
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

  function toggle() {
    if (done || remaining === 0) {
      setRemaining(recipe.duration);
      setDone(false);
      setRunning(true);
      return;
    }
    setRunning((value) => !value);
  }

  function reset() {
    setRunning(false);
    setDone(false);
    setRemaining(recipe.duration);
  }

  return (
    <div className="at-brew">
      <div className="at-brew-tabs" role="tablist" aria-label="Brew recipes">
        {brewRecipes.map((item, index) => (
          <button
            key={item.id}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            id={`at-brew-tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`at-brew-panel-${item.id}`}
            tabIndex={index === activeIndex ? 0 : -1}
            className="at-tab"
            onClick={() => select(index, false)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {brewRecipes.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={item.id}
            id={`at-brew-panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`at-brew-tab-${item.id}`}
            tabIndex={0}
            hidden={!isActive}
            className="at-brew-panel"
          >
            <div className="at-brew-copy">
              <p className="at-brew-summary">{item.summary}</p>
              <dl className="at-brew-stats">
                {item.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {isActive ? (
              <div className="at-timer">
                <div className="at-timer-visual">
                  <svg viewBox="0 0 124 124" aria-hidden="true">
                    <circle cx="62" cy="62" r="54" className="at-timer-track" />
                    <circle
                      cx="62"
                      cy="62"
                      r="54"
                      pathLength="100"
                      strokeDasharray="100"
                      strokeDashoffset={100 - Math.max(0, Math.min(1, progress)) * 100}
                      className="at-timer-progress"
                    />
                  </svg>
                  <p className="at-timer-digits" role="timer" aria-live="off">
                    {formatTime(remaining)}
                  </p>
                </div>
                <div className="at-timer-controls">
                  <button type="button" className="at-timer-main" onClick={toggle}>
                    {running ? (
                      <Pause size={15} aria-hidden="true" />
                    ) : (
                      <Play size={15} aria-hidden="true" />
                    )}
                    {running ? "Pause" : done ? "Brew again" : remaining === 0 ? "Brew again" : "Start"}
                  </button>
                  <button
                    type="button"
                    className="at-timer-reset"
                    onClick={reset}
                    aria-label="Reset timer"
                  >
                    <RotateCcw size={15} aria-hidden="true" />
                  </button>
                </div>
                <p className="at-timer-status" aria-live="polite">
                  {done ? "Cup ready. Pour, taste and adjust." : running ? "Timer running." : ""}
                </p>
              </div>
            ) : null}

            <ol className="at-brew-steps">
              {item.steps.map((step, stepIndex) => (
                <li key={step}>
                  <span aria-hidden="true">{String(stepIndex + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>

            <p className="at-brew-note">
              These are demonstration recipes. Adjust the grind and ratio to your own
              equipment and water.
            </p>
          </div>
        );
      })}
    </div>
  );
}
