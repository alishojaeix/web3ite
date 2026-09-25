import { Hero } from "@/components/home/Hero";
import { StudioStrip } from "@/components/home/StudioStrip";
import { Waitlist } from "@/components/home/Waitlist";
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
