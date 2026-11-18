/**
 * Cyber Defense - procedural artwork.
 *
 * Inline SVG only: a faceted shield, scan rings, signal bars and an incident
 * paper swatch. One slow radar sweep is the only motion, disabled by
 * `prefers-reduced-motion`.
 */

export function ShieldMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 2.6 L20 5.8 V11.4 C20 16.2 16.6 19.8 12 21.4 C7.4 19.8 4 16.2 4 11.4 V5.8 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <path d="M12 2.6 V21.4" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M4 11.4 H20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M8.2 7.2 L12 10.4 L15.8 7.2" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="11.4" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function ShieldScan() {
  return (
    <svg
      className="cd-shield"
      viewBox="0 0 760 720"
      role="img"
      aria-label="یک سپهر چندوجهی نمایشی درون حلقه‌های هم‌مرکز رادار، با مس و قرمز هشدار روی شبکه‌ای تیره."
    >
      <defs>
        <radialGradient id="cd-halo" cx="50%" cy="46%" r="52%">
          <stop offset="0%" stopColor="#ec9b79" stopOpacity="0.2" />
          <stop offset="56%" stopColor="#8d4f39" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0b0808" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cd-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ec9b79" stopOpacity="0" />
          <stop offset="100%" stopColor="#ec9b79" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="cd-shield-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b241b" />
          <stop offset="100%" stopColor="#1d1410" />
        </linearGradient>
        <linearGradient id="cd-shield-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4d2e22" />
          <stop offset="100%" stopColor="#261710" />
        </linearGradient>
        <linearGradient id="cd-shield-left" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e130f" />
          <stop offset="100%" stopColor="#2f1d16" />
        </linearGradient>
        <pattern id="cd-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(246,236,231,0.045)" />
        </pattern>
        <clipPath id="cd-clip">
          <rect width="760" height="720" />
        </clipPath>
      </defs>

      <rect width="760" height="720" fill="#090706" />
      <rect width="760" height="720" fill="url(#cd-grid)" />
      <circle cx="380" cy="352" r="330" fill="url(#cd-halo)" />

      <g clipPath="url(#cd-clip)">
        <g className="cd-sweep">
          <path d="M 380 352 L 380 102 A 250 250 0 0 1 556 228 Z" fill="url(#cd-sweep)" />
          <path d="M 380 102 V 352" stroke="rgba(236,155,121,0.7)" strokeWidth="1" />
          <circle cx="380" cy="102" r="2.5" fill="#ec9b79" />
        </g>
      </g>

      {/* Rings */}
      <g fill="none">
        <circle cx="380" cy="352" r="276" stroke="rgba(246,236,231,0.12)" />
        <circle cx="380" cy="352" r="250" stroke="rgba(236,155,121,0.34)" />
        <circle cx="380" cy="352" r="196" stroke="rgba(236,155,121,0.22)" />
        <circle cx="380" cy="352" r="142" stroke="rgba(246,236,231,0.16)" strokeDasharray="2 7" />
        <circle cx="380" cy="352" r="92" stroke="rgba(236,155,121,0.28)" />
      </g>

      {/* Ring ticks */}
      <g stroke="rgba(236,155,121,0.4)" strokeWidth="1">
        {Array.from({ length: 48 }, (_, index) => {
          const angle = (index / 48) * Math.PI * 2 - Math.PI / 2;
          const major = index % 4 === 0;
          const inner = major ? 250 : 256;
          return (
            <line
              key={`tick-${index}`}
              x1={380 + Math.cos(angle) * inner}
              y1={352 + Math.sin(angle) * inner}
              x2={380 + Math.cos(angle) * 263}
              y2={352 + Math.sin(angle) * 263}
              opacity={major ? 0.8 : 0.35}
            />
          );
        })}
      </g>

      {/* Ring markers */}
      <g fill="#ec9b79">
        <circle cx="380" cy="102" r="2.4" />
        <circle cx="630" cy="352" r="2" opacity="0.7" />
        <circle cx="380" cy="602" r="1.8" opacity="0.5" />
        <circle cx="130" cy="352" r="1.8" opacity="0.5" />
      </g>

      {/* Crosshair */}
      <g stroke="rgba(246,236,231,0.1)" strokeWidth="1">
        <line x1="64" y1="352" x2="130" y2="352" />
        <line x1="630" y1="352" x2="696" y2="352" />
        <line x1="380" y1="36" x2="380" y2="76" />
        <line x1="380" y1="628" x2="380" y2="668" />
      </g>

      {/* Shield */}
      <g>
        <path
          d="M 380 176 L 519 228 V 396 C 519 470 463 522 380 560 C 297 522 241 470 241 396 V 228 Z"
          fill="none"
          stroke="rgba(236,155,121,0.22)"
          strokeWidth="8"
        />
        <path
          d="M 380 176 L 519 228 V 396 C 519 470 463 522 380 560 C 297 522 241 470 241 396 V 228 Z"
          fill="url(#cd-shield-top)"
          stroke="rgba(236,155,121,0.9)"
          strokeWidth="1.5"
        />
        <path d="M 380 176 L 519 228 L 380 366 Z" fill="#382218" opacity="0.95" />
        <path d="M 380 176 L 241 228 L 380 366 Z" fill="#241610" opacity="0.96" />
        <path d="M 241 228 V 396 L 380 366 Z" fill="url(#cd-shield-left)" />
        <path d="M 519 228 V 396 L 380 366 Z" fill="url(#cd-shield-right)" />
        <path
          d="M 241 396 C 244 460 294 512 380 552 L 380 366 Z"
          fill="#1c120e"
          opacity="0.97"
        />
        <path
          d="M 519 396 C 516 460 466 512 380 552 L 380 366 Z"
          fill="#38221a"
          opacity="0.94"
        />
        <path
          d="M 380 176 V 366 M 241 228 L 380 366 L 519 228"
          fill="none"
          stroke="rgba(236,155,121,0.36)"
        />
        <path
          d="M 380 190 L 505 237 V 394 C 505 462 454 510 380 545 C 306 510 255 462 255 394 V 237 Z"
          fill="none"
          stroke="rgba(246,236,231,0.2)"
          strokeDasharray="3 8"
        />
        <path d="M 380 366 L 380 544" stroke="rgba(236,155,121,0.4)" />
        <circle cx="380" cy="366" r="5" fill="#0b0808" stroke="#ec9b79" strokeWidth="1.2" />
        <circle cx="380" cy="366" r="11" fill="none" stroke="rgba(236,155,121,0.4)" className="cd-ping" />
        <circle cx="380" cy="366" r="2" fill="#f6ece2" />
      </g>

      {/* Shield edge markers */}
      <g fill="#ec9b79">
        <circle cx="380" cy="176" r="2.2" />
        <circle cx="519" cy="228" r="2.2" opacity="0.8" />
        <circle cx="241" cy="228" r="2.2" opacity="0.8" />
        <circle cx="380" cy="552" r="2.2" />
      </g>

      {/* Annotations */}
      <g
        fill="#b8a59c"
        fontFamily="var(--cd-mono), ui-monospace, monospace"
        fontSize="8"
        letterSpacing="1.7"
      >
        <text x="64" y="70">دفاع / مدل ۰۱</text>
        <text x="696" y="70" textAnchor="end">سیگنال / مدیریت‌شده</text>
        <text x="64" y="654">میدان واچ‌تاور ۵</text>
        <text x="696" y="654" textAnchor="end">نمایشی — نه زنده</text>
      </g>
      <g fill="#ec9b79">
        <text x="64" y="86" fontFamily="var(--cd-mono), ui-monospace, monospace" fontSize="7.5" letterSpacing="1.5">
          عملکرد خیالی
        </text>
        <text
          x="696"
          y="86"
          textAnchor="end"
          fontFamily="var(--cd-mono), ui-monospace, monospace"
          fontSize="7.5"
          letterSpacing="1.5"
        >
          دادهٔ نمونه
        </text>
      </g>

      {/* Frame + scale */}
      <g fill="none" stroke="rgba(246,236,231,0.2)" strokeWidth="1">
        <path d="M 26 26 H 62 M 26 26 V 62" />
        <path d="M 734 26 H 698 M 734 26 V 62" />
        <path d="M 26 694 H 62 M 26 694 V 658" />
        <path d="M 734 694 H 698 M 734 694 V 658" />
      </g>
      <g stroke="rgba(236,155,121,0.34)" strokeWidth="1">
        {Array.from({ length: 31 }, (_, index) => {
          const x = 280 + index * 7;
          const major = index % 5 === 0;
          return (
            <line key={`scale-${index}`} x1={x} y1="688" x2={x} y2={major ? 680 : 684} />
          );
        })}
      </g>
    </svg>
  );
}

