import type { Template } from "@/types/template";

const HEALTH_WARNING =
  "مصرف دخانیات برای سلامتی زیان‌بار است. این نمونهٔ طراحیِ خیالی ویژهٔ بزرگسالان است. گردانندگان مسئول رعایت محدودیت‌های سنی، مقررات تبلیغات و درج هشدارهای سلامتِ الزامی در بازار خود هستند.";

export const cigarAtelier: Template = {
  id: "cigar-atelier",
  title: "سیگار آتلیه",
  category: "tobacco",
  description:
    "معرفی لوکس و تیره، همراه با محدودیت سنی، برای خانهٔ سیگاربرگی خیالی؛ با بررسی بافت مواد و گالری محصولی سنجیده.",
  previewImage: "/images/templates/cigar-atelier.jpg",
  scene: "cigar-atelier",
  theme: {
    accent: "#c79a63",
    accentSoft: "#775331",
    background: "#0a0907",
    foreground: "#f2eadf",
    muted: "#a89a87",
    atmosphere: "#1b120b",
  },
  content: {
    nav: ["مجموعه", "آتلیه", "بزرگسالان ۱۸+"],
    eyebrow: "سیگار آتلیه / ویژهٔ بزرگسالان ۱۸+",
    headline: "هنر ساخت،",
    headlineAccent: "به‌دور از هیاهو",
    intro:
      "خانه‌ای خیالی برای سیگار برگ با بیانی آرشیوی و سنجیده: متریال، خاستگاه و گالری محصولی با دسترسی کنترل‌شده.",
    primaryCta: "مشاهدهٔ مجموعه",
    secondaryCta: "خواندن یادداشت‌های خانه",
    note: "نسخهٔ نمایشی با محدودیت سنی · محصولات خیالی · بدون فروش",
    chapters: [
      {
        label: "01 / مجموعه",
        title: "کاتالوگی کوچک و نمایه‌شده",
        body: "سه قالب خیالی، هرکدام با کارت مشخصاتی روشن؛ جزئیات محصولات صرفاً نمایشی‌اند و توصیف کالای واقعی نیستند.",
      },
      {
        label: "02 / مواد و بافت‌ها",
        title: "سدر، برنج و کاغذ",
        body: "زبان بصری از اشیای آتلیه شکل گرفته است: چوب سدر، برنج کهنه، چرم تیره و کارت‌های نمایهٔ چاپی.",
      },
      {
        label: "03 / خانه",
        title: "بدون ادعای سلامت",
        body: "این معرفی هیچ ادعایی دربارهٔ سلامت، ترک دخانیات یا اثر درمانی ندارد. گردانندگان باید هشدارها و محدودیت‌های الزامی بازار خود را درج کنند.",
      },
    ],
    specs: [
      { label: "قالب", value: "سیگار آتلیه" },
      { label: "حوزه", value: "دخانیات و سیگار برگ" },
      { label: "دسترسی", value: "الزام به تأیید سن" },
      { label: "تعامل", value: "برای چرخاندن بکشید" },
    ],
  },
  price: 319,
  features: ["محدودیت سنی ۱۸+", "بررسی متریال", "گالری محصول", "اعلان مقررات", "بخش هشدار سلامت"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: false,
  published: true,
  isDemo: true,
  ageRestricted: true,
  healthWarning: HEALTH_WARNING,
};

export const modernTobacco: Template = {
  id: "modern-tobacco",
  title: "بوتیک مدرن توباکو",
  category: "tobacco",
  description:
    "مفهومی معاصر برای بوتیکی با محدودیت سنی، قوطی فلزی مینیمال، چیدمانی سرمقاله‌ای و محتوای نمایشی با برچسب‌های روشن.",
  previewImage: "/images/templates/modern-tobacco.jpg",
  scene: "modern-tobacco",
  theme: {
    accent: "#a7b7ad",
    accentSoft: "#5e7067",
    background: "#090a09",
    foreground: "#f1f3ef",
    muted: "#9ba49e",
    atmosphere: "#141a16",
  },
  content: {
    nav: ["گزیده", "فروشگاه‌ها", "بزرگسالان ۱۸+"],
    eyebrow: "مدرن توباکو / ویژهٔ بزرگسالان ۱۸+",
    headline: "قفسه‌ای",
    headlineAccent: "متفاوت",
    intro:
      "مفهوم بوتیکی خیالی برای محصولات بزرگسالان، با قوطی فلزی ساده، تایپوگرافی دقیق و کاتالوگ نمایشیِ مشخصاً برچسب‌خورده.",
    primaryCta: "مرور گزیدهٔ محصولات",
    secondaryCta: "خواندن اطلاعیه",
    note: "نسخهٔ نمایشی با محدودیت سنی · محصولات خیالی · بدون فروش",
    chapters: [
      {
        label: "01 / گزیده",
        title: "محصولاتی کمتر، معرفی بهتر",
        body: "کاتالوگی جمع‌وجور و خیالی با کارت‌های محصول بی‌طرفانه و بدون هدف‌گیری سبک زندگی؛ همهٔ متن‌های محصول صرفاً نمایشی‌اند.",
      },
      {
        label: "02 / قفسه",
        title: "فولاد و نور ملایم",
        body: "زبان بصری بوتیک معاصر است: فلز برس‌خورده، قفسه‌های کوتاه و پالت رنگی خنثی و سنجیده.",
      },
      {
        label: "03 / اطلاعیه",
        title: "محدودیت‌ها بخشی از طراحی‌اند",
        body: "تأیید سن، هشدارهای سلامت و مسئولیت گردانندگان، عناصر اصلی رابط هستند؛ نه یادداشت‌هایی در حاشیه.",
      },
    ],
    specs: [
      { label: "قالب", value: "مدرن توباکو" },
      { label: "حوزه", value: "دخانیات و سیگار برگ" },
      { label: "دسترسی", value: "الزام به تأیید سن" },
      { label: "تعامل", value: "برای چرخاندن بکشید" },
    ],
  },
  price: 299,
  features: ["محدودیت سنی ۱۸+", "شبکهٔ سرمقاله‌ای محصولات", "فهرست فروشگاه‌ها", "بخش هشدار سلامت", "چیدمان معاصر"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: false,
  published: true,
  isDemo: true,
  ageRestricted: true,
  healthWarning: HEALTH_WARNING,
};
