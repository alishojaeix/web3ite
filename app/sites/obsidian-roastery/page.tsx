import type { Metadata } from "next";
import { ObsidianSite } from "@/components/sites/obsidian-roastery/ObsidianSite";
import "./obsidian.css";

const title = "Obsidian Roastery — Roasted in the dark";
const description =
  "A sample small-batch roastery website: three coffees, one roast day, a reusable canister, an optional 3D canister viewer and a working subscription configurator. Fictional venue built as a Web3ite template.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/obsidian-roastery",
  },
  openGraph: {
    title,
    description,
    url: "/sites/obsidian-roastery",
    type: "website",
    images: [
      {
        url: "/api/og?site=obsidian-roastery",
        width: 1200,
        height: 630,
        alt: "Obsidian Roastery website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=obsidian-roastery"],
  },
};

export default function ObsidianRoasteryPage() {
  return <ObsidianSite />;
}
