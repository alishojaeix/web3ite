/**
 * Electric Motion - sample urban electric mobility content.
 *
 * The company, pod vehicle, charging hubs, range figures and test-drive
 * service are fictional. No real vehicle, charger network or booking is offered.
 */

export const electricNav = [
  { label: "The city", href: "#story" },
  { label: "The vehicle", href: "#showcase" },
  { label: "Specification", href: "#specs" },
  { label: "Materials", href: "#materials" },
  { label: "Visit", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Electric Motion / Urban mobility",
  headline: "Forward,",
  headlineAccent: "quietly.",
  intro:
    "An electric mobility studio for the city. A smooth four-seat pod, a simple charging arch and a calmer way to move across short distances.",
  status: "City pilot · 3 Depot Lane",
  note: "Sample mobility studio · fictional vehicle & charge network",
  caption: [
    "Pod 01 beneath the semicircular charge arch",
    "Illustrative concept · 3.1 m footprint · flat cabin floor",
  ],
} as const;

export const heroBadges = [
  { label: "Footprint", value: "3.1 m city length" },
  { label: "Cabin", value: "4 seats · flat floor" },
  { label: "Stop", value: "18 min arch charge" },
] as const;

export const highlights = [
  {
    label: "Range",
    value: "180",
    unit: "mi",
    note: "City cycle · illustrative",
  },
  {
    label: "Charge",
    value: "18",
    unit: "min",
    note: "10–80% DC arch · illustrative",
  },
  {
    label: "Seats",
    value: "4",
    unit: "places",
    note: "Flat floor · step-in cabin",
  },
  {
    label: "Length",
    value: "3.1",
    unit: "m",
    note: "Half a standard bay",
  },
] as const;

export const cityStory = {
  label: "01 / The city",
  title: "Built for the trips people actually make.",
  intro:
    "Most city journeys are under twelve miles and carry one or two people plus a bag. Electric Motion replaces two tonnes of highway metalwork with a quiet, glass-canopied pod scaled to the street.",
  chapters: [
    {
      index: "01",
      title: "Small footprint, generous room",
      body: "With wheels pushed to the four corners and the battery laid flat under the floor, four adults sit upright in a footprint shorter than a compact hatchback.",
      metric: "3.1 m × 1.68 m",
    },
    {
      index: "02",
      title: "A simple energy story",
      body: "Charge time, city range and connector types are stated in plain language. No highway-only range claims or asterisks hidden behind a hero photograph.",
      metric: "CCS + Home AC",
    },
    {
      index: "03",
      title: "Quiet at street speed",
      body: "Soft daylight glazing, low window sills and an acoustic textile interior keep the cabin calm at 20 to 50 mph — the speeds where city life happens.",
      metric: "80 mph ceiling",
    },
  ],
  quote: {
    text: "A city car should take up less of the street and give back more of the view.",
    note: "Design note · sample copy",
  },
} as const;

export const vehicleShowcase = {
  label: "02 / The vehicle & charge",
  title: "Small footprint. Generous room.",
  intro:
    "Explore how the pod handles everyday city loops and where the semicircular charging arches sit across the sample pilot map.",
  note: "Interactive sample. Range, charge times, energy use and hub bays are illustrative figures for this template.",
  trips: [
    {
      id: "morning",
      name: "Morning loop",
      distance: "14 mi",
      batteryUsed: "8%",
      remainingMi: "166 mi",
      archTopUp: "2 min",
      homeTopUp: "38 min",
      cabinSetup: "4 seats upright · 2 carry-on bags",
      summary:
        "School drop, studio commute and a market stop. Uses less than a tenth of the battery; most drivers only plug in twice a week.",
    },
    {
      id: "crosstown",
      name: "Cross-city day",
      distance: "48 mi",
      batteryUsed: "27%",
      remainingMi: "132 mi",
      archTopUp: "6 min",
      homeTopUp: "2 hr 10 min",
      cabinSetup: "2 seats + folded rear bench · parcel deck",
      summary:
        "Three neighbourhoods, four stops and an evening return across the river. A six-minute pause under a charge arch restores the full day.",
    },
    {
      id: "weekend",
      name: "Weekend coastal",
      distance: "118 mi",
      batteryUsed: "66%",
      remainingMi: "62 mi",
      archTopUp: "18 min",
      homeTopUp: "5 hr 20 min",
      cabinSetup: "2 adults · weekend luggage on flat floor",
      summary:
        "Out of the ring road to the coast and back. One 18-minute DC arch stop brings the pod from 10% back to 80% while you have a coffee.",
    },
  ],
  hubs: [
    {
      id: "depot",
      code: "H01",
      name: "Depot Lane Hub",
      district: "Central · SE1",
      bays: "6 arches · CCS 120 kW",
      hours: "06:00–23:00 · Test drives",
      note: "Main studio courtyard with step-free canopy, cycle racks and test-drive desk.",
    },
    {
      id: "wharf",
      code: "H02",
      name: "Canal Wharf Arch",
      district: "East · E8",
      bays: "4 arches · CCS 120 kW",
      hours: "24 hr access · Pilot pass",
      note: "Waterside turn-in bay designed for 15-minute top-ups between studio districts.",
    },
    {
      id: "botanical",
      code: "H03",
      name: "Botanical Gardens Stop",
      district: "North · NW1",
      bays: "4 arches · Solar canopy",
      hours: "07:00–22:00 · Quiet zone",
      note: "Daylight timber-and-steel arch along the park perimeter with level kerb access.",
    },
    {
      id: "harbour",
      code: "H04",
      name: "Harbour Slipway",
      district: "South · SW11",
      bays: "3 arches · CCS + AC",
      hours: "24 hr access · River loop",
      note: "Compact neighbourhood stop serving riverside apartments and weekend coastal routes.",
    },
  ],
} as const;

export const specification = {
  label: "03 / Specification",
  title: "Illustrative specification.",
  intro:
    "Stated in plain figures. Every measurement on this page is sample copy for the template — not a homologated or certified vehicle.",
  groups: [
    {
      title: "Range & charge",
      rows: [
        { label: "City range", value: "180 mi (illustrative)" },
        { label: "Arch charge (10–80%)", value: "18 min DC" },
        { label: "Home wallbox (0–100%)", value: "6 hr 30 min AC" },
        { label: "Connector", value: "CCS + Type 2" },
      ],
    },
    {
      title: "Footprint & cabin",
      rows: [
        { label: "Length", value: "3.1 m" },
        { label: "Width", value: "1.68 m" },
        { label: "Seating", value: "4 adults · flat floor" },
        { label: "Step-in height", value: "340 mm" },
      ],
    },
    {
      title: "Drive & pilot",
      rows: [
        { label: "Drive", value: "Front-wheel (FWD)" },
        { label: "Top speed", value: "80 mph" },
        { label: "Warranty", value: "4 years (sample)" },
        { label: "Availability", value: "City pilot demo" },
      ],
    },
  ],
  honestNote:
    "No real vehicle, battery chemistry, WLTP/EPA figure or charging network is represented. This template demonstrates a calm, transparent product page for urban mobility brands.",
} as const;

export const materials = {
  label: "04 / Materials",
  title: "Soft daylight, recycled textile and brushed aluminium.",
  intro:
    "The pod avoids dark tinting and aggressive gloss. Every surface is chosen to make a compact cabin feel open, durable and easy to clean.",
  items: [
    {
      name: "Soft daylight glazing",
      note: "Calm, optimistic",
      swatch: "daylight",
      body: "A wraparound glass canopy with UV-filtering sage tint lets natural light fill the cabin without glare or heat build-up.",
    },
    {
      name: "Recycled weave textile",
      note: "The cabin",
      swatch: "textile",
      body: "Seat bolsters and door cards are upholstered in a warm pebble-grey recycled polyester weave that wears like studio furniture.",
    },
    {
      name: "Anodised charge arch",
      note: "A simple stop",
      swatch: "arch",
      body: "Bead-blasted eucalyptus aluminium with a single mint status ring that pulses softly while the cable is latched.",
    },
  ],
  note: "Illustrative material studies for layout demonstration.",
} as const;

export const contact = {
  label: "05 / Visit & test drive",
  title: "Take the short way.",
  intro:
    "Book a quiet 30-minute loop from our Depot Lane courtyard, or ask about bringing a charging arch to your neighbourhood.",
  facts: [
    { label: "Loop", value: "30 min city drive" },
    { label: "Hub", value: "3 Depot Lane" },
    { label: "Seats", value: "Bring up to 3 guests" },
    { label: "Cost", value: "Demo only" },
  ],
  email: "hello@electric-motion.demo",
  phone: "+44 20 7946 0180",
  address: ["Electric Motion Studio", "3 Depot Lane", "London SE1 4QT"],
  hours: "Mon–Sat · 09:00–18:00",
  note: "Fictional mobility service. Address, telephone number, hubs and test drives are illustrative.",
  form: {
    title: "Book a city test drive",
    sub: "Thirty minutes on city streets, no showroom theatre",
    hubs: [
      "Depot Lane Hub (Central)",
      "Canal Wharf Arch (East)",
      "Botanical Gardens Stop (North)",
      "Harbour Slipway (South)",
    ],
    note: "Sample booking form. Nothing is sent to a real mobility operator and no vehicle booking is created.",
    confirmation:
      "Your demo test-drive request has been recorded. Because this is a fictional template website, no appointment or vehicle has been scheduled.",
    fallback:
      "The demo service is unavailable right now. Please use the sample email address listed on this page.",
  },
} as const;
