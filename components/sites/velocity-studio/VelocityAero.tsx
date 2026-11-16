"use client";

import { useState } from "react";
import { Film, Gauge, Wind } from "lucide-react";
import { reel, study } from "./content";

export function VelocityAero() {
  const [selectedId, setSelectedId] = useState<string>(study.modes[1].id);
  const [frameIndex, setFrameIndex] = useState<number>(2);

  const active =
    study.modes.find((mode) => mode.id === selectedId) ?? study.modes[1];
  const currentFrame = reel.frames[frameIndex] ?? reel.frames[0];

  const frontAngleNum = parseInt(active.front, 10) || 4;
  const rearAngleNum = parseInt(active.rear, 10) || 6;

  return (
    <div className="vs-aero-grid">
      {/* Left: Interactive Wind-Tunnel Mode Selector */}
      <div className="vs-tunnel-console">
        <div className="vs-console-head">
          <div>
            <p className="vs-kicker">
              <Wind size={13} aria-hidden="true" />
              {study.config.label}
            </p>
            <h3 className="vs-h3">{study.config.title}</h3>
          </div>
          <span className="vs-badge">{active.name} // {active.note}</span>
        </div>

        <div
          className="vs-mode-tabs"
          role="tablist"
          aria-label="Aerodynamic tunnel modes"
        >
          {study.modes.map((mode) => {
            const isSelected = mode.id === active.id;
            return (
              <button
                key={mode.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`vs-mode-tab ${isSelected ? "is-active" : ""}`}
                onClick={() => setSelectedId(mode.id)}
              >
                <span className="vs-mode-name">{mode.name}</span>
                <span className="vs-mode-sub">{mode.note}</span>
                <span className="vs-mode-fig">{mode.downforce} · {mode.drag}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Flap & Streamline Visualizer */}
        <div className="vs-flap-stage" aria-live="polite">
          <svg
            className="vs-flap-svg"
            viewBox="0 0 640 210"
            role="img"
            aria-label={`${active.name} mode diagram showing front flap at ${active.front}, rear wing at ${active.rear}, and ${active.downforce} illustrative downforce.`}
          >
            <rect width="640" height="210" fill="#0b090b" />
            <g stroke="rgba(245,236,235,0.06)">
              {Array.from({ length: 12 }, (_, i) => (
                <line key={i} x1={i * 54} y1="0" x2={i * 54} y2="210" />
              ))}
            </g>

            {/* Streamline deflection responds to selected mode */}
            <path
              d={`M 24 118 C 128 116 184 ${102 - frontAngleNum} 288 ${86 - rearAngleNum} C 392 ${78 - rearAngleNum} 470 ${106 - rearAngleNum * 1.3} 616 ${96 - rearAngleNum * 1.4}`}
              fill="none"
              stroke="#e45f58"
              strokeWidth="2.2"
            />
            <path
              d={`M 24 142 C 140 140 202 120 306 112 C 412 104 486 ${126 - rearAngleNum} 616 ${118 - rearAngleNum}`}
              fill="none"
              stroke="rgba(245,236,235,0.45)"
              strokeWidth="1.2"
            />
            <path
              d="M 76 164 L 560 164"
              stroke="rgba(245,236,235,0.22)"
              strokeDasharray="4 4"
            />

            {/* Simplified section body */}
            <path
              d="M 110 152 L 166 130 L 308 104 L 446 118 L 516 144 L 510 156 L 110 156 Z"
              fill="#191316"
              stroke="rgba(245,236,235,0.4)"
              strokeWidth="1.3"
            />

            {/* Dynamic front splitter flap */}
            <g transform={`translate(114, 152) rotate(${-frontAngleNum * 1.6})`}>
              <rect x="-18" y="-3" width="38" height="6" rx="1" fill="#e45f58" />
            </g>

            {/* Dynamic rear wing element */}
            <g transform={`translate(502, 114) rotate(${-rearAngleNum * 1.5})`}>
              <rect x="-26" y="-4" width="52" height="7" rx="1" fill="#e45f58" />
            </g>
            <line x1="498" y1="118" x2="490" y2="142" stroke="#f5eceb" strokeWidth="1.8" />

            <text
              x="24"
              y="28"
              fill="#b8a4a2"
              fontFamily="var(--vs-sans), sans-serif"
              fontSize="8.5"
              letterSpacing="1.6"
            >
              {`MODE // ${active.name.toUpperCase()} (${active.note.toUpperCase()})`}
            </text>
            <text
              x="616"
              y="28"
              textAnchor="end"
              fill="#e45f58"
              fontFamily="var(--vs-sans), sans-serif"
              fontSize="8.5"
              letterSpacing="1.6"
            >
              {`FRONT ${active.front} · REAR ${active.rear}`}
            </text>
            <text
              x="24"
              y="192"
              fill="#8f7e7d"
              fontFamily="var(--vs-sans), sans-serif"
              fontSize="8"
              letterSpacing="1.5"
            >
              {`BALANCE ${active.balance} F/R`}
            </text>
            <text
              x="616"
              y="192"
              textAnchor="end"
              fill="#f5eceb"
              fontFamily="var(--vs-sans), sans-serif"
              fontSize="8"
              letterSpacing="1.5"
            >
              {`${active.downforce} // ${active.drag} (SAMPLE)`}
            </text>
          </svg>

          <p className="vs-mode-body">{active.body}</p>

          {/* Telemetry bars */}
          <div className="vs-meters">
            <div className="vs-meter">
              <div className="vs-meter-top">
                <span>Downforce load (illustrative)</span>
                <strong>{active.downforce}</strong>
              </div>
              <div className="vs-meter-track" aria-hidden="true">
                <span
                  className="vs-meter-fill"
                  style={{ width: `${active.downforceValue}%` }}
                />
              </div>
            </div>
            <div className="vs-meter">
              <div className="vs-meter-top">
                <span>Drag index (illustrative)</span>
                <strong>{active.drag}</strong>
              </div>
              <div className="vs-meter-track" aria-hidden="true">
                <span
                  className="vs-meter-fill vs-meter-fill--muted"
                  style={{ width: `${active.dragValue}%` }}
                />
              </div>
            </div>
          </div>

          <dl className="vs-mode-readout">
            <div>
              <dt>Front flap</dt>
              <dd>{active.front}</dd>
            </div>
            <div>
              <dt>Rear wing</dt>
              <dd>{active.rear}</dd>
            </div>
            <div>
              <dt>Aero balance</dt>
              <dd>{active.balance}</dd>
            </div>
          </dl>
        </div>

        <p className="vs-console-note">{study.config.note}</p>
      </div>

      {/* Right: Interactive Launch Film Timecode Frame Inspector */}
      <aside className="vs-reel-console" aria-label="Launch film storyboard inspector">
        <div className="vs-console-head">
          <div>
            <p className="vs-kicker">
              <Film size={13} aria-hidden="true" />
              Storyboard timecode
            </p>
            <h3 className="vs-h3">{reel.title}</h3>
          </div>
          <span className="vs-badge vs-badge--ghost">TRT {reel.duration}</span>
        </div>

        <div className="vs-reel-screen">
          <div className="vs-reel-hud">
            <span>TC {currentFrame.time}:00</span>
            <span>FRAME 0{frameIndex + 1} / 0{reel.frames.length}</span>
          </div>
          <div className="vs-reel-frame-body">
            <p className="vs-reel-frame-kicker">{currentFrame.note}</p>
            <h4 className="vs-reel-frame-title">{currentFrame.title}</h4>
            <p className="vs-reel-frame-detail">{currentFrame.detail}</p>
          </div>
          <div className="vs-reel-meta">
            <div>
              <span>Camera rig</span>
              <strong>{currentFrame.camera}</strong>
            </div>
            <div>
              <span>Aero sync</span>
              <strong>{currentFrame.telemetry}</strong>
            </div>
          </div>
        </div>

        <div className="vs-reel-strip" role="tablist" aria-label="Launch film timecode cues">
          {reel.frames.map((frame, index) => {
            const activeFrame = index === frameIndex;
            return (
              <button
                key={frame.time}
                type="button"
                role="tab"
                aria-selected={activeFrame}
                className={`vs-reel-cue ${activeFrame ? "is-active" : ""}`}
                onClick={() => setFrameIndex(index)}
              >
                <span className="vs-cue-time">{frame.time}</span>
                <span className="vs-cue-title">{frame.title}</span>
                <span className="vs-cue-note">{frame.note}</span>
              </button>
            );
          })}
        </div>

        <p className="vs-console-note">
          <Gauge size={13} aria-hidden="true" />
          <span>{reel.caption}</span>
        </p>
      </aside>
    </div>
  );
}
