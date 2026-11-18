/**
 * Inline artwork for Ember Kitchen.
 *
 * All imagery is SVG so the site loads without photography and without layout
 * shift. Ember motion is decorative and is disabled under reduced motion in the
 * stylesheet.
 */

export function HearthHero() {
  return (
    <svg
      viewBox="0 0 720 880"
      className="ek-hero-art"
      role="img"
      aria-labelledby="ek-hero-art-title ek-hero-art-desc"
    >
      <title id="ek-hero-art-title">اجاق امبر کیچن، روشن برای سرویس</title>
      <desc id="ek-hero-art-desc"> نمای روبه‌روی یک اجاق فولادی سیاه. هیزم بلوط روی گریل آهنی زیر هود بلندی می‌سوزد و اخگرها به تاریکی می‌روند. انبوهی چوب و قفسه‌ای از ماهیتابه‌های آهنی در دو سو دیده می‌شود. </desc>
      <defs>
        <linearGradient id="ek-hero-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a0807" />
          <stop offset="0.6" stopColor="#100c09" />
          <stop offset="1" stopColor="#080605" />
        </linearGradient>
        <linearGradient id="ek-hero-steel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#211a15" />
          <stop offset="0.22" stopColor="#3a2e25" />
          <stop offset="0.5" stopColor="#191411" />
          <stop offset="0.78" stopColor="#3a2e25" />
          <stop offset="1" stopColor="#1c1612" />
        </linearGradient>
        <radialGradient id="ek-hero-fire" cx="0.5" cy="0.72" r="0.62">
          <stop offset="0" stopColor="#ffdd9e" stopOpacity="0.96" />
          <stop offset="0.24" stopColor="#ff9b3f" stopOpacity="0.86" />
          <stop offset="0.52" stopColor="#d9551c" stopOpacity="0.52" />
          <stop offset="0.82" stopColor="#7a2a10" stopOpacity="0.16" />
          <stop offset="1" stopColor="#3b160a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ek-hero-ember-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffb467" />
          <stop offset="0.4" stopColor="#ff7a2e" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ff6a21" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ek-hero-cone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffb46b" stopOpacity="0.12" />
          <stop offset="0.55" stopColor="#e2672c" stopOpacity="0.04" />
          <stop offset="1" stopColor="#e2672c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ek-hero-log" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5c3a20" />
          <stop offset="0.5" stopColor="#3d2616" />
          <stop offset="1" stopColor="#2a1a0f" />
        </linearGradient>
        <pattern id="ek-hero-brick" width="72" height="34" patternUnits="userSpaceOnUse">
          <path d="M0 34H72M0 17H72M36 0V17M0 17V34M72 17V34" fill="none" stroke="#f4e6d4" strokeOpacity="0.035" />
        </pattern>
      </defs>

      <rect width="720" height="880" fill="url(#ek-hero-wall)" />
      <rect width="720" height="880" fill="url(#ek-hero-brick)" />

      <g stroke="#f4e6d4" strokeOpacity="0.06" fill="none">
        <path d="M48 0V880M672 0V880" />
        <path d="M0 84H720" strokeDasharray="2 7" />
      </g>

      <text
        x="48"
        y="58"
        fontFamily="var(--font-display), sans-serif"
        fontSize="8"
        letterSpacing="3.4"
        fill="#d9c9b8"
        opacity="0.7"
      >
        امبر کیچن · خیابان کیلن
      </text>
      <text
        x="672"
        y="58"
        textAnchor="end"
        fontFamily="var(--font-display), sans-serif"
        fontSize="8"
        letterSpacing="3.4"
        fill="#d9c9b8"
        opacity="0.7"
      >
        اجاق ۰۱
      </text>

      <path d="M150 0H570V690H150Z" fill="#0d0a08" stroke="#f4e6d4" strokeOpacity="0.07" />

      <path d="M250 0H470L556 286H164Z" fill="url(#ek-hero-steel)" stroke="#f4e6d4" strokeOpacity="0.14" />
      <path d="M274 0H446L514 266H206Z" fill="none" stroke="#f4e6d4" strokeOpacity="0.06" />
      <path d="M214 286H506L536 318H184Z" fill="#231b15" stroke="#f4e6d4" strokeOpacity="0.16" />

      <path d="M600 0V880" stroke="#f4e6d4" strokeOpacity="0.04" />

      <g>
        <path d="M588 214H648" stroke="#9b8877" strokeOpacity="0.5" />
        <path d="M600 214V286" stroke="#9b8877" strokeOpacity="0.5" />
        <path d="M648 214V286" stroke="#9b8877" strokeOpacity="0.5" />
        <circle cx="600" cy="214" r="3" fill="#9b8877" />
        <circle cx="648" cy="214" r="3" fill="#9b8877" />
        <path d="M600 286h48l-7 64h-34z" fill="#2a211a" stroke="#8d7a68" strokeOpacity="0.55" />
        <path d="M609 300h30" stroke="#8d7a68" strokeOpacity="0.4" />
      </g>

      <g>
        <path d="M196 336V450" stroke="#8d7a68" strokeOpacity="0.4" />
        <path d="M196 336h44" stroke="#8d7a68" strokeOpacity="0.4" />
        <circle cx="240" cy="336" r="3" fill="#8d7a68" fillOpacity="0.6" />
        <path d="M240 336c0 24 10 32 14 46" stroke="#8d7a68" strokeOpacity="0.35" fill="none" />
        <ellipse cx="258" cy="390" rx="22" ry="8" fill="#211a15" stroke="#8d7a68" strokeOpacity="0.4" />
      </g>

      <path d="M120 660H600V700H120Z" fill="#16110d" stroke="#f4e6d4" strokeOpacity="0.1" />
      <path d="M120 700H600V716H120Z" fill="#090706" />

      <path d="M196 660V446H524V660Z" fill="#070504" stroke="#f4e6d4" strokeOpacity="0.16" />
      <path d="M196 660V482Q196 446 232 446H488Q524 446 524 482V660" fill="#0a0706" stroke="#f4e6d4" strokeOpacity="0.09" />

      <ellipse cx="360" cy="628" rx="178" ry="58" fill="url(#ek-hero-fire)" className="ek-fire-glow" />
      <path d="M360 620 L520 880 H200 Z" fill="url(#ek-hero-cone)" />

      <g>
        <ellipse cx="360" cy="640" rx="152" ry="22" fill="#2b160c" />
        <ellipse cx="360" cy="634" rx="142" ry="14" fill="#c24b18" opacity="0.55" />
        <ellipse cx="330" cy="632" rx="72" ry="8" fill="#ff9d47" opacity="0.55" />
        <ellipse cx="402" cy="636" rx="58" ry="6" fill="#ffca7a" opacity="0.4" />
      </g>

      <g className="ek-flames">
        <path d="M306 632c-6-34 18-52 14-84 30 24 18 42 30 56 6-20 20-28 20-50 33 34 28 58 12 78z" fill="#e26525" opacity="0.85" />
        <path d="M334 632c-3-24 12-38 12-58 19 18 12 32 22 40 4-12 12-18 14-30 18 24 12 40 0 48z" fill="#ff9f45" opacity="0.9" />
        <path d="M356 632c-2-14 7-24 7-36 12 12 8 22 14 26 2-8 6-12 8-18 8 14 4 24-4 28z" fill="#ffe2a8" />
        <path d="M426 636c6-22-6-36 4-54 16 16 10 30 18 36 2-10 8-16 8-26 20 22 14 38 0 44z" fill="#c9531e" opacity="0.8" />
        <path d="M442 636c3-14-2-22 5-32 8 10 6 18 10 22 2-6 5-9 6-14 9 12 5 22-3 24z" fill="#ffae5a" opacity="0.92" />
      </g>

      <g stroke="#9b8a78" strokeOpacity="0.75" strokeLinecap="round">
        <path d="M214 548H506" strokeWidth="3" />
        <path d="M232 566H488" strokeWidth="2" />
        <path d="M226 548V576M282 548V570M338 548V564M394 548V570M450 548V576" strokeWidth="2.4" />
        <path d="M212 548V660M508 548V660" strokeWidth="3" />
        <path d="M212 660H508" strokeWidth="2" />
      </g>

      <g>
        <path d="M300 646l-18-24" stroke="#3d2716" strokeWidth="20" strokeLinecap="round" />
        <path d="M420 648l20-26" stroke="#342113" strokeWidth="18" strokeLinecap="round" />
        <path d="M342 650l-4-18" stroke="#5b3a22" strokeWidth="15" strokeLinecap="round" />
        <path d="M300 646l-18-24" stroke="#8a5a32" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
        <path d="M420 648l20-26" stroke="#8a5a32" strokeOpacity="0.3" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="334" cy="634" r="2.2" fill="#ffb46b" className="ek-spark ek-spark-1" />
        <circle cx="386" cy="628" r="1.8" fill="#ff9a4a" className="ek-spark ek-spark-2" />
      </g>

      <g className="ek-hero-embers" fill="#ff9a4a">
        <circle cx="318" cy="560" r="2.2" className="ek-ember-1" />
        <circle cx="360" cy="536" r="1.6" className="ek-ember-2" />
        <circle cx="406" cy="574" r="2.6" className="ek-ember-3" />
        <circle cx="342" cy="506" r="1.5" className="ek-ember-2" />
        <circle cx="384" cy="486" r="2" className="ek-ember-1" />
        <circle cx="438" cy="540" r="1.4" className="ek-ember-3" />
        <circle cx="286" cy="522" r="1.8" className="ek-ember-2" />
        <circle cx="356" cy="464" r="1.3" className="ek-ember-3" />
        <circle cx="412" cy="450" r="1.7" className="ek-ember-1" />
        <circle cx="328" cy="430" r="1.2" className="ek-ember-2" />
        <circle cx="390" cy="406" r="1.5" className="ek-ember-3" />
        <circle cx="452" cy="490" r="1.2" className="ek-ember-1" />
      </g>

      <g stroke="#8d7a68" strokeOpacity="0.55" fill="none">
        <path d="M556 620h84M556 620V592" />
        <path d="M556 620c26 0 42 14 60 14" strokeDasharray="2 5" />
      </g>
      <text x="594" y="586" fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2.4" fill="#b9a591">
        انبار چوب
      </text>
      <g fill="#3d2716" stroke="#8a5a32" strokeOpacity="0.35">
        <circle cx="572" cy="644" r="15" />
        <circle cx="604" cy="650" r="14" />
        <circle cx="636" cy="642" r="13" />
        <circle cx="588" cy="674" r="14" />
        <circle cx="620" cy="678" r="13" />
        <circle cx="652" cy="670" r="12" />
      </g>
      <g fill="none" stroke="#8a5a32" strokeOpacity="0.4">
        <circle cx="572" cy="644" r="7" />
        <circle cx="604" cy="650" r="6" />
        <circle cx="636" cy="642" r="6" />
        <circle cx="588" cy="674" r="6" />
        <circle cx="620" cy="678" r="6" />
        <circle cx="652" cy="670" r="5" />
      </g>

      <g fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2.2" fill="#b9a591">
        <text x="196" y="736">گریل · آهن</text>
        <text x="524" y="736" textAnchor="end">محل خاکستر</text>
      </g>
      <g stroke="#8d7a68" strokeOpacity="0.4">
        <path d="M196 748h44M500 748h24" />
      </g>

      <text
        x="48"
        y="840"
        fontFamily="var(--font-display), sans-serif"
        fontSize="8"
        letterSpacing="3.2"
        fill="#8f7e6d"
      >
        بلوط · خاکستر · آهن
      </text>
      <text
        x="672"
        y="840"
        textAnchor="end"
        fontFamily="var(--font-display), sans-serif"
        fontSize="8"
        letterSpacing="3.2"
        fill="#8f7e6d"
      >
        روشن در ۱۶:۳۰
      </text>
    </svg>
  );
}

