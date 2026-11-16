import type { SiteMotif } from "@/lib/sites/types";

type SitePosterProps = {
  motif: SiteMotif;
  accent: string;
  accentSoft: string;
  background: string;
  ink: string;
  surface: string;
  label: string;
  className?: string;
  /** Adds the fine grid and index marks used on full-size hero visuals. */
  detailed?: boolean;
};

/**
 * A lightweight, deterministic SVG identity for each template website.
 * It carries the same motif as the catalog card, the site hero and the
 * WebGL scene title, so a visitor always knows which product they opened.
 */
export function SitePoster({
  motif,
  accent,
  accentSoft,
  background,
  ink,
  surface,
  label,
  className,
  detailed = false,
}: SitePosterProps) {
  const uid = `poster-${motif}`;

  return (
    <svg
      viewBox="0 0 800 640"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={`${label} visual identity`}
    >
      <defs>
        <radialGradient id={`${uid}-glow`} cx="50%" cy="44%" r="62%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
          <stop offset="52%" stopColor={accentSoft} stopOpacity="0.08" />
          <stop offset="100%" stopColor={background} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-metal`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={ink} stopOpacity="0.24" />
          <stop offset="45%" stopColor={accent} stopOpacity="0.55" />
          <stop offset="100%" stopColor={accentSoft} stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id={`${uid}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={background} stopOpacity="0" />
          <stop offset="100%" stopColor={background} stopOpacity="0.72" />
        </linearGradient>
        <pattern
          id={`${uid}-grid`}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0H0V40"
            fill="none"
            stroke={ink}
            strokeOpacity="0.055"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="800" height="640" fill={background} />
      <rect width="800" height="640" fill={`url(#${uid}-grid)`} />
      <rect width="800" height="640" fill={`url(#${uid}-glow)`} />

      <g opacity="0.55" fill="none" stroke={ink}>
        <circle cx="400" cy="318" r="252" strokeOpacity="0.08" />
        <circle cx="400" cy="318" r="204" strokeOpacity="0.06" />
      </g>

      <g>{motifArt(motif, { accent, accentSoft, ink, surface, uid })}</g>

      {detailed ? (
        <g
          fill="none"
          stroke={accent}
          strokeOpacity="0.55"
          strokeWidth="1"
          fontFamily="ui-monospace, monospace"
        >
          <path d="M56 56h28M56 56v28" />
          <path d="M744 584h-28M744 584v-28" />
          <circle cx="400" cy="318" r="292" strokeOpacity="0.14" strokeDasharray="1 11" />
        </g>
      ) : null}

      <rect y="440" width="800" height="200" fill={`url(#${uid}-fade)`} />
    </svg>
  );
}

type ArtTokens = {
  accent: string;
  accentSoft: string;
  ink: string;
  surface: string;
  uid: string;
};

