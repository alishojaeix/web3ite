import { notFound } from "next/navigation";
import { getTemplateById, listTemplates } from "@/lib/templates";
import { TemplateStudio } from "@/components/templates/TemplateStudio";

type PageProps = {
  params: { id: string };
  searchParams: { view?: string };
};

export async function generateStaticParams() {
  const templates = await listTemplates();
  return templates.map((template) => ({ id: template.id }));
}

export default async function TemplatePage({ params, searchParams }: PageProps) {
  const template = await getTemplateById(params.id);
  if (!template) notFound();

  return <TemplateStudio template={template} initialView={searchParams.view} />;
}
