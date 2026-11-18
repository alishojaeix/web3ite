/**
 * Inline artwork for Obsidian Roastery. Everything is drawn in SVG so the site
 * stays independent of photography and loads instantly at any size.
 */

export function CanisterArt({
  prefix = "ob-hero",
  number = "01",
  name = "کنیا AA",
  origin = "نیِری، کنیا",
  className = "ob-canister-svg",
}: {
  prefix?: string;
  number?: string;
  name?: string;
  origin?: string;
  className?: string;
}) {
  const body = `${prefix}-body`;
  const brass = `${prefix}-brass`;
  const halo = `${prefix}-halo`;
  const grid = `${prefix}-grid`;

  return (
    <svg
      viewBox="0 0 560 680"
      className={className}
      role="img"
      aria-labelledby={`${prefix}-title ${prefix}-desc`}
    >
      <title id={`${prefix}-title`}>{`قوطی Obsidian برای ${name}`}</title>
      <desc id={`${prefix}-desc`}>
        یک قوطی قهوهٔ مشکی مات با مهر برنجی و برچسب کاغذی چاپی، روی سکویی
        تیره در برابر حلقه‌ای از نور گرم.
      </desc>
      <defs>
        <linearGradient id={body} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0b0b0b" />
          <stop offset="0.28" stopColor="#242321" />
          <stop offset="0.52" stopColor="#101010" />
          <stop offset="0.76" stopColor="#1c1b19" />
          <stop offset="1" stopColor="#070707" />
        </linearGradient>
        <linearGradient id={brass} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0" stopColor="#6f512d" />
          <stop offset="0.35" stopColor="#d5b078" />
          <stop offset="0.62" stopColor="#a97e46" />
          <stop offset="1" stopColor="#e0c08b" />
        </linearGradient>
        <radialGradient id={halo} cx="0.5" cy="0.42" r="0.58">
          <stop offset="0" stopColor="#b78b55" stopOpacity="0.34" />
          <stop offset="0.58" stopColor="#b78b55" stopOpacity="0.08" />
          <stop offset="1" stopColor="#080809" stopOpacity="0" />
        </radialGradient>
        <pattern id={grid} width="46" height="46" patternUnits="userSpaceOnUse">
          <path d="M46 0H0V46" fill="none" stroke="#f1ece3" strokeOpacity="0.05" />
        </pattern>
      </defs>

      <rect width="560" height="680" fill="#0a0a0b" />
      <rect width="560" height="680" fill={`url(#${grid})`} />
      <circle cx="280" cy="286" r="240" fill={`url(#${halo})`} />
      <circle
        cx="280"
        cy="286"
        r="176"
        fill="none"
        stroke="#b78b55"
        strokeOpacity="0.34"
        strokeWidth="1.5"
        strokeDasharray="2 9"
        className="ob-halo-ring"
      />
      <circle cx="280" cy="286" r="148" fill="none" stroke="#b78b55" strokeOpacity="0.16" />

      <ellipse cx="280" cy="566" rx="148" ry="24" fill="#000000" opacity="0.55" />
      <path d="M152 530 h256 l-18 46 h-220z" fill="#141311" stroke="#2d2a25" strokeWidth="1.5" />
      <path d="M152 530 h256" stroke={`url(#${brass})`} strokeWidth="2" opacity="0.7" />

      <g className="ob-canister-body">
        <path
          d="M185 200 h190 v294 c0 18-14 30-32 30h-126c-18 0-32-12-32-30z"
          fill={`url(#${body})`}
          stroke="#3a3731"
          strokeWidth="1.5"
        />
        <ellipse cx="280" cy="200" rx="95" ry="16" fill="#0c0c0b" stroke="#3a3731" strokeWidth="1.5" />
        <ellipse cx="280" cy="197" rx="72" ry="10" fill="#24221e" />
        <circle cx="280" cy="197" r="10" fill="#0b0b0a" stroke="#4a443a" />

        <rect x="185" y="270" width="190" height="18" fill={`url(#${brass})`} />
        <rect x="185" y="270" width="190" height="3" fill="#f0d6a8" opacity="0.55" />
        <rect x="185" y="288" width="190" height="2" fill="#080809" opacity="0.6" />

        <rect x="205" y="322" width="150" height="118" fill="#e6ddcf" />
        <rect x="213" y="330" width="134" height="102" fill="none" stroke="#1c1b18" strokeOpacity="0.28" />
        <text
          x="280"
          y="354"
          textAnchor="middle"
          fontFamily="var(--font-display), sans-serif"
          fontSize="9"
          letterSpacing="3.2"
          fill="#3c372f"
        >
          OBSIDIAN
        </text>
        <text
          x="280"
          y="376"
          textAnchor="middle"
          fontFamily="var(--font-display), sans-serif"
          fontSize="7"
          letterSpacing="3.6"
          fill="#8d6c41"
        >
          ROASTERY
        </text>
        <path d="M238 388 h84" stroke="#8d6c41" strokeWidth="1" />
        <text
          x="280"
          y="412"
          textAnchor="middle"
          fontFamily="var(--font-editorial), serif"
          fontSize="28"
          fill="#1d1b17"
        >
          {number}
        </text>
        <text
          x="280"
          y="426"
          textAnchor="middle"
          fontFamily="var(--font-display), sans-serif"
          fontSize="7.5"
          letterSpacing="2.4"
          fill="#4f483d"
        >
          {name.toUpperCase()}
        </text>
        <text
          x="280"
          y="444"
          textAnchor="middle"
          fontFamily="var(--font-body), sans-serif"
          fontSize="8"
          letterSpacing="1.4"
          fill="#7b7163"
        >
          {origin}
        </text>

        <text
          x="280"
          y="486"
          textAnchor="middle"
          fontFamily="var(--font-body), sans-serif"
          fontSize="7.5"
          letterSpacing="2.1"
          fill="#9a9184"
        >
          خُرد‌دست · ۲۵۰ گرم
        </text>
        <path d="M232 498 h96" stroke="#4a443a" strokeWidth="1" />
        <text
          x="280"
          y="512"
          textAnchor="middle"
          fontFamily="var(--font-body), sans-serif"
          fontSize="7"
          letterSpacing="1.8"
          fill="#6e665a"
        >
          بوداده ۰۸.۱۰.۲۶
        </text>

        <path d="M203 232 v252" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="10" strokeLinecap="round" />
        <path d="M358 242 v236" stroke="#000000" strokeOpacity="0.4" strokeWidth="12" strokeLinecap="round" />
      </g>

      <g fill="none" stroke="#b78b55" strokeWidth="1.4" strokeLinecap="round" opacity="0.8">
        <path d="M96 190 h44 M96 190 v54" />
        <path d="M464 470 h-44 M464 470 v-54" />
      </g>
      <g fontFamily="var(--font-body), sans-serif" fontSize="8" letterSpacing="2" fill="#8b8275">
        <text x="96" y="178">مُهر و موم</text>
        <text x="388" y="488">250 G</text>
      </g>
    </svg>
  );
}

