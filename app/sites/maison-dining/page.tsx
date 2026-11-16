import type { Metadata } from "next";
import { MaisonSite } from "@/components/sites/maison-dining/MaisonSite";
import "./maison.css";

const title = "Maison Dining — A table set for the evening";
const description =
  "A sample fine-dining website: one seasonal tasting menu, twelve seats around an open pass, a room plan, an evening timeline and a working reservation request form. Fictional Paris venue built as a Web3ite template.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/maison-dining",
  },
  openGraph: {
    title,
    description,
    url: "/sites/maison-dining",
    type: "website",
    images: [
      {
        url: "/api/og?site=maison-dining",
        width: 1200,
        height: 630,
        alt: "Maison Dining website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=maison-dining"],
  },
};

export default function MaisonDiningPage() {
  return <MaisonSite />;
}