function motifArt(motif: SiteMotif, t: ArtTokens) {
  switch (motif) {
    case "cup":
      return (
        <g>
          <ellipse cx="400" cy="466" rx="196" ry="30" fill={t.surface} />
          <ellipse cx="400" cy="460" rx="196" ry="30" fill="none" stroke={t.accent} strokeOpacity="0.34" />
          <path
            d="M286 300h228v86c0 56-46 96-114 96s-114-40-114-96z"
            fill={t.surface}
            stroke={t.accent}
            strokeOpacity="0.5"
            strokeWidth="2"
          />
          <path d="M514 322h30c40 0 54 58 10 78-18 8-32 4-40 0" fill="none" stroke={t.accent} strokeWidth="8" strokeOpacity="0.5" />
          <ellipse cx="400" cy="300" rx="114" ry="26" fill={`url(#${t.uid}-metal)`} />
          <ellipse cx="400" cy="300" rx="88" ry="17" fill={t.accent} fillOpacity="0.28" />
          <g fill="none" stroke={t.ink} strokeOpacity="0.4" strokeWidth="2.5" strokeLinecap="round">
            <path d="M352 246c-18-24 18-40 0-66" />
            <path d="M400 236c-20-28 20-46 0-76" />
            <path d="M448 246c-18-24 18-40 0-66" />
          </g>
        </g>
      );
    case "pour":
      return (
        <g>
          <path
            d="M246 286h152l-22 148c-4 26-22 42-54 42s-50-16-54-42z"
            fill={t.surface}
            stroke={t.accent}
            strokeOpacity="0.5"
            strokeWidth="2"
          />
          <path d="M398 300l106-42 14 24-92 46" fill={t.surface} stroke={t.accent} strokeOpacity="0.5" strokeWidth="2" />
          <path d="M512 270c10 30-2 64-18 92-20 38-52 60-84 70" fill="none" stroke={t.accent} strokeWidth="4" strokeOpacity="0.7" />
          <path d="M330 276c-8-28 22-38 10-64" fill="none" stroke={t.ink} strokeOpacity="0.3" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M420 460h122l-16 76H436z" fill={t.surface} stroke={t.accent} strokeOpacity="0.44" strokeWidth="2" />
          <ellipse cx="481" cy="460" rx="61" ry="12" fill={t.accent} fillOpacity="0.2" />
          <circle cx="306" cy="250" r="8" fill={t.accent} />
        </g>
      );
    case "canister":
      return (
        <g>
          <rect x="304" y="186" width="192" height="310" rx="30" fill={t.surface} stroke={t.accent} strokeOpacity="0.45" strokeWidth="2" />
          <rect x="292" y="150" width="216" height="54" rx="20" fill={t.surface} stroke={t.accent} strokeOpacity="0.5" strokeWidth="2" />
          <ellipse cx="400" cy="156" rx="84" ry="16" fill={t.accent} fillOpacity="0.2" />
          <rect x="304" y="300" width="192" height="70" fill={t.accent} fillOpacity="0.12" />
          <path d="M304 300h192M304 370h192" stroke={t.accent} strokeOpacity="0.35" />
          <g fill={t.ink} fillOpacity="0.42">
            <rect x="338" y="240" width="124" height="7" rx="3.5" />
            <rect x="338" y="260" width="82" height="5" rx="2.5" />
          </g>
          <text
            x="400"
            y="342"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="24"
            letterSpacing="8"
            fill={t.accent}
            fillOpacity="0.85"
          >
            No. 01
          </text>
          <g fill={t.ink} fillOpacity="0.28">
            <rect x="338" y="410" width="124" height="5" rx="2.5" />
            <rect x="338" y="426" width="96" height="5" rx="2.5" />
            <rect x="338" y="442" width="112" height="5" rx="2.5" />
          </g>
        </g>
      );
    case "cloche":
      return (
        <g>
          <path d="M250 430c0-160 60-252 150-252s150 92 150 252" fill={t.surface} stroke={t.accent} strokeOpacity="0.5" strokeWidth="2" />
          <path d="M282 430c0-126 44-210 118-210s118 84 118 210" fill="none" stroke={t.ink} strokeOpacity="0.14" />
          <circle cx="400" cy="164" r="22" fill={t.surface} stroke={t.accent} strokeOpacity="0.6" strokeWidth="2" />
          <path d="M200 434h400" stroke={t.accent} strokeWidth="3" strokeOpacity="0.55" />
          <path d="M232 470h336" stroke={t.ink} strokeOpacity="0.2" strokeWidth="2" />
          <ellipse cx="400" cy="436" rx="196" ry="12" fill={t.accent} fillOpacity="0.1" />
          <path d="M316 330c18-62 72-92 138-92" fill="none" stroke={t.ink} strokeOpacity="0.22" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    case "ember":
      return (
        <g>
          <circle cx="400" cy="400" r="182" fill={t.accent} fillOpacity="0.08" />
          <circle cx="400" cy="400" r="118" fill={t.accent} fillOpacity="0.1" />
          <g stroke={t.accentSoft} strokeWidth="26" strokeLinecap="round" strokeOpacity="0.55">
            <path d="M264 456l272-34" />
            <path d="M264 422l272 34" />
          </g>
          <g stroke={t.accent} strokeWidth="18" strokeLinecap="round">
            <path d="M266 440l268 0" strokeOpacity="0.35" />
          </g>
          <path
            d="M400 194c34 46 76 84 76 142 0 54-34 96-76 96s-76-42-76-96c0-58 42-96 76-142z"
            fill={t.accent}
            fillOpacity="0.22"
            stroke={t.accent}
            strokeOpacity="0.65"
            strokeWidth="2"
          />
          <path d="M400 292c16 24 34 40 34 66 0 24-16 44-34 44s-34-20-34-44c0-26 18-42 34-66z" fill={t.accent} fillOpacity="0.55" />
          <g fill={t.accent}>
            <circle cx="310" cy="250" r="4" />
            <circle cx="496" cy="230" r="3" />
            <circle cx="520" cy="310" r="5" />
            <circle cx="272" cy="330" r="3" />
          </g>
        </g>
      );
    case "bowl":
      return (
        <g>
          <ellipse cx="400" cy="320" rx="176" ry="38" fill={t.accent} fillOpacity="0.16" />
          <ellipse cx="400" cy="320" rx="176" ry="38" fill="none" stroke={t.accent} strokeOpacity="0.5" strokeWidth="2" />
          <path d="M224 326c0 86 78 152 176 152s176-66 176-152" fill={t.surface} stroke={t.accent} strokeOpacity="0.5" strokeWidth="2" />
          <path d="M400 478v34M336 512h128" stroke={t.accent} strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
          <g stroke={t.ink} strokeOpacity="0.35" strokeWidth="2.5" strokeLinecap="round" fill="none">
            <path d="M338 258c-16-26 16-40 0-66" />
            <path d="M400 246c-18-30 18-46 0-76" />
            <path d="M462 258c-16-26 16-40 0-66" />
          </g>
          <g stroke={t.accent} strokeWidth="6" strokeLinecap="round" strokeOpacity="0.5">
            <path d="M548 236l-96 120" />
            <path d="M582 262l-96 120" />
          </g>
        </g>
      );
    case "network": {
      const nodes = [
        [220, 250],
        [330, 190],
        [452, 228],
        [560, 196],
        [246, 392],
        [366, 330],
        [470, 402],
        [576, 344],
        [306, 494],
        [452, 516],
        [540, 468],
      ];
      const links = [
        [0, 1],
        [1, 2],
        [2, 3],
        [0, 4],
        [0, 5],
        [1, 5],
        [2, 5],
        [2, 6],
        [3, 6],
        [3, 7],
        [4, 5],
        [4, 8],
        [5, 6],
        [5, 8],
        [5, 9],
        [6, 7],
        [6, 9],
        [6, 10],
        [7, 10],
        [8, 9],
        [9, 10],
      ];
      return (
        <g>
          <g stroke={t.accent} strokeOpacity="0.3">
            {links.map(([a, b]) => (
              <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
            ))}
          </g>
          {nodes.map(([x, y], i) => (
            <g key={`${x}-${y}`}>
              <circle cx={x} cy={y} r={i === 5 ? 20 : 9} fill={t.surface} stroke={t.accent} strokeOpacity={i === 5 ? 0.85 : 0.55} strokeWidth="2" />
              {i === 5 ? <circle cx={x} cy={y} r="7" fill={t.accent} /> : null}
              {i % 3 === 0 ? <circle cx={x} cy={y} r={i === 5 ? 32 : 18} fill="none" stroke={t.accent} strokeOpacity="0.14" /> : null}
            </g>
          ))}
          <rect x="588" y="470" width="72" height="3" fill={t.accent} fillOpacity="0.5" />
        </g>
      );
    }
    case "rings":
      return (
        <g fill="none" strokeWidth="2">
          <ellipse cx="400" cy="330" rx="200" ry="84" stroke={t.accent} strokeOpacity="0.5" />
          <ellipse cx="400" cy="330" rx="200" ry="84" stroke={t.accent} strokeOpacity="0.34" transform="rotate(60 400 330)" />
          <ellipse cx="400" cy="330" rx="200" ry="84" stroke={t.accent} strokeOpacity="0.34" transform="rotate(120 400 330)" />
          <circle cx="400" cy="330" r="54" fill={t.accent} fillOpacity="0.14" stroke={t.accent} strokeOpacity="0.65" />
          <circle cx="400" cy="330" r="12" fill={t.accent} stroke="none" />
          <circle cx="600" cy="330" r="6" fill={t.accent} stroke="none" />
          <circle cx="300" cy="503" r="5" fill={t.accent} stroke="none" />
        </g>
      );
    case "prism":
      return (
        <g>
          <path d="M400 164L556 472H244z" fill={t.accent} fillOpacity="0.08" stroke={t.accent} strokeOpacity="0.55" strokeWidth="2" />
          <path d="M400 164v308M244 472l188-160 124 160" fill="none" stroke={t.ink} strokeOpacity="0.2" />
          <path
            d="M400 188L292 440h216z"
            fill={`url(#${t.uid}-metal)`}
            opacity="0.5"
          />
          <g stroke={t.accent} strokeWidth="3" strokeOpacity="0.7">
            <path d="M120 260h170" />
            <path d="M110 300h180" />
            <path d="M124 340h166" />
          </g>
          <g stroke={t.ink} strokeWidth="3" strokeOpacity="0.3">
            <path d="M510 260h180" />
            <path d="M502 300h188" />
            <path d="M512 340h178" />
          </g>
          <rect x="384" y="486" width="32" height="8" rx="4" fill={t.accent} fillOpacity="0.5" />
        </g>
      );
    case "vault":
      return (
        <g>
          <circle cx="400" cy="330" r="190" fill={t.surface} stroke={t.accent} strokeOpacity="0.42" strokeWidth="2" />
          <circle cx="400" cy="330" r="152" fill="none" stroke={t.ink} strokeOpacity="0.16" strokeWidth="2" />
          <circle cx="400" cy="330" r="64" fill={t.surface} stroke={t.accent} strokeOpacity="0.6" strokeWidth="2" />
          <circle cx="400" cy="330" r="24" fill={t.accent} fillOpacity="0.2" stroke={t.accent} strokeOpacity="0.7" strokeWidth="2" />
          {[0, 45, 90, 135].map((angle) => (
            <line
              key={angle}
              x1="400"
              y1="210"
              x2="400"
              y2="282"
              stroke={t.accent}
              strokeOpacity="0.4"
              strokeWidth="3"
              transform={`rotate(${angle} 400 330)`}
            />
          ))}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <circle
              key={angle}
              cx="400"
              cy="160"
              r="5"
              fill={t.accent}
              fillOpacity="0.6"
              transform={`rotate(${angle} 400 330)`}
            />
          ))}
          <path d="M300 540h200" stroke={t.ink} strokeOpacity="0.18" strokeWidth="2" />
        </g>
      );
    case "blocks": {
      const cube = (x: number, y: number, s: number, opacity: number) => (
        <g transform={`translate(${x} ${y})`} opacity={opacity}>
          <path d={`M0 0l${s} ${-s * 0.5} ${s} ${s * 0.5} ${-s} ${s * 0.5}z`} fill={t.surface} stroke={t.accent} strokeOpacity="0.5" strokeWidth="1.5" />
          <path d={`M0 0v${s}l${s} ${s * 0.5}v${-s}z`} fill={t.accent} fillOpacity="0.1" stroke={t.accent} strokeOpacity="0.35" strokeWidth="1.5" />
          <path d={`M${s} ${s * 0.5}l${s} ${-s * 0.5}v${s}l${-s} ${s * 0.5}z`} fill={t.accent} fillOpacity="0.04" stroke={t.accent} strokeOpacity="0.25" strokeWidth="1.5" />
        </g>
      );
      return (
        <g>
          {cube(300, 240, 100, 1)}
          {cube(400, 290, 100, 0.8)}
          {cube(300, 340, 100, 0.55)}
          {cube(200, 290, 100, 0.35)}
          <path d="M180 500h440" stroke={t.ink} strokeOpacity="0.16" />
          <g fill={t.accent} fillOpacity="0.5">
            <circle cx="620" cy="220" r="4" />
            <circle cx="640" cy="240" r="2.5" />
          </g>
        </g>
      );
    }
    case "shield":
      return (
        <g>
          <path
            d="M400 152l164 58v128c0 104-80 170-164 202-84-32-164-98-164-202V210z"
            fill={t.surface}
            stroke={t.accent}
            strokeOpacity="0.55"
            strokeWidth="2"
          />
          <path
            d="M400 190l126 44v100c0 80-62 132-126 160-64-28-126-80-126-160V234z"
            fill="none"
            stroke={t.ink}
            strokeOpacity="0.18"
          />
          <path
            d="M354 336l30 30 64-72"
            fill="none"
            stroke={t.accent}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M400 470v54" stroke={t.accent} strokeOpacity="0.4" strokeWidth="2" />
          <circle cx="400" cy="540" r="6" fill={t.accent} fillOpacity="0.6" />
        </g>
      );
    case "car":
      return (
        <g>
          <path
            d="M120 422l44-48 116-16 62-58h132l66 58 96 22 24 42v34H120z"
            fill={t.surface}
            stroke={t.accent}
            strokeOpacity="0.5"
            strokeWidth="2"
          />
          <path d="M292 356h248l48 46H240z" fill={t.accent} fillOpacity="0.12" />
          <path d="M348 342l-20 60M470 342l18 60" stroke={t.ink} strokeOpacity="0.18" strokeWidth="2" />
          <circle cx="254" cy="458" r="52" fill={t.surface} stroke={t.accent} strokeOpacity="0.6" strokeWidth="7" />
          <circle cx="254" cy="458" r="22" fill={t.accent} fillOpacity="0.2" />
          <circle cx="556" cy="458" r="52" fill={t.surface} stroke={t.accent} strokeOpacity="0.6" strokeWidth="7" />
          <circle cx="556" cy="458" r="22" fill={t.accent} fillOpacity="0.2" />
          <path d="M100 512h600" stroke={t.ink} strokeOpacity="0.16" strokeWidth="2" />
          <path d="M644 392h56" stroke={t.accent} strokeWidth="4" strokeOpacity="0.7" />
        </g>
      );
    case "aero":
      return (
        <g fill="none">
          <path d="M80 408c128 0 132-136 264-136s128 128 260 128 116-64 140-64" stroke={t.accent} strokeOpacity="0.5" strokeWidth="3" />
          <path d="M70 450c142 0 146-150 292-150s140 138 286 138 96-40 116-40" stroke={t.accent} strokeOpacity="0.3" strokeWidth="2" />
          <path d="M100 506c150 0 148-164 310-164s148 152 306 152" stroke={t.ink} strokeOpacity="0.14" strokeWidth="2" />
          <path d="M120 350h170M120 320h96M560 372h130" stroke={t.ink} strokeOpacity="0.24" strokeWidth="3" strokeLinecap="round" />
          <path d="M384 330l76-44v88z" fill={t.accent} fillOpacity="0.5" stroke="none" />
          <path d="M168 244l40-24M176 274l24-14" stroke={t.accent} strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round" />
          <circle cx="640" cy="196" r="5" fill={t.accent} />
        </g>
      );
    case "pod":
      return (
        <g>
          <rect x="228" y="252" width="344" height="166" rx="82" fill={t.surface} stroke={t.accent} strokeOpacity="0.5" strokeWidth="2" />
          <path d="M300 272h180c40 0 64 28 64 60H248c0-32 24-60 52-60z" fill={t.accent} fillOpacity="0.14" />
          <path d="M300 286h170" stroke={t.ink} strokeOpacity="0.2" strokeWidth="2" />
          <circle cx="304" cy="420" r="34" fill={t.surface} stroke={t.accent} strokeOpacity="0.6" strokeWidth="5" />
          <circle cx="496" cy="420" r="34" fill={t.surface} stroke={t.accent} strokeOpacity="0.6" strokeWidth="5" />
          <path d="M400 220v-44" stroke={t.accent} strokeWidth="4" strokeOpacity="0.6" />
          <path d="M368 184c20-28 44-28 64 0" fill="none" stroke={t.accent} strokeWidth="4" strokeOpacity="0.5" />
          <path d="M178 474h444" stroke={t.ink} strokeOpacity="0.16" />
          <circle cx="400" cy="342" r="8" fill={t.accent} />
        </g>
      );
    case "heritage":
      return (
        <g>
          <path d="M252 496V316c0-82 66-148 148-148s148 66 148 148v180" fill={t.surface} stroke={t.accent} strokeOpacity="0.48" strokeWidth="2" />
          <path d="M294 496V320c0-58 48-106 106-106s106 48 106 106v176" fill="none" stroke={t.ink} strokeOpacity="0.18" strokeWidth="2" />
          <path d="M400 214v-44" stroke={t.accent} strokeWidth="2" strokeOpacity="0.5" />
          <circle cx="400" cy="156" r="14" fill={t.accent} fillOpacity="0.16" stroke={t.accent} strokeOpacity="0.7" strokeWidth="2" />
          <g stroke={t.accent} strokeOpacity="0.36" strokeWidth="2">
            <path d="M198 496h404M222 520h356M252 544h296" />
          </g>
          <g fill={t.ink} fillOpacity="0.2">
            <rect x="320" y="356" width="160" height="3" />
            <rect x="348" y="380" width="104" height="3" />
            <rect x="330" y="440" width="140" height="2" />
          </g>
        </g>
      );
    case "cigar":
      return (
        <g>
          <g transform="rotate(-16 400 350)">
            <rect x="196" y="312" width="360" height="76" rx="38" fill={t.surface} stroke={t.accent} strokeOpacity="0.45" strokeWidth="2" />
            <rect x="302" y="312" width="86" height="76" fill={t.accent} fillOpacity="0.18" />
            <path d="M302 312v76M388 312v76" stroke={t.accent} strokeOpacity="0.5" />
            <path d="M330 336h30M330 352h22" stroke={t.accent} strokeOpacity="0.7" strokeWidth="2" />
            <path d="M556 350c18 0 22 22 8 22" fill={t.accent} fillOpacity="0.4" stroke={t.accent} strokeOpacity="0.6" />
            <circle cx="570" cy="352" r="10" fill={t.accent} fillOpacity="0.7" />
            <path d="M226 334h52M226 366h52" stroke={t.ink} strokeOpacity="0.18" strokeWidth="2" />
          </g>
          <g fill="none" stroke={t.ink} strokeOpacity="0.28" strokeWidth="2.5" strokeLinecap="round">
            <path d="M560 292c-30-34 22-56 0-92" />
            <path d="M596 306c-26-30 20-50 0-82" />
          </g>
          <path d="M196 502h408" stroke={t.accent} strokeOpacity="0.3" strokeWidth="2" />
        </g>
      );
    case "tin":
      return (
        <g>
          <rect x="300" y="236" width="200" height="274" rx="30" fill={t.surface} stroke={t.accent} strokeOpacity="0.45" strokeWidth="2" />
          <ellipse cx="400" cy="242" rx="100" ry="24" fill={t.surface} stroke={t.accent} strokeOpacity="0.5" strokeWidth="2" />
          <ellipse cx="400" cy="242" rx="64" ry="12" fill={t.accent} fillOpacity="0.16" />
          <rect x="300" y="322" width="200" height="76" fill={t.accent} fillOpacity="0.12" />
          <path d="M300 322h200M300 398h200" stroke={t.accent} strokeOpacity="0.38" />
          <g fill={t.ink} fillOpacity="0.36">
            <rect x="338" y="346" width="124" height="6" rx="3" />
            <rect x="338" y="362" width="80" height="4" rx="2" />
          </g>
          <path d="M356 452h88" stroke={t.accent} strokeOpacity="0.5" strokeWidth="2" />
          <path d="M370 466h60" stroke={t.ink} strokeOpacity="0.22" strokeWidth="2" />
          <path d="M188 540h424" stroke={t.ink} strokeOpacity="0.14" />
        </g>
      );
    default:
      return null;
  }
}
