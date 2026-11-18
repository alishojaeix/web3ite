import type { Template } from "@/types/template";

export const neuralStudio: Template = {
  id: "neural-studio",
  title: "استودیوی نیورال",
  category: "ai",
  description:
    "استودیوی محصول هوش مصنوعی با شبکه‌ای مجسمه‌وار از گره‌ها، تایپوگرافی فنی و روایتی موجز از توانمندی‌ها.",
  previewImage: "/images/templates/neural-studio.jpg",
  scene: "neural-studio",
  theme: {
    accent: "#9aa8ff",
    accentSoft: "#5d68b8",
    background: "#08090f",
    foreground: "#f0f1f8",
    muted: "#9b9fb5",
    atmosphere: "#11142a",
  },
  content: {
    nav: ["سامانه‌ها", "نمونه‌کارها", "تماس"],
    eyebrow: "استودیوی نیورال / هوش مصنوعی کاربردی",
    headline: "هوشمندی،",
    headlineAccent: "در قالبی روشن",
    intro:
      "استودیوی محصول برای یادگیری ماشین کاربردی. مسئله‌های مبهم داده را به رابط‌هایی تبدیل می‌کنیم که می‌توان به آن‌ها اعتماد کرد.",
    primaryCta: "مشاهدهٔ سامانه‌ها",
    secondaryCta: "گفت‌وگو را آغاز کنید",
    note: "نسخهٔ نمایشی · برای بررسی شبکه بکشید",
    chapters: [
      {
        label: "01 / سامانه‌ها",
        title: "ساخته‌شده بر پایهٔ مسئله",
        body: "هر همکاری با تصمیمی آغاز می‌شود که محصول باید پشتیبان آن باشد، نه مدلی که شاید به کار بگیرد.",
      },
      {
        label: "02 / رابط‌ها",
        title: "از ابتدا روشن و قابل‌فهم",
        body: "میزان اطمینان، منشأ داده و وضعیت‌های خطا بخشی از طراحی محصول‌اند، نه افزوده‌هایی پس از ارزیابی.",
      },
      {
        label: "03 / رویکرد",
        title: "تیمی کوچک و باتجربه",
        body: "راهبرد، پژوهش، طراحی و مهندسی از نخستین طرح تا عرضهٔ سامانه، در کنار هم پیش می‌روند.",
      },
    ],
    specs: [
      { label: "قالب", value: "استودیوی نیورال" },
      { label: "حوزه", value: "هوش مصنوعی و فناوری" },
      { label: "صحنهٔ اصلی", value: "شبکهٔ گره‌ها / نور سرد استودیویی" },
      { label: "تعامل", value: "برای چرخاندن بکشید" },
    ],
  },
  price: 349,
  features: ["معرفی توانمندی‌ها", "شبکهٔ مطالعات موردی", "ثبت پروژه", "یادداشت‌های فنی", "میدان تعاملی گره‌ها"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: true,
  published: true,
  isDemo: true,
};

export const quantumSystems: Template = {
  id: "quantum-systems",
  title: "کوانتوم سیستمز",
  category: "ai",
  description:
    "حلقه‌هایی با مهندسی دقیق و هسته‌ای ماشین‌کاری‌شده برای محصولی فنی که باید دقیق به نظر برسد، نه خیال‌انگیز و آینده‌نگر.",
  previewImage: "/images/templates/quantum-systems.jpg",
  scene: "quantum-systems",
  theme: {
    accent: "#c3d3dc",
    accentSoft: "#6d8796",
    background: "#080a0c",
    foreground: "#f0f4f6",
    muted: "#98a5ad",
    atmosphere: "#111a20",
  },
  content: {
    nav: ["سکو", "پژوهش", "شرکت"],
    eyebrow: "کوانتوم سیستمز / پردازش دقیق",
    headline: "اندازه‌گیری‌شده",
    headlineAccent: "تا مرز میکرون",
    intro:
      "روایتی فنی از محصول برای تیم‌هایی که در مرزهای توان پردازشی کار می‌کنند؛ زبانی دقیق، جلوه‌هایی مهندسی‌شده و به‌دور از افسانه‌پردازی.",
    primaryCta: "کاوش در سکو",
    secondaryCta: "مطالعهٔ پژوهش‌ها",
    note: "نسخهٔ نمایشی · برای بررسی مجموعه بکشید",
    chapters: [
      {
        label: "01 / سکو",
        title: "سامانه‌ای شفاف، نه جعبه‌ای سیاه",
        body: "سکو به‌صورت مجموعه‌ای از بخش‌های قابل‌مشاهده معرفی می‌شود: کنترل، کالیبراسیون و خوانش.",
      },
      {
        label: "02 / روش کار",
        title: "دقت، اصل ماجراست",
        body: "نمودارهای فنی، یادداشت‌های تلرانس و توضیحی روشن دربارهٔ توانایی‌ها و محدودیت‌های سامانه.",
      },
      {
        label: "03 / تیم",
        title: "در کنار مهندسان",
        body: "راهی مستقیم برای ارتباط با سازندگان سکو، همراه با پژوهش‌های منتشرشده و شرح فنیِ در دسترس.",
      },
    ],
    specs: [
      { label: "قالب", value: "کوانتوم سیستمز" },
      { label: "حوزه", value: "هوش مصنوعی و فناوری" },
      { label: "صحنهٔ اصلی", value: "حلقه‌های ماشین‌کاری‌شده / نور سرد و دقیق" },
      { label: "تعامل", value: "برای چرخاندن بکشید" },
    ],
  },
  price: 379,
  features: ["معرفی سکو", "نمایهٔ پژوهش‌ها", "نمودارهای فنی", "صفحهٔ تیم", "سامانهٔ دوربین دقیق"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: false,
  published: true,
  isDemo: true,
};

export const aiProductLaunch: Template = {
  id: "ai-product-launch",
  title: "لانچ محصول هوش مصنوعی",
  category: "ai",
  description:
    "صفحه‌ای سینمایی برای عرضه، با منشوری شیشه‌ای برای پردازش، یک نورافکن و روایتی سه‌پرده‌ای از محصول.",
  previewImage: "/images/templates/ai-product-launch.jpg",
  scene: "ai-product-launch",
  theme: {
    accent: "#e8b36e",
    accentSoft: "#9b6d34",
    background: "#09090b",
    foreground: "#f7f0e6",
    muted: "#a89d8e",
    atmosphere: "#21160e",
  },
  content: {
    nav: ["محصول", "مشخصات", "عرضه"],
    eyebrow: "عرضه / لایه‌ای تازه برای پردازش",
    headline: "جثه‌ای کوچک",
    headlineAccent: "دستگاهی توانمند",
    intro:
      "صفحهٔ عرضهٔ دستگاهی فشرده برای هوش مصنوعی؛ یک تصویر شاخص، یک وعدهٔ روشن و برگهٔ مشخصاتی بی‌ابهام.",
    primaryCta: "آشنایی با محصول",
    secondaryCta: "مشاهدهٔ مشخصات",
    note: "نسخهٔ نمایشی · برای بررسی دستگاه بکشید",
    chapters: [
      {
        label: "01 / دستگاه",
        title: "برای آن‌که نزدیک شما باشد",
        body: "محفظه‌ای فشرده از شیشه و فلز، مناسب میز کار، استودیو یا رک کم‌صدای اتاق پشتی.",
      },
      {
        label: "02 / سامانه",
        title: "روایتی روشن از عملکرد",
        body: "صفحهٔ عرضه ابتدا از بار کاری، رابط و شیوهٔ استقرار می‌گوید، نه دیواری از اعداد بی‌توضیح.",
      },
      {
        label: "03 / عرضه",
        title: "یک صفحه، سه بخش",
        body: "تصویر شاخص، شواهد و مشخصات؛ هر بخش طوری طراحی شده که پیش از طرح پرسش بعدی به آن پاسخ دهد.",
      },
    ],
    specs: [
      { label: "قالب", value: "پریزم کامپیوت" },
      { label: "حوزه", value: "هوش مصنوعی و فناوری" },
      { label: "صحنهٔ اصلی", value: "منشور شیشه‌ای پردازش / نورپردازی سینمایی" },
      { label: "تعامل", value: "برای چرخاندن بکشید" },
    ],
  },
  price: 329,
  features: ["تصویر شاخص محصول", "برگهٔ مشخصات", "روایت عرضه", "فرایند رزرو", "نورپردازی سینمایی"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "صحنه‌پردازی رویه‌ای"],
  featured: true,
  published: true,
  isDemo: true,
};
