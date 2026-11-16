/**
 * Velocity Studio - procedural artwork.
 *
 * Inline SVG only: a layered aero contour study, a plan-view pressure
 * diagram that responds to the selected mode, and three surface swatches.
 * No WebGL, no images, no video.
 */

export type AeroModeId = "road" | "aero" | "low";

export function VelocityMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 6.5 L11 12 L3 17.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 6.5 L18 12 L10 17.5" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
      <path d="M17 8.6 L21.4 12 L17 15.4" stroke="currentColor" strokeWidth="1.4" opacity="0.3" />
    </svg>
  );
}

const shellPath =
  "M 104 416 C 102 396 114 382 138 376 L 258 358 C 306 350 338 332 366 312 L 430 262 C 448 248 470 241 496 240 L 584 241 C 622 243 650 255 676 276 L 722 316 C 764 330 810 336 846 342 C 868 346 880 358 878 376 L 872 428 L 104 428 Z";

function Wheel({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="78" fill="#080607" stroke="rgba(245,236,235,0.18)" strokeWidth="1.4" />
      <circle cx={cx} cy={cy} r="68" fill="none" stroke="rgba(245,236,235,0.07)" />
      <circle cx={cx} cy={cy} r="54" fill="none" stroke="rgba(228,95,88,0.34)" />
      <circle cx={cx} cy={cy} r="46" fill="#171214" stroke="rgba(245,236,235,0.16)" />
      {Array.from({ length: 8 }, (_, index) => {
        const angle = (index / 8) * Math.PI * 2 - Math.PI / 2;
        return (
          <line
            key={index}
            x1={cx + Math.cos(angle) * 12}
            y1={cy + Math.sin(angle) * 12}
            x2={cx + Math.cos(angle) * 43}
            y2={cy + Math.sin(angle) * 43}
            stroke="#cbb6b3"
            strokeWidth="2.4"
            opacity="0.72"
          />
        );
      })}
      <path
        d={`M ${cx - 24} ${cy - 24} A 34 34 0 0 1 ${cx - 4} ${cy - 33}`}
        fill="none"
        stroke="#e45f58"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r="10" fill="#0b0809" stroke="#e45f58" strokeWidth="1" />
      <circle cx={cx} cy={cy} r="2.4" fill="#e45f58" />
    </g>
  );
}

