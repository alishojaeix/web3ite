import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { TemplateGrid } from "@/components/templates/TemplateGrid";
import { listTemplates } from "@/lib/templates";
import { TEMPLATE_CATEGORIES, type TemplateCategory } from "@/types/template";

export const metadata: Metadata = {
  title: "Template catalog",
  description:
    "Eighteen industry-specific website templates, each with its own visual identity, live website and 3D scene. Cafés, restaurants, AI studios, security products, automotive and adult-only tobacco demonstrations.",
  alternates: { canonical: "/templates" },
  openGraph: {
    title: "Web3ite template catalog",
    description:
      "Eighteen independent website templates across six industries. Open the live website or inspect the 3D studio scene.",
    url: "/templates",
    images: [{ url: "/api/og?site=noir-cafe", width: 1200, height: 630 }],
  },
};

type PageProps = {
  searchParams: { category?: string };
};

export default async function TemplatesPage({ searchParams }: PageProps) {
  const templates = await listTemplates();

  // Deep links from the industry rail and footer preselect a category.
  const requested = searchParams.category;
  const initialCategory: TemplateCategory | "all" =
    requested && (TEMPLATE_CATEGORIES as readonly string[]).includes(requested)
      ? (requested as TemplateCategory)
      : "all";

  return (
    <>
      <SiteHeader />
      <main className="px-6 pb-24 pt-32 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="font-display text-[48px] leading-[1.02] tracking-[-0.04em] text-[#f6f1ea] md:text-[64px]">
            The floor
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#b8b3aa]">
            {new Set(templates.map((template) => template.category)).size}{" "}
            industries, {templates.length} rooms. Every entry is a real WebGL
            scene with its own camera, light and materials — open any one to
            walk around it.
          </p>
          <div className="mt-12">
            <TemplateGrid
              key={initialCategory}
              templates={templates}
              initialCategory={initialCategory}
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
