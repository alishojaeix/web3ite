import type {
  CollectionItem,
  FeatureItem,
  MenuGroup,
  SiteConfig,
  SiteShowcase,
  SpecRow,
  SpecStat,
  TimelineItem,
} from "./types";

const labels = (
  story: string,
  showcase: string,
  materials: string,
  specs: string,
  contact: string
): SiteConfig["labels"] => ({ story, showcase, materials, specs, contact });

const menu = (groups: MenuGroup[]): SiteShowcase => ({ kind: "menu", groups });
const features = (items: FeatureItem[]): SiteShowcase => ({ kind: "features", items });
const timeline = (items: TimelineItem[]): SiteShowcase => ({ kind: "timeline", items });
const collection = (items: CollectionItem[]): SiteShowcase => ({ kind: "collection", items });
const specShowcase = (stats: SpecStat[], rows: SpecRow[]): SiteShowcase => ({
  kind: "specs",
  stats,
  rows,
});

function contact(
  email: string,
  address: string,
  hours: string,
  note: string,
  ctaLabel: string
): SiteConfig["contact"] {
  return { email, phone: "با هماهنگی", address, hours, note, ctaLabel };
}

export const siteConfigs: Record<string, SiteConfig> = {
  "noir-cafe": {
    motif: "cup",
    layout: "noir",
    hero: "split",
    heroSide: "right",
    nav: [
      { label: "منو", href: "#showcase" },
      { label: "فضا", href: "#story" },
      { label: "مراجعه", href: "#contact" },
    ],
    navCta: { label: "رزرو صندلی کانتر", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["story", "showcase", "materials", "contact"],
    labels: labels("01 / فضا", "02 / منو", "03 / متریال‌ها", "04 / جزئیات", "05 / مراجعه"),
    storyTitle: "قهوه، پس از تاریکی",
    showcaseTitle: "منویی کوتاه، تازه‌آماده‌شده برای شما",
    showcaseIntro:
      "اسپرسو، قهوه دمی و فهرستی کوچک برای کانتر. همه‌چیز همان‌جا آماده می‌شود تا کنار میز نوش جان کنید.",
    showcase: menu([
      {
        title: "اسپرسو",
        items: [
          { name: "ترکیب اختصاصی نوآر", description: "کاکائو، نیشکر و پس‌مزه‌ای ماندگار.", price: "3.2" },
          { name: "تک‌خاستگاه", description: "هر هفته تغییر می‌کند؛ از باریستا بپرسید.", price: "4.0" },
        ],
      },
      {
        title: "قهوه دمی",
        items: [
          { name: "کنیا AA", description: "انگورفرنگی سیاه و شکر نیشکر.", price: "4.5" },
          { name: "کلمبیا هویلا", description: "پرتقال، کاکائو و ترشی ملایم.", price: "4.5" },
        ],
      },
      {
        title: "کانتر",
        items: [
          { name: "کورتادو", description: "به نسبت برابر، بی‌تکلف.", price: "3.6" },
          { name: "مجموعه قهوه دمی", description: "سه فنجان، یک گفت‌وگو.", price: "9.0" },
        ],
      },
    ]),
    materials: [
      { label: "چرم", note: "صندلی‌های خوش‌نشسته، نور کم" },
      { label: "برنج", note: "چراغ‌های آویز و نوارکاری کانتر" },
      { label: "کاغذ", note: "منویی که هر روز از نو چیده می‌شود" },
    ],
    heroMeta: ["ساعات پایانی شب", "چاپخانه‌ای قدیمی", "پذیرش بدون رزرو"],
    specsTitle: "نگاهی به فضا",
    specsExtra: [
      { label: "ظرفیت", value: "18" },
      { label: "برشته‌کاری", value: "هفتگی" },
      { label: "سرویس", value: "کانتر و میز" },
    ],
    cta: {
      title: "کمی بیشتر بمانید",
      body: "فضا تا دیروقت باز است. کانتر را رزرو کنید یا سرزده بیایید.",
    },
    contact: contact(
      "hello@noir-cafe.demo",
      "کوچهٔ فانوس ۱۴، لندن",
      "سه‌شنبه تا یکشنبه · 07:00 تا دیروقت",
      "این مکان نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "رزرو صندلی کانتر"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ هیچ رزروی واقعی ثبت نمی‌شود.",
  },

  "atelier-coffee": {
    motif: "pour",
    layout: "atelier",
    hero: "center",
    heroSide: "left",
    nav: [
      { label: "قهوه", href: "#showcase" },
      { label: "آتلیه", href: "#story" },
      { label: "یادداشت‌ها", href: "#materials" },
    ],
    navCta: { label: "دیدار از آتلیه", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / بار قهوه", "02 / فهرست", "03 / استودیو", "04 / جزئیات", "05 / مراجعه"),
    storyTitle: "قهوه‌ای با آرامشی متفاوت",
    showcaseTitle: "هر بار، یک فنجان",
    showcaseIntro:
      "دو نوع اسپرسو، سه قهوه دمی و کانتری که دور یک ایستگاه دم‌آوری دستی شکل گرفته است.",
    showcase: menu([
      {
        title: "قهوه دمی",
        items: [
          { name: "کنیا AA", description: "انگورفرنگی سیاه، نیشکر و طعمی شفاف.", price: "4.5" },
          { name: "کلمبیا هویلا", description: "پرتقال، کاکائو و طعمی متعادل.", price: "4.5" },
          { name: "اتیوپی گوجی", description: "یاس، برگاموت و عطری شبیه چای.", price: "5.0" },
        ],
      },
      {
        title: "اسپرسو",
        items: [
          { name: "ترکیب اختصاصی", description: "شکلات، فندق و پس‌مزه‌ای کوتاه.", price: "3.2" },
          { name: "تک‌خاستگاه", description: "دربارهٔ سری امروز بپرسید.", price: "4.0" },
        ],
      },
      {
        title: "کانتر",
        items: [
          { name: "مجموعه قهوه دمی", description: "سه فنجان، با اندازه‌گیری و دم‌آوری دقیق.", price: "9.0" },
          { name: "فلت‌وایت با شیر جو دوسر", description: "بافتی ابریشمی، بدون شکر.", price: "3.8" },
        ],
      },
    ]),
    materials: [
      { label: "دیوارهای کرم‌رنگ", note: "نور روز در تمام صبح" },
      { label: "بلوط روشن", note: "یک کانتر، یک نیمکت" },
      { label: "یادداشت‌های دم‌آوری", note: "آرشیوی زنده و در حال کار" },
    ],
    heroMeta: ["استودیویی غرق نور روز", "بار قهوه با ریتمی آرام", "برشته‌کاری‌های متنوع"],
    specsTitle: "آتلیه",
    specsExtra: [
      { label: "صندلی‌ها", value: "12" },
      { label: "برنامهٔ برشته‌کاری", value: "هفتگی" },
      { label: "سرویس", value: "کانتر" },
    ],
    cta: {
      title: "با یک فنجان بنشینید",
      body: "آتلیه فضایی کوچک است. برای چشیدن قهوه وقت بگیرید یا صبح سر بزنید.",
    },
    contact: contact(
      "hello@atelier-coffee.demo",
      "خیابان فاندری ۱۴، لندن",
      "سه‌شنبه تا یکشنبه · 08:00–16:00",
      "این مکان نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "رزرو جلسهٔ چشیدن قهوه"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ هیچ رزروی واقعی ثبت نمی‌شود.",
  },

  "obsidian-roastery": {
    motif: "canister",
    layout: "obsidian",
    hero: "split",
    heroSide: "right",
    nav: [
      { label: "قهوه‌های برشته‌شده", href: "#showcase" },
      { label: "کارگاه برشته‌کاری", href: "#story" },
      { label: "اشتراک", href: "#contact" },
    ],
    navCta: { label: "عضویت در فهرست برشته‌کاری", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#story" },
    order: ["showcase", "story", "specs", "materials", "contact"],
    labels: labels("01 / قهوه‌ها", "02 / کارگاه", "03 / محصول", "04 / جزئیات", "05 / اشتراک"),
    storyTitle: "برشته‌شده در تاریکی",
    showcaseTitle: "سه قهوه، یک روز برشته‌کاری",
    showcaseIntro:
      "برشته‌کاری در بچ‌های کوچک و در یک روز مشخص انجام می‌شود. زمان استراحت روی کف هر قوطی درج شده است.",
    showcase: menu([
      {
        title: "شمارهٔ 01",
        note: "کنیا · شسته‌شده",
        items: [
          { name: "انگورفرنگی سیاه", description: "شکر نیشکر و پس‌مزه‌ای شفاف.", price: "18" },
        ],
      },
      {
        title: "شمارهٔ 02",
        note: "کلمبیا · شسته‌شده",
        items: [
          { name: "کاکائو", description: "پوست پرتقال و ترشی ملایم.", price: "17" },
        ],
      },
      {
        title: "شمارهٔ 03",
        note: "اتیوپی · فرآوری طبیعی",
        items: [
          { name: "یاس", description: "برگاموت و میوه‌های هسته‌دار.", price: "19" },
        ],
      },
      {
        title: "اشتراک",
        note: "هفتگی یا دوهفته‌یک‌بار",
        items: [
          { name: "فهرست برشته‌کاری", description: "یک بستهٔ 250 گرمی، برشته‌شده پس از سفارش.", price: "از 15" },
        ],
      },
    ]),
    materials: [
      { label: "فولاد مات", note: "قوطی قهوه" },
      { label: "مهر برنجی", note: "یک خط فرورفته" },
      { label: "کاغذ چاپی", note: "تاریخ برشته‌کاری روی کف قوطی" },
    ],
    heroMeta: ["بچ کوچک", "یک روز برشته‌کاری", "قابل رهگیری"],
    specsTitle: "برشته‌کاری",
    specsExtra: [
      { label: "روز برشته‌کاری", value: "پنج‌شنبه" },
      { label: "بچ", value: "12 kg" },
      { label: "استراحت", value: "7–14 روز" },
    ],
    cta: {
      title: "کانتر را همیشه پُر نگه دارید",
      body: "اشتراکی هفتگی یا دوهفته‌یک‌بار، برشته‌شده پس از سفارش.",
    },
    contact: contact(
      "hello@obsidian-roastery.demo",
      "رُستری، کیلن‌یارد ۸",
      "پنج‌شنبه تا شنبه · 09:00–15:00",
      "این مکان نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "عضویت در فهرست برشته‌کاری"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ هیچ اشتراک واقعی ثبت نمی‌شود.",
  },

  "maison-dining": {
    motif: "cloche",
    layout: "maison",
    hero: "center",
    heroSide: "left",
    nav: [
      { label: "منو", href: "#showcase" },
      { label: "فضا", href: "#story" },
      { label: "رزرو", href: "#contact" },
    ],
    navCta: { label: "رزرو میز", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / فضا", "02 / منو", "03 / میز", "04 / جزئیات", "05 / رزرو"),
    storyTitle: "میزی آراسته برای شب",
    showcaseTitle: "یک منو که هر صبح نوشته می‌شود",
    showcaseIntro:
      "دوازده صندلی، یک نوبت پذیرایی و منویی هماهنگ با محصولات روز بازار.",
    showcase: menu([
      {
        title: "پیش‌غذا",
        items: [
          { name: "صدف، کلم قمری، شاه‌پسند", description: "خنک، سرزنده و با طعمی معدنی." },
          { name: "قزل‌آلای نمک‌سود، دوغ، شوید", description: "نمک‌سود ملایم با پایانی تند و تازه." },
        ],
      },
      {
        title: "دور دوم",
        items: [
          { name: "توربوت، سس کرهٔ سفید، سبزی‌های دریایی", description: "صیدشده با قلاب و سرو‌شده با استخوان." },
          { name: "چغندر اصیل، خامهٔ دودی", description: "پخته در نمک و آراسته‌شده هنگام سرو." },
        ],
      },
      {
        title: "غذای اصلی",
        items: [
          { name: "اردک رسیده، آلبالو، سیر سیاه", description: "خشک‌رسانی‌شده و برش‌خورده کنار میز." },
          { name: "کرفس ریشه‌ای، فندق، ترافل", description: "گزینهٔ گیاهی، با همان دقت آماده‌شده است." },
        ],
      },
      {
        title: "پایان",
        items: [
          { name: "گندم سیاه، عسل، خامه", description: "برشته، خنک و ساده." },
          { name: "پنیر کومته، به، گردو", description: "از چرخ کوچک پنیرها." },
        ],
      },
    ]),
    materials: [
      { label: "کتان", note: "یک نوبت پذیرایی، با ریتمی آرام" },
      { label: "نقره", note: "درپوشی که کنار میز برداشته می‌شود" },
      { label: "نور شمع", note: "ملایم، گرم و یکنواخت" },
    ],
    heroMeta: ["دوازده صندلی", "یک نوبت پذیرایی", "کانتر آشپزخانه"],
    specsTitle: "شب‌نشینی",
    specsExtra: [
      { label: "صندلی‌ها", value: "12" },
      { label: "سرویس", value: "یک نوبت پذیرایی" },
      { label: "منو", value: "فصلی" },
    ],
    cta: {
      title: "فضا را رزرو کنید",
      body: "هر شب یک نوبت پذیرایی داریم. هنگام رزرو، نیازهای غذایی شما ثبت می‌شود.",
    },
    contact: contact(
      "reservations@maison-dining.demo",
      "خیابان اورفِور ۶",
      "چهارشنبه تا یکشنبه · 18:30",
      "این مکان نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "درخواست رزرو میز"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ هیچ رزرو واقعی ثبت نمی‌شود.",
  },

  "ember-kitchen": {
    motif: "ember",
    layout: "ember",
    hero: "split",
    heroSide: "left",
    nav: [
      { label: "آتش", href: "#story" },
      { label: "منو", href: "#showcase" },
      { label: "رزرو", href: "#contact" },
    ],
    navCta: { label: "رزرو کانتر", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["showcase", "story", "materials", "specs", "contact"],
    labels: labels("01 / منو", "02 / اجاق", "03 / فضا", "04 / جزئیات", "05 / رزرو"),
    storyTitle: "پخته‌شده با آتش",
    showcaseTitle: "چهار پیش‌غذا، چهار بشقاب، یک پایان",
    showcaseIntro:
      "منو با آتش و محصولات بازار تغییر می‌کند. بیشتر صندلی‌ها رو به اجاق هستند.",
    showcase: menu([
      {
        title: "پیش‌غذاهای کوچک",
        items: [
          { name: "نان تخت اِمبر، کرهٔ دودی", description: "برشته‌شده کنار اجاق.", price: "6" },
          { name: "زیتون کبابی، پرتقال", description: "گرم، شور و سرزنده.", price: "5" },
        ],
      },
      {
        title: "روی آتش",
        items: [
          { name: "تره‌فرنگی کبابی، سس رومسکو", description: "نرم درون، زغالی در لبه‌ها.", price: "12" },
          { name: "ماهی مرکب تنوری، ندویا", description: "کمی روی زغال حرارت‌دیده.", price: "16" },
        ],
      },
      {
        title: "برای اشتراک",
        items: [
          { name: "دندهٔ رسیده، فلفل تخمیری", description: "مناسب دو نفر؛ بیست دقیقه استراحت داده می‌شود.", price: "48" },
          { name: "کلم هیسپی، کرهٔ قهوه‌ای", description: "محبوب همهٔ میزها.", price: "14" },
        ],
      },
      {
        title: "دسر",
        items: [
          { name: "تارت عسل برشته", description: "خامهٔ خنک، بی‌تکلف.", price: "9" },
        ],
      },
    ]),
    materials: [
      { label: "بلوط زغال‌شده", note: "اجاق" },
      { label: "آهن", note: "تابه‌ها، توری‌ها و صبر" },
      { label: "اخگر", note: "تنها روشنایی فضا" },
    ],
    heroMeta: ["آتش روباز", "صندلی‌های کانتر", "یک اجاق"],
    specsTitle: "فضا",
    specsExtra: [
      { label: "صندلی‌ها", value: "24" },
      { label: "اجاق", value: "هیزمی" },
      { label: "منو", value: "روزانه" },
    ],
    cta: {
      title: "کنار آتش بنشینید",
      body: "هر صبح صندلی‌های کانتر برای رزرو باز می‌شوند. میز اختصاصی با هماهنگی.",
    },
    contact: contact(
      "hello@ember-kitchen.demo",
      "22 خیابان کیلن، لندن",
      "سه‌شنبه تا شنبه · 17:30 تا دیروقت",
      "این مکان نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "رزرو کانتر"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ هیچ رزروی واقعی ثبت نمی‌شود.",
  },

  "sora-restaurant": {
    motif: "bowl",
    layout: "sora",
    hero: "center",
    heroSide: "right",
    nav: [
      { label: "منو", href: "#showcase" },
      { label: "خانه", href: "#story" },
      { label: "مراجعه", href: "#contact" },
    ],
    navCta: { label: "برنامه‌ریزی برای مراجعه", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / خانه", "02 / منو", "03 / فضا", "04 / جزئیات", "05 / مراجعه"),
    storyTitle: "میزی آرام‌تر",
    showcaseTitle: "فصلی، نه پرهیاهو",
    showcaseIntro:
      "منویی جمع‌وجور از بشقاب‌های کوچک و یک غذای برنجی برای پایان. ساکه به‌صورت لیوانی، بدون اصرار.",
    showcase: menu([
      {
        title: "بشقاب‌های کوچک",
        items: [
          { name: "چاوان‌موشی، شیسو", description: "ابریشمی، گرم و لطیف." },
          { name: "هاماچی، یوزو، نمک دریایی", description: "خنک، شفاف و سرزنده." },
        ],
      },
      {
        title: "غذای گرم",
        items: [
          { name: "ماهی کاد سیاه، میسو", description: "سه روز مزه‌دارشده و آرام کبابی." },
          { name: "بادمجان، کنجد، زنجبیل", description: "نرم، زغالی و آجیلی." },
        ],
      },
      {
        title: "برنج",
        items: [
          { name: "برنج در دیگ سفالی، ترشی", description: "ته‌دیگی برشته، برای اشتراک کنار میز." },
        ],
      },
      {
        title: "دسر",
        items: [
          { name: "هوجیچا، گلابی", description: "چای برشته و میوهٔ پخته‌شده در شربت." },
        ],
      },
    ]),
    materials: [
      { label: "چوب روشن", note: "کانتر کوتاه، فضایی آرام" },
      { label: "کاغذ", note: "پرده‌ها و منویی کوتاه" },
      { label: "نور باغ", note: "یک حیاط کوچک" },
    ],
    heroMeta: ["فصلی", "ساکه به‌صورت لیوانی", "کانتر و میز"],
    specsTitle: "خانه",
    specsExtra: [
      { label: "صندلی‌ها", value: "20" },
      { label: "منو", value: "فصلی" },
      { label: "سرویس", value: "ناهار و شام" },
    ],
    cta: {
      title: "شبی بی‌تکلف",
      body: "کانتر پذیرای مراجعهٔ بدون رزرو است؛ میزها نیاز به رزرو دارند.",
    },
    contact: contact(
      "hello@sora-restaurant.demo",
      "کوچهٔ گاردن ۳، لندن",
      "سه‌شنبه تا یکشنبه · 12:00–14:30، 18:00–22:00",
      "این مکان نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "درخواست رزرو میز"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ هیچ رزرو واقعی ثبت نمی‌شود.",
  },

  "neural-studio": {
    motif: "network",
    layout: "neural",
    hero: "split",
    heroSide: "left",
    nav: [
      { label: "سامانه‌ها", href: "#showcase" },
      { label: "نمونه‌کارها", href: "#story" },
      { label: "تماس", href: "#contact" },
    ],
    navCta: { label: "شروع یک پروژه", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / رویکرد", "02 / سامانه‌ها", "03 / نشانه‌ها", "04 / جزئیات", "05 / تماس"),
    storyTitle: "هوشمندی، در قالبی ملموس",
    showcaseTitle: "هوش مصنوعی کاربردی، با محوریت رابط کاربری",
    showcaseIntro:
      "مسائل مبهم داده را به محصولاتی تبدیل می‌کنیم که مردم بتوانند به آن‌ها اعتماد کنند.",
    showcase: features([
      {
        index: "01",
        title: "پژوهش",
        body: "پیش از انتخاب مدل، مسئله را صورت‌بندی می‌کنیم. تعریف نیازمندی‌ها بخشی از کار است.",
      },
      {
        index: "02",
        title: "محصول",
        body: "سامانه را بر پایهٔ تصمیمی طراحی می‌کنیم که فرد واقعاً باید بگیرد.",
      },
      {
        index: "03",
        title: "مهندسی",
        body: "رابط کاربری، چرخهٔ ارزیابی و ابزارهای پایش را یک‌جا ارائه می‌کنیم.",
      },
      {
        index: "04",
        title: "استقرار",
        body: "با اطمینان بهره‌برداری کنید: محدودیت‌های روشن، رفتار سنجیده و امکان مداخلهٔ انسانی.",
      },
    ]),
    materials: [
      { label: "میدان گره‌ها", note: "نمایان‌کردن سامانه" },
      { label: "سیگنال", note: "نور سرد، حروف دقیق" },
      { label: "شیشه", note: "رابط‌هایی که خودشان را توضیح می‌دهند" },
    ],
    heroMeta: ["هوش مصنوعی کاربردی", "استودیوی محصول", "تیم ارشد"],
    specsTitle: "استودیو",
    specsExtra: [
      { label: "حوزهٔ تمرکز", value: "هوش مصنوعی کاربردی" },
      { label: "تیم", value: "ارشد" },
      { label: "همکاری", value: "پروژه‌ای" },
    ],
    cta: {
      title: "مسئلهٔ دشوار را به ما بسپارید",
      body: "برای شروع، شرح فنی کوتاهی کافی است.",
    },
    contact: contact(
      "hello@neural-studio.demo",
      "استودیوی نیورال، سیگنال‌یارد ۴",
      "دوشنبه تا جمعه · 09:00–18:00",
      "این استودیو نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "آغاز گفت‌وگو"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ بدون پروژه یا ادعای واقعی.",
  },

  "quantum-systems": {
    motif: "rings",
    layout: "quantum",
    hero: "center",
    heroSide: "left",
    nav: [
      { label: "پلتفرم", href: "#showcase" },
      { label: "پژوهش", href: "#story" },
      { label: "شرکت", href: "#contact" },
    ],
    navCta: { label: "مطالعهٔ پژوهش‌ها", href: "#story" },
    heroCta: { primary: "#showcase", secondary: "#story" },
    order: ["showcase", "story", "specs", "materials", "contact"],
    labels: labels("01 / پلتفرم", "02 / روش", "03 / مجموعه", "04 / جزئیات", "05 / پژوهش"),
    storyTitle: "با دقت میکرونی",
    showcaseTitle: "یک سامانه، نه جعبه‌ای سیاه",
    showcaseIntro:
      "کنترل، کالیبراسیون و خوانش داده‌ها، به‌صورت اجزایی قابل مشاهده ارائه می‌شوند.",
    showcase: features([
      {
        index: "01",
        title: "لایهٔ کنترل",
        body: "یک کنسول برای کل مجموعه. پیش از هر اقدامی، وضعیت سامانه قابل مشاهده است.",
      },
      {
        index: "02",
        title: "کالیبراسیون",
        body: "مستندات تلورانس و اجراهای تکرارپذیر. روش کار همراه نتیجه منتشر می‌شود.",
      },
      {
        index: "03",
        title: "خوانش داده‌ها",
        body: "تله‌متری شفاف و بدون وضعیت پنهان. هرچه سامانه می‌داند، اپراتور نیز می‌داند.",
      },
      {
        index: "04",
        title: "پژوهش",
        body: "روش‌ها، محدودیت‌ها و پرسش‌های باز منتشر می‌شوند. دقت یک رویکرد عملی است، نه یک ادعا.",
      },
    ]),
    materials: [
      { label: "آلیاژ ماشین‌کاری‌شده", note: "مجموعه" },
      { label: "نور سرد", note: "دقت، نه نمایش" },
      { label: "شیشه", note: "خوانش داده و کالیبراسیون" },
    ],
    heroMeta: ["پردازش دقیق", "ماژولار", "مستندشده"],
    specsTitle: "پلتفرم",
    specsExtra: [
      { label: "معماری", value: "ماژولار" },
      { label: "استقرار", value: "محلی / ابری" },
      { label: "رابط", value: "API و کنسول" },
    ],
    cta: {
      title: "روش کار را بخوانید",
      body: "یادداشت‌های فنی، تلورانس‌ها و جزئیات استقرار.",
    },
    contact: contact(
      "hello@quantum-systems.demo",
      "کوانتوم سیستمز، مریکن ورکس ۱",
      "دوشنبه تا جمعه · 09:00–17:00",
      "این شرکت نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "درخواست شرح فنی"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ بدون محصول یا گواهی‌نامهٔ واقعی.",
  },

  "ai-product-launch": {
    motif: "prism",
    layout: "launch",
    hero: "full",
    heroSide: "right",
    nav: [
      { label: "محصول", href: "#showcase" },
      { label: "مشخصات", href: "#specs" },
      { label: "عرضه", href: "#contact" },
    ],
    navCta: { label: "رزرو سری نخست", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#specs" },
    order: ["showcase", "specs", "story", "materials", "contact"],
    labels: labels("01 / محصول", "02 / مشخصات", "03 / سامانه", "04 / متریال‌ها", "05 / رزرو"),
    storyTitle: "محصولی کوچک، دستگاهی توانمند",
    showcaseTitle: "لایه‌ای فشرده برای پردازش روی میز کار",
    showcaseIntro:
      "یک محصول شاخص، یک وعدهٔ روشن و برگهٔ مشخصاتی که چیزی را پنهان نمی‌کند.",
    showcase: specShowcase(
      [
        { label: "ابعاد", value: "فشرده", note: "مناسب میز یا رک کم‌صدا" },
        { label: "پردازش", value: "شتاب‌دهندهٔ هوش مصنوعی", note: "استنتاج محلی" },
        { label: "حافظه", value: "64 GB", note: "یکپارچه" },
        { label: "اتصال", value: "USB-C و Ethernet", note: "API باز" },
      ],
      [
        { label: "بدنه", value: "شیشه و فلز آنادایزشده" },
        { label: "توان", value: "180 W" },
        { label: "استقرار", value: "میز / رک" },
        { label: "عرضه", value: "سری نخست" },
      ]
    ),
    materials: [
      { label: "شیشه", note: "منشور پردازشی" },
      { label: "فلز آنادایزشده", note: "بدنه‌ای ساده و بی‌صدا" },
      { label: "نور استودیویی", note: "یک نور اصلی سینمایی" },
    ],
    heroMeta: ["هوش مصنوعی فشرده", "آمادهٔ استفاده روی میز", "سری نخست"],
    specsTitle: "مشخصات نمونه",
    specsExtra: [
      { label: "ضمانت", value: "2 سال" },
      { label: "پشتیبانی", value: "مستقیم" },
      { label: "ارسال", value: "سه‌ماههٔ سوم" },
    ],
    cta: {
      title: "سری نخست را رزرو کنید",
      body: "درخواست رزروی که مبلغ آن قابل استرداد است. در این نسخهٔ نمایشی پرداختی انجام نمی‌شود.",
    },
    contact: contact(
      "launch@ai-product-launch.demo",
      "لانچ، استودیو رو ۹",
      "دوشنبه تا جمعه · 09:00–18:00",
      "این محصول نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "رزرو سری نخست"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ هیچ سفارش یا پرداخت واقعی انجام نمی‌شود.",
  },

  vaultline: {
    motif: "vault",
    layout: "vaultline",
    hero: "split",
    heroSide: "right",
    nav: [
      { label: "زیرساخت", href: "#showcase" },
      { label: "اطمینان‌پذیری", href: "#story" },
      { label: "گزارش آسیب‌پذیری", href: "#contact" },
    ],
    navCta: { label: "ثبت گزارش امنیتی", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["story", "showcase", "specs", "materials", "contact"],
    labels: labels("01 / خزانه", "02 / کنترل‌ها", "03 / اطمینان‌پذیری", "04 / جزئیات", "05 / گزارش امنیتی"),
    storyTitle: "امنیتی که می‌توانید بررسی کنید",
    showcaseTitle: "کنترل‌ها، سابقهٔ ممیزی و راهی مستقیم برای تماس",
    showcaseIntro:
      "پلتفرمی امانی که روند کارش را آشکار می‌کند.",
    showcase: features([
      {
        index: "01",
        title: "امانت‌داری",
        body: "تفکیک کلیدها و سیاست‌گذاری؛ هر اقدام مسئول مشخصی دارد.",
      },
      {
        index: "02",
        title: "ممیزی",
        body: "تاریخچهٔ پیوستهٔ رویدادها، ثبت‌شده برای بررسی توسط ناظری بیرونی.",
      },
      {
        index: "03",
        title: "اطمینان‌پذیری",
        body: "کنترل‌هایی مستند با دامنه و شواهد روشن، نه نشانی تزئینی در صفحهٔ اصلی.",
      },
      {
        index: "04",
        title: "گزارش امنیتی",
        body: "کانالی مستقیم برای گزارش مسائل امنیتی، با دامنه و زمان پاسخ‌گویی روشن.",
      },
    ]),
    materials: [
      { label: "نور بنفش", note: "آرامش اتاق کنترل" },
      { label: "فولاد لایه‌ای", note: "خزانه" },
      { label: "اسناد ممیزی", note: "شواهد، نه تزئینات" },
    ],
    heroMeta: ["زیرساخت امانت‌داری", "قابل بررسی", "گزارش‌دهی مستقیم"],
    specsTitle: "پلتفرم",
    specsExtra: [
      { label: "استقرار", value: "ابر خصوصی" },
      { label: "کنترل‌ها", value: "مستندشده" },
      { label: "تناوب ممیزی", value: "پیوسته" },
      { label: "گزارش‌دهی", value: "مستقیم" },
    ],
    cta: {
      title: "کنترل‌ها را بررسی کنید",
      body: "نمای کلی کنترل‌ها را بخواهید یا گزارشی امنیتی ثبت کنید.",
    },
    contact: contact(
      "security@vaultline.demo",
      "والت‌لاین، باستیون کورت ۷",
      "دوشنبه تا جمعه · 09:00–18:00",
      "این شرکت نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "ثبت گزارش امنیتی"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ بدون گواهی‌نامه یا ادعای ممیزی واقعی.",
  },

  "onchain-studio": {
    motif: "blocks",
    layout: "onchain",
    hero: "split",
    heroSide: "left",
    nav: [
      { label: "پروتکل‌ها", href: "#showcase" },
      { label: "استودیو", href: "#story" },
      { label: "یادداشت‌ها", href: "#materials" },
    ],
    navCta: { label: "شروع یک پروژه", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#materials" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / استودیو", "02 / پروتکل‌ها", "03 / یادداشت‌ها", "04 / جزئیات", "05 / تماس"),
    storyTitle: "آن‌چین، روشن و قابل‌فهم",
    showcaseTitle: "محصول، نه روایت",
    showcaseIntro:
      "مطالعات موردی، مسئله و رابط کاربری را همراه با مصالحه‌های طراحی توضیح می‌دهند.",
    showcase: features([
      {
        index: "01",
        title: "رابط‌ها",
        body: "روندهای کار با کیف پول که پیش از درخواست امضا، خودشان را توضیح می‌دهند.",
      },
      {
        index: "02",
        title: "طراحی پروتکل",
        body: "سازوکارها در صورت وجود مستند می‌شوند، با زبانی که کاربر بتواند دنبال کند.",
      },
      {
        index: "03",
        title: "آزمون",
        body: "هر رابط در برابر وضعیت واقعی آزموده می‌شود، نه یک نمونهٔ ساختگی و بی‌دردسر.",
      },
      {
        index: "04",
        title: "یادداشت‌ها",
        body: "پرونده‌ای کاری و عمومی دربارهٔ الگوها، روندها و مرزهای تجربهٔ کاربری آن‌چین.",
      },
    ]),
    materials: [
      { label: "بلوک‌های دفترکل", note: "ساختار، نه گمانه‌زنی" },
      { label: "سبز ملایم", note: "آرامش پایانه" },
      { label: "یادداشت‌های کاری", note: "نوشته‌شده در فضای عمومی" },
    ],
    heroMeta: ["مهندسی محصول", "شبکه‌های باز", "کار قابل ممیزی"],
    specsTitle: "استودیو",
    specsExtra: [
      { label: "حوزهٔ تمرکز", value: "محصولات آن‌چین" },
      { label: "تیم", value: "طراحی و پروتکل" },
      { label: "همکاری", value: "پروژه‌ای" },
    ],
    cta: {
      title: "محصول بعدی را قابل‌فهم بسازیم",
      body: "شرحی کوتاه و پیوند محصول برای شروع کافی است.",
    },
    contact: contact(
      "hello@onchain-studio.demo",
      "آن‌چین استودیو، کوچهٔ لجر ۱۲",
      "دوشنبه تا جمعه · 10:00–18:00",
      "این استودیو نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "شروع یک پروژه"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ بدون پروژه یا ادعای مالی واقعی.",
  },

  "cyber-defense": {
    motif: "shield",
    layout: "cyber",
    hero: "full",
    heroSide: "right",
    nav: [
      { label: "دفاع", href: "#showcase" },
      { label: "پاسخ‌گویی", href: "#story" },
      { label: "شرح خدمات", href: "#contact" },
    ],
    navCta: { label: "درخواست شرح خدمات", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["showcase", "story", "materials", "specs", "contact"],
    labels: labels("01 / چارچوب", "02 / پاسخ‌گویی", "03 / سوابق", "04 / جزئیات", "05 / شرح خدمات"),
    storyTitle: "آماده، پیش از وقوع حادثه",
    showcaseTitle: "سامانه‌ای آرام و منظم برای پاسخ‌گویی",
    showcaseIntro:
      "پایش، ارجاع و برنامه‌ای که از پیش تمرین شده است.",
    showcase: timeline([
      {
        step: "01",
        title: "نشانه",
        body: "تله‌متری به تصمیم‌هایی پیوند می‌خورد که پشتیبانی می‌کند. هشدارها بر پایهٔ میزان اثر دسته‌بندی می‌شوند.",
      },
      {
        step: "02",
        title: "تصمیم‌گیری",
        body: "مسیرهای ارجاع و اختیارات تصمیم‌گیری پیش از وقوع حادثه مشخص می‌شوند.",
      },
      {
        step: "03",
        title: "پاسخ‌گویی",
        body: "هر راهنمای اجرایی مسئولی مشخص، تاریخ بازبینی و مسیری تمرین‌شده دارد.",
      },
      {
        step: "04",
        title: "ثبت سوابق",
        body: "خط زمانی مستند، اقدامات انجام‌شده و تغییراتی که پس از آن می‌آیند.",
      },
    ]),
    materials: [
      { label: "حلقه‌های پایش", note: "سیگنالی پیوسته" },
      { label: "قرمز هشدار", note: "یک زنگ خطر روشن" },
      { label: "گزارش حادثه", note: "سابقه‌ای مکتوب" },
    ],
    heroMeta: ["پاسخ‌گویی مدیریت‌شده", "تمرین‌شده", "مستندشده"],
    specsTitle: "رویکرد",
    specsExtra: [
      { label: "چارچوب", value: "مدیریت‌شده" },
      { label: "پوشش", value: "24/7" },
      { label: "راهنماهای اجرایی", value: "دارای مسئول" },
      { label: "گزارش‌دهی", value: "مکتوب" },
    ],
    cta: {
      title: "پاسخ‌گویی را تمرین کنید",
      body: "شرح خدمات پاسخ‌گویی را برای تیم خود درخواست کنید.",
    },
    contact: contact(
      "response@cyber-defense.demo",
      "سایبر دیفنس، میدان واچ‌تاور ۵",
      "24/7 · میز پاسخ‌گویی",
      "این شرکت نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "درخواست شرح خدمات"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ بدون خدمات امنیتی یا ضمانت واقعی.",
  },

  "apex-marque": {
    motif: "car",
    layout: "apex",
    hero: "full",
    heroSide: "left",
    nav: [
      { label: "برند", href: "#story" },
      { label: "خودرو", href: "#showcase" },
      { label: "پیکربندی", href: "#contact" },
    ],
    navCta: { label: "ساخت مشخصات", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["showcase", "story", "specs", "materials", "contact"],
    labels: labels("01 / خودرو", "02 / برند", "03 / مشخصات", "04 / متریال‌ها", "05 / پیکربندی"),
    storyTitle: "راهی طولانی تا خانه",
    showcaseTitle: "خودرویی با مشخصاتی روشن",
    showcaseIntro:
      "یک خودروی گرندتورر زیر یک نور اصلی. تناسباتی کشیده، کابینی آرام و مشخصاتی شفاف.",
    showcase: specShowcase(
      [
        { label: "قدرت", value: "620 hp", note: "نمونه‌ای" },
        { label: "0–60", value: "3.4 s", note: "نمونه‌ای" },
        { label: "بُرد", value: "410 mi", note: "نمونه‌ای" },
        { label: "وزن", value: "1,780 kg", note: "نمونه‌ای" },
      ],
      [
        { label: "چیدمان", value: "موتور جلو، دیفرانسیل عقب" },
        { label: "جعبه‌دنده", value: "8 سرعته" },
        { label: "چرخ‌ها", value: "21 اینچ" },
        { label: "تیپ", value: "تورینگ / گرند / ادیشن" },
      ]
    ),
    materials: [
      { label: "رنگ بدنه", note: "یک نور اصلی" },
      { label: "آلیاژ", note: "تناسبات کشیده" },
      { label: "چرم", note: "کابینی آرام" },
    ],
    heroMeta: ["گرندتورر", "یک نور اصلی", "ساخت سفارشی"],
    specsTitle: "مشخصات نمونه",
    specsExtra: [
      { label: "صندلی‌ها", value: "2+2" },
      { label: "صندوق", value: "310 L" },
      { label: "ساخت", value: "سفارشی" },
    ],
    cta: {
      title: "راه طولانی تا خانه را بسازید",
      body: "تیپ را انتخاب و زمان ساخت درخواست کنید.",
    },
    contact: contact(
      "atelier@apex-marque.demo",
      "اپکس مارک، خیابان کانسور ۱",
      "با تعیین وقت قبلی",
      "این برند نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "درخواست زمان ساخت"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ بدون خودرو، سفارش یا ادعای واقعی.",
  },

  "velocity-studio": {
    motif: "aero",
    layout: "velocity",
    hero: "split",
    heroSide: "left",
    nav: [
      { label: "حرکت", href: "#showcase" },
      { label: "آیرودینامیک", href: "#story" },
      { label: "عرضه", href: "#contact" },
    ],
    navCta: { label: "مشاهدهٔ مطالعه", href: "#showcase" },
    heroCta: { primary: "#showcase", secondary: "#story" },
    order: ["showcase", "story", "specs", "materials", "contact"],
    labels: labels("01 / مطالعه", "02 / جریان هوا", "03 / مشخصات", "04 / متریال‌ها", "05 / عرضه"),
    storyTitle: "فرم در حرکت",
    showcaseTitle: "آیرودینامیک در مقام طراحی",
    showcaseIntro:
      "مطالعه‌ای دربارهٔ عملکرد که بر پایهٔ فیلم معرفی و روایتی دقیق از آیرودینامیک شکل گرفته است.",
    showcase: specShowcase(
      [
        { label: "نیروی رو به پایین", value: "410 kg", note: "نمونه‌ای" },
        { label: "ضریب پسا", value: "0.28 Cd", note: "نمونه‌ای" },
        { label: "وزن", value: "1,190 kg", note: "نمونه‌ای" },
        { label: "توان خروجی", value: "540 hp", note: "نمونه‌ای" },
      ],
      [
        { label: "چیدمان", value: "موتور وسط" },
        { label: "بدنه", value: "کامپوزیت کربنی" },
        { label: "آیرودینامیک", value: "بخش عقب فعال" },
        { label: "عرضه", value: "فیلم و مطالعه" },
      ]
    ),
    materials: [
      { label: "کربن", note: "زبان سطوح" },
      { label: "قرمز هشدار", note: "نور جهت‌دار" },
      { label: "تونل باد", note: "محک اثبات" },
    ],
    heroMeta: ["مطالعهٔ عملکرد", "با محوریت آیرودینامیک", "فیلم و مشخصات"],
    specsTitle: "مشخصات نمونه",
    specsExtra: [
      { label: "صندلی‌ها", value: "2" },
      { label: "محور محرک", value: "عقب" },
      { label: "ساخت", value: "مطالعه‌ای" },
    ],
    cta: {
      title: "فرم را در حرکت ببینید",
      body: "فیلم معرفی و یادداشت‌های کامل آیرودینامیک را درخواست کنید.",
    },
    contact: contact(
      "studio@velocity-studio.demo",
      "استودیوی ویژوال، ۸ خیابان آیرو",
      "دوشنبه تا جمعه · 09:00–18:00",
      "این استودیو نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "درخواست مطالعه"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ بدون خودرو یا ادعای واقعی.",
  },

  "electric-motion": {
    motif: "pod",
    layout: "electric",
    hero: "center",
    heroSide: "right",
    nav: [
      { label: "حمل‌ونقل", href: "#showcase" },
      { label: "شارژ", href: "#story" },
      { label: "مراجعه", href: "#contact" },
    ],
    navCta: { label: "رزرو رانندگی آزمایشی", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#story" },
    order: ["story", "showcase", "specs", "materials", "contact"],
    labels: labels("01 / شهر", "02 / وسیلهٔ نقلیه", "03 / مشخصات", "04 / متریال‌ها", "05 / مراجعه"),
    storyTitle: "بی‌سروصدا رو به جلو",
    showcaseTitle: "ابعادی کوچک، فضایی جادار",
    showcaseIntro:
      "محفظهٔ برقی فشرده‌ای با طراحی مسافر‌محور و راهکاری ساده برای شارژ.",
    showcase: specShowcase(
      [
        { label: "بُرد", value: "180 mi", note: "نمونه‌ای" },
        { label: "شارژ", value: "18 min", note: "نمونه‌ای" },
        { label: "صندلی‌ها", value: "4", note: "کف هم‌سطح" },
        { label: "طول", value: "3.1 m", note: "ابعاد شهری" },
      ],
      [
        { label: "چیدمان", value: "کف هم‌سطح" },
        { label: "شارژ", value: "DC و خانگی" },
        { label: "درگاه اتصال", value: "CCS" },
        { label: "عرضه", value: "طرح آزمایشی شهری" },
      ]
    ),
    materials: [
      { label: "نور ملایم روز", note: "آرام و امیدوارکننده" },
      { label: "پارچهٔ بازیافتی", note: "کابین" },
      { label: "سازهٔ شارژ", note: "توقفی ساده" },
    ],
    heroMeta: ["حمل‌ونقل شهری", "فشرده", "برقی"],
    specsTitle: "مشخصات نمونه",
    specsExtra: [
      { label: "محور محرک", value: "جلو" },
      { label: "حداکثر سرعت", value: "80 mph" },
      { label: "ضمانت", value: "4 سال" },
    ],
    cta: {
      title: "راه کوتاه‌تر را انتخاب کنید",
      body: "رانندگی آزمایشی شهری رزرو کنید یا ایستگاه شارژ بیابید.",
    },
    contact: contact(
      "hello@electric-motion.demo",
      "الکتریک موشن، خیابان دیپو ۳",
      "دوشنبه تا شنبه · 09:00–18:00",
      "این سرویس حمل‌ونقل نمونه‌ای نمایشی است و جزئیات آن صرفاً جنبهٔ نمونه دارند.",
      "رزرو رانندگی آزمایشی"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ بدون خودرو یا رزرو واقعی.",
  },

  "aldane-voss": {
    motif: "heritage",
    layout: "aldane",
    hero: "center",
    heroSide: "left",
    nav: [
      { label: "مجموعه", href: "#showcase" },
      { label: "خانه", href: "#story" },
      { label: "ویژهٔ بزرگسالان 18+", href: "#contact" },
    ],
    navCta: { label: "مشاهدهٔ کاتالوگ", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#story" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / کاتالوگ", "02 / خانه", "03 / متریال‌ها", "04 / قالب", "05 / اطلاعیه"),
    storyTitle: "ترکیب‌ها، با مشخصاتی روشن",
    showcaseTitle: "چهار ترکیب شماره‌گذاری‌شده",
    showcaseIntro:
      "کاتالوگی ساختگی از محصولات دخانی برای مخاطبان بزرگسال.",
    showcase: collection([
      { index: "01", name: "سدر", note: "کنتیکت · 6 × 50", tags: ["سدر", "کرم", "کاغذ"] },
      { index: "02", name: "مادورو", note: "نیکاراگوئه · 5 × 54", tags: ["کاکائو", "چرم", "تیره"] },
      { index: "03", name: "روسادو", note: "هندوراس · 6 × 52", tags: ["گل رز", "سدر", "ادویه"] },
      { index: "04", name: "دابل کرونا", note: "جمهوری دومینیکن · 7 × 50", tags: ["سدر", "تُست", "بلند"] },
    ]),
    materials: [
      { label: "سدر", note: "آتلیه" },
      { label: "برنج کهنه‌کاری‌شده", note: "فهرست و مهر" },
      { label: "فهرست چاپی", note: "سادگی آرشیوی" },
    ],
    heroMeta: ["ویژهٔ بزرگسالان 18+", "خانه‌ای ساختگی", "آرشیوی"],
    specsTitle: "قالب",
    specsExtra: [
      { label: "قالب", value: "HTML منتشرشده و WebGL" },
      { label: "دسترسی", value: "محدود به افراد 18+" },
      { label: "مجموعه", value: "4 ترکیب" },
    ],
    cta: {
      title: "کاتالوگ را ببینید",
      body: "دسترسی به کاتالوگ کامل با محدودیت سنی است و به‌صورت سندی مستقل باز می‌شود.",
    },
    contact: contact(
      "house@aldane-voss.demo",
      "آلدین و واس، با تعیین وقت قبلی",
      "—",
      "نمونه‌ای کاملاً ساختگی؛ ویژهٔ افراد 18 سال به بالا.",
      "مشاهدهٔ کاتالوگ"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ ویژهٔ افراد 18 سال به بالا.",
  },

  "cigar-atelier": {
    motif: "cigar",
    layout: "cigar",
    hero: "center",
    heroSide: "left",
    nav: [
      { label: "مجموعه", href: "#showcase" },
      { label: "آتلیه", href: "#story" },
      { label: "ویژهٔ بزرگسالان 18+", href: "#contact" },
    ],
    navCta: { label: "مطالعهٔ اطلاعیه", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#story" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / آتلیه", "02 / مجموعه", "03 / متریال‌ها", "04 / جزئیات", "05 / اطلاعیه"),
    storyTitle: "هنری ظریف و بی‌هیاهو",
    showcaseTitle: "مجموعه‌ای کوچک با ارائه‌ای سنجیده",
    showcaseIntro:
      "سدر، برنج کهنه‌کاری‌شده و کارت‌های فهرست چاپی. خانه‌ای ساختگی برای مخاطبان بزرگسال.",
    showcase: collection([
      { index: "01", name: "سدر", note: "کنتیکت · 6 × 50", tags: ["سدر", "کرم", "کاغذ"] },
      { index: "02", name: "مادورو", note: "نیکاراگوئه · 5 × 54", tags: ["کاکائو", "چرم", "تیره"] },
      { index: "03", name: "روسادو", note: "هندوراس · 6 × 52", tags: ["گل رز", "سدر", "ادویه"] },
      { index: "04", name: "دابل کرونا", note: "جمهوری دومینیکن · 7 × 50", tags: ["سدر", "تُست", "بلند"] },
    ]),
    materials: [
      { label: "سدر", note: "آتلیه" },
      { label: "برنج کهنه‌کاری‌شده", note: "فهرست و مهر" },
      { label: "فهرست چاپی", note: "سادگی آرشیوی" },
    ],
    heroMeta: ["ویژهٔ بزرگسالان 18+", "ساختگی", "بچ کوچک"],
    specsTitle: "مجموعه",
    specsExtra: [
      { label: "دسترسی", value: "محدود به افراد 18+" },
      { label: "مجموعه", value: "4" },
      { label: "قالب", value: "تک‌صفحه‌ای" },
    ],
    cta: {
      title: "اطلاعیه را بخوانید",
      body: "این نمونه کاملاً ساختگی است. مسئولیت رعایت محدودیت‌های محلی بر عهدهٔ بهره‌برداران است.",
    },
    contact: contact(
      "house@cigar-atelier.demo",
      "سیگار آتلیه، با تعیین وقت قبلی",
      "—",
      "نمونه‌ای کاملاً ساختگی؛ ویژهٔ افراد 18 سال به بالا.",
      "درخواست اطلاعیه"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ ویژهٔ افراد 18 سال به بالا. بدون فروش یا ادعای سلامت.",
  },

  "modern-tobacco": {
    motif: "tin",
    layout: "modern",
    hero: "split",
    heroSide: "right",
    nav: [
      { label: "گزیده", href: "#showcase" },
      { label: "فروشگاه‌ها", href: "#story" },
      { label: "ویژهٔ بزرگسالان 18+", href: "#contact" },
    ],
    navCta: { label: "مطالعهٔ اطلاعیه", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["showcase", "story", "materials", "specs", "contact"],
    labels: labels("01 / گزیده", "02 / قفسه", "03 / متریال‌ها", "04 / جزئیات", "05 / اطلاعیه"),
    storyTitle: "قفسه‌ای متفاوت",
    showcaseTitle: "محصولاتی کمتر، با ارائه‌ای بهتر",
    showcaseIntro:
      "طرحی ساختگی برای فروشگاهی ویژهٔ محصولات بزرگسالان.",
    showcase: collection([
      { index: "01", name: "قوطی", note: "فولاد برس‌خورده · 50 g", tags: ["فولاد", "خنثی", "محصول"] },
      { index: "02", name: "گزیده", note: "سه ترکیب · 10 × 2", tags: ["گزیده", "کاغذ", "مجموعه"] },
      { index: "03", name: "قفسه", note: "مجموعهٔ نمایشی · پوشش رنگ پودری", tags: ["قفسه", "نور ملایم", "خرده‌فروشی"] },
    ]),
    materials: [
      { label: "فولاد برس‌خورده", note: "قوطی" },
      { label: "نور ملایم", note: "قفسه" },
      { label: "کاغذ خنثی", note: "گزیده" },
    ],
    heroMeta: ["ویژهٔ بزرگسالان 18+", "ساختگی", "معاصر"],
    specsTitle: "گزیده",
    specsExtra: [
      { label: "دسترسی", value: "محدود به افراد 18+" },
      { label: "گزیده", value: "3 محصول" },
      { label: "قالب", value: "تک‌صفحه‌ای" },
    ],
    cta: {
      title: "اطلاعیه را بخوانید",
      body: "نمونه‌ای ساختگی؛ بدون فروش یا ادعای سلامت.",
    },
    contact: contact(
      "studio@modern-tobacco.demo",
      "مدرن توباکو، با تعیین وقت قبلی",
      "—",
      "نمونه‌ای کاملاً ساختگی؛ ویژهٔ افراد 18 سال به بالا.",
      "درخواست اطلاعیه"
    ),
    footerNote: "نمونه‌ای کاملاً ساختگی؛ ویژهٔ افراد 18 سال به بالا. بدون فروش یا ادعای سلامت.",
  },
};
