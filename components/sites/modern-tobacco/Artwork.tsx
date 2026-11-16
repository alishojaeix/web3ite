/**
 * Modern Tobacco Boutique - procedural SVG illustrations.
 *
 * Matches the 3D scene: brushed steel tin on powder-coated shelf
 * with soft linear wash and neutral paper index cards.
 */

export function TinMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="5"
        y="5"
        width="14"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M7 9 H17 M7 15 H17"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeDasharray="2 3"
      />
      <line x1="12" y1="5" x2="12" y2="21" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function ModernTobaccoScene() {
  return (
    <svg
      className="mt-scene-svg"
      viewBox="0 0 880 460"
      role="img"
      aria-label="Illustration of three brushed steel tins on a warm greige powder-coated shelf under soft 3000 K linear wash, with neutral paper cards."
    >
      <defs>
        <linearGradient id="mt-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#181917" />
          <stop offset="70%" stopColor="#10110f" />
          <stop offset="100%" stopColor="#090a09" />
        </linearGradient>
        <linearGradient id="mt-shelf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3833" />
          <stop offset="55%" stopColor="#2e2c27" />
          <stop offset="100%" stopColor="#24221e" />
        </linearGradient>
        <linearGradient id="mt-steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d8e0dc" />
          <stop offset="35%" stopColor="#a7b7ad" />
          <stop offset="70%" stopColor="#7a8882" />
          <stop offset="100%" stopColor="#5e7067" />
        </linearGradient>
        <linearGradient id="mt-wash" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#f1f3ef" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#a7b7ad" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#181917" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="mt-glow" cx="50%" cy="25%" r="50%">
          <stop offset="0%" stopColor="#a7b7ad" stopOpacity="0.15" />
          <stop offset="55%" stopColor="#5e7067" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#090a09" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="880" height="460" fill="url(#mt-bg)" />
      <rect width="880" height="460" fill="url(#mt-glow)" />

      {/* Powder-coated shelf */}
      <rect x="60" y="280" width="760" height="120" rx="4" fill="url(#mt-shelf)" />
      <g stroke="rgba(241,243,239,0.04)" strokeWidth="1">
        {Array.from({ length: 5 }, (_, i) => (
          <line key={i} x1={60} y1={280 + i * 24} x2={820} y2={280 + i * 24} />
        ))}
      </g>

      {/* Soft linear wash from above */}
      <rect x="60" y="120" width="760" height="180" fill="url(#mt-wash)" />

      {/* Three brushed steel tins */}
      {[
        { x: 240, label: "01" },
        { x: 440, label: "02" },
        { x: 640, label: "03" },
      ].map((tin) => (
        <g key={tin.x}>
          {/* Tin body */}
          <rect
            x={tin.x - 50}
            y="200"
            width="100"
            height="110"
            rx="4"
            fill="url(#mt-steel)"
            stroke="rgba(241,243,239,0.3)"
            strokeWidth="1.2"
          />
          {/* Tin lid */}
          <rect
            x={tin.x - 54}
            y="190"
            width="108"
            height="14"
            rx="2"
            fill="url(#mt-steel)"
            stroke="rgba(241,243,239,0.25)"
            strokeWidth="1"
          />
          {/* Seal groove */}
          <rect
            x={tin.x - 44}
            y="206"
            width="88"
            height="2"
            fill="#5e7067"
          />
          {/* Index label */}
          <text
            x={tin.x}
            y="370"
            textAnchor="middle"
            fill="#f1f3ef"
            fontFamily="var(--mt-sans), sans-serif"
            fontSize="9"
            letterSpacing="1.8"
          >
            {tin.label}
          </text>
        </g>
      ))}

      {/* Neutral paper cards on shelf */}
      {[
        { x: 240, text: "THE TIN / STEEL / 50G" },
        { x: 440, text: "THE EDIT / 3 BLENDS / 10×2" },
        { x: 640, text: "THE SHELF / POWDER-COAT" },
      ].map((card) => (
        <g key={card.x}>
          <rect
            x={card.x - 65}
            y="320"
            width="130"
            height="50"
            rx="1"
            fill="#f1f3ef"
            stroke="#a7b7ad"
            strokeWidth="0.8"
          />
          <text
            x={card.x}
            y="350"
            textAnchor="middle"
            fill="#1c1d1a"
            fontFamily="var(--mt-sans), sans-serif"
            fontSize="7"
            letterSpacing="1.3"
          >
            {card.text}
          </text>
        </g>
      ))}

      {/* HUD */}
      <g
        fill="#9ba49e"
        fontFamily="var(--mt-sans), sans-serif"
        fontSize="8"
        letterSpacing="1.6"
      >
        <text x="40" y="36">MODERN TOBACCO // EDIT 01</text>
        <text x="840" y="36" textAnchor="end">FICTIONAL · ADULTS 18+</text>
        <text x="40" y="440">NO SALES · NO HEALTH CLAIMS · ILLUSTRATIVE</text>
        <text x="840" y="440" textAnchor="end">RESTRICTIONS ARE DESIGN</text>
      </g>
    </svg>
  );
}

