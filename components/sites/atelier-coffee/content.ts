/**
 * Atelier Coffee — sample venue content.
 *
 * The venue, address, prices, journal entries and imagery are fictional and
 * exist only to demonstrate this template. Replace them with owner-approved
 * details before using the site for a real café.
 */

export type MenuItem = {
  name: string;
  origin: string;
  notes: string;
  price: string;
  tag?: string;
};

export type MenuGroup = {
  id: string;
  label: string;
  note: string;
  items: MenuItem[];
};

export type BrewRecipe = {
  id: string;
  label: string;
  summary: string;
  duration: number;
  stats: { label: string; value: string }[];
  steps: string[];
};

export type JournalEntry = {
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
};

export const atelierNav = [
  { label: "Coffee", href: "#coffee" },
  { label: "Brew", href: "#brew" },
  { label: "The room", href: "#room" },
  { label: "Journal", href: "#journal" },
  { label: "Visit", href: "#visit" },
] as const;

export const heroLot = {
  label: "On the bar this week",
  name: "Kenia AA",
  origin: "Nyeri, Kenya",
  notes: "Blackcurrant · cane sugar · clean",
  facts: ["Washed", "1,750 m", "SL28"],
};

export const heroMeta = [
  "Twelve seats, one counter",
  "Tue–Sun, daylight hours",
  "14 Foundry Lane, London",
];

export const ticker = [
  "Weighed and poured",
  "Single-origin filter",
  "One counter, twelve seats",
  "Roast calendar every Thursday",
  "No rush",
];

export const story = {
  label: "01 / The bar",
  title: "One station. Twelve seats. Nothing on tap.",
  paragraphs: [
    "Atelier is a small coffee studio in a former print room. The press is gone; the long bench, the north light and the smell of paper stayed.",
    "There is one pour-over station and one grinder. Every cup is weighed, poured and handed across the counter. The list is short because the attention is not.",
  ],
  quote:
    "We built the room around the pour-over, not the other way around.",
  quoteBy: "Mara Ellis, founder",
  details: [
    {
      index: "01",
      title: "Weighed",
      body: "Fifteen grams in, two hundred and fifty out. The recipe is written on the wall, not hidden behind the bar.",
    },
    {
      index: "02",
      title: "Poured",
      body: "Water at 94°C, in three slow stages. The kettle is the only machine that makes a sound.",
    },
    {
      index: "03",
      title: "Served",
      body: "At the counter, in a warmed cup. No names, no trays, no lid unless you ask for one.",
    },
  ],
};

export const menuGroups: MenuGroup[] = [
  {
    id: "filter",
    label: "Filter",
    note: "Brewed to order, one cup at a time. Ask for the current lot.",
    items: [
      {
        name: "Kenia AA",
        origin: "Nyeri, Kenya",
        notes: "Blackcurrant, cane sugar, a clean finish",
        price: "4.50",
        tag: "This week",
      },
      {
        name: "Colombia Huila",
        origin: "Huila, Colombia",
        notes: "Orange, cocoa, soft acidity",
        price: "4.50",
      },
      {
        name: "Ethiopia Guji",
        origin: "Guji, Ethiopia",
        notes: "Jasmine, bergamot, tea-like",
        price: "5.00",
      },
    ],
  },
  {
    id: "espresso",
    label: "Espresso",
    note: "Two options, both short. Oat milk is our house milk.",
    items: [
      {
        name: "House blend",
        origin: "Brazil & Colombia",
        notes: "Chocolate, hazelnut, a short finish",
        price: "3.20",
      },
      {
        name: "Single origin",
        origin: "Rotating lot",
        notes: "Ask for today's coffee and we'll talk you through it",
        price: "4.00",
      },
      {
        name: "Oat flat white",
        origin: "House blend",
        notes: "Silk texture, no sugar",
        price: "3.80",
      },
    ],
  },
  {
    id: "counter",
    label: "Counter",
    note: "Small things to share, or not. Baked here each morning.",
    items: [
      {
        name: "Pour-over flight",
        origin: "Three cups",
        notes: "Weighed and poured side by side, with notes",
        price: "9.00",
      },
      {
        name: "Cascara fizz",
        origin: "Coffee cherry",
        notes: "Soda, orange peel, served over ice",
        price: "4.50",
      },
      {
        name: "Brown butter cookie",
        origin: "Baked at 07:00",
        notes: "Dark chocolate, flaked salt",
        price: "3.00",
      },
    ],
  },
];

