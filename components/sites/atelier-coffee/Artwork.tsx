/**
 * Hand-drawn SVG artwork for the Atelier Coffee demo. Keeping the imagery as
 * inline vector art keeps the page fast, crisp at every size and independent
 * of third-party image hosts. The rooms and map are illustrative, not photos.
 */

export function PourOverArt() {
  return (
    <svg
      viewBox="0 0 620 780"
      className="at-hero-svg"
      role="img"
      aria-labelledby="at-pour-title at-pour-desc"
    >
      <title id="at-pour-title">یک ظرف شیشه‌ای دَم‌آوری و یک فنجان سرامیکی</title>
      <desc id="at-pour-desc"> تصویری از یک فیلتر دَم‌آوری روی ظرف شیشه‌ای، با فنجانی در سمت راست، بخار برخاسته و شاخه‌ای در گلدان کوچک. </desc>
      <defs>
        <linearGradient id="at-pour-bg" x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0" stopColor="#e9dfcd" />
          <stop offset="0.62" stopColor="#ddcfba" />
          <stop offset="1" stopColor="#cbb99f" />
        </linearGradient>
        <linearGradient id="at-pour-coffee" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8a5b38" />
          <stop offset="1" stopColor="#5a3821" />
        </linearGradient>
        <linearGradient id="at-pour-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.42" />
        </linearGradient>
        <pattern id="at-pour-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#8d7a60" strokeOpacity="0.13" />
        </pattern>
      </defs>

      <rect width="620" height="780" fill="url(#at-pour-bg)" />
      <rect width="620" height="780" fill="url(#at-pour-grid)" />
      <circle cx="160" cy="170" r="126" fill="#f1e7d5" opacity="0.55" />
      <circle cx="160" cy="170" r="86" fill="none" stroke="#b9a488" strokeOpacity="0.5" />

      {/* Branch in a small vase */}
      <g stroke="#5f6b52" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M112 602 C118 548 106 500 128 448" />
        <path d="M116 545 C88 525 76 500 80 474" />
        <path d="M122 510 C148 492 160 470 162 448" />
        <path d="M111 574 C86 562 70 546 60 524" />
      </g>
      <g fill="#6c795d">
        <ellipse cx="78" cy="474" rx="18" ry="8" transform="rotate(-38 78 474)" />
        <ellipse cx="162" cy="448" rx="17" ry="8" transform="rotate(28 162 448)" />
        <ellipse cx="60" cy="524" rx="16" ry="7" transform="rotate(-26 60 524)" />
        <ellipse cx="99" cy="500" rx="14" ry="7" transform="rotate(24 99 500)" />
        <ellipse cx="139" cy="470" rx="13" ry="6" transform="rotate(14 139 470)" />
        <ellipse cx="117" cy="468" rx="14" ry="6" transform="rotate(-8 117 468)" />
      </g>
      <path
        d="M96 596 h34 l-6 74 c-1 8-7 12-11 12s-10-4-11-12z"
        fill="#ede4d5"
        stroke="#6b5a45"
        strokeWidth="2"
      />

      {/* Counter */}
      <rect x="0" y="640" width="620" height="140" fill="#c6b298" />
      <path d="M0 640 H620" stroke="#7c6a52" strokeWidth="2" />
      <path d="M0 654 H620" stroke="#a88f70" strokeWidth="1" />
      <ellipse cx="310" cy="642" rx="150" ry="12" fill="#6b5a45" opacity="0.16" />

      {/* Carafe */}
      <g>
        <path
          d="M266 376 h88 v52 c0 20 30 34 44 54 20 29 28 72 28 118 v42 H194 v-42c0-46 8-89 28-118 14-20 44-34 44-54z"
          fill="url(#at-pour-glass)"
          stroke="#6b5a45"
          strokeWidth="2.4"
        />
        <path
          d="M208 604 h204 v38 H208z"
          fill="url(#at-pour-coffee)"
          opacity="0.9"
        />
        <path
          d="M218 508 c4 34 12 62 28 84 h128 c16-22 24-50 28-84-28-12-62-18-92-18s-64 6-92 18z"
          fill="url(#at-pour-coffee)"
          opacity="0.86"
        />
        <ellipse cx="310" cy="508" rx="92" ry="12" fill="#9a6a43" />
        <ellipse cx="310" cy="508" rx="76" ry="8" fill="#6f4527" opacity="0.55" />
        <path
          d="M396 470 c44 6 54 48 34 76 c-12 17-30 20-44 12"
          fill="none"
          stroke="#6b5a45"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path d="M266 376 a44 10 0 0 1 88 0" fill="none" stroke="#6b5a45" strokeWidth="2" />
        <path d="M286 392 v46" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="7" strokeLinecap="round" />
        <path d="M352 540 c-8 32-8 58 0 84" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M310 530 l14 14" stroke="#d8c7b0" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Dripper */}
      <g>
        <path
          d="M240 268 h140 l-34 104 h-72z"
          fill="#f1e9dc"
          stroke="#6b5a45"
          strokeWidth="2.2"
        />
        <path d="M252 276 h116 l-28 84 h-60z" fill="#e4d6c1" />
        <ellipse cx="310" cy="314" rx="42" ry="9" fill="#6f4b2f" />
        <ellipse cx="310" cy="311" rx="42" ry="9" fill="#8a5f3b" />
        <path d="M240 268 h140" stroke="#6b5a45" strokeWidth="3" />
        <path d="M282 356 h56" stroke="#6b5a45" strokeWidth="2" />
      </g>

      {/* Cup and saucer */}
      <g>
        <ellipse cx="476" cy="628" rx="82" ry="14" fill="#d8c8b1" />
        <ellipse cx="476" cy="625" rx="82" ry="14" fill="#efe6d7" stroke="#6b5a45" strokeWidth="2" />
        <path
          d="M424 548 h104 l-10 56 c-3 18-19 29-42 29s-39-11-42-29z"
          fill="#f4ecdf"
          stroke="#6b5a45"
          strokeWidth="2.2"
        />
        <ellipse cx="476" cy="548" rx="52" ry="12" fill="#f8f1e6" stroke="#6b5a45" strokeWidth="2" />
        <ellipse cx="476" cy="550" rx="43" ry="8" fill="#4a3324" />
        <path
          d="M528 560 c30 0 38 18 30 36 c-8 17-24 22-38 16"
          fill="none"
          stroke="#6b5a45"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path d="M450 578 c8 18 20 28 38 28" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="5" strokeLinecap="round" fill="none" />
      </g>

      {/* Steam */}
      <g fill="none" stroke="#f7efe2" strokeWidth="4" strokeLinecap="round" className="at-steam">
        <path d="M304 238 C286 212 318 196 302 168" />
        <path d="M330 242 C314 214 344 198 330 174" />
        <path d="M474 522 C460 500 486 486 472 462" />
      </g>

      {/* A few beans on the counter */}
      <g fill="#5e3d29">
        <ellipse cx="152" cy="672" rx="8" ry="5" transform="rotate(-18 152 672)" />
        <ellipse cx="174" cy="680" rx="8" ry="5" transform="rotate(12 174 680)" />
        <ellipse cx="196" cy="670" rx="7" ry="4.5" transform="rotate(-30 196 670)" />
      </g>
    </svg>
  );
}

/** A wide counter scene used in "The room". */
export function CounterArt() {
  return (
    <svg viewBox="0 0 560 400" role="img" aria-labelledby="at-counter-title">
      <title id="at-counter-title">تصویر پیشخوان قهوه با صندلی‌های کوتاه و آویز نوری</title>
      <defs>
        <linearGradient id="at-counter-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e7ddcc" />
          <stop offset="1" stopColor="#d3c4ae" />
        </linearGradient>
      </defs>
      <rect width="560" height="400" fill="url(#at-counter-bg)" />
      <path d="M0 286 H560" stroke="#bfae96" strokeWidth="2" />
      <rect x="56" y="44" width="168" height="152" fill="#eee6d7" stroke="#7a6a53" strokeWidth="2" />
      <path d="M140 44 V196 M56 120 H224" stroke="#7a6a53" strokeWidth="1.5" />
      <path d="M56 196 l-34 90 h120 l-34-90" fill="#f6efdf" opacity="0.55" />
      <path d="M224 196 l34 90 h-112 l34-90" fill="#f6efdf" opacity="0.35" />

      <path d="M394 0 V72" stroke="#5f5140" strokeWidth="2" />
      <path d="M362 72 h64 l-14 34 h-36z" fill="#8f7050" stroke="#5f5140" strokeWidth="2" />
      <circle cx="394" cy="112" r="5" fill="#e9c98c" />

      <rect x="38" y="276" width="484" height="16" fill="#b28d61" />
      <path d="M38 276 H522" stroke="#6b5a45" strokeWidth="2" />
      <path d="M58 292 V366 M502 292 V366 M58 330 H502" stroke="#8f7353" strokeWidth="3" />
      <path d="M58 348 H502" stroke="#7d6245" strokeWidth="1.5" opacity="0.6" />

      <g>
        <path d="M170 238 h50 l-5 34 c-2 9-10 14-20 14s-18-5-20-14z" fill="#f4ecdf" stroke="#6b5a45" strokeWidth="2" />
        <ellipse cx="195" cy="238" rx="25" ry="6" fill="#6f4b2f" />
        <path d="M218 246 c14 0 18 9 14 18 c-4 8-12 10-18 7" fill="none" stroke="#6b5a45" strokeWidth="2" />
      </g>
      <g>
        <path d="M296 214 h62 l-8 58 h-46z" fill="#e8dcc9" stroke="#6b5a45" strokeWidth="2" />
        <ellipse cx="327" cy="214" rx="31" ry="7" fill="#f4ecdf" stroke="#6b5a45" strokeWidth="2" />
        <path d="M327 204 c-10-16 10-22 2-38 M344 206 c-8-14 8-20 2-34" fill="none" stroke="#f8f1e6" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g>
        <rect x="402" y="214" width="64" height="58" rx="8" fill="#c8a678" stroke="#6b5a45" strokeWidth="2" />
        <circle cx="434" cy="238" r="10" fill="#8a6642" />
        <path d="M414 258 h40" stroke="#6b5a45" strokeWidth="2" />
      </g>

      <g fill="none" stroke="#6b5a45" strokeWidth="2">
        <path d="M84 292 V360 M142 292 V360" />
        <path d="M70 360 h70" />
        <path d="M436 292 V360 M494 292 V360" />
        <path d="M422 360 h70" />
      </g>
      <g fill="#b28d61" stroke="#6b5a45" strokeWidth="2">
        <rect x="80" y="288" width="66" height="9" rx="4" />
        <rect x="432" y="288" width="66" height="9" rx="4" />
      </g>

      <path d="M44 348 h58" stroke="#8f7353" strokeWidth="1.5" />
      <circle cx="44" cy="348" r="2" fill="#8f7353" />
    </svg>
  );
}

