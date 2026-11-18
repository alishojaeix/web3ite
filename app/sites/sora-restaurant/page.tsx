import type { Metadata } from "next";
import { SoraSite } from "@/components/sites/sora-restaurant/SoraSite";
import "./sora.css";
import "@/app/sites/templates-typography.css";

const title = "رستوران سورا — میزی آرام‌تر";
const description =
  "یک وب‌سایت نمونه برای رستوران ژاپنی مدرن: منوی کانتر، فهرست ساکه، اطلاعات بازدید و فرم درخواست میز. رستوران خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/sora-restaurant",
  },
  openGraph: {
    title,
    description,
    url: "/sites/sora-restaurant",
    type: "website",
    images: [
      {
        url: "/api/og?site=sora-restaurant",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت رستوران سورا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=sora-restaurant"],
  },
};

export default function SoraRestaurantPage() {
  return <SoraSite />;
}
