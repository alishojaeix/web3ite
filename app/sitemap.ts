import type { MetadataRoute } from "next";
import { listTemplates } from "@/lib/templates";

const BASE = "https://web3ite.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const templates = await listTemplates();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/templates`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const templateRoutes: MetadataRoute.Sitemap = templates.map((template) => ({
    url: `${BASE}/templates/${template.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: template.featured ? 0.8 : 0.6,
  }));

  // Age-restricted websites are intentionally excluded from discovery.
  const websiteRoutes: MetadataRoute.Sitemap = templates
    .filter((template) => !template.ageRestricted)
    .map((template) => ({
      url: `${BASE}/sites/${template.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...templateRoutes, ...websiteRoutes];
}