/** A technical drawing of the canister used in "The object". */
export function CanisterDrawing() {
  return (
    <svg
      viewBox="0 0 560 460"
      className="ob-drawing"
      role="img"
      aria-labelledby="ob-drawing-title ob-drawing-desc"
    >
      <title id="ob-drawing-title">نقشهٔ فنی قوطی ابسیدین</title>
      <desc id="ob-drawing-desc"> ترسیم خطی اندازه‌گیری‌شدهٔ قوطی: ۲۵۰ میلی‌متر بلند و ۸۶ میلی‌متر پهنا، با مهر برنجی و پایهٔ چاپی. </desc>
      <defs>
        <pattern id="ob-drawing-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="#f1ece3" strokeOpacity="0.07" />
        </pattern>
      </defs>
      <rect width="560" height="460" fill="#0d0d0e" />
      <rect width="560" height="460" fill="url(#ob-drawing-grid)" />

      <g stroke="#b78b55" strokeWidth="1" opacity="0.6">
        <path d="M174 54 V106 M174 78 H112" />
        <path d="M386 54 V106 M386 78 H448" />
        <path d="M174 54 H386" strokeDasharray="3 6" />
        <path d="M142 396 V118" strokeDasharray="3 6" />
        <path d="M130 396 h24 M130 118 h24" />
      </g>
      <g fontFamily="var(--font-body), sans-serif" fontSize="8" letterSpacing="1.8" fill="#cbbda9">
        <text x="92" y="48">۸۶ میلی‌متر</text>
        <text x="399" y="48">مهر برنجی</text>
        <text x="148" y="112">۲۵۰ میلی‌متر</text>
      </g>

      <g stroke="#d7cbb9" strokeWidth="1.4" fill="none">
        <path d="M208 118 h144 v244 c0 14-10 23-25 23h-94c-15 0-25-9-25-23z" />
        <ellipse cx="280" cy="118" rx="72" ry="11" />
        <ellipse cx="280" cy="118" rx="55" ry="7" />
        <path d="M208 190 h144 M208 198 h144" stroke="#b78b55" />
        <rect x="222" y="232" width="116" height="84" strokeOpacity="0.7" />
        <path d="M236 254 h88 M236 268 h58 M236 300 h74" strokeOpacity="0.45" />
        <path d="M208 354 h144" strokeOpacity="0.5" />
      </g>

      <g stroke="#b78b55" strokeWidth="1" fill="none" opacity="0.7">
        <path d="M424 202 h42 M424 202 v24" />
        <path d="M424 322 h42 M424 322 v-24" />
        <path d="M466 202 V322" strokeDasharray="3 5" />
      </g>
      <text
        x="476"
        y="266"
        fontFamily="var(--font-body), sans-serif"
        fontSize="8"
        letterSpacing="1.6"
        fill="#cbbda9"
      >
        قابل استفادهٔ مجدد
      </text>

      <g fontFamily="var(--font-body), sans-serif" fontSize="7.5" letterSpacing="1.4" fill="#877d6e">
        <text x="36" y="440">ابسیدین / قوطی ۰۱</text>
        <text x="430" y="440">مقیاس ۱:۲</text>
      </g>
    </svg>
  );
}

/** A roast profile line for the roastery story. */
export function RoastCurve() {
  return (
    <svg
      viewBox="0 0 640 320"
      className="ob-curve"
      role="img"
      aria-labelledby="ob-curve-title ob-curve-desc"
    >
      <title id="ob-curve-title">پروفایل نمایشی بو دادن</title>
      <desc id="ob-curve-desc"> نمودار خطی که دمای دانه را از ۱۸۰ درجه در زمان شارژ تا ترک نخست در دقیقهٔ هشت و سپس تخلیه در ۲۰۵ درجه در دقیقهٔ دوازده نشان می‌دهد. </desc>
      <rect width="640" height="320" fill="none" />
      <g stroke="#f1ece3" strokeOpacity="0.09">
        <path d="M54 42 V264 H604" />
        <path d="M54 86 H604 M54 130 H604 M54 174 H604 M54 218 H604" strokeDasharray="2 7" />
        <path d="M160 42 V264 M266 42 V264 M372 42 V264 M478 42 V264" strokeDasharray="2 7" />
      </g>

      <g fontFamily="var(--font-body), sans-serif" fontSize="8" letterSpacing="1.4" fill="#817868">
        <text x="18" y="46">220°</text>
        <text x="18" y="134">200°</text>
        <text x="18" y="222">180°</text>
        <text x="50" y="288">0</text>
        <text x="154" y="288">3</text>
        <text x="260" y="288">6</text>
        <text x="366" y="288">9</text>
        <text x="472" y="288">12</text>
        <text x="568" y="288">دقیقه</text>
      </g>

      <path
        d="M54 240 C92 230 112 210 150 196 C210 174 232 132 288 118 C338 106 356 88 404 76 C468 60 512 54 566 52"
        fill="none"
        stroke="#b78b55"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M54 240 C92 230 112 210 150 196 C210 174 232 132 288 118 C338 106 356 88 404 76 C468 60 512 54 566 52 V264 H54Z"
        fill="#b78b55"
        opacity="0.07"
      />

      <g stroke="#d7cbb9" strokeWidth="1" strokeDasharray="3 5">
        <path d="M288 42 V264" />
        <path d="M404 42 V264" />
      </g>
      <g fontFamily="var(--font-body), sans-serif" fontSize="8" letterSpacing="1.5" fill="#cbbda9">
        <text x="296" y="56">زرد شدن</text>
        <text x="412" y="56">ترک نخست</text>
        <text x="512" y="304">تخلیه</text>
      </g>
      <g fill="#b78b55">
        <circle cx="288" cy="118" r="3.5" />
        <circle cx="404" cy="76" r="3.5" />
        <circle cx="566" cy="52" r="3.5" />
      </g>
    </svg>
  );
}

