import type { Metadata } from "next";
import { EmberSite } from "@/components/sites/ember-kitchen/EmberSite";
import "./ember.css";
import "@/app/sites/templates-typography.css";

const title = "امبر کیچن — پخته‌شده با آتش";
const description =
  "یک وب‌سایت نمونه برای رستوران آتش‌باز: اجاق هیزمی، منوی فصلی در پاس، هجده صندلی کانتر و فرم درخواست رزرو. رستوران خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/ember-kitchen",
  },
  openGraph: {
    title,
    description,
    url: "/sites/ember-kitchen",
    type: "website",
    images: [
      {
        url: "/api/og?site=ember-kitchen",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت امبر کیچن",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=ember-kitchen"],
  },
};

export default function EmberKitchenPage() {
  return <EmberSite />;
}
