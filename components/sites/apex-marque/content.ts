/**
 * Apex Marque - sample grand-tourer marque content.
 *
 * The marque, car, figures, trims and timeline are fictional. No production
 * vehicle, order, price, homologated figure or dealer is represented.
 */

export const apexNav = [
  { label: "Marque", href: "#story" },
  { label: "The car", href: "#showcase" },
  { label: "Specification", href: "#specs" },
  { label: "Configure", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Apex Marque / Grand tourer",
  headline: "The long way",
  headlineAccent: "home.",
  intro:
    "A single grand tourer, presented under one key light. Long proportions, a calm cabin and a specification that rewards attention.",
  status: "Showroom · model year 2026",
  note: "Sample marque · fictional car and specification",
  caption: [
    "Apex GT — profile study",
    "Illustrative drawing · not a production vehicle",
  ],
  footNote: "Grand tourer · One key light · Built to order",
} as const;

export const heroMeta = [
  { label: "Body", value: "Grand tourer" },
  { label: "Light", value: "One key" },
  { label: "Build", value: "To order" },
] as const;

export const stats = [
  { label: "Power", value: "620", unit: "hp", note: "Illustrative" },
  { label: "0–60", value: "3.4", unit: "s", note: "Illustrative" },
  { label: "Range", value: "410", unit: "mi", note: "Illustrative" },
  { label: "Weight", value: "1,780", unit: "kg", note: "Illustrative" },
] as const;

export const trims = [
  {
    id: "touring",
    name: "Touring",
    subtitle: "The quiet one",
    wheels: "20-inch forged",
    cabin: "Natural leather / open-pore wood",
    character:
      "Long-legged and understated. The trim for people who plan routes by lunch, not by traffic.",
  },
  {
    id: "grand",
    name: "Grand",
    subtitle: "The balance",
    wheels: "21-inch forged",
    cabin: "Natural leather / machined alloy",
    character:
      "The standard expression: more presence without more noise. The long route, clearly answered.",
  },
  {
    id: "edition",
    name: "Edition",
    subtitle: "The last word",
    wheels: "21-inch forged, polished face",
    cabin: "Saddle leather / bronze stitch",
    character:
      "A small, numbered run. The same car with a warmer room and a quieter badge.",
  },
] as const;

export const showcase = {
  label: "01 / The car",
  title: "One car, clearly described.",
  intro:
    "A single grand tourer under one key light. Long proportions, a calm cabin, an honest specification — and a configurator strip that shows what changes.",
  note: "Sample specification and trims. Figures are illustrative, not homologated or measured.",
  config: {
    label: "Trim / illustrative",
    title: "Choose a trim",
    note: "Interactive sample. Nothing here is orderable and no price is represented.",
  },
} as const;

export const marque = {
  label: "02 / The marque",
  title: "Distance, taken seriously.",
  intro:
    "The marque is built around one idea: distance should feel effortless. The car is the argument; the details are the evidence.",
  quote: {
    text: "Distance is a material. The car is shaped around it.",
    note: "Marque note · sample copy",
  },
  timeline: [
    {
      year: "2019",
      title: "One idea",
      body: "A single brief: a car for the long route, drawn around the driver and one passenger.",
    },
    {
      year: "2022",
      title: "The form fixed",
      body: "Proportions settled first — long bonnet, low roof, rear haunch. Nothing added to hide them.",
    },
    {
      year: "2024",
      title: "The cabin",
      body: "Materials chosen for touch and age: natural leather, machined metal, open-pore wood.",
    },
    {
      year: "2026",
      title: "Built to order",
      body: "The first sample build slot. A demonstration only; no car is produced, priced or sold.",
    },
  ],
  note: "Sample heritage. The marque, dates and car are fictional.",
} as const;

export const specification = {
  label: "03 / Specification",
  title: "Illustrative specification.",
  intro:
    "Published plainly, in three groups. Every figure is a sample for the layout — not a measured, homologated or certified value.",
  groups: [
    {
      title: "Performance",
      rows: [
        { label: "Power", value: "620 hp" },
        { label: "0–60", value: "3.4 s" },
        { label: "Range", value: "410 mi" },
        { label: "Weight", value: "1,780 kg" },
      ],
    },
    {
      title: "Chassis",
      rows: [
        { label: "Layout", value: "Front-engine, RWD" },
        { label: "Gearbox", value: "8-speed" },
        { label: "Wheels", value: "21-inch" },
        { label: "Trim", value: "Touring / Grand / Edition" },
      ],
    },
    {
      title: "Ownership",
      rows: [
        { label: "Seats", value: "2+2" },
        { label: "Boot", value: "310 L" },
        { label: "Build", value: "To order" },
        { label: "Deposit", value: "None" },
      ],
    },
  ],
  facts: [
    { label: "Seats", value: "2+2" },
    { label: "Boot", value: "310 L" },
    { label: "Build", value: "To order" },
    { label: "Deposit", value: "None" },
  ],
  notClaimed: [
    "No production vehicle is represented",
    "No figure is measured or homologated",
    "No price, order or delivery is offered",
    "No dealer network or warranty is claimed",
  ],
  notClaimedNote:
    "This is a demonstration website. A real marque page would publish tested figures and a regulated offer — or say nothing at all.",
  note: "Illustrative specification. All values are sample content.",
} as const;

export const materials = {
  label: "04 / Materials",
  title: "Three materials, one light.",
  intro:
    "The showroom is deliberately quiet: one paint, one alloy, one hide. The drawing does the talking.",
  note: "Sample materials. No paint code, alloy specification or hide is supplied.",
  items: [
    {
      name: "Paint",
      note: "One key light",
      swatch: "paint",
      body: "A warm metallic, sampled under a single key light. One colour, no configurator rainbow.",
    },
    {
      name: "Alloy",
      note: "Long proportions",
      swatch: "alloy",
      body: "A forged wheel with a machined face. The drawing shows the spoke, not a rendered showroom.",
    },
    {
      name: "Leather",
      note: "A calm cabin",
      swatch: "leather",
      body: "Natural hide with unbleached stitching. The cabin is designed to age, not to gleam.",
    },
  ],
} as const;

export const contact = {
  label: "05 / Configure",
  title: "Build the long way home.",
  intro:
    "Choose a trim and request a build slot. A short note about the route you have in mind is enough.",
  facts: [
    { label: "Reply", value: "2 days" },
    { label: "Format", value: "Spec" },
    { label: "Build", value: "To order" },
    { label: "Deposit", value: "None" },
  ],
  bring: [
    "The trim you are drawn to",
    "The route the car has to make easy",
    "The detail you would change",
  ],
  quote: "A grand tourer is a promise about time.",
  quoteNote: "Marque note · sample copy",
  email: "atelier@apex-marque.demo",
  phone: "+44 20 7946 0008",
  address: ["Apex Marque", "1 Concours Way", "London W1K 3AB"],
  hours: "By appointment · Monday to Saturday",
  note: "Fictional marque. Address, telephone number, car and details are illustrative.",
  form: {
    title: "Build request",
    sub: "A trim, a route, no deposit",
    trims: ["Touring", "Grand", "Edition", "Not sure yet"],
    note: "Sample build form. Nothing is sent to a real marque, no order is accepted and no vehicle is offered for sale.",
    confirmation:
      "Your build request has been recorded for this demonstration. No message is sent, no order is accepted and no vehicle is offered for sale.",
    fallback:
      "The demo atelier is unavailable right now. Please use the email address on this page.",
  },
} as const;
