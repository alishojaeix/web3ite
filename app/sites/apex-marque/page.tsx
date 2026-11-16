import type { Metadata } from "next";
import { ApexSite } from "@/components/sites/apex-marque/ApexSite";
import "./apex.css";

const title = "Apex Marque — The long way home.";
const description =
  "A sample grand-tourer marque website: an editorial car study under one key light, an interactive trim selector, a plain illustrative specification, three materials and a build-request form. Fictional marque built as a Web3ite template.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/apex-marque",
  },
  openGraph: {
    title,
    description,
    url: "/sites/apex-marque",
    type: "website",
    images: [
      {
        url: "/api/og?site=apex-marque",
        width: 1200,
        height: 630,
        alt: "Apex Marque website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=apex-marque"],
  },
};

export default function ApexMarquePage() {
  return <ApexSite />;
}
