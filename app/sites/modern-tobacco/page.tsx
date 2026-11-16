import type { Metadata } from "next";
import { ModernSite } from "@/components/sites/modern-tobacco/ModernSite";
import "./modern.css";

const title = "Modern Tobacco Boutique — A different shelf.";
const description =
  "Modern Tobacco Boutique is a fictional age-gated contemporary tobacco boutique demonstration website featuring a three-object edit (brushed steel tin, blend set, display shelf), material studies, and compliance notice — for adults 18+ only.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sites/modern-tobacco" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: "/sites/modern-tobacco",
    type: "website",
    images: [
      {
        url: "/api/og?site=modern-tobacco",
        width: 1200,
        height: 630,
        alt: "Modern Tobacco Boutique — fictional contemporary tobacco boutique preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=modern-tobacco"],
  },
};

export default function ModernTobaccoPage() {
  return <ModernSite />;
}