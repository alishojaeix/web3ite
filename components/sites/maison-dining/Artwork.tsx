/**
 * Inline artwork for Maison Dining.
 *
 * Every illustration is SVG so the site has no photography dependency and no
 * layout shift. Decorative light and shine animations are disabled under
 * prefers-reduced-motion in the stylesheet.
 */

export function ClocheScene() {
  return (
    <svg
      viewBox="0 0 1200 640"
      className="md-cloche"
      role="img"
      aria-labelledby="md-cloche-title md-cloche-desc"
    >
      <title id="md-cloche-title">A silver cloche on a linen table</title>
      <desc id="md-cloche-desc">
        A low pendant light hangs over a linen-covered table. A silver cloche,
        a wine glass and a lit candle sit on the table, with the dark dining
        room and an arched wall behind them.
      </desc>
      <defs>
        <linearGradient id="md-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#19110d" />
          <stop offset="0.55" stopColor="#120d0a" />
          <stop offset="1" stopColor="#0b0807" />
        </linearGradient>
        <radialGradient id="md-glow" cx="0.5" cy="0.28" r="0.62">
          <stop offset="0" stopColor="#e8b486" stopOpacity="0.32" />
          <stop offset="0.42" stopColor="#c47a5f" stopOpacity="0.12" />
          <stop offset="1" stopColor="#c47a5f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="md-cone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0c79c" stopOpacity="0.22" />
          <stop offset="0.7" stopColor="#c47a5f" stopOpacity="0.06" />
          <stop offset="1" stopColor="#c47a5f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="md-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5c5750" />
          <stop offset="0.18" stopColor="#c9c2b5" />
          <stop offset="0.38" stopColor="#8b8378" />
          <stop offset="0.54" stopColor="#eee6d8" />
          <stop offset="0.72" stopColor="#9b9285" />
          <stop offset="0.88" stopColor="#d4cabc" />
          <stop offset="1" stopColor="#6a6258" />
        </linearGradient>
        <linearGradient id="md-linen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#efe4d3" />
          <stop offset="0.62" stopColor="#d9cbb7" />
          <stop offset="1" stopColor="#b8a48d" />
        </linearGradient>
        <linearGradient id="md-table-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b7a48d" />
          <stop offset="1" stopColor="#7c6b58" />
        </linearGradient>
        <radialGradient id="md-flame" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff1c9" />
          <stop offset="0.35" stopColor="#ffc97a" stopOpacity="0.9" />
          <stop offset="1" stopColor="#e08a54" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1200" height="640" fill="url(#md-wall)" />
      <rect width="1200" height="640" fill="url(#md-glow)" />

      <g stroke="#f2e8dc" strokeOpacity="0.055" fill="none">
        <path d="M0 96 H1200 M0 156 H1200 M0 216 H1200" />
        <path d="M96 0 V640 M1104 0 V640" />
      </g>

      <g fill="none" stroke="#c9b8a5" strokeOpacity="0.22">
        <path d="M378 470 V154 c0-74 60-134 134-134 s134 60 134 134 V470" />
        <path d="M418 470 V162 c0-52 42-94 94-94 s94 42 94 94 V470" />
        <path d="M792 470 V196 c0-52 42-94 94-94 s94 42 94 94 V470" />
      </g>

      <g opacity="0.9">
        <path d="M600 0 V132" stroke="#c9b8a5" strokeOpacity="0.4" />
        <path d="M600 128 h-30 l30 54 l30-54z" fill="#201712" stroke="#c9b8a5" strokeOpacity="0.5" />
        <ellipse cx="600" cy="182" rx="64" ry="12" fill="#201712" stroke="#c9b8a5" strokeOpacity="0.35" />
        <ellipse cx="600" cy="182" rx="42" ry="7" fill="#f0c79c" opacity="0.42" />
        <circle cx="600" cy="186" r="76" fill="url(#md-flame)" className="md-light-glow" />
      </g>

      <path d="M600 186 L760 456 H440 Z" fill="url(#md-cone)" />

      <path d="M0 468 H1200 V640 H0Z" fill="#080605" />
      <path d="M92 432 H1108 V520 H92Z" fill="url(#md-linen)" />
      <path d="M92 520 H1108 V548 H92Z" fill="url(#md-table-edge)" />
      <path d="M92 432 H1108" stroke="#f7eddd" strokeOpacity="0.6" />
      <path d="M112 456 H1088" stroke="#7c6b58" strokeOpacity="0.16" strokeDasharray="2 9" />
      <path d="M132 548 V640 M1068 548 V640" stroke="#2a211a" strokeWidth="18" />
      <path d="M132 548 V640 M1068 548 V640" stroke="#4b3c2e" strokeWidth="1.5" />

      <g className="md-cloche-body">
        <ellipse cx="600" cy="454" rx="206" ry="26" fill="#3a2e23" opacity="0.6" />
        <ellipse cx="600" cy="446" rx="196" ry="24" fill="#e8dcc8" />
        <ellipse cx="600" cy="442" rx="178" ry="19" fill="#f6ecdc" />
        <ellipse cx="600" cy="444" rx="148" ry="14" fill="#cbbba5" />
        <path
          d="M454 442 A146 146 0 0 1 746 442 Z"
          fill="url(#md-silver)"
          stroke="#5a5349"
          strokeWidth="1.2"
        />
        <path
          d="M478 428 A122 122 0 0 1 676 352"
          fill="none"
          stroke="#fffaf0"
          strokeOpacity="0.6"
          strokeWidth="7"
          strokeLinecap="round"
          className="md-sheen"
        />
        <path
          d="M516 418 A100 100 0 0 1 720 420"
          fill="none"
          stroke="#3c352d"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <path d="M600 296 v30" stroke="#6a6258" strokeWidth="3" />
        <circle cx="600" cy="288" r="16" fill="url(#md-silver)" stroke="#5a5349" />
        <circle cx="600" cy="286" r="7" fill="#f4eddf" opacity="0.7" />
      </g>

      <g>
        <path d="M318 442 a58 46 0 0 1 116 0z" fill="#1b1510" fillOpacity="0.5" />
        <path d="M330 438 a44 34 0 0 1 88 0" fill="none" stroke="#d8c9b4" strokeOpacity="0.5" />
        <path d="M374 442 v74" stroke="#d8c9b4" strokeOpacity="0.45" />
        <ellipse cx="374" cy="518" rx="26" ry="5" fill="#d8c9b4" fillOpacity="0.25" />
        <path d="M342 406 a32 32 0 0 1 64 0" fill="none" stroke="#fff6e8" strokeOpacity="0.3" />
      </g>

      <g>
        <ellipse cx="876" cy="438" rx="52" ry="12" fill="#1a1310" />
        <path d="M864 438 h24 v56 h-24z" fill="#efe2ce" />
        <path d="M864 438 h24" stroke="#c47a5f" strokeOpacity="0.6" />
        <path d="M876 438 v-14" stroke="#4a3c2e" />
        <path d="M876 422 c-7-8-2-16 0-22 c4 8 9 14 0 22z" fill="#ffd69a" />
        <circle cx="876" cy="414" r="34" fill="url(#md-flame)" className="md-candle-glow" />
      </g>

      <g fill="none" stroke="#d8c9b4" strokeOpacity="0.42" strokeWidth="1.2">
        <path d="M980 440 v78 M992 440 v78 M1004 440 v78 M1016 440 v78" />
        <path d="M980 440 c0-14 36-14 36 0" />
        <path d="M232 448 h50 v10 h-50z" strokeOpacity="0.3" />
        <path d="M246 448 v-6 M262 448 v-6" strokeOpacity="0.3" />
      </g>

      <g fontFamily="var(--font-display), sans-serif" fontSize="8.5" letterSpacing="3.2" fill="#d8c9b4">
        <text x="92" y="404">MAISON · TABLE 12</text>
        <text x="968" y="404" textAnchor="end">PARIS 1ER</text>
      </g>
      <g stroke="#c47a5f" strokeOpacity="0.5">
        <path d="M92 414 h36 M1072 414 h36" />
      </g>
    </svg>
  );
}

/** A measured plan of the dining room, drawn on paper. */
export function RoomPlan() {
  return (
    <svg
      viewBox="0 0 720 520"
      className="md-plan"
      role="img"
      aria-labelledby="md-plan-title md-plan-desc"
    >
      <title id="md-plan-title">Seating plan of the Maison dining room</title>
      <desc id="md-plan-desc">
        A twelve-seat room arranged around a central pass, with an entrance,
        a cellar and a small bar. The plan is illustrative and not to scale.
      </desc>
      <defs>
        <pattern id="md-plan-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#2a211a" strokeOpacity="0.08" />
        </pattern>
      </defs>
      <rect width="720" height="520" fill="#eee3d3" />
      <rect width="720" height="520" fill="url(#md-plan-grid)" />

      <g stroke="#2a211a" fill="none">
        <rect x="54" y="54" width="612" height="384" strokeWidth="2" />
        <path d="M54 438 V466 H666 V438" strokeWidth="1" strokeDasharray="4 6" />
      </g>

      <rect x="250" y="188" width="220" height="112" fill="#e3d4be" stroke="#2a211a" strokeWidth="1.5" />
      <path d="M250 220 H470 M250 252 H470 M250 284 H470" stroke="#2a211a" strokeOpacity="0.22" />
      <text
        x="360"
        y="240"
        textAnchor="middle"
        fontFamily="var(--font-display), sans-serif"
        fontSize="9"
        letterSpacing="3"
        fill="#2a211a"
      >
        THE PASS
      </text>
      <text
        x="360"
        y="258"
        textAnchor="middle"
        fontFamily="var(--font-body), sans-serif"
        fontSize="8"
        letterSpacing="1.2"
        fill="#6c5a48"
      >
        KITCHEN · 12 COVERS
      </text>
      <path d="M322 272 h76" stroke="#c47a5f" strokeWidth="2" />

      <g fill="#f6eddf" stroke="#2a211a" strokeWidth="1.2">
        <circle cx="250" cy="118" r="19" />
        <circle cx="360" cy="118" r="19" />
        <circle cx="470" cy="118" r="19" />
        <circle cx="250" cy="370" r="19" />
        <circle cx="360" cy="370" r="19" />
        <circle cx="470" cy="370" r="19" />
        <circle cx="168" cy="188" r="19" />
        <circle cx="168" cy="252" r="19" />
        <circle cx="168" cy="316" r="19" />
        <circle cx="552" cy="188" r="19" />
        <circle cx="552" cy="252" r="19" />
        <circle cx="552" cy="316" r="19" />
      </g>

      <g fill="#2a211a" fontFamily="var(--font-body), sans-serif" fontSize="7" textAnchor="middle">
        <text x="250" y="121">01</text>
        <text x="360" y="121">02</text>
        <text x="470" y="121">03</text>
        <text x="250" y="373">04</text>
        <text x="360" y="373">05</text>
        <text x="470" y="373">06</text>
        <text x="168" y="191">07</text>
        <text x="168" y="255">08</text>
        <text x="168" y="319">09</text>
        <text x="552" y="191">10</text>
        <text x="552" y="255">11</text>
        <text x="552" y="319">12</text>
      </g>

      <g stroke="#2a211a" fill="none" strokeWidth="1.2">
        <rect x="70" y="70" width="54" height="42" />
        <path d="M70 91 H124" strokeDasharray="3 4" />
        <text
          x="97"
          y="86"
          textAnchor="middle"
          fontFamily="var(--font-display), sans-serif"
          fontSize="6.5"
          letterSpacing="1.6"
          fill="#2a211a"
        >
          CELLAR
        </text>
        <rect x="596" y="390" width="54" height="32" />
        <path d="M596 406 H650" strokeDasharray="3 4" />
        <text
          x="623"
          y="404"
          textAnchor="middle"
          fontFamily="var(--font-display), sans-serif"
          fontSize="6.5"
          letterSpacing="1.3"
          fill="#2a211a"
        >
          BAR
        </text>
      </g>

      <g stroke="#c47a5f" strokeWidth="1.4" fill="none">
        <path d="M360 438 V480" />
        <path d="M350 470 l10 10 l10-10" />
      </g>
      <text
        x="384"
        y="488"
        fontFamily="var(--font-body), sans-serif"
        fontSize="7.5"
        letterSpacing="1.4"
        fill="#6c5a48"
      >
        ENTRANCE · RUE DES ORFÈVRES
      </text>

      <g fontFamily="var(--font-display), sans-serif" fontSize="8" letterSpacing="2.4" fill="#2a211a">
        <text x="54" y="40">MAISON · DINING ROOM</text>
        <text x="666" y="40" textAnchor="end">GROUND FLOOR</text>
      </g>
      <g fontFamily="var(--font-body), sans-serif" fontSize="7" letterSpacing="1.2" fill="#6c5a48">
        <text x="54" y="504">ILLUSTRATIVE PLAN · NOT TO SCALE</text>
        <text x="666" y="504" textAnchor="end">12 COVERS · ONE SEATING</text>
      </g>
    </svg>
  );
}

/** A postcard map for the visit section. */
export function Carte() {
  return (
    <svg
      viewBox="0 0 640 440"
      className="md-carte"
      role="img"
      aria-labelledby="md-carte-title md-carte-desc"
    >
      <title id="md-carte-title">Postcard map to Maison Dining</title>
      <desc id="md-carte-desc">
        An illustrated map of the first arrondissement showing the Seine, Pont
        Neuf, the Louvre and a copper marker on Rue des Orfèvres.
      </desc>
      <rect width="640" height="440" fill="#eee3d3" />
      <g stroke="#2a211a" strokeOpacity="0.08">
        <path d="M0 88 H640 M0 176 H640 M0 264 H640 M0 352 H640" />
        <path d="M80 0 V440 M160 0 V440 M240 0 V440 M320 0 V440 M400 0 V440 M480 0 V440 M560 0 V440" />
      </g>

      <path d="M0 352 C120 332 210 372 320 354 C430 336 532 372 640 350 V440 H0Z" fill="#d8d2c0" />
      <path d="M0 352 C120 332 210 372 320 354 C430 336 532 372 640 350" fill="none" stroke="#2a211a" strokeOpacity="0.35" strokeWidth="1.5" />
      <path d="M0 376 C120 356 210 396 320 378 C430 360 532 396 640 374" fill="none" stroke="#2a211a" strokeOpacity="0.15" strokeDasharray="3 7" />
      <text
        x="86"
        y="410"
        fontFamily="var(--font-editorial), serif"
        fontSize="18"
        fontStyle="italic"
        fill="#4f5a58"
      >
        La Seine
      </text>

      <g fill="none" stroke="#2a211a" strokeOpacity="0.55">
        <path d="M0 240 H640" strokeWidth="2" />
        <path d="M250 88 V352" strokeWidth="2" />
        <path d="M74 120 H568" strokeDasharray="2 6" strokeOpacity="0.4" />
        <path d="M390 0 V352" strokeWidth="1.2" />
      </g>
      <text
        x="262"
        y="330"
        fontFamily="var(--font-display), sans-serif"
        fontSize="7"
        letterSpacing="2.2"
        fill="#6c5a48"
        transform="rotate(-90 262 330)"
      >
        RUE DES ORFÈVRES
      </text>

      <g fill="#e3d4be" stroke="#2a211a" strokeOpacity="0.4">
        <rect x="94" y="128" width="76" height="48" />
        <rect x="206" y="128" width="52" height="34" />
        <rect x="286" y="164" width="72" height="56" />
        <rect x="412" y="128" width="72" height="52" />
        <rect x="492" y="202" width="62" height="62" />
        <rect x="190" y="236" width="46" height="74" />
      </g>
      <text
        x="130"
        y="156"
        textAnchor="middle"
        fontFamily="var(--font-body), sans-serif"
        fontSize="7.5"
        letterSpacing="1.6"
        fill="#6c5a48"
      >
        LOUVRE
      </text>
      <text
        x="322"
        y="152"
        textAnchor="middle"
        fontFamily="var(--font-body), sans-serif"
        fontSize="7.5"
        letterSpacing="1.4"
        fill="#6c5a48"
      >
        PONT NEUF
      </text>

      <g>
        <path d="M344 236 C344 236 316 204 316 186 a28 28 0 0 1 56 0 c0 18-28 50-28 50z" fill="#c47a5f" />
        <circle cx="344" cy="186" r="10" fill="#eee3d3" />
        <circle cx="344" cy="186" r="26" fill="none" stroke="#c47a5f" strokeOpacity="0.45" strokeWidth="1.2" />
      </g>
      <text
        x="344"
        y="266"
        textAnchor="middle"
        fontFamily="var(--font-display), sans-serif"
        fontSize="9"
        letterSpacing="2.6"
        fill="#2a211a"
      >
        MAISON
      </text>
      <path d="M344 274 v18" stroke="#2a211a" strokeOpacity="0.5" />

      <g transform="translate(572 60)">
        <circle cx="0" cy="0" r="24" fill="none" stroke="#2a211a" strokeOpacity="0.35" />
        <path d="M0 -15 L5 9 L0 4 L-5 9Z" fill="#2a211a" fillOpacity="0.65" />
        <text
          x="0"
          y="24"
          textAnchor="middle"
          fontFamily="var(--font-display), sans-serif"
          fontSize="6.5"
          letterSpacing="1.4"
          fill="#6c5a48"
        >
          N
        </text>
      </g>

      <text
        x="32"
        y="44"
        fontFamily="var(--font-display), sans-serif"
        fontSize="8"
        letterSpacing="2.6"
        fill="#2a211a"
      >
        PARIS 1ER
      </text>
      <text
        x="608"
        y="414"
        textAnchor="end"
        fontFamily="var(--font-body), sans-serif"
        fontSize="7"
        letterSpacing="1.2"
        fill="#6c5a48"
      >
        NOT TO SCALE · ILLUSTRATIVE
      </text>
    </svg>
  );
}

/** A small ornament used beside section labels. */
export function Ornament() {
  return (
    <svg viewBox="0 0 64 16" className="md-ornament" aria-hidden="true" focusable="false">
      <path d="M0 8 H22 M42 8 H64" stroke="currentColor" strokeWidth="1" />
      <path d="M32 2 L38 8 L32 14 L26 8 Z" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="32" cy="8" r="1.6" fill="currentColor" />
    </svg>
  );
}