export type Zone = "coals" | "grill" | "oven" | "chimney";

export function HearthDiagram({ active }: { active: Zone }) {
  return (
    <svg
      viewBox="0 0 1080 620"
      className="ek-hearth-art"
      role="img"
      aria-labelledby="ek-hearth-art-title ek-hearth-art-desc"
      data-active={active}
    >
      <title id="ek-hearth-art-title">نقشهٔ برش اجاق امبر کیچن</title>
      <desc id="ek-hearth-art-desc"> برشی جانبی که دودکش و مجرا، بستر زغال، گریل آهنی و تنور آجری پیرامون یک اجاق هیزمی را نشان می‌دهد. </desc>
      <defs>
        <radialGradient id="ek-diagram-glow" cx="0.44" cy="0.7" r="0.5">
          <stop offset="0" stopColor="#ffb05f" stopOpacity="0.55" />
          <stop offset="0.55" stopColor="#e2672c" stopOpacity="0.18" />
          <stop offset="1" stopColor="#e2672c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ek-diagram-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#17110d" />
          <stop offset="1" stopColor="#0a0806" />
        </linearGradient>
        <pattern id="ek-diagram-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#f4e6d4" strokeOpacity="0.035" />
        </pattern>
      </defs>

      <rect width="1080" height="620" fill="#0b0807" />
      <rect width="1080" height="620" fill="url(#ek-diagram-grid)" />

      <g stroke="#f4e6d4" strokeOpacity="0.1" fill="none">
        <path d="M40 540H1040" />
        <path d="M100 80V540M980 80V540" strokeDasharray="2 7" />
      </g>

      <g fontFamily="var(--font-display), sans-serif" fontSize="8" letterSpacing="2.6" fill="#a89582">
        <text x="40" y="52">برش A–A · اجاق</text>
        <text x="1040" y="52" textAnchor="end">EMBER KITCHEN · خیابان کیلن</text>
      </g>

      <g className="ek-zone ek-zone--chimney">
        <path d="M300 132H448V258H300Z" fill="#15100d" stroke="#f4e6d4" strokeOpacity="0.4" />
        <path d="M314 132V96H434V132" fill="#0e0a08" stroke="#f4e6d4" strokeOpacity="0.3" />
        <path d="M330 96V60H418V96" fill="#0e0a08" stroke="#f4e6d4" strokeOpacity="0.24" />
        <path d="M318 190H430" stroke="#a89582" strokeOpacity="0.55" />
        <path d="M330 190l16-12M406 190l-16-12" stroke="#e2672c" strokeOpacity="0.9" />
        <path d="M322 144c16-12 28-12 42 0s26 12 44 0" fill="none" stroke="#a89582" strokeOpacity="0.35" />
        <path d="M452 214c22-20 38-20 58 0" fill="none" stroke="#e2672c" strokeOpacity="0.5" strokeDasharray="3 5" />
        <path d="M410 78c10-10 10-18 2-28M430 70c8-8 8-14 2-22" stroke="#a89582" strokeOpacity="0.45" fill="none" />
        <text x="374" y="252" textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2.4" fill="#ccb7a0">
          دودکش
        </text>
      </g>

      <g className="ek-zone ek-zone--oven">
        <path d="M700 232H904V466H700Z" fill="#17100c" stroke="#f4e6d4" strokeOpacity="0.38" />
        <path d="M722 268H882V430H722Z" fill="#0c0907" stroke="#f4e6d4" strokeOpacity="0.26" />
        <path d="M722 268Q802 236 882 268" fill="none" stroke="#f4e6d4" strokeOpacity="0.2" />
        <path d="M742 430V402Q802 384 862 402V430" fill="#1d120c" stroke="#e2672c" strokeOpacity="0.2" />
        <ellipse cx="802" cy="424" rx="42" ry="10" fill="#e2672c" opacity="0.2" />
        <path d="M760 330q18-14 36 0t36 0" fill="none" stroke="#a89582" strokeOpacity="0.35" />
        <text x="802" y="456" textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2.4" fill="#ccb7a0">
          تنور آجری
        </text>
        <path d="M926 300h44M926 300v-26" stroke="#a89582" strokeOpacity="0.4" fill="none" />
      </g>

      <g className="ek-zone ek-zone--grill">
        <path d="M236 306H568" stroke="#d9c5ae" strokeOpacity="0.85" strokeWidth="3" />
        <path d="M244 306V264M560 306V264" stroke="#d9c5ae" strokeOpacity="0.6" strokeWidth="2" />
        <path d="M244 306c0 10 8 16 8 16M560 306c0 10-8 16-8 16" stroke="#d9c5ae" strokeOpacity="0.6" fill="none" />
        {[280, 320, 360, 400, 440, 480, 520].map((x) => (
          <path key={x} d={`M${x} 300V318`} stroke="#d9c5ae" strokeOpacity="0.55" strokeWidth="2.4" />
        ))}
        <text x="402" y="254" textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2.4" fill="#ccb7a0">
          گریل آهنی
        </text>
        <path d="M568 296h58M626 296v-22" stroke="#a89582" strokeOpacity="0.4" fill="none" />
      </g>

      <g className="ek-zone ek-zone--coals">
        <path d="M226 540V430H580V540" fill="#0c0806" stroke="#f4e6d4" strokeOpacity="0.32" />
        <path d="M264 430V366Q264 330 300 330H506Q542 330 542 366V430" fill="#080605" stroke="#f4e6d4" strokeOpacity="0.22" />
        <ellipse cx="400" cy="522" rx="160" ry="64" fill="url(#ek-diagram-glow)" />
        <ellipse cx="400" cy="518" rx="138" ry="16" fill="#36190d" />
        <ellipse cx="400" cy="514" rx="126" ry="10" fill="#c24b18" opacity="0.5" />
        <g fill="#ff9a4a">
          <circle cx="318" cy="512" r="3" />
          <circle cx="350" cy="508" r="2.2" />
          <circle cx="392" cy="512" r="2.8" />
          <circle cx="446" cy="506" r="2.3" />
          <circle cx="480" cy="514" r="3.1" />
          <circle cx="412" cy="518" r="1.8" />
        </g>
        <path d="M292 350c10 20 6 34 16 44M492 350c-8 22-4 36-14 46" stroke="#e2672c" strokeOpacity="0.4" fill="none" />
        <text x="400" y="582" textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2.4" fill="#e8c9a9">
          زغال
        </text>
      </g>

      <g stroke="#a89582" strokeOpacity="0.35" fill="none">
        <path d="M604 150c26 0 38 22 38 48v92" strokeDasharray="3 5" />
        <path d="M604 150l-10-8M604 150l10-8" />
        <path d="M654 210l14-10v20z" />
      </g>

      <g fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2.4" fill="#bda996">
        <text x="226" y="364">محفظهٔ آتش</text>
        <path d="M226 374h32" stroke="#a89582" strokeOpacity="0.4" />
        <text x="650" y="444" textAnchor="middle">محل خاکستر</text>
        <path d="M622 462h56" stroke="#a89582" strokeOpacity="0.4" />
        <text x="1040" y="580" textAnchor="end">برش نمایشی · بدون مقیاس</text>
      </g>
    </svg>
  );
}