export function AeroStudy() {
  return (
    <svg
      className="vs-aero-study"
      viewBox="0 0 900 620"
      role="img"
      aria-label="An illustrative low performance car drawn as layered aero contours, with streamlines and a directional red light."
    >
      <defs>
        <radialGradient id="vs-halo" cx="64%" cy="24%" r="62%">
          <stop offset="0%" stopColor="#e45f58" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#7c2b2a" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#080607" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="vs-beam" x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#f07b73" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#f07b73" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="vs-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a3a3c" />
          <stop offset="42%" stopColor="#241b1d" />
          <stop offset="100%" stopColor="#110d0e" />
        </linearGradient>
        <linearGradient id="vs-glass" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#3a2426" />
          <stop offset="58%" stopColor="#140e10" />
          <stop offset="100%" stopColor="#2a1a1c" />
        </linearGradient>
        <linearGradient id="vs-red-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e45f58" stopOpacity="0" />
          <stop offset="40%" stopColor="#f07b73" />
          <stop offset="100%" stopColor="#e45f58" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="vs-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <filter id="vs-glow" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="vs-frame-clip">
          <rect width="900" height="620" />
        </clipPath>
      </defs>

      <rect width="900" height="620" fill="#080607" />
      <rect width="900" height="620" fill="url(#vs-halo)" />
      <path d="M 520 -40 L 940 -40 L 700 660 L 300 660 Z" fill="url(#vs-beam)" />

      {/* Studio grid */}
      <g stroke="rgba(245,236,235,0.045)">
        {Array.from({ length: 15 }, (_, index) => (
          <line key={`v-${index}`} x1={index * 64} y1="0" x2={index * 64} y2="620" />
        ))}
        {Array.from({ length: 10 }, (_, index) => (
          <line key={`h-${index}`} x1="0" y1={index * 64} x2="900" y2={index * 64} />
        ))}
      </g>

      {/* Floor */}
      <ellipse cx="480" cy="486" rx="380" ry="26" fill="url(#vs-shadow)" />
      <line x1="56" y1="480" x2="844" y2="480" stroke="rgba(245,236,235,0.16)" />
      <g stroke="rgba(245,236,235,0.12)">
        {Array.from({ length: 17 }, (_, index) => (
          <line key={index} x1={56 + index * 49.25} y1="480" x2={56 + index * 49.25} y2={index % 4 === 0 ? 490 : 485} />
        ))}
      </g>

      <g clipPath="url(#vs-frame-clip)">
        {/* Layered contours */}
        {[3, 2, 1].map((layer) => (
          <path
            key={layer}
            d={shellPath}
            transform={`translate(${layer * 13} ${layer * -9})`}
            fill="none"
            stroke={layer === 1 ? "rgba(228,95,88,0.5)" : "rgba(245,236,235,0.15)"}
            strokeWidth={layer === 1 ? 1.4 : 1}
            opacity={0.5 + layer * 0.14}
          />
        ))}

        {/* Streamlines */}
        <g className="vs-streams" fill="none">
          <path d="M 62 206 C 250 194 470 192 690 206 C 760 210 810 216 858 226" stroke="rgba(245,236,235,0.16)" strokeDasharray="3 9" className="vs-dash" />
          <path d="M 62 244 C 260 226 520 214 838 236" stroke="rgba(228,95,88,0.5)" strokeDasharray="8 10" className="vs-dash vs-dash--red" />
          <path d="M 62 310 C 230 300 340 290 430 268 C 520 246 640 238 842 260" stroke="rgba(245,236,235,0.12)" strokeDasharray="2 8" className="vs-dash" />
          <path d="M 62 350 C 210 344 330 334 454 300 C 570 268 710 280 852 310" stroke="rgba(245,236,235,0.08)" strokeDasharray="2 10" className="vs-dash" />
          <path d="M 62 388 C 240 386 430 372 640 354 C 720 348 800 350 856 358" stroke="rgba(228,95,88,0.24)" strokeDasharray="6 12" className="vs-dash" />
        </g>

        {/* Rear wing */}
        <g>
          <path d="M 88 292 C 122 284 160 283 202 286 L 204 300 C 158 296 122 298 90 306 Z" fill="#1c1517" stroke="rgba(245,236,235,0.34)" />
          <path d="M 104 300 L 110 348 M 188 299 L 180 344" stroke="rgba(245,236,235,0.24)" strokeWidth="2" />
          <path d="M 92 288 C 130 280 164 279 202 282" fill="none" stroke="#e45f58" strokeWidth="1.6" opacity="0.8" />
        </g>

        {/* Body */}
        <g>
          <circle cx="268" cy="424" r="92" fill="#080607" />
          <circle cx="744" cy="424" r="92" fill="#080607" />
          <path d={shellPath} fill="url(#vs-body)" stroke="rgba(245,236,235,0.32)" strokeWidth="1.2" />
          <path
            d="M 138 376 L 258 358 C 306 350 338 332 366 312 L 430 262 C 448 248 470 241 496 240 L 584 241 C 622 243 650 255 676 276 L 722 316"
            fill="none"
            stroke="rgba(240,123,115,0.55)"
            strokeWidth="1.3"
          />
          <path
            d="M 176 390 C 320 380 470 374 640 380 C 740 384 820 390 874 398"
            fill="none"
            stroke="rgba(245,236,235,0.16)"
          />
          <path d="M 224 418 H 808" stroke="rgba(8,6,7,0.5)" strokeWidth="1.4" />

          {/* Glass */}
          <path
            d="M 438 306 L 506 258 C 520 248 534 244 550 243 L 580 244 C 606 247 628 258 646 274 L 682 306 Z"
            fill="url(#vs-glass)"
            stroke="rgba(238,196,192,0.4)"
            strokeWidth="1.2"
          />
          <path d="M 486 306 L 526 266 L 552 262 L 506 306 Z" fill="#f5eceb" opacity="0.06" />
          <path d="M 604 264 L 634 292 L 664 306 L 636 306 L 596 271 Z" fill="#f5eceb" opacity="0.045" />
          <path d="M 430 306 H 690" stroke="rgba(238,196,192,0.24)" />

          {/* Door and detail */}
          <path d="M 470 310 C 466 348 466 388 472 424" fill="none" stroke="rgba(8,6,7,0.5)" strokeWidth="1.2" />
          <path d="M 706 312 C 700 352 702 392 708 426" fill="none" stroke="rgba(8,6,7,0.5)" strokeWidth="1.2" />
          <rect x="640" y="340" width="30" height="7" rx="3.5" fill="#3a2a2c" stroke="rgba(245,236,235,0.24)" />
          <path d="M 758 300 L 786 292 L 796 302 L 778 312 L 762 308 Z" fill="#2a2022" stroke="rgba(245,236,235,0.3)" />
          <path d="M 800 358 L 832 354 L 838 368 L 806 372 Z" fill="#0c090a" stroke="rgba(228,95,88,0.36)" />

          {/* Lights */}
          <path d="M 846 342 C 864 346 874 354 876 366 L 870 374 C 858 364 846 358 834 356 Z" fill="#f07b73" filter="url(#vs-glow)" />
          <path d="M 108 386 L 152 382 L 154 394 L 110 398 Z" fill="#e45f58" filter="url(#vs-glow)" opacity="0.9" />
          <path d="M 108 404 H 160" stroke="rgba(240,123,115,0.5)" strokeWidth="1.2" />

          {/* Splitter and diffuser */}
          <path d="M 832 424 H 882 L 874 440 H 826 Z" fill="#0c090a" stroke="rgba(228,95,88,0.42)" />
          <path d="M 104 428 H 168 L 162 444 H 110 Z" fill="#0c090a" stroke="rgba(245,236,235,0.18)" />
          {Array.from({ length: 5 }, (_, index) => (
            <line key={index} x1={114 + index * 10} y1="430" x2={110 + index * 10} y2="442" stroke="rgba(228,95,88,0.34)" />
          ))}
        </g>

        <Wheel cx={268} cy={424} />
        <Wheel cx={744} cy={424} />
      </g>

      {/* Direction arrow */}
      <g filter="url(#vs-glow)">
        <path d="M 70 114 H 250" stroke="url(#vs-red-line)" strokeWidth="1.6" />
        <path d="M 250 114 L 238 108 V 120 Z" fill="#f07b73" />
        <path d="M 70 136 H 196" stroke="rgba(228,95,88,0.4)" strokeWidth="1" />
      </g>

      {/* Labels */}
      <g fill="#b6a5a4" fontFamily="var(--vs-display), system-ui, sans-serif" fontSize="9" letterSpacing="2.2">
        <text x="40" y="44">VELOCITY STUDIO / AERO 01</text>
        <text x="860" y="44" textAnchor="end">CONTOUR SECTION / REV C</text>
        <text x="40" y="592">ILLUSTRATIVE — NOT A PRODUCTION VEHICLE</text>
        <text x="860" y="592" textAnchor="end">DIRECTIONAL LIGHT / SIGNAL RED</text>
      </g>
      <g fill="#e45f58" fontFamily="var(--vs-display), system-ui, sans-serif" fontSize="8" letterSpacing="1.8">
        <text x="40" y="60">SAMPLE STUDY</text>
        <text x="860" y="60" textAnchor="end">FLOW →</text>
      </g>

      {/* Frame */}
      <g fill="none" stroke="rgba(245,236,235,0.2)" strokeWidth="1">
        <path d="M 24 24 H 60 M 24 24 V 60" />
        <path d="M 876 24 H 840 M 876 24 V 60" />
        <path d="M 24 596 H 60 M 24 596 V 560" />
        <path d="M 876 596 H 840 M 876 596 V 560" />
      </g>
    </svg>
  );
}

