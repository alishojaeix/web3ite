import type { Metadata } from "next";
import { NoirCafeSite } from "@/components/sites/noir-cafe/NoirCafeSite";
import "@/app/sites/templates-typography.css";

export const metadata: Metadata = {
  title: "نوآر کافه — قهوه، پس از تاریکی",
  description:
    "یک مفهوم وب‌سایت کافهٔ مستقل نمونه، الهام‌گرفته از سالنی گرم و دیروقت برای قهوه.",
  alternates: {
    canonical: "/sites/noir-cafe",
  },
  openGraph: {
    title: "نوآر کافه — قهوه، پس از تاریکی",
    description:
      "یک مفهوم وب‌سایت کافهٔ مستقل نمونه، الهام‌گرفته از سالنی گرم و دیروقت برای قهوه.",
    url: "/sites/noir-cafe",
    images: [
      {
        url: "/images/sites/noir-cafe/hero.webp",
        width: 1536,
        height: 1024,
        alt: "سالن قهوه‌ای با نور گرم، صندلی‌های چرمی و آویزهای برنجی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "نوآر کافه — قهوه، پس از تاریکی",
    description:
      "یک مفهوم وب‌سایت کافهٔ مستقل نمونه، الهام‌گرفته از سالنی گرم و دیروقت برای قهوه.",
    images: ["/images/sites/noir-cafe/hero.webp"],
  },
};

export default function NoirCafePage() {
  return <NoirCafeSite />;
}
