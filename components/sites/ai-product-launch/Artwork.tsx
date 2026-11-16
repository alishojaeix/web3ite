/**
 * AI Product Launch - procedural launch artwork.
 *
 * Inline SVG only: no WebGL, no image payload. The light is static and the one
 * animation (a slow seam pulse) is disabled by `prefers-reduced-motion`.
 */

export function PrismMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2.5 L21.5 20.5 H2.5 Z" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <path d="M12 7.5 L17.5 18 H6.5 Z" stroke="currentColor" strokeWidth="1" />
      <path d="M12 2.5 V20.5" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <circle cx="12" cy="13.5" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function PrismStage() {
  return (
    <svg
      className="la-stage"
      viewBox="0 0 1200 780"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="A cinematic render of the Prism 01: a tall smoked-glass monolith with a warm light seam, standing on a dark plinth under a single spotlight."
    >
      <defs>
        <radialGradient id="la-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0c487" stopOpacity="0.32" />
          <stop offset="42%" stopColor="#9b6d34" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#09090b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="la-spot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0c487" stopOpacity="0.2" />
          <stop offset="52%" stopColor="#f0c487" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#f0c487" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="la-glass" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#f7f0e6" stopOpacity="0.16" />
          <stop offset="34%" stopColor="#8d7a67" stopOpacity="0.08" />
          <stop offset="62%" stopColor="#f0c487" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#21160e" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="la-edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f7f0e6" stopOpacity="0.55" />
          <stop offset="18%" stopColor="#f7f0e6" stopOpacity="0.12" />
          <stop offset="82%" stopColor="#f0c487" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#f0c487" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="la-core" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7e3c6" stopOpacity="0.9" />
          <stop offset="46%" stopColor="#f0c487" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#9b6d34" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="la-plinth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2622" />
          <stop offset="100%" stopColor="#0c0b0d" />
        </linearGradient>
        <filter id="la-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
        <filter id="la-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
        <pattern id="la-grain" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.55" fill="rgba(247,240,230,0.05)" />
        </pattern>
      </defs>

      <rect width="1200" height="780" fill="#08080a" />
      <rect width="1200" height="780" fill="url(#la-grain)" />

      {/* Spotlight cone */}
      <path d="M 556 0 H 644 L 900 660 H 300 Z" fill="url(#la-spot)" />
      <ellipse cx="600" cy="430" rx="390" ry="300" fill="url(#la-halo)" />
      <ellipse cx="600" cy="640" rx="330" ry="54" fill="#f0c487" opacity="0.05" filter="url(#la-soft)" />

      {/* Stage */}
      <ellipse cx="600" cy="642" rx="348" ry="58" fill="none" stroke="rgba(247,240,230,0.14)" />
      <ellipse cx="600" cy="642" rx="286" ry="44" fill="none" stroke="rgba(247,240,230,0.08)" strokeDasharray="2 8" />
      <line x1="72" y1="642" x2="1128" y2="642" stroke="rgba(247,240,230,0.1)" />
      <g stroke="rgba(247,240,230,0.24)" strokeWidth="1">
        {Array.from({ length: 41 }, (_, index) => {
          const x = 80 + index * 26;
          const major = index % 5 === 0;
          return (
            <line
              key={x}
              x1={x}
              y1="642"
              x2={x}
              y2={major ? 652 : 648}
              opacity={major ? 1 : 0.5}
            />
          );
        })}
      </g>

      {/* Plinth */}
      <path d="M 424 560 H 776 L 812 610 H 388 Z" fill="url(#la-plinth)" stroke="rgba(247,240,230,0.18)" />
      <path d="M 388 610 H 812 L 798 630 H 402 Z" fill="#0a090b" stroke="rgba(247,240,230,0.14)" />
      <line x1="424" y1="560" x2="776" y2="560" stroke="rgba(240,196,135,0.4)" />
      <line x1="438" y1="586" x2="762" y2="586" stroke="rgba(247,240,230,0.08)" />
      <circle cx="600" cy="600" r="4" fill="#f0c487" opacity="0.8" />

      {/* Prism body */}
      <g>
        <rect
          x="446"
          y="196"
          width="308"
          height="362"
          rx="22"
          fill="url(#la-glass)"
          stroke="url(#la-edge)"
        />
        <rect
          x="460"
          y="210"
          width="280"
          height="334"
          rx="16"
          fill="none"
          stroke="rgba(247,240,230,0.08)"
        />

        {/* Light seam and core */}
        <rect x="586" y="238" width="28" height="278" rx="14" fill="#f0c487" opacity="0.16" filter="url(#la-glow)" />
        <rect x="596" y="252" width="8" height="250" rx="4" fill="url(#la-core)" className="la-seam" />
        <rect x="490" y="424" width="220" height="104" rx="10" fill="#f0c487" opacity="0.08" filter="url(#la-glow)" />
        <rect x="506" y="440" width="188" height="72" rx="8" fill="none" stroke="rgba(240,196,135,0.26)" />
        <line x1="506" y1="462" x2="694" y2="462" stroke="rgba(240,196,135,0.18)" />
        <line x1="506" y1="488" x2="646" y2="488" stroke="rgba(247,240,230,0.14)" />
        <line x1="506" y1="502" x2="672" y2="502" stroke="rgba(247,240,230,0.1)" />

        {/* Bevels and reflections */}
        <path d="M 446 218 L 468 196 H 732 L 754 218" fill="none" stroke="rgba(247,240,230,0.34)" />
        <path d="M 446 558 H 754" stroke="rgba(240,196,135,0.35)" />
        <path d="M 466 196 L 466 540" stroke="rgba(247,240,230,0.2)" />
        <path d="M 730 196 L 730 540" stroke="rgba(240,196,135,0.16)" />
        <rect x="476" y="230" width="52" height="290" fill="rgba(247,240,230,0.035)" />
        <path d="M 490 240 L 512 218 H 548 L 490 276 Z" fill="rgba(247,240,230,0.06)" />
        <circle cx="600" cy="356" r="3" fill="#f7f0e6" opacity="0.7" />
      </g>

      {/* Annotations */}
      <g fill="none" stroke="rgba(247,240,230,0.28)" strokeWidth="1">
        <path d="M 368 288 H 424" />
        <path d="M 656 288 H 836" />
        <path d="M 830 372 H 912" />
        <path d="M 790 520 H 900" />
        <path d="M 246 520 H 416" />
      </g>

      <g fill="#b3a99c" fontFamily="var(--la-mono), ui-monospace, monospace" fontSize="10" letterSpacing="2.2">
        <text x="368" y="270" textAnchor="end">01 / PRISM</text>
        <text x="368" y="310" textAnchor="end" fontSize="8.5" fill="#766c60">GLASS + METAL</text>
        <text x="846" y="284">02 / INNER CORE</text>
        <text x="846" y="304" fontSize="8.5" fill="#766c60">LOCAL INFERENCE</text>
        <text x="920" y="368">03 / LIGHT SEAM</text>
        <text x="920" y="388" fontSize="8.5" fill="#766c60">SOLE INDICATOR</text>
        <text x="906" y="516">04 / PLINTH</text>
        <text x="906" y="536" fontSize="8.5" fill="#766c60">SERVICEABLE</text>
        <text x="240" y="516" textAnchor="end">PRISM 01</text>
        <text x="240" y="536" textAnchor="end" fontSize="8.5" fill="#766c60">FIRST EDITION</text>
      </g>

      <g fill="#f0c487" fontFamily="var(--la-mono), ui-monospace, monospace" fontSize="9" letterSpacing="2.4">
        <circle cx="430" cy="288" r="2.5" />
        <circle cx="838" cy="288" r="2.5" />
        <circle cx="912" cy="372" r="2.5" />
      </g>

      {/* Corner frame */}
      <g fill="none" stroke="rgba(247,240,230,0.2)" strokeWidth="1">
        <path d="M 30 30 H 72 M 30 30 V 72" />
        <path d="M 1170 30 H 1128 M 1170 30 V 72" />
        <path d="M 30 750 H 72 M 30 750 V 708" />
        <path d="M 1170 750 H 1128 M 1170 750 V 708" />
      </g>

      <g fill="#766c60" fontFamily="var(--la-mono), ui-monospace, monospace" fontSize="8.5" letterSpacing="1.8">
        <text x="30" y="700">PRISM 01 / STUDIO RENDER</text>
        <text x="1170" y="700" textAnchor="end">ILLUSTRATIVE · NOT A PRODUCT PHOTO</text>
      </g>
    </svg>
  );
}

