/**
 * Onchain Studio - procedural artwork.
 *
 * Inline SVG ledgers and marks. No WebGL and no images. One slow scan line is
 * the only motion, disabled by `prefers-reduced-motion`.
 */

export function BlockMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 2.4 L21.2 7.4 V16.6 L12 21.6 L2.8 16.6 V7.4 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <path d="M2.8 7.4 L12 12.3 L21.2 7.4" stroke="currentColor" strokeWidth="1" />
      <path d="M12 12.3 V21.6" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="12" cy="12.3" r="2" fill="currentColor" />
    </svg>
  );
}

type LedgerBlockProps = {
  x: number;
  y: number;
  dim?: boolean;
};

function LedgerBlock({ x, y, dim = false }: LedgerBlockProps) {
  return (
    <g transform={`translate(${x} ${y})`} opacity={dim ? 0.72 : 1}>
      <path
        d="M -124 0 L 0 27 L 0 80 L -124 53 Z"
        fill="#10160f"
        stroke="rgba(179,210,174,0.34)"
      />
      <path
        d="M 0 27 L 124 0 L 124 53 L 0 80 Z"
        fill="#0b100a"
        stroke="rgba(179,210,174,0.4)"
      />
      <path
        d="M 0 -27 L 124 0 L 0 27 L -124 0 Z"
        fill="#182016"
        stroke="rgba(179,210,174,0.62)"
      />
      <path
        d="M 0 -13 L 62 0 L 0 13 L -62 0 Z"
        fill="none"
        stroke="rgba(179,210,174,0.24)"
        strokeDasharray="2 5"
      />
      <path d="M -92 0 L 0 20 L 92 0" fill="none" stroke="rgba(179,210,174,0.18)" />
      <circle cx="0" cy="0" r="3.2" fill="#b3d2ae" />
      <path
        d="M -92 18 H -20 M 18 18 H 92 M -70 30 H -10 M 28 30 H 78"
        stroke="rgba(179,210,174,0.16)"
      />
      <path d="M -124 0 V 53 M 124 0 V 53" stroke="rgba(179,210,174,0.22)" />
    </g>
  );
}

