/**
 * Quantum Systems - technical artwork.
 *
 * Inline SVG only: fast, printable, WebGL-free. Motion is limited to one slow
 * ring rotation and is disabled by `prefers-reduced-motion`.
 */

export function QMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2.5" y="2.5" width="19" height="19" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <path d="M12 0.5v3M12 20.5v3M0.5 12h3M20.5 12h3" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

const CX = 600;
const CY = 300;

function ringTicks(radius: number, count: number, majorEvery: number) {
  return Array.from({ length: count }, (_, index) => {
    const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
    const major = index % majorEvery === 0;
    const inner = radius;
    const outer = radius + (major ? 12 : 6);
    return (
      <line
        key={`${radius}-${index}`}
        x1={CX + Math.cos(angle) * inner}
        y1={CY + Math.sin(angle) * inner}
        x2={CX + Math.cos(angle) * outer}
        y2={CY + Math.sin(angle) * outer}
        stroke={major ? "rgba(207,221,229,0.55)" : "rgba(207,221,229,0.2)"}
        strokeWidth="1"
      />
    );
  });
}

export function RingAssembly() {
  return (
    <svg
      className="qs-assembly"
      viewBox="0 0 1200 640"
      role="img"
      aria-label="A technical drawing of a circular assembly with three arms, concentric rings and measurement callouts."
    >
      <defs>
        <radialGradient id="qs-plate-glow" cx="50%" cy="50%" r="52%">
          <stop offset="0%" stopColor="#6d8796" stopOpacity="0.22" />
          <stop offset="58%" stopColor="#22313a" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#080a0c" stopOpacity="0" />
        </radialGradient>
        <pattern id="qs-plate-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(240,244,246,0.045)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="1200" height="640" fill="#0a0d10" />
      <rect width="1200" height="640" fill="url(#qs-plate-grid)" />
      <circle cx={CX} cy={CY} r="340" fill="url(#qs-plate-glow)" />

      <g stroke="rgba(207,221,229,0.16)" strokeWidth="1">
        <line x1="32" y1={CY} x2="1168" y2={CY} strokeDasharray="1 7" />
        <line x1={CX} y1="32" x2={CX} y2="560" strokeDasharray="1 7" />
      </g>

      <g className="qs-ring-spin">
        {ringTicks(258, 72, 6)}
        <circle
          cx={CX}
          cy={CY}
          r="258"
          fill="none"
          stroke="rgba(207,221,229,0.38)"
          strokeWidth="1"
          strokeDasharray="64 470"
        />
      </g>

      <g fill="none" stroke="rgba(207,221,229,0.34)" strokeWidth="1">
        <circle cx={CX} cy={CY} r="232" strokeDasharray="2 8" />
        <circle cx={CX} cy={CY} r="196" />
        <circle cx={CX} cy={CY} r="160" strokeDasharray="1 6" opacity="0.7" />
        <circle cx={CX} cy={CY} r="118" />
        <circle cx={CX} cy={CY} r="78" strokeDasharray="2 6" />
      </g>

      {[0, 120, 240].map((angle) => (
        <g key={angle} transform={`rotate(${angle} ${CX} ${CY})`}>
          <rect
            x={CX + 62}
            y={CY - 9}
            width="172"
            height="18"
            fill="rgba(13,17,21,0.92)"
            stroke="rgba(207,221,229,0.4)"
          />
          <line
            x1={CX + 78}
            y1={CY}
            x2={CX + 214}
            y2={CY}
            stroke="rgba(207,221,229,0.22)"
            strokeDasharray="3 5"
          />
          <rect
            x={CX + 228}
            y={CY - 24}
            width="26"
            height="48"
            fill="rgba(20,28,34,0.95)"
            stroke="rgba(207,221,229,0.55)"
          />
          <circle cx={CX + 241} cy={CY} r="4" fill="#cfdde5" />
        </g>
      ))}

      <g>
        <circle cx={CX} cy={CY} r="46" fill="#0b0f13" stroke="rgba(207,221,229,0.6)" />
        <circle cx={CX} cy={CY} r="30" fill="none" stroke="rgba(207,221,229,0.3)" strokeDasharray="2 4" />
        <circle cx={CX} cy={CY} r="9" fill="#cfdde5" />
        <circle cx={CX} cy={CY} r="17" fill="none" stroke="rgba(207,221,229,0.5)" />
        <path
          d={`M ${CX - 60} ${CY} H ${CX - 48} M ${CX + 48} ${CY} H ${CX + 60} M ${CX} ${CY - 60} V ${CY - 48} M ${CX} ${CY + 48} V ${CY + 60}`}
          stroke="rgba(207,221,229,0.4)"
        />
      </g>

      <g fill="none" stroke="rgba(207,221,229,0.45)" strokeWidth="1">
        <path d={`M ${CX} 72 V 42 H ${CX + 5}`} />
        <path d="M 840 300 H 1028" />
        <path d="M 392 470 L 292 552" />
      </g>

      <g fill="#9dabb3" fontFamily="var(--qs-mono), ui-monospace, monospace" fontSize="11" letterSpacing="2.2">
        <text x={CX} y="30" textAnchor="middle">
          01 / CONTROL
        </text>
        <text x="1040" y="296">
          02 / CALIBRATION
        </text>
        <text x="1040" y="316" fontSize="9" fill="#6f7f88">
          REFERENCE STAGE
        </text>
        <text x="284" y="574" textAnchor="end">
          03 / READOUT
        </text>
        <text x="32" y="48">
          ASSEMBLY 03
        </text>
        <text x="32" y="66" fill="#6f7f88" fontSize="9">
          OPTICAL STACK · REV C
        </text>
        <text x="1168" y="614" textAnchor="end" fill="#6f7f88" fontSize="9">
          ILLUSTRATIVE · NOT TO SCALE
        </text>
      </g>

      <g stroke="rgba(207,221,229,0.3)" strokeWidth="1">
        <line x1="32" y1="600" x2="1168" y2="600" />
        {Array.from({ length: 48 }, (_, index) => {
          const x = 32 + index * 24;
          const major = index % 5 === 0;
          return (
            <line
              key={x}
              x1={x}
              y1="600"
              x2={x}
              y2={major ? 588 : 594}
              stroke="rgba(207,221,229,0.3)"
            />
          );
        })}
      </g>

      <g fill="none" stroke="rgba(207,221,229,0.28)" strokeWidth="1">
        <path d="M 20 20 H 56 M 20 20 V 56" />
        <path d="M 1180 20 H 1144 M 1180 20 V 56" />
        <path d="M 20 620 H 56 M 20 620 V 584" />
        <path d="M 1180 620 H 1144 M 1180 620 V 584" />
      </g>
    </svg>
  );
}

