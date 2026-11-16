import type { Metadata } from "next";
import { CigarSite } from "@/components/sites/cigar-atelier/CigarSite";
import "./cigar.css";

const title = "Cigar Atelier — Craft, kept quiet.";
const description =
  "Cigar Atelier is a fictional age-gated luxury cigar house demonstration website featuring an indexed collection of four formats, material studies (cedar, brass, paper), and compliance notice — for adults 18+ only.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sites/cigar-atelier" },
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: "/sites/cigar-atelier",
    type: "website",
    images: [
      {
        url: "/api/og?site=cigar-atelier",
        width: 1200,
        height: 630,
        alt: "Cigar Atelier — fictional luxury cigar house preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=cigar-atelier"],
  },
};

export default function CigarAtelierPage() {
  return <CigarSite />;
}