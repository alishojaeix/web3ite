import type { Metadata } from "next";
import { ApexSite } from "@/components/sites/apex-marque/ApexSite";
import "./apex.css";
import "@/app/sites/templates-typography.css";

const title = "اپکس مارک — راهِ طولانیِ خانه";
const description =
  "نمونهٔ وب‌سایت یک برند خودروی گرند تورر: مطالعه‌ای تصویری از خودرو زیر یک نور کلیدی، انتخابگر تیپ تعاملی، مشخصات ساده و گویا، سه متریال و فرم درخواست ساخت. برندی خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/apex-marque",
  },
  openGraph: {
    title,
    description,
    url: "/sites/apex-marque",
    type: "website",
    images: [
      {
        url: "/api/og?site=apex-marque",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت اپکس مارک",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=apex-marque"],
  },
};

export default function ApexMarquePage() {
  return <ApexSite />;
}
