import type { Metadata } from "next";
import { ElectricSite } from "@/components/sites/electric-motion/ElectricSite";
import "./electric.css";
import "@/app/sites/templates-typography.css";

const title = "الکتریک موشن — به پیش، بی‌صدا";
const description =
  "یک صفحهٔ محصول نمونه برای خودروی برقی شهری: کپسول چهارنفره، طاق شارژ، فهرست ایستگاه‌ها، مشخصات نمایشی و فرم رانندگی آزمایشی. برند خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sites/electric-motion" },
  openGraph: {
    title,
    description,
    url: "/sites/electric-motion",
    type: "website",
    images: [
      {
        url: "/api/og?site=electric-motion",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت الکتریک موشن — حمل‌ونقل برقی شهری",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=electric-motion"],
  },
};

export default function ElectricMotionPage() {
  return <ElectricSite />;
}
