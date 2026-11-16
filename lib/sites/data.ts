import type {
  CollectionItem,
  FeatureItem,
  MenuGroup,
  SiteConfig,
  SiteShowcase,
  SpecRow,
  SpecStat,
  TimelineItem,
} from "./types";

const labels = (
  story: string,
  showcase: string,
  materials: string,
  specs: string,
  contact: string
): SiteConfig["labels"] => ({ story, showcase, materials, specs, contact });

const menu = (groups: MenuGroup[]): SiteShowcase => ({ kind: "menu", groups });
const features = (items: FeatureItem[]): SiteShowcase => ({ kind: "features", items });
const timeline = (items: TimelineItem[]): SiteShowcase => ({ kind: "timeline", items });
const collection = (items: CollectionItem[]): SiteShowcase => ({ kind: "collection", items });
const specShowcase = (stats: SpecStat[], rows: SpecRow[]): SiteShowcase => ({
  kind: "specs",
  stats,
  rows,
});

function contact(
  email: string,
  address: string,
  hours: string,
  note: string,
  ctaLabel: string
): SiteConfig["contact"] {
  return { email, phone: "On request", address, hours, note, ctaLabel };
}

export const siteConfigs: Record<string, SiteConfig> = {
  "noir-cafe": {
    motif: "cup",
    layout: "noir",
    hero: "split",
    heroSide: "right",
    nav: [
      { label: "Menu", href: "#showcase" },
      { label: "The room", href: "#story" },
      { label: "Visit", href: "#contact" },
    ],
    navCta: { label: "Reserve the counter", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["story", "showcase", "materials", "contact"],
    labels: labels("01 / The room", "02 / The menu", "03 / Materials", "04 / Details", "05 / Visit"),
    storyTitle: "Coffee, after dark.",
    showcaseTitle: "A short menu, pulled to order.",
    showcaseIntro:
      "Espresso, filter and a small counter list. Everything is made to be finished at the table.",
    showcase: menu([
      {
        title: "Espresso",
        items: [
          { name: "Noir house blend", description: "Cocoa, cane, a long finish.", price: "3.2" },
          { name: "Single origin", description: "Rotating weekly. Ask at the bar.", price: "4.0" },
        ],
      },
      {
        title: "Filter",
        items: [
          { name: "Kenia AA", description: "Blackcurrant, cane sugar.", price: "4.5" },
          { name: "Colombia Huila", description: "Orange, cocoa, soft acidity.", price: "4.5" },
        ],
      },
      {
        title: "Counter",
        items: [
          { name: "Cortado", description: "Equal parts, no ceremony.", price: "3.6" },
          { name: "Pour-over flight", description: "Three cups, one conversation.", price: "9.0" },
        ],
      },
    ]),
    materials: [
      { label: "Leather", note: "Worn seating, low light" },
      { label: "Brass", note: "Pendants and counter trim" },
      { label: "Paper", note: "The menu, reset daily" },
    ],
    heroMeta: ["Late hours", "Former print shop", "Walk-ins"],
    specsTitle: "The room at a glance",
    specsExtra: [
      { label: "Seating", value: "18" },
      { label: "Roast", value: "Weekly" },
      { label: "Service", value: "Counter + table" },
    ],
    cta: {
      title: "Stay a while.",
      body: "The room is open late. Reserve the counter or walk in.",
    },
    contact: contact(
      "hello@noir-cafe.demo",
      "14 Lantern Lane, London",
      "Tue–Sun · 07:00–late",
      "Sample venue. Details are illustrative.",
      "Reserve the counter"
    ),
    footerNote: "Fictional demonstration. No real bookings are taken.",
  },

  "atelier-coffee": {
    motif: "pour",
    layout: "atelier",
    hero: "center",
    heroSide: "left",
    nav: [
      { label: "Coffee", href: "#showcase" },
      { label: "Atelier", href: "#story" },
      { label: "Journal", href: "#materials" },
    ],
    navCta: { label: "Visit the atelier", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / The bar", "02 / The list", "03 / The studio", "04 / Details", "05 / Visit"),
    storyTitle: "A quieter kind of coffee.",
    showcaseTitle: "One cup at a time.",
    showcaseIntro:
      "Two espresso options, three filter coffees, and a counter built around a single pour-over station.",
    showcase: menu([
      {
        title: "Filter",
        items: [
          { name: "Kenia AA", description: "Blackcurrant, cane, clean.", price: "4.5" },
          { name: "Colombia Huila", description: "Orange, cocoa, rounded.", price: "4.5" },
          { name: "Ethiopia Guji", description: "Jasmine, bergamot, tea-like.", price: "5.0" },
        ],
      },
      {
        title: "Espresso",
        items: [
          { name: "House blend", description: "Chocolate, hazelnut, short.", price: "3.2" },
          { name: "Single origin", description: "Ask for today's lot.", price: "4.0" },
        ],
      },
      {
        title: "Counter",
        items: [
          { name: "Pour-over flight", description: "Three cups, weighed and poured.", price: "9.0" },
          { name: "Oat flat white", description: "Silk texture, no sugar.", price: "3.8" },
        ],
      },
    ]),
    materials: [
      { label: "Cream walls", note: "Daylight, all morning" },
      { label: "Pale oak", note: "One counter, one bench" },
      { label: "Brew notes", note: "A working archive" },
    ],
    heroMeta: ["Daylight studio", "Slow bar", "Rotating roasts"],
    specsTitle: "The atelier",
    specsExtra: [
      { label: "Seats", value: "12" },
      { label: "Roast calendar", value: "Weekly" },
      { label: "Service", value: "Counter" },
    ],
    cta: {
      title: "Sit down with a cup.",
      body: "The atelier is a small room. Book a tasting or come by in the morning.",
    },
    contact: contact(
      "hello@atelier-coffee.demo",
      "14 Foundry Lane, London",
      "Tue–Sun · 08:00–16:00",
      "Sample venue. Details are illustrative.",
      "Book a tasting"
    ),
    footerNote: "Fictional demonstration. No real bookings are taken.",
  },

  "obsidian-roastery": {
    motif: "canister",
    layout: "obsidian",
    hero: "split",
    heroSide: "right",
    nav: [
      { label: "Roasts", href: "#showcase" },
      { label: "Roastery", href: "#story" },
      { label: "Subscribe", href: "#contact" },
    ],
    navCta: { label: "Join the roast list", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#story" },
    order: ["showcase", "story", "specs", "materials", "contact"],
    labels: labels("01 / The roasts", "02 / The roastery", "03 / The object", "04 / Details", "05 / Subscribe"),
    storyTitle: "Roasted in the dark.",
    showcaseTitle: "Three coffees. One roast day.",
    showcaseIntro:
      "Small batches on a single roast day. Rest time is printed on the base of every canister.",
    showcase: menu([
      {
        title: "No. 01",
        note: "Kenia · washed",
        items: [
          { name: "Blackcurrant", description: "Cane sugar, a clean finish.", price: "18" },
        ],
      },
      {
        title: "No. 02",
        note: "Colombia · washed",
        items: [
          { name: "Cocoa", description: "Orange peel, soft acidity.", price: "17" },
        ],
      },
      {
        title: "No. 03",
        note: "Ethiopia · natural",
        items: [
          { name: "Jasmine", description: "Bergamot, stone fruit.", price: "19" },
        ],
      },
      {
        title: "Subscription",
        note: "Weekly or fortnightly",
        items: [
          { name: "The roast list", description: "One 250 g bag, roasted to order.", price: "from 15" },
        ],
      },
    ]),
    materials: [
      { label: "Matte steel", note: "The canister" },
      { label: "Brass seal", note: "One debossed line" },
      { label: "Printed paper", note: "Roast date on the base" },
    ],
    heroMeta: ["Small batch", "Single roast day", "Traceable"],
    specsTitle: "The roast",
    specsExtra: [
      { label: "Roast day", value: "Thursday" },
      { label: "Batch", value: "12 kg" },
      { label: "Rest", value: "7–14 days" },
    ],
    cta: {
      title: "Keep the counter stocked.",
      body: "A weekly or fortnightly subscription, roasted to order.",
    },
    contact: contact(
      "hello@obsidian-roastery.demo",
      "The Roastery, 8 Kiln Yard",
      "Thu–Sat · 09:00–15:00",
      "Sample venue. Details are illustrative.",
      "Join the roast list"
    ),
    footerNote: "Fictional demonstration. No real subscriptions are taken.",
  },

  "maison-dining": {
    motif: "cloche",
    layout: "maison",
    hero: "center",
    heroSide: "left",
    nav: [
      { label: "Menu", href: "#showcase" },
      { label: "The room", href: "#story" },
      { label: "Reservations", href: "#contact" },
    ],
    navCta: { label: "Reserve a table", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / The room", "02 / The menu", "03 / The table", "04 / Details", "05 / Reservations"),
    storyTitle: "A table set for the evening.",
    showcaseTitle: "One menu, written each morning.",
    showcaseIntro:
      "Twelve seats, one seating, and a menu that follows the market.",
    showcase: menu([
      {
        title: "First",
        items: [
          { name: "Oyster, kohlrabi, verbena", description: "Chilled, bright, mineral." },
          { name: "Cured trout, buttermilk, dill", description: "Soft cure, sharp finish." },
        ],
      },
      {
        title: "Second",
        items: [
          { name: "Turbot, beurre blanc, sea herbs", description: "Line-caught, served on the bone." },
          { name: "Heritage beetroot, smoked cream", description: "Roasted in salt, finished at the pass." },
        ],
      },
      {
        title: "Main",
        items: [
          { name: "Aged duck, cherry, black garlic", description: "Dry-aged, carved at the table." },
          { name: "Celeriac, hazelnut, truffle", description: "The vegetable menu, built with the same care." },
        ],
      },
      {
        title: "Finish",
        items: [
          { name: "Buckwheat, honey, cream", description: "Toasted, cold, quiet." },
          { name: "Comté, quince, walnut", description: "From the small cheese trolley." },
        ],
      },
    ]),
    materials: [
      { label: "Linen", note: "One seating, one pace" },
      { label: "Silver", note: "The cloche, lifted at the table" },
      { label: "Candlelight", note: "Low, warm, steady" },
    ],
    heroMeta: ["Twelve seats", "One seating", "Kitchen counter"],
    specsTitle: "The evening",
    specsExtra: [
      { label: "Seats", value: "12" },
      { label: "Service", value: "One seating" },
      { label: "Menu", value: "Seasonal" },
    ],
    cta: {
      title: "Reserve the room.",
      body: "One seating each evening. Dietary requirements are collected at booking.",
    },
    contact: contact(
      "reservations@maison-dining.demo",
      "6 Rue des Orfèvres",
      "Wed–Sun · 18:30",
      "Sample venue. Details are illustrative.",
      "Request a table"
    ),
    footerNote: "Fictional demonstration. No real reservations are taken.",
  },

  "ember-kitchen": {
    motif: "ember",
    layout: "ember",
    hero: "split",
    heroSide: "left",
    nav: [
      { label: "Fire", href: "#story" },
      { label: "Menu", href: "#showcase" },
      { label: "Book", href: "#contact" },
    ],
    navCta: { label: "Book the counter", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["showcase", "story", "materials", "specs", "contact"],
    labels: labels("01 / The menu", "02 / The hearth", "03 / The room", "04 / Details", "05 / Book"),
    storyTitle: "Cooked by fire.",
    showcaseTitle: "Four snacks. Four plates. One finish.",
    showcaseIntro:
      "The card changes with the fire and the market. Most seats face the hearth.",
    showcase: menu([
      {
        title: "Snacks",
        items: [
          { name: "Ember flatbread, smoked butter", description: "Blistered at the hearth.", price: "6" },
          { name: "Charred olives, orange", description: "Warm, salty, bright.", price: "5" },
        ],
      },
      {
        title: "Fire",
        items: [
          { name: "Grilled leek, romesco", description: "Soft inside, black at the edges.", price: "12" },
          { name: "Wood-fired squid, nduja", description: "Quick over the coals.", price: "16" },
        ],
      },
      {
        title: "Share",
        items: [
          { name: "Aged rib, fermented chilli", description: "For two. Rest twenty minutes.", price: "48" },
          { name: "Hispi cabbage, brown butter", description: "The whole room orders it.", price: "14" },
        ],
      },
      {
        title: "Finish",
        items: [
          { name: "Burnt honey tart", description: "Cold cream, no fuss.", price: "9" },
        ],
      },
    ]),
    materials: [
      { label: "Charred oak", note: "The hearth" },
      { label: "Iron", note: "Pans, grates, patience" },
      { label: "Ember", note: "The only light in the room" },
    ],
    heroMeta: ["Open fire", "Counter seats", "One hearth"],
    specsTitle: "The room",
    specsExtra: [
      { label: "Seats", value: "24" },
      { label: "Hearth", value: "Wood-fired" },
      { label: "Menu", value: "Daily" },
    ],
    cta: {
      title: "Take a seat by the fire.",
      body: "Counter seats are released each morning. Private table on request.",
    },
    contact: contact(
      "hello@ember-kitchen.demo",
      "22 Kiln Street, London",
      "Tue–Sat · 17:30–late",
      "Sample venue. Details are illustrative.",
      "Book the counter"
    ),
    footerNote: "Fictional demonstration. No real bookings are taken.",
  },

  "sora-restaurant": {
    motif: "bowl",
    layout: "sora",
    hero: "center",
    heroSide: "right",
    nav: [
      { label: "Menu", href: "#showcase" },
      { label: "House", href: "#story" },
      { label: "Visit", href: "#contact" },
    ],
    navCta: { label: "Plan a visit", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / The house", "02 / The menu", "03 / The room", "04 / Details", "05 / Visit"),
    storyTitle: "A quieter table.",
    showcaseTitle: "Seasonal, not loud.",
    showcaseIntro:
      "A compact menu of small plates and one rice finish. Sake by the glass, never pushed.",
    showcase: menu([
      {
        title: "Small",
        items: [
          { name: "Chawanmushi, shiso", description: "Silken, warm, delicate." },
          { name: "Hamachi, yuzu, sea salt", description: "Cold, clean, bright." },
        ],
      },
      {
        title: "Hot",
        items: [
          { name: "Black cod, miso", description: "Marinated three days, grilled gently." },
          { name: "Aubergine, sesame, ginger", description: "Soft, charred, nutty." },
        ],
      },
      {
        title: "Rice",
        items: [
          { name: "Clay pot rice, pickles", description: "Crisp base, shared at the table." },
        ],
      },
      {
        title: "Sweet",
        items: [
          { name: "Hojicha, pear", description: "Roasted tea, poached fruit." },
        ],
      },
    ]),
    materials: [
      { label: "Pale timber", note: "Low counter, quiet room" },
      { label: "Paper", note: "Screens and a short menu" },
      { label: "Garden light", note: "One small courtyard" },
    ],
    heroMeta: ["Seasonal", "Sake by the glass", "Counter + table"],
    specsTitle: "The house",
    specsExtra: [
      { label: "Seats", value: "20" },
      { label: "Menu", value: "Seasonal" },
      { label: "Service", value: "Lunch + dinner" },
    ],
    cta: {
      title: "An easy evening.",
      body: "Walk-ins at the counter, reservations for tables.",
    },
    contact: contact(
      "hello@sora-restaurant.demo",
      "3 Garden Lane, London",
      "Tue–Sun · 12:00–14:30, 18:00–22:00",
      "Sample venue. Details are illustrative.",
      "Request a table"
    ),
    footerNote: "Fictional demonstration. No real reservations are taken.",
  },

  "neural-studio": {
    motif: "network",
    layout: "neural",
    hero: "split",
    heroSide: "left",
    nav: [
      { label: "Systems", href: "#showcase" },
      { label: "Work", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
    navCta: { label: "Start a project", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / The practice", "02 / Systems", "03 / Signals", "04 / Details", "05 / Contact"),
    storyTitle: "Intelligence, given form.",
    showcaseTitle: "Applied AI, built around the interface.",
    showcaseIntro:
      "We turn ambiguous data problems into products people can trust.",
    showcase: features([
      {
        index: "01",
        title: "Research",
        body: "Frame the problem before choosing a model. The brief is part of the work.",
      },
      {
        index: "02",
        title: "Product",
        body: "Design the system around the decision a person actually has to make.",
      },
      {
        index: "03",
        title: "Engineering",
        body: "Ship the interface, the evaluation loop and the observability together.",
      },
      {
        index: "04",
        title: "Deployment",
        body: "Operate with confidence: clear limits, measured behaviour, a human route in.",
      },
    ]),
    materials: [
      { label: "Node field", note: "The system, made visible" },
      { label: "Signal", note: "Cool light, precise type" },
      { label: "Glass", note: "Interfaces that explain themselves" },
    ],
    heroMeta: ["Applied AI", "Product studio", "Senior team"],
    specsTitle: "The studio",
    specsExtra: [
      { label: "Focus", value: "Applied AI" },
      { label: "Team", value: "Senior" },
      { label: "Engagement", value: "Project" },
    ],
    cta: {
      title: "Bring us the hard problem.",
      body: "A short technical brief is enough to start.",
    },
    contact: contact(
      "hello@neural-studio.demo",
      "Neural Studio, 4 Signal Yard",
      "Mon–Fri · 09:00–18:00",
      "Sample studio. Details are illustrative.",
      "Start a conversation"
    ),
    footerNote: "Fictional demonstration. No real projects or claims.",
  },

  "quantum-systems": {
    motif: "rings",
    layout: "quantum",
    hero: "center",
    heroSide: "left",
    nav: [
      { label: "Platform", href: "#showcase" },
      { label: "Research", href: "#story" },
      { label: "Company", href: "#contact" },
    ],
    navCta: { label: "Read the research", href: "#story" },
    heroCta: { primary: "#showcase", secondary: "#story" },
    order: ["showcase", "story", "specs", "materials", "contact"],
    labels: labels("01 / The platform", "02 / The method", "03 / The assembly", "04 / Details", "05 / Research"),
    storyTitle: "Measured in microns.",
    showcaseTitle: "A system, not a black box.",
    showcaseIntro:
      "Control, calibration and readout presented as observable parts.",
    showcase: features([
      {
        index: "01",
        title: "Control plane",
        body: "One console for the full assembly. State is visible before an action is taken.",
      },
      {
        index: "02",
        title: "Calibration",
        body: "Tolerance notes and repeatable runs. The method is published with the result.",
      },
      {
        index: "03",
        title: "Readout",
        body: "Clear telemetry, no hidden state. What the system knows, the operator knows.",
      },
      {
        index: "04",
        title: "Research",
        body: "Published methods, limits and open questions. Precision is a practice, not a claim.",
      },
    ]),
    materials: [
      { label: "Machined alloy", note: "The assembly" },
      { label: "Cold light", note: "Precision, not theatre" },
      { label: "Glass", note: "Readout and calibration" },
    ],
    heroMeta: ["Precision compute", "Modular", "Documented"],
    specsTitle: "The platform",
    specsExtra: [
      { label: "Architecture", value: "Modular" },
      { label: "Deployment", value: "On-prem / cloud" },
      { label: "Interface", value: "API + console" },
    ],
    cta: {
      title: "Read the method.",
      body: "Technical notes, tolerances and deployment details.",
    },
    contact: contact(
      "hello@quantum-systems.demo",
      "Quantum Systems, 1 Meridian Works",
      "Mon–Fri · 09:00–17:00",
      "Sample company. Details are illustrative.",
      "Request the technical brief"
    ),
    footerNote: "Fictional demonstration. No real products or certifications.",
  },

  "ai-product-launch": {
    motif: "prism",
    layout: "launch",
    hero: "full",
    heroSide: "right",
    nav: [
      { label: "Product", href: "#showcase" },
      { label: "Specs", href: "#specs" },
      { label: "Launch", href: "#contact" },
    ],
    navCta: { label: "Reserve the first run", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#specs" },
    order: ["showcase", "specs", "story", "materials", "contact"],
    labels: labels("01 / The object", "02 / Specifications", "03 / The system", "04 / Materials", "05 / Reserve"),
    storyTitle: "Small object. Serious machine.",
    showcaseTitle: "A compact compute layer for the desk.",
    showcaseIntro:
      "One hero, one clear promise, and a specification sheet with nothing hidden.",
    showcase: specShowcase(
      [
        { label: "Form factor", value: "Compact", note: "Desk or quiet rack" },
        { label: "Compute", value: "AI accelerator", note: "Local inference" },
        { label: "Memory", value: "64 GB", note: "Unified" },
        { label: "Connectivity", value: "USB-C + Ethernet", note: "Open API" },
      ],
      [
        { label: "Enclosure", value: "Glass + anodised metal" },
        { label: "Power", value: "180 W" },
        { label: "Deployment", value: "Desk / rack" },
        { label: "Availability", value: "First run" },
      ]
    ),
    materials: [
      { label: "Glass", note: "The compute prism" },
      { label: "Anodised metal", note: "A quiet enclosure" },
      { label: "Studio light", note: "One cinematic key" },
    ],
    heroMeta: ["Compact AI", "Desk-ready", "First run"],
    specsTitle: "Illustrative specification",
    specsExtra: [
      { label: "Warranty", value: "2 years" },
      { label: "Support", value: "Direct" },
      { label: "Ship", value: "Q3" },
    ],
    cta: {
      title: "Reserve the first run.",
      body: "A refundable reservation request. No payment is taken on this demo.",
    },
    contact: contact(
      "launch@ai-product-launch.demo",
      "Launch, 9 Studio Row",
      "Mon–Fri · 09:00–18:00",
      "Sample product. Details are illustrative.",
      "Reserve the first run"
    ),
    footerNote: "Fictional demonstration. No real orders or payments.",
  },

  vaultline: {
    motif: "vault",
    layout: "vaultline",
    hero: "split",
    heroSide: "right",
    nav: [
      { label: "Infrastructure", href: "#showcase" },
      { label: "Assurance", href: "#story" },
      { label: "Disclosure", href: "#contact" },
    ],
    navCta: { label: "Open disclosure", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["story", "showcase", "specs", "materials", "contact"],
    labels: labels("01 / The vault", "02 / Controls", "03 / Assurance", "04 / Details", "05 / Disclosure"),
    storyTitle: "Security you can inspect.",
    showcaseTitle: "Controls, audit history, and a direct route in.",
    showcaseIntro:
      "A custody platform that shows its work.",
    showcase: features([
      {
        index: "01",
        title: "Custody",
        body: "Key separation and policy. Every action has a named owner.",
      },
      {
        index: "02",
        title: "Audit",
        body: "A continuous event history, written to be read by an outside reviewer.",
      },
      {
        index: "03",
        title: "Assurance",
        body: "Controls documented with scope and evidence, not a badge on a landing page.",
      },
      {
        index: "04",
        title: "Disclosure",
        body: "A direct security channel with a clear scope and response expectation.",
      },
    ]),
    materials: [
      { label: "Violet light", note: "Control room calm" },
      { label: "Layered steel", note: "The vault" },
      { label: "Audit paper", note: "Evidence, not decoration" },
    ],
    heroMeta: ["Custody infrastructure", "Inspectable", "Direct disclosure"],
    specsTitle: "The platform",
    specsExtra: [
      { label: "Deployment", value: "Private cloud" },
      { label: "Controls", value: "Documented" },
      { label: "Audit cadence", value: "Continuous" },
      { label: "Disclosure", value: "Direct" },
    ],
    cta: {
      title: "Inspect the controls.",
      body: "Request the control overview or open a disclosure.",
    },
    contact: contact(
      "security@vaultline.demo",
      "Vaultline, 7 Bastion Court",
      "Mon–Fri · 09:00–18:00",
      "Sample company. Details are illustrative.",
      "Open disclosure"
    ),
    footerNote: "Fictional demonstration. No real certifications or audit claims.",
  },

  "onchain-studio": {
    motif: "blocks",
    layout: "onchain",
    hero: "split",
    heroSide: "left",
    nav: [
      { label: "Protocols", href: "#showcase" },
      { label: "Studio", href: "#story" },
      { label: "Notes", href: "#materials" },
    ],
    navCta: { label: "Start a project", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#materials" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / The studio", "02 / Protocols", "03 / Notes", "04 / Details", "05 / Contact"),
    storyTitle: "Onchain, made legible.",
    showcaseTitle: "Products, not narratives.",
    showcaseIntro:
      "Case studies describe the problem, the interface and the trade-offs.",
    showcase: features([
      {
        index: "01",
        title: "Interfaces",
        body: "Wallet flows that explain themselves before a signature is requested.",
      },
      {
        index: "02",
        title: "Protocol design",
        body: "Mechanics documented when they exist, in language a user can follow.",
      },
      {
        index: "03",
        title: "Testing",
        body: "Every interface is tested against real state, not a happy-path mock.",
      },
      {
        index: "04",
        title: "Notes",
        body: "A public working file on patterns, flows and the edges of onchain UX.",
      },
    ]),
    materials: [
      { label: "Ledger blocks", note: "Structure, not speculation" },
      { label: "Muted green", note: "Terminal calm" },
      { label: "Working notes", note: "Written in public" },
    ],
    heroMeta: ["Product engineering", "Open networks", "Auditable work"],
    specsTitle: "The studio",
    specsExtra: [
      { label: "Focus", value: "Onchain products" },
      { label: "Team", value: "Design + protocol" },
      { label: "Engagement", value: "Project" },
    ],
    cta: {
      title: "Make the next one legible.",
      body: "A short brief and a link to the product is enough.",
    },
    contact: contact(
      "hello@onchain-studio.demo",
      "Onchain Studio, 12 Ledger Lane",
      "Mon–Fri · 10:00–18:00",
      "Sample studio. Details are illustrative.",
      "Start a project"
    ),
    footerNote: "Fictional demonstration. No real projects or financial claims.",
  },

  "cyber-defense": {
    motif: "shield",
    layout: "cyber",
    hero: "full",
    heroSide: "right",
    nav: [
      { label: "Defense", href: "#showcase" },
      { label: "Response", href: "#story" },
      { label: "Brief", href: "#contact" },
    ],
    navCta: { label: "Request a brief", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["showcase", "story", "materials", "specs", "contact"],
    labels: labels("01 / The model", "02 / The response", "03 / The record", "04 / Details", "05 / Brief"),
    storyTitle: "Prepared before impact.",
    showcaseTitle: "A calm operating system for response.",
    showcaseIntro:
      "Monitoring, escalation and a rehearsed plan.",
    showcase: timeline([
      {
        step: "01",
        title: "Signal",
        body: "Telemetry is mapped to the decisions it supports. Alerts are grouped by impact.",
      },
      {
        step: "02",
        title: "Decide",
        body: "Escalation paths and decision rights are agreed before an incident.",
      },
      {
        step: "03",
        title: "Respond",
        body: "Every runbook has an owner, a review date and a rehearsed path.",
      },
      {
        step: "04",
        title: "Record",
        body: "A factual timeline, the response taken and the changes that follow.",
      },
    ]),
    materials: [
      { label: "Scan rings", note: "Continuous signal" },
      { label: "Signal red", note: "One clear alarm" },
      { label: "Incident paper", note: "A written record" },
    ],
    heroMeta: ["Managed response", "Rehearsed", "Documented"],
    specsTitle: "The practice",
    specsExtra: [
      { label: "Model", value: "Managed" },
      { label: "Coverage", value: "24/7" },
      { label: "Runbooks", value: "Owned" },
      { label: "Reporting", value: "Written" },
    ],
    cta: {
      title: "Rehearse the response.",
      body: "Request a response brief for your team.",
    },
    contact: contact(
      "response@cyber-defense.demo",
      "Cyber Defense, 5 Watchtower Square",
      "24/7 · Response desk",
      "Sample company. Details are illustrative.",
      "Request a brief"
    ),
    footerNote: "Fictional demonstration. No real security services or guarantees.",
  },

  "apex-marque": {
    motif: "car",
    layout: "apex",
    hero: "full",
    heroSide: "left",
    nav: [
      { label: "Marque", href: "#story" },
      { label: "The car", href: "#showcase" },
      { label: "Configure", href: "#contact" },
    ],
    navCta: { label: "Build a spec", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["showcase", "story", "specs", "materials", "contact"],
    labels: labels("01 / The car", "02 / The marque", "03 / Specification", "04 / Materials", "05 / Configure"),
    storyTitle: "The long way home.",
    showcaseTitle: "One car, clearly described.",
    showcaseIntro:
      "A single grand tourer under one key light. Long proportions, a calm cabin, an honest specification.",
    showcase: specShowcase(
      [
        { label: "Power", value: "620 hp", note: "Illustrative" },
        { label: "0–60", value: "3.4 s", note: "Illustrative" },
        { label: "Range", value: "410 mi", note: "Illustrative" },
        { label: "Weight", value: "1,780 kg", note: "Illustrative" },
      ],
      [
        { label: "Layout", value: "Front-engine, RWD" },
        { label: "Gearbox", value: "8-speed" },
        { label: "Wheels", value: "21-inch" },
        { label: "Trim", value: "Touring / Grand / Edition" },
      ]
    ),
    materials: [
      { label: "Paint", note: "One key light" },
      { label: "Alloy", note: "Long proportions" },
      { label: "Leather", note: "A calm cabin" },
    ],
    heroMeta: ["Grand tourer", "One key light", "Built to order"],
    specsTitle: "Illustrative specification",
    specsExtra: [
      { label: "Seats", value: "2+2" },
      { label: "Boot", value: "310 L" },
      { label: "Build", value: "To order" },
    ],
    cta: {
      title: "Build the long way home.",
      body: "Choose a trim and request a build slot.",
    },
    contact: contact(
      "atelier@apex-marque.demo",
      "Apex Marque, 1 Concours Way",
      "By appointment",
      "Sample marque. Details are illustrative.",
      "Request a build slot"
    ),
    footerNote: "Fictional demonstration. No real vehicles, orders or claims.",
  },

  "velocity-studio": {
    motif: "aero",
    layout: "velocity",
    hero: "split",
    heroSide: "left",
    nav: [
      { label: "Motion", href: "#showcase" },
      { label: "Aero", href: "#story" },
      { label: "Launch", href: "#contact" },
    ],
    navCta: { label: "See the study", href: "#showcase" },
    heroCta: { primary: "#showcase", secondary: "#story" },
    order: ["showcase", "story", "specs", "materials", "contact"],
    labels: labels("01 / The study", "02 / The air", "03 / Specification", "04 / Materials", "05 / Launch"),
    storyTitle: "Shape in motion.",
    showcaseTitle: "Aerodynamics as design.",
    showcaseIntro:
      "A performance study built around a launch film and a precise aero story.",
    showcase: specShowcase(
      [
        { label: "Downforce", value: "410 kg", note: "Illustrative" },
        { label: "Drag", value: "0.28 Cd", note: "Illustrative" },
        { label: "Weight", value: "1,190 kg", note: "Illustrative" },
        { label: "Output", value: "540 hp", note: "Illustrative" },
      ],
      [
        { label: "Layout", value: "Mid-engine" },
        { label: "Body", value: "Carbon composite" },
        { label: "Aero", value: "Active rear" },
        { label: "Launch", value: "Film + study" },
      ]
    ),
    materials: [
      { label: "Carbon", note: "The surface language" },
      { label: "Signal red", note: "Directional light" },
      { label: "Wind tunnel", note: "The proof" },
    ],
    heroMeta: ["Performance study", "Aero-led", "Film + specs"],
    specsTitle: "Illustrative specification",
    specsExtra: [
      { label: "Seats", value: "2" },
      { label: "Drive", value: "RWD" },
      { label: "Build", value: "Study" },
    ],
    cta: {
      title: "See the shape in motion.",
      body: "Request the launch film and the full aero notes.",
    },
    contact: contact(
      "studio@velocity-studio.demo",
      "Velocity Studio, 8 Aero Court",
      "Mon–Fri · 09:00–18:00",
      "Sample studio. Details are illustrative.",
      "Request the study"
    ),
    footerNote: "Fictional demonstration. No real vehicles or claims.",
  },

  "electric-motion": {
    motif: "pod",
    layout: "electric",
    hero: "center",
    heroSide: "right",
    nav: [
      { label: "Mobility", href: "#showcase" },
      { label: "Charge", href: "#story" },
      { label: "Visit", href: "#contact" },
    ],
    navCta: { label: "Book a test drive", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#story" },
    order: ["story", "showcase", "specs", "materials", "contact"],
    labels: labels("01 / The city", "02 / The vehicle", "03 / Specification", "04 / Materials", "05 / Visit"),
    storyTitle: "Forward, quietly.",
    showcaseTitle: "Small footprint. Generous room.",
    showcaseIntro:
      "A compact electric pod designed around the passenger, with a simple charging story.",
    showcase: specShowcase(
      [
        { label: "Range", value: "180 mi", note: "Illustrative" },
        { label: "Charge", value: "18 min", note: "Illustrative" },
        { label: "Seats", value: "4", note: "Flat floor" },
        { label: "Length", value: "3.1 m", note: "City footprint" },
      ],
      [
        { label: "Layout", value: "Flat floor" },
        { label: "Charge", value: "DC + home" },
        { label: "Connector", value: "CCS" },
        { label: "Availability", value: "City pilot" },
      ]
    ),
    materials: [
      { label: "Soft daylight", note: "Calm, optimistic" },
      { label: "Recycled textile", note: "The cabin" },
      { label: "Charge arch", note: "A simple stop" },
    ],
    heroMeta: ["Urban mobility", "Compact", "Electric"],
    specsTitle: "Illustrative specification",
    specsExtra: [
      { label: "Drive", value: "FWD" },
      { label: "Top speed", value: "80 mph" },
      { label: "Warranty", value: "4 years" },
    ],
    cta: {
      title: "Take the short way.",
      body: "Book a city test drive or find a charge point.",
    },
    contact: contact(
      "hello@electric-motion.demo",
      "Electric Motion, 3 Depot Lane",
      "Mon–Sat · 09:00–18:00",
      "Sample mobility service. Details are illustrative.",
      "Book a test drive"
    ),
    footerNote: "Fictional demonstration. No real vehicles or bookings.",
  },

  "aldane-voss": {
    motif: "heritage",
    layout: "aldane",
    hero: "center",
    heroSide: "left",
    nav: [
      { label: "Collection", href: "#showcase" },
      { label: "House", href: "#story" },
      { label: "Adults 18+", href: "#contact" },
    ],
    navCta: { label: "Open catalogue", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#story" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / The catalogue", "02 / The house", "03 / Materials", "04 / Format", "05 / Notice"),
    storyTitle: "Blends, specified plainly.",
    showcaseTitle: "Four numbered blends.",
    showcaseIntro:
      "A fictional tobacco catalogue for adult readers.",
    showcase: collection([
      { index: "01", name: "Cedar", note: "Connecticut · 6 × 50", tags: ["Cedar", "Cream", "Paper"] },
      { index: "02", name: "Maduro", note: "Nicaragua · 5 × 54", tags: ["Cocoa", "Leather", "Dark"] },
      { index: "03", name: "Rosado", note: "Honduras · 6 × 52", tags: ["Rose", "Cedar", "Spice"] },
      { index: "04", name: "Double Corona", note: "Dominican · 7 × 50", tags: ["Cedar", "Toast", "Long"] },
    ]),
    materials: [
      { label: "Cedar", note: "The atelier" },
      { label: "Aged brass", note: "Index and seal" },
      { label: "Printed index", note: "Archival restraint" },
    ],
    heroMeta: ["Adults 18+", "Fictional house", "Archival"],
    specsTitle: "The format",
    specsExtra: [
      { label: "Format", value: "Published HTML + WebGL" },
      { label: "Access", value: "18+ gate" },
      { label: "Collection", value: "4 blends" },
    ],
    cta: {
      title: "Open the catalogue.",
      body: "The full catalogue is age-gated and opens as a standalone document.",
    },
    contact: contact(
      "house@aldane-voss.demo",
      "Aldane & Voss, by appointment",
      "—",
      "Fictional demonstration. Adults 18+ only.",
      "Open the catalogue"
    ),
    footerNote: "Fictional demonstration. Adults 18+ only.",
  },

  "cigar-atelier": {
    motif: "cigar",
    layout: "cigar",
    hero: "center",
    heroSide: "left",
    nav: [
      { label: "Collection", href: "#showcase" },
      { label: "Atelier", href: "#story" },
      { label: "Adults 18+", href: "#contact" },
    ],
    navCta: { label: "Read the notice", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#story" },
    order: ["story", "showcase", "materials", "specs", "contact"],
    labels: labels("01 / The atelier", "02 / The collection", "03 / Materials", "04 / Details", "05 / Notice"),
    storyTitle: "Craft, kept quiet.",
    showcaseTitle: "A small collection, presented with restraint.",
    showcaseIntro:
      "Cedar, aged brass and printed index cards. A fictional house for adult readers.",
    showcase: collection([
      { index: "01", name: "Cedar", note: "Connecticut · 6 × 50", tags: ["Cedar", "Cream", "Paper"] },
      { index: "02", name: "Maduro", note: "Nicaragua · 5 × 54", tags: ["Cocoa", "Leather", "Dark"] },
      { index: "03", name: "Rosado", note: "Honduras · 6 × 52", tags: ["Rose", "Cedar", "Spice"] },
      { index: "04", name: "Double Corona", note: "Dominican · 7 × 50", tags: ["Cedar", "Toast", "Long"] },
    ]),
    materials: [
      { label: "Cedar", note: "The atelier" },
      { label: "Aged brass", note: "Index and seal" },
      { label: "Printed index", note: "Archival restraint" },
    ],
    heroMeta: ["Adults 18+", "Fictional", "Small batch"],
    specsTitle: "The collection",
    specsExtra: [
      { label: "Access", value: "18+ gate" },
      { label: "Collection", value: "4" },
      { label: "Format", value: "Single page" },
    ],
    cta: {
      title: "Read the notice.",
      body: "This is a fictional demonstration. Operators are responsible for local restrictions.",
    },
    contact: contact(
      "house@cigar-atelier.demo",
      "Cigar Atelier, by appointment",
      "—",
      "Fictional demonstration. Adults 18+ only.",
      "Request the notice"
    ),
    footerNote: "Fictional demonstration. Adults 18+ only. No sales or health claims.",
  },

  "modern-tobacco": {
    motif: "tin",
    layout: "modern",
    hero: "split",
    heroSide: "right",
    nav: [
      { label: "Edit", href: "#showcase" },
      { label: "Stockists", href: "#story" },
      { label: "Adults 18+", href: "#contact" },
    ],
    navCta: { label: "Read the notice", href: "#contact" },
    heroCta: { primary: "#showcase", secondary: "#contact" },
    order: ["showcase", "story", "materials", "specs", "contact"],
    labels: labels("01 / The edit", "02 / The shelf", "03 / Materials", "04 / Details", "05 / Notice"),
    storyTitle: "A different shelf.",
    showcaseTitle: "Fewer objects, better presented.",
    showcaseIntro:
      "A fictional boutique concept for adult products.",
    showcase: collection([
      { index: "01", name: "The Tin", note: "Brushed steel · 50 g", tags: ["Steel", "Neutral", "Object"] },
      { index: "02", name: "The Edit", note: "Three blends · 10 × 2", tags: ["Edit", "Paper", "Set"] },
      { index: "03", name: "The Shelf", note: "Display set · powder-coated", tags: ["Shelf", "Soft light", "Retail"] },
    ]),
    materials: [
      { label: "Brushed steel", note: "The tin" },
      { label: "Soft light", note: "The shelf" },
      { label: "Neutral paper", note: "The edit" },
    ],
    heroMeta: ["Adults 18+", "Fictional", "Contemporary"],
    specsTitle: "The edit",
    specsExtra: [
      { label: "Access", value: "18+ gate" },
      { label: "Edit", value: "3 objects" },
      { label: "Format", value: "Single page" },
    ],
    cta: {
      title: "Read the notice.",
      body: "Fictional demonstration. No sales, no health claims.",
    },
    contact: contact(
      "studio@modern-tobacco.demo",
      "Modern Tobacco, by appointment",
      "—",
      "Fictional demonstration. Adults 18+ only.",
      "Request the notice"
    ),
    footerNote: "Fictional demonstration. Adults 18+ only. No sales or health claims.",
  },
};