export function ScanRule() {
  return (
    <svg
      className="cd-rule"
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="0" y1="12" x2="1200" y2="12" stroke="rgba(246,236,231,0.14)" />
      {Array.from({ length: 97 }, (_, index) => {
        const x = index * 12.5;
        const major = index % 8 === 0;
        return (
          <line
            key={index}
            x1={x}
            y1="12"
            x2={x}
            y2={major ? 3 : 8}
            stroke={major ? "rgba(236,155,121,0.55)" : "rgba(246,236,231,0.18)"}
          />
        );
      })}
      {Array.from({ length: 13 }, (_, index) => (
        <rect
          key={`node-${index}`}
          x={index * 100 + 48}
          y="9"
          width="6"
          height="6"
          fill={index % 3 === 0 ? "#ec9b79" : "none"}
          stroke="rgba(236,155,121,0.5)"
        />
      ))}
    </svg>
  );
}

export function RecordGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M9 5.5 H26 L32 11.5 V34.5 H9 Z" stroke="currentColor" opacity="0.6" />
      <path d="M26 5.5 V11.5 H32" stroke="currentColor" opacity="0.8" />
      <path d="M14 17 H27 M14 22 H27 M14 27 H22" stroke="currentColor" strokeWidth="1" />
      <circle cx="9" cy="5.5" r="2" fill="currentColor" />
    </svg>
  );
}

