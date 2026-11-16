import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTemplateById, listTemplates } from "@/lib/templates";
import { CATEGORY_LABELS } from "@/types/template";
import { TemplateStudio } from "@/components/templates/TemplateStudio";

type PageProps = {
  params: { id: string };
  searchParams: { view?: string };
};

export async function generateStaticParams() {
  const templates = await listTemplates();
  return templates.map((template) => ({ id: template.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const template = await getTemplateById(params.id);
  if (!template) return {};

  const title = `${template.title} — ${CATEGORY_LABELS[template.category]} template`;
  const description = `${template.description} Open the live demo website, inspect the 3D scene and see what is included.`;

  return {
    title,
    description,
    alternates: { canonical: `/templates/${template.id}` },
    openGraph: {
      title,
      description,
      url: `/templates/${template.id}`,
      images: [
        {
          url: `/api/og?site=${template.id}`,
          width: 1200,
          height: 630,
          alt: `${template.title} template`,
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

export default async function TemplatePage({ params, searchParams }: PageProps) {
  const template = await getTemplateById(params.id);
  if (!template) notFound();

  return <TemplateStudio template={template} initialView={searchParams.view} />;
}
