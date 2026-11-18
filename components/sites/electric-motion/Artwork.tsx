/**
 * Electric Motion - procedural SVG illustrations.
 *
 * Matches the 3D scene motif: a smooth capsule pod parked on a round plinth
 * beneath a glowing semicircular charging arch, plus material swatches.
 */

export function PodMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4 17 A8 8 0 0 1 20 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="6.5"
        y="12"
        width="11"
        height="5.5"
        rx="2.75"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="9" cy="18" r="1.3" fill="currentColor" />
      <circle cx="15" cy="18" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function PodArchHeroStage() {
  return (
    <svg
      className="em-hero-svg"
      viewBox="0 0 920 500"
      role="img"
      aria-label="تصویر معماری کپسول شهری چهارنفرهٔ الکتریک موشن پارک‌شده زیر طاق شارژ نیم‌دایره‌ای با نور نعنایی."
    >
      <defs>
        <linearGradient id="em-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#12251e" />
          <stop offset="62%" stopColor="#0d1915" />
          <stop offset="100%" stopColor="#09110e" />
        </linearGradient>
        <radialGradient id="em-arch-halo" cx="50%" cy="54%" r="48%">
          <stop offset="0%" stopColor="#91cbb9" stopOpacity="0.34" />
          <stop offset="58%" stopColor="#4e8274" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#09110e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="em-pod-shell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4faf7" />
          <stop offset="52%" stopColor="#dce9e2" />
          <stop offset="100%" stopColor="#b8cdc3" />
        </linearGradient>
        <linearGradient id="em-canopy" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#29483d" />
          <stop offset="55%" stopColor="#172c24" />
          <stop offset="100%" stopColor="#203b31" />
        </linearGradient>
      </defs>

      <rect width="920" height="500" rx="16" fill="url(#em-sky)" />
      <rect width="920" height="500" rx="16" fill="url(#em-arch-halo)" />

      {/* Subtle architectural courtyard grid */}
      <g stroke="rgba(238,245,241,0.06)" strokeWidth="1">
        {Array.from({ length: 14 }, (_, i) => (
          <line key={`v-${i}`} x1={60 + i * 60} y1="36" x2={60 + i * 60} y2="420" />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`h-${i}`} x1="48" y1={80 + i * 60} x2="872" y2={80 + i * 60} />
        ))}
      </g>

      {/* Semicircular charging arch */}
      <path
        d="M 220 398 A 240 240 0 0 1 700 398"
        fill="none"
        stroke="rgba(145,203,185,0.22)"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path
        d="M 220 398 A 240 240 0 0 1 700 398"
        fill="none"
        stroke="#91cbb9"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <rect x="212" y="340" width="16" height="62" rx="4" fill="#4e8274" />
      <rect x="692" y="340" width="16" height="62" rx="4" fill="#4e8274" />

      {/* Plinth floor */}
      <ellipse
        cx="460"
        cy="404"
        rx="290"
        ry="24"
        fill="#10201a"
        stroke="rgba(145,203,185,0.4)"
        strokeWidth="1.5"
      />

      {/* Inductive / umbilical charge connection */}
      <path
        d="M 692 362 C 664 362 648 344 620 342"
        fill="none"
        stroke="#91cbb9"
        strokeWidth="2.5"
        strokeDasharray="5 4"
      />
      <circle cx="620" cy="342" r="5" fill="#91cbb9" />

      {/* Symmetrical capsule city pod */}
      <g>
        {/* Flat skateboard battery floor */}
        <rect
          x="286"
          y="362"
          width="348"
          height="22"
          rx="10"
          fill="#26352f"
          stroke="rgba(238,245,241,0.32)"
          strokeWidth="1.2"
        />

        {/* Lower capsule body */}
        <path
          d="M 278 340 C 278 294 312 262 366 258 L 554 258 C 608 262 642 294 642 340 C 642 356 630 368 612 368 L 308 368 C 290 368 278 356 278 340 Z"
          fill="url(#em-pod-shell)"
          stroke="#eef5f1"
          strokeWidth="1.5"
        />

        {/* Panoramic daylight glass dome */}
        <path
          d="M 326 286 C 344 236 392 214 460 214 C 528 214 576 236 594 286 C 546 294 374 294 326 286 Z"
          fill="url(#em-canopy)"
          stroke="#91cbb9"
          strokeWidth="1.4"
        />

        {/* Central sliding door seam & step-in sill */}
        <line x1="460" y1="216" x2="460" y2="366" stroke="rgba(22,33,28,0.28)" strokeWidth="1.5" />
        <rect x="394" y="352" width="132" height="7" rx="3.5" fill="#4e8274" />

        {/* Friendly pill light bars */}
        <rect x="284" y="324" width="22" height="7" rx="3.5" fill="#91cbb9" />
        <rect x="614" y="324" width="22" height="7" rx="3.5" fill="#91cbb9" />

        {/* Corner wheels */}
        {[336, 584].map((cx) => (
          <g key={cx}>
            <circle
              cx={cx}
              cy="380"
              r="34"
              fill="#141d19"
              stroke="rgba(238,245,241,0.38)"
              strokeWidth="1.5"
            />
            <circle
              cx={cx}
              cy="380"
              r="21"
              fill="#24332c"
              stroke="#91cbb9"
              strokeWidth="1.2"
            />
            <circle cx={cx} cy="380" r="6" fill="#91cbb9" />
          </g>
        ))}
      </g>

      {/* Dimension & status callouts */}
      <g
        fill="#b8d3c8"
        fontFamily="var(--em-sans), system-ui, sans-serif"
        fontSize="9"
        letterSpacing="1.6"
      >
        <text x="52" y="52">الکتریک موشن // کپسول ۰۱ + طاق شارژ</text>
        <text x="868" y="52" textAnchor="end">توقف ۱۸ دقیقه DC · ۱۸۰ مایل نمایشی</text>
        <text x="460" y="464" textAnchor="middle">
          ردپای شهری ۳٫۱ متر · کف تخت برای ۴ بزرگسال
        </text>
      </g>
    </svg>
  );
}

