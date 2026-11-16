import type { Metadata } from "next";
import { NoirCafeSite } from "@/components/sites/noir-cafe/NoirCafeSite";

export const metadata: Metadata = {
  title: "Noir Café — Coffee, after dark",
  description:
    "A sample independent café website concept inspired by a warm, late-hours coffee lounge.",
  alternates: {
    canonical: "/sites/noir-cafe",
  },
  openGraph: {
    title: "Noir Café — Coffee, after dark",
    description:
      "A sample independent café website concept inspired by a warm, late-hours coffee lounge.",
    url: "/sites/noir-cafe",
    images: [
      {
        url: "/images/sites/noir-cafe/hero.webp",
        width: 1536,
        height: 1024,
        alt: "A warmly lit coffee lounge with leather seating and brass pendants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noir Café — Coffee, after dark",
    description:
      "A sample independent café website concept inspired by a warm, late-hours coffee lounge.",
    images: ["/images/sites/noir-cafe/hero.webp"],
  },
};

export default function NoirCafePage() {
  return <NoirCafeSite />;
}
