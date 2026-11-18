/**
 * Cigar Atelier — inline SVG artwork.
 * All drawings are illustrative. No product photograph or real mark is used.
 */

export function CigarMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="16" cy="16" rx="12.5" ry="7.5" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="16" cy="16" rx="8" ry="4.2" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <path d="M4 12.6h24M4 19.4h24" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <path d="M16 7.4l2.2 8.6-2.2 8.6-2.2-8.6L16 7.4z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

function stillCardLines() {
  const rows = [
    ["01", "سدر"],
    ["02", "مادورو"],
    ["03", "روزادو"],
    ["04", "دوبل کورونا"],
  ];
  return rows.map(([index, label], row) => (
    <g key={index}>
      <text
        x="684"
        y={388 + row * 38}
        fill="#8a6a43"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1.5"
      >
        {index}
      </text>
      <text
        x="714"
        y={388 + row * 38}
        fill="#2c2117"
        fontSize="12"
        fontWeight="600"
        letterSpacing="1.8"
      >
        {label}
      </text>
      <path
        d={`M684 ${402 + row * 38}h236`}
        stroke="#c8b696"
        strokeWidth="0.7"
        opacity="0.7"
      />
    </g>
  ));
}

export function AtelierStill({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1080 760"
      role="img"
      aria-label="تصویرسازی طبیعت بی‌جان از سینی سرو باز با سه پرونده سیگار برگ نواربندی‌شده، کارت نمایه چاپی و خط‌کش برنجی کهنه."
      focusable="false"
    >
      <defs>
        <linearGradient id="ca-hero-bg" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#1b130d" />
          <stop offset="0.55" stopColor="#100b08" />
          <stop offset="1" stopColor="#080706" />
        </linearGradient>
        <radialGradient id="ca-hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#a87540" stopOpacity="0.34" />
          <stop offset="1" stopColor="#a87540" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ca-cedar" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor="#8b5a32" />
          <stop offset="0.5" stopColor="#6d4425" />
          <stop offset="1" stopColor="#4a2d18" />
        </linearGradient>
        <linearGradient id="ca-cedar-lid" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#7d4f2c" />
          <stop offset="1" stopColor="#3f2715" />
        </linearGradient>
        <linearGradient id="ca-brass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dcb981" />
          <stop offset="0.5" stopColor="#a67c47" />
          <stop offset="1" stopColor="#6f4e28" />
        </linearGradient>
        <pattern id="ca-grain" width="16" height="9" patternUnits="userSpaceOnUse">
          <path d="M0 8c4-3 8-3 12 0s8 3 12 0" fill="none" stroke="#2f1b0c" strokeWidth="0.7" opacity="0.5" />
        </pattern>
        <filter id="ca-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <rect width="1080" height="760" fill="url(#ca-hero-bg)" />
      <ellipse cx="720" cy="250" rx="380" ry="270" fill="url(#ca-hero-glow)" />
      <ellipse cx="360" cy="606" rx="300" ry="26" fill="#000" opacity="0.5" filter="url(#ca-soft)" />

      <g opacity="0.14" stroke="#e7d3ae" strokeWidth="0.7">
        <path d="M60 0v760M1020 0v760M0 92h1080M0 668h1080" />
        <path d="M993 0v760M87 0v760" strokeDasharray="2 10" />
      </g>

      <g opacity="0.2">
        <text x="64" y="58" fill="#d8bf96" fontSize="11" letterSpacing="3" fontWeight="600">
          نمایه خانه / ۰۱
        </text>
        <text x="880" y="58" fill="#d8bf96" fontSize="11" letterSpacing="3" fontWeight="600">
          بزرگسالان ۱۸+
        </text>
        <path d="M64 74h952" stroke="#d8bf96" strokeWidth="0.7" />
      </g>

      {/* Towering shelf */}
      <rect x="72" y="556" width="936" height="9" fill="#332316" />
      <rect x="72" y="565" width="936" height="104" fill="#0e0a07" />
      <path d="M72 565h936" stroke="#7c5730" strokeWidth="0.8" opacity="0.5" />

      {/* Open humidor lid */}
      <g transform="rotate(4 330 350)">
        <rect x="138" y="238" width="386" height="206" rx="4" fill="url(#ca-cedar-lid)" />
        <rect x="138" y="238" width="386" height="206" rx="4" fill="url(#ca-grain)" opacity="0.7" />
        <rect x="158" y="258" width="346" height="166" rx="2" fill="none" stroke="#b18353" strokeWidth="1" opacity="0.45" />
        <path d="M232 238v206M430 238v206" stroke="#b18353" strokeWidth="0.8" opacity="0.3" />
      </g>

      {/* Tray */}
      <g>
        <rect x="118" y="428" width="424" height="144" rx="5" fill="url(#ca-cedar)" />
        <rect x="118" y="428" width="424" height="144" rx="5" fill="url(#ca-grain)" opacity="0.6" />
        <rect x="136" y="446" width="388" height="58" rx="3" fill="#29180d" />
        <rect x="118" y="500" width="424" height="72" fill="#5e3b20" />
        <rect x="118" y="500" width="424" height="72" fill="url(#ca-grain)" opacity="0.45" />
        <path d="M118 500h424" stroke="#a97a49" strokeWidth="1.2" opacity="0.8" />
        <circle cx="162" cy="536" r="4" fill="url(#ca-brass)" />
        <circle cx="498" cy="536" r="4" fill="url(#ca-brass)" />
        <path d="M154 564h352" stroke="#c9a36f" strokeWidth="0.8" opacity="0.35" />
      </g>

      {/* Records resting in the tray */}
      <g>
        <g transform="rotate(-9 330 472)">
          <rect x="166" y="458" width="318" height="30" rx="15" fill="#ceb993" />
          <rect x="166" y="458" width="318" height="30" rx="15" fill="url(#ca-grain)" opacity="0.18" />
          <rect x="300" y="454" width="76" height="38" rx="2" fill="#8a5a33" />
          <rect x="306" y="459" width="64" height="28" rx="1" fill="none" stroke="#e4cda8" strokeWidth="0.8" opacity="0.6" />
        </g>
        <g transform="rotate(-4 338 486)">
          <rect x="180" y="474" width="330" height="31" rx="15.5" fill="#8a5f3c" />
          <rect x="316" y="469" width="82" height="41" rx="2" fill="#2a1a10" />
          <rect x="322" y="474" width="70" height="31" rx="1" fill="none" stroke="#c79a63" strokeWidth="0.9" opacity="0.7" />
        </g>
        <g transform="rotate(2 340 502)">
          <rect x="186" y="492" width="316" height="29" rx="14.5" fill="#5f4029" />
          <rect x="312" y="487" width="74" height="39" rx="2" fill="#1c1410" />
          <rect x="318" y="492" width="62" height="29" rx="1" fill="none" stroke="#dcaf78" strokeWidth="0.9" opacity="0.65" />
        </g>
      </g>

      {/* Index card */}
      <g transform="rotate(-3.5 806 420)">
        <rect x="652" y="246" width="304" height="362" rx="2" fill="#000" opacity="0.45" transform="translate(9 12)" />
        <rect x="652" y="246" width="304" height="362" rx="2" fill="#efe4d1" />
        <rect x="652" y="246" width="118" height="26" fill="#b78b55" />
        <text x="672" y="264" fill="#f7efdf" fontSize="10" fontWeight="700" letterSpacing="2.4">
          خانه ۰۱
        </text>
        <text x="684" y="318" fill="#2c2117" fontSize="17" fontWeight="700" letterSpacing="3.4">
          آتلیه سیگار برگ
        </text>
        <text x="684" y="342" fill="#7a654a" fontSize="10" letterSpacing="2.6">
          پرونده مجموعه
        </text>
        <path d="M684 358h240" stroke="#2c2117" strokeWidth="0.9" />
        {stillCardLines()}
        <text x="684" y="568" fill="#8a6a43" fontSize="9.5" letterSpacing="2.2" fontWeight="700">
          بایگانی · غیرقابل فروش
        </text>
        <circle cx="912" cy="562" r="13" fill="none" stroke="#a67c47" strokeWidth="1.2" />
        <path d="M912 551v22M901 562h22" stroke="#a67c47" strokeWidth="0.8" opacity="0.7" />
      </g>

      {/* Brass rule */}
      <g transform="rotate(-14 470 690)">
        <rect x="238" y="666" width="546" height="15" rx="1.5" fill="url(#ca-brass)" />
        <rect x="238" y="666" width="546" height="15" rx="1.5" fill="none" stroke="#e4c797" strokeWidth="0.7" opacity="0.6" />
        {Array.from({ length: 18 }).map((_, tick) => (
          <path
            key={tick}
            d={`M${258 + tick * 30} 666v${tick % 3 === 0 ? 11 : 6}`}
            stroke="#3a2713"
            strokeWidth="0.8"
            opacity="0.7"
          />
        ))}
      </g>

      {/* Seal */}
      <g transform="translate(968 648)">
        <circle r="30" fill="#120c08" stroke="#a67c47" strokeWidth="1" />
        <circle r="23" fill="none" stroke="#a67c47" strokeWidth="0.7" opacity="0.6" />
        <path d="M0 -14l4.2 9.8L14 0l-9.8 4.2L0 14l-4.2-9.8L-14 0l9.8-4.2z" fill="#c79a63" opacity="0.85" />
      </g>

      <g opacity="0.4" fill="#d8bf96">
        <circle cx="110" cy="196" r="1.3" />
        <circle cx="588" cy="128" r="1" />
        <circle cx="936" cy="198" r="1.5" />
        <circle cx="276" cy="112" r="0.9" />
      </g>
    </svg>
  );
}

export function CigarStudy({
  item,
  className,
}: {
  item: {
    index: string;
    name: string;
    tone: string;
    band: string;
    bandInk: string;
  };
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 680 400"
      role="img"
      aria-label={`ترسیم تصویری با مقیاس از پرونده ${item.index}، ${item.name}: شکل سیگار برگ نواربندی‌شده در کنار خط‌کش طول بدون نشانه.`}
      focusable="false"
    >
      <defs>
        <linearGradient id="ca-study-bg" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#17110c" />
          <stop offset="1" stopColor="#0b0907" />
        </linearGradient>
        <linearGradient id={`ca-body-${item.index}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={item.tone} />
          <stop offset="0.55" stopColor={item.tone} />
          <stop offset="1" stopColor="#2f2117" />
        </linearGradient>
        <filter id="ca-study-shadow" x="-30%" y="-60%" width="160%" height="240%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      <rect width="680" height="400" fill="url(#ca-study-bg)" />
      <g opacity="0.1" stroke="#e7d3ae" strokeWidth="0.7">
        <path d="M0 60h680M0 340h680M48 0v400M632 0v400" />
        <path d="M0 200h680" strokeDasharray="3 12" />
      </g>

      <text x="48" y="42" fill="#9b8468" fontSize="10" letterSpacing="2.6" fontWeight="600">
        پرونده / {item.index}
      </text>
      <text x="632" y="42" fill="#6f5f4c" fontSize="10" letterSpacing="2.2" textAnchor="end">
        بدون مقیاس
      </text>

      <ellipse cx="345" cy="250" rx="292" ry="13" fill="#000" opacity="0.55" filter="url(#ca-study-shadow)" />

      <g>
        <rect
          x="78"
          y="168"
          width="524"
          height="58"
          rx="29"
          fill={`url(#ca-body-${item.index})`}
        />
        <ellipse cx="78" cy="197" rx="24" ry="29" fill={item.tone} />
        <ellipse cx="78" cy="197" rx="15" ry="20" fill="none" stroke="#1e140d" strokeWidth="0.8" opacity="0.35" />
        <ellipse cx="602" cy="197" rx="11" ry="29" fill="#25180f" opacity="0.8" />
        <path d="M110 180h150" stroke="#f7ead3" strokeWidth="1" opacity="0.18" />

        <rect x="282" y="152" width="132" height="90" fill={item.band} />
        <rect x="290" y="160" width="116" height="74" fill="none" stroke={item.bandInk} strokeWidth="1" opacity="0.55" />
        <text
          x="348"
          y="197"
          fill={item.bandInk}
          fontSize="22"
          fontWeight="700"
          letterSpacing="2.4"
          textAnchor="middle"
        >
          {item.index}
        </text>
        <text
          x="348"
          y="216"
          fill={item.bandInk}
          fontSize="7.5"
          letterSpacing="2.4"
          textAnchor="middle"
          opacity="0.8"
        >
          آتلیه
        </text>
        <path d="M282 258v12M414 258v12" stroke="#9b8468" strokeWidth="0.8" opacity="0.5" />
      </g>

      {/* Length rule */}
      <g opacity="0.7">
        <path d="M78 302h524" stroke="#9b8468" strokeWidth="0.8" />
        <path d="M78 294v16M602 294v16M340 297v10" stroke="#9b8468" strokeWidth="0.8" />
        <text x="340" y="330" fill="#9b8468" fontSize="9" letterSpacing="2.4" textAnchor="middle">
          طول تصویری
        </text>
      </g>

      <text x="48" y="368" fill="#6f5f4c" fontSize="9" letterSpacing="1.8">
        پرونده ترسیمی · هیچ محصولی نمایش داده نمی‌شود
      </text>
      <text x="632" y="368" fill="#6f5f4c" fontSize="9" letterSpacing="1.8" textAnchor="end">
        CA / {item.index}
      </text>
    </svg>
  );
}

export function MaterialSwatch({
  variant,
  className,
}: {
  variant: "cedar" | "brass" | "paper";
  className?: string;
}) {
  if (variant === "cedar") {
    return (
      <svg
        className={className}
        viewBox="0 0 360 240"
        role="img"
        aria-label="بررسی تصویری چوب سدر با خطوط رگه‌های باز."
        focusable="false"
      >
        <defs>
          <linearGradient id="ca-swatch-cedar" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0" stopColor="#8a5a33" />
            <stop offset="1" stopColor="#4b2f1a" />
          </linearGradient>
        </defs>
        <rect width="360" height="240" fill="url(#ca-swatch-cedar)" />
        <g fill="none" stroke="#2e1b0d" strokeWidth="1.1" opacity="0.5">
          <path d="M0 32c58 18 108-20 168 2s118 26 192 0" />
          <path d="M0 68c52 20 104-14 170 6s126 22 190-5" />
          <path d="M0 106c64 16 102-22 164 0s122 28 196 1" />
          <path d="M0 146c56 20 112-16 174 4s120 24 186-4" />
          <path d="M0 186c60 14 106-18 168 2s124 24 192-2" />
          <path d="M0 222c52 16 116-12 176 6s118 20 184-4" />
        </g>
        <g fill="none" stroke="#c99a63" strokeWidth="0.8" opacity="0.4">
          <ellipse cx="92" cy="118" rx="58" ry="17" />
          <ellipse cx="92" cy="118" rx="34" ry="9" />
          <ellipse cx="92" cy="118" rx="12" ry="3" />
        </g>
        <path d="M24 24h312v192H24z" fill="none" stroke="#f0dcbd" strokeWidth="1" opacity="0.3" />
        <text x="28" y="220" fill="#f0dcbd" fontSize="9" letterSpacing="2.2" opacity="0.8">
          سدر / رگه‌های باز
        </text>
      </svg>
    );
  }

  if (variant === "brass") {
    return (
      <svg
        className={className}
        viewBox="0 0 360 240"
        role="img"
        aria-label="بررسی تصویری برنج کهنه با خطوط افقی برس‌خورده."
        focusable="false"
      >
        <defs>
          <linearGradient id="ca-swatch-brass" x1="0" y1="0" x2="0.2" y2="1">
            <stop offset="0" stopColor="#d8b57c" />
            <stop offset="0.45" stopColor="#a87e4a" />
            <stop offset="0.7" stopColor="#c9a36b" />
            <stop offset="1" stopColor="#6d4c28" />
          </linearGradient>
        </defs>
        <rect width="360" height="240" fill="url(#ca-swatch-brass)" />
        <g stroke="#f3ddb4" strokeWidth="0.7" opacity="0.35">
          {Array.from({ length: 24 }).map((_, line) => (
            <path key={line} d={`M0 ${8 + line * 10}h360`} />
          ))}
        </g>
        <g stroke="#4a3218" strokeWidth="0.8" opacity="0.35">
          {Array.from({ length: 12 }).map((_, line) => (
            <path key={line} d={`M0 ${13 + line * 20}h360`} />
          ))}
        </g>
        <ellipse cx="180" cy="120" rx="120" ry="60" fill="none" stroke="#f6e6c8" strokeWidth="0.8" opacity="0.3" />
        <path d="M24 24h312v192H24z" fill="none" stroke="#f6e6c8" strokeWidth="1" opacity="0.3" />
        <text x="28" y="220" fill="#2f2010" fontSize="9" letterSpacing="2.2" opacity="0.75">
          برنج کهنه / برس‌خورده
        </text>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 360 240"
      role="img"
      aria-label="بررسی تصویری نمایه چاپی روی کاغذ کرم با خطوط راهنما و زبانه شماره‌دار."
      focusable="false"
    >
      <rect width="360" height="240" fill="#e7dac3" />
      <rect x="24" y="24" width="312" height="192" fill="#f1e6d2" stroke="#c9b696" strokeWidth="1" />
      <rect x="256" y="24" width="80" height="30" fill="#b78b55" />
      <text x="272" y="44" fill="#f7efdf" fontSize="10" letterSpacing="2" fontWeight="700">
        نمایه
      </text>
      <text x="48" y="72" fill="#2c2117" fontSize="12" letterSpacing="2.6" fontWeight="700">
        پرونده خانه
      </text>
      <g stroke="#b9a685" strokeWidth="0.8">
        <path d="M48 92h264" />
        <path d="M48 122h264" />
        <path d="M48 152h264" />
        <path d="M48 182h200" />
      </g>
      <g fill="#8a6a43" fontSize="8" letterSpacing="1.6" fontWeight="700">
        <text x="48" y="114">01</text>
        <text x="48" y="144">02</text>
        <text x="48" y="174">03</text>
      </g>
      <g fill="#4b3c29" fontSize="8" letterSpacing="1.4">
        <text x="72" y="114">سدر</text>
        <text x="72" y="144">مادورو</text>
        <text x="72" y="174">روسادو</text>
      </g>
      <path d="M24 24h312v192H24z" fill="none" stroke="#f7efdf" strokeWidth="2" opacity="0.4" />
      <text x="28" y="220" fill="#4b3c29" fontSize="9" letterSpacing="2.2" opacity="0.8">
        نمایه چاپی / شماره‌گذاری‌شده
      </text>
    </svg>
  );
}
