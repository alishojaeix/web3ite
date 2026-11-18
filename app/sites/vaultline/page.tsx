import type { Metadata } from "next";
import { VaultSite } from "@/components/sites/vaultline/VaultSite";
import "./vault.css";
import "@/app/sites/templates-typography.css";

const title = "والت‌لاین — امنیتی که می‌توانید بازبینی کنید";
const description =
  "یک وب‌سایت نمونه برای زیرساخت نگه‌داری داده: مدل حضانت لایه‌ای، مقایسهٔ طرح‌ها، گزارش بازبینی و فرم درخواست دسترسی. شرکت خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/vaultline",
  },
  openGraph: {
    title,
    description,
    url: "/sites/vaultline",
    type: "website",
    images: [
      {
        url: "/api/og?site=vaultline",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت والت‌لاین",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=vaultline"],
  },
};

export default function VaultlinePage() {
  return <VaultSite />;
}
