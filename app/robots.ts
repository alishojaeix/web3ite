import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/account",
          "/checkout",
          "/age-gate",
          "/sites/aldane-voss",
          "/sites/cigar-atelier",
          "/sites/modern-tobacco",
          "/previews/aldane-voss",
        ],
      },
    ],
    sitemap: "https://web3ite.vercel.app/sitemap.xml",
    host: "https://web3ite.vercel.app",
  };
}
