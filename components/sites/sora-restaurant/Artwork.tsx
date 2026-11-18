/**
 * Inline artwork for Sora Restaurant.
 *
 * All imagery is SVG: no photography, no layout shift and no external requests.
 */

export function BowlScene() {
  return (
    <svg
      viewBox="0 0 1200 760"
      className="sr-bowl-art"
      role="img"
      aria-labelledby="sr-bowl-title sr-bowl-desc"
    >
      <title id="sr-bowl-title">یک کاسهٔ سفالی با لعاب مریم‌گلی برای ناهار</title>
      <desc id="sr-bowl-desc"> کاسه‌ای سرامیکی پهن با لعاب مریم‌گلی روشن روی میز چوبی گرم قرار دارد. جفت چاپ‌استیک در سمت راست، همراه فنجانی کوچک و دستمال کتانی تا‌شده است. نور ملایم روز از چپ می‌آید. </desc>
      <defs>
        <linearGradient id="sr-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eee9dd" />
          <stop offset="0.66" stopColor="#e6dfd0" />
          <stop offset="1" stopColor="#d8cfbe" />
        </linearGradient>
        <linearGradient id="sr-table" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cbb99b" />
          <stop offset="0.5" stopColor="#bda98a" />
          <stop offset="1" stopColor="#a68f72" />
        </linearGradient>
        <radialGradient id="sr-light" cx="0.26" cy="0.18" r="0.7">
          <stop offset="0" stopColor="#fffdf4" stopOpacity="0.85" />
          <stop offset="0.55" stopColor="#fff8e8" stopOpacity="0.2" />
          <stop offset="1" stopColor="#fff8e8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sr-bowl-outer" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#9aa58c" />
          <stop offset="0.34" stopColor="#7f8b73" />
          <stop offset="0.72" stopColor="#65715c" />
          <stop offset="1" stopColor="#4c5645" />
        </linearGradient>
        <linearGradient id="sr-bowl-rim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c7ceb8" />
          <stop offset="0.3" stopColor="#aab49a" />
          <stop offset="0.7" stopColor="#8c987f" />
          <stop offset="1" stopColor="#6d7963" />
        </linearGradient>
        <radialGradient id="sr-bowl-inner" cx="0.5" cy="0.42" r="0.62">
          <stop offset="0" stopColor="#3c4437" />
          <stop offset="0.55" stopColor="#2b3228" />
          <stop offset="1" stopColor="#20251d" />
        </radialGradient>
        <linearGradient id="sr-chopstick" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5a4832" />
          <stop offset="0.6" stopColor="#7c6447" />
          <stop offset="1" stopColor="#4a3a28" />
        </linearGradient>
        <linearGradient id="sr-cup" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#e7e0d0" />
          <stop offset="1" stopColor="#c8bca7" />
        </linearGradient>
        <pattern id="sr-grain" width="220" height="22" patternUnits="userSpaceOnUse">
          <path d="M0 8H220M0 16H220" stroke="#5f4c34" strokeOpacity="0.07" />
        </pattern>
      </defs>

      <rect width="1200" height="760" fill="url(#sr-bg)" />
      <rect width="1200" height="760" fill="url(#sr-light)" />
      <path d="M0 560H1200V760H0Z" fill="url(#sr-table)" />
      <path d="M0 560H1200" stroke="#8f795c" strokeOpacity="0.35" />
      <rect y="560" width="1200" height="200" fill="url(#sr-grain)" />

      <g fontFamily="var(--font-display), sans-serif" fontSize="9" letterSpacing="3" fill="#5c604f">
        <text x="48" y="52">سورا · کوچهٔ گاردن</text>
        <text x="1152" y="52" textAnchor="end">سفال شمارهٔ ۰۴</text>
      </g>
      <g stroke="#5c604f" strokeOpacity="0.22">
        <path d="M48 68H240M960 68H1152" />
      </g>

      <ellipse cx="600" cy="600" rx="290" ry="52" fill="#5b4a34" opacity="0.25" />
      <ellipse cx="600" cy="586" rx="244" ry="30" fill="#4b3c2a" opacity="0.22" />

      <g>
        <path
          d="M346 462C356 532 446 592 600 592C754 592 844 532 854 462C857 442 845 430 824 428C750 420 670 416 600 416C530 416 450 420 376 428C355 430 343 442 346 462Z"
          fill="url(#sr-bowl-outer)"
        />
        <path
          d="M346 462C356 532 446 592 600 592C754 592 844 532 854 462C857 442 845 430 824 428C750 420 670 416 600 416C530 416 450 420 376 428C355 430 343 442 346 462Z"
          fill="none"
          stroke="#3f483a"
          strokeOpacity="0.45"
        />
        <ellipse cx="600" cy="432" rx="254" ry="54" fill="url(#sr-bowl-rim)" />
        <ellipse cx="600" cy="432" rx="232" ry="44" fill="url(#sr-bowl-inner)" />
        <ellipse cx="600" cy="426" rx="206" ry="32" fill="none" stroke="#b9c1aa" strokeOpacity="0.28" />
        <ellipse cx="536" cy="430" rx="48" ry="10" fill="#9aa68a" opacity="0.16" />

        <path
          d="M362 474C396 522 476 556 600 556C724 556 804 522 838 474"
          fill="none"
          stroke="#c4ccb4"
          strokeOpacity="0.25"
          strokeWidth="2"
        />
        <path
          d="M402 508C442 538 510 554 600 554C690 554 758 538 798 508"
          fill="none"
          stroke="#37402f"
          strokeOpacity="0.2"
          strokeWidth="7"
        />
        <ellipse cx="600" cy="580" rx="150" ry="18" fill="#37402f" opacity="0.22" />
        <path d="M512 592H688" stroke="#38422f" strokeOpacity="0.6" strokeWidth="10" strokeLinecap="round" />
      </g>

      <g stroke="#fffdf4" strokeOpacity="0.32" strokeLinecap="round" fill="none">
        <path d="M514 384C500 356 526 338 514 310C504 286 518 268 512 246" strokeWidth="3" />
        <path d="M600 372C586 342 610 324 598 294C588 268 604 252 596 230" strokeWidth="3" />
        <path d="M682 382C668 354 692 336 680 308C670 286 684 270 678 250" strokeWidth="2.5" />
      </g>

      <g transform="rotate(-12 948 520)">
        <rect x="912" y="312" width="11" height="290" rx="5" fill="url(#sr-chopstick)" />
        <rect x="930" y="312" width="11" height="290" rx="5" fill="url(#sr-chopstick)" />
        <rect x="912" y="312" width="11" height="40" rx="5" fill="#d6c6a8" opacity="0.35" />
        <rect x="930" y="312" width="11" height="40" rx="5" fill="#d6c6a8" opacity="0.35" />
      </g>

      <g>
        <ellipse cx="944" cy="584" rx="58" ry="14" fill="#584732" opacity="0.25" />
        <path d="M898 520H990L978 574C974 584 966 588 954 588H934C922 588 914 584 910 574Z" fill="url(#sr-cup)" />
        <ellipse cx="944" cy="520" rx="46" ry="10" fill="#f1ebdc" />
        <ellipse cx="944" cy="520" rx="36" ry="7" fill="#8f7c5f" />
        <path d="M914 546C928 556 960 556 974 546" fill="none" stroke="#a99475" strokeOpacity="0.55" />
      </g>

      <g>
        <path d="M196 524H322L310 566H208Z" fill="#f1ece0" />
        <path d="M196 524H322" stroke="#c7bda9" />
        <path d="M208 566H310" stroke="#b9ae99" />
        <path d="M222 536H296M216 548H302" stroke="#b9ae99" strokeOpacity="0.55" />
      </g>

      <g fontFamily="var(--font-display), sans-serif" fontSize="8" letterSpacing="2.6" fill="#5c604f">
        <text x="48" y="700">لعاب مریم‌گلی · سفال</text>
        <text x="1152" y="700" textAnchor="end">نور روز · ۱۱:۴۰</text>
      </g>
    </svg>
  );
}