const wingByMode: Record<AeroModeId, { front: number; rear: number; pressure: number }> = {
  road: { front: 6, rear: 4, pressure: 0.22 },
  aero: { front: 20, rear: 24, pressure: 0.5 },
  low: { front: 2, rear: 2, pressure: 0.14 },
};

export function AeroPlan({ mode }: { mode: AeroModeId }) {
  const wing = wingByMode[mode];
  const label = mode === "aero" ? "AERO" : mode === "low" ? "LOW DRAG" : "ROAD";

  return (
    <svg
      className="vs-plan"
      viewBox="0 0 760 440"
      role="img"
      aria-label={`Illustrative plan view of the aero study in ${label.toLowerCase()} mode, with flow lines and pressure zones.`}
    >
      <defs>
        <radialGradient id="vs-plan-halo" cx="58%" cy="46%" r="58%">
          <stop offset="0%" stopColor="#e45f58" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#080607" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="vs-plan-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#241a1c" />
          <stop offset="55%" stopColor="#332326" />
          <stop offset="100%" stopColor="#1a1214" />
        </linearGradient>
      </defs>

      <rect width="760" height="440" fill="#0b0809" />
      <rect width="760" height="440" fill="url(#vs-plan-halo)" />
      <g stroke="rgba(245,236,235,0.045)">
        {Array.from({ length: 19 }, (_, index) => (
          <line key={`v-${index}`} x1={index * 40} y1="0" x2={index * 40} y2="440" />
        ))}
        {Array.from({ length: 11 }, (_, index) => (
          <line key={`h-${index}`} x1="0" y1={index * 40} x2="760" y2={index * 40} />
        ))}
      </g>

      {/* Flow lines */}
      <g fill="none" className="vs-plan-flow">
        {[126, 164, 202, 238, 276, 314].map((y, index) => (
          <path
            key={y}
            d={`M 36 ${y} C 150 ${y - 8} 250 ${y - 6} 360 ${y} C 470 ${y + 6} 560 ${y + 4} 716 ${y - (index % 2 === 0 ? 6 : 2)}`}
            stroke={index === 2 || index === 3 ? "rgba(228,95,88,0.4)" : "rgba(245,236,235,0.12)"}
            strokeDasharray={index === 2 || index === 3 ? "7 9" : "2 9"}
            className={index === 2 || index === 3 ? "vs-dash vs-dash--red" : "vs-dash"}
          />
        ))}
      </g>

      {/* Pressure zones */}
      <ellipse cx="270" cy="220" rx="150" ry="58" fill="#e45f58" opacity={wing.pressure * 0.22} />
      <ellipse cx="322" cy="220" rx="82" ry="36" fill="#f07b73" opacity={wing.pressure * 0.18} />

      {/* Body */}
      <path
        d="M 152 200 C 154 184 166 174 184 172 L 512 164 C 542 163 566 170 588 184 L 636 214 C 648 222 652 230 652 240 C 652 250 646 258 634 264 L 586 288 C 564 300 540 306 512 306 L 184 300 C 166 298 154 288 152 272 Z"
        fill="url(#vs-plan-body)"
        stroke="rgba(245,236,235,0.34)"
        strokeWidth="1.2"
      />
      <ellipse cx="448" cy="236" rx="72" ry="38" fill="#0e0a0b" stroke="rgba(238,196,192,0.32)" />
      <ellipse cx="448" cy="236" rx="52" ry="24" fill="none" stroke="rgba(245,236,235,0.1)" />
      <path d="M 172 236 H 604" stroke="rgba(245,236,235,0.1)" strokeDasharray="3 7" />

      {/* Wheels */}
      <g fill="#0c090a" stroke="rgba(245,236,235,0.24)">
        <rect x="302" y="138" width="66" height="28" rx="12" />
        <rect x="302" y="294" width="66" height="28" rx="12" />
        <rect x="528" y="146" width="58" height="24" rx="10" />
        <rect x="528" y="290" width="58" height="24" rx="10" />
      </g>
      <g stroke="rgba(228,95,88,0.35)">
        <line x1="310" y1="148" x2="360" y2="156" />
        <line x1="310" y1="312" x2="360" y2="304" />
        <line x1="536" y1="154" x2="578" y2="162" />
        <line x1="536" y1="306" x2="578" y2="298" />
      </g>

      {/* Rear wing (left) */}
      <g>
        <path
          d={`M 112 ${198 - wing.rear * 0.6} C 126 ${192 - wing.rear * 0.6} 148 ${190 - wing.rear * 0.6} 168 ${192 - wing.rear * 0.6} L 168 ${284 + wing.rear * 0.6} C 148 ${286 + wing.rear * 0.6} 126 ${284 + wing.rear * 0.6} 112 ${278 + wing.rear * 0.6} Z`}
          fill="rgba(228,95,88,0.08)"
          stroke="rgba(228,95,88,0.5)"
        />
        <path
          d={`M 112 ${198 - wing.rear * 0.6} L 168 ${192 - wing.rear * 0.6} M 112 ${278 + wing.rear * 0.6} L 168 ${284 + wing.rear * 0.6}`}
          stroke="rgba(240,123,115,0.6)"
        />
      </g>

      {/* Front splitter (right) */}
      <g>
        <path
          d={`M 626 ${204 - wing.front * 0.5} C 646 ${200 - wing.front * 0.5} 668 ${202 - wing.front * 0.5} 682 ${208 - wing.front * 0.5} L 682 ${272 + wing.front * 0.5} C 668 ${278 + wing.front * 0.5} 646 ${280 + wing.front * 0.5} 626 ${276 + wing.front * 0.5} Z`}
          fill="rgba(228,95,88,0.07)"
          stroke="rgba(228,95,88,0.46)"
        />
      </g>

      {/* Wake */}
      <g fill="none" stroke="rgba(228,95,88,0.22)">
        <path d="M 112 190 C 72 194 44 206 24 220" strokeDasharray="4 7" className="vs-dash" />
        <path d="M 112 288 C 72 284 44 272 24 258" strokeDasharray="4 7" className="vs-dash" />
      </g>

      {/* Labels */}
      <g fill="#b6a5a4" fontFamily="var(--vs-display), system-ui, sans-serif" fontSize="8.5" letterSpacing="2">
        <text x="24" y="32">PRESSURE PLAN / {label}</text>
        <text x="736" y="32" textAnchor="end">PLAN VIEW · NOT TO SCALE</text>
        <text x="24" y="414">FRONT →</text>
        <text x="736" y="414" textAnchor="end">SAMPLE · ILLUSTRATIVE</text>
      </g>
      <g fill="#e45f58" fontFamily="var(--vs-display), system-ui, sans-serif" fontSize="7.5" letterSpacing="1.6">
        <text x="380" y="48" textAnchor="middle">FLOW</text>
        <text x="24" y="48">01</text>
        <text x="736" y="48" textAnchor="end">03</text>
      </g>
    </svg>
  );
}

