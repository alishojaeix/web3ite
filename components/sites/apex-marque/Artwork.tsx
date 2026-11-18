/**
 * Apex Marque - procedural artwork.
 *
 * Inline SVG only: a side-profile grand-tourer study under one key light,
 * plus paint, alloy and leather swatches. No WebGL and no images.
 */

export function MarqueMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 2.8 L21.6 21.2 H2.4 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path d="M12 8 L17.4 18.6 H6.6 Z" stroke="currentColor" strokeWidth="1" />
      <path d="M8.1 14.6 H15.9" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <circle cx="12" cy="11.2" r="1.2" fill="currentColor" />
    </svg>
  );
}

function Wheel({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="82"
        fill="#0a0706"
        stroke="rgba(246,237,228,0.24)"
        strokeWidth="1.5"
      />
      <circle cx={cx} cy={cy} r="75" fill="none" stroke="rgba(246,237,228,0.08)" />
      <circle cx={cx} cy={cy} r="62" fill="none" stroke="rgba(0,0,0,0.55)" />
      <circle
        cx={cx}
        cy={cy}
        r="54"
        fill="url(#apx-rim)"
        stroke="rgba(246,237,228,0.4)"
        strokeWidth="1"
      />
      <circle
        cx={cx}
        cy={cy}
        r="47"
        fill="#1c1411"
        stroke="rgba(246,237,228,0.16)"
        strokeWidth="1"
      />
      <circle cx={cx} cy={cy} r="40" fill="none" stroke="rgba(201,169,139,0.28)" />
      {Array.from({ length: 10 }, (_, index) => {
        const angle = (index / 10) * Math.PI * 2 - Math.PI / 2;
        return (
          <line
            key={`spoke-${cx}-${index}`}
            x1={cx + Math.cos(angle) * 13}
            y1={cy + Math.sin(angle) * 13}
            x2={cx + Math.cos(angle) * 50}
            y2={cy + Math.sin(angle) * 50}
            stroke="#c9a98b"
            strokeWidth="3.2"
            opacity="0.86"
          />
        );
      })}
      {Array.from({ length: 5 }, (_, index) => {
        const angle = (index / 5) * Math.PI * 2 - Math.PI / 2 + Math.PI / 5;
        return (
          <line
            key={`groove-${cx}-${index}`}
            x1={cx + Math.cos(angle) * 17}
            y1={cy + Math.sin(angle) * 17}
            x2={cx + Math.cos(angle) * 46}
            y2={cy + Math.sin(angle) * 46}
            stroke="#2a1d17"
            strokeWidth="1.4"
            opacity="0.8"
          />
        );
      })}
      <path
        d={`M ${cx - 26} ${cy - 26} A 38 38 0 0 1 ${cx - 6} ${cy - 37}`}
        fill="none"
        stroke="#b8562f"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <circle cx={cx} cy={cy} r="49" fill="none" stroke="rgba(231,121,76,0.28)" />
      <circle
        cx={cx}
        cy={cy}
        r="11"
        fill="#120d0b"
        stroke="#c9a98b"
        strokeWidth="1"
      />
      <path
        d={`M ${cx} ${cy - 5} L ${cx + 5} ${cy} L ${cx} ${cy + 5} L ${cx - 5} ${cy} Z`}
        fill="#c9a98b"
        opacity="0.85"
      />
    </g>
  );
}

export function WheelStudy({ size = 168 }: { size?: number }) {
  return (
    <svg
      className="ap-wheel-study"
      width={size}
      height={size}
      viewBox="0 0 240 240"
      role="img"
      aria-label="تصویر یک چرخ ۲۱ اینچی فورج با رویهٔ تراش‌خورده، با آلیاژ گرم روی زمینه‌ای تیره."
    >
      <rect width="240" height="240" fill="#0a0706" />
      <g stroke="rgba(246,237,228,0.05)">
        {Array.from({ length: 9 }, (_, index) => (
          <line key={index} x1={index * 30} y1="0" x2={index * 30} y2="240" />
        ))}
      </g>
      <circle cx="120" cy="120" r="104" fill="none" stroke="rgba(246,237,228,0.07)" />
      <Wheel cx={120} cy={120} />
    </svg>
  );
}

