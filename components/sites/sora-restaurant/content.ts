/**
 * Sora Restaurant - sample brand content.
 *
 * The venue, menu, prices and address are fictional. They exist to demonstrate
 * this template and must be replaced with owner-approved details before the
 * site is used commercially.
 */

export const soraNav = [
  { label: "منو", href: "#menu" },
  { label: "خانه", href: "#house" },
  { label: "ساکه", href: "#sake" },
  { label: "بازدید", href: "#visit" },
] as const;

export const heroMeta = [
  { label: "صندلی", value: "بیست" },
  { label: "سرویس", value: "ناهار + شام" },
  { label: "آشپزخانه", value: "فصلی" },
];

export const hero = {
  eyebrow: "سورا / غذاخوری ژاپنیِ مدرن",
  headline: "میزی",
  headlineAccent: "آرام‌تر",
  japanese: "静かな食卓",
  intro:
    "یک اتاق غذاخوری کوچک در کوچۀ گاردن: چوبِ روشن، نورِ کاغذی و منویی کوتاه و فصلی. ناهار سریع و آرام است؛ شام بی‌شتاب.",
  note: "مفهوم وب‌سایت نمونه · رستوران، منو و تصویر خیالی",
  status: "ورودِ آزاد به کانتر · میز با درخواست",
  caption: ["کاسهٔ سفالی، لعابِ مریم‌گلی", "ظروفِ سورا · ساخته‌شده در استوک"],
  footNote: "بشقاب‌های فصلی · یک دیگِ برنج · ساکه به‌ازای لیوان",
  closing: "چیزی بلند نیست. چیزی شتاب‌زده نیست. فقط میز.",
};

export type Course = {
  numeral: string;
  name: string;
  description: string;
  note: string;
};

export const counterMenu = {
  id: "counter",
  label: "کانتر",
  note: "شش بشقاب · ۶۲ پوند",
  intro:
    "یک توالیِ کوتاه که در کانتر سرو می‌شود، روبه‌روی شما پخته می‌شود. آشپزخانه ترتیب را انتخاب می‌کند؛ منو بازار را دنبال می‌کند.",
  price: "۶۲",
  pairing: "۳۴",
  courses: [
    {
      numeral: "一",
      name: "چاوان‌موشی، شیسو",
      description: "خامهٔ تخم‌مرغِ ابریشمی، داشیِ گرم، یک برگِ شیسو.",
      note: "نخست",
    },
    {
      numeral: "二",
      name: "هاماچی، یوزو، نمکِ دریا",
      description: "سرد، تمیز و روشن. سه برش، نه بیشتر.",
      note: "خام",
    },
    {
      numeral: "三",
      name: "بادمجان، کنجد، زنجبیل",
      description: "تا نرمی کبابی‌شده، در پاس سس‌خورده.",
      note: "آتش",
    },
    {
      numeral: "四",
      name: "کادِ سیاه، میسو",
      description: "سه روز خوابانده‌شده، به‌آرامی کبابی‌شده، تمام‌شده با لیمو.",
      note: "گریل",
    },
    {
      numeral: "五",
      name: "برنجِ دیگِ سفالی، ترشی",
      description: "پایهٔ برشته، تقسیم‌شده روی میز. سوپِ میسو در کنار.",
      note: "برنج",
    },
    {
      numeral: "六",
      name: "هوجیچا، گلابی",
      description: "چایِ بوداده، میوهٔ پخته، کمی خامهٔ سرد.",
      note: "شیرین",
    },
  ] as Course[],
};

export type TableGroup = {
  id: string;
  title: string;
  note: string;
  items: { name: string; description: string; price: string; vegetarian?: boolean }[];
};

