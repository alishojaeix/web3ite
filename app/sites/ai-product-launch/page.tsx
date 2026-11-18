import type { Metadata } from "next";
import { LaunchSite } from "@/components/sites/ai-product-launch/LaunchSite";
import "./launch.css";
import "@/app/sites/templates-typography.css";

const title = "لانچ محصول هوش مصنوعی — شیئی کوچک. ماشینی جدی";
const description =
  "یک وب‌سایت نمونه برای رونمایی محصول هوش مصنوعی: یک شیء سرامیکی آرام، مشخصات ساده، فهرست انتظار و فرم رزرو. محصول و برند خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/ai-product-launch",
  },
  openGraph: {
    title,
    description,
    url: "/sites/ai-product-launch",
    type: "website",
    images: [
      {
        url: "/api/og?site=ai-product-launch",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت لانچ محصول هوش مصنوعی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=ai-product-launch"],
  },
};

export default function AiProductLaunchPage() {
  return <LaunchSite />;
}
