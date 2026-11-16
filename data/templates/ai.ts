import type { Template } from "@/types/template";

export const neuralStudio: Template = {
  id: "neural-studio",
  title: "Neural Studio",
  category: "ai",
  description:
    "An AI product studio with a sculptural node network, technical typography and a restrained capability story.",
  previewImage: "/images/templates/neural-studio.jpg",
  scene: "neural-studio",
  theme: {
    accent: "#9aa8ff",
    accentSoft: "#5d68b8",
    background: "#08090f",
    foreground: "#f0f1f8",
    muted: "#9b9fb5",
    atmosphere: "#11142a",
  },
  content: {
    nav: ["Systems", "Work", "Contact"],
    eyebrow: "Neural Studio / Applied AI",
    headline: "Intelligence,",
    headlineAccent: "given form.",
    intro:
      "A product studio for applied machine learning. We turn ambiguous data problems into interfaces people can trust.",
    primaryCta: "See the systems",
    secondaryCta: "Start a conversation",
    note: "Demo experience · drag to inspect the network",
    chapters: [
      {
        label: "01 / Systems",
        title: "Built around the problem",
        body: "Every engagement begins with the decision the product needs to support, not the model it might use.",
      },
      {
        label: "02 / Interfaces",
        title: "Legible by default",
        body: "Confidence, provenance and failure states are designed as part of the product, not added after evaluation.",
      },
      {
        label: "03 / Practice",
        title: "A small senior team",
        body: "Strategy, research, design and engineering work in one room from the first sketch to the shipped system.",
      },
    ],
    specs: [
      { label: "Template", value: "Neural Studio" },
      { label: "Industry", value: "AI & Technology" },
      { label: "Hero scene", value: "Node network / cool studio light" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 349,
  features: ["Capability system", "Case-study grid", "Project intake", "Technical notes", "Interactive node field"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: true,
  published: true,
  isDemo: true,
};

export const quantumSystems: Template = {
  id: "quantum-systems",
  title: "Quantum Systems",
  category: "ai",
  description:
    "Precision-engineered rings and a machined core for a technical product that needs to feel exact, not futuristic.",
  previewImage: "/images/templates/quantum-systems.jpg",
  scene: "quantum-systems",
  theme: {
    accent: "#c3d3dc",
    accentSoft: "#6d8796",
    background: "#080a0c",
    foreground: "#f0f4f6",
    muted: "#98a5ad",
    atmosphere: "#111a20",
  },
  content: {
    nav: ["Platform", "Research", "Company"],
    eyebrow: "Quantum Systems / Precision compute",
    headline: "Measured",
    headlineAccent: "in microns.",
    intro:
      "A technical product story for teams working at the edge of compute. Exact language, engineered visuals, no mythology.",
    primaryCta: "Explore the platform",
    secondaryCta: "Read the research",
    note: "Demo experience · drag to inspect the assembly",
    chapters: [
      {
        label: "01 / The platform",
        title: "A system, not a black box",
        body: "The platform is presented as an assembly of observable parts: control, calibration and readout.",
      },
      {
        label: "02 / The method",
        title: "Precision is the story",
        body: "Technical diagrams, tolerance notes and a clear explanation of what the system can and cannot do.",
      },
      {
        label: "03 / The team",
        title: "Engineers first",
        body: "A direct route to the people building the platform, with published research and an open technical brief.",
      },
    ],
    specs: [
      { label: "Template", value: "Quantum Systems" },
      { label: "Industry", value: "AI & Technology" },
      { label: "Hero scene", value: "Machined rings / cold precision light" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 379,
  features: ["Platform overview", "Research index", "Technical diagrams", "Team page", "Precision camera rig"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: false,
  published: true,
  isDemo: true,
};

export const aiProductLaunch: Template = {
  id: "ai-product-launch",
  title: "AI Product Launch",
  category: "ai",
  description:
    "A cinematic launch page built around a glass compute prism, a single spotlight and a product story told in three beats.",
  previewImage: "/images/templates/ai-product-launch.jpg",
  scene: "ai-product-launch",
  theme: {
    accent: "#e8b36e",
    accentSoft: "#9b6d34",
    background: "#09090b",
    foreground: "#f7f0e6",
    muted: "#a89d8e",
    atmosphere: "#21160e",
  },
  content: {
    nav: ["Product", "Specs", "Launch"],
    eyebrow: "Launch / A new compute layer",
    headline: "Small object.",
    headlineAccent: "Serious machine.",
    intro:
      "A product launch for a compact AI device. One hero, one clear promise and a specification sheet with nothing hidden.",
    primaryCta: "Meet the product",
    secondaryCta: "Read the specs",
    note: "Demo experience · drag to inspect the device",
    chapters: [
      {
        label: "01 / The object",
        title: "Designed to sit close",
        body: "A compact glass-and-metal enclosure made for a desk, a studio or a quiet rack in the back room.",
      },
      {
        label: "02 / The system",
        title: "A clear performance story",
        body: "The launch page leads with the workload, the interface and the deployment model, not a wall of unlabeled numbers.",
      },
      {
        label: "03 / The launch",
        title: "One page, three beats",
        body: "Hero, proof and specification. Each section is designed to answer the next question before it is asked.",
      },
    ],
    specs: [
      { label: "Template", value: "AI Product Launch" },
      { label: "Industry", value: "AI & Technology" },
      { label: "Hero scene", value: "Glass compute prism / cinematic key" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 329,
  features: ["Product hero", "Specification sheet", "Launch story", "Reserve flow", "Cinematic lighting"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: true,
  published: true,
  isDemo: true,
};
