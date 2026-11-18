import type { Metadata } from "next";
import { VelocitySite } from "@/components/sites/velocity-studio/VelocitySite";
import "./velocity.css";
import "@/app/sites/templates-typography.css";

const title = "استودیوی ویژوال — فرم در حرکت";
const description =
  "یک وب‌سایت نمونه برای استودیوی طراحی صنعتی: مطالعهٔ فرم در حرکت، برگهٔ تونل باد، متریال‌ها و فرم بریف. استودیوی خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/velocity-studio",
  },
  openGraph: {
    title,
    description,
    url: "/sites/velocity-studio",
    type: "website",
    images: [
      {
        url: "/api/og?site=velocity-studio",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت استودیوی ویژوال",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=velocity-studio"],
  },
};

export default function VelocityStudioPage() {
  return <VelocitySite />;
}
