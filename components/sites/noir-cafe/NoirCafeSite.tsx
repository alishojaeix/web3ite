import type { CSSProperties } from "react";
import { CafeNavigation } from "./CafeNavigation";
import { CafeHero } from "./CafeHero";
import { BrandStory } from "./BrandStory";
import { CoffeeMenu } from "./CoffeeMenu";
import { FeaturedProducts } from "./FeaturedProducts";
import { CafeGallery } from "./CafeGallery";
import { NoirCafe3DFeature } from "./NoirCafe3DFeature";
import { VisitContact } from "./VisitContact";
import { CafeFooter } from "./CafeFooter";
import { noirCafeTheme } from "./theme";

export function NoirCafeSite() {
  const style = {
    "--nc-ink": noirCafeTheme.colors.ink,
    "--nc-wood": noirCafeTheme.colors.wood,
    "--nc-panel": noirCafeTheme.colors.panel,
    "--nc-brass": noirCafeTheme.colors.brass,
    "--nc-cream": noirCafeTheme.colors.cream,
    "--nc-paper": noirCafeTheme.colors.paper,
    "--nc-muted": noirCafeTheme.colors.muted,
    "--nc-line": noirCafeTheme.colors.line,
  } as CSSProperties;

  return (
    <div className="noir-cafe-site min-h-screen overflow-x-clip bg-[var(--nc-ink)] text-[var(--nc-cream)]" style={style} dir="rtl">
      <CafeNavigation />
      <main lang="fa" dir="rtl">
        <CafeHero />
        <BrandStory />
        <CoffeeMenu />
        <FeaturedProducts />
        <NoirCafe3DFeature />
        <CafeGallery />
        <VisitContact />
      </main>
      <CafeFooter />
    </div>
  );
}
