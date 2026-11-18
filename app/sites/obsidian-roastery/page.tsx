import type { Metadata } from "next";
import { ObsidianSite } from "@/components/sites/obsidian-roastery/ObsidianSite";
import "./obsidian.css";
import "@/app/sites/templates-typography.css";

const title = "رُستری ابسیدین — بوداده در تاریکی";
const description =
  "یک وب‌سایت نمونه برای رُستری تخصصی قهوه: سه قهوهٔ در حال عرضه، پروفایل بودادن، قوطی قابل استفادهٔ مجدد، اشتراک و صفحهٔ بازدید. رُستری خیالی، ساخته‌شده به‌عنوان قالب Web3ite.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/obsidian-roastery",
  },
  openGraph: {
    title,
    description,
    url: "/sites/obsidian-roastery",
    type: "website",
    images: [
      {
        url: "/api/og?site=obsidian-roastery",
        width: 1200,
        height: 630,
        alt: "پیش‌نمایش وب‌سایت رُستری ابسیدین",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=obsidian-roastery"],
  },
};

export default function ObsidianRoasteryPage() {
  return <ObsidianSite />;
}
