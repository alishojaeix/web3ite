import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSiteConfig } from "@/lib/sites";
import { getTemplateById, listTemplates } from "@/lib/templates";
import { TemplateWebsite } from "@/components/sites/engine/TemplateWebsite";
import "@/app/sites/templates-typography.css";

type PageProps = {
  params: { id: string };
};

/** Templates with a dedicated, hand-built website keep their own route. */
const RESERVED = new Set([
  "noir-cafe",
  "atelier-coffee",
  "obsidian-roastery",
  "maison-dining",
  "ember-kitchen",
  "sora-restaurant",
  "neural-studio",
  "quantum-systems",
  "ai-product-launch",
  "vaultline",
  "onchain-studio",
  "cyber-defense",
  "apex-marque",
  "velocity-studio",
  "electric-motion",
  "cigar-atelier",
  "modern-tobacco",
]);

export const dynamicParams = false;

export async function generateStaticParams() {
  const templates = await listTemplates();
  return templates
    .filter((template) => !RESERVED.has(template.id))
    .filter((template) => getSiteConfig(template.id))
    .map((template) => ({ id: template.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const template = await getTemplateById(params.id);
  const config = getSiteConfig(params.id);
  if (!template || !config) return {};

  const title = `${template.title} — ${template.content.headline} ${template.content.headlineAccent}`;
  const description = `${template.content.intro} وب‌سایتی نمایشی و خیالی که با قالب ${template.title} از Web3ite ساخته شده است.`;
  const ageRestricted = Boolean(template.ageRestricted);

  return {
    title,
    description,
    alternates: { canonical: `/sites/${template.id}` },
    robots: ageRestricted ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url: `/sites/${template.id}`,
      type: "website",
      images: [
        {
          url: `/api/og?site=${template.id}`,
          width: 1200,
          height: 630,
          alt: `پیش‌نمایش وب‌سایت ${template.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og?site=${template.id}`],
    },
  };
}

export default async function TemplateSitePage({ params }: PageProps) {
  const template = await getTemplateById(params.id);
  const config = getSiteConfig(params.id);
  if (!template || !config) notFound();

  const catalogueHref =
    template.id === "aldane-voss" ? "/previews/aldane-voss/" : undefined;

  return (
    <TemplateWebsite
      template={template}
      config={config}
      catalogueHref={catalogueHref}
    />
  );
}
