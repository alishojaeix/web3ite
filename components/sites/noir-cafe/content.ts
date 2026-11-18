export type CafeMenuItem = {
  name: string;
  description: string;
};

export type CafeImage = {
  src: string;
  alt: string;
  caption: string;
  position?: string;
};

/**
 * Sample concept copy only. Replace the illustrative menu and story with
 * owner-approved content before publishing this as a real café website.
 */
export const noirCafeContent = {
  brand: "نوآر کافه",
  shortBrand: "نوآر",
  sampleNotice: "نمونهٔ مفهومی وب‌سایت · متن و منوی نمایشی",
  navigation: [
    { label: "داستان ما", href: "#story" },
    { label: "قهوه", href: "#menu" },
    { label: "فضای کافه", href: "#gallery" },
    { label: "بازدید", href: "#visit" },
  ],
  hero: {
    kicker: "یک اتاق قهوه، پس از تاریکی",
    title: "قهوه،\nدر تاریکی",
    introduction:
      "اتاقی آرام‌تر برای قهوه. اسپرسویی بی‌شتاب، همراهیِ فکرشده و کمی فرصت بیشتر پشت میز.",
    image: "/images/sites/noir-cafe/hero.webp",
    imageAlt:
      "اتاقی تاریک و گرم با صندلی‌های چرمی، آویزهای برنجی و نشیمنی صمیمی",
  },
  story: {
    heading: "برای آیینِ قهوه\nجا باز کنید",
    paragraphs: [
      "نویر را اتاقی محله‌ای برای اسپرسو تصور کنید که با چوب گرم، نور کم و لذتِ کمی بیشتر ماندن شکل گرفته است.",
      "جزئیات عمداً بی‌شتاب‌اند: قهوه‌ای با دقت آماده‌شده، فضایی اندیشیده و جایی برای گفت‌وگویی که آهنگ خودش را پیدا کند.",
    ],
    note: "داستان برند در اینجا متن نمایشیِ همین مفهوم وب‌سایت است.",
  },
  menu: {
    heading: "منویی کوتاه.\nآیینی کوچک",
    introduction:
      "گزیده‌های نمایشی قهوه برای این مفهوم. جزئیات منو، موجودی و قیمت‌ها هنوز ارائه نشده‌اند.",
    groups: [
      {
        title: "بار اسپرسو",
        items: [
          {
            name: "اسپرسوی خانه",
            description: "ترکیبِ متعادل نمونه، کوتاه و بی‌شتاب سرو می‌شود.",
          },
          {
            name: "کاپوچینو",
            description: "اسپرسو زیر شیرِ نرم و مخملی.",
          },
          {
            name: "کافه کِرِما",
            description: "اسپرسویی کشیده‌تر با پایانی گرد و نرم.",
          },
        ] satisfies CafeMenuItem[],
      },
      {
        title: "قهوهٔ دم‌آهسته",
        items: [
          {
            name: "رُستر مهمان",
            description: "یک دَم‌آوری چرخشیِ نمونه از رُستری مهمان.",
          },
          {
            name: "بی‌کافئین، با دقت",
            description: "گزینه‌ای ملایم و نمونه، با همان توجه سرو می‌شود.",
          },
          {
            name: "چیزی در کنارش",
            description: "یک همراهی فصلیِ کوچک که کافه آن را برمی‌گزیند.",
          },
        ] satisfies CafeMenuItem[],
      },
    ],
  },
  collections: {
    heading: "آیین را به خانه ببرید",
    introduction:
      "چیدمان نمایشیِ کلکسیون قهوه. نام محصولات، منبع، موجودی و قیمت‌ها به جزئیاتِ تأییدشدهٔ مالک نیاز دارد.",
    items: [
      {
        number: "01",
        name: "ترکیب خانه",
        description: "پروفایل نمونهٔ اسپرسو برای بار خیالیِ شبانه.",
        detail: "قهوه · مفهوم نمایشی",
      },
      {
        number: "02",
        name: "رُست مهمان",
        description: "گزیدهٔ چرخشیِ نمونهٔ قهوه برای صبح‌های آرام‌تر.",
        detail: "دستهٔ کوچک · مفهوم نمایشی",
      },
      {
        number: "03",
        name: "ست دَم‌آوری",
        description: "کلکسیونی نمونه از ابزارهای اندیشیده برای دم‌آوری در خانه.",
        detail: "لوازم قهوه · مفهوم نمایشی",
      },
    ],
  },
  gallery: {
    heading: "اتاقی برای جا افتادن",
    introduction:
      "جزئیاتی از مراجعهٔ مرجعِ همین اتاق، بریده‌شده تا نور، نشیمن و متریال آن دیده شود.",
    images: [
      {
        src: "/images/sites/noir-cafe/lounge.webp",
        alt: "نشیمن چرمی در استخرهای گرم نور",
        caption: "گوشه‌ای آرام‌تر",
        position: "center 62%",
      },
      {
        src: "/images/sites/noir-cafe/warm-light.webp",
        alt: "روشنایی گرم آویز بالای اتاقی با چوب تیره",
        caption: "نور شبانه",
        position: "center 38%",
      },
      {
        src: "/images/sites/noir-cafe/leather-details.webp",
        alt: "صندلی‌های چرمی و میز کوتاه در اتاقی صمیمی",
        caption: "کمی بیشتر بمانید",
        position: "center 65%",
      },
    ] satisfies CafeImage[],
  },
  visit: {
    heading: "همان‌طور که هستید بیایید.\nمدتی بمانید",
    introduction:
      "این اتاق آماده است تا جایی برای حس کردن باشد. جزئیات واقعیِ بازدید وقتی کافه آن‌ها را ارائه کند افزوده می‌شود.",
    address: null as string | null,
    hours: null as string | null,
    email: null as string | null,
    telephone: null as string | null,
    reservationUrl: null as string | null,
    mapUrl: null as string | null,
  },
  footerNote:
    "نویر یک مفهوم وب‌سایت خیالی است. متن منو و برند نمایشی‌اند و هیچ مکان فعال یا محصولی را بازنمایی نمی‌کنند.",
};