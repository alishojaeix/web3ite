/**
 * Cigar Atelier - sample luxury tobacco content (adults 18+).
 *
 * The house, cigars, materials, specifications and contact are fictional.
 * No real products, sales, health claims or therapeutic benefits are represented.
 * Age-gated demonstration only.
 */

export const cigarNav = [
  { label: "Collection", href: "#showcase" },
  { label: "Atelier", href: "#story" },
  { label: "Materials", href: "#materials" },
  { label: "Details", href: "#specs" },
  { label: "Adults 18+", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Cigar Atelier / Adults 18+",
  headline: "Craft,",
  headlineAccent: "kept quiet.",
  intro:
    "A fictional cigar house presented with archival restraint: material, provenance and a carefully controlled product gallery.",
  status: "Private house · by appointment",
  note: "Age-gated demo · fictional products · no sales",
  caption: [
    "Cedar-lined vitrine · four indexed formats",
    "Illustrative concept · no real products or sales",
  ],
} as const;

export const heroMeta = [
  { label: "House", value: "Fictional" },
  { label: "Access", value: "18+ gate" },
  { label: "Batch", value: "Small" },
] as const;

export const atelier = {
  label: "01 / The atelier",
  title: "A small, indexed catalogue.",
  intro:
    "Three fictional formats, each with a plain specification card. Product details are illustrative and do not describe real goods.",
  formats: [
    {
      index: "01",
      name: "Cedar",
      origin: "Connecticut",
      size: "6 × 50",
      profile: ["Cedar", "Cream", "Paper"],
      note: "The lightest expression — a morning companion.",
    },
    {
      index: "02",
      name: "Maduro",
      origin: "Nicaragua",
      size: "5 × 54",
      profile: ["Cocoa", "Leather", "Dark"],
      note: "Rich, square-pressed wrapper — evening depth.",
    },
    {
      index: "03",
      name: "Rosado",
      origin: "Honduras",
      size: "6 × 52",
      profile: ["Rose", "Cedar", "Spice"],
      note: "Reddish wrapper — balanced bridge between the two.",
    },
  ],
  disclaimer:
    "All formats are fictional. No tobacco product, flavour profile, measurement or price is real.",
} as const;

export const materials = {
  label: "02 / The materials",
  title: "Cedar, brass and paper.",
  intro:
    "The visual language is built from the objects of the atelier: cedar, aged brass, dark leather and printed index cards.",
  items: [
    {
      name: "Spanish cedar",
      note: "The atelier",
      swatch: "cedar",
      body: "Lined drawers and vitrines. The wood regulates humidity and imparts a quiet, sweet-woody note to the resting stock.",
    },
    {
      name: "Aged brass",
      note: "Index and seal",
      swatch: "brass",
      body: "Hand-stamped indices, drawer pulls and wax seals. The patina records every handling without spectacle.",
    },
    {
      name: "Printed index card",
      note: "Archival restraint",
      swatch: "paper",
      body: "Cotton-rag stock, letterpress-printed. Each card carries origin, size, profile and the house disclaimer in one view.",
    },
  ],
  note: "Illustrative material studies for layout demonstration.",
} as const;

export const specification = {
  label: "03 / Details",
  title: "No health claims.",
  intro:
    "The presentation makes no health, cessation or therapeutic claims. Operators must add the warnings and restrictions required in their market.",
  groups: [
    {
      title: "Access & format",
      rows: [
        { label: "Age gate", value: "18+ required" },
        { label: "Catalogue", value: "4 indexed formats" },
        { label: "Layout", value: "Single page + 3D" },
        { label: "Sales", value: "None" },
      ],
    },
    {
      title: "Compliance",
      rows: [
        { label: "Health warning", value: "Operator responsibility" },
        { label: "Advertising", value: "Market-dependent" },
        { label: "Age verification", value: "Cookie-based demo" },
        { label: "Indexing", value: "Sequential 01–04" },
      ],
    },
  ],
  disclaimer:
    "This is a demonstration template. Real operators are responsible for all applicable laws, warnings and age restrictions.",
} as const;

export const contact = {
  label: "04 / Notice",
  title: "Read the notice.",
  intro:
    "This is a fictional demonstration. Operators are responsible for local restrictions, required health warnings and age verification.",
  facts: [
    { label: "Access", value: "Adults 18+" },
    { label: "Format", value: "Index cards + 3D" },
    { label: "Products", value: "Fictional" },
    { label: "Sales", value: "None" },
  ],
  email: "house@cigar-atelier.demo",
  phone: "+44 20 7946 0189",
  address: ["Cigar Atelier", "By appointment only", "—"],
  hours: "Private · no walk-in",
  note: "Fictional demonstration. Adults 18+ only. No sales or health claims.",
  form: {
    title: "Request the notice",
    sub: "Fictional house · no sales call · no products",
    types: ["House notice", "Index cards", "Material study", "Something else"],
    note: "Sample request form. Nothing is sent to a real house, no products are offered and no sales contact is made.",
    confirmation:
      "Your request has been recorded for this demonstration. No message is sent, no products are offered and no sales contact is made.",
    fallback:
      "The demo house is unavailable right now. Please use the email address on this page.",
  },
} as const;