export function GrandTourer() {
  const bodyPath =
    "M 148 428 C 146 400 160 378 190 368 C 244 350 292 344 338 336 C 372 330 396 322 424 308 L 520 264 C 542 254 560 250 586 249 L 674 249 C 702 250 724 258 746 274 L 810 316 C 844 330 898 334 944 340 L 990 346 C 1016 352 1028 370 1026 396 L 1022 432 L 148 432 Z";

  return (
    <svg
      className="ap-car"
      viewBox="0 0 1200 600"
      role="img"
      aria-label="نمای جانبی نمایشی یک خودروی تور بزرگ با فلز شامپاینی گرم، زیر یک نور کلیدی روی کف نمایشگاه تیره."
    >
      <defs>
        <radialGradient id="apx-halo" cx="50%" cy="14%" r="68%">
          <stop offset="0%" stopColor="#e7794c" stopOpacity="0.2" />
          <stop offset="52%" stopColor="#6b3520" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0a0807" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="apx-cone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e7b795" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#e7b795" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="apx-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d3a986" />
          <stop offset="34%" stopColor="#aa7a5b" />
          <stop offset="72%" stopColor="#6b4432" />
          <stop offset="100%" stopColor="#35221b" />
        </linearGradient>
        <linearGradient id="apx-glass" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#2b1d18" />
          <stop offset="55%" stopColor="#15100e" />
          <stop offset="100%" stopColor="#241713" />
        </linearGradient>
        <linearGradient id="apx-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e2c0a0" />
          <stop offset="48%" stopColor="#9a7259" />
          <stop offset="100%" stopColor="#3a2a22" />
        </linearGradient>
        <linearGradient id="apx-metal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c9a98b" />
          <stop offset="55%" stopColor="#6f5240" />
          <stop offset="100%" stopColor="#2a1d17" />
        </linearGradient>
        <radialGradient id="apx-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="apx-reflection" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d3a986" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#d3a986" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="apx-mask-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <mask id="apx-reflect-mask">
          <rect x="0" y="506" width="1200" height="94" fill="url(#apx-mask-fade)" />
        </mask>
        <filter id="apx-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Showroom */}
      <rect width="1200" height="600" fill="#080605" />
      <rect width="1200" height="600" fill="url(#apx-halo)" />
      <path d="M 600 -60 L 238 506 H 962 Z" fill="url(#apx-cone)" />
      <g stroke="rgba(246,237,228,0.045)">
        {Array.from({ length: 9 }, (_, index) => (
          <line key={`v-${index}`} x1={120 + index * 120} y1="0" x2={120 + index * 120} y2="506" />
        ))}
        {[520, 540, 566, 596].map((y) => (
          <line key={`h-${y}`} x1="0" y1={y} x2="1200" y2={y} opacity="0.6" />
        ))}
      </g>

      {/* Floor and shadow */}
      <ellipse cx="600" cy="510" rx="452" ry="28" fill="url(#apx-shadow)" />
      <line x1="70" y1="506" x2="1130" y2="506" stroke="rgba(246,237,228,0.18)" />
      <g stroke="rgba(246,237,228,0.14)">
        <line x1="70" y1="506" x2="70" y2="512" />
        <line x1="600" y1="506" x2="600" y2="512" />
        <line x1="1130" y1="506" x2="1130" y2="512" />
      </g>

      {/* Reflection */}
      <g mask="url(#apx-reflect-mask)" opacity="0.5">
        <g transform="translate(0 1012) scale(1 -1)">
          <path d={bodyPath} fill="url(#apx-reflection)" opacity="0.34" />
        </g>
      </g>

      {/* Car body */}
      <g>
        <circle cx="352" cy="424" r="96" fill="#080605" />
        <circle cx="848" cy="424" r="96" fill="#080605" />
        <path d={bodyPath} fill="url(#apx-body)" stroke="rgba(246,237,228,0.3)" strokeWidth="1.2" />
        <path
          d="M 190 368 C 244 350 292 344 338 336 C 372 330 396 322 424 308 L 520 264 C 542 254 560 250 586 249 L 674 249 C 702 250 724 258 746 274"
          fill="none"
          stroke="rgba(240,200,163,0.55)"
          strokeWidth="1.4"
        />
        <path
          d="M 180 372 C 300 362 360 344 440 336 C 600 320 740 318 1000 350"
          fill="none"
          stroke="rgba(255,230,205,0.34)"
          strokeWidth="1.2"
        />
        <path
          d="M 250 358 C 300 344 340 338 388 330"
          fill="none"
          stroke="rgba(255,230,205,0.3)"
        />
        <path
          d="M 200 404 C 400 398 800 398 1006 404"
          fill="none"
          stroke="rgba(18,11,8,0.3)"
        />
        <path d="M 448 427 H 750" stroke="rgba(18,11,8,0.42)" strokeWidth="2" />

        {/* Glass */}
        <path
          d="M 430 306 L 526 266 C 536 262 546 260 558 259 L 600 259 L 600 306 Z"
          fill="url(#apx-glass)"
          stroke="rgba(244,215,190,0.5)"
          strokeWidth="1.4"
        />
        <path
          d="M 618 259 L 672 259 C 690 261 704 268 716 278 L 754 304 L 754 310 L 618 310 Z"
          fill="url(#apx-glass)"
          stroke="rgba(244,215,190,0.5)"
          strokeWidth="1.4"
        />
        <path d="M 600 259 H 618 V 310 H 600 Z" fill="#17100d" />
        <path
          d="M 628 266 L 664 266 L 700 288 L 700 296 L 628 292 Z"
          fill="#f6ede4"
          opacity="0.06"
        />
        <path
          d="M 445 300 L 520 267 L 552 267 L 476 303 Z"
          fill="#f6ede4"
          opacity="0.05"
        />
        <path d="M 420 310 L 756 310" stroke="rgba(244,215,190,0.26)" />

        {/* Door seams and handle */}
        <path
          d="M 470 312 C 468 352 470 392 474 430"
          fill="none"
          stroke="rgba(18,11,8,0.5)"
          strokeWidth="1.4"
        />
        <path
          d="M 774 312 C 770 354 772 394 778 430"
          fill="none"
          stroke="rgba(18,11,8,0.5)"
          strokeWidth="1.4"
        />
        <rect
          x="700"
          y="340"
          width="38"
          height="8"
          rx="4"
          fill="url(#apx-metal)"
          stroke="rgba(30,20,16,0.5)"
        />

        {/* Mirror and side vent */}
        <path
          d="M 762 300 L 792 292 L 802 302 L 784 312 L 766 308 Z"
          fill="url(#apx-metal)"
          stroke="rgba(246,237,228,0.3)"
        />
        <path d="M 758 304 L 770 302" stroke="rgba(246,237,228,0.3)" />
        <path
          d="M 836 366 L 866 362 L 872 374 L 842 378 Z"
          fill="#1a120f"
          stroke="rgba(244,215,190,0.32)"
        />
        <path d="M 844 368 L 864 365 M 846 372 L 866 369" stroke="rgba(244,215,190,0.16)" />

        {/* Lights */}
        <path
          d="M 152 370 C 176 362 198 360 222 360 L 222 374 C 198 374 176 378 156 386 Z"
          fill="#e7794c"
          filter="url(#apx-glow)"
          opacity="0.9"
        />
        <path
          d="M 972 352 C 994 348 1014 354 1026 366 L 1021 380 C 1004 372 986 370 968 370 Z"
          fill="#f7ddc4"
          filter="url(#apx-glow)"
        />
        <path
          d="M 980 364 C 996 362 1008 366 1017 372"
          fill="none"
          stroke="#ffb28c"
          strokeWidth="1.8"
        />
        <path
          d="M 976 386 H 1018"
          stroke="rgba(255,200,170,0.4)"
          strokeWidth="1.4"
        />

        {/* Front details */}
        <rect
          x="956"
          y="388"
          width="66"
          height="26"
          rx="6"
          fill="#100b09"
          stroke="rgba(244,215,190,0.2)"
        />
        {[966, 976, 986, 996, 1006, 1014].map((x) => (
          <line key={x} x1={x} y1="394" x2={x} y2="408" stroke="rgba(244,215,190,0.14)" />
        ))}
        <rect x="930" y="416" width="84" height="10" rx="4" fill="#0d0908" />
        <path d="M 930 432 H 1026" stroke="rgba(244,215,190,0.2)" />
      </g>

      {/* Wheels */}
      <Wheel cx={352} cy={424} />
      <Wheel cx={848} cy={424} />

      {/* Wheelbase dimension */}
      <g stroke="rgba(246,237,228,0.2)" strokeDasharray="2 5">
        <line x1="352" y1="506" x2="352" y2="568" />
        <line x1="848" y1="506" x2="848" y2="568" />
      </g>
      <g stroke="rgba(231,121,76,0.5)">
        <line x1="352" y1="556" x2="848" y2="556" />
        <path d="M 352 556 L 362 551 V 561 Z" fill="#e7794c" stroke="none" />
        <path d="M 848 556 L 838 551 V 561 Z" fill="#e7794c" stroke="none" />
      </g>
      <text
        x="600"
        y="545"
        textAnchor="middle"
        fill="#b6a79c"
        fontFamily="var(--ap-body), system-ui, sans-serif"
        fontSize="9"
        letterSpacing="2.4"
      >
        فاصلهٔ محوری ۲٬۷۲۰ میلی‌متر
      </text>

      {/* Labels */}
      <g
        fill="#b6a79c"
        fontFamily="var(--ap-body), system-ui, sans-serif"
        fontSize="9.5"
        letterSpacing="2.2"
      >
        <text x="40" y="46">اپکس GT / مطالعهٔ نمای جانبی</text>
        <text x="1160" y="46" textAnchor="end">سال مدل ۲۰۲۶ / نمونه</text>
        <text x="40" y="578">اپکس مارک</text>
        <text x="1160" y="578" textAnchor="end">ترسیم بدون مقیاس</text>
      </g>
      <g
        fill="#8a7a70"
        fontFamily="var(--ap-body), system-ui, sans-serif"
        fontSize="8"
        letterSpacing="1.6"
      >
        <text x="40" y="62">نمایشی — نه خودروی تولیدی</text>
        <text x="1160" y="62" textAnchor="end">یک نور کلیدی</text>
      </g>
      <g fill="#e7794c">
        <circle cx="352" cy="46" r="2" />
        <circle cx="1160" cy="46" r="2" />
      </g>

      {/* Frame */}
      <g fill="none" stroke="rgba(246,237,228,0.2)" strokeWidth="1">
        <path d="M 24 24 H 60 M 24 24 V 60" />
        <path d="M 1176 24 H 1140 M 1176 24 V 60" />
        <path d="M 24 576 H 60 M 24 576 V 540" />
        <path d="M 1176 576 H 1140 M 1176 576 V 540" />
      </g>
    </svg>
  );
}

