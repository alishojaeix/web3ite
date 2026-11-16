export type SiteMotif =
  | "cup"
  | "pour"
  | "canister"
  | "cloche"
  | "ember"
  | "bowl"
  | "network"
  | "rings"
  | "prism"
  | "vault"
  | "blocks"
  | "shield"
  | "car"
  | "aero"
  | "pod"
  | "heritage"
  | "cigar"
  | "tin";

export type SiteLayoutKey =
  | "noir"
  | "atelier"
  | "obsidian"
  | "maison"
  | "ember"
  | "sora"
  | "neural"
  | "quantum"
  | "launch"
  | "vaultline"
  | "onchain"
  | "cyber"
  | "apex"
  | "velocity"
  | "electric"
  | "aldane"
  | "cigar"
  | "modern";

export type SiteHeroStyle = "split" | "center" | "full";
export type SiteSectionKey = "story" | "showcase" | "materials" | "specs" | "contact";

export type MenuGroup = {
  title: string;
  note?: string;
  items: { name: string; description: string; price?: string }[];
};

export type FeatureItem = {
  index: string;
  title: string;
  body: string;
};

export type TimelineItem = {
  step: string;
  title: string;
  body: string;
};

export type CollectionItem = {
  index: string;
  name: string;
  note: string;
  tags: string[];
};

export type SpecStat = {
  label: string;
  value: string;
  note?: string;
};

export type SpecRow = {
  label: string;
  value: string;
};

export type SiteShowcase =
  | { kind: "menu"; groups: MenuGroup[] }
  | { kind: "features"; items: FeatureItem[] }
  | { kind: "timeline"; items: TimelineItem[] }
  | { kind: "collection"; items: CollectionItem[] }
  | { kind: "specs"; stats: SpecStat[]; rows: SpecRow[] };

export type SiteLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  motif: SiteMotif;
  layout: SiteLayoutKey;
  hero: SiteHeroStyle;
  heroSide: "left" | "right";
  nav: SiteLink[];
  navCta: SiteLink;
  heroCta: { primary: string; secondary: string };
  order: SiteSectionKey[];
  labels: Record<SiteSectionKey, string>;
  storyTitle: string;
  showcaseTitle: string;
  showcaseIntro: string;
  showcase: SiteShowcase;
  materials: { label: string; note: string }[];
  heroMeta: string[];
  specsTitle: string;
  specsExtra: SpecRow[];
  cta: { title: string; body: string };
  contact: {
    email: string;
    phone: string;
    address: string;
    hours: string;
    note: string;
    ctaLabel: string;
  };
  footerNote: string;
};