export function LedgerStack() {
  const blocks = [
    { x: 374, y: 240, dim: false },
    { x: 342, y: 360, dim: true },
    { x: 380, y: 480, dim: false },
    { x: 350, y: 600, dim: true },
  ];

  return (
    <svg
      className="oc-stack"
      viewBox="0 0 720 740"
      role="img"
      aria-label="دنبالهٔ نمایشی چهار بلوک دفتری ایزومتریک متصل با ستون فقرات چین‌دار، با سبز ملایم روی شبکه‌ای تیره."
    >
      <defs>
        <radialGradient id="oc-halo" cx="50%" cy="46%" r="52%">
          <stop offset="0%" stopColor="#b3d2ae" stopOpacity="0.18" />
          <stop offset="58%" stopColor="#5b7b58" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#090b09" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="oc-scan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b3d2ae" stopOpacity="0" />
          <stop offset="50%" stopColor="#b3d2ae" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#b3d2ae" stopOpacity="0" />
        </linearGradient>
        <pattern id="oc-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(240,243,237,0.045)" />
        </pattern>
        <clipPath id="oc-clip">
          <rect width="720" height="740" />
        </clipPath>
      </defs>

      <rect width="720" height="740" fill="#080b08" />
      <rect width="720" height="740" fill="url(#oc-grid)" />
      <circle cx="360" cy="420" r="320" fill="url(#oc-halo)" />

      <g clipPath="url(#oc-clip)">
        <rect className="oc-scanline" x="40" y="0" width="640" height="1.2" fill="url(#oc-scan)" />
      </g>

      {/* Floor */}
      <ellipse cx="360" cy="682" rx="236" ry="30" fill="none" stroke="rgba(240,243,237,0.13)" />
      <ellipse cx="360" cy="682" rx="176" ry="21" fill="none" stroke="rgba(179,210,174,0.16)" strokeDasharray="2 7" />
      <line x1="52" y1="682" x2="668" y2="682" stroke="rgba(240,243,237,0.08)" />
      <g stroke="rgba(179,210,174,0.3)" strokeWidth="1">
        {Array.from({ length: 25 }, (_, index) => {
          const x = 72 + index * 24;
          const major = index % 4 === 0;
          return (
            <line
              key={x}
              x1={x}
              y1="682"
              x2={x}
              y2={major ? 690 : 687}
              opacity={major ? 1 : 0.5}
            />
          );
        })}
      </g>

      {/* Spine */}
      <path
        d="M 360 176 V 646"
        stroke="rgba(179,210,174,0.28)"
        strokeDasharray="2 8"
      />
      {[240, 360, 480, 600].map((y) => (
        <circle key={y} cx="360" cy={y} r="2.4" fill="#b3d2ae" opacity="0.8" />
      ))}

      {blocks.map((block, index) => (
        <LedgerBlock key={block.y} x={block.x} y={block.y} dim={block.dim && index !== 0} />
      ))}

      {/* Annotations */}
      <g fill="none" stroke="rgba(179,210,174,0.28)" strokeWidth="1">
        <path d="M 510 240 H 588" />
        <path d="M 210 360 H 130" />
        <path d="M 516 480 H 588" />
        <path d="M 218 600 H 130" />
      </g>

      <g fontFamily="var(--oc-mono), ui-monospace, monospace" fontSize="9" letterSpacing="1.9">
        <text x="596" y="228" fill="#b3d2ae">۰۰۳ / رکورد</text>
        <text x="596" y="246" fontSize="7.5" fill="#778873">منتشرشده · نمونه</text>
        <text x="122" y="348" textAnchor="end" fill="#b3d2ae">۰۰۲ / بازبینی</text>
        <text x="122" y="366" textAnchor="end" fontSize="7.5" fill="#778873">مالک نام‌برده</text>
        <text x="596" y="468" fill="#b3d2ae">۰۰۱ / وضعیت</text>
        <text x="596" y="486" fontSize="7.5" fill="#778873">صریح</text>
        <text x="122" y="588" textAnchor="end" fill="#b3d2ae">۰۰۰ / پیدایش</text>
        <text x="122" y="606" textAnchor="end" fontSize="7.5" fill="#778873">شبکهٔ باز</text>
      </g>

      <g fill="#b3d2ae">
        <circle cx="510" cy="240" r="2.2" />
        <circle cx="210" cy="360" r="2.2" />
        <circle cx="516" cy="480" r="2.2" />
        <circle cx="218" cy="600" r="2.2" />
      </g>

      {/* Frame + labels */}
      <g fill="none" stroke="rgba(240,243,237,0.2)" strokeWidth="1">
        <path d="M 26 26 H 62 M 26 26 V 62" />
        <path d="M 694 26 H 658 M 694 26 V 62" />
        <path d="M 26 714 H 62 M 26 714 V 678" />
        <path d="M 694 714 H 658 M 694 714 V 678" />
      </g>

      <g fill="#778873" fontFamily="var(--oc-mono), ui-monospace, monospace" fontSize="8" letterSpacing="1.6">
        <text x="26" y="48">دفتر / توالی ۰۰۴</text>
        <text x="694" y="48" textAnchor="end">دادهٔ نمونه</text>
        <text x="26" y="704">آن‌چین استودیو</text>
        <text x="694" y="704" textAnchor="end">نمایشی — نه دادهٔ زنجیره</text>
      </g>

      <g fill="#b3d2ae">
        <circle cx="196" cy="44" r="2" />
      </g>
    </svg>
  );
}

export function LedgerRule() {
  return (
    <svg
      className="oc-rule"
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="0" y1="12" x2="1200" y2="12" stroke="rgba(240,243,237,0.14)" />
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
            stroke={major ? "rgba(179,210,174,0.5)" : "rgba(240,243,237,0.18)"}
          />
        );
      })}
      {Array.from({ length: 13 }, (_, index) => (
        <rect
          key={`block-${index}`}
          x={index * 100 + 48}
          y="9"
          width="6"
          height="6"
          fill={index % 3 === 0 ? "#b3d2ae" : "none"}
          stroke="rgba(179,210,174,0.5)"
        />
      ))}
    </svg>
  );
}

export function NoteGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="6.5" y="6.5" width="27" height="27" stroke="currentColor" opacity="0.5" />
      <path d="M12 15 H28 M12 20 H28 M12 25 H22" stroke="currentColor" strokeWidth="1" />
      <path d="M29 6.5 V12 H23.5" stroke="currentColor" opacity="0.7" />
    </svg>
  );
}
