import type { Template } from "@/types/template";

/**
 * Restaurant — fine dining template.
 * Drop a real GLB at `model` and a still at `previewImage` to go live;
 * until then ModelViewer renders the `plate` sculpture.
 */
export const restaurant: Template = {
  id: "maison-cloche",
  title: "Maison Cloche",
  category: "restaurant",
  description:
    "A fine-dining room on a plate. A cloche lifting under a low pendant light, a tasting menu that unfolds course by course, and a reservation book that never asks twice.",
  previewImage: "/images/templates/maison-cloche.jpg",
  model: "/models/maison-cloche.glb",
  price: 289,
  features: [
    "Tasting menu",
    "Reservations",
    "Wine list",
    "Private events",
    "Slow camera orbit",
  ],
  technologies: [
    "Next.js 14",
    "React Three Fiber",
    "Drei",
    "Tailwind CSS",
    "Framer Motion",
  ],
  featured: true,
  published: true,
  sculpture: "plate",
  accent: "#B4634A",
};
