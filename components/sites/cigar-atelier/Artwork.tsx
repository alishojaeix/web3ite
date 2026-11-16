/**
 * Cigar Atelier - procedural SVG illustrations.
 *
 * Matches the 3D scene: cedar-lined vitrine with indexed cigar formats,
 * aged brass hardware and printed index cards.
 */

export function CigarMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 5 C5 5 19 5 19 19 C19 19 5 19 5 5 Z"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
      />
      <path
        d="M8 12 L12 8 L16 12"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
      />
      <line x1="12" y1="8" x2="12" y2="18" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function CigarAtelierScene() {
  return (
    <svg
      className="ca-scene-svg"
      viewBox="0 0 880 460"
      role="img"
      aria-label="Illustration of a cedar-lined vitrine showing four indexed cigar formats on brass-tipped rests with printed cotton-rag cards."
    >
      <defs>
        <linearGradient id="ca-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#110f0d" />
          <stop offset="68%" stopColor="#0b0a08" />
          <stop offset="100%" stopColor="#080706" />
        </linearGradient>
        <linearGradient id="ca-cedar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5a3e2b" />
          <stop offset="48%" stopColor="#3d2818" />
          <stop offset="100%" stopColor="#2a1b10" />
        </linearGradient>
        <linearGradient id="ca-brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8c98a" />
          <stop offset="50%" stopColor="#c79a63" />
          <stop offset="100%" stopColor="#775331" />
        </linearGradient>
        <linearGradient id="ca-wrapper" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2a1b10" />
          <stop offset="40%" stopColor="#3d2818" />
          <stop offset="70%" stopColor="#5a3e2b" />
          <stop offset="100%" stopColor="#2a1b10" />
        </linearGradient>
        <radialGradient id="ca-glow" cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#c79a63" stopOpacity="0.18" />
          <stop offset="55%" stopColor="#775331" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0a0907" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="880" height="460" fill="url(#ca-bg)" />
      <rect width="880" height="460" fill="url(#ca-glow)" />

      {/* Cedar vitrine back wall */}
      <rect x="60" y="40" width="760" height="380" rx="2" fill="url(#ca-cedar)" />
      <g stroke="rgba(242,234,223,0.04)" strokeWidth="1">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={i} x1={60} y1={40 + i * 34} x2={820} y2={40 + i * 34} />
        ))}
      </g>

      {/* Brass hardware on vitrine corners */}
      {[60, 820].map((x) =>
        [40, 420].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="url(#ca-brass)" />
        ))
      )}

      {/* Four indexed formats on brass-tipped rests */}
      {[
        { x: 180, name: "01", swatch: "#2a1b10", band: "#5a3e2b" },
        { x: 380, name: "02", swatch: "#1a100a", band: "#c79a63" },
        { x: 580, name: "03", swatch: "#24160d", band: "#b8860b" },
        { x: 780, name: "04", swatch: "#1f1209", band: "#8b6b3a" },
      ].map((item) => (
        <g key={item.x}>
          {/* Brass rest tip */}
          <ellipse
            cx={item.x}
            cy="360"
            rx="48"
            ry="6"
            fill="url(#ca-brass)"
          />
          {/* Cigar body */}
          <rect
            x={item.x - 16}
            y="160"
            width="32"
            height="200"
            rx="3"
            fill={item.swatch}
            stroke={item.band}
            strokeWidth="4"
          />
          {/* Cap */}
          <ellipse
            cx={item.x}
            cy="156"
            rx="16"
            ry="4"
            fill={item.swatch}
            stroke={item.band}
            strokeWidth="2"
          />
          {/* Index label */}
          <text
            x={item.x}
            y="398"
            textAnchor="middle"
            fill="#f2eadf"
            fontFamily="var(--ca-sans), sans-serif"
            fontSize="9"
            letterSpacing="1.8"
          >
            {item.name}
          </text>
        </g>
      ))}

      {/* Printed index cards at base */}
      {[
        { x: 200, label: "CEDAR / CONNECTICUT" },
        { x: 400, label: "MADURO / NICARAGUA" },
        { x: 600, label: "ROSADO / HONDURAS" },
        { x: 800, label: "D. CORONA / DOMINICAN" },
      ].map((card) => (
        <g key={card.x}>
          <rect
            x={card.x - 70}
            y="422"
            width="140"
            height="28"
            rx="1"
            fill="#1c1814"
            stroke="url(#ca-brass)"
            strokeWidth="0.8"
          />
          <text
            x={card.x}
            y="441"
            textAnchor="middle"
            fill="#c79a63"
            fontFamily="var(--ca-sans), sans-serif"
            fontSize="7.5"
            letterSpacing="1.4"
          >
            {card.label}
          </text>
        </g>
      ))}

      {/* HUD */}
      <g
        fill="#a89a87"
        fontFamily="var(--ca-sans), sans-serif"
        fontSize="8"
        letterSpacing="1.6"
      >
        <text x="40" y="36">CIGAR ATELIER // VITRINE INDEX</text>
        <text x="840" y="36" textAnchor="end">FICTIONAL · ADULTS 18+</text>
        <text x="40" y="440">HUMIDITY REGULATED · NO SALES · NO HEALTH CLAIMS</text>
        <text x="840" y="440" textAnchor="end">ILLUSTRATIVE ONLY</text>
      </g>
    </svg>
  );
}

