import type { Metadata } from "next";
import { MaisonSite } from "@/components/sites/maison-dining/MaisonSite";
import "./maison.css";
import "@/app/sites/templates-typography.css";

const title = "مزون داینینگ — میزی چیده‌شده برای شب";
const description =
  "یک وب‌سایت نمونه برای اتاق غذاخوری پاریسی: کارت فصلی، منوی کوتاه، نقشهٔ کارت‌پستالی محله و فرم رزرو میز. رستوران خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/maison-dining",
  },
  openGraph: {
    title,
    description,
    url: "/sites/maison-dining",
    type: "website",
    images: [
      {
        url: "/api/og?site=maison-dining",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت مزون داینینگ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=maison-dining"],
  },
};

export default function MaisonDiningPage() {
  return <MaisonSite />;
}
