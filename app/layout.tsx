import type { Metadata, Viewport } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Web3ite — Create, customize and launch premium 3D websites",
  description:
    "A showroom of finished 3D website templates. Inspect the object, put your brand on it, go live.",
};

export const viewport: Viewport = {
  themeColor: "#07080b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(display.variable, body.variable, "font-sans")}
    >
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}