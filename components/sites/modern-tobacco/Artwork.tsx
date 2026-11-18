/**
 * Modern Tobacco Boutique — inline SVG artwork.
 * All drawings are illustrative. No product photograph or real mark is used.
 */

export function TinMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="5.5" y="7.5" width="21" height="19" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.5 12.5h21" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9.5 20.5h13M9.5 23h8" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="23.5" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

export function TinHero({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 760 760"
      role="img"
      aria-label="بررسی تصویری قفسه با قوطی فولادی برس‌خورده زیر نور ملایم، کارت پرونده خنثی و قفسه نمایش کوتاه."
      focusable="false"
    >
      <defs>
        <linearGradient id="mt-hero-bg" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#f2f0e8" />
          <stop offset="0.6" stopColor="#e5e2d8" />
          <stop offset="1" stopColor="#d8d5ca" />
        </linearGradient>
        <linearGradient id="mt-hero-steel" x1="0" y1="0" x2="1" y2="0.2">
          <stop offset="0" stopColor="#f2f4ee" />
          <stop offset="0.18" stopColor="#bdc3b9" />
          <stop offset="0.42" stopColor="#e2e5dd" />
          <stop offset="0.68" stopColor="#a3aaa0" />
          <stop offset="0.86" stopColor="#cfd4cb" />
          <stop offset="1" stopColor="#8d958b" />
        </linearGradient>
        <linearGradient id="mt-hero-lid" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0" stopColor="#f5f6f0" />
          <stop offset="0.5" stopColor="#bcc2b8" />
          <stop offset="1" stopColor="#9aa298" />
        </linearGradient>
        <linearGradient id="mt-hero-paper" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#fbf8ef" />
          <stop offset="1" stopColor="#e9e3d5" />
        </linearGradient>
        <linearGradient id="mt-hero-beam" x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id="mt-hero-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <pattern id="mt-hero-brush" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M0 1h4" stroke="#6f756c" strokeWidth="0.4" opacity="0.22" />
          <path d="M0 3h4" stroke="#f7f8f3" strokeWidth="0.4" opacity="0.3" />
        </pattern>
      </defs>

      <rect width="760" height="760" fill="url(#mt-hero-bg)" />
      <path d="M0 0h420L120 760H0z" fill="url(#mt-hero-beam)" />

      <g opacity="0.16" stroke="#3c443b" strokeWidth="0.7">
        <path d="M40 0v760M720 0v760M0 76h760M0 684h760" />
        <path d="M112 0v760M648 0v760" strokeDasharray="2 10" />
      </g>

      <g opacity="0.55" fill="#4f574d" fontFamily="var(--mt-sans)" fontSize="10" letterSpacing="2.6" fontWeight="600">
        <text x="44" y="52">بررسی قفسه / ۰۱</text>
        <text x="716" y="52" textAnchor="end">بزرگسالان ۱۸+</text>
      </g>
      <path d="M44 66h672" stroke="#8a9087" strokeWidth="0.7" opacity="0.5" />

      <ellipse cx="378" cy="582" rx="264" ry="28" fill="#3a4038" opacity="0.3" filter="url(#mt-hero-shadow)" />

      {/* Low shelf */}
      <rect x="76" y="550" width="608" height="13" fill="#b2aea1" />
      <rect x="76" y="563" width="608" height="92" fill="#d5d1c5" />
      <rect x="76" y="550" width="608" height="4" fill="#e9e5da" />
      <path d="M76 563h608" stroke="#9d9a8e" strokeWidth="0.8" opacity="0.7" />
      <path d="M120 563v92M640 563v92" stroke="#bab6aa" strokeWidth="0.8" opacity="0.6" />

      {/* Tin body */}
      <g>
        <rect x="262" y="250" width="246" height="300" rx="4" fill="url(#mt-hero-steel)" stroke="#868e83" strokeWidth="1.1" />
        <rect x="262" y="250" width="246" height="300" rx="4" fill="url(#mt-hero-brush)" />
        <rect x="270" y="258" width="230" height="284" rx="2" fill="none" stroke="#f4f6ef" strokeWidth="0.9" opacity="0.55" />
        <path d="M262 532h246" stroke="#6e766b" strokeWidth="1.1" opacity="0.6" />

        {/* Lid, slightly ajar */}
        <g transform="rotate(-1.2 390 208)">
          <rect x="248" y="196" width="274" height="58" rx="4" fill="url(#mt-hero-lid)" stroke="#868e83" strokeWidth="1.1" />
          <rect x="248" y="196" width="274" height="58" rx="4" fill="url(#mt-hero-brush)" />
          <rect x="256" y="204" width="258" height="42" rx="2" fill="none" stroke="#f6f7f1" strokeWidth="0.8" opacity="0.6" />
          <path d="M248 248h274" stroke="#6e766b" strokeWidth="1.1" opacity="0.65" />
        </g>

        {/* Label field */}
        <rect x="296" y="326" width="178" height="126" fill="#f5f3ea" opacity="0.94" />
        <rect x="304" y="334" width="162" height="110" fill="none" stroke="#7a8077" strokeWidth="0.7" opacity="0.45" />
        <text x="316" y="366" fill="#2c332b" fontFamily="var(--mt-sans)" fontSize="17" letterSpacing="3" fontWeight="700">
          MT
        </text>
        <text x="316" y="392" fill="#5e655b" fontFamily="var(--mt-sans)" fontSize="8" letterSpacing="2.2">
          شیء نمایشی
        </text>
        <path d="M316 408h134" stroke="#a3a89e" strokeWidth="0.8" />
        <text x="316" y="428" fill="#7a8077" fontFamily="var(--mt-sans)" fontSize="7.5" letterSpacing="1.8">
          غیرقابل فروش · ۰۱
        </text>

        <path d="M508 292v212" stroke="#ffffff" strokeWidth="10" opacity="0.22" />
      </g>

      {/* Record card leaning right */}
      <g transform="rotate(7 596 438)">
        <rect x="540" y="344" width="132" height="204" fill="#3c423a" opacity="0.18" transform="translate(6 7)" />
        <rect x="540" y="344" width="132" height="204" fill="url(#mt-hero-paper)" />
        <rect x="548" y="352" width="116" height="188" fill="none" stroke="#a9a394" strokeWidth="0.7" />
        <text x="560" y="380" fill="#343b33" fontFamily="var(--mt-sans)" fontSize="8" letterSpacing="2" fontWeight="700">
          MT / 01
        </text>
        <path d="M560 392h92" stroke="#8f9389" strokeWidth="0.8" />
        <g fill="#6a7066" fontFamily="var(--mt-sans)" fontSize="6.5" letterSpacing="1.4">
          <text x="560" y="416">شیء</text>
          <text x="560" y="436">جنس</text>
          <text x="560" y="456">پرداخت</text>
          <text x="560" y="476">وضعیت</text>
        </g>
        <g fill="#333a32" fontFamily="var(--mt-sans)" fontSize="6.5" letterSpacing="1.1">
          <text x="612" y="416">قوطی</text>
          <text x="612" y="436">فولاد</text>
          <text x="612" y="456">برس‌خورده</text>
          <text x="612" y="476">نمایشی</text>
        </g>
        <path d="M560 492h92" stroke="#b3ada0" strokeWidth="0.7" strokeDasharray="2 3" />
        <text x="560" y="510" fill="#8a8f85" fontFamily="var(--mt-sans)" fontSize="6" letterSpacing="1.6">
          تصویری
        </text>
      </g>

      {/* Small neutral block */}
      <g>
        <rect x="150" y="470" width="64" height="80" fill="#cfcabd" />
        <rect x="150" y="470" width="64" height="8" fill="#e2ded2" />
        <path d="M150 478h64" stroke="#a9a498" strokeWidth="0.7" />
        <path d="M150 510h64" stroke="#b5b0a4" strokeWidth="0.7" opacity="0.6" />
      </g>

      {/* Scale */}
      <g opacity="0.55">
        <path d="M76 700h608" stroke="#5c6359" strokeWidth="0.8" />
        {Array.from({ length: 9 }).map((_, tick) => (
          <path
            key={tick}
            d={`M${76 + tick * 76} 694v${tick % 2 === 0 ? 12 : 7}`}
            stroke="#5c6359"
            strokeWidth="0.8"
          />
        ))}
        <text x="380" y="726" fill="#5c6359" fontFamily="var(--mt-sans)" fontSize="8" letterSpacing="2.4" textAnchor="middle">
          نمای نمایش · بدون مقیاس
        </text>
      </g>
    </svg>
  );
}

