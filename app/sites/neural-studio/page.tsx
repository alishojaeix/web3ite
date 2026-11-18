import type { Metadata } from "next";
import { NeuralSite } from "@/components/sites/neural-studio/NeuralSite";
import "./neural.css";
import "@/app/sites/templates-typography.css";

const title = "استودیوی نیورال — هوش، به‌شکل درآمده";
const description =
  "یک وب‌سایت نمونه برای استودیوی هوش مصنوعی: موارد کاربرد، روش کار، معیارهای ارزیابی و فرم ورودی پروژه. استودیوی خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/neural-studio",
  },
  openGraph: {
    title,
    description,
    url: "/sites/neural-studio",
    type: "website",
    images: [
      {
        url: "/api/og?site=neural-studio",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت استودیوی نیورال",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=neural-studio"],
  },
};

export default function NeuralStudioPage() {
  return <NeuralSite />;
}
