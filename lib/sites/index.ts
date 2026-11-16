import { siteConfigs } from "./data";
import type { SiteConfig } from "./types";

export { siteConfigs };
export { siteSkins, CATALOGUE_SITES, AGE_GATED_PREFIXES } from "./skins";
export type { SiteSkin } from "./skins";
export type {
  CollectionItem,
  FeatureItem,
  MenuGroup,
  SiteConfig,
  SiteLayoutKey,
  SiteMotif,
  SiteSectionKey,
  SiteShowcase,
  SpecRow,
  SpecStat,
  TimelineItem,
} from "./types";

export function getSiteConfig(id: string): SiteConfig | undefined {
  return siteConfigs[id];
}

export function hasSiteConfig(id: string): boolean {
  return Boolean(siteConfigs[id]);
}
