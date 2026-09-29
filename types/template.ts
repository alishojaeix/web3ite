export const TEMPLATE_CATEGORIES = [
  "cafe",
  "restaurant",
  "ai",
  "security",
  "automotive",
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
  | "cup";

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
};

export const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  cafe: "Cafe",
  restaurant: "Restaurant",
  ai: "AI Services",
  security: "Security & Crypto",
  automotive: "Automotive",
};