export function SystemSchematic() {
  return (
    <svg
      className="qs-schematic"
      viewBox="0 0 520 600"
      role="img"
      aria-label="A schematic of three stacked modules: control plane, calibration cell and readout."
    >
      <g fill="none" stroke="rgba(207,221,229,0.4)" strokeWidth="1">
        <rect x="40" y="30" width="440" height="140" />
        <rect x="40" y="210" width="440" height="150" />
        <rect x="40" y="400" width="440" height="140" />

        <line x1="40" y1="58" x2="480" y2="58" />
        <line x1="40" y1="238" x2="480" y2="238" />
        <line x1="40" y1="428" x2="480" y2="428" />

        <line x1="260" y1="170" x2="260" y2="204" />
        <path d="M 256 198 L 260 204 L 264 198" />
        <line x1="260" y1="360" x2="260" y2="394" />
        <path d="M 256 388 L 260 394 L 264 388" />
      </g>

      <g fill="#9dabb3" fontFamily="var(--qs-mono), ui-monospace, monospace" fontSize="9.5" letterSpacing="1.6">
        <text x="54" y="49">01 / CONTROL PLANE</text>
        <text x="54" y="229">02 / CALIBRATION CELL</text>
        <text x="54" y="419">03 / READOUT</text>
        <text x="470" y="49" textAnchor="end" fill="#6f7f88">
          STATE
        </text>
        <text x="470" y="229" textAnchor="end" fill="#6f7f88">
          REF
        </text>
        <text x="470" y="419" textAnchor="end" fill="#6f7f88">
          LIVE
        </text>
      </g>

      <g>
        {[76, 100, 124].map((y, index) => (
          <g key={y}>
            <rect x="56" y={y} width="10" height="10" fill={index === 0 ? "#cfdde5" : "rgba(207,221,229,0.18)"} stroke="rgba(207,221,229,0.5)" />
            <line x1="78" y1={y + 5} x2={190 + index * 22} y2={y + 5} stroke="rgba(207,221,229,0.34)" />
            <line x1="56" y1={y + 20} x2={240 - index * 24} y2={y + 20} stroke="rgba(240,244,246,0.12)" />
          </g>
        ))}
        <rect x="330" y="76" width="126" height="76" stroke="rgba(207,221,229,0.3)" fill="none" />
        <path d="M 348 114 H 438 M 393 90 V 138" stroke="rgba(207,221,229,0.24)" strokeDasharray="2 5" />
        <circle cx="393" cy="114" r="12" stroke="rgba(207,221,229,0.45)" fill="none" />
        <circle cx="393" cy="114" r="3" fill="#cfdde5" />
      </g>

      <g>
        <circle cx="140" cy="300" r="46" stroke="rgba(207,221,229,0.45)" fill="none" />
        <circle cx="140" cy="300" r="30" stroke="rgba(207,221,229,0.26)" fill="none" strokeDasharray="2 5" />
        <circle cx="140" cy="300" r="7" fill="#cfdde5" />
        {[0, 90, 180, 270].map((angle) => (
          <line
            key={angle}
            x1="140"
            y1="300"
            x2={140 + Math.cos((angle * Math.PI) / 180) * 58}
            y2={300 + Math.sin((angle * Math.PI) / 180) * 58}
            stroke="rgba(207,221,229,0.24)"
          />
        ))}
        {[266, 300, 334].map((y, index) => (
          <g key={y}>
            <line x1="226" y1={y} x2="456" y2={y} stroke="rgba(240,244,246,0.14)" />
            <line x1="226" y1={y} x2={316 + index * 34} y2={y} stroke="rgba(207,221,229,0.4)" />
            <circle cx={316 + index * 34} cy={y} r="2.5" fill="#cfdde5" />
          </g>
        ))}
      </g>

      <g>
        <path
          d="M 56 480 H 92 L 102 458 L 112 502 L 122 470 L 132 490 L 142 480 H 190 L 200 480 L 210 446 L 220 514 L 230 462 L 240 496 L 250 480 H 310 L 320 480 L 330 466 L 340 494 L 350 474 L 360 486 L 370 480 H 458"
          stroke="rgba(207,221,229,0.5)"
          fill="none"
        />
        <line x1="56" y1="514" x2="458" y2="514" stroke="rgba(207,221,229,0.24)" />
        <circle cx="210" cy="446" r="3" fill="#cfdde5" />
        <circle cx="220" cy="514" r="3" fill="#cfdde5" />
        <circle cx="340" cy="494" r="3" fill="#cfdde5" />
      </g>

      <g stroke="rgba(207,221,229,0.28)" strokeWidth="1">
        <line x1="500" y1="30" x2="500" y2="540" />
        <line x1="494" y1="30" x2="506" y2="30" />
        <line x1="494" y1="540" x2="506" y2="540" />
        <line x1="494" y1="195" x2="506" y2="195" />
        <line x1="494" y1="375" x2="506" y2="375" />
        <path d="M 16 580 H 48 M 16 580 V 556" />
        <path d="M 504 580 H 472 M 504 580 V 556" />
      </g>
      <text
        x="514"
        y="285"
        fill="#6f7f88"
        fontFamily="var(--qs-mono), ui-monospace, monospace"
        fontSize="8.5"
        letterSpacing="1.6"
        textAnchor="middle"
        transform="rotate(90 514 285)"
      >
        MODULAR
      </text>
    </svg>
  );
}

export function CalibrationRule() {
  return (
    <svg
      className="qs-rule"
      viewBox="0 0 1200 34"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="0" y1="17" x2="1200" y2="17" stroke="rgba(207,221,229,0.22)" />
      {Array.from({ length: 101 }, (_, index) => {
        const x = index * 12;
        const major = index % 10 === 0;
        return (
          <line
            key={x}
            x1={x}
            y1="17"
            x2={x}
            y2={major ? 4 : 11}
            stroke={major ? "rgba(207,221,229,0.45)" : "rgba(207,221,229,0.2)"}
          />
        );
      })}
    </svg>
  );
}
