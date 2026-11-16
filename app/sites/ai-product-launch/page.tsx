import type { Metadata } from "next";
import { LaunchSite } from "@/components/sites/ai-product-launch/LaunchSite";
import "./launch.css";

const title = "AI Product Launch — Small object. Serious machine.";
const description =
  "A sample cinematic product launch website: a glass compute prism, a labelled specification sheet, a three-beat product story and a working reservation request form. Fictional device built as a Web3ite template.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/ai-product-launch",
  },
  openGraph: {
    title,
    description,
    url: "/sites/ai-product-launch",
    type: "website",
    images: [
      {
        url: "/api/og?site=ai-product-launch",
        width: 1200,
        height: 630,
        alt: "AI Product Launch website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=ai-product-launch"],
  },
};

export default function AiProductLaunchPage() {
  return <LaunchSite />;
}
