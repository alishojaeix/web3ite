import type { Template } from "@/types/template";

export const apexMarque: Template = {
  id: "apex-marque",
  title: "اپکس مارک",
  category: "automotive",
  description:
    "نمایشگاهی برای یک خودرو، یک نورپردازی شاخص و یک روایت؛ ردیف‌های مشخصات فنی و پیکربندی شفاف.",
  previewImage: "/images/templates/apex-marque.jpg",
  scene: "apex-marque",
  theme: {
    accent: "#e7794c",
    accentSoft: "#8d4227",
    background: "#0a0807",
    foreground: "#f6ede4",
    muted: "#aa998b",
    atmosphere: "#241009",
  },
  content: {
    nav: ["برند", "خودرو", "پیکربندی"],
    eyebrow: "اپکس مارک / خودروی گرند تورر",
    headline: "راهی طولانی",
    headlineAccent: "تا خانه",
    intro:
      "یک خودروی گرند تورر زیر نورپردازی شاخص؛ تناسباتی کشیده، کابینی آرام و مشخصاتی که ارزش دقیق‌نگری دارند.",
    primaryCta: "کاوش در خودرو",
    secondaryCta: "ساخت پیکربندی",
    note: "نسخهٔ نمایشی · برای گشتن پیرامون خودرو بکشید",
    chapters: [
      {
        label: "01 / فرم",
        title: "پرداخته برای مسیرهای دور",
        body: "کاپوتی کشیده، کابینی کوتاه و گلگیری عقب که نگاه را تا انتهای خودرو می‌برد؛ خویشتن‌داری به‌جای تزئینات.",
      },
      {
        label: "02 / کابین",
        title: "جایی آرام برای سفر",
        body: "چرم طبیعی، فلز ماشین‌کاری‌شده و موقعیت رانندگی پایین؛ کابینی برای ساعت‌هایی که میان دو مقصد می‌گذرند.",
      },
      {
        label: "03 / مشخصات",
        title: "خودرویی با شرحی روشن",
        body: "توان، وزن و ابعاد بی‌پرده اعلام شده‌اند. پیکربندی‌گر تغییرات را نشان می‌دهد، نه دیواری از کدهای تزئینات.",
      },
    ],
    specs: [
      { label: "قالب", value: "اپکس مارک" },
      { label: "حوزه", value: "خودرو" },
      { label: "صحنهٔ اصلی", value: "گرند تورر / نورپردازی شاخص" },
      { label: "تعامل", value: "برای چرخاندن بکشید" },
    ],
  },
  price: 499,
  features: ["ردیف مشخصات و پیکربندی", "نوار پیکربندی خودرو", "خط زمانی پیشینه", "یابندهٔ نمایندگی‌ها", "سامانهٔ دوربین نمایشگاه"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: true,
  published: true,
  isDemo: true,
};

export const velocityStudio: Template = {
  id: "velocity-studio",
  title: "استودیوی ویژوال",
  category: "automotive",
  description:
    "نمایش خودرویی با محوریت حرکت، قاب‌های آیرودینامیک لایه‌لایه، نور جهت‌دار و روایتی سینمایی برای عرضه.",
  previewImage: "/images/templates/velocity-studio.jpg",
  scene: "velocity-studio",
  theme: {
    accent: "#e45f58",
    accentSoft: "#8b2f2c",
    background: "#090809",
    foreground: "#f5eceb",
    muted: "#a99695",
    atmosphere: "#210c0e",
  },
  content: {
    nav: ["حرکت", "آیرودینامیک", "عرضه"],
    eyebrow: "استودیوی ولوکیتی / عملکرد",
    headline: "فرم",
    headlineAccent: "در حرکت",
    intro:
      "استودیوی عملکرد برای تیم‌هایی که به شکل جریان هوا اهمیت می‌دهند؛ با فیلم عرضه و روایتی دقیق از آیرودینامیک.",
    primaryCta: "مشاهدهٔ مطالعه",
    secondaryCta: "خواندن یادداشت‌های آیرودینامیک",
    note: "نسخهٔ نمایشی · برای دنبال‌کردن فرم بکشید",
    chapters: [
      {
        label: "01 / فرم",
        title: "طراحی‌شده از نمای جانبی",
        body: "نمای جانبی، نخستین امضای خودروست: دماغه‌ای کوتاه، خط کمریِ رو به بالا و دیفیوزر عقبی که در بدنه جای گرفته است.",
      },
      {
        label: "02 / جریان هوا",
        title: "آیرودینامیک در دل طراحی",
        body: "ورودی‌ها و مجراها بخشی از زبان سطوح‌اند، نه جزئیاتی پنهان پشت برگهٔ مشخصات.",
      },
      {
        label: "03 / عرضه",
        title: "فیلمی به‌جای بروشور",
        body: "یک فیلم عرضه، مشخصات کامل و پیکربندی‌گری برای جزئیاتی که واقعاً خودرو را تغییر می‌دهند.",
      },
    ],
    specs: [
      { label: "قالب", value: "استودیوی ولوکیتی" },
      { label: "حوزه", value: "خودرو" },
      { label: "صحنهٔ اصلی", value: "قاب‌های آیرودینامیک / نور قرمز جهت‌دار" },
      { label: "تعامل", value: "برای چرخاندن بکشید" },
    ],
  },
  price: 459,
  features: ["بخش فیلم عرضه", "روایت آیرودینامیک", "برگهٔ مشخصات", "پیکربندی‌گر", "چیدمان پویا و متحرک"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: false,
  published: true,
  isDemo: true,
};

export const electricMotion: Template = {
  id: "electric-motion",
  title: "الکتریک موشن",
  category: "automotive",
  description:
    "ایده‌ای نوین برای جابه‌جایی برقی، با خودرویی یکپارچه، طاق شارژ و روایتی آرام و امیدوارکننده از محصول.",
  previewImage: "/images/templates/electric-motion.jpg",
  scene: "electric-motion",
  theme: {
    accent: "#91cbb9",
    accentSoft: "#4e8274",
    background: "#080b0a",
    foreground: "#eef5f1",
    muted: "#96a9a0",
    atmosphere: "#10221c",
  },
  content: {
    nav: ["جابه‌جایی", "شارژ", "بازدید"],
    eyebrow: "الکتریک موشن / جابه‌جایی شهری",
    headline: "رو به جلو،",
    headlineAccent: "آرام و بی‌صدا",
    intro:
      "استودیویی برای جابه‌جایی برقی در شهر؛ خودرویی یکپارچه، روایتی ساده از شارژ و راهی آرام‌تر برای رفت‌وآمد.",
    primaryCta: "آشنایی با خودرو",
    secondaryCta: "یافتن ایستگاه شارژ",
    note: "نسخهٔ نمایشی · برای بررسی خودرو بکشید",
    chapters: [
      {
        label: "01 / خودرو",
        title: "ابعاد کوچک، فضای جادار",
        body: "خودروی برقی فشرده‌ای با طراحی مسافر‌محور، کفی تخت و دیدی باز به خیابان.",
      },
      {
        label: "02 / شارژ",
        title: "روایتی ساده از انرژی",
        body: "زمان شارژ، بُرد و انواع درگاه اتصال به زبانی روشن بیان شده‌اند؛ بی‌هیچ تبصرهٔ پنهان پشت تصویر شاخص.",
      },
      {
        label: "03 / شهر",
        title: "ساخته‌شده برای مسیرهای کوتاه",
        body: "خدمات جابه‌جایی بر پایهٔ مسیرهای روزمرهٔ مردم، همراه با نقشهٔ ایستگاه‌های شارژ و پایانه‌ها.",
      },
    ],
    specs: [
      { label: "قالب", value: "الکتریک موشن" },
      { label: "حوزه", value: "خودرو" },
      { label: "صحنهٔ اصلی", value: "خودروی برقی / طاق شارژ" },
      { label: "تعامل", value: "برای چرخاندن بکشید" },
    ],
  },
  price: 439,
  features: ["معرفی خودرو", "نقشهٔ شارژ", "راهنمای بُرد حرکت", "فرایند درخواست رانندگی آزمایشی", "صحنه با نور ملایم روز"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: false,
  published: true,
  isDemo: true,
};