export function MaterialSwatch({
  variant,
}: {
  variant: "cedar" | "brass" | "paper";
}) {
  if (variant === "cedar") {
    return (
      <svg
        className="ca-swatch"
        viewBox="0 0 240 140"
        role="img"
        aria-label="Illustration of Spanish cedar grain with brass inlay."
      >
        <defs>
          <linearGradient id="ca-sw-cedar" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4e321d" />
            <stop offset="55%" stopColor="#3d2818" />
            <stop offset="100%" stopColor="#2a1b10" />
          </linearGradient>
        </defs>
        <rect width="240" height="140" fill="url(#ca-sw-cedar)" />
        <g stroke="rgba(242,234,223,0.08)" strokeWidth="1">
          {Array.from({ length: 10 }, (_, i) => (
            <path
              key={i}
              d={`M -10 ${20 + i * 18} Q 120 ${10 + i * 18} 250 ${20 + i * 18}`}
              fill="none"
            />
          ))}
        </g>
        <line x1="20" y1="110" x2="220" y2="110" stroke="url(#ca-sw-cedar)" strokeWidth="2" />
        <rect x="14" y="10" width="212" height="120" fill="none" stroke="rgba(242,234,223,0.18)" />
        <text
          x="22"
          y="118"
          fill="#f2eadf"
          fontFamily="var(--ca-sans), sans-serif"
          fontSize="7.5"
          letterSpacing="1.5"
        >
          SPANISH CEDAR / LINED
        </text>
      </svg>
    );
  }

  if (variant === "brass") {
    return (
      <svg
        className="ca-swatch"
        viewBox="0 0 240 140"
        role="img"
        aria-label="Illustration of aged brass index stamp and drawer pull."
      >
        <defs>
          <linearGradient id="ca-sw-brass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f0d9a0" />
            <stop offset="48%" stopColor="#c79a63" />
            <stop offset="100%" stopColor="#775331" />
          </linearGradient>
        </defs>
        <rect width="240" height="140" fill="#100f0d" />
        <circle cx="120" cy="70" r="42" fill="url(#ca-sw-brass)" opacity="0.18" />
        <circle cx="120" cy="70" r="32" fill="none" stroke="url(#ca-sw-brass)" strokeWidth="2.5" />
        <circle cx="120" cy="70" r="18" fill="none" stroke="url(#ca-sw-brass)" strokeWidth="1.5" />
        <text
          x="120"
          y="74"
          textAnchor="middle"
          fill="#f2eadf"
          fontFamily="var(--ca-sans), sans-serif"
          fontSize="10"
          fontWeight="700"
          letterSpacing="3"
        >
          02
        </text>
        <rect x="14" y="10" width="212" height="120" fill="none" stroke="rgba(242,234,223,0.18)" />
        <text
          x="22"
          y="118"
          fill="#f2eadf"
          fontFamily="var(--ca-sans), sans-serif"
          fontSize="7.5"
          letterSpacing="1.5"
        >
          AGED BRASS / INDEX
        </text>
      </svg>
    );
  }

  return (
    <svg
      className="ca-swatch"
      viewBox="0 0 240 140"
      role="img"
      aria-label="Illustration of cotton-rag index card with letterpress imprint."
    >
      <rect width="240" height="140" fill="#f8f4ec" />
      <rect x="16" y="12" width="208" height="116" rx="1" fill="#fbf8f0" stroke="#d8c8ad" strokeWidth="0.8" />
      <g fill="#775331" fontFamily="var(--ca-sans), sans-serif" fontSize="7" letterSpacing="1.2">
        <text x="28" y="36">CIGAR ATELIER</text>
        <text x="28" y="50" fontSize="6">FICTIONAL HOUSE · ADULTS 18+</text>
        <text x="28" y="72">INDEX 02 · MADURO</text>
        <text x="28" y="86">NICARAGUA · 5 × 54</text>
        <text x="28" y="100">COCOA · LEATHER · DARK</text>
      </g>
      <text
        x="22"
        y="122"
        fill="#775331"
        fontFamily="var(--ca-sans), sans-serif"
        fontSize="7"
        letterSpacing="1.5"
      >
        COTTON RAG / LETTERPRESS
      </text>
    </svg>
  );
}