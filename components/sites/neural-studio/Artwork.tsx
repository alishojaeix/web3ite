/**
 * Neural Studio - procedural artwork.
 *
 * Everything here is inline SVG so the site stays fast, works without WebGL
 * and prints cleanly. All motion is decorative and disabled by
 * `prefers-reduced-motion` in neural.css.
 */

type Variant = "review" | "extract" | "retrieve";

const nodes: [number, number, number][] = [
  [360, 360, 10],
  [360, 140, 5],
  [500, 200, 6],
  [610, 360, 5],
  [520, 510, 6],
  [360, 590, 5],
  [200, 510, 6],
  [110, 360, 5],
  [200, 200, 6],
  [262, 262, 4],
  [458, 262, 4],
  [458, 458, 4],
  [262, 458, 4],
  [440, 150, 3],
  [620, 250, 3],
  [610, 470, 3],
  [440, 580, 3],
  [280, 580, 3],
  [100, 470, 3],
  [90, 250, 3],
  [280, 150, 3],
];

const edges: [number, number, boolean?][] = [
  [0, 9],
  [0, 10],
  [0, 11],
  [0, 12],
  [9, 1],
  [9, 8],
  [10, 1],
  [10, 2],
  [11, 3],
  [11, 4],
  [12, 6],
  [12, 7],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 1],
  [8, 9],
  [9, 12],
  [12, 7],
  [1, 10],
  [10, 11],
  [11, 4],
  [1, 13, true],
  [2, 13, true],
  [2, 14, true],
  [3, 14, true],
  [3, 15, true],
  [4, 15, true],
  [4, 16, true],
  [5, 16, true],
  [5, 17, true],
  [6, 17, true],
  [6, 18, true],
  [7, 18, true],
  [7, 19, true],
  [8, 19, true],
  [8, 20, true],
  [1, 20, true],
];

const pulses = [0, 2, 5, 9, 11];

