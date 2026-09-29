import { Hero } from "@/components/sections/Hero";
import { StudioStrip } from "@/components/sections/StudioStrip";
import { Waitlist } from "@/components/sections/Waitlist";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { FeaturedTemplates } from "@/components/templates/FeaturedTemplates";
import { getFeaturedTemplates, listTemplates } from "@/lib/templates";

export default async function HomePage() {
  const featured = await getFeaturedTemplates();
  const catalog = featured.length >= 8 ? featured : await listTemplates();

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedTemplates templates={catalog} />
        <StudioStrip />
        <Waitlist />
      </main>
      <SiteFooter />
    </>
  );
}
