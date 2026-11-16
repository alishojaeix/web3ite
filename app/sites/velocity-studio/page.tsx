import type { Metadata } from "next";
import { VelocitySite } from "@/components/sites/velocity-studio/VelocitySite";
import "./velocity.css";

const title = "Velocity Studio — Shape in motion.";
const description =
  "A sample performance-studio website: a layered aero contour study, an interactive pressure plan with three aero modes, a launch-film rail, an illustrative specification and a launch-request form. Fictional studio built as a Web3ite template.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sites/velocity-studio",
  },
  openGraph: {
    title,
    description,
    url: "/sites/velocity-studio",
    type: "website",
    images: [
      {
        url: "/api/og?site=velocity-studio",
        width: 1200,
        height: 630,
        alt: "Velocity Studio website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/api/og?site=velocity-studio"],
  },
};

export default function VelocityStudioPage() {
  return <VelocitySite />;
}
