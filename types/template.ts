export const TEMPLATE_CATEGORIES = [
  "agency",
  "portfolio",
  "product",
  "architecture",
  "fashion",
  "gaming",
  "ai",
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
  | "shard";

export type Template = {
  id: string;
  title: string;
  category: TemplateCategory;
  description: string;
  previewImage: string;
  model: string;
  price: number;
  tags: string[];
  featured?: boolean;
  published?: boolean;
  sculpture: SculptureKind;
  accent: string;
};

export const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  agency: "Agency",
  portfolio: "Portfolio",
  product: "Product",
  architecture: "Architecture",
  fashion: "Fashion",
  gaming: "Gaming",
  ai: "AI",
  automotive: "Automotive",
};
