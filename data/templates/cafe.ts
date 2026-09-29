import type { Template } from "@/types/template";

/**
 * Cafe — luxury modern cafe website.
 * Drop a real GLB at `model` and a still at `previewImage` to go live;
 * until then ModelViewer renders the `cup` sculpture.
 */
export const cafe: Template = {
  id: "noir-cafe",
  title: "Noir Café",
  category: "cafe",
  description:
    "A luxury modern cafe site. An espresso cup turning under a warm key light, a menu that reads like a tasting card, and a reservation rail that never leaves the room.",
  previewImage: "/images/templates/noir-cafe.jpg",
  model: "/models/noir-cafe.glb",
  price: 249,
  features: [
    "Menu showcase",
    "Reservations",
    "Gallery",
    "Location & hours",
    "Slow camera orbit",
  ],
  technologies: [
    "Next.js 14",
    "React Three Fiber",
    "Drei",
    "Tailwind CSS",
    "Lenis",
  ],
  featured: true,
  published: true,
  sculpture: "cup",
  accent: "#C8A05A",
};