export const tableMenu = {
  id: "table",
  label: "میز",
  note: "بشقاب‌های کوچک · تقسیم‌شده",
  intro:
    "برای هر نفر دو یا سه بشقاب سفارش دهید، به‌همراه برنج. غذاها به‌محض آماده‌شدن می‌رسند؛ میز به‌آرامی پر می‌شود.",
  groups: [
    {
      id: "small",
      title: "کوچک",
      note: "برای آغاز",
      items: [
        {
          name: "چاوان‌موشی، شیسو",
          description: "خامهٔ ابریشمی، داشیِ گرم، شیسو.",
          price: "۹",
        },
        {
          name: "هاماچی، یوزو، نمکِ دریا",
          description: "سرد، تمیز، روشن.",
          price: "۱۲",
        },
        {
          name: "فلفلِ پادْرون، نمکِ یوزو",
          description: "حباب‌زده، نمک‌زده، تند.",
          price: "۶",
          vegetarian: true,
        },
      ],
    },
    {
      id: "hot",
      title: "گرم",
      note: "از گریل",
      items: [
        {
          name: "کادِ سیاه، میسو",
          description: "خواباندهٔ سه‌روزه، به‌آرامی کبابی‌شده.",
          price: "۱۸",
        },
        {
          name: "بادمجان، کنجد، زنجبیل",
          description: "نرم، کبابی، تُندیِ مغزدار.",
          price: "۱۱",
          vegetarian: true,
        },
        {
          name: "مرغ، سانشو",
          description: "کبابی‌شده روی ذغالِ بینچوتان، فلفل روی میز.",
          price: "۱۴",
        },
      ],
    },
    {
      id: "rice",
      title: "برنج",
      note: "برای میز",
      items: [
        {
          name: "برنجِ دیگِ سفالی، ترشی",
          description: "پایهٔ برشته، تقسیم‌شده. سوپِ میسو در کنار.",
          price: "۷",
          vegetarian: true,
        },
        {
          name: "برنجِ قارچ، شیسو",
          description: "قارچ‌های پاییزی، کره، شیسو.",
          price: "۹",
          vegetarian: true,
        },
      ],
    },
    {
      id: "sweet",
      title: "شیرین",
      note: "برای پایان",
      items: [
        {
          name: "هوجیچا، گلابی",
          description: "چایِ بوداده، میوهٔ پخته.",
          price: "۷",
          vegetarian: true,
        },
        {
          name: "کاراملِ میسو، کنجد",
          description: "نمک، دود، کمی تُردی.",
          price: "۶",
          vegetarian: true,
        },
      ],
    },
  ] as TableGroup[],
};

export const house = {
  label: "۰۳ / خانه",
  title: "چوبِ روشن، نورِ نرم",
  intro:
    "این اتاق پیش از رستوران شدن، کارگاهِ نجاری بود. نور را نگه داشتیم، سقف را پایین آوردیم و کانتر را از یک تکه چوبِ زبان‌گنجشکِ بلند ساختیم.",
  paragraphs: [
    "بیست صندلی: ده تا در کانتر، ده تا روی میزها، و یک حیاطِ کوچک برای تابستان. پرده‌های کاغذی هر چند سال عوض می‌شوند؛ چوب رها می‌شود تا تیره شود.",
    "موسیقی نیست. اتاق به‌طراحی ساکت است، تا آشپزخانه بتواند حرف بزند و میز صدای خودش را بشنود. ناهار سریع است؛ شام نه.",
  ],
  facts: [
    { label: "گشایش", value: "۲۰۱۹" },
    { label: "صندلی", value: "۲۰" },
    { label: "در کانتر", value: "۱۰" },
    { label: "حیاط", value: "۴" },
  ],
  materials: [
    { label: "زبان‌گنجشک", note: "کانتر، میزها، پله" },
    { label: "واشی", note: "پرده‌ها و سایه‌بانِ چراغ" },
    { label: "سفال", note: "کاسه‌های ساخته‌شده در استوک" },
  ],
  plan: {
    note: "همکف · کوچهٔ گاردن ۳",
    labels: {
      counter: "کانتر · ۱۰",
      kitchen: "آشپزخانه",
      tables: "میزها · ۱۰",
      garden: "حیاط · ۴",
      entrance: "ورودی",
    },
  },
};