export function NodeField() {
  return (
    <svg
      className="ns-field"
      viewBox="0 0 720 720"
      role="img"
      aria-label="An abstract node network: a central core connected to a ring of labelled nodes."
    >
      <defs>
        <radialGradient id="ns-field-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#aab5ff" stopOpacity="0.28" />
          <stop offset="45%" stopColor="#5d68b8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#08090f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ns-field-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#aab5ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#5d68b8" stopOpacity="0.16" />
        </linearGradient>
        <pattern
          id="ns-field-grid"
          width="36"
          height="36"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 36 0 L 0 0 0 36"
            fill="none"
            stroke="rgba(240,241,248,0.055)"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="720" height="720" fill="#0a0c15" />
      <rect width="720" height="720" fill="url(#ns-field-grid)" />
      <circle cx="360" cy="360" r="330" fill="url(#ns-field-glow)" />

      <g fill="none" stroke="rgba(170,181,255,0.18)">
        <circle cx="360" cy="360" r="300" strokeDasharray="2 9" />
        <circle cx="360" cy="360" r="242" />
        <circle cx="360" cy="360" r="150" strokeDasharray="1 7" />
      </g>

      <g className="ns-orbit">
        <circle
          cx="360"
          cy="360"
          r="272"
          fill="none"
          stroke="rgba(170,181,255,0.34)"
          strokeWidth="1"
          strokeDasharray="46 380"
        />
        <circle cx="360" cy="88" r="3" fill="#c9d1ff" />
      </g>

      <g stroke="url(#ns-field-edge)" strokeWidth="1">
        {edges.map(([from, to, dashed], index) => {
          const [x1, y1] = nodes[from];
          const [x2, y2] = nodes[to];
          return (
            <line
              key={`${from}-${to}-${index}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              strokeDasharray={dashed ? "2 6" : undefined}
              opacity={dashed ? 0.55 : 1}
            />
          );
        })}
      </g>

      <g className="ns-highlight-path" fill="none" stroke="#aab5ff" strokeWidth="1.4">
        <path d="M 262 262 L 458 262 L 500 200" opacity="0.9" />
        <path d="M 458 262 L 610 360" opacity="0.5" strokeDasharray="3 5" />
      </g>

      <g>
        {nodes.map(([x, y, r], index) => (
          <g key={`${x}-${y}`}>
            {pulses.includes(index) ? (
              <circle
                className="ns-pulse"
                cx={x}
                cy={y}
                r={r + 7}
                fill="none"
                stroke="#aab5ff"
                strokeWidth="1"
                style={{ animationDelay: `${(index % 5) * 0.9}s` }}
              />
            ) : null}
            <circle
              cx={x}
              cy={y}
              r={r}
              fill={index === 0 ? "#aab5ff" : "#0b0d16"}
              stroke={index === 0 ? "#c9d1ff" : "rgba(170,181,255,0.75)"}
              strokeWidth={index === 0 ? 2 : 1}
            />
            {index === 0 ? (
              <circle cx={x} cy={y} r={r + 13} fill="none" stroke="rgba(170,181,255,0.4)" />
            ) : null}
          </g>
        ))}
      </g>

      <g
        fill="#8f95ad"
        fontFamily="var(--ns-mono), ui-monospace, monospace"
        fontSize="9"
        letterSpacing="2.4"
      >
        <text x="360" y="112" textAnchor="middle">
          INPUT
        </text>
        <text x="494" y="238">
          EVAL
        </text>
        <text x="168" y="506">
          HUMAN
        </text>
        <text x="360" y="626" textAnchor="middle">
          OUTPUT
        </text>
      </g>

      <g
        fill="#c9d1ff"
        fontFamily="var(--ns-mono), ui-monospace, monospace"
        fontSize="9"
        letterSpacing="2.4"
      >
        <text x="360" y="392" textAnchor="middle">
          CORE
        </text>
      </g>

      <g fill="none" stroke="rgba(240,241,248,0.28)" strokeWidth="1">
        <path d="M 348 360 H 372 M 360 348 V 372" />
        <path d="M 28 28 H 58 M 28 28 V 58" />
        <path d="M 692 28 H 662 M 692 28 V 58" />
        <path d="M 28 692 H 58 M 28 692 V 662" />
        <path d="M 692 692 H 662 M 692 692 V 662" />
      </g>
    </svg>
  );
}

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 4 L19 18 L5 18 Z"
        stroke="currentColor"
        strokeWidth="1.1"
        opacity="0.55"
      />
      <path d="M12 4 L12 18" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="12" cy="4" r="2.1" fill="currentColor" />
      <circle cx="5" cy="18" r="1.7" fill="currentColor" />
      <circle cx="19" cy="18" r="1.7" fill="currentColor" />
      <circle cx="12" cy="11" r="1.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function SignalTrace() {
  return (
    <svg
      className="ns-trace"
      viewBox="0 0 320 96"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 48 H34 L44 48 L52 32 L60 64 L68 40 L76 56 L84 48 H120 L130 48 L138 18 L146 78 L154 30 L162 66 L170 48 H214 L224 48 L232 38 L240 58 L248 44 L256 52 L264 48 H320"
        stroke="rgba(170,181,255,0.28)"
        strokeWidth="1"
      />
      <path
        className="ns-trace-line"
        d="M0 48 H34 L44 48 L52 32 L60 64 L68 40 L76 56 L84 48 H120 L130 48 L138 18 L146 78 L154 30 L162 66 L170 48 H214 L224 48 L232 38 L240 58 L248 44 L256 52 L264 48 H320"
        stroke="#aab5ff"
        strokeWidth="1.4"
        pathLength={1}
      />
      <circle cx="138" cy="18" r="2.4" fill="#c9d1ff" />
      <circle cx="146" cy="78" r="2.4" fill="#c9d1ff" />
      <circle cx="248" cy="44" r="2.4" fill="#c9d1ff" />
    </svg>
  );
}

function ReviewDiagram() {
  return (
    <>
      {[18, 70, 122].map((y, index) => (
        <g key={y}>
          <rect x="8" y={y} width="62" height="34" rx="3" />
          <path
            d={`M 17 ${y + 12} H ${53 - index * 8}`}
            stroke="rgba(170,181,255,0.6)"
          />
          <path d={`M 17 ${y + 22} H ${44 + index * 4}`} stroke="rgba(240,241,248,0.22)" />
        </g>
      ))}
      <path d="M 70 35 H 88 V 85 H 112" />
      <path d="M 70 87 H 112" />
      <path d="M 70 139 H 88 V 85 H 112" />
      <path d="M 124 73 L 142 85 L 124 97 L 106 85 Z" />
      <path d="M 142 73 V 50 H 190" />
      <path d="M 142 97 V 120 H 190" />
      <rect x="192" y="34" width="60" height="32" rx="3" />
      <rect x="192" y="104" width="60" height="32" rx="3" />
      <text x="200" y="53" fontFamily="var(--ns-mono), ui-monospace, monospace" fontSize="7" letterSpacing="1.2" fill="#c9d1ff">
        HUMAN
      </text>
      <text x="200" y="123" fontFamily="var(--ns-mono), ui-monospace, monospace" fontSize="7" letterSpacing="1.2" fill="#8f95ad">
        ACCEPT
      </text>
    </>
  );
}

function ExtractDiagram() {
  return (
    <>
      <rect x="8" y="26" width="66" height="112" rx="3" />
      <path d="M 17 40 H 56" stroke="rgba(170,181,255,0.7)" />
      {[52, 64, 76, 88, 100, 112].map((y, index) => (
        <path
          key={y}
          d={`M 17 ${y} H ${index % 3 === 2 ? 46 : 58}`}
          stroke="rgba(240,241,248,0.2)"
        />
      ))}
      <path d="M 74 82 H 96" />
      <path d="M 90 77 L 96 82 L 90 87" />
      {[34, 76, 118].map((y, index) => (
        <g key={y}>
          <rect x="98" y={y} width="72" height="28" rx="3" />
          <path d={`M 106 ${y + 11} H ${132 + index * 6}`} stroke="rgba(170,181,255,0.7)" />
          <circle cx="160" cy={y + 11} r="2.4" fill="rgba(170,181,255,0.7)" />
          <path d={`M 106 ${y + 20} H ${142 - index * 5}`} stroke="rgba(240,241,248,0.2)" />
        </g>
      ))}
      <path d="M 170 48 H 194" />
      <path d="M 188 43 L 194 48 L 188 53" />
      <rect x="196" y="30" width="56" height="108" rx="3" />
      <path d="M 204 44 H 240" stroke="rgba(170,181,255,0.7)" />
      {[58, 70, 82, 94, 106, 118].map((y, index) => (
        <path
          key={y}
          d={`M 204 ${y} H ${234 - (index % 2) * 10}`}
          stroke="rgba(240,241,248,0.2)"
        />
      ))}
    </>
  );
}

function RetrieveDiagram() {
  return (
    <>
      <rect x="8" y="14" width="92" height="28" rx="3" />
      <path d="M 18 28 H 60" stroke="rgba(170,181,255,0.7)" />
      <circle cx="88" cy="28" r="3.4" stroke="rgba(170,181,255,0.8)" />
      <path d="M 90.5 30.5 L 94 34" stroke="rgba(170,181,255,0.8)" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={8 + col * 30}
            y={58 + row * 30}
            width="24"
            height="24"
            rx="2"
            fill={(row + col) % 3 === 0 ? "rgba(170,181,255,0.2)" : "transparent"}
            stroke={row === 1 && col === 1 ? "rgba(170,181,255,0.9)" : "rgba(240,241,248,0.22)"}
          />
        ))
      )}
      <path d="M 100 142 H 128 V 106 H 148" />
      <path d="M 122 137 L 128 142 L 122 147" />
      <rect x="150" y="36" width="102" height="104" rx="3" />
      <path d="M 160 52 H 224" stroke="rgba(240,241,248,0.4)" />
      <path d="M 160 64 H 240" stroke="rgba(240,241,248,0.3)" />
      <path d="M 160 76 H 216" stroke="rgba(240,241,248,0.3)" />
      <rect x="160" y="92" width="40" height="14" rx="7" fill="rgba(170,181,255,0.16)" stroke="rgba(170,181,255,0.5)" />
      <rect x="206" y="92" width="34" height="14" rx="7" fill="rgba(170,181,255,0.1)" stroke="rgba(170,181,255,0.35)" />
      <text x="167" y="102" fontFamily="var(--ns-mono), ui-monospace, monospace" fontSize="6" letterSpacing="1" fill="#c9d1ff">
        SOURCE
      </text>
      <text x="213" y="102" fontFamily="var(--ns-mono), ui-monospace, monospace" fontSize="6" letterSpacing="1" fill="#aab5ff">
        SPAN
      </text>
      <path d="M 160 122 H 238" stroke="rgba(240,241,248,0.18)" strokeDasharray="2 4" />
    </>
  );
}

const diagrams: Record<Variant, () => JSX.Element> = {
  review: ReviewDiagram,
  extract: ExtractDiagram,
  retrieve: RetrieveDiagram,
};

export function SystemDiagram({ variant }: { variant: Variant }) {
  const Diagram = diagrams[variant];
  return (
    <svg
      className="ns-diagram"
      viewBox="0 0 264 168"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g
        stroke="rgba(170,181,255,0.45)"
        strokeWidth="1"
        fill="none"
      >
        <Diagram />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="263"
        height="167"
        rx="4"
        stroke="rgba(240,241,248,0.1)"
        fill="none"
      />
    </svg>
  );
}
