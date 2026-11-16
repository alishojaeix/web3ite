import type { Metadata } from "next";
import { VaultSite } from "@/components/sites/vaultline/VaultSite";
import "./vault.css";

const title = "Vaultline — Security you can inspect.";
const description =
  "A sample custody-infrastructure website: layered vault artwork, documented controls, an illustrative dated audit record and a direct disclosure request form. Fictional platform built as a Web3ite template.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/vaultline",
  },
  openGraph: {
    title,
    description,
    url: "/sites/vaultline",
    type: "website",
    images: [
      {
        url: "/api/og?site=vaultline",
        width: 1200,
        height: 630,
        alt: "Vaultline website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=vaultline"],
  },
};

export default function VaultlinePage() {
  return <VaultSite />;
}
