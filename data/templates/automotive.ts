import type { Template } from "@/types/template";

export const apexMarque: Template = {
  id: "apex-marque",
  title: "Apex Marque",
  category: "automotive",
  description:
    "A showroom floor for one car, one key light and one story. Built-spec rails and a configurator strip that stays honest.",
  previewImage: "/images/templates/apex-marque.jpg",
  scene: "apex-marque",
  theme: {
    accent: "#e7794c",
    accentSoft: "#8d4227",
    background: "#0a0807",
    foreground: "#f6ede4",
    muted: "#aa998b",
    atmosphere: "#241009",
  },
  content: {
    nav: ["Marque", "The car", "Configure"],
    eyebrow: "Apex Marque / Grand tourer",
    headline: "The long way",
    headlineAccent: "home.",
    intro:
      "A single grand tourer, presented under one key light. Long proportions, a calm cabin and a specification that rewards attention.",
    primaryCta: "Explore the car",
    secondaryCta: "Build a spec",
    note: "Demo experience · drag to walk the car",
    chapters: [
      {
        label: "01 / The form",
        title: "Drawn for distance",
        body: "A long bonnet, a low cabin and a rear haunch that carries the eye to the back of the car. Restraint over decoration.",
      },
      {
        label: "02 / The cabin",
        title: "A quiet place to travel",
        body: "Natural leather, machined metal and a driving position set low. The cabin is designed for the hours between destinations.",
      },
      {
        label: "03 / The spec",
        title: "One car, clearly described",
        body: "Power, weight and dimensions are published plainly. The configurator shows what changes, not a wall of trim codes.",
      },
    ],
    specs: [
      { label: "Template", value: "Apex Marque" },
      { label: "Industry", value: "Automotive" },
      { label: "Hero scene", value: "Grand tourer / single key light" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 499,
  features: ["Build-spec rails", "Configurator strip", "Heritage timeline", "Dealer locator", "Showroom camera rig"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: true,
  published: true,
  isDemo: true,
};

export const velocityStudio: Template = {
  id: "velocity-studio",
  title: "Velocity Studio",
  category: "automotive",
  description:
    "A motion-led vehicle showcase with layered aero frames, directional light and a filmic launch narrative.",
  previewImage: "/images/templates/velocity-studio.jpg",
  scene: "velocity-studio",
  theme: {
    accent: "#e45f58",
    accentSoft: "#8b2f2c",
    background: "#090809",
    foreground: "#f5eceb",
    muted: "#a99695",
    atmosphere: "#210c0e",
  },
  content: {
    nav: ["Motion", "Aero", "Launch"],
    eyebrow: "Velocity Studio / Performance",
    headline: "Shape",
    headlineAccent: "in motion.",
    intro:
      "A performance studio for teams who care about the shape of the air. Built around a launch film and a precise aero story.",
    primaryCta: "See the study",
    secondaryCta: "Read the aero notes",
    note: "Demo experience · drag to follow the form",
    chapters: [
      {
        label: "01 / The form",
        title: "Designed in profile",
        body: "The silhouette is the first signature: a low nose, a rising beltline and a rear diffuser cut into the body.",
      },
      {
        label: "02 / The air",
        title: "Aerodynamics as design",
        body: "Intakes and channels are shown as part of the surface language, not hidden behind a spec sheet.",
      },
      {
        label: "03 / The launch",
        title: "A film, not a brochure",
        body: "One launch film, one full specification and a configurator for the details that actually change the car.",
      },
    ],
    specs: [
      { label: "Template", value: "Velocity Studio" },
      { label: "Industry", value: "Automotive" },
      { label: "Hero scene", value: "Aero frames / directional red light" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 459,
  features: ["Launch film rail", "Aero story", "Specification sheet", "Configurator", "Motion-led layout"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: false,
  published: true,
  isDemo: true,
};

export const electricMotion: Template = {
  id: "electric-motion",
  title: "Electric Motion",
  category: "automotive",
  description:
    "A modern electric mobility concept with a smooth pod, a charging arch and a calm, optimistic product story.",
  previewImage: "/images/templates/electric-motion.jpg",
  scene: "electric-motion",
  theme: {
    accent: "#91cbb9",
    accentSoft: "#4e8274",
    background: "#080b0a",
    foreground: "#eef5f1",
    muted: "#96a9a0",
    atmosphere: "#10221c",
  },
  content: {
    nav: ["Mobility", "Charge", "Visit"],
    eyebrow: "Electric Motion / Urban mobility",
    headline: "Forward,",
    headlineAccent: "quietly.",
    intro:
      "An electric mobility studio for the city. A smooth pod, a simple charging story and a calmer way to move.",
    primaryCta: "Meet the vehicle",
    secondaryCta: "Find a charge point",
    note: "Demo experience · drag to inspect the pod",
    chapters: [
      {
        label: "01 / The vehicle",
        title: "Small footprint, generous room",
        body: "A compact electric pod designed around the passenger, with a flat floor and a clear view of the street.",
      },
      {
        label: "02 / The charge",
        title: "A simple energy story",
        body: "Charge time, range and connector types are stated in plain language. No asterisks hidden behind a hero image.",
      },
      {
        label: "03 / The city",
        title: "Built for short distances",
        body: "A mobility service designed around the trips people actually make, with a map of charge points and hubs.",
      },
    ],
    specs: [
      { label: "Template", value: "Electric Motion" },
      { label: "Industry", value: "Automotive" },
      { label: "Hero scene", value: "Electric pod / charging arch" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 439,
  features: ["Vehicle overview", "Charging map", "Range explainer", "Test-drive flow", "Soft daylight scene"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: false,
  published: true,
  isDemo: true,
};
