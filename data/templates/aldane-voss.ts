import type { Template } from "@/types/template";

/**
 * Aldane & Voss — age-gated tobacco catalogue for a fictional brand.
 *
 * Unlike the other entries this one ships as a single self-contained static
 * HTML document (inline CSS + vanilla JS, Three.js r128 and Lenis from CDN).
 * `previewUrl` points at the byte-for-byte original under `public/previews`,
 * which the studio renders in an isolated iframe. The sculpture stays as the
 * card stand-in until a GLB lands at `model`.
 *
 * Price is provisional — no price has been established for this template yet.
 */
export const aldaneVoss: Template = {
  id: "aldane-voss",
  title: "Aldane & Voss",
  category: "catalogue",
  description:
    "An age-gated tobacco catalogue for the fictional Aldane & Voss. Four numbered blends with full spec sheets, a draggable 3D pack viewer, and horizontal-scroll chapters — published as one self-contained HTML file.",
  previewImage: "/images/templates/aldane-voss.jpg",
  model: "/models/aldane-voss.glb",
  previewUrl: "/previews/aldane-voss/",
  price: 289,
  features: [
    "18+ age gate",
    "Blend catalogue",
    "Draggable 3D pack viewer",
    "Specification sheets",
    "Horizontal scroll story",
  ],
  technologies: [
    "Three.js r128",
    "Lenis",
    "Canvas 2D",
    "Newsreader",
    "Instrument Sans",
  ],
  featured: true,
  published: true,
  sculpture: "plinth",
  accent: "#b8794a",
};
