import type { Metadata, Viewport } from "next";
import {
  Inter,
  Instrument_Serif,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { vazirmatn } from "@/lib/fonts/vazirmatn";

const display = Inter({
  subsets: ["latin"],
  variable: "--font-latin-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-latin-body",
  display: "swap",
});

const editorial = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-latin-editorial",
  display: "swap",
});

/**
 * Vazirmatn is the single Persian face for the whole product.
 *
 * The font files are local (`public/font`) and the `next/font/local` call lives
 * in a generated module so the build stays green while a weight is still being
 * added — see `scripts/sync-vazirmatn.mjs`. Latin faces in the stacks below only
 * ever render characters Vazirmatn does not carry, so Persian glyphs can never
 * resolve to another typeface.
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://web3ite.vercel.app"),
  title: {
    default: "Web3ite — وب‌سایت‌های سه‌بعدی که می‌توانید در آن‌ها قدم بزنید",
    template: "%s — Web3ite",
  },
  description:
    "نمایشگاهی از قالب‌های وب‌سایت سه‌بعدی برای صنایع مختلف. اتاق را بررسی کنید، آن را از خودتان کنید و راه‌اندازی کنید.",
  keywords: [
    "قالب وب‌سایت سه‌بعدی",
    "React Three Fiber",
    "وب‌سایت WebGL",
    "قالب Next.js",
    "وب‌سایت به‌عنوان سرویس",
  ],
  authors: [{ name: "Web3ite" }],
  openGraph: {
    title: "Web3ite — وب‌سایت‌های سه‌بعدی که می‌توانید در آن‌ها قدم بزنید",
    description:
      "نمایشگاهی از قالب‌های وب‌سایت سه‌بعدی برای صنایع مختلف. اتاق را بررسی کنید، آن را از خودتان کنید و راه‌اندازی کنید.",
    url: "https://web3ite.vercel.app",
    siteName: "Web3ite",
    type: "website",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web3ite — وب‌سایت‌های سه‌بعدی که می‌توانید در آن‌ها قدم بزنید",
    description:
      "نمایشگاهی از قالب‌های وب‌سایت سه‌بعدی برای صنایع مختلف. اتاق را بررسی کنید، آن را از خودتان کنید و راه‌اندازی کنید.",
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
      lang="fa"
      dir="rtl"
      className={cn(
        vazirmatn.variable,
        display.variable,
        body.variable,
        editorial.variable
      )}
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
