import type { Metadata } from "next";
import { EmberSite } from "@/components/sites/ember-kitchen/EmberSite";
import "./ember.css";

const title = "Ember Kitchen — Cooked by fire";
const description =
  "A sample live-fire restaurant website: one oak hearth, eighteen counter seats, a menu written at the pass, an interactive hearth section, the room and a working booking request form. Fictional London kitchen built as a Web3ite template.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/ember-kitchen",
  },
  openGraph: {
    title,
    description,
    url: "/sites/ember-kitchen",
    type: "website",
    images: [
      {
        url: "/api/og?site=ember-kitchen",
        width: 1200,
        height: 630,
        alt: "Ember Kitchen website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=ember-kitchen"],
  },
};

export default function EmberKitchenPage() {
  return <EmberSite />;
}
