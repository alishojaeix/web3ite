import type { Metadata } from "next";
import { ElectricSite } from "@/components/sites/electric-motion/ElectricSite";
import "./electric.css";

const title = "Electric Motion — Forward, quietly.";
const description =
  "Electric Motion is a fictional urban electric mobility concept website featuring a compact four-seat city pod, a semicircular charging arch, an interactive city trip & charge explainer, and a pilot hub directory.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sites/electric-motion" },
  openGraph: {
    title,
    description,
    url: "/sites/electric-motion",
    type: "website",
    images: [
      {
        url: "/api/og?site=electric-motion",
        width: 1200,
        height: 630,
        alt: "Electric Motion — urban electric mobility preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=electric-motion"],
  },
};

export default function ElectricMotionPage() {
  return <ElectricSite />;
}
