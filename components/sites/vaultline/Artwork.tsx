/**
 * Vaultline - technical artwork.
 *
 * Inline SVG: a layered custody vault, a mark and three material swatches.
 * Motion is limited to one slow violet seam pulse, disabled by
 * `prefers-reduced-motion`.
 */

export function VaultMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 2.2 L20.6 7.1 V16.9 L12 21.8 L3.4 16.9 V7.1 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <path
        d="M12 6.4 L16.8 9.2 V14.8 L12 17.6 L7.2 14.8 V9.2 Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="12" cy="12" r="2.3" fill="currentColor" />
      <path d="M12 2.2 V6.4 M12 17.6 V21.8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

export function VaultStack() {
  return (
    <svg
      className="vl-stack"
      viewBox="0 0 640 720"
      role="img"
      aria-label="A technical drawing of a layered custody vault: three offset steel plates, a combination dial, a violet seam and sealed status."
    >
      <defs>
        <linearGradient id="vl-steel" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#2b2740" />
          <stop offset="52%" stopColor="#1b1829" />
          <stop offset="100%" stopColor="#110f19" />
        </linearGradient>
        <linearGradient id="vl-plate-2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#211d31" />
          <stop offset="100%" stopColor="#12101c" />
        </linearGradient>
        <linearGradient id="vl-violet" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e6dcff" />
          <stop offset="48%" stopColor="#c8b8f5" />
          <stop offset="100%" stopColor="#6b5a9c" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="vl-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c8b8f5" stopOpacity="0.26" />
          <stop offset="60%" stopColor="#6b5a9c" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#09090d" stopOpacity="0" />
        </radialGradient>
        <filter id="vl-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <pattern id="vl-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(242,238,248,0.04)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="640" height="720" fill="#0a090f" />
      <rect width="640" height="720" fill="url(#vl-grid)" />
      <circle cx="330" cy="380" r="300" fill="url(#vl-halo)" />

      {/* Floor */}
      <ellipse cx="330" cy="642" rx="238" ry="36" fill="none" stroke="rgba(242,238,248,0.14)" />
      <ellipse cx="330" cy="642" rx="186" ry="26" fill="none" stroke="rgba(242,238,248,0.08)" strokeDasharray="2 7" />
      <line x1="40" y1="642" x2="600" y2="642" stroke="rgba(242,238,248,0.08)" />
      <g stroke="rgba(242,238,248,0.2)" strokeWidth="1">
        {Array.from({ length: 31 }, (_, index) => {
          const x = 60 + index * 17.3;
          const major = index % 5 === 0;
          return (
            <line
              key={index}
              x1={x}
              y1="642"
              x2={x}
              y2={major ? 650 : 647}
              opacity={major ? 1 : 0.5}
            />
          );
        })}
      </g>

      {/* Back plates */}
      <rect x="126" y="108" width="300" height="452" rx="16" fill="#0d0c14" stroke="rgba(242,238,248,0.2)" />
      <rect x="166" y="144" width="300" height="452" rx="16" fill="url(#vl-plate-2)" stroke="rgba(242,238,248,0.26)" />
      <path d="M 166 166 L 186 144 H 446 L 466 166" fill="none" stroke="rgba(242,238,248,0.38)" />
      <path d="M 466 144 V 574" stroke="rgba(200,184,245,0.3)" />

      {/* Front plate */}
      <rect x="206" y="180" width="300" height="452" rx="16" fill="url(#vl-steel)" stroke="rgba(242,238,248,0.38)" />
      <path d="M 206 202 L 228 180 H 484 L 506 202" fill="none" stroke="rgba(242,238,248,0.52)" />
      <path d="M 206 610 H 506" stroke="rgba(242,238,248,0.34)" />
      <path d="M 228 180 V 588" stroke="rgba(242,238,248,0.18)" />
      <rect x="230" y="204" width="252" height="404" rx="9" fill="none" stroke="rgba(242,238,248,0.2)" strokeDasharray="3 7" />

      {/* Violet seam and glow */}
      <rect x="206" y="206" width="4" height="396" rx="2" fill="#c8b8f5" opacity="0.34" filter="url(#vl-glow)" />
      <rect x="206" y="214" width="2" height="376" rx="1" fill="url(#vl-violet)" className="vl-seam" />
      <line x1="230" y1="516" x2="482" y2="516" stroke="rgba(200,184,245,0.34)" />
      <line x1="230" y1="524" x2="482" y2="524" stroke="rgba(200,184,245,0.14)" />

      {/* Bolts */}
      {[
        [244, 218],
        [468, 218],
        [244, 594],
        [468, 594],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="5" fill="none" stroke="rgba(242,238,248,0.44)" />
          <path d={`M ${cx - 3.4} ${cy} H ${cx + 3.4}`} stroke="rgba(242,238,248,0.44)" />
        </g>
      ))}

      {/* Combination dial */}
      <g>
        <circle cx="356" cy="356" r="86" fill="#100e18" stroke="rgba(242,238,248,0.4)" />
        <circle cx="356" cy="356" r="70" fill="none" stroke="rgba(242,238,248,0.26)" />
        {Array.from({ length: 24 }, (_, index) => {
          const angle = (index / 24) * Math.PI * 2 - Math.PI / 2;
          const major = index % 3 === 0;
          return (
            <line
              key={index}
              x1={356 + Math.cos(angle) * 70}
              y1={356 + Math.sin(angle) * 70}
              x2={356 + Math.cos(angle) * (major ? 80 : 76)}
              y2={356 + Math.sin(angle) * (major ? 80 : 76)}
              stroke={major ? "rgba(200,184,245,0.8)" : "rgba(242,238,248,0.32)"}
            />
          );
        })}
        <circle cx="356" cy="356" r="48" fill="none" stroke="rgba(242,238,248,0.32)" />
        <circle cx="356" cy="356" r="34" fill="none" stroke="rgba(200,184,245,0.5)" strokeDasharray="2 5" />
        <circle cx="356" cy="356" r="16" fill="none" stroke="rgba(242,238,248,0.44)" />
        <circle cx="356" cy="356" r="5" fill="#c8b8f5" />
        <line x1="356" y1="356" x2="402" y2="310" stroke="#e6dcff" strokeWidth="1.6" />
        <circle cx="402" cy="310" r="3" fill="#e6dcff" />
        <circle cx="356" cy="356" r="104" fill="none" stroke="rgba(242,238,248,0.1)" />
      </g>

      {/* Status strip */}
      <g>
        <rect x="248" y="550" width="216" height="34" rx="17" fill="rgba(12,11,18,0.9)" stroke="rgba(200,184,245,0.35)" />
        <circle cx="266" cy="567" r="3" fill="#c8b8f5" />
        <text
          x="356"
          y="571"
          textAnchor="middle"
          fill="#c8b8f5"
          fontFamily="var(--vl-mono), ui-monospace, monospace"
          fontSize="8.5"
          letterSpacing="2.2"
        >
          SEALED · RECORDED
        </text>
      </g>

      {/* Annotations */}
      <g fill="none" stroke="rgba(242,238,248,0.26)" strokeWidth="1">
        <path d="M 60 232 H 206" />
        <path d="M 506 268 H 580" />
        <path d="M 506 426 H 580" />
        <path d="M 60 540 H 206" />
      </g>
      <g fill="#aaa3bd" fontFamily="var(--vl-mono), ui-monospace, monospace" fontSize="9.5" letterSpacing="2">
        <text x="60" y="222">01 / SHELL</text>
        <text x="60" y="530">04 / LEDGER</text>
        <text x="580" y="258" textAnchor="end">02 / KEY SEPARATION</text>
        <text x="580" y="416" textAnchor="end">03 / POLICY</text>
        <text x="580" y="436" textAnchor="end" fontSize="8" fill="#6f6884">
          NAMED OWNER
        </text>
        <text x="60" y="552" fontSize="8" fill="#6f6884">
          APPEND-ONLY
        </text>
      </g>

      <g fill="#c8b8f5">
        <circle cx="206" cy="232" r="2.4" />
        <circle cx="506" cy="268" r="2.4" />
        <circle cx="506" cy="426" r="2.4" />
      </g>

      {/* Frame */}
      <g fill="none" stroke="rgba(242,238,248,0.2)" strokeWidth="1">
        <path d="M 26 26 H 62 M 26 26 V 62" />
        <path d="M 614 26 H 578 M 614 26 V 62" />
        <path d="M 26 694 H 62 M 26 694 V 658" />
        <path d="M 614 694 H 578 M 614 694 V 658" />
      </g>
      <g fill="#6f6884" fontFamily="var(--vl-mono), ui-monospace, monospace" fontSize="8" letterSpacing="1.6">
        <text x="26" y="62" dy="10">VAULT 01 / CUSTODY</text>
        <text x="614" y="62" dy="10" textAnchor="end">ILLUSTRATIVE · NOT TO SCALE</text>
      </g>
    </svg>
  );
}

