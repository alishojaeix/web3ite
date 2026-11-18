import type { Metadata } from "next";
import { QuantumSite } from "@/components/sites/quantum-systems/QuantumSite";
import "./quantum.css";
import "@/app/sites/templates-typography.css";

const title = "کوانتوم سیستمز — اندازه‌گیری با میکرون";
const description =
  "یک وب‌سایت نمونه برای شرکت پردازش دقیق: سامانه‌های اندازه‌گیری، مشخصات فنی و فرم درخواست مراجعه. شرکت خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/quantum-systems",
  },
  openGraph: {
    title,
    description,
    url: "/sites/quantum-systems",
    type: "website",
    images: [
      {
        url: "/api/og?site=quantum-systems",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت کوانتوم سیستمز",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=quantum-systems"],
  },
};

export default function QuantumSystemsPage() {
  return <QuantumSite />;
}
