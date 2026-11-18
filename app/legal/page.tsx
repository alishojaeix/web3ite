import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { faNumber } from "@/lib/i18n/format";

export const metadata: Metadata = {
  title: "سیاست نمایشی و سنی",
  description:
    "شیوهٔ کار کاتالوگ نمایشی Web3ite: کسب‌وکارهای خیالی، نمایش‌های توتون مخصوص بزرگسالان، داده‌های عضویت، تأیید سن و پیکربندی پرداخت.",
  alternates: { canonical: "/legal" },
};

const sections = [
  {
    title: "این یک کاتالوگ نمایشی است",
    body: [
      "Web3ite یک نمایش طراحی و مهندسی است. هر کسب‌وکار، منو، نشانی، قیمت، ادعا و نظر مشتری که در وب‌سایت قالب‌ها نمایش داده می‌شود خیالی است. هیچ مکانی رزرو نمی‌پذیرد، هیچ محصولی توسط این کسب‌وکارهای خیالی فروخته نمی‌شود و هیچ پیامی که از فرم یک وب‌سایت قالب ارسال شود به مکان واقعی نمی‌رسد.",
      "قیمت قالب‌های نمایش داده‌شده در این سایت به محصول طراحی اشاره دارد، نه به چیزی که کسب‌وکارهای خیالی داخل قالب‌ها می‌فروشند.",
    ],
  },
  {
    title: "محتوای توتون و سیگار برگ",
    body: [
      "وب‌سایت‌های آلدین و واس، سیگار آتلیه و مدرن توباکو نمایش‌های طراحی خیالی و مخصوص بزرگسالان هستند. آن‌ها پشت دروازهٔ تأیید ۱۸+ قرار دارند و از نقشهٔ سایت و نمایشگاه صفحهٔ اصلی حذف شده‌اند.",
      "این وب‌سایت‌ها هیچ محصول توتونی برای فروش ندارند و هیچ ادعای سلامتی یا درمانی نمی‌کنند. مصرف توتون برای سلامت مضر است. بهره‌بردارانی که این طراحی‌ها را اقتباس می‌کنند مسئول محدودیت‌های سنی، قوانین تبلیغات و هشدارهای سلامت لازم در بازار خود هستند.",
    ],
  },
  {
    title: "تأیید سن",
    body: [
      "با تأیید اینکه ۱۸ سال یا بیشتر هستید، یک کوکی متعلق به همین سایت برای ۳۰ روز روی دستگاه شما ذخیره می‌شود تا دروازه در هر صفحه دوباره نمایش داده نشود. رد کردن، کوکی را تنظیم نمی‌کند و شما را به کاتالوگ عمومی بازمی‌گرداند. این کوکی فقط یک اعلام آگاهی است، نه احراز هویت.",
    ],
  },
  {
    title: "عضویت و داده‌ها",
    body: [
      "با ساخت حساب، نشانی ایمیل شما و هش گذرواژه با الگوریتم scrypt در انبار دادهٔ محلی همین استقرار ذخیره می‌شود. نشست‌ها از کوکی امضاشده و HttpOnly استفاده می‌کنند. گذرواژه‌ها هرگز به شکل متن ساده ذخیره نمی‌شوند.",
      "پیام‌هایی که از فرم‌های وب‌سایت قالب ارسال می‌شوند، زمانی که صندوق نمایشی قابل نوشتن باشد روی سرور ذخیره می‌شوند. اطلاعات شخصی یا حساس واقعی را از طریق فرم‌های نمایشی ارسال نکنید. پرداخت، در صورت فعال بودن، توسط Stripe انجام می‌شود؛ جزئیات کارت هرگز به Web3ite ارسال یا ذخیره نمی‌شود.",
    ],
  },
  {
    title: "پرداخت‌ها",
    body: [
      "تکمیل خرید فقط زمانی در دسترس است که اطلاعات ورود Stripe پیکربندی شده باشد. در غیر این صورت صفحهٔ پرداخت همین را اعلام می‌کند و مبلغی دریافت نمی‌شود. هیچ خریدی بدون تأیید پرداخت Stripe موفق گزارش نمی‌شود.",
      "خرید کامل، مجوز استفاده از قالب انتخاب‌شده را برای یک پروژهٔ وب‌سایت تجاری می‌دهد. این مجوز حق فروش مجدد یا اجازهٔ بازتوزیع قالب به‌عنوان قالب را نمی‌دهد. ممکن است این استقرار نمایشی تحویل خودکار فایل منبع ارائه نکند؛ حساب شما خرید را برای پیگیری ثبت می‌کند.",
    ],
  },
  {
    title: "محتوا و تماس",
    body: [
      "محتوای قالب‌ها مطالب تحریریهٔ خیالی و اصیل است. صحنه‌ها و پوسترهای بصری توسط همین پروژه تولید شده‌اند. هیچ برند، لوگو، عکس یا نظر مشتری متعلق به شخص ثالث به‌عنوان واقعی ارائه نشده است.",
      "برای اصلاحات، پرسش‌های داده‌ای یا گزارش‌های امنیتی، از مخزن پروژه که در پاورقی پیوند شده است استفاده کنید. این یک سیاست نمایشی است و جای مشاورهٔ حقوقی را نمی‌گیرد.",
    ],
  },
];

export default function LegalPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-6 pb-24 pt-32 lg:px-10">
        <div className="mx-auto max-w-[900px]">
          <p className="eyebrow flex items-center gap-3 text-[#8a847c]">
            <span className="h-px w-8 bg-[#d4af7a]/60" />
            سیاست
          </p>
          <h1 className="display-face mt-6 text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.95] text-[#f6f1ea]">
            سیاست نمایشی و سنی
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#a7a198]">
            چه چیزی در این کاتالوگ واقعی است، چه چیزی خیالی است، و این نسخهٔ
            نمایشی چگونه تأیید سن، حساب‌ها، درخواست‌ها و پرداخت‌ها را مدیریت
            می‌کند.
          </p>

          <div className="mt-14 space-y-12">
            {sections.map((section, index) => (
              <section key={section.title} className="border-t border-white/[0.08] pt-8">
                <div className="grid gap-5 md:grid-cols-[64px_minmax(0,1fr)]">
                  <p className="text-[13px] tracking-[0.18em] text-[#8a847c]">
                    {faNumber(index + 1, {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    })}
                  </p>
                  <div>
                    <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-light tracking-[0.01em] text-[#f6f1ea]">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.body.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 32)}
                          className="text-[14px] leading-7 text-[#a7a198]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
            <p className="text-[13px] leading-relaxed text-[#b8b3aa]">
              کاتالوگ را ببینید یا پیش از باز کردن یک نمایش مخصوص بزرگسالان،
              نحوهٔ کار تأیید سن را بخوانید.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/templates"
                className="inline-flex min-h-11 items-center rounded-sm bg-[#f4efe6] px-4 py-2.5 text-[12px] font-medium text-[#111] hover:bg-white"
              >
                کاتالوگ قالب‌ها
              </Link>
              <Link
                href="/age-gate"
                className="inline-flex min-h-11 items-center rounded-sm border border-white/15 px-4 py-2.5 text-[12px] text-[#f6f1ea] hover:border-white/30"
              >
                دروازهٔ سن
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