/** A schematic plan of the roastery yard. */
export function YardPlan() {
  return (
    <svg
      viewBox="0 0 560 360"
      className="ob-yard-svg"
      role="img"
      aria-labelledby="ob-yard-title ob-yard-desc"
    >
      <title id="ob-yard-title">طرح شماتیک کیلن‌یارد ۸</title>
      <desc id="ob-yard-desc"> طرحی نمایشی که کیلن‌یارد را در کنار جادهٔ هاکنی، ورودی رُستری، پیشخوان چشایی و نزدیک‌ترین ایستگاه اتوبوس را نشان می‌دهد. </desc>
      <defs>
        <pattern id="ob-yard-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#f1ece3" strokeOpacity="0.06" />
        </pattern>
      </defs>
      <rect width="560" height="360" fill="#101011" />
      <rect width="560" height="360" fill="url(#ob-yard-grid)" />

      <path d="M0 272 C100 258 186 286 276 274 C374 260 458 286 560 270" fill="none" stroke="#2a2723" strokeWidth="34" />
      <path d="M0 272 C100 258 186 286 276 274 C374 260 458 286 560 270" fill="none" stroke="#b78b55" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="7 9" />
      <path d="M124 0 V360" stroke="#25221e" strokeWidth="24" />
      <path d="M124 0 V360" stroke="#b78b55" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="6 8" />

      <g fill="#171614" stroke="#3a352d" strokeWidth="1.4">
        <rect x="26" y="34" width="78" height="112" />
        <rect x="26" y="170" width="78" height="66" />
        <rect x="168" y="34" width="118" height="88" />
        <rect x="312" y="34" width="86" height="88" />
        <rect x="424" y="34" width="108" height="112" />
        <rect x="168" y="306" width="118" height="42" />
        <rect x="312" y="306" width="86" height="42" />
        <rect x="424" y="306" width="108" height="42" />
      </g>

      <rect x="312" y="166" width="154" height="82" fill="#b78b55" fillOpacity="0.14" stroke="#b78b55" strokeWidth="1.8" />
      <path d="M312 166 h154 v82 h-154z" fill="none" stroke="#b78b55" strokeWidth="1.8" />
      <text
        x="389"
        y="196"
        textAnchor="middle"
        fontFamily="var(--font-display), sans-serif"
        fontSize="9"
        letterSpacing="2.4"
        fill="#e6d6bd"
      >
        OBSIDIAN
      </text>
      <text
        x="389"
        y="212"
        textAnchor="middle"
        fontFamily="var(--font-body), sans-serif"
        fontSize="7.5"
        letterSpacing="1.8"
        fill="#c9b89e"
      >
        رُستری / پیشخوان
      </text>
      <path d="M312 240 h154" stroke="#b78b55" strokeOpacity="0.5" />

      <g stroke="#b78b55" strokeWidth="1.4" fill="none">
        <path d="M389 248 V292" />
        <path d="M380 282 l9 10 l9-10" />
      </g>
      <text
        x="404"
        y="286"
        fontFamily="var(--font-body), sans-serif"
        fontSize="7.5"
        letterSpacing="1.6"
        fill="#9d9282"
      >
        ورودی
      </text>

      <g fontFamily="var(--font-body), sans-serif" fontSize="8" letterSpacing="1.7" fill="#7d7466">
        <text x="28" y="26">کیلن‌یارد</text>
        <text x="28" y="330">جادهٔ هاکنی</text>
        <text x="404" y="26">E9</text>
      </g>

      <g>
        <circle cx="286" cy="272" r="6" fill="#b78b55" />
        <circle cx="286" cy="272" r="14" fill="none" stroke="#b78b55" strokeOpacity="0.5" />
        <text
          x="306"
          y="276"
          fontFamily="var(--font-body), sans-serif"
          fontSize="8"
          letterSpacing="1.5"
          fill="#cbbda9"
        >
          اتوبوس ۵۵ · ۲۵۴
        </text>
      </g>

      <path d="M62 132 h44 M84 110 v44" stroke="#b78b55" strokeOpacity="0.6" strokeWidth="1" />
      <text
        x="132"
        y="120"
        fontFamily="var(--font-body), sans-serif"
        fontSize="7.5"
        letterSpacing="1.4"
        fill="#7d7466"
      >
        Hackney Central · ۵ دقیقه
      </text>
      <text
        x="28"
        y="350"
        fontFamily="var(--font-body), sans-serif"
        fontSize="7"
        letterSpacing="1.4"
        fill="#5f584d"
      >
        طرح نمایشی · بدون مقیاس
      </text>
    </svg>
  );
}

/** A small seal used as a repeating brand mark. */
export function SealMark({ number }: { number: string }) {  return (
    <svg
      viewBox="0 0 80 80"
      className="ob-seal"
      role="img"
      aria-label={`مهر ابسیدین، شمارهٔ رُست ${number}`}
    >
      <circle cx="40" cy="40" r="37" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      <path d="M40 15 v50 M15 40 h50" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
      <text
        x="40"
        y="47"
        textAnchor="middle"
        fontFamily="var(--font-editorial), serif"
        fontSize="22"
        fill="currentColor"
      >
        {number}
      </text>
    </svg>
  );
}
