import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { TemplateGrid } from "@/components/templates/TemplateGrid";
import { listTemplates } from "@/lib/templates";

export default async function TemplatesPage() {
  const templates = await listTemplates();

  return (
    <>
      <SiteHeader />
      <main className="px-6 pb-24 pt-32 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="font-display text-[48px] leading-[1.02] tracking-[-0.04em] text-[#f6f1ea] md:text-[64px]">
            The floor
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#b8b3aa]">
            Twenty-four demo bodies across eight rooms. Replace a GLB in public/models and the card keeps its shape.
          </p>
          <div className="mt-12">
            <TemplateGrid templates={templates} />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
