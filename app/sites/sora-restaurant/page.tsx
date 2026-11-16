import type { Metadata } from "next";
import { SoraSite } from "@/components/sites/sora-restaurant/SoraSite";
import "./sora.css";

const title = "Sora Restaurant — A quieter table";
const description =
  "A sample modern Japanese restaurant website: seasonal small plates, a counter menu, one clay-pot rice, sake by the glass and a working table request form. Fictional London dining room built as a Web3ite template.";

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
        alt: "Sora Restaurant website preview",
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