/** A window and bench scene used in "The room". */
export function WindowArt() {
  return (
    <svg viewBox="0 0 560 400" role="img" aria-labelledby="at-window-title">
      <title id="at-window-title">تصویر پنجرهٔ شمالی بلند که نور را روی نیمکتی می‌تاباند</title>
      <defs>
        <linearGradient id="at-window-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9dfce" />
          <stop offset="1" stopColor="#d7c8b2" />
        </linearGradient>
      </defs>
      <rect width="560" height="400" fill="url(#at-window-bg)" />
      <rect x="84" y="30" width="276" height="244" fill="#f4ecdc" stroke="#6f5f49" strokeWidth="3" />
      <path d="M222 30 V274 M84 152 H360" stroke="#6f5f49" strokeWidth="2" />
      <path d="M100 46 h108 v86 H100z M236 46 h108 v86 H236z M100 168 h108 v88 H100z M236 168 h108 v88 H236z" fill="#e7dcc9" opacity="0.45" />
      <circle cx="304" cy="90" r="32" fill="#f8f0df" opacity="0.85" />

      <g fill="#f8f1e2" opacity="0.5">
        <path d="M84 274 L360 274 L500 400 L180 400 Z" />
        <path d="M84 206 L196 206 L330 400 L206 400 Z" opacity="0.55" />
      </g>

      <path d="M0 348 H560" stroke="#b8a58b" strokeWidth="2" />
      <rect x="286" y="308" width="218" height="18" fill="#b28d61" stroke="#6b5a45" strokeWidth="2" />
      <path d="M300 326 V366 M490 326 V366" stroke="#8f7353" strokeWidth="4" />
      <path d="M300 344 H490" stroke="#8f7353" strokeWidth="2" opacity="0.6" />

      <g>
        <ellipse cx="128" cy="350" rx="30" ry="7" fill="#b8a58b" opacity="0.5" />
        <path d="M112 292 h32 l-5 56 h-22z" fill="#e6dac7" stroke="#6b5a45" strokeWidth="2" />
        <path d="M128 292 c-14-30 6-48-6-68 M136 294 c12-24-4-38 10-56 M120 290 c-4-18-20-24-24-44" fill="none" stroke="#68755c" strokeWidth="3" strokeLinecap="round" />
        <g fill="#748265">
          <ellipse cx="120" cy="230" rx="13" ry="6" transform="rotate(-38 120 230)" />
          <ellipse cx="148" cy="242" rx="12" ry="5" transform="rotate(28 148 242)" />
          <ellipse cx="96" cy="252" rx="12" ry="5" transform="rotate(-20 96 252)" />
        </g>
      </g>

      <g>
        <path d="M400 274 h42 l-4 28 c-2 8-8 12-17 12s-15-4-17-12z" fill="#f4ecdf" stroke="#6b5a45" strokeWidth="2" />
        <ellipse cx="421" cy="274" rx="21" ry="5" fill="#6f4b2f" />
        <path d="M421 266 c-6-12 8-16 2-28" fill="none" stroke="#f8f1e6" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      <rect x="0" y="366" width="560" height="34" fill="#cbb99f" />
    </svg>
  );
}

