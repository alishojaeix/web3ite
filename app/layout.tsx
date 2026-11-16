import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

const display = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const editorial = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://web3ite.vercel.app"),
  title: {
    default: "Web3ite — 3D websites you can walk around",
    template: "%s — Web3ite",
  },
  description:
    "A showroom of industry-specific 3D website templates. Inspect the room, make it yours, launch it.",
  keywords: [
    "3D website templates",
    "React Three Fiber",
    "WebGL websites",
    "Next.js templates",
    "website as a service",
  ],
  authors: [{ name: "Web3ite" }],
  openGraph: {
    title: "Web3ite — 3D websites you can walk around",
    description:
      "A showroom of industry-specific 3D website templates. Inspect the room, make it yours, launch it.",
    url: "https://web3ite.vercel.app",
    siteName: "Web3ite",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web3ite — 3D websites you can walk around",
    description:
      "A showroom of industry-specific 3D website templates. Inspect the room, make it yours, launch it.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(display.variable, body.variable, editorial.variable)}
    >
      <body>
        <noscript>
          {/* Motion-driven sections start hidden for their entrance animation.
              Without JavaScript they must still be readable. Keep this selector
              free of quotes: React escapes them inside a raw <style> element. */}
          <style>{`[data-reveal],[style*=opacity]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