export const sake = {
  label: "۰۴ / لیوان",
  title: "به‌ازای لیوان، هرگز اصرارآمیز",
  intro:
    "فهرستی کوتاه، سرد نگه‌داشته‌شده و سخاوتمندانه ریخته‌شده. پیش از تصمیم، یک جرعه بخواهید؛ آشپزخانه لیوانی هم‌خوان با منو پیشنهاد می‌کند.",
  bottles: [
    {
      name: "نامورا جونز‌مای",
      style: "Junmai · Niigata",
      note: "برنج، آبِ تمیز، کمی گرما. لیوانِ خانه.",
      price: "۸",
    },
    {
      name: "کازه گین‌جو",
      style: "Ginjo · Yamagata",
      note: "معطر، نرم، گلابی و گلِ سفید. مناسب با کاد.",
      price: "۱۱",
    },
    {
      name: "یاما نیگوری",
      style: "Nigori · Hiroshima",
      note: "تیره، شیرین، الکلِ کم. با کاراملِ میسو.",
      price: "۹",
    },
  ],
  note: "فهرست نمونه. بطری‌ها، برندها و قیمت‌ها نمایشی‌اند.",
};

export type PartySize = "1" | "2" | "3" | "4" | "5" | "6" | "private";

export const booking = {
  label: "۰۵ / بازدید",
  title: "یک شبِ آسان",
  intro:
    "صندلی‌های کانتر برای ورودِ آزاد نگه داشته می‌شوند. میز را می‌توانید اینجا درخواست کنید؛ اتاق در یک روز کاری با ایمیل پاسخ می‌دهد. ناهار رزرو نمی‌پذیرد.",
  sitting: "۱۸:۰۰ – ۲۲:۰۰",
  lastOrders: "۲۱:۳۰",
  partySizes: [
    { value: "1" as PartySize, label: "یک مهمان" },
    { value: "2" as PartySize, label: "دو مهمان" },
    { value: "3" as PartySize, label: "سه مهمان" },
    { value: "4" as PartySize, label: "چهار مهمان" },
    { value: "5" as PartySize, label: "پنج مهمان" },
    { value: "6" as PartySize, label: "شش مهمان" },
    { value: "private" as PartySize, label: "حیاط · ۸" },
  ],
  services: [
    { value: "dinner", label: "شام" },
    { value: "lunch", label: "ناهار (فقط ورودِ آزاد)" },
  ],
  seating: [
    { value: "table", label: "یک میز" },
    { value: "counter", label: "کانتر" },
    { value: "courtyard", label: "حیاط" },
    { value: "either", label: "هر دو مناسب است" },
  ],
  note: "فرم رزرو نمونه. هیچ میزی رزرو نمی‌شود، بیعانه‌ای گرفته نمی‌شود و ایمیلی فرستاده نمی‌شود.",
  confirmation:
    "درخواست شما برای این نمایش ثبت شد. هیچ میزی رزرو نمی‌شود، بیعانه‌ای گرفته نمی‌شود و ایمیلی فرستاده نمی‌شود.",
};

export const visit = {
  address: ["سورا", "کوچهٔ گاردن ۳", "لندن E2 7JY"],
  transport:
    "متروی هوایی تا هاکستون، سپس چهار دقیقه پیاده. در، همان درِ چوبِ روشن کنار گل‌فروشی است؛ تابلویی نیست، تنها نورِن.",
  hours: [
    { day: "سه‌شنبه – یکشنبه", time: "۱۲:۰۰ – ۱۴:۳۰" },
    { day: "سه‌شنبه – یکشنبه", time: "۱۸:۰۰ – ۲۲:۰۰" },
    { day: "دوشنبه", time: "بسته" },
  ],
  email: "hello@sora-restaurant.demo",
  phone: "+44 20 7946 0000",
  note: "مکان خیالی. نشانی، شمارهٔ تلفن و ساعات باز بودن نمایشی‌اند.",
  lunchNote: "ناهار فقط ورودِ آزاد است. کانتر سریع می‌چرخد؛ میزها معمولاً تا ۱۳:۳۰ آزاد می‌شوند.",
};