import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTemplateById, listTemplates } from "@/lib/templates";
import { CATEGORY_LABELS } from "@/types/template";
import { TemplateStudio } from "@/components/templates/TemplateStudio";
import { getSessionUser } from "@/lib/server/auth";
import { hasPurchased } from "@/lib/server/purchases";

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

  const title = `${template.title} — قالب ${CATEGORY_LABELS[template.category]}`;
  const description = `${template.description} وب‌سایت نمایشی زنده را باز کنید، صحنهٔ سه‌بعدی را بررسی کنید و محتویات قالب را ببینید.`;

  return {
    title,
    description,
    alternates: { canonical: `/templates/${template.id}` },
    robots: template.ageRestricted
      ? { index: false, follow: false }
      : undefined,
    openGraph: {
      title,
      description,
      url: `/templates/${template.id}`,
      images: [
        {
          url: `/api/og?site=${template.id}`,
          width: 1200,
          height: 630,
          alt: `پیش‌نمایش قالب ${template.title}`,
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

  // Ownership is resolved server-side; it only changes the purchase CTA from
  // "buy" to an informational state. It never grants access on its own.
  const user = await getSessionUser();
  const owned = user ? await hasPurchased(user.id, template.id).catch(() => false) : false;

  return (
    <TemplateStudio
      template={template}
      initialView={searchParams.view}
      owned={owned}
    />
  );
}