export function RoomScene() {
  return (
    <svg
      viewBox="0 0 1400 700"
      className="ek-room-art"
      role="img"
      aria-labelledby="ek-room-art-title ek-room-art-desc"
    >
      <title id="ek-room-art-title">اتاق غذاخوری امبر کیچن پیش از سرویس</title>
      <desc id="ek-room-art-desc"> پیشخوانی بلند از بلوط سوخته رو به اجاقی باز در انتهای اتاقی تیره است. صندلی‌های کوتاه زیر آویزهای کم‌نور پیشخوان را دنبال می‌کنند و پاس آهنی و قفسهٔ بطری‌ها در سمت راست قرار دارد. </desc>
      <defs>
        <linearGradient id="ek-room-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b0806" />
          <stop offset="0.62" stopColor="#120d09" />
          <stop offset="1" stopColor="#080605" />
        </linearGradient>
        <radialGradient id="ek-room-glow" cx="0.46" cy="0.58" r="0.55">
          <stop offset="0" stopColor="#ffbd73" stopOpacity="0.8" />
          <stop offset="0.25" stopColor="#ff8a3c" stopOpacity="0.4" />
          <stop offset="0.62" stopColor="#b84316" stopOpacity="0.12" />
          <stop offset="1" stopColor="#b84316" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ek-room-counter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6b4a2d" />
          <stop offset="0.18" stopColor="#4a311e" />
          <stop offset="0.6" stopColor="#2e1e13" />
          <stop offset="1" stopColor="#1a110b" />
        </linearGradient>
        <linearGradient id="ek-room-iron" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#352a21" />
          <stop offset="0.5" stopColor="#1a1410" />
          <stop offset="1" stopColor="#2e241b" />
        </linearGradient>
        <radialGradient id="ek-room-lamp" cx="0.5" cy="0.15" r="0.75">
          <stop offset="0" stopColor="#ffd8a0" stopOpacity="0.65" />
          <stop offset="0.4" stopColor="#e88a3f" stopOpacity="0.2" />
          <stop offset="1" stopColor="#e88a3f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ek-room-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16110d" />
          <stop offset="1" stopColor="#090706" />
        </linearGradient>
        <pattern id="ek-room-grain" width="180" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 12H180" stroke="#f4e6d4" strokeOpacity="0.055" />
          <path d="M0 18H180" stroke="#f4e6d4" strokeOpacity="0.03" />
        </pattern>
      </defs>

      <rect width="1400" height="700" fill="url(#ek-room-wall)" />

      <g stroke="#f4e6d4" strokeOpacity="0.05" fill="none">
        <path d="M0 84H1400M0 156H1400" />
        <path d="M180 0V430M1240 0V430" />
        <path d="M0 430L1400 430" />
      </g>

      <path d="M0 430H1400V700H0Z" fill="url(#ek-room-floor)" />
      <path d="M0 430H1400" stroke="#f4e6d4" strokeOpacity="0.12" />

      <g>
        <path d="M520 156H880V430H520Z" fill="#0e0a08" stroke="#f4e6d4" strokeOpacity="0.08" />
        <path d="M566 94H834L890 246H510Z" fill="url(#ek-room-iron)" stroke="#f4e6d4" strokeOpacity="0.12" />
        <path d="M614 64H786V94H614Z" fill="#1d1611" stroke="#f4e6d4" strokeOpacity="0.08" />
        <path d="M590 246H810L838 274H562Z" fill="#241b15" stroke="#f4e6d4" strokeOpacity="0.12" />
        <path d="M594 274V430H806V274" fill="#080605" stroke="#f4e6d4" strokeOpacity="0.08" />
        <ellipse cx="700" cy="408" rx="150" ry="70" fill="url(#ek-room-glow)" />
        <ellipse cx="700" cy="412" rx="110" ry="16" fill="#2e160c" />
        <ellipse cx="700" cy="408" rx="94" ry="10" fill="#c24b18" opacity="0.48" />
        <path d="M628 410c-2-26 16-38 14-58 22 18 14 32 22 40 4-14 14-20 16-36 24 26 18 42 4 54z" fill="#e26525" opacity="0.6" />
        <path d="M662 410c-2-16 10-24 10-38 14 12 8 22 14 28 2-8 8-12 10-20 12 16 6 26-2 30z" fill="#ffab55" opacity="0.65" />
        <g stroke="#9b8a78" strokeOpacity="0.55" strokeLinecap="round">
          <path d="M626 380H774" strokeWidth="2.4" />
          <path d="M646 380v16M674 380v12M702 380v16M730 380v12M758 380v16" strokeWidth="1.8" />
          <path d="M608 430V380M792 430V380" strokeWidth="2" />
        </g>
      </g>

      <g>
        <path d="M410 250H330V430" fill="none" stroke="#f4e6d4" strokeOpacity="0.05" />
        <path d="M1040 222H1148V430" fill="none" stroke="#f4e6d4" strokeOpacity="0.05" />
        <path d="M0 250H1400" stroke="#f4e6d4" strokeOpacity="0.03" />
        <path d="M0 342H1400" stroke="#f4e6d4" strokeOpacity="0.03" />
      </g>

      <g>
        <path d="M220 0V212" stroke="#8e7d6c" strokeOpacity="0.55" />
        <path d="M196 212H244L232 240H208Z" fill="#2a211a" stroke="#8e7d6c" strokeOpacity="0.5" />
        <circle cx="220" cy="250" r="52" fill="url(#ek-room-lamp)" />
      </g>
      <g>
        <path d="M700 0V128" stroke="#8e7d6c" strokeOpacity="0.5" />
        <path d="M676 128H724L712 154H688Z" fill="#2a211a" stroke="#8e7d6c" strokeOpacity="0.5" />
        <circle cx="700" cy="164" r="50" fill="url(#ek-room-lamp)" opacity="0.7" />
      </g>
      <g>
        <path d="M1180 0V238" stroke="#8e7d6c" strokeOpacity="0.55" />
        <path d="M1156 238H1204L1192 264H1168Z" fill="#2a211a" stroke="#8e7d6c" strokeOpacity="0.5" />
        <circle cx="1180" cy="274" r="58" fill="url(#ek-room-lamp)" />
      </g>

      <g>
        <path d="M48 250H300V430H48Z" fill="#100c09" stroke="#f4e6d4" strokeOpacity="0.07" />
        <path d="M64 268H284M64 318H284M64 368H284" stroke="#f4e6d4" strokeOpacity="0.05" />
        <g fill="#2b2119" stroke="#8e7d6c" strokeOpacity="0.18">
          <circle cx="92" cy="292" r="12" />
          <circle cx="122" cy="298" r="11" />
          <circle cx="152" cy="290" r="13" />
          <circle cx="182" cy="296" r="11" />
          <circle cx="212" cy="290" r="12" />
          <circle cx="242" cy="298" r="11" />
          <circle cx="108" cy="322" r="11" />
          <circle cx="138" cy="328" r="12" />
          <circle cx="168" cy="320" r="11" />
          <circle cx="198" cy="328" r="12" />
          <circle cx="228" cy="320" r="11" />
        </g>
      </g>

      <g>
        <path d="M1120 270H1290V430H1120Z" fill="#0f0b08" stroke="#f4e6d4" strokeOpacity="0.06" />
        <path d="M1140 292H1270M1140 322H1270" stroke="#f4e6d4" strokeOpacity="0.05" />
        <g fill="#241a12" stroke="#8e7d6c" strokeOpacity="0.25">
          <path d="M1152 322v-22c0-6 8-6 8 0v22z" />
          <path d="M1174 322v-18c0-6 8-6 8 0v18z" />
          <path d="M1196 322v-26c0-6 8-6 8 0v26z" />
          <path d="M1218 322v-16c0-6 8-6 8 0v16z" />
          <path d="M1240 322v-22c0-6 8-6 8 0v22z" />
        </g>
        <g fill="#3f2c1c">
          <path d="M1144 400v-40c0-8 10-8 10 0v40z" />
          <path d="M1166 400v-34c0-8 10-8 10 0v34z" />
          <path d="M1188 400v-44c0-8 10-8 10 0v44z" />
          <path d="M1210 400v-30c0-8 10-8 10 0v30z" />
          <path d="M1232 400v-38c0-8 10-8 10 0v38z" />
        </g>
      </g>

      <g>
        <path d="M0 430H1400" stroke="#f4e6d4" strokeOpacity="0.14" />
        <path d="M92 430H1320V454H92Z" fill="#1a120c" />
        <path d="M92 454H1320V560H92Z" fill="url(#ek-room-counter)" />
        <path d="M92 454H1320" stroke="#c9a77e" strokeOpacity="0.3" />
        <path d="M92 468H1320" stroke="#f4e6d4" strokeOpacity="0.06" />
        <path d="M92 560H1320V576H92Z" fill="#100b08" />
        <path d="M126 576V700M320 576V700M514 576V700M708 576V700M902 576V700M1096 576V700M1290 576V700" stroke="#1c1510" strokeWidth="18" />
        <path d="M92 560H1320V700H92Z" fill="url(#ek-room-grain)" opacity="0.8" />
        <path d="M92 560H1320" stroke="#f4e6d4" strokeOpacity="0.1" />
      </g>

      <g>
        {[224, 418, 612, 806, 1000, 1194].map((x, index) => (
          <g key={x}>
            <ellipse cx={x} cy="600" rx="44" ry="10" fill="#050403" opacity="0.7" />
            <path d={`M${x - 38} 594V560Q${x - 38} 548 ${x - 26} 548H${x + 26}Q${x + 38} 548 ${x + 38} 560V594`} fill="none" stroke="#8b745d" strokeOpacity="0.5" strokeWidth="2" />
            <path d={`M${x - 30} 560V702M${x + 30} 560V702`} stroke="#1a1410" strokeWidth="5" />
            <path d={`M${x - 30} 650H${x + 30}M${x - 30} 676H${x + 30}`} stroke="#2a2018" strokeWidth="3" />
            <ellipse cx={x} cy={index % 2 === 0 ? 548 : 552} rx="20" ry="5" fill="#2e2117" stroke="#8b745d" strokeOpacity="0.35" />
          </g>
        ))}
      </g>

      <g fontFamily="var(--font-display), sans-serif" fontSize="8" letterSpacing="2.6" fill="#bca892">
        <text x="48" y="666">پیشخوان · ۱۸</text>
        <text x="1136" y="666" textAnchor="end">پاس · ۶</text>
        <text x="700" y="64" textAnchor="middle">اجاق ۰۱</text>
      </g>
      <g stroke="#a89582" strokeOpacity="0.35">
        <path d="M48 678h76M1272 678h-68M700 76v34" />
      </g>

      <text
        x="48"
        y="58"
        fontFamily="var(--font-display), sans-serif"
        fontSize="8"
        letterSpacing="3.2"
        fill="#8f7e6d"
      >
        امبر کیچن · اتاق
      </text>
      <text
        x="1352"
        y="58"
        textAnchor="end"
        fontFamily="var(--font-display), sans-serif"
        fontSize="8"
        letterSpacing="3.2"
        fill="#8f7e6d"
      >
        ۱۷:۲۰ · پیش از سرویس
      </text>
      <text
        x="1352"
        y="666"
        textAnchor="end"
        fontFamily="var(--font-display), sans-serif"
        fontSize="7.5"
        letterSpacing="2.4"
        fill="#8f7e6d"
      >
        نمایشی · بدون مقیاس
      </text>
    </svg>
  );
}
