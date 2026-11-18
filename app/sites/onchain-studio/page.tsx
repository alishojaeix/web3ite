import type { Metadata } from "next";
import { OnchainSite } from "@/components/sites/onchain-studio/OnchainSite";
import "./onchain.css";
import "@/app/sites/templates-typography.css";

const title = "آن‌چین استودیو — آن‌چین، خوانا شده";
const description =
  "یک وب‌سایت نمونه برای استودیوی محصول آن‌چین: سه مسئله و سه رابط، روش کاری، یادداشت نمونه و فرم بریف. استودیوی خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/onchain-studio",
  },
  openGraph: {
    title,
    description,
    url: "/sites/onchain-studio",
    type: "website",
    images: [
      {
        url: "/api/og?site=onchain-studio",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت آن‌چین استودیو",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=onchain-studio"],
  },
};

export default function OnchainStudioPage() {
  return <OnchainSite />;
}
