import type { Metadata } from "next";
import { CyberSite } from "@/components/sites/cyber-defense/CyberSite";
import "./cyber.css";
import "@/app/sites/templates-typography.css";

const title = "سایبر دیفنس — آماده پیش از ضربه";
const description =
  "یک وب‌سایت نمونه برای شرکت امنیت سایبری: تمرین‌های خشک‌اجرا، خط زمانی رخداد، پنل‌های وضعیت و فرم درخواست ارزیابی. شرکت خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/cyber-defense",
  },
  openGraph: {
    title,
    description,
    url: "/sites/cyber-defense",
    type: "website",
    images: [
      {
        url: "/api/og?site=cyber-defense",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت سایبر دیفنس",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=cyber-defense"],
  },
};

export default function CyberDefensePage() {
  return <CyberSite />;
}
