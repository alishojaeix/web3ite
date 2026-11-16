import type { Template } from "@/types/template";

export const noirCafe: Template = {
  id: "noir-cafe",
  title: "Noir Café",
  category: "cafe",
  description:
    "A late-hours espresso bar with a sculptural cup, drifting steam and a menu that reads like a tasting card.",
  previewImage: "/images/templates/noir-cafe.jpg",
  scene: "noir-cafe",
  theme: {
    accent: "#c9a36a",
    accentSoft: "#7b5b35",
    background: "#090806",
    foreground: "#f3eadc",
    muted: "#a79a88",
    atmosphere: "#1a1108",
  },
  content: {
    nav: ["Menu", "The room", "Visit"],
    eyebrow: "Noir Café / Espresso bar",
    headline: "Coffee,",
    headlineAccent: "after dark.",
    intro:
      "A late-hours espresso bar in a former print shop. Short menu, low light, no rush.",
    primaryCta: "View the menu",
    secondaryCta: "Find the room",
    note: "Demo experience · drag the room to inspect",
    chapters: [
      {
        label: "01 / The cup",
        title: "Pulled to order",
        body: "A short, rotating espresso menu built around one house blend and a single guest roaster. No modifiers, no theatre.",
      },
      {
        label: "02 / The room",
        title: "Low light, warm metal",
        body: "Deep green banquettes, aged brass and a long walnut counter. The room is designed to be looked at slowly.",
      },
      {
        label: "03 / The ritual",
        title: "Stay a while",
        body: "Doors open at seven and close when the last table leaves. Reservations are held for the counter only.",
      },
    ],
    specs: [
      { label: "Template", value: "Noir Café" },
      { label: "Industry", value: "Cafe & Coffee" },
      { label: "Hero scene", value: "Espresso cup / warm studio light" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 249,
  features: ["Menu showcase", "Reservations", "Gallery", "Location & hours", "Slow camera orbit"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: true,
  published: true,
  isDemo: true,
};

export const atelierCoffee: Template = {
  id: "atelier-coffee",
  title: "Atelier Coffee",
  category: "cafe",
  description:
    "A warm editorial coffee studio built around a glass pour-over, cream surfaces and a crafted product story.",
  previewImage: "/images/templates/atelier-coffee.jpg",
  scene: "atelier-coffee",
  theme: {
    accent: "#d6a65f",
    accentSoft: "#8d6a36",
    background: "#100e0a",
    foreground: "#f6efe3",
    muted: "#b5a78f",
    atmosphere: "#241b10",
  },
  content: {
    nav: ["Coffee", "Atelier", "Journal"],
    eyebrow: "Atelier Coffee / Slow bar",
    headline: "A quieter",
    headlineAccent: "kind of coffee.",
    intro:
      "A daylight studio for pour-over, conversation and the kind of cup that asks you to sit down.",
    primaryCta: "Explore the coffee",
    secondaryCta: "Visit the atelier",
    note: "Demo experience · pointer changes the view",
    chapters: [
      {
        label: "01 / The bar",
        title: "One cup at a time",
        body: "The bar is built around a single pour-over station. Every cup is weighed, poured and served at the counter.",
      },
      {
        label: "02 / The shelf",
        title: "A small, considered list",
        body: "Two espresso options and three filter coffees. The list changes with the roast calendar, not the season.",
      },
      {
        label: "03 / The studio",
        title: "Daylight and paper",
        body: "Cream walls, pale oak and a working archive of brew notes. The room doubles as a small publishing studio.",
      },
    ],
    specs: [
      { label: "Template", value: "Atelier Coffee" },
      { label: "Industry", value: "Cafe & Coffee" },
      { label: "Hero scene", value: "Glass pour-over / cream light" },
      { label: "Interaction", value: "Pointer parallax" },
    ],
  },
  price: 269,
  features: ["Coffee list", "Brew journal", "Atelier story", "Stockist rail", "Warm editorial layout"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: false,
  published: true,
  isDemo: true,
};

export const obsidianRoastery: Template = {
  id: "obsidian-roastery",
  title: "Obsidian Roastery",
  category: "cafe",
  description:
    "A dark, sculptural coffee brand with a monolithic roastery hero, brass details and a tightly edited catalogue.",
  previewImage: "/images/templates/obsidian-roastery.jpg",
  scene: "obsidian-roastery",
  theme: {
    accent: "#b78b55",
    accentSoft: "#5c4329",
    background: "#080809",
    foreground: "#f1ece3",
    muted: "#918a80",
    atmosphere: "#151210",
  },
  content: {
    nav: ["Roasts", "Roastery", "Subscribe"],
    eyebrow: "Obsidian Roastery / Small batch",
    headline: "Roasted in",
    headlineAccent: "the dark.",
    intro:
      "A sculptural home for a small-batch roastery. Three coffees, one roast day, nothing louder than the work.",
    primaryCta: "See the roasts",
    secondaryCta: "Inside the roastery",
    note: "Demo experience · drag to inspect the object",
    chapters: [
      {
        label: "01 / The object",
        title: "A canister worth keeping",
        body: "Matte black steel, a brass seal and a single debossed line. Packaging designed to stay on the counter.",
      },
      {
        label: "02 / The roast",
        title: "One day, every week",
        body: "Small batches on a single roast day. Rest time is printed on the base of every canister.",
      },
      {
        label: "03 / The source",
        title: "Traceable by design",
        body: "Origin, producer and process live on the product page. No scores, no tasting-note theatre.",
      },
    ],
    specs: [
      { label: "Template", value: "Obsidian Roastery" },
      { label: "Industry", value: "Cafe & Coffee" },
      { label: "Hero scene", value: "Monolithic canister / brass key light" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 289,
  features: ["Roast catalogue", "Subscription rail", "Roastery story", "Product spec sheets", "Dark editorial grid"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: true,
  published: true,
  isDemo: true,
};
