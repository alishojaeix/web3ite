import type { Metadata } from "next";
import { AtelierSite } from "@/components/sites/atelier-coffee/AtelierSite";
import "./atelier.css";
import "@/app/sites/templates-typography.css";

const title = "آتلیه قهوه — نوعی آرام‌تر از قهوه";
const description =
  "یک وب‌سایت نمونه برای کافه: قهوهٔ در حال باز، فهرست کوتاه نوشیدنی‌ها، رزرو چشیدن و یک نقشهٔ نمایشی. برندی خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/atelier-coffee",
  },
  openGraph: {
    title,
    description,
    url: "/sites/atelier-coffee",
    type: "website",
    images: [
      {
        url: "/api/og?site=atelier-coffee",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت آتلیه قهوه",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=atelier-coffee"],
  },
};

export default function AtelierCoffeePage() {
  return <AtelierSite />;
}