export function MaterialSwatch({ variant }: { variant: "paint" | "alloy" | "leather" }) {
  if (variant === "paint") {
    return (
      <svg
        className="ap-swatch"
        viewBox="0 0 220 160"
        role="img"
        aria-label="تصویر پنلی از رنگ فلزی گرم زیر یک نور کلیدی تکی."
      >
        <defs>
          <linearGradient id="ap-sw-paint" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c5139" />
            <stop offset="45%" stopColor="#bd8b66" />
            <stop offset="70%" stopColor="#8b5c42" />
            <stop offset="100%" stopColor="#3a241b" />
          </linearGradient>
        </defs>
        <rect width="220" height="160" fill="#0d0a08" />
        <rect x="18" y="16" width="184" height="128" fill="url(#ap-sw-paint)" />
        <path d="M 28 144 L 104 16 H 138 L 62 144 Z" fill="#f6ede4" opacity="0.14" />
        <path d="M 108 16 L 76 144" stroke="#f6ede4" strokeWidth="1" opacity="0.2" />
        <path d="M 18 94 C 70 86 140 88 202 96" stroke="#f6ede4" strokeWidth="1" opacity="0.22" fill="none" />
        {Array.from({ length: 30 }, (_, index) => (
          <circle
            key={index}
            cx={26 + ((index * 47) % 168)}
            cy={24 + ((index * 31) % 112)}
            r="0.7"
            fill="#f6ede4"
            opacity="0.28"
          />
        ))}
        <rect x="18" y="16" width="184" height="128" fill="none" stroke="rgba(246,237,228,0.24)" />
        <text x="28" y="136" fill="#f6ede4" fontFamily="var(--ap-body), sans-serif" fontSize="6.5" letterSpacing="1.6">
          رنگ / یک نور
        </text>
        <text x="192" y="136" textAnchor="end" fill="#f6ede4" fontFamily="var(--ap-body), sans-serif" fontSize="6.5" letterSpacing="1.4" opacity="0.7">
          نمونه
        </text>
      </svg>
    );
  }

  if (variant === "alloy") {
    return (
      <svg
        className="ap-swatch"
        viewBox="0 0 220 160"
        role="img"
        aria-label="تصویر یک چرخ آلیاژی فورج با رویهٔ تراش‌خورده."
      >
        <defs>
          <linearGradient id="ap-sw-rim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e2c0a0" />
            <stop offset="46%" stopColor="#9a7259" />
            <stop offset="100%" stopColor="#3a2a22" />
          </linearGradient>
        </defs>
        <rect width="220" height="160" fill="#0d0a08" />
        <g stroke="rgba(246,237,228,0.05)">
          {Array.from({ length: 11 }, (_, index) => (
            <line key={`av-${index}`} x1={index * 22} y1="0" x2={index * 22} y2="160" />
          ))}
        </g>
        <circle cx="110" cy="76" r="66" fill="#0a0706" stroke="rgba(246,237,228,0.2)" />
        <circle cx="110" cy="76" r="53" fill="url(#ap-sw-rim)" stroke="rgba(246,237,228,0.35)" />
        <circle cx="110" cy="76" r="44" fill="#1c1411" stroke="rgba(246,237,228,0.16)" />
        {Array.from({ length: 10 }, (_, index) => {
          const angle = (index / 10) * Math.PI * 2 - Math.PI / 2;
          return (
            <line
              key={`as-${index}`}
              x1={110 + Math.cos(angle) * 12}
              y1={76 + Math.sin(angle) * 12}
              x2={110 + Math.cos(angle) * 40}
              y2={76 + Math.sin(angle) * 40}
              stroke="#c9a98b"
              strokeWidth="3"
              opacity="0.85"
            />
          );
        })}
        <circle cx="110" cy="76" r="9" fill="#120d0b" stroke="#c9a98b" />
        <path d="M 110 71 L 115 76 L 110 81 L 105 76 Z" fill="#c9a98b" opacity="0.8" />
        <path d="M 88 56 A 34 34 0 0 1 104 44" stroke="#b8562f" strokeWidth="4" fill="none" strokeLinecap="round" />
        <text x="18" y="148" fill="#b6a79c" fontFamily="var(--ap-body), sans-serif" fontSize="6.5" letterSpacing="1.6">
          آلیاژ / فورج
        </text>
        <text x="202" y="148" textAnchor="end" fill="#8a7a70" fontFamily="var(--ap-body), sans-serif" fontSize="6.5" letterSpacing="1.4">
          ۲۱ اینچ
        </text>
      </svg>
    );
  }

  return (
    <svg
      className="ap-swatch"
      viewBox="0 0 220 160"
      role="img"
      aria-label="تصویر چرم طبیعی زینی با دوخت وایت‌بلچ."
    >
      <defs>
        <linearGradient id="ap-sw-hide" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8a5a42" />
          <stop offset="55%" stopColor="#6b4432" />
          <stop offset="100%" stopColor="#4a2e22" />
        </linearGradient>
      </defs>
      <rect width="220" height="160" fill="#0d0a08" />
      <rect x="16" y="14" width="188" height="132" fill="url(#ap-sw-hide)" />
      {Array.from({ length: 44 }, (_, index) => {
        const x = 22 + ((index * 53) % 172);
        const y = 22 + ((index * 37) % 116);
        return (
          <path
            key={index}
            d={`M ${x} ${y} q 5 -3 10 0`}
            fill="none"
            stroke="#2f1c14"
            strokeWidth="0.8"
            opacity="0.4"
          />
        );
      })}
      <path
        d="M 30 128 C 74 104 128 74 190 30"
        fill="none"
        stroke="#d8c3a5"
        strokeWidth="1.2"
        strokeDasharray="5 4"
        opacity="0.8"
      />
      <path d="M 36 120 C 80 98 132 68 190 28" fill="none" stroke="#3a2419" strokeWidth="1" opacity="0.35" />
      <g transform="translate(164 108) rotate(-8)">
        <rect x="-24" y="-14" width="48" height="28" fill="none" stroke="#d8c3a5" strokeWidth="0.8" opacity="0.5" />
        <path d="M -8 6 L 0 -7 L 8 6 Z" fill="none" stroke="#d8c3a5" strokeWidth="0.8" opacity="0.7" />
        <path d="M -4 1 H 4" stroke="#d8c3a5" strokeWidth="0.8" opacity="0.7" />
      </g>
      <text x="26" y="139" fill="#e9dccb" fontFamily="var(--ap-body), sans-serif" fontSize="6.5" letterSpacing="1.6">
        چرم / طبیعی
      </text>
      <text x="194" y="139" textAnchor="end" fill="#e9dccb" fontFamily="var(--ap-body), sans-serif" fontSize="6.5" letterSpacing="1.4" opacity="0.65">
        نمونه
      </text>
    </svg>
  );
}