export function MaterialSwatch({ variant }: { variant: "carbon" | "signal" | "tunnel" }) {
  if (variant === "carbon") {
    return (
      <svg
        className="vs-swatch"
        viewBox="0 0 220 160"
        role="img"
        aria-label="Illustration of a carbon twill surface with one red thread."
      >
        <defs>
          <pattern id="vs-carbon-weave" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="#141011" />
            <path d="M 0 0 H 8 V 8 H 0 Z" fill="#221a1c" />
            <path d="M 8 8 H 16 V 16 H 8 Z" fill="#221a1c" />
            <path d="M 8 0 H 16 V 8 H 8 Z" fill="#1a1416" />
            <path d="M 0 8 H 8 V 16 H 0 Z" fill="#1a1416" />
          </pattern>
          <linearGradient id="vs-carbon-light" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f5eceb" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#f5eceb" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="220" height="160" fill="url(#vs-carbon-weave)" />
        <rect width="220" height="160" fill="url(#vs-carbon-light)" />
        <path d="M 34 148 L 164 16" stroke="#e45f58" strokeWidth="1.2" opacity="0.8" />
        <path d="M 44 152 L 174 20" stroke="rgba(228,95,88,0.28)" strokeWidth="1" />
        <path d="M 22 132 L 132 22 M 60 150 L 198 12" stroke="rgba(245,236,235,0.1)" strokeWidth="0.8" />
        <text x="18" y="26" fill="#d9c9c7" fontFamily="var(--vs-display), sans-serif" fontSize="6.5" letterSpacing="1.6">
          CARBON / TWILL
        </text>
        <text x="202" y="148" textAnchor="end" fill="#b6a5a4" fontFamily="var(--vs-display), sans-serif" fontSize="6.5" letterSpacing="1.4">
          SAMPLE
        </text>
      </svg>
    );
  }

  if (variant === "signal") {
    return (
      <svg
        className="vs-swatch"
        viewBox="0 0 220 160"
        role="img"
        aria-label="Illustration of a directional signal-red light passing across a dark surface."
      >
        <defs>
          <linearGradient id="vs-signal-beam" x1="0" y1="0" x2="1" y2="0.6">
            <stop offset="0%" stopColor="#e45f58" stopOpacity="0" />
            <stop offset="44%" stopColor="#f07b73" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#e45f58" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="vs-signal-core" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f5eceb" stopOpacity="0" />
            <stop offset="50%" stopColor="#f5eceb" stopOpacity="0.76" />
            <stop offset="100%" stopColor="#f5eceb" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="220" height="160" fill="#0d0a0b" />
        <g stroke="rgba(245,236,235,0.05)">
          {Array.from({ length: 7 }, (_, index) => (
            <line key={index} x1={index * 32} y1="0" x2={index * 32} y2="160" />
          ))}
        </g>
        <path d="M 0 118 L 220 54 L 220 160 L 0 160 Z" fill="#1c1012" />
        <path d="M -20 106 L 230 40 L 230 78 L -20 144 Z" fill="url(#vs-signal-beam)" />
        <path d="M -10 116 L 222 56" stroke="url(#vs-signal-core)" strokeWidth="1.4" />
        <path d="M 0 132 L 220 70" stroke="rgba(240,123,115,0.3)" strokeWidth="1" />
        <g fill="#f07b73">
          <circle cx="178" cy="66" r="2" />
          <circle cx="148" cy="76" r="1.5" opacity="0.7" />
          <circle cx="108" cy="91" r="1.3" opacity="0.5" />
        </g>
        <text x="18" y="26" fill="#d9c9c7" fontFamily="var(--vs-display), sans-serif" fontSize="6.5" letterSpacing="1.6">
          SIGNAL / RED
        </text>
        <text x="202" y="148" textAnchor="end" fill="#b6a5a4" fontFamily="var(--vs-display), sans-serif" fontSize="6.5" letterSpacing="1.4">
          DIRECTIONAL
        </text>
      </svg>
    );
  }

  return (
    <svg
      className="vs-swatch"
      viewBox="0 0 220 160"
      role="img"
      aria-label="Illustration of wind-tunnel streamlines passing over a low car silhouette."
    >
      <defs>
        <linearGradient id="vs-tunnel-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f5eceb" stopOpacity="0" />
          <stop offset="50%" stopColor="#f5eceb" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f5eceb" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="220" height="160" fill="#0b090a" />
      <g stroke="rgba(245,236,235,0.05)">
        {Array.from({ length: 8 }, (_, index) => (
          <line key={index} x1={index * 28} y1="0" x2={index * 28} y2="160" />
        ))}
      </g>
      <path
        d="M 28 104 C 40 96 56 92 76 92 L 106 82 C 118 77 132 76 144 76 L 176 78 C 188 81 196 88 202 98 L 208 112 L 28 112 Z"
        fill="#1a1416"
        stroke="rgba(245,236,235,0.22)"
      />
      <g fill="none" strokeWidth="1">
        <path d="M 0 66 C 40 60 74 60 104 56 C 136 52 172 48 220 52" stroke="rgba(228,95,88,0.5)" strokeDasharray="5 6" className="vs-dash vs-dash--red" />
        <path d="M 0 82 C 48 76 86 74 122 70 C 160 66 192 64 220 66" stroke="rgba(245,236,235,0.24)" strokeDasharray="2 7" className="vs-dash" />
        <path d="M 0 96 C 52 90 92 90 128 86 C 164 82 192 82 220 84" stroke="url(#vs-tunnel-fade)" strokeDasharray="3 8" className="vs-dash" />
        <path d="M 0 124 C 40 118 82 120 116 114 C 152 108 188 110 220 116" stroke="rgba(245,236,235,0.16)" strokeDasharray="2 8" className="vs-dash" />
        <path d="M 0 140 C 54 134 98 136 136 130 C 172 124 196 126 220 130" stroke="rgba(228,95,88,0.2)" strokeDasharray="4 9" className="vs-dash" />
      </g>
      <g fill="none" stroke="rgba(240,123,115,0.42)">
        <path d="M 106 82 C 118 88 128 94 132 108" />
        <path d="M 176 78 C 168 88 164 98 166 110" />
      </g>
      <text x="18" y="26" fill="#d9c9c7" fontFamily="var(--vs-display), sans-serif" fontSize="6.5" letterSpacing="1.6">
        TUNNEL / FLOW
      </text>
      <text x="202" y="148" textAnchor="end" fill="#b6a5a4" fontFamily="var(--vs-display), sans-serif" fontSize="6.5" letterSpacing="1.4">
        SAMPLE
      </text>
    </svg>
  );
}