/** A shelf of bags and brewing kit used in "The room". */
export function ShelfArt() {
  return (
    <svg viewBox="0 0 560 400" role="img" aria-labelledby="at-shelf-title">
      <title id="at-shelf-title">تصویر قفسهٔ قهوه با کیسه‌ها، شیشه‌ها و آسیاب</title>
      <defs>
        <linearGradient id="at-shelf-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e5dac8" />
          <stop offset="1" stopColor="#d2c2ab" />
        </linearGradient>
      </defs>
      <rect width="560" height="400" fill="url(#at-shelf-bg)" />
      <path d="M36 86 H524 M36 190 H524 M36 294 H524" stroke="#8f7353" strokeWidth="4" />
      <path d="M36 92 H524 M36 196 H524 M36 300 H524" stroke="#b28d61" strokeWidth="3" />
      <path d="M54 86 V366 M506 86 V366" stroke="#a58a68" strokeWidth="3" opacity="0.6" />

      <g>
        <rect x="76" y="30" width="52" height="56" rx="5" fill="#8d6b49" stroke="#5f4a33" strokeWidth="2" />
        <path d="M86 46 h32 M86 56 h24 M86 66 h30" stroke="#e8dcc9" strokeWidth="2" />
        <rect x="146" y="38" width="46" height="48" rx="4" fill="#b18a5f" stroke="#5f4a33" strokeWidth="2" />
        <circle cx="169" cy="62" r="10" fill="#e8dcc9" opacity="0.7" />
        <rect x="210" y="24" width="58" height="62" rx="6" fill="#6c7761" stroke="#4d5747" strokeWidth="2" />
        <path d="M221 44 h36 M221 54 h26 M221 64 h32" stroke="#e8dcc9" strokeWidth="2" />
        <path d="M292 48 c0-12 22-12 22 0 v34 c0 16-22 16-22 0z" fill="#e8dcc9" stroke="#6b5a45" strokeWidth="2" transform="translate(0 4)" />
        <path d="M360 60 h56 l-8 26 h-40z" fill="#f1e7d6" stroke="#6b5a45" strokeWidth="2" />
        <path d="M388 60 V30" stroke="#6b5a45" strokeWidth="2" />
        <path d="M366 30 h44" stroke="#6b5a45" strokeWidth="4" strokeLinecap="round" />
        <rect x="438" y="34" width="46" height="52" rx="4" fill="#a3805b" stroke="#5f4a33" strokeWidth="2" />
        <path d="M448 50 h26 M448 60 h20" stroke="#e8dcc9" strokeWidth="2" />
      </g>

      <g>
        <path d="M86 126 h58 l-6 64 h-46z" fill="#7a876c" stroke="#4f5a47" strokeWidth="2" />
        <path d="M96 142 h38 M96 152 h28" stroke="#e8dcc9" strokeWidth="2" />
        <path d="M166 132 h44 l6 58 h-56z" fill="#f0e6d5" stroke="#6b5a45" strokeWidth="2" />
        <ellipse cx="193" cy="132" rx="24" ry="6" fill="#8a6642" />
        <rect x="246" y="120" width="44" height="70" rx="5" fill="#b18a5f" stroke="#5f4a33" strokeWidth="2" />
        <path d="M256 138 h24 M256 148 h18 M256 158 h22" stroke="#efe4d2" strokeWidth="2" />
        <g>
          <rect x="326" y="136" width="70" height="54" rx="8" fill="#f1e7d6" stroke="#6b5a45" strokeWidth="2" />
          <circle cx="361" cy="156" r="11" fill="#8a6642" />
          <path d="M342 176 h38" stroke="#6b5a45" strokeWidth="2" />
        </g>
        <rect x="424" y="120" width="32" height="70" rx="3" fill="#e2d4bf" stroke="#6b5a45" strokeWidth="2" />
        <rect x="462" y="130" width="32" height="60" rx="3" fill="#d4c2aa" stroke="#6b5a45" strokeWidth="2" />
        <path d="M433 132 v42 M471 142 v36" stroke="#6b5a45" strokeWidth="1.5" />
      </g>

      <g>
        <rect x="80" y="228" width="62" height="58" rx="5" fill="#8d6b49" stroke="#5f4a33" strokeWidth="2" />
        <path d="M92 244 h38 M92 254 h28" stroke="#e8dcc9" strokeWidth="2" />
        <path d="M158 238 h48 l-5 54 h-38z" fill="#b18a5f" stroke="#5f4a33" strokeWidth="2" />
        <circle cx="182" cy="262" r="9" fill="#efe4d2" opacity="0.7" />
        <rect x="224" y="234" width="48" height="54" rx="4" fill="#7a876c" stroke="#4f5a47" strokeWidth="2" />
        <path d="M236 250 h24 M236 260 h18" stroke="#e8dcc9" strokeWidth="2" />
        <path d="M300 246 h64 l-7 40 h-50z" fill="#f1e7d6" stroke="#6b5a45" strokeWidth="2" />
        <path d="M332 246 v-18 M318 228 h28" stroke="#6b5a45" strokeWidth="2" />
        <rect x="392" y="232" width="42" height="56" rx="4" fill="#a3805b" stroke="#5f4a33" strokeWidth="2" />
        <path d="M402 250 h22 M402 260 h16" stroke="#efe4d2" strokeWidth="2" />
        <rect x="452" y="226" width="52" height="62" rx="5" fill="#e8dcc9" stroke="#6b5a45" strokeWidth="2" />
        <path d="M466 246 h24 M466 256 h18" stroke="#6b5a45" strokeWidth="2" />
      </g>

      <path d="M44 366 H516" stroke="#9a7d5c" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}

/** A minimal, illustrative neighbourhood map. */
export function MapArt() {
  return (
    <svg
      viewBox="0 0 600 360"
      className="at-map-svg"
      role="img"
      aria-labelledby="at-map-title at-map-desc"
    >
      <title id="at-map-title">نقشهٔ نمایشی خیابان فاندری</title>
      <desc id="at-map-desc"> نقشه‌ای دستی که خیابان فاندری در گوشهٔ میدان فاندری علامت خورده است. نقشه نمایشی است و مقیاس ندارد. </desc>
      <rect width="600" height="360" fill="#e9dfce" />
      <path d="M420 0 C400 70 470 118 440 180 C416 230 470 292 452 360 L600 360 V0Z" fill="#c2cdc1" />
      <path d="M0 268 C90 244 172 288 254 270 C346 250 394 286 470 268" fill="none" stroke="#f5edde" strokeWidth="26" />
      <path d="M0 268 C90 244 172 288 254 270 C346 250 394 286 470 268" fill="none" stroke="#d8c9b3" strokeWidth="2" strokeDasharray="8 10" />

      <g fill="#dfd3bf" stroke="#cfbfa7" strokeWidth="1.5">
        <rect x="26" y="38" width="112" height="72" rx="5" />
        <rect x="166" y="26" width="94" height="54" rx="5" />
        <rect x="288" y="34" width="94" height="66" rx="5" />
        <rect x="44" y="140" width="86" height="56" rx="5" />
        <rect x="160" y="118" width="72" height="48" rx="5" />
        <rect x="254" y="126" width="62" height="58" rx="5" />
        <rect x="338" y="126" width="58" height="46" rx="5" />
        <rect x="58" y="302" width="104" height="40" rx="5" />
        <rect x="190" y="306" width="88" height="38" rx="5" />
        <rect x="306" y="296" width="74" height="48" rx="5" />
      </g>

      <g stroke="#f6efe0" strokeLinecap="round">
        <path d="M0 124 H600" strokeWidth="20" />
        <path d="M0 216 H600" strokeWidth="14" />
        <path d="M152 0 V360" strokeWidth="22" />
        <path d="M382 0 V360" strokeWidth="16" />
      </g>
      <g stroke="#d6c6ae" strokeWidth="1.5">
        <path d="M0 124 H600" />
        <path d="M0 216 H600" />
        <path d="M152 0 V360" />
        <path d="M382 0 V360" />
      </g>

      <g fill="#dfd3bf" stroke="#cfbfa7" strokeWidth="1.5">
        <rect x="24" y="92" width="70" height="22" rx="3" />
        <rect x="270" y="136" width="34" height="52" rx="3" />
        <rect x="414" y="96" width="22" height="60" rx="3" />
      </g>

      <g>
        <circle cx="182" cy="184" r="34" fill="#8a5f3b" opacity="0.1" />
        <circle cx="182" cy="184" r="20" fill="#8a5f3b" opacity="0.18" />
        <path d="M182 140 c18 0 30 13 30 30 c0 22-30 48-30 48 s-30-26-30-48 c0-17 12-30 30-30z" fill="#7f5435" stroke="#4f3a28" strokeWidth="2" />
        <circle cx="182" cy="170" r="10" fill="#f3e9d8" />
      </g>

      <g fontFamily="var(--font-body), sans-serif" fill="#6b5a45">
        <text x="200" y="200" fontSize="12" letterSpacing="1.4">آتلیه قهوه</text>
        <text x="200" y="216" fontSize="10" letterSpacing="1">خیابان فاندری ۱۴</text>
        <text x="22" y="120" fontSize="10" letterSpacing="1.6" opacity="0.75">میدان فاندری</text>
        <text x="396" y="110" fontSize="10" letterSpacing="1.4" opacity="0.7">کانال رجنت</text>
        <text x="22" y="236" fontSize="9" letterSpacing="1.6" opacity="0.6">E2 · لندن</text>
      </g>
      <g fill="none" stroke="#7f5435" strokeWidth="2" strokeDasharray="5 7">
        <path d="M182 184 C150 214 142 244 146 268" />
      </g>
      <circle cx="146" cy="268" r="4" fill="#7f5435" />
    </svg>
  );
}