export const brewRecipes: BrewRecipe[] = [
  {
    id: "v60",
    label: "V60",
    summary: "The everyday filter recipe. Clear, sweet and forgiving.",
    duration: 180,
    stats: [
      { label: "Coffee", value: "15 g" },
      { label: "Water", value: "250 g" },
      { label: "Temperature", value: "94°C" },
      { label: "Grind", value: "Medium-fine" },
    ],
    steps: [
      "Rinse the paper filter and warm the carafe. Discard the rinse water.",
      "Add 15 g of coffee and level the bed. Tare the scale.",
      "Bloom with 45 g of water. Wait 45 seconds.",
      "Pour in two slow spirals to 250 g, finishing by 2:15.",
      "Let the bed draw down flat. The cup should be ready at 3:00.",
    ],
  },
  {
    id: "aeropress",
    label: "AeroPress",
    summary: "A rounder cup for slower mornings. Easy to repeat.",
    duration: 105,
    stats: [
      { label: "Coffee", value: "16 g" },
      { label: "Water", value: "230 g" },
      { label: "Temperature", value: "88°C" },
      { label: "Grind", value: "Medium" },
    ],
    steps: [
      "Rinse the paper filter and fit it to the cap. Warm the cup.",
      "Add 16 g of coffee, then pour 230 g of water in one go.",
      "Stir three times and place the plunger to seal the chamber.",
      "Wait 60 seconds, then press gently for 30 seconds.",
      "Stop at the hiss. Top the cup with hot water if you like it longer.",
    ],
  },
  {
    id: "espresso",
    label: "Espresso",
    summary: "For the home machine: a short, balanced starting point.",
    duration: 28,
    stats: [
      { label: "Dose", value: "18 g" },
      { label: "Yield", value: "36 g" },
      { label: "Temperature", value: "93°C" },
      { label: "Grind", value: "Fine" },
    ],
    steps: [
      "Warm the cup and flush the group head.",
      "Dose 18 g and distribute evenly before tamping level.",
      "Lock in and start the shot immediately.",
      "Aim for 36 g in the cup in 26–30 seconds.",
      "If it runs fast, grind finer; if it stalls, go coarser.",
    ],
  },
];

export const roomScenes = [
  {
    id: "counter",
    title: "The counter",
    caption: "Pale oak, one station. The pour-over sits where the print press used to.",
    detail: "Six seats at the bar",
  },
  {
    id: "window",
    title: "The window",
    caption: "North light for most of the morning. The bench goes to whoever arrives first.",
    detail: "Three seats, one bench",
  },
  {
    id: "shelf",
    title: "The shelf",
    caption: "Brew notes, spare filters, and the week's open bags. Ask to see any of them.",
    detail: "The working archive",
  },
] as const;

export const journalEntries: JournalEntry[] = [
  {
    title: "The case for one cup",
    date: "04 October 2026",
    readingTime: "3 min",
    excerpt:
      "A second cup is easy. The first one is the one worth paying attention to.",
    body: [
      "We serve one cup at a time because the second cup is usually a habit, not a decision. When the bar is quiet, the first cup gets the whole ritual: the rinse, the bloom, the slow spiral, the pause before the first sip.",
      "It also makes the list honest. If a coffee cannot hold its own in a single cup, it does not belong on the shelf. Rotating the lot every week keeps us from hiding behind a familiar label.",
      "Sit with it. If you want a second, we will happily make one. We would just rather you asked.",
    ],
  },
  {
    title: "Why the water gets weighed",
    date: "18 September 2026",
    readingTime: "2 min",
    excerpt:
      "A scale is not fussiness. It is the difference between a recipe and a guess.",
    body: [
      "Coffee is about twenty per cent of a filter brew and water is nearly all the rest. Weighing both is the simplest way to make a cup repeatable on a busy morning, and the easiest way to change one variable when something tastes off.",
      "The recipe on the wall is a starting point, not a rule. If your grinder runs coarse, go a little finer. If the drawdown stalls, go a little coarser. Change one thing at a time and taste the difference.",
      "The timer starts when the water hits the coffee, not when the kettle starts pouring. Small detail; useful habit.",
    ],
  },
  {
    title: "Reading the roast calendar",
    date: "02 September 2026",
    readingTime: "4 min",
    excerpt:
      "Why the list changes on Thursdays, and how to choose a bag for your kitchen.",
    body: [
      "Roasters work in lots, and lots have a life. We taste on Wednesday, decide on Thursday and put the new open bags on the shelf before the weekend. If a coffee from last month is gone, it is not a shortage; it is the point.",
      "For a home filter, start with something washed and medium-light. It is the most forgiving on a basic grinder and gives you a clear reference for sweetness and acidity. Once you know what clean tastes like, try a natural lot and see where it takes you.",
      "Ask us to grind a bag for your brewer. Bring the brewer's name; we will set the grinder and write the recipe on the bag.",
    ],
  },
];

export const hours = [
  { day: "Tuesday – Friday", time: "08:00 – 16:00" },
  { day: "Saturday – Sunday", time: "09:00 – 17:00" },
  { day: "Monday", time: "Closed" },
];

export const visit = {
  address: ["14 Foundry Lane", "London E2"],
  transport:
    "Three minutes from Foundry Square. Buses 8 and 388 stop on the corner. No step at the entrance; the counter is at seated height.",
  note: "Counter seats are walk-in. Tastings for four to six people can be arranged by message.",
  email: "hello@atelier-coffee.demo",
};
