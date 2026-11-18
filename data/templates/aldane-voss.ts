import type { Template } from "@/types/template";

/**
 * Aldane & Voss is a self-contained static HTML publication for a fictional
 * tobacco house. The studio renders it in an isolated iframe; the procedural
 * heritage scene is used for the catalogue card.
 *
 * Age gate and health-warning requirements are enforced by the Web3ite shell
 * and by the published document. No regulatory approval is claimed.
 */
export const aldaneVoss: Template = {
  id: "aldane-voss",
  title: "آلدین و واس",
  category: "tobacco",
  description:
    "کاتالوگ برای دخانیات خانه‌ای خیالی با محدودیت سنی؛ چهار ترکیب شماره‌گذاری‌شده، برگه‌های مشخصات کامل، نمای بسته‌بندی قابل‌چرخش و فصل‌های افقی.",
  previewImage: "/images/templates/aldane-voss.jpg",
  scene: "heritage-tobacco",
  previewUrl: "/previews/aldane-voss/",
  theme: {
    accent: "#b8794a",
    accentSoft: "#6e452b",
    background: "#0d0c0b",
    foreground: "#ece6da",
    muted: "#8d867c",
    atmosphere: "#1a140f",
  },
  content: {
    nav: ["مجموعه", "خانه", "بزرگسالان ۱۸+"],
    eyebrow: "آلدین و واس / کاتالوگ خیالی",
    headline: "ترکیب‌ها،",
    headlineAccent: "با مشخصاتی روشن",
    intro:
      "کاتالوگی خیالی از محصولات دخانی برای مخاطبان بزرگسال؛ تایپوگرافی آرشیوی، نمای بسته‌بندی قابل‌چرخش و بدون ادعای سلامت یا تأییدیه.",
    primaryCta: "گشودن کاتالوگ",
    secondaryCta: "خواندن یادداشت‌های خانه",
    note: "نسخهٔ نمایشی با محدودیت سنی · محصولات خیالی · بدون فروش",
    chapters: [
      {
        label: "01 / کاتالوگ",
        title: "چهار ترکیب شماره‌گذاری‌شده",
        body: "مجموعه‌ای خیالی با برگه‌های مشخصات روشن؛ خاستگاه، برش و قالب صرفاً به‌عنوان محتوای نمایشی طراحی ارائه شده‌اند.",
      },
      {
        label: "02 / خانه",
        title: "زبانی آرشیوی",
        body: "قلم Newsreader، رنگ‌های گرم کاغذ و چیدمانی نمایه‌شده، لحنی تاریخی و سنجیده به خانه می‌بخشند.",
      },
      {
        label: "03 / اطلاعیه",
        title: "بدون ادعای تأییدیه",
        body: "این نسخهٔ نمایشی ادعای انطباق با مقررات، دریافت گواهی یا برخورداری از مزایای سلامت ندارد. رعایت الزامات محلی بر عهدهٔ گردانندگان است.",
      },
    ],
    specs: [
      { label: "قالب", value: "آلدین و واس" },
      { label: "حوزه", value: "دخانیات و سیگار برگ" },
      { label: "قالب فنی", value: "HTML منتشرشده + WebGL" },
      { label: "دسترسی", value: "محدودیت سنی ۱۸+" },
    ],
  },
  price: 289,
  features: ["محدودیت سنی ۱۸+", "کاتالوگ ترکیب‌ها", "نمای سه‌بعدی بسته‌بندی با قابلیت چرخش", "برگه‌های مشخصات", "روایت با پیمایش افقی"],
  technologies: ["Three.js", "Lenis", "Canvas 2D", "HTML مستقل", "پیش‌نمایش منتشرشده"],
  featured: true,
  published: true,
  isDemo: true,
  ageRestricted: true,
  healthWarning:
    "مصرف دخانیات برای سلامتی زیان‌بار است. این نمونهٔ طراحیِ خیالی ویژهٔ بزرگسالان است. گردانندگان مسئول رعایت محدودیت‌های سنی، مقررات تبلیغات و درج هشدارهای سلامتِ الزامی در بازار خود هستند.",
};