type Swatch = "violet" | "steel" | "paper";

function SwatchArt({ variant }: { variant: Swatch }) {
  if (variant === "violet") {
    return (
      <>
        <rect width="220" height="160" fill="#0c0b13" />
        <radialGradient id="vl-sw-violet" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c8b8f5" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#6b5a9c" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#0c0b13" stopOpacity="0" />
        </radialGradient>
        <rect width="220" height="160" fill="url(#vl-sw-violet)" />
        <circle cx="110" cy="80" r="42" fill="none" stroke="rgba(200,184,245,0.5)" />
        <circle cx="110" cy="80" r="20" fill="none" stroke="rgba(242,238,248,0.3)" strokeDasharray="2 4" />
        <circle cx="110" cy="80" r="4" fill="#c8b8f5" />
        <path d="M 110 28 V 44 M 110 116 V 132 M 58 80 H 74 M 146 80 H 162" stroke="rgba(200,184,245,0.4)" />
      </>
    );
  }
  if (variant === "steel") {
    return (
      <>
        <rect width="220" height="160" fill="#0e0d15" />
        {[0, 1, 2].map((layer) => (
          <rect
            key={layer}
            x={38 + layer * 14}
            y={28 + layer * 14}
            width="130"
            height="100"
            rx="5"
            fill={layer === 0 ? "#15131e" : layer === 1 ? "#1b1826" : "#211e2c"}
            stroke="rgba(242,238,248,0.18)"
          />
        ))}
        <path d="M 52 42 L 62 32 H 168" fill="none" stroke="rgba(242,238,248,0.34)" />
        <line x1="52" y1="114" x2="168" y2="114" stroke="rgba(200,184,245,0.4)" />
        <circle cx="168" cy="56" r="3" fill="#c8b8f5" />
      </>
    );
  }
  return (
    <>
      <rect width="220" height="160" fill="#e9e4d9" />
      <rect x="30" y="24" width="160" height="112" fill="none" stroke="rgba(20,18,26,0.28)" />
      {[44, 56, 68, 80, 92, 104, 116].map((y, index) => (
        <line
          key={y}
          x1="42"
          y1={y}
          x2={index % 3 === 2 ? 132 : 178}
          y2={y}
          stroke="rgba(20,18,26,0.26)"
        />
      ))}
      <line x1="42" y1="44" x2="112" y2="44" stroke="rgba(20,18,26,0.55)" />
      <circle cx="158" cy="112" r="3" fill="#6b5a9c" />
      <path d="M 132 112 H 150" stroke="rgba(107,90,156,0.5)" />
    </>
  );
}

export function MaterialSwatch({ variant }: { variant: Swatch }) {
  return (
    <svg
      className="vl-swatch"
      viewBox="0 0 220 160"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <SwatchArt variant={variant} />
      <rect x="0.5" y="0.5" width="219" height="159" fill="none" stroke="rgba(242,238,248,0.16)" />
      <path d="M 10 10 H 26 M 10 10 V 26" fill="none" stroke="rgba(242,238,248,0.4)" />
      <path d="M 210 150 H 194 M 210 150 V 134" fill="none" stroke="rgba(242,238,248,0.4)" />
    </svg>
  );
}

export function SeamRule() {
  return (
    <svg
      className="vl-rule"
      viewBox="0 0 1200 22"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="0" y1="11" x2="1200" y2="11" stroke="rgba(242,238,248,0.14)" />
      {Array.from({ length: 61 }, (_, index) => {
        const x = index * 20;
        const major = index % 5 === 0;
        return (
          <line
            key={x}
            x1={x}
            y1="11"
            x2={x}
            y2={major ? 3 : 7}
            stroke={major ? "rgba(200,184,245,0.4)" : "rgba(242,238,248,0.18)"}
          />
        );
      })}
    </svg>
  );
}