export function EditStudy({
  item,
  className,
}: {
  item: {
    id: "tin" | "edit" | "shelf";
    index: string;
    name: string;
    tone: string;
    accent: string;
  };
  className?: string;
}) {
  const label = `Illustrative display study ${item.index}, ${item.name}.`;

  return (
    <svg
      className={className}
      viewBox="0 0 680 460"
      role="img"
      aria-label={label}
      focusable="false"
    >
      <defs>
        <linearGradient id="mt-study-bg" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#f1efe7" />
          <stop offset="1" stopColor="#dedbd0" />
        </linearGradient>
        <linearGradient id="mt-study-steel" x1="0" y1="0" x2="1" y2="0.2">
          <stop offset="0" stopColor="#f2f4ee" />
          <stop offset="0.35" stopColor="#bcc2b8" />
          <stop offset="0.62" stopColor="#e0e3db" />
          <stop offset="1" stopColor="#939b91" />
        </linearGradient>
        <filter id="mt-study-shadow" x="-30%" y="-60%" width="160%" height="240%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <rect width="680" height="460" fill="url(#mt-study-bg)" />
      <g opacity="0.18" stroke="#3c443b" strokeWidth="0.7">
        <path d="M0 54h680M0 406h680M46 0v460M634 0v460" />
        <path d="M0 230h680" strokeDasharray="2 10" />
      </g>

      <text x="46" y="36" fill="#5b6258" fontSize="9.5" letterSpacing="2.4" fontWeight="600" fontFamily="var(--mt-sans)">
        مطالعه / {item.index}
      </text>
      <text x="634" y="36" fill="#7d837a" fontSize="9" letterSpacing="2" textAnchor="end" fontFamily="var(--mt-sans)">
        بدون مقیاس
      </text>

      <ellipse cx="340" cy="374" rx="238" ry="16" fill="#3a4038" opacity="0.24" filter="url(#mt-study-shadow)" />

      {item.id === "tin" ? (
        <g>
          <rect x="206" y="126" width="268" height="238" rx="4" fill="url(#mt-study-steel)" stroke="#868e83" strokeWidth="1.1" />
          <rect x="214" y="134" width="252" height="222" rx="2" fill="none" stroke="#f5f6f0" strokeWidth="0.8" opacity="0.55" />
          <g transform="rotate(-1 340 102)">
            <rect x="192" y="88" width="296" height="50" rx="3" fill="url(#mt-study-steel)" stroke="#868e83" strokeWidth="1.1" />
            <rect x="200" y="96" width="280" height="34" rx="2" fill="none" stroke="#f5f6f0" strokeWidth="0.8" opacity="0.55" />
          </g>
          <rect x="252" y="196" width="176" height="102" fill="#f5f3ea" opacity="0.95" />
          <rect x="260" y="204" width="160" height="86" fill="none" stroke="#7a8077" strokeWidth="0.7" opacity="0.4" />
          <text x="274" y="234" fill="#2c332b" fontSize="15" letterSpacing="2.6" fontWeight="700" fontFamily="var(--mt-sans)">
            MT
          </text>
          <text x="274" y="256" fill="#636a60" fontSize="7" letterSpacing="2" fontFamily="var(--mt-sans)">
            شیء نمایشی
          </text>
          <path d="M274 268h112" stroke="#a3a89e" strokeWidth="0.8" />
          <text x="274" y="282" fill="#868c82" fontSize="6.5" letterSpacing="1.6" fontFamily="var(--mt-sans)">
            ۰۱ / غیرقابل فروش
          </text>
        </g>
      ) : null}

      {item.id === "edit" ? (
        <g>
          {[0, 1, 2].map((sleeve) => {
            const x = 152 + sleeve * 132;
            const fills = ["#ddd6c6", "#ece7da", "#cdc7b7"];
            return (
              <g key={sleeve}>
                <rect x={x + 6} y="142" width="112" height="228" fill="#3a4038" opacity="0.14" />
                <rect x={x} y="132" width="112" height="228" fill={fills[sleeve]} />
                <rect x={x} y="132" width="112" height="16" fill={item.accent} opacity={0.2 + sleeve * 0.12} />
                <rect x={x + 9} y="166" width="94" height="158" fill="none" stroke="#8c8a7c" strokeWidth="0.7" opacity="0.7" />
                <text x={x + 18} y="194" fill="#4a5045" fontSize="7.5" letterSpacing="1.8" fontFamily="var(--mt-sans)" fontWeight="700">
                  MT / 0{sleeve + 1}
                </text>
                <path d={`M${x + 18} 204h76`} stroke="#9a9789" strokeWidth="0.7" />
                <text x={x + 18} y="226" fill="#6c7167" fontSize="6" letterSpacing="1.5" fontFamily="var(--mt-sans)">
                  روکش
                </text>
                <path d={`M${x + 18} 306h76`} stroke="#b0ac9e" strokeWidth="0.7" strokeDasharray="2 3" />
                <text x={x + 18} y="322" fill="#8b8f84" fontSize="5.8" letterSpacing="1.4" fontFamily="var(--mt-sans)">
                  نمایشی
                </text>
              </g>
            );
          })}
        </g>
      ) : null}

      {item.id === "shelf" ? (
        <g>
          <rect x="128" y="148" width="14" height="196" fill={item.tone} />
          <rect x="538" y="148" width="14" height="196" fill={item.tone} />
          <rect x="128" y="220" width="424" height="12" fill={item.accent} />
          <rect x="128" y="330" width="424" height="12" fill={item.accent} opacity="0.85" />
          <rect x="128" y="148" width="424" height="10" fill={item.tone} />

          {/* Upper object: tin */}
          <rect x="190" y="164" width="74" height="56" rx="2" fill="url(#mt-study-steel)" />
          <rect x="186" y="154" width="82" height="14" rx="2" fill="#cfd3ca" />
          <rect x="272" y="172" width="44" height="48" fill="#f2eee3" stroke="#a9a496" strokeWidth="0.7" />
          <path d="M280 186h28M280 196h28M280 206h20" stroke="#b2ad9f" strokeWidth="0.8" />

          {/* Lower objects: sleeves */}
          {[0, 1, 2].map((sleeve) => (
            <g key={sleeve}>
              <rect x={188 + sleeve * 92} y="268" width="70" height="62" fill={["#ddd6c6", "#ece7da", "#cdc7b7"][sleeve]} />
              <rect x={188 + sleeve * 92} y="268" width="70" height="7" fill={item.accent} opacity="0.3" />
              <path d={`M${198 + sleeve * 92} 292h50`} stroke="#9a9789" strokeWidth="0.7" />
              <path d={`M${198 + sleeve * 92} 304h34`} stroke="#b0ac9e" strokeWidth="0.7" />
            </g>
          ))}
          <ellipse cx="340" cy="344" rx="190" ry="9" fill="#3a4038" opacity="0.16" />
        </g>
      ) : null}

      <g opacity="0.6">
        <path d="M140 390h400" stroke="#6f766c" strokeWidth="0.8" />
        <path d="M140 383v14M540 383v14M340 386v8" stroke="#6f766c" strokeWidth="0.8" />
        <text x="340" y="420" fill="#6f766c" fontSize="8" letterSpacing="2.2" textAnchor="middle" fontFamily="var(--mt-sans)">
          مطالعهٔ نمایشی
        </text>
      </g>
      <text x="46" y="438" fill="#7d837a" fontSize="7.5" letterSpacing="1.8" fontFamily="var(--mt-sans)">
        MT / {item.index} · هیچ محصولی بازنمایی نمی‌شود
      </text>
      <text x="634" y="438" fill="#7d837a" fontSize="7.5" letterSpacing="1.8" textAnchor="end" fontFamily="var(--mt-sans)">
        تنها نمایش
      </text>
    </svg>
  );
}

export function ShelfElevation({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 480"
      role="img"
      aria-label="ترسیم تصویری نمای روبه‌روی قفسه دوطبقه کوتاه با یک قوطی در طبقه بالا و سه پاکت کاغذی در پایین."
      focusable="false"
    >
      <g fill="none" stroke="#3f463d" strokeWidth="1.2">
        <path d="M118 150v212M602 150v212" />
        <path d="M118 224h484M118 332h484M118 150h484" />
        <path d="M142 224v-60M578 224v-60" strokeWidth="0.7" opacity="0.5" />
        <path d="M142 332v-94M578 332v-94" strokeWidth="0.7" opacity="0.5" />
      </g>

      <g opacity="0.35" stroke="#3f463d" strokeWidth="0.7">
        <path d="M360 94v270" strokeDasharray="3 8" />
        <path d="M96 224h528M96 332h528" strokeDasharray="2 9" />
        <path d="M118 386h484" />
      </g>

      <g fill="none" stroke="#3f463d" strokeWidth="1.1">
        <rect x="196" y="166" width="84" height="58" />
        <path d="M192 158h92v14h-92z" />
        <path d="M300 176h54v48h-54z" />
        <path d="M238 250h6v-8h6v8h6v-8h6v8h6v-8h6v8" strokeWidth="0.8" opacity="0.7" />
      </g>

      <g fill="none" stroke="#3f463d" strokeWidth="1.1">
        <rect x="176" y="272" width="66" height="60" />
        <rect x="254" y="272" width="66" height="60" />
        <rect x="332" y="272" width="66" height="60" />
        <path d="M176 281h66M176 290h66M254 281h66M254 290h66M332 281h66M332 290h66" strokeWidth="0.6" opacity="0.55" />
      </g>

      <g stroke="#3f463d" strokeWidth="0.8" opacity="0.7">
        <path d="M118 424h484" />
        <path d="M118 416v16M602 416v16M360 419v10" />
      </g>

      <g fill="#4b5248" fontFamily="var(--mt-sans)" fontSize="8" letterSpacing="2">
        <text x="118" y="120">نمای قفسه / ۰۲</text>
        <text x="602" y="120" textAnchor="end">بدون مقیاس</text>
        <text x="362" y="450" textAnchor="middle">نمایش تصویری · هیچ وسیله‌ای نمایش داده نمی‌شود</text>
      </g>
      <g fill="#7a8176" fontFamily="var(--mt-sans)" fontSize="6.5" letterSpacing="1.4">
        <text x="118" y="480">بالا / قوطی + پرونده</text>
        <text x="602" y="480" textAnchor="end">پایین / سه پاکت</text>
      </g>
    </svg>
  );
}

export function MaterialSwatch({
  variant,
  className,
}: {
  variant: "steel" | "light" | "paper";
  className?: string;
}) {
  if (variant === "steel") {
    return (
      <svg
        className={className}
        viewBox="0 0 360 240"
        role="img"
        aria-label="بررسی تصویری فولاد برس‌خورده با بافت افقی ظریف."
        focusable="false"
      >
        <defs>
          <linearGradient id="mt-swatch-steel" x1="0" y1="0" x2="1" y2="0.3">
            <stop offset="0" stopColor="#e9ebe5" />
            <stop offset="0.4" stopColor="#c3c7bf" />
            <stop offset="0.68" stopColor="#dfe1da" />
            <stop offset="1" stopColor="#a9aea6" />
          </linearGradient>
        </defs>
        <rect width="360" height="240" fill="url(#mt-swatch-steel)" />
        <g stroke="#757b72" strokeWidth="0.6" opacity="0.25">
          {Array.from({ length: 40 }).map((_, line) => (
            <path key={line} d={`M0 ${3 + line * 6}h360`} />
          ))}
        </g>
        <g stroke="#ffffff" strokeWidth="0.6" opacity="0.35">
          {Array.from({ length: 20 }).map((_, line) => (
            <path key={line} d={`M0 ${6 + line * 12}h360`} />
          ))}
        </g>
        <path d="M24 24h312v192H24z" fill="none" stroke="#f7f8f2" strokeWidth="1" opacity="0.4" />
        <text x="28" y="220" fill="#3e453c" fontSize="9" letterSpacing="2.2" opacity="0.8" fontFamily="var(--mt-sans)">
          فولاد برس‌خورده / بافت ظریف
        </text>
      </svg>
    );
  }

  if (variant === "light") {
    return (
      <svg
        className={className}
        viewBox="0 0 360 240"
        role="img"
        aria-label="بررسی تصویری نور ملایم با بازتاب گرم و خط سایه کم‌رنگ."
        focusable="false"
      >
        <defs>
          <linearGradient id="mt-swatch-light" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0" stopColor="#fbf9f1" />
            <stop offset="0.55" stopColor="#e9e5d9" />
            <stop offset="1" stopColor="#d4d0c4" />
          </linearGradient>
          <radialGradient id="mt-swatch-glow" cx="38%" cy="30%" r="55%">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <filter id="mt-swatch-shadow" x="-30%" y="-60%" width="160%" height="240%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <rect width="360" height="240" fill="url(#mt-swatch-light)" />
        <rect width="360" height="240" fill="url(#mt-swatch-glow)" />
        <ellipse cx="196" cy="196" rx="118" ry="12" fill="#3e453c" opacity="0.28" filter="url(#mt-swatch-shadow)" />
        <path d="M48 74h128v96H48z" fill="#f7f4ea" opacity="0.55" />
        <path d="M62 88h100v68H62z" fill="none" stroke="#b3aea1" strokeWidth="0.8" opacity="0.7" />
        <path d="M48 74l52-22h128l-52 22z" fill="#ffffff" opacity="0.45" />
        <path d="M176 74l52-22v96l-52 22z" fill="#b9b4a7" opacity="0.22" />
        <path d="M24 24h312v192H24z" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.55" />
        <text x="28" y="220" fill="#4b5248" fontSize="9" letterSpacing="2.2" opacity="0.85" fontFamily="var(--mt-sans)">
          نور ملایم / منبع واحد
        </text>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 360 240"
      role="img"
      aria-label="بررسی تصویری کاغذ خنثی با خطوط ساده پرونده و زبانه نمایه کوچک."
      focusable="false"
    >
      <rect width="360" height="240" fill="#ded8ca" />
      <rect x="24" y="24" width="312" height="192" fill="#f4efe3" stroke="#c4bdae" strokeWidth="1" />
      <rect x="262" y="24" width="74" height="28" fill="#4c5e54" />
      <text x="276" y="43" fill="#f2f4ee" fontSize="9" letterSpacing="1.8" fontWeight="700" fontFamily="var(--mt-sans)">
        MT / 03
      </text>
      <text x="48" y="70" fill="#2f352d" fontSize="11" letterSpacing="2.4" fontWeight="700" fontFamily="var(--mt-sans)">
        کاغذ خنثی
      </text>
      <g stroke="#b8b1a2" strokeWidth="0.8">
        <path d="M48 90h264M48 120h264M48 150h264M48 180h204" />
      </g>
      <g fill="#6a7066" fontSize="7" letterSpacing="1.4" fontFamily="var(--mt-sans)">
        <text x="48" y="112">شیء</text>
        <text x="48" y="142">جنس</text>
        <text x="48" y="172">وضعیت</text>
      </g>
      <g fill="#3b4239" fontSize="7" letterSpacing="1.1" fontFamily="var(--mt-sans)">
        <text x="140" y="112">قوطی</text>
        <text x="140" y="142">فولاد</text>
        <text x="140" y="172">نمایش</text>
      </g>
      <path d="M24 24h312v192H24z" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
      <text x="28" y="220" fill="#4b5248" fontSize="9" letterSpacing="2.2" opacity="0.85" fontFamily="var(--mt-sans)">
        کاغذ خنثی / کارت ساده
      </text>
    </svg>
  );
}
