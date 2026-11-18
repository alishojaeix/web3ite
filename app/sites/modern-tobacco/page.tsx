import type { Metadata } from "next";
import { ModernSite } from "@/components/sites/modern-tobacco/ModernSite";
import "./modern.css";
import "@/app/sites/templates-typography.css";

const title = "مدرن توباکو — چیدمانی متفاوت";
const description =
  "Modern Tobacco طرحی خیالی و محدود به بزرگسالان برای وب‌سایت یک فروشگاه خاص است: چیدمانی نمایشی از سه شیء، بررسی متریال فولاد برس‌خورده، طراحی قفسه‌ای کوتاه و دوطبقه، فروشگاه‌های فرضی، هشدار صریح سلامت و اطلاعیهٔ عدم فروش. ویژهٔ افراد بالای ۱۸ سال.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sites/modern-tobacco" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: "/sites/modern-tobacco",
    type: "website",
    images: [
      {
        url: "/api/og?site=modern-tobacco",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت مدرن توباکو — ویژهٔ افراد بالای ۱۸ سال",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=modern-tobacco"],
  },
};

export default function ModernTobaccoPage() {
  return <ModernSite />;
}
