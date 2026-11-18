import Link from "next/link";
import { ArrowUpRight, MoveUpRight, RotateCw, Sparkles } from "lucide-react";
import { LazyTemplateScene } from "@/components/3d/CanvasStage";
import type { Template } from "@/types/template";
import { faNumber } from "@/lib/i18n/format";

const steps = [
  {
    number: "۰۱",
    title: "یک اتاق انتخاب کنید",
    body: "شش صنعت، هر کدام با مجموعه‌ای کوچک از مفاهیم کامل. از کسب‌وکار شروع کنید، نه از یک بوم خالی.",
  },
  {
    number: "۰۲",
    title: "جزئیات را تنظیم کنید",
    body: "رنگ تأکید، نور، دوربین و محتوا روی صحنهٔ واقعی قرار می‌گیرند. استودیو خودِ پیش‌نمایش است، نه تصویری از آن.",
  },
  {
    number: "۰۳",
    title: "سایت را راه‌اندازی کنید",
    body: "کاتالوگ برای پذیرش مدل‌ها و محتوای واقعی ساخته شده است. استقرار لایهٔ بعدی است، نه وعده‌ای پنهان در متن.",
  },
];

export function StudioStrip({ template }: { template: Template }) {
  return (
    <section
      id="studio"
      className="relative overflow-hidden border-y border-white/[0.06] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(900px 480px at 18% 30%, rgba(212,175,122,0.08), transparent 65%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow flex items-center gap-3 text-[#8a847c]">
            <span className="h-px w-8 bg-[#d4af7a]/60" />
            استودیو
          </p>
          <h2 className="display-face mt-6 max-w-[12ch] text-balance text-[clamp(2.7rem,5vw,4.8rem)] leading-[0.95] text-[#f6f1ea]">
            اتاق همان
            <span className="editorial-face ms-3 text-[#e4c69c]">رابط کاربری است</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#a7a198]">
            بدون پیش‌نمایش‌های مسطح. صحنه‌ای که بررسی می‌کنید همان صحنه‌ای است که
            تحویل می‌شود. متریال، دوربین و نور بخشی از قالب‌اند، نه پوسته‌ای که
            بعداً اضافه شود.
          </p>

          <ol className="mt-10 space-y-0 border-t border-white/[0.08]">
            {steps.map((step) => (
              <li
                key={step.number}
                className="grid grid-cols-[2.2rem_1fr] gap-4 border-b border-white/[0.08] py-5"
              >
                <span className="pt-1 text-[13px] tracking-[0.18em] text-[#d4af7a]/80">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-[20px] tracking-[0.01em] text-[#f6f1ea]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-sm text-[13px] leading-relaxed text-[#8f8a81]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Link
            href={`/templates/${template.id}?view=customize`}
            className="group mt-8 inline-flex items-center gap-2 text-[13px] tracking-[0.18em] text-[#d4af7a] transition-colors hover:text-[#f0d9a8]"
          >
            باز کردن استودیوی {template.title}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
          </Link>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.1] bg-[#0a0b0e] shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#d4af7a]" />
                <span className="text-[13px] tracking-[0.18em] text-[#b8b3aa]">
                  استودیو / {template.title}
                </span>
              </div>
              <span className="rounded-full border border-white/10 px-2 py-0.5 text-[12px] tracking-[0.16em] text-[#7f7a72]">
                پیش‌نمایش زنده
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <LazyTemplateScene
                scene={template.scene}
                theme={template.theme}
                label={template.title}
                variant="card"
                active
                modelPath={template.modelPath}
                className="absolute inset-0 h-full w-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(7,8,11,0.85)_100%)]" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[12px] tracking-[0.18em] text-[#b8b3aa]">
                    {template.content.eyebrow}
                  </p>
                  <p className="mt-1 font-display text-[24px] leading-none tracking-[0.01em] text-[#f6f1ea]">
                    {template.content.headline}{" "}
                    <span className="editorial-face text-[#e4c69c]">
                      {template.content.headlineAccent}
                    </span>
                  </p>
                </div>
                <span className="rounded-sm border border-white/10 bg-black/40 px-2 py-1 text-[12px] tracking-[0.16em] text-[#d4af7a] backdrop-blur-md">
                  بکشید
                </span>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-white/[0.08] px-4 py-4">
              <div className="flex items-center gap-3">
                <span className="text-[12px] tracking-[0.16em] text-[#7f7a72]">
                  رنگ تأکید
                </span>
                {["#d4af7a", "#c47a5f", "#a8b9a1", "#9aa8ff"].map((color) => (
                  <span
                    key={color}
                    className="h-5 w-5 rounded-full border border-white/20"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3 text-[#8a847c]">
                <RotateCw className="h-4 w-4" />
                <Sparkles className="h-4 w-4 text-[#d4af7a]" />
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-5 -end-3 hidden items-center gap-2 rounded-sm border border-[#d4af7a]/25 bg-[#0b0d11] px-3 py-2 text-[12px] tracking-[0.16em] text-[#d4af7a] shadow-xl md:flex">
            <MoveUpRight className="h-3.5 w-3.5" />
            دوربین، نور و مدل در یک صحنه
          </div>
        </div>
      </div>
    </section>
  );
}
