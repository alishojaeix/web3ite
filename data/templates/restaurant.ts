import type { Template } from "@/types/template";

export const maisonDining: Template = {
  id: "maison-dining",
  title: "Maison Dining",
  category: "restaurant",
  description:
    "A fine-dining room rendered as a silver cloche under a low pendant light, with a menu that unfolds course by course.",
  previewImage: "/images/templates/maison-dining.jpg",
  scene: "maison-dining",
  theme: {
    accent: "#c47a5f",
    accentSoft: "#79463a",
    background: "#0c0908",
    foreground: "#f4ece2",
    muted: "#aa9989",
    atmosphere: "#1e100c",
  },
  content: {
    nav: ["Menu", "The room", "Reservations"],
    eyebrow: "Maison Dining / Tasting room",
    headline: "A table set",
    headlineAccent: "for the evening.",
    intro:
      "A twelve-seat dining room built around a single seasonal menu, quiet service and a long view of the kitchen.",
    primaryCta: "Read the menu",
    secondaryCta: "Reserve a table",
    note: "Demo experience · drag to inspect the table",
    chapters: [
      {
        label: "01 / The menu",
        title: "One menu, written daily",
        body: "A short tasting menu follows what arrives that morning. The printed card is dated and kept as a record of the evening.",
      },
      {
        label: "02 / The room",
        title: "Low pendant light",
        body: "Walnut, linen and aged silver. The dining room is arranged around the pass, not away from it.",
      },
      {
        label: "03 / The service",
        title: "Quiet by design",
        body: "One seating, one pace. Dietary requirements are collected at booking and carried through every course.",
      },
    ],
    specs: [
      { label: "Template", value: "Maison Dining" },
      { label: "Industry", value: "Restaurants" },
      { label: "Hero scene", value: "Silver cloche / pendant light" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 289,
  features: ["Tasting menu", "Reservations", "Wine list", "Private events", "Slow camera orbit"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: true,
  published: true,
  isDemo: true,
};

export const emberKitchen: Template = {
  id: "ember-kitchen",
  title: "Ember Kitchen",
  category: "restaurant",
  description:
    "A dramatic open-fire kitchen with a charred board, glowing embers and food-led storytelling that never becomes noise.",
  previewImage: "/images/templates/ember-kitchen.jpg",
  scene: "ember-kitchen",
  theme: {
    accent: "#df7b45",
    accentSoft: "#8c4023",
    background: "#0a0807",
    foreground: "#f6e9dc",
    muted: "#b39b87",
    atmosphere: "#261009",
  },
  content: {
    nav: ["Fire", "Menu", "Book"],
    eyebrow: "Ember Kitchen / Open fire",
    headline: "Cooked",
    headlineAccent: "by fire.",
    intro:
      "An open kitchen with one hearth, a changing menu and a dining room that smells like the last hour of service.",
    primaryCta: "See tonight's menu",
    secondaryCta: "Book the counter",
    note: "Demo experience · drag to follow the heat",
    chapters: [
      {
        label: "01 / The hearth",
        title: "One fire, all night",
        body: "The menu is built around a single wood-fired hearth. Vegetables, fish and cuts move through the same heat.",
      },
      {
        label: "02 / The menu",
        title: "Written at the pass",
        body: "Four snacks, four plates and one shared finish. The card changes as the fire and the market do.",
      },
      {
        label: "03 / The room",
        title: "Counter seats first",
        body: "Most seats face the fire. A small back room holds one long table for groups and private dinners.",
      },
    ],
    specs: [
      { label: "Template", value: "Ember Kitchen" },
      { label: "Industry", value: "Restaurants" },
      { label: "Hero scene", value: "Charred board / ember particles" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 309,
  features: ["Seasonal menu", "Open-fire story", "Counter bookings", "Private dining", "Particle atmosphere"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: true,
  published: true,
  isDemo: true,
};

export const soraRestaurant: Template = {
  id: "sora-restaurant",
  title: "Sora Restaurant",
  category: "restaurant",
  description:
    "A quiet, minimal hospitality experience with a ceramic bowl, pale timber and room to breathe.",
  previewImage: "/images/templates/sora-restaurant.jpg",
  scene: "sora-restaurant",
  theme: {
    accent: "#a8b9a1",
    accentSoft: "#65765f",
    background: "#0a0b0a",
    foreground: "#f0f1ea",
    muted: "#a2a79b",
    atmosphere: "#161a14",
  },
  content: {
    nav: ["Menu", "House", "Visit"],
    eyebrow: "Sora / Modern Japanese dining",
    headline: "A quieter",
    headlineAccent: "table.",
    intro:
      "A minimal dining room for seasonal plates, sake and an evening that leaves room for conversation.",
    primaryCta: "View the menu",
    secondaryCta: "Plan a visit",
    note: "Demo experience · drag to inspect the room",
    chapters: [
      {
        label: "01 / The plate",
        title: "Seasonal, not loud",
        body: "A compact menu of small plates and one rice finish. Ingredients are named plainly; the work happens on the plate.",
      },
      {
        label: "02 / The room",
        title: "Pale timber, soft light",
        body: "A low counter, paper screens and a small garden light the room. Nothing competes with the table.",
      },
      {
        label: "03 / The visit",
        title: "An easy evening",
        body: "Walk-ins at the counter, reservations for tables. Sake pairings are offered by the glass, never pushed.",
      },
    ],
    specs: [
      { label: "Template", value: "Sora Restaurant" },
      { label: "Industry", value: "Restaurants" },
      { label: "Hero scene", value: "Ceramic bowl / soft garden light" },
      { label: "Interaction", value: "Pointer parallax" },
    ],
  },
  price: 269,
  features: ["Seasonal menu", "Sake list", "Reservations", "Garden story", "Minimal editorial layout"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: false,
  published: true,
  isDemo: true,
};
