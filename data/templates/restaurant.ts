import type { Template } from "@/types/template";

export const maisonDining: Template = {
  id: "maison-dining",
  title: "مزون داینینگ",
  category: "restaurant",
  description:
    "فضایی برای غذاخوری فاخر، با گنبدی نقره‌ای زیر چراغی آویز و منویی که مرحله‌به‌مرحله گشوده می‌شود.",
  previewImage: "/images/templates/maison-dining.jpg",
  scene: "maison-dining",
  theme: {
    accent: "#c47a5f",
    accentSoft: "#79463a",
    background: "#0c0908",
    foreground: "#f4ece2",
    muted: "#aa9989",
    atmosphere: "#1e100c",
  },
  content: {
    nav: ["منو", "فضا", "رزرو"],
    eyebrow: "مزون داینینگ / سالن چشایی",
    headline: "میزی آماده",
    headlineAccent: "برای شامگاه",
    intro:
      "سالن غذاخوری دوازده‌نفره با منویی فصلی، پذیرایی آرام و دیدی باز به آشپزخانه.",
    primaryCta: "خواندن منو",
    secondaryCta: "رزرو میز",
    note: "نسخهٔ نمایشی · برای بررسی میز بکشید",
    chapters: [
      {
        label: "01 / منو",
        title: "هر روز، منویی تازه",
        body: "منوی چشایی کوتاه بر پایهٔ مواد اولیه‌ای است که همان صبح می‌رسند. کارت چاپی تاریخ می‌خورد و یادگاری آن شب می‌شود.",
      },
      {
        label: "02 / فضا",
        title: "چراغ آویز با نور ملایم",
        body: "چوب گردو، پارچهٔ کتان و نقرهٔ کهنه؛ چیدمان سالن رو به پیشخوان سرو است، نه دور از آن.",
      },
      {
        label: "03 / پذیرایی",
        title: "آرامش در طراحی",
        body: "یک نوبت پذیرایی و آهنگی یکنواخت؛ نیازهای غذایی هنگام رزرو دریافت و در تمام مراحل رعایت می‌شوند.",
      },
    ],
    specs: [
      { label: "قالب", value: "مزون داینینگ" },
      { label: "حوزه", value: "رستوران" },
      { label: "صحنهٔ اصلی", value: "گنبد نقره‌ای / چراغ آویز" },
      { label: "تعامل", value: "برای چرخاندن بکشید" },
    ],
  },
  price: 289,
  features: ["منوی چشایی", "رزرو", "فهرست شراب", "مراسم خصوصی", "چرخش آهستهٔ دوربین"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: true,
  published: true,
  isDemo: true,
};

export const emberKitchen: Template = {
  id: "ember-kitchen",
  title: "امبر کیچن",
  category: "restaurant",
  description:
    "آشپزخانه‌ای پرشور با آتش روباز، تخته‌ای سوخته و اخگرهای درخشان؛ روایتی از خوراک که هرگز به هیاهو نمی‌رسد.",
  previewImage: "/images/templates/ember-kitchen.jpg",
  scene: "ember-kitchen",
  theme: {
    accent: "#df7b45",
    accentSoft: "#8c4023",
    background: "#0a0807",
    foreground: "#f6e9dc",
    muted: "#b39b87",
    atmosphere: "#261009",
  },
  content: {
    nav: ["آتش", "منو", "رزرو"],
    eyebrow: "امبر کیچن / پخت با آتش روباز",
    headline: "پخته‌شده",
    headlineAccent: "با آتش",
    intro:
      "آشپزخانه‌ای روباز با یک اجاق، منویی متغیر و سالنی که عطر واپسین ساعت پذیرایی در آن مانده است.",
    primaryCta: "مشاهدهٔ منوی امشب",
    secondaryCta: "رزرو صندلی پیشخوان",
    note: "نسخهٔ نمایشی · برای دنبال‌کردن گرما بکشید",
    chapters: [
      {
        label: "01 / اجاق",
        title: "یک آتش، تا پایان شب",
        body: "منو بر پایهٔ یک اجاق هیزمی شکل می‌گیرد؛ سبزیجات، ماهی و برش‌های گوشت همگی با همان حرارت آماده می‌شوند.",
      },
      {
        label: "02 / منو",
        title: "نوشته‌شده کنار پیشخوان سرو",
        body: "چهار پیش‌غذا، چهار بشقاب و پایانی برای همه؛ کارت منو هم‌پای آتش و بازار تغییر می‌کند.",
      },
      {
        label: "03 / فضا",
        title: "نخست، صندلی‌های پیشخوان",
        body: "بیشتر صندلی‌ها رو به آتش‌اند. اتاق کوچکی در پشت، یک میز بلند برای گروه‌ها و شام‌های خصوصی دارد.",
      },
    ],
    specs: [
      { label: "قالب", value: "امبر کیچن" },
      { label: "حوزه", value: "رستوران" },
      { label: "صحنهٔ اصلی", value: "تختهٔ سوخته / ذرات اخگر" },
      { label: "تعامل", value: "برای چرخاندن بکشید" },
    ],
  },
  price: 309,
  features: ["منوی فصلی", "روایت پخت با آتش روباز", "رزرو پیشخوان", "غذاخوری خصوصی", "فضاسازی ذره‌ای"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: true,
  published: true,
  isDemo: true,
};

export const soraRestaurant: Template = {
  id: "sora-restaurant",
  title: "رستوران سورا",
  category: "restaurant",
  description:
    "تجربه‌ای آرام و مینیمال از مهمان‌نوازی، با کاسه‌ای سرامیکی، چوب روشن و فضایی دلباز.",
  previewImage: "/images/templates/sora-restaurant.jpg",
  scene: "sora-restaurant",
  theme: {
    accent: "#a8b9a1",
    accentSoft: "#65765f",
    background: "#0a0b0a",
    foreground: "#f0f1ea",
    muted: "#a2a79b",
    atmosphere: "#161a14",
  },
  content: {
    nav: ["منو", "خانه", "بازدید"],
    eyebrow: "سورا / غذاخوری ژاپنی مدرن",
    headline: "میزی",
    headlineAccent: "آرام‌تر",
    intro:
      "سالن غذاخوری مینیمال برای بشقاب‌های فصلی، ساکی و شبی که برای گفت‌وگو جا می‌گذارد.",
    primaryCta: "مشاهدهٔ منو",
    secondaryCta: "برنامه‌ریزی بازدید",
    note: "نسخهٔ نمایشی · برای بررسی فضا بکشید",
    chapters: [
      {
        label: "01 / بشقاب",
        title: "فصلی، نه پرهیاهو",
        body: "منویی جمع‌وجور از بشقاب‌های کوچک و یک پایانِ برنجی؛ مواد اولیه بی‌پیرایه نام برده می‌شوند و هنر روی بشقاب شکل می‌گیرد.",
      },
      {
        label: "02 / فضا",
        title: "چوب روشن، نور ملایم",
        body: "پیشخوانی کوتاه، جداکننده‌های کاغذی و باغچه‌ای کوچک فضا را روشن می‌کنند؛ هیچ‌چیز با میز رقابت نمی‌کند.",
      },
      {
        label: "03 / بازدید",
        title: "شبی بی‌تکلف",
        body: "پیشخوان پذیرای مهمانان بدون رزرو است و میزها رزرو می‌شوند. ساکی به‌صورت گیلاسی پیشنهاد می‌شود، نه به‌اصرار.",
      },
    ],
    specs: [
      { label: "قالب", value: "سورا" },
      { label: "حوزه", value: "رستوران" },
      { label: "صحنهٔ اصلی", value: "کاسهٔ سرامیکی / نور ملایم باغچه" },
      { label: "تعامل", value: "پارالاکس با نشانگر" },
    ],
  },
  price: 269,
  features: ["منوی فصلی", "فهرست ساکی", "رزرو", "روایت باغچه", "چیدمان سرمقاله‌ای مینیمال"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: false,
  published: true,
  isDemo: true,
};
