import type { Metadata } from "next";
import { AtelierSite } from "@/components/sites/atelier-coffee/AtelierSite";
import "./atelier.css";

const title = "Atelier Coffee — A quieter kind of coffee";
const description =
  "A sample independent coffee-studio website: a twelve-seat counter, a rotating filter list, a brew timer, the room, journal notes and a tasting enquiry form. Fictional venue built as a Web3ite template.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/atelier-coffee",
  },
  openGraph: {
    title,
    description,
    url: "/sites/atelier-coffee",
    type: "website",
    images: [
      {
        url: "/api/og?site=atelier-coffee",
        width: 1200,
        height: 630,
        alt: "Atelier Coffee website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=atelier-coffee"],
  },
};

export default function AtelierCoffeePage() {
  return <AtelierSite />;
}
