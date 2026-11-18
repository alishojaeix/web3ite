import type { Metadata } from "next";
import { CigarSite } from "@/components/sites/cigar-atelier/CigarSite";
import "./cigar.css";
import "@/app/sites/templates-typography.css";

const title = "سیگار آتلیه — هنرِ بی‌هیاهو";
const description =
  "Cigar Atelier طرحی خیالی و محدود به بزرگسالان برای وب‌سایت خانهٔ سیگار برگ است: مجموعه‌ای نمایشی از چهار قالب، بررسی متریال چوب سدر، برنج و کاغذ، هشدار صریح سلامت و اطلاعیهٔ عدم فروش. ویژهٔ افراد بالای ۱۸ سال.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sites/cigar-atelier" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: "/sites/cigar-atelier",
    type: "website",
    images: [
      {
        url: "/api/og?site=cigar-atelier",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت سیگار آتلیه — ویژهٔ افراد بالای ۱۸ سال",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=cigar-atelier"],
  },
};

export default function CigarAtelierPage() {
  return <CigarSite />;
}