export function SectionStack() {
  return (
    <svg
      className="la-stack"
      viewBox="0 0 520 440"
      role="img"
      aria-label="An exploded technical view of the Prism 01: glass shell, compute board and anodised base."
    >
      <g fill="none" stroke="rgba(247,240,230,0.4)" strokeWidth="1">
        <rect x="70" y="34" width="380" height="92" rx="10" />
        <rect x="70" y="174" width="380" height="92" rx="10" />
        <rect x="70" y="314" width="380" height="92" rx="10" />
        <line x1="260" y1="126" x2="260" y2="168" strokeDasharray="3 6" />
        <line x1="260" y1="266" x2="260" y2="308" strokeDasharray="3 6" />
      </g>

      <g fill="#b3a99c" fontFamily="var(--la-mono), ui-monospace, monospace" fontSize="9" letterSpacing="1.8">
        <text x="70" y="22">A / GLASS SHELL</text>
        <text x="450" y="22" textAnchor="end" fill="#766c60">SMOKED</text>
        <text x="70" y="162">B / COMPUTE BOARD</text>
        <text x="450" y="162" textAnchor="end" fill="#766c60">LOCAL</text>
        <text x="70" y="302">C / ANODISED BASE</text>
        <text x="450" y="302" textAnchor="end" fill="#766c60">SERVICEABLE</text>
      </g>

      {/* Glass shell */}
      <rect x="84" y="48" width="352" height="64" rx="6" fill="rgba(247,240,230,0.04)" stroke="rgba(247,240,230,0.18)" />
      <path d="M 100 68 H 420" stroke="rgba(247,240,230,0.12)" />
      <rect x="236" y="72" width="48" height="24" rx="4" fill="rgba(240,196,135,0.14)" stroke="rgba(240,196,135,0.4)" />
      <circle cx="260" cy="84" r="2.4" fill="#f0c487" />

      {/* Compute board */}
      <rect x="84" y="188" width="352" height="64" rx="6" fill="rgba(240,196,135,0.04)" stroke="rgba(240,196,135,0.22)" />
      <rect x="108" y="204" width="62" height="32" rx="3" fill="none" stroke="rgba(240,196,135,0.4)" />
      <rect x="184" y="204" width="62" height="32" rx="3" fill="none" stroke="rgba(247,240,230,0.22)" />
      <rect x="260" y="204" width="62" height="32" rx="3" fill="none" stroke="rgba(247,240,230,0.22)" />
      <rect x="336" y="204" width="62" height="32" rx="3" fill="none" stroke="rgba(247,240,230,0.22)" />
      <path d="M 108 252 H 398" stroke="rgba(247,240,230,0.14)" strokeDasharray="2 5" />
      <circle cx="139" cy="220" r="2" fill="#f0c487" />
      <circle cx="367" cy="220" r="2" fill="#b3a99c" />

      {/* Base */}
      <rect x="84" y="328" width="352" height="64" rx="6" fill="rgba(247,240,230,0.03)" stroke="rgba(247,240,230,0.18)" />
      <path d="M 108 360 H 390" stroke="rgba(247,240,230,0.14)" />
      {[126, 166, 206, 246, 286, 326, 366].map((x) => (
        <line key={x} x1={x} y1="342" x2={x} y2="374" stroke="rgba(247,240,230,0.1)" />
      ))}
      <circle cx="260" cy="360" r="3" fill="#f0c487" />

      <g fill="none" stroke="rgba(247,240,230,0.2)" strokeWidth="1">
        <path d="M 470 34 V 126" />
        <path d="M 464 34 H 476 M 464 126 H 476" />
        <path d="M 470 174 V 266" />
        <path d="M 464 174 H 476 M 464 266 H 476" />
        <path d="M 470 314 V 406" />
        <path d="M 464 314 H 476 M 464 406 H 476" />
      </g>
    </svg>
  );
}

