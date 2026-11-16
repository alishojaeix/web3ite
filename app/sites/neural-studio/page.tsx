import type { Metadata } from "next";
import { NeuralSite } from "@/components/sites/neural-studio/NeuralSite";
import "./neural.css";

const title = "Neural Studio — Intelligence, given form";
const description =
  "A sample applied-AI product studio website: capability systems, illustrative engagement work, a visible method and a working project intake form. Fictional London studio built as a Web3ite template.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/neural-studio",
  },
  openGraph: {
    title,
    description,
    url: "/sites/neural-studio",
    type: "website",
    images: [
      {
        url: "/api/og?site=neural-studio",
        width: 1200,
        height: 630,
        alt: "Neural Studio website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=neural-studio"],
  },
};

export default function NeuralStudioPage() {
  return <NeuralSite />;
}