export function MaterialSwatch({ variant }: { variant: "rings" | "signal" | "paper" }) {
  if (variant === "rings") {
    return (
      <svg
        className="cd-swatch"
        viewBox="0 0 220 160"
        role="img"
        aria-label="تصویر حلقه‌های هم‌مرکز اسکن با جاروب رادار."
      >
        <rect width="220" height="160" fill="#0d0a08" />
        <g stroke="rgba(246,236,231,0.05)">
          {Array.from({ length: 6 }, (_, index) => (
            <line key={`v-${index}`} x1={index * 40} y1="0" x2={index * 40} y2="160" />
          ))}
          {Array.from({ length: 4 }, (_, index) => (
            <line key={`h-${index}`} x1="0" y1={index * 40} x2="220" y2={index * 40} />
          ))}
        </g>
        <g fill="none">
          <circle cx="110" cy="80" r="62" stroke="rgba(236,155,121,0.26)" />
          <circle cx="110" cy="80" r="44" stroke="rgba(236,155,121,0.2)" />
          <circle cx="110" cy="80" r="26" stroke="rgba(246,236,231,0.16)" strokeDasharray="2 5" />
        </g>
        <path d="M 110 80 L 110 18 A 62 62 0 0 1 164 49 Z" fill="rgba(236,155,121,0.14)" />
        <line x1="110" y1="80" x2="110" y2="18" stroke="#ec9b79" strokeWidth="1" />
        <circle cx="110" cy="80" r="2.5" fill="#ec9b79" />
        <circle cx="153" cy="59" r="2" fill="#f6ece2" />
        <circle cx="74" cy="104" r="1.7" fill="#ec9b79" opacity="0.7" />
        <circle cx="133" cy="107" r="1.5" fill="#ec9b79" opacity="0.5" />
        <text x="14" y="148" fill="#6f6059" fontFamily="var(--cd-mono), monospace" fontSize="6.5" letterSpacing="1.4">
          اسکن / ۱۲ ثانیه
        </text>
        <text x="206" y="148" textAnchor="end" fill="#6f6059" fontFamily="var(--cd-mono), monospace" fontSize="6.5" letterSpacing="1.4">
          R=250
        </text>
      </svg>
    );
  }

  if (variant === "signal") {
    const heights = [18, 26, 14, 34, 22, 48, 30, 20, 38, 26, 16, 30, 24, 42, 18, 28];
    return (
      <svg
        className="cd-swatch"
        viewBox="0 0 220 160"
        role="img"
        aria-label="تصویر نمودار میله‌ای سیگنال با یک میلهٔ بلند قرمز هشدار."
      >
        <rect width="220" height="160" fill="#0d0a08" />
        <line x1="20" y1="120" x2="200" y2="120" stroke="rgba(246,236,231,0.16)" />
        {heights.map((height, index) => (
          <rect
            key={index}
            x={20 + index * 11.25}
            y={120 - height}
            width="6"
            height={height}
            fill={index === 5 ? "#ef6a4c" : "rgba(236,155,121,0.34)"}
          />
        ))}
        <line x1="83" y1="28" x2="83" y2="132" stroke="rgba(239,106,76,0.4)" strokeDasharray="2 4" />
        <circle cx="83" cy="28" r="2.5" fill="#ef6a4c" />
        <text x="20" y="148" fill="#6f6059" fontFamily="var(--cd-mono), monospace" fontSize="6.5" letterSpacing="1.4">
          یک هشدار
        </text>
        <text x="200" y="148" textAnchor="end" fill="#6f6059" fontFamily="var(--cd-mono), monospace" fontSize="6.5" letterSpacing="1.4">
          R=نویز
        </text>
      </svg>
    );
  }

  return (
    <svg
      className="cd-swatch"
      viewBox="0 0 220 160"
      role="img"
      aria-label="تصویر یک پروندهٔ کاغذی رویداد با مهر نمونه."
    >
      <rect width="220" height="160" fill="#0d0a08" />
      <g transform="rotate(-2 110 80)">
        <rect x="44" y="16" width="132" height="128" fill="#e9e3da" />
        <rect x="44" y="16" width="132" height="128" fill="none" stroke="rgba(27,23,38,0.3)" />
        <rect x="44" y="16" width="132" height="14" fill="#d9d0c2" />
        <text x="52" y="26" fill="#514a60" fontFamily="var(--cd-mono), monospace" fontSize="5.5" letterSpacing="1">
          رویداد / نمونه
        </text>
        <rect x="54" y="40" width="62" height="5" fill="#2a2430" />
        <rect x="54" y="52" width="112" height="3" fill="#aca293" />
        <rect x="54" y="60" width="96" height="3" fill="#aca293" />
        <rect x="54" y="68" width="106" height="3" fill="#aca293" />
        <rect x="54" y="82" width="44" height="3" fill="#aca293" />
        <rect x="54" y="90" width="78" height="3" fill="#aca293" />
        <rect x="54" y="98" width="90" height="3" fill="#aca293" />
        <rect x="54" y="112" width="58" height="10" fill="#2a2430" opacity="0.14" />
        <rect x="118" y="112" width="48" height="10" fill="#2a2430" opacity="0.14" />
        <g transform="rotate(-5 156 122)">
          <rect x="126" y="108" width="60" height="20" fill="none" stroke="rgba(239,106,76,0.7)" strokeDasharray="2 2" />
          <text x="156" y="122" textAnchor="middle" fill="#c4472e" fontFamily="var(--cd-mono), monospace" fontSize="6.5" letterSpacing="1.4">
            نمونه
          </text>
        </g>
      </g>
      <text x="20" y="150" fill="#6f6059" fontFamily="var(--cd-mono), monospace" fontSize="6.5" letterSpacing="1.4">
        روایت مکتوب
      </text>
    </svg>
  );
}
