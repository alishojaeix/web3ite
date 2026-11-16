/**
 * Obsidian Roastery — sample brand content.
 *
 * The roastery, coffees, prices, dates and addresses are fictional. They exist
 * to demonstrate this template and must be replaced with owner-approved
 * details before the site is used commercially.
 */

export type Roast = {
  id: string;
  number: string;
  name: string;
  origin: string;
  process: string;
  varietal: string;
  altitude: string;
  notes: string[];
  roast: string;
  price: string;
  weight: string;
  lot: string;
  story: string;
};

export const obsidianNav = [
  { label: "Roasts", href: "#roasts" },
  { label: "The object", href: "#object" },
  { label: "Roastery", href: "#roastery" },
  { label: "Subscribe", href: "#subscribe" },
  { label: "Visit", href: "#visit" },
] as const;

export const heroMeta = [
  { label: "Established", value: "2021" },
  { label: "Roast day", value: "Thursday" },
  { label: "Batch", value: "12 kg" },
];

export const roasts: Roast[] = [
  {
    id: "kenia",
    number: "01",
    name: "Kenia AA",
    origin: "Nyeri, Kenya",
    process: "Washed",
    varietal: "SL28 · SL34",
    altitude: "1,750 m",
    notes: ["Blackcurrant", "Cane sugar", "Clean finish"],
    roast: "Medium-light",
    price: "18",
    weight: "250 g",
    lot: "Lot 04 · 2026 harvest",
    story:
      "A high-grown washed lot from the Gichathaini factory. We roast it a shade lighter than the other two so the blackcurrant stays sharp and the finish stays clean.",
  },
  {
    id: "colombia",
    number: "02",
    name: "Colombia Huila",
    origin: "Huila, Colombia",
    process: "Washed",
    varietal: "Caturra · Castillo",
    altitude: "1,650 m",
    notes: ["Cocoa", "Orange peel", "Soft acidity"],
    roast: "Medium",
    price: "17",
    weight: "250 g",
    lot: "Lot 02 · 2026 harvest",
    story:
      "The roundest coffee on the shelf and the one we keep on filter all week. Cocoa first, then a little orange peel, with enough body for oat milk.",
  },
  {
    id: "guji",
    number: "03",
    name: "Ethiopia Guji",
    origin: "Guji, Ethiopia",
    process: "Natural",
    varietal: "Heirloom",
    altitude: "2,050 m",
    notes: ["Jasmine", "Bergamot", "Stone fruit"],
    roast: "Light",
    price: "19",
    weight: "250 g",
    lot: "Lot 07 · 2026 harvest",
    story:
      "A natural lot with the lights left on. Floral and bright when brewed as filter; syrupy and loud as espresso. We roast it once and let it rest a little longer.",
  },
];

export const ticker = [
  "One roast day",
  "Three coffees",
  "Roasted to order",
  "Rest 7–14 days",
  "Traceable by design",
  "London E9",
];

export const object = {
  label: "02 / The object",
  title: "A canister worth keeping.",
  intro:
    "Matte steel, a brass seal, and one debossed line. The packaging is part of the coffee: reusable, repairable and quiet enough to stay on the counter.",
  specs: [
    { label: "Body", value: "0.6 mm matte steel" },
    { label: "Seal", value: "Solid brass, debossed" },
    { label: "Label", value: "Uncoated paper, foil" },
    { label: "Base", value: "Roast date, lot, weight" },
    { label: "Capacity", value: "250 g / 1 kg" },
  ],
  notes: [
    "The seal is machined in a small workshop in Sheffield. It is not printed: it is pressed into the lid.",
    "Every base carries the roast date and the rest window. If the coffee is not ready to brew, the canister says so.",
    "Return an empty canister to the roastery and we will refill it for £1 less. The object is designed to come back.",
  ],
};

export const roastery = {
  label: "03 / The roastery",
  title: "The rest of the week belongs to the coffee.",
  paragraphs: [
    "Obsidian began in a former kiln yard in 2021 with one drum roaster and a stubborn idea: roast less, roast better, and put the date on everything.",
    "We buy small lots directly and roast them on one day of the week. No blends, no flavourings, no second roast to hide behind. Three coffees at a time is the entire catalogue.",
    "The roastery opens to the public Thursday to Saturday. Come and taste the week's filter, or bring a home brewer and we will set the grind.",
  ],
  process: [
    {
      number: "01",
      title: "Source",
      body: "One harvest at a time, from producers we can name. Origin and lot are printed on the bag.",
    },
    {
      number: "02",
      title: "Roast",
      body: "A 12 kg drum, one roast day. Every batch is logged and cupped before it goes on the shelf.",
    },
    {
      number: "03",
      title: "Rest",
      body: "Seven to fourteen days, depending on the coffee. The window is written on the base.",
    },
    {
      number: "04",
      title: "Ship",
      body: "Fridays, in the canister. Letterbox size, no plastic, no extra packaging.",
    },
  ],
  facts: [
    { label: "Founded", value: "2021" },
    { label: "Roaster", value: "12 kg drum" },
    { label: "Catalogue", value: "3 coffees" },
    { label: "Roast day", value: "Thursday" },
  ],
};

export type Cadence = "weekly" | "fortnightly";
export type Grind = "whole-bean" | "filter" | "espresso";
export type BagSize = "250g" | "1kg";

export const subscription = {
  label: "04 / The roast list",
  title: "Keep the counter stocked.",
  intro:
    "One coffee, chosen by us, roasted to order. Skip a delivery whenever you like. The price includes the canister and letterbox shipping.",
  cadences: [
    { id: "weekly" as Cadence, label: "Weekly", note: "Every Thursday" },
    { id: "fortnightly" as Cadence, label: "Fortnightly", note: "Every other Thursday" },
  ],
  grinds: [
    { id: "whole-bean" as Grind, label: "Whole bean", note: "Grind at home" },
    { id: "filter" as Grind, label: "Filter", note: "V60 / drip" },
    { id: "espresso" as Grind, label: "Espresso", note: "Fine" },
  ],
  sizes: [
    { id: "250g" as BagSize, label: "250 g", note: "One canister", price: 15 },
    { id: "1kg" as BagSize, label: "1 kg", note: "Four refills", price: 48 },
  ],
  included: [
    "One 250 g canister or 1 kg refill bag",
    "Roast date and rest window on the base",
    "Letterbox shipping included",
    "Skip, pause or cancel by email",
  ],
  note: "Demonstration subscription. No payment is taken and no coffee is shipped.",
};

export const visit = {
  label: "05 / Visit",
  title: "Come and taste the week.",
  address: ["The Roastery", "8 Kiln Yard", "London E9"],
  transport:
    "Five minutes from Hackney Central. The yard entrance is on the left past the black gate. Step-free access to the tasting counter.",
  hours: [
    { day: "Thursday – Friday", time: "09:00 – 15:00" },
    { day: "Saturday", time: "10:00 – 16:00" },
    { day: "Sunday – Wednesday", time: "Closed" },
  ],
  email: "hello@obsidian-roastery.demo",
  note: "Tastings are walk-in. Groups of four or more can email ahead.",
};
