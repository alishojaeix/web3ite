import type { Template } from "@/types/template";

/**
 * Automotive — detailing/marque template.
 * Drop a real GLB at `model` and a still at `previewImage` to go live;
 * until then ModelViewer renders the `car` sculpture.
 */
export const automotive: Template = {
  id: "apex-marque",
  title: "Apex Marque",
  category: "automotive",
  description:
    "A showroom floor for one car, one light, one story. A body turning under a single key light, build-spec rails, and a configurator strip that never pretends to be a checkout.",
  previewImage: "/images/templates/apex-marque.jpg",
  model: "/models/apex-marque.glb",
  price: 499,
  features: [
    "Build spec rails",
    "Configurator strip",
    "Heritage timeline",
    "Dealer locator",
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
  sculpture: "car",
  accent: "#FF5A36",
};
