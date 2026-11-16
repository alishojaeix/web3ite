export const TEMPLATE_CATEGORIES = [
  "cafe",
  "restaurant",
  "ai",
  "security",
  "automotive",
  "tobacco",
] as const;

export type TemplateCategory = (typeof TEMPLATE_CATEGORIES)[number];

/**
 * A scene id is deliberately separate from a template id. Multiple templates
 * may reuse a scene family, and a scene can be swapped without touching the
 * catalog UI. New scenes are registered in `components/3d/scenes/registry.ts`.
 */
export type TemplateSceneId =
  | "noir-cafe"
  | "atelier-coffee"
  | "obsidian-roastery"
  | "maison-dining"
  | "ember-kitchen"
  | "sora-restaurant"
  | "neural-studio"
  | "quantum-systems"
  | "ai-product-launch"
  | "vaultline"
  | "onchain-studio"
  | "cyber-defense"
  | "apex-marque"
  | "velocity-studio"
  | "electric-motion"
  | "heritage-tobacco"
  | "cigar-atelier"
  | "modern-tobacco";

/** Legacy procedural-sculpture vocabulary retained for the hero showroom. */
export type SculptureKind =
  | "rings"
  | "frames"
  | "capsule"
  | "plinth"
  | "drape"
  | "crystal"
  | "lattice"
  | "hull"
  | "knot"
  | "orb"
  | "column"
  | "shard"
  | "cup"
  | "plate"
  | "chip"
  | "shield"
  | "car";

export type TemplateTheme = {
  /** Industry accent used by the 3D materials, UI accents and metadata. */
  accent: string;
  /** Lower-intensity companion accent for lighting and secondary UI. */
  accentSoft: string;
  /** Canvas/atmosphere base for the scene. */
  background: string;
  /** Warm or cool neutral used for typography in the template preview. */
  foreground: string;
  /** Muted copy in the template preview. */
  muted: string;
  /** Scene-only atmospheric tint. */
  atmosphere: string;
};

export type TemplateChapter = {
  label: string;
  title: string;
  body: string;
};

export type TemplateSpec = {
  label: string;
  value: string;
};

/**
 * Content used by the template experience. This is fictional editorial content
 * for a design demo, not a claim about a real business.
 */
export type TemplateContent = {
  nav: string[];
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  note: string;
  chapters: TemplateChapter[];
  specs: TemplateSpec[];
};

export type Template = {
  id: string;
  title: string;
  category: TemplateCategory;
  description: string;
  previewImage: string;
  /** Only set when a real GLB/GLTF has been delivered. */
  modelPath?: string;
  scene: TemplateSceneId;
  theme: TemplateTheme;
  content: TemplateContent;
  price: number;
  features: string[];
  technologies: string[];
  featured?: boolean;
  published?: boolean;
  isDemo: boolean;
  ageRestricted?: boolean;
  /** Required health warning shown with age-restricted template previews. */
  healthWarning?: string;
  /**
   * A self-contained published HTML document. When present the studio renders
   * the real page in an isolated iframe instead of the procedural scene.
   */
  previewUrl?: string;
};

export const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  cafe: "Cafe & Coffee",
  restaurant: "Restaurants",
  ai: "AI & Technology",
  security: "Security & Web3",
  automotive: "Automotive",
  tobacco: "Tobacco & Cigars",
};

export const CATEGORY_DESCRIPTIONS: Record<TemplateCategory, string> = {
  cafe: "Editorial coffee rooms, roasteries and neighbourhood counters.",
  restaurant: "Fine dining, open-fire kitchens and quiet hospitality.",
  ai: "Technical product stories with a sculptural point of view.",
  security: "Infrastructure, custody and onchain products without the noise.",
  automotive: "Showroom-ready launches for marques and mobility studios.",
  tobacco: "Age-gated, regulation-aware presentations for adult products.",
};
