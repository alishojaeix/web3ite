import { Hero } from "@/components/sections/Hero";
import { IndustryRail } from "@/components/sections/IndustryRail";
import { StudioStrip } from "@/components/sections/StudioStrip";
import { Waitlist } from "@/components/sections/Waitlist";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { FeaturedTemplates } from "@/components/templates/FeaturedTemplates";
import { getFeaturedTemplates, listTemplates } from "@/lib/templates";
import type { Template } from "@/types/template";

/**
 * Homepage curation: two rooms per industry. This is deliberately a selection,
 * not the whole catalog — every other template remains one click away.
 */
const HOMEPAGE_SELECTION = [
  "noir-cafe",
  "atelier-coffee",
  "maison-dining",
  "ember-kitchen",
  "neural-studio",
  "ai-product-launch",
  "vaultline",
  "cyber-defense",
  "apex-marque",
  "electric-motion",
  "aldane-voss",
  "cigar-atelier",
];

/** One room per industry for the showroom rail; adult-only products are excluded. */
function pickShowroom(catalog: Template[]): Template[] {
  const seen = new Set<string>();
  const showroom: Template[] = [];
  for (const template of catalog) {
    if (template.ageRestricted) continue;
    if (seen.has(template.category)) continue;
    seen.add(template.category);
    showroom.push(template);
  }
  return showroom;
}

function pickHomepage(catalog: Template[], featured: Template[]): Template[] {
  const byId = new Map(catalog.map((template) => [template.id, template]));
  const curated = HOMEPAGE_SELECTION.map((id) => byId.get(id)).filter(
    (template): template is Template => Boolean(template)
  );
  const curatedIds = new Set(curated.map((template) => template.id));
  const fallback = [...featured, ...catalog].filter(
    (template) => !curatedIds.has(template.id)
  );
  return [...curated, ...fallback].slice(0, 12);
}

export default async function HomePage() {
  const catalog = await listTemplates();
  const featured = await getFeaturedTemplates();
  const homepage = pickHomepage(catalog, featured);
  const showroom = pickShowroom(homepage);
  const studioTemplate = showroom[0] ?? catalog[0];
  const categoryCount = new Set(catalog.map((template) => template.category)).size;

  return (
    <>
      <SiteHeader />
      <main>
        <Hero
          templates={showroom}
          templateCount={catalog.length}
          categoryCount={categoryCount}
        />
        <FeaturedTemplates templates={homepage} total={catalog.length} />
        <IndustryRail templates={catalog} />
        {studioTemplate ? <StudioStrip template={studioTemplate} /> : null}
        <Waitlist />
      </main>
      <SiteFooter />
    </>
  );
}