type Swatch = "glass" | "metal" | "light";

function SwatchArt({ variant }: { variant: Swatch }) {
  if (variant === "glass") {
    return (
      <>
        <rect width="220" height="160" fill="#0c0b0e" />
        <path d="M 40 128 L 66 32 H 182 L 156 128 Z" fill="rgba(247,240,230,0.06)" stroke="rgba(247,240,230,0.28)" />
        <path d="M 66 32 L 156 128 M 182 32 L 92 128" stroke="rgba(247,240,230,0.12)" />
        <rect x="104" y="48" width="12" height="62" fill="#f0c487" opacity="0.5" />
        <path d="M 48 120 H 170" stroke="rgba(240,196,135,0.5)" />
      </>
    );
  }
  if (variant === "metal") {
    return (
      <>
        <rect width="220" height="160" fill="#141210" />
        <rect x="26" y="26" width="168" height="108" rx="8" fill="#211d19" stroke="rgba(247,240,230,0.2)" />
        {Array.from({ length: 28 }, (_, index) => (
          <line
            key={index}
            x1={30 + index * 6}
            y1="30"
            x2={30 + index * 6}
            y2="130"
            stroke={index % 4 === 0 ? "rgba(247,240,230,0.14)" : "rgba(247,240,230,0.05)"}
          />
        ))}
        <rect x="42" y="42" width="136" height="76" rx="4" fill="none" stroke="rgba(240,196,135,0.3)" />
      </>
    );
  }
  return (
    <>
      <rect width="220" height="160" fill="#0a090b" />
      <path d="M 110 0 L 198 160 H 22 Z" fill="#f0c487" opacity="0.1" />
      <ellipse cx="110" cy="118" rx="86" ry="30" fill="#f0c487" opacity="0.14" />
      <circle cx="110" cy="86" r="34" fill="#f0c487" opacity="0.18" />
      <circle cx="110" cy="86" r="34" fill="none" stroke="rgba(240,196,135,0.5)" />
      <circle cx="110" cy="86" r="2.6" fill="#f7f0e6" />
      <path d="M 40 148 H 180" stroke="rgba(240,196,135,0.3)" />
    </>
  );
}

export function MaterialSwatch({ variant }: { variant: Swatch }) {
  return (
    <svg
      className="la-swatch"
      viewBox="0 0 220 160"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <SwatchArt variant={variant} />
      <rect x="0.5" y="0.5" width="219" height="159" fill="none" stroke="rgba(247,240,230,0.16)" />
      <path d="M 10 10 H 26 M 10 10 V 26" fill="none" stroke="rgba(247,240,230,0.4)" />
      <path d="M 210 150 H 194 M 210 150 V 134" fill="none" stroke="rgba(247,240,230,0.4)" />
    </svg>
  );
}

export function BeamRule() {
  return (
    <svg
      className="la-rule"
      viewBox="0 0 1200 22"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="0" y1="11" x2="1200" y2="11" stroke="rgba(247,240,230,0.14)" />
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
            stroke={major ? "rgba(240,196,135,0.4)" : "rgba(247,240,230,0.18)"}
          />
        );
      })}
    </svg>
  );
}
