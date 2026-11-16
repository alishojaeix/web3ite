import type { Metadata } from "next";
import { CyberSite } from "@/components/sites/cyber-defense/CyberSite";
import "./cyber.css";

const title = "Cyber Defense — Prepared before impact.";
const description =
  "A sample managed-response website: a faceted shield and scan rings, a four-stage response model, illustrative response clock, three evidence artefacts and a response brief form. Fictional practice built as a Web3ite template.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/cyber-defense",
  },
  openGraph: {
    title,
    description,
    url: "/sites/cyber-defense",
    type: "website",
    images: [
      {
        url: "/api/og?site=cyber-defense",
        width: 1200,
        height: 630,
        alt: "Cyber Defense website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=cyber-defense"],
  },
};

export default function CyberDefensePage() {
  return <CyberSite />;
}
