/**
 * Modern Tobacco Boutique - sample contemporary tobacco content (adults 18+).
 *
 * The boutique, tin, blends, shelf, stockists and contact are fictional.
 * No real products, sales, health claims or therapeutic benefits are represented.
 * Age-gated demonstration only.
 */

export const modernNav = [
  { label: "The edit", href: "#showcase" },
  { label: "The shelf", href: "#story" },
  { label: "Materials", href: "#materials" },
  { label: "Details", href: "#specs" },
  { label: "Adults 18+", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Modern Tobacco / Adults 18+",
  headline: "A different",
  headlineAccent: "shelf.",
  intro:
    "A fictional boutique concept for adult products, built around a clean metal tin, precise typography and a clearly labelled demo catalogue.",
  status: "Private boutique · by appointment",
  note: "Age-gated demo · fictional products · no sales",
  caption: [
    "Brushed steel tin on powder-coated shelf",
    "Illustrative concept · no real products or sales",
  ],
} as const;

export const heroMeta = [
  { label: "Boutique", value: "Fictional" },
  { label: "Access", value: "18+ gate" },
  { label: "Edit", value: "3 objects" },
] as const;

export const edit = {
  label: "01 / The edit",
  title: "Fewer objects, better presented.",
  intro:
    "A compact, fictional catalogue with neutral product cards and no lifestyle targeting. All product copy is illustrative.",
  items: [
    {
      index: "01",
      name: "The Tin",
      spec: "Brushed steel · 50 g",
      tags: ["Steel", "Neutral", "Object"],
      note: "The core object — weight, seal and silence.",
    },
    {
      index: "02",
      name: "The Edit",
      spec: "Three blends · 10 × 2",
      tags: ["Edit", "Paper", "Set"],
      note: "A curated pair of sample blends on index stock.",
    },
    {
      index: "03",
      name: "The Shelf",
      spec: "Display set · powder-coated",
      tags: ["Shelf", "Soft light", "Retail"],
      note: "Low-profile display for quiet presentation.",
    },
  ],
  disclaimer:
    "All items are fictional. No tobacco product, specification, material or price is real.",
} as const;

export const shelf = {
  label: "02 / The shelf",
  title: "Steel and soft light.",
  intro:
    "The boutique language is contemporary: brushed metal, low shelving and a controlled neutral palette.",
  principles: [
    {
      index: "01",
      title: "Object first",
      body: "The tin is the hero. No lifestyle imagery, no aspirational copy — just weight, finish and seal.",
    },
    {
      index: "02",
      title: "Neutral field",
      body: "Powder-coated shelving in warm greige. Soft 3000 K wash from above. No glare, no drama.",
    },
    {
      index: "03",
      title: "Restrained information",
      body: "One line of spec per object. Origin, weight, blend count. The rest is left for the reader.",
    },
  ],
  disclaimer:
    "This is a demonstration layout. Real operators must apply all required warnings, age gates and advertising restrictions.",
} as const;

export const materials = {
  label: "03 / Materials",
  title: "Brushed steel, soft light, neutral paper.",
  intro:
    "Three surfaces define the boutique: the tin you hold, the light that reveals it, and the paper that describes it.",
  items: [
    {
      name: "Brushed steel",
      note: "The tin",
      swatch: "steel",
      body: "Bead-blasted 316L with a micro-groove seal. The finish catches light without glare; the thread feels like a single continuous ridge.",
    },
    {
      name: "Soft light",
      note: "The shelf",
      swatch: "light",
      body: "Recessed 3000 K linear wash at 15° angle. CRI 95. The tin warms under it; the paper stays readable.",
    },
    {
      name: "Neutral paper",
      note: "The edit",
      swatch: "paper",
      body: "Uncoated 120 gsm warm white. Single-colour letterpress. One spec line, one disclaimer line, nothing else.",
    },
  ],
  note: "Illustrative material studies for layout demonstration.",
} as const;

export const specification = {
  label: "04 / Details",
  title: "Restrictions are part of the design.",
  intro:
    "Age confirmation, health warnings and operator responsibility are treated as first-class interface elements, not footnotes.",
  groups: [
    {
      title: "Access & format",
      rows: [
        { label: "Age gate", value: "18+ required" },
        { label: "Edit size", value: "3 objects" },
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
        { label: "Indexing", value: "Sequential 01–03" },
      ],
    },
  ],
  disclaimer:
    "This is a demonstration template. Real operators are responsible for all applicable laws, warnings and age restrictions.",
} as const;

export const contact = {
  label: "05 / Notice",
  title: "Read the notice.",
  intro:
    "Fictional demonstration. No sales, no health claims. Operators are responsible for local restrictions and required warnings.",
  facts: [
    { label: "Access", value: "Adults 18+" },
    { label: "Format", value: "Edit + shelf + 3D" },
    { label: "Products", value: "Fictional" },
    { label: "Sales", value: "None" },
  ],
  email: "studio@modern-tobacco.demo",
  phone: "+44 20 7946 0194",
  address: ["Modern Tobacco", "By appointment only", "—"],
  hours: "Private · no walk-in",
  note: "Fictional demonstration. Adults 18+ only. No sales or health claims.",
  form: {
    title: "Request the notice",
    sub: "Fictional boutique · no sales call · no products",
    types: ["Boutique notice", "Stockist sheet", "Material study", "Something else"],
    note: "Sample request form. Nothing is sent to a real boutique, no products are offered and no sales contact is made.",
    confirmation:
      "Your request has been recorded for this demonstration. No message is sent, no products are offered and no sales contact is made.",
    fallback:
      "The demo boutique is unavailable right now. Please use the email address on this page.",
  },
} as const;