/**
 * AI Product Launch - sample launch content.
 *
 * The product, company and all specifications are fictional. Every figure is
 * illustrative and labelled as such; nothing here is a performance claim.
 */

export const launchNav = [
  { label: "Product", href: "#showcase" },
  { label: "Specs", href: "#specs" },
  { label: "System", href: "#story" },
  { label: "Reserve", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Launch / A new compute layer",
  headline: "Small object.",
  headlineAccent: "Serious machine.",
  intro:
    "A compact AI computer for the desk. Local inference, an open interface and a specification sheet with nothing hidden.",
  primaryCta: "Meet the product",
  secondaryCta: "Read the specs",
  status: "First run · reservation open",
  note: "Sample product concept · fictional device, no orders taken",
  caption: [
    "Prism 01 — the compute core",
    "Illustrative render · not a product photo",
  ],
  footNote: "Compact AI · Local inference · Desk-ready",
} as const;

export const heroMeta = [
  { label: "Form", value: "Compact" },
  { label: "Compute", value: "Local AI" },
  { label: "Run", value: "First edition" },
] as const;

export const strip = [
  "Local inference",
  "Open interface",
  "Quiet enclosure",
  "Serviceable",
  "Desk-ready",
  "First run",
] as const;

export const showcase = {
  label: "01 / The object",
  title: "A compact compute layer for the desk.",
  intro:
    "One object, three decisions: where it sits, how it is cooled, and who can inspect it. The launch page answers each before it is asked.",
  note: "Sample product story. The device is fictional and nothing is for sale.",
  features: [
    {
      index: "01",
      title: "Designed to sit close",
      body: "A footprint small enough for a desk, quiet enough for a studio, and simple enough to move between rooms.",
      detail: "Glass front · anodised base",
    },
    {
      index: "02",
      title: "Local by default",
      body: "Inference happens on the device. The interface is open, the state is visible and the network is optional.",
      detail: "Open API · local first",
    },
    {
      index: "03",
      title: "Built to be opened",
      body: "A serviceable enclosure, documented ports and a specification sheet that labels what is illustrative.",
      detail: "Serviceable · documented",
    },
  ],
  quote: {
    text: "One hero, one promise, one sheet. The product does the rest.",
    note: "Launch principle · sample copy",
  },
} as const;

export const specs = {
  label: "02 / Specifications",
  title: "Nothing hidden.",
  intro:
    "The sheet is written the way we would want to read one: grouped, labelled and honest about what is a demo value.",
  note: "Illustrative specification. All values are sample data for this template — not a real product datasheet.",
  groups: [
    {
      title: "Core",
      rows: [
        { label: "Form factor", value: "Compact", note: "Desk or quiet rack" },
        { label: "Compute", value: "AI accelerator", note: "Local inference" },
        { label: "Memory", value: "64 GB", note: "Unified" },
        { label: "Connectivity", value: "USB-C + Ethernet", note: "Open API" },
      ],
    },
    {
      title: "Physical",
      rows: [
        { label: "Enclosure", value: "Glass + anodised metal", note: "Serviceable" },
        { label: "Power", value: "180 W", note: "Single supply" },
        { label: "Deployment", value: "Desk / rack", note: "One object" },
        { label: "Availability", value: "First run", note: "Reservation only" },
      ],
    },
    {
      title: "Service",
      rows: [
        { label: "Warranty", value: "2 years", note: "Sample value" },
        { label: "Support", value: "Direct", note: "Named team" },
        { label: "Ship", value: "Q3", note: "Sample window" },
      ],
    },
  ],
  footnote: "Figures shown are illustrative and included to demonstrate layout. No performance is claimed.",
} as const;

export const story = {
  label: "03 / The system",
  title: "Small object. Serious machine.",
  intro:
    "A launch story told in three beats: the object on the desk, the system underneath it, and the first run going out the door.",
  beats: [
    {
      step: "01",
      title: "The object",
      body: "Designed around the desk, not the data centre. The prism sits in one place, tells you what it is doing and asks for very little.",
      tag: "Form",
    },
    {
      step: "02",
      title: "The system",
      body: "Local inference, an open interface and a state you can read. No account is required to see what the machine is doing.",
      tag: "Compute",
    },
    {
      step: "03",
      title: "The first run",
      body: "A single first edition, documented as it ships. Sample launch timeline; no orders or payments are taken here.",
      tag: "Launch",
    },
  ],
  note: "Illustrative launch narrative. No real availability, roadmap or delivery is promised.",
} as const;

export const materials = {
  label: "04 / Materials",
  title: "Three materials, one object.",
  intro:
    "A glass prism, an anodised base and a single cinematic key light. The palette is the product story.",
  note: "Material descriptions are illustrative. No supplier, certification or finish is represented.",
  items: [
    {
      name: "Glass",
      note: "The compute prism",
      body: "A smoked glass front with a polished bevel. The light seam is the only indicator that stays on.",
      swatch: "glass" as const,
    },
    {
      name: "Anodised metal",
      note: "A quiet enclosure",
      body: "A warm-grey base that grounds the object. Matte, fingerprint-resistant, and easy to open with one tool.",
      swatch: "metal" as const,
    },
    {
      name: "Studio light",
      note: "One cinematic key",
      body: "A single warm key rakes across the prism. No coloured rim lights, no stage fog — just the object.",
      swatch: "light" as const,
    },
  ],
} as const;

export const reserve = {
  label: "05 / Reserve",
  title: "Reserve the first run.",
  intro:
    "A refundable reservation request. No payment is taken on this demo, and no device is reserved.",
  bullets: [
    "One request per person",
    "First-run configuration only",
    "Email confirmation is simulated",
  ],
  facts: [
    { label: "Edition", value: "First run" },
    { label: "Reservation", value: "Refundable" },
    { label: "Payment", value: "None on demo" },
    { label: "Ship", value: "Sample Q3" },
  ],
  quote: "Tell us where it will sit. We will tell you what it needs.",
  quoteNote: "Reservation note · sample copy",
  form: {
    title: "Reservation request",
    sub: "A place in the first run, not a checkout",
    editions: [
      "Prism 01 — desk",
      "Prism 01 — studio",
      "Prism 01 — rack",
      "Undecided",
    ],
    note: "Sample reservation form. Nothing is sent to a real company, no device is reserved and no payment is taken.",
    confirmation:
      "Your reservation request has been recorded for this demonstration. No payment is taken and no device is reserved.",
    fallback:
      "The demo inbox is unavailable right now. Please use the email address on this page.",
  },
  email: "launch@prism-compute.demo",
  phone: "+44 20 7946 0003",
  address: ["Prism Compute", "9 Studio Row", "London E2 7JY"],
  hours: "Monday – Friday · 09:00 – 18:00",
  contactNote: "Fictional company. Address, telephone number and details are illustrative.",
} as const;
