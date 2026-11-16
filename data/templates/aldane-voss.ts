import type { Template } from "@/types/template";

/**
 * Aldane & Voss is a self-contained static HTML publication for a fictional
 * tobacco house. The studio renders it in an isolated iframe; the procedural
 * heritage scene is used for the catalogue card.
 *
 * Age gate and health-warning requirements are enforced by the Web3ite shell
 * and by the published document. No regulatory approval is claimed.
 */
export const aldaneVoss: Template = {
  id: "aldane-voss",
  title: "Aldane & Voss",
  category: "tobacco",
  description:
    "An age-gated tobacco catalogue for a fictional house. Four numbered blends, full spec sheets, a draggable pack viewer and horizontal chapters.",
  previewImage: "/images/templates/aldane-voss.jpg",
  scene: "heritage-tobacco",
  previewUrl: "/previews/aldane-voss/",
  theme: {
    accent: "#b8794a",
    accentSoft: "#6e452b",
    background: "#0d0c0b",
    foreground: "#ece6da",
    muted: "#8d867c",
    atmosphere: "#1a140f",
  },
  content: {
    nav: ["Collection", "House", "Adults 18+"],
    eyebrow: "Aldane & Voss / Fictional catalogue",
    headline: "Blends,",
    headlineAccent: "specified plainly.",
    intro:
      "A fictional tobacco catalogue for adult readers. Archival typography, a draggable pack viewer and no claims about health or approval.",
    primaryCta: "Open the catalogue",
    secondaryCta: "Read the house notes",
    note: "Age-gated demo · fictional products · no sales",
    chapters: [
      {
        label: "01 / The catalogue",
        title: "Four numbered blends",
        body: "A fictional collection with plain specification sheets. Origin, cut and format are presented as illustrative design content.",
      },
      {
        label: "02 / The house",
        title: "An archival language",
        body: "Newsreader, warm paper tones and an indexed layout give the house a restrained, historical voice.",
      },
      {
        label: "03 / The notice",
        title: "No approval claimed",
        body: "This demo does not claim regulatory compliance, certification or health benefits. Operators are responsible for local requirements.",
      },
    ],
    specs: [
      { label: "Template", value: "Aldane & Voss" },
      { label: "Industry", value: "Tobacco & Cigars" },
      { label: "Format", value: "Published HTML + WebGL" },
      { label: "Access", value: "18+ age gate" },
    ],
  },
  price: 289,
  features: ["18+ age gate", "Blend catalogue", "Draggable 3D pack viewer", "Specification sheets", "Horizontal scroll story"],
  technologies: ["Three.js", "Lenis", "Canvas 2D", "Self-contained HTML", "Published preview"],
  featured: true,
  published: true,
  isDemo: true,
  ageRestricted: true,
  healthWarning:
    "Tobacco use is harmful to health. This is a fictional design demonstration for adults. Operators are responsible for applicable age restrictions, advertising rules and required health warnings in their market.",
};
