import type { Metadata } from "next";
import { QuantumSite } from "@/components/sites/quantum-systems/QuantumSite";
import "./quantum.css";

const title = "Quantum Systems — Measured in microns";
const description =
  "A sample precision-compute company website: an observable platform, a documented method, qualitative specifications, an illustrative research index and a working technical brief form. Fictional London company built as a Web3ite template.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/quantum-systems",
  },
  openGraph: {
    title,
    description,
    url: "/sites/quantum-systems",
    type: "website",
    images: [
      {
        url: "/api/og?site=quantum-systems",
        width: 1200,
        height: 630,
        alt: "Quantum Systems website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=quantum-systems"],
  },
};

export default function QuantumSystemsPage() {
  return <QuantumSite />;
}