export function MaterialSwatch({
  variant,
}: {
  variant: "steel" | "light" | "paper";
}) {
  if (variant === "steel") {
    return (
      <svg
        className="mt-swatch"
        viewBox="0 0 240 140"
        role="img"
        aria-label="Illustration of bead-blasted 316L brushed steel with micro-groove seal."
      >
        <defs>
          <linearGradient id="mt-sw-steel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d8e0dc" />
            <stop offset="38%" stopColor="#a7b7ad" />
            <stop offset="75%" stopColor="#7a8882" />
            <stop offset="100%" stopColor="#5e7067" />
          </linearGradient>
        </defs>
        <rect width="240" height="140" fill="#10110f" />
        <rect x="20" y="16" width="200" height="108" rx="4" fill="url(#mt-sw-steel)" />
        <rect x="52" y="42" width="136" height="4" fill="#5e7067" />
        <rect x="16" y="12" width="208" height="116" rx="4" fill="none" stroke="rgba(241,243,239,0.18)" />
        <text
          x="22"
          y="124"
          fill="#f1f3ef"
          fontFamily="var(--mt-sans), sans-serif"
          fontSize="7.5"
          letterSpacing="1.5"
        >
          BRUSHED STEEL / 316L
        </text>
      </svg>
    );
  }

  if (variant === "light") {
    return (
      <svg
        className="mt-swatch"
        viewBox="0 0 240 140"
        role="img"
        aria-label="Illustration of soft 3000 K linear wash at 15° angle on neutral surface."
      >
        <defs>
          <linearGradient id="mt-sw-light" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f1f3ef" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#a7b7ad" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#181917" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="240" height="140" fill="#181917" />
        <rect x="16" y="12" width="208" height="116" fill="url(#mt-sw-light)" />
        <line x1="28" y1="110" x2="212" y2="110" stroke="#5e7067" strokeWidth="2" />
        <rect x="16" y="12" width="208" height="116" fill="none" stroke="rgba(241,243,239,0.18)" />
        <text
          x="22"
          y="124"
          fill="#f1f3ef"
          fontFamily="var(--mt-sans), sans-serif"
          fontSize="7.5"
          letterSpacing="1.5"
        >
          SOFT LIGHT / 3000K
        </text>
      </svg>
    );
  }

  return (
    <svg
      className="mt-swatch"
      viewBox="0 0 240 140"
      role="img"
      aria-label="Illustration of uncoated 120 gsm warm white paper with letterpress imprint."
    >
      <rect width="240" height="140" fill="#f8f6f2" />
      <rect x="16" y="12" width="208" height="116" rx="1" fill="#fbf9f4" stroke="#d5e2da" strokeWidth="0.8" />
      <g fill="#1c1d1a" fontFamily="var(--mt-sans), sans-serif" fontSize="7" letterSpacing="1.2">
        <text x="28" y="36">MODERN TOBACCO</text>
        <text x="28" y="50" fontSize="6">FICTIONAL · ADULTS 18+</text>
        <text x="28" y="72">INDEX 01 · THE TIN</text>
        <text x="28" y="86">STEEL · 50G · NEUTRAL</text>
        <text x="28" y="100">NO SALES · NO CLAIMS</text>
      </g>
      <text
        x="22"
        y="124"
        fill="#5e7067"
        fontFamily="var(--mt-sans), sans-serif"
        fontSize="7"
        letterSpacing="1.5"
      >
        NEUTRAL PAPER / LETTERPRESS
      </text>
    </svg>
  );
}