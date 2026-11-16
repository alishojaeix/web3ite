import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Template } from "@/types/template";
import { TemplateCard } from "./TemplateCard";

export function FeaturedTemplates({
  templates,
  total = templates.length,
}: {
  templates: Template[];
  total?: number;
}) {
  const visible = templates.slice(0, 12);

  return (
    <section id="templates" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <div>
            <p className="eyebrow flex items-center gap-3 text-[#8a847c]">
              <span className="h-px w-8 bg-[#d4af7a]/60" />
              Selected rooms
            </p>
            <h2 className="display-face mt-6 max-w-[13ch] text-balance text-[clamp(2.7rem,5.4vw,5rem)] leading-[0.95] text-[#f6f1ea]">
              A catalog you can
              <span className="editorial-face ml-3 italic text-[#e4c69c]">inspect.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:pb-1">
            <p className="max-w-md text-[15px] leading-relaxed text-[#a7a198]">
              Each entry is a complete, independent website with its own identity,
              content and imagery. Open the live website, or step into the studio to
              inspect its 3D scene.
            </p>
            <Link
              href="/templates"
              className="group inline-flex w-fit items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#d4af7a] transition-colors hover:text-[#f0d9a8]"
            >
              View all {total} templates
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visible.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
