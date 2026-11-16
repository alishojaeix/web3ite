import type { Metadata } from "next";
import { OnchainSite } from "@/components/sites/onchain-studio/OnchainSite";
import "./onchain.css";

const title = "Onchain Studio — Onchain, made legible.";
const description =
  "A sample Web3 product-studio website: an isometric ledger sculpture, capability index, three illustrative case studies, a public working file and a project brief form. Fictional studio built as a Web3ite template.";

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
        alt: "Onchain Studio website preview",
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
