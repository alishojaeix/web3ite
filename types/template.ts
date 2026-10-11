export const TEMPLATE_CATEGORIES = [
  "cafe",
  "restaurant",
  "ai",
  "security",
  "automotive",
  "catalogue",
] as const;

export type TemplateCategory = (typeof TEMPLATE_CATEGORIES)[number];

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

export type Template = {
  id: string;
  title: string;
  category: TemplateCategory;
  description: string;
  previewImage: string;
  model: string;
  price: number;
  features: string[];
  technologies: string[];
  featured?: boolean;
  published?: boolean;
  sculpture: SculptureKind;
  accent: string;
  /**
   * Path to a self-contained static HTML document that is the real published
   * site, served verbatim from `public`. When set, the studio renders it in an
   * isolated iframe instead of the procedural 3D sculpture.
   */
  previewUrl?: string;
};

export const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  cafe: "Cafe",
  restaurant: "Restaurant",
  ai: "AI Services",
  security: "Security & Crypto",
  automotive: "Automotive",
  catalogue: "Catalogue",
};