export function MaterialSwatch({
  variant,
}: {
  variant: "daylight" | "textile" | "arch";
}) {
  if (variant === "daylight") {
    return (
      <svg
        className="em-swatch"
        viewBox="0 0 240 150"
        role="img"
        aria-label="تصویر شیشهٔ پیوستهٔ نور روز با فیلتر ملایم ماورای بنفش مریم‌گلی."
      >
        <defs>
          <linearGradient id="em-sw-day" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d9ebe2" />
            <stop offset="55%" stopColor="#91cbb9" />
            <stop offset="100%" stopColor="#2f6b59" />
          </linearGradient>
        </defs>
        <rect width="240" height="150" fill="#e6f0eb" />
        <circle cx="120" cy="78" r="54" fill="url(#em-sw-day)" opacity="0.65" />
        <path
          d="M 44 102 Q 120 44 196 102"
          fill="none"
          stroke="#16211c"
          strokeWidth="1.6"
        />
        <text
          x="22"
          y="132"
          fill="#16211c"
          fontFamily="var(--em-sans), sans-serif"
          fontSize="8"
          letterSpacing="1.5"
        >
          شیشه // تُن نور روز
        </text>
      </svg>
    );
  }

  if (variant === "textile") {
    return (
      <svg
        className="em-swatch"
        viewBox="0 0 240 150"
        role="img"
        aria-label="تصویر منسوج بازیافتی بافته‌شدهٔ خاکستری سنگی برای کابین."
      >
        <rect width="240" height="150" fill="#e4ebe6" />
        <g stroke="rgba(22,33,28,0.16)" strokeWidth="1.2">
          {Array.from({ length: 12 }, (_, i) => (
            <line key={`h-${i}`} x1="20" y1={20 + i * 10} x2="220" y2={20 + i * 10} />
          ))}
          {Array.from({ length: 18 }, (_, i) => (
            <line key={`v-${i}`} x1={26 + i * 11} y1="16" x2={26 + i * 11} y2="132" />
          ))}
        </g>
        <rect x="20" y="16" width="200" height="114" rx="10" fill="none" stroke="#2f6b59" strokeWidth="1.5" />
        <text
          x="28"
          y="122"
          fill="#16211c"
          fontFamily="var(--em-sans), sans-serif"
          fontSize="8"
          letterSpacing="1.5"
        >
          کابین // بافت بازیافتی
        </text>
      </svg>
    );
  }

  return (
    <svg
      className="em-swatch"
      viewBox="0 0 240 150"
      role="img"
      aria-label="تصویر طاق شارژ آلومینیومی اوکالیپتوس سندبلاست با حلقهٔ وضعیت نعنایی."
    >
      <rect width="240" height="150" fill="#10221c" />
      <path
        d="M 52 124 A 68 68 0 0 1 188 124"
        fill="none"
        stroke="#91cbb9"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="120" cy="56" r="7" fill="#eef5f1" />
      <text
        x="22"
        y="134"
        fill="#eef5f1"
        fontFamily="var(--em-sans), sans-serif"
        fontSize="8"
        letterSpacing="1.5"
      >
        طاق // نعنایی آنودایز
      </text>
    </svg>
  );
}
