import type { Template } from "@/types/template";

export const noirCafe: Template = {
  id: "noir-cafe",
  title: "نوآر کافه",
  category: "cafe",
  description:
    "اسپرسوباری تا دیروقت، با فنجانی مجسمه‌وار، بخاری شناور و منویی شبیه برگهٔ یادداشت مزه.",
  previewImage: "/images/templates/noir-cafe.jpg",
  scene: "noir-cafe",
  theme: {
    accent: "#c9a36a",
    accentSoft: "#7b5b35",
    background: "#090806",
    foreground: "#f3eadc",
    muted: "#a79a88",
    atmosphere: "#1a1108",
  },
  content: {
    nav: ["منو", "فضا", "بازدید"],
    eyebrow: "نوآر کافه / اسپرسوبار",
    headline: "قهوه،",
    headlineAccent: "پس از غروب",
    intro:
      "اسپرسوباری شبانه در چاپخانه‌ای قدیمی؛ منویی کوتاه، نوری ملایم و بی‌شتابی.",
    primaryCta: "مشاهدهٔ منو",
    secondaryCta: "یافتن کافه",
    note: "نسخهٔ نمایشی · برای بررسی فضا بکشید",
    chapters: [
      {
        label: "01 / فنجان",
        title: "همان لحظه آماده می‌شود",
        body: "منویی کوتاه و چرخشی از اسپرسو، بر پایهٔ ترکیب اختصاصی کافه و دانه‌ای از یک رُست‌کنندهٔ مهمان؛ بی‌تکلف و بی‌نمایش.",
      },
      {
        label: "02 / فضا",
        title: "نور کم، فلزی گرم",
        body: "نیمکت‌های سبز تیره، برنج کهنه و پیشخوانی بلند از چوب گردو؛ فضایی برای تماشای آهسته.",
      },
      {
        label: "03 / آیین",
        title: "کمی بیشتر بمانید",
        body: "درها ساعت هفت باز می‌شوند و با رفتن آخرین میز بسته. رزرو فقط برای صندلی‌های پیشخوان پذیرفته می‌شود.",
      },
    ],
    specs: [
      { label: "قالب", value: "نوآر کافه" },
      { label: "حوزه", value: "کافه و قهوه" },
      { label: "صحنهٔ اصلی", value: "فنجان اسپرسو / نور گرم استودیویی" },
      { label: "تعامل", value: "برای چرخاندن بکشید" },
    ],
  },
  price: 249,
  features: ["نمایش منو", "رزرو", "گالری", "نشانی و ساعت کاری", "چرخش آهستهٔ دوربین"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: true,
  published: true,
  isDemo: true,
};

export const atelierCoffee: Template = {
  id: "atelier-coffee",
  title: "آتلیه قهوه",
  category: "cafe",
  description:
    "استودیویی گرم و سرمقاله‌محور برای قهوه، با دم‌آوری شیشه‌ای، سطوح کرم‌رنگ و روایتی خوش‌پرداخت از محصول.",
  previewImage: "/images/templates/atelier-coffee.jpg",
  scene: "atelier-coffee",
  theme: {
    accent: "#d6a65f",
    accentSoft: "#8d6a36",
    background: "#100e0a",
    foreground: "#f6efe3",
    muted: "#b5a78f",
    atmosphere: "#241b10",
  },
  content: {
    nav: ["قهوه", "آتلیه", "یادداشت‌ها"],
    eyebrow: "آتلیه قهوه / بار قهوهٔ دمی",
    headline: "قهوه‌ای",
    headlineAccent: "آرام‌تر",
    intro:
      "استودیویی روشن برای قهوهٔ دمی، گفت‌وگو و فنجانی که دعوتتان می‌کند بنشینید.",
    primaryCta: "کاوش در دنیای قهوه",
    secondaryCta: "بازدید از آتلیه",
    note: "نسخهٔ نمایشی · با حرکت نشانگر زاویهٔ دید تغییر می‌کند",
    chapters: [
      {
        label: "01 / بار قهوه",
        title: "هر بار، یک فنجان",
        body: "بار قهوه پیرامون یک ایستگاه دم‌آوری چیده شده است؛ هر فنجان وزن، دم‌آوری و پشت پیشخوان سرو می‌شود.",
      },
      {
        label: "02 / قفسه",
        title: "فهرستی کوچک و سنجیده",
        body: "دو گزینهٔ اسپرسو و سه قهوهٔ فیلتری؛ فهرست با برنامهٔ رُست تغییر می‌کند، نه با فصل.",
      },
      {
        label: "03 / استودیو",
        title: "نور روز و کاغذ",
        body: "دیوارهای کرم، بلوط روشن و آرشیوی زنده از یادداشت‌های دم‌آوری؛ این فضا هم‌زمان استودیویی کوچک برای نشر است.",
      },
    ],
    specs: [
      { label: "قالب", value: "آتلیه قهوه" },
      { label: "حوزه", value: "کافه و قهوه" },
      { label: "صحنهٔ اصلی", value: "دم‌آوری شیشه‌ای / نور کرم‌رنگ" },
      { label: "تعامل", value: "پارالاکس با نشانگر" },
    ],
  },
  price: 269,
  features: ["فهرست قهوه‌ها", "دفترچهٔ دم‌آوری", "روایت آتلیه", "فهرست فروشگاه‌ها", "چیدمان سرمقاله‌ای گرم"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: false,
  published: true,
  isDemo: true,
};

export const obsidianRoastery: Template = {
  id: "obsidian-roastery",
  title: "رُستری ابسیدین",
  category: "cafe",
  description:
    "برندی مجسمه‌وار و تیره برای قهوه، با تصویر شاخصی از رُستری یکپارچه، جزئیات برنجی و کاتالوگی گزیده.",
  previewImage: "/images/templates/obsidian-roastery.jpg",
  scene: "obsidian-roastery",
  theme: {
    accent: "#b78b55",
    accentSoft: "#5c4329",
    background: "#080809",
    foreground: "#f1ece3",
    muted: "#918a80",
    atmosphere: "#151210",
  },
  content: {
    nav: ["قهوه‌های رُست‌شده", "رُستری", "اشتراک"],
    eyebrow: "رُستری ابسیدین / رُست محدود",
    headline: "رُست‌شده",
    headlineAccent: "در تاریکی",
    intro:
      "خانه‌ای مجسمه‌وار برای رُستری با تولید محدود؛ سه قهوه، یک روز رُست و چیزی بلندآوازه‌تر از خودِ کار نیست.",
    primaryCta: "مشاهدهٔ قهوه‌ها",
    secondaryCta: "درون رُستری",
    note: "نسخهٔ نمایشی · برای بررسی شیء بکشید",
    chapters: [
      {
        label: "01 / محصول",
        title: "قوطی‌ای برای نگه‌داشتن",
        body: "فولاد مشکی مات، مُهر برنجی و خطی برجسته؛ بسته‌بندی‌ای که برای ماندن روی پیشخوان طراحی شده است.",
      },
      {
        label: "02 / رُست",
        title: "هر هفته، یک روز",
        body: "رُست‌های کم‌حجم در یک روز مشخص هفته؛ زمان استراحت روی پایهٔ هر قوطی درج می‌شود.",
      },
      {
        label: "03 / خاستگاه",
        title: "ردیابی‌پذیری از ابتدا",
        body: "خاستگاه، تولیدکننده و فرایند در صفحهٔ محصول آمده‌اند؛ بی‌امتیازدهی و بی‌نمایش یادداشت‌های مزه.",
      },
    ],
    specs: [
      { label: "قالب", value: "رُستری ابسیدین" },
      { label: "حوزه", value: "کافه و قهوه" },
      { label: "صحنهٔ اصلی", value: "قوطی یکپارچه / نور شاخص برنجی" },
      { label: "تعامل", value: "برای چرخاندن بکشید" },
    ],
  },
  price: 289,
  features: ["کاتالوگ رُست‌ها", "بخش اشتراک", "روایت رُستری", "برگه‌های مشخصات محصول", "شبکهٔ سرمقاله‌ای تیره"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: true,
  published: true,
  isDemo: true,
};
