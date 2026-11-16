import type { Template } from "@/types/template";

const HEALTH_WARNING =
  "Tobacco use is harmful to health. This is a fictional design demonstration for adults. Operators are responsible for applicable age restrictions, advertising rules and required health warnings in their market.";

export const cigarAtelier: Template = {
  id: "cigar-atelier",
  title: "Cigar Atelier",
  category: "tobacco",
  description:
    "A dark, age-gated luxury presentation for a fictional cigar house, with material studies and a restrained product gallery.",
  previewImage: "/images/templates/cigar-atelier.jpg",
  scene: "cigar-atelier",
  theme: {
    accent: "#c79a63",
    accentSoft: "#775331",
    background: "#0a0907",
    foreground: "#f2eadf",
    muted: "#a89a87",
    atmosphere: "#1b120b",
  },
  content: {
    nav: ["Collection", "Atelier", "Adults 18+"],
    eyebrow: "Cigar Atelier / Adults 18+",
    headline: "Craft,",
    headlineAccent: "kept quiet.",
    intro:
      "A fictional cigar house presented with archival restraint: material, provenance and a carefully controlled product gallery.",
    primaryCta: "View the collection",
    secondaryCta: "Read the house notes",
    note: "Age-gated demo · fictional products · no sales",
    chapters: [
      {
        label: "01 / The collection",
        title: "A small, indexed catalogue",
        body: "Three fictional formats, each with a plain specification card. Product details are illustrative and do not describe real goods.",
      },
      {
        label: "02 / The materials",
        title: "Cedar, brass and paper",
        body: "The visual language is built from the objects of the atelier: cedar, aged brass, dark leather and printed index cards.",
      },
      {
        label: "03 / The house",
        title: "No health claims",
        body: "The presentation makes no health, cessation or therapeutic claims. Operators must add the warnings and restrictions required in their market.",
      },
    ],
    specs: [
      { label: "Template", value: "Cigar Atelier" },
      { label: "Industry", value: "Tobacco & Cigars" },
      { label: "Access", value: "Age gate required" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 319,
  features: ["18+ age gate", "Material study", "Product gallery", "Regulation notice", "Health warning rail"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: false,
  published: true,
  isDemo: true,
  ageRestricted: true,
  healthWarning: HEALTH_WARNING,
};

export const modernTobacco: Template = {
  id: "modern-tobacco",
  title: "Modern Tobacco Boutique",
  category: "tobacco",
  description:
    "A contemporary, age-gated boutique concept with a minimal metal tin, editorial layout and clearly labelled demonstration content.",
  previewImage: "/images/templates/modern-tobacco.jpg",
  scene: "modern-tobacco",
  theme: {
    accent: "#a7b7ad",
    accentSoft: "#5e7067",
    background: "#090a09",
    foreground: "#f1f3ef",
    muted: "#9ba49e",
    atmosphere: "#141a16",
  },
  content: {
    nav: ["Edit", "Stockists", "Adults 18+"],
    eyebrow: "Modern Tobacco / Adults 18+",
    headline: "A different",
    headlineAccent: "shelf.",
    intro:
      "A fictional boutique concept for adult products, built around a clean metal tin, precise typography and a clearly labelled demo catalogue.",
    primaryCta: "Browse the edit",
    secondaryCta: "Read the notice",
    note: "Age-gated demo · fictional products · no sales",
    chapters: [
      {
        label: "01 / The edit",
        title: "Fewer objects, better presented",
        body: "A compact, fictional catalogue with neutral product cards and no lifestyle targeting. All product copy is illustrative.",
      },
      {
        label: "02 / The shelf",
        title: "Steel and soft light",
        body: "The boutique language is contemporary: brushed metal, low shelving and a controlled neutral palette.",
      },
      {
        label: "03 / The notice",
        title: "Restrictions are part of the design",
        body: "Age confirmation, health warnings and operator responsibility are treated as first-class interface elements, not footnotes.",
      },
    ],
    specs: [
      { label: "Template", value: "Modern Tobacco Boutique" },
      { label: "Industry", value: "Tobacco & Cigars" },
      { label: "Access", value: "Age gate required" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 299,
  features: ["18+ age gate", "Editorial product grid", "Stockist directory", "Health warning rail", "Contemporary layout"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: false,
  published: true,
  isDemo: true,
  ageRestricted: true,
  healthWarning: HEALTH_WARNING,
};
