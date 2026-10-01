import type { Template } from "@/types/template";

/**
 * Security & Crypto — custody/security template.
 * Drop a real GLB at `model` and a still at `previewImage` to go live;
 * until then ModelViewer renders the `shield` sculpture.
 */
export const security: Template = {
  id: "vaultline",
  title: "Vaultline",
  category: "security",
  description:
    "A security posture page that opens with a locked shield. Audit timeline, key-management overview, and a disclosure channel — nothing else, nothing invented.",
  previewImage: "/images/templates/vaultline.jpg",
  model: "/models/vaultline.glb",
  price: 399,
  features: [
    "Audit timeline",
    "Key management",
    "Disclosure channel",
    "Status page",
    "Slow camera orbit",
  ],
  technologies: [
    "Next.js 14",
    "React Three Fiber",
    "Drei",
    "Tailwind CSS",
    "Framer Motion",
  ],
  featured: false,
  published: true,
  sculpture: "shield",
  accent: "#C4B5FD",
};