export function RoomPlan() {
  return (
    <svg
      viewBox="0 0 900 700"
      className="sr-plan-art"
      role="img"
      aria-labelledby="sr-plan-title sr-plan-desc"
    >
      <title id="sr-plan-title">طرح کف اتاق غذاخوری سورا</title>
      <desc id="sr-plan-desc"> طرحی با پیشخوانی ده‌نفره رو به آشپزخانه، دو میز پنج‌نفره، حیاطی کوچک در انتها و ورودی در کوچهٔ گاردن. </desc>
      <defs>
        <pattern id="sr-plan-grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M30 0H0V30" fill="none" stroke="#ece6d8" strokeOpacity="0.045" />
        </pattern>
      </defs>

      <rect width="900" height="700" fill="#171b16" />
      <rect width="900" height="700" fill="url(#sr-plan-grid)" />

      <g fontFamily="var(--font-display), sans-serif" fontSize="8" letterSpacing="2.6" fill="#aab09c">
        <text x="40" y="46">سورا · همکف</text>
        <text x="860" y="46" textAnchor="end">طرح ۱:۵۰ · بدون مقیاس</text>
      </g>

      <g fill="none" stroke="#ede7d9" strokeOpacity="0.5">
        <path d="M90 110H620V470H90Z" strokeWidth="2" />
        <path d="M620 200H810V470H620Z" strokeWidth="2" />
        <path d="M620 110H810V200H620Z" strokeOpacity="0.25" />
        <path d="M170 470V540H430V470" strokeOpacity="0.28" />
      </g>

      <g fill="none" stroke="#ede7d9" strokeOpacity="0.16">
        <path d="M90 290H620M620 350H810" />
        <path d="M280 110V290M470 110V290" />
      </g>

      <g>
        <rect x="120" y="150" width="330" height="42" fill="#2d352a" stroke="#b9c4aa" strokeOpacity="0.35" />
        <path d="M135 192V226M435 192V226" stroke="#b9c4aa" strokeOpacity="0.35" />
        {[150, 192, 234, 276, 318, 360, 402].map((x) => (
          <circle key={x} cx={x} cy="213" r="10" fill="none" stroke="#b9c4aa" strokeOpacity="0.45" />
        ))}
        <text x="285" y="177" textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2" fill="#d9dfcd">
          پیشخوان · ۱۰
        </text>
      </g>

      <g>
        <rect x="120" y="238" width="330" height="34" fill="#20261e" stroke="#b9c4aa" strokeOpacity="0.2" />
        <path d="M140 238V272M180 238V272M220 238V272M260 238V272M300 238V272M340 238V272M380 238V272M420 238V272" stroke="#b9c4aa" strokeOpacity="0.2" />
        <text x="285" y="259" textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2" fill="#aab09c">
          آشپزخانه
        </text>
      </g>

      <g>
        <circle cx="190" cy="360" r="27" fill="none" stroke="#d9dfcd" strokeOpacity="0.42" />
        <circle cx="190" cy="360" r="9" fill="none" stroke="#d9dfcd" strokeOpacity="0.28" />
        <circle cx="420" cy="360" r="27" fill="none" stroke="#d9dfcd" strokeOpacity="0.42" />
        <circle cx="420" cy="360" r="9" fill="none" stroke="#d9dfcd" strokeOpacity="0.28" />
        <text x="190" y="408" textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2" fill="#aab09c">
          میز · ۵
        </text>
        <text x="420" y="408" textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2" fill="#aab09c">
          میز · ۵
        </text>
      </g>

      <g>
        <rect x="650" y="230" width="130" height="80" fill="#20261e" stroke="#96a487" strokeOpacity="0.28" />
        <circle cx="680" cy="270" r="12" fill="none" stroke="#96a487" strokeOpacity="0.4" />
        <circle cx="715" cy="280" r="10" fill="none" stroke="#96a487" strokeOpacity="0.4" />
        <circle cx="750" cy="258" r="13" fill="none" stroke="#96a487" strokeOpacity="0.4" />
        <text x="715" y="336" textAnchor="middle" fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2" fill="#aab09c">
          حیاط · ۴
        </text>
      </g>

      <g>
        <path d="M330 470V540" stroke="#d9dfcd" strokeOpacity="0.4" strokeDasharray="3 5" />
        <path d="M300 540H360" stroke="#d9dfcd" strokeOpacity="0.4" />
        <text x="430" y="528" fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2" fill="#aab09c">
          ورودی · کوچهٔ گاردن
        </text>
        <path d="M410 516H300" stroke="#d9dfcd" strokeOpacity="0.28" />
      </g>

      <g>
        <path d="M860 610H800" stroke="#aab09c" strokeOpacity="0.4" />
        <path d="M860 610V550" stroke="#aab09c" strokeOpacity="0.4" />
        <path d="M860 550L852 566M860 550L868 566" stroke="#aab09c" strokeOpacity="0.4" />
        <text x="852" y="632" textAnchor="end" fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2" fill="#aab09c">
          N
        </text>
      </g>

      <g fontFamily="var(--font-display), sans-serif" fontSize="7.5" letterSpacing="2.2" fill="#8b927f">
        <text x="40" y="650">ناهار · شام</text>
        <text x="860" y="650" textAnchor="end">سورا · کوچهٔ گاردن ۳</text>
      </g>
    </svg>
  );
}
