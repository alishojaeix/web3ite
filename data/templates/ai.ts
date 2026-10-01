import type { Template } from "@/types/template";

/**
 * AI Services — agency/consulting template.
 * Drop a real GLB at `model` and a still at `previewImage` to go live;
 * until then ModelViewer renders the `chip` sculpture.
 */
export const ai: Template = {
  id: "axon-lab",
  title: "Axon Lab",
  category: "ai",
  description:
    "An AI services studio that leads with the hardware. A chip turning over a dark board, capability cards that read like a spec sheet, and an intake flow that starts with the problem statement.",
  previewImage: "/images/templates/axon-lab.jpg",
  model: "/models/axon-lab.glb",
  price: 349,
  features: [
    "Capability cards",
    "Intake flow",
    "Case studies",
    "Model comparison table",
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
  sculpture: "chip",
  accent: "#7EE0FF",
};
