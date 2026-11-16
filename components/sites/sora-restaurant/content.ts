/**
 * Sora Restaurant - sample brand content.
 *
 * The venue, menu, prices and address are fictional. They exist to demonstrate
 * this template and must be replaced with owner-approved details before the
 * site is used commercially.
 */

export const soraNav = [
  { label: "Menu", href: "#menu" },
  { label: "The house", href: "#house" },
  { label: "Sake", href: "#sake" },
  { label: "Visit", href: "#visit" },
] as const;

export const heroMeta = [
  { label: "Seats", value: "Twenty" },
  { label: "Service", value: "Lunch + dinner" },
  { label: "Kitchen", value: "Seasonal" },
];

export const hero = {
  eyebrow: "Sora / Modern Japanese dining",
  headline: "A quieter",
  headlineAccent: "table.",
  japanese: "静かな食卓",
  intro:
    "A small dining room on Garden Lane: pale timber, paper light and a short seasonal menu. Lunch is quick and quiet; dinner is unhurried.",
  note: "Sample website concept · fictional restaurant, menu and imagery",
  status: "Counter walk-ins · tables by request",
  caption: ["A stoneware bowl, glazed in sage", "Sora tableware · made in Stoke"],
  footNote: "Seasonal plates · one clay-pot rice · sake by the glass",
  closing: "Nothing loud. Nothing rushed. Just the table.",
};

export type Course = {
  numeral: string;
  name: string;
  description: string;
  note: string;
};

export const counterMenu = {
  id: "counter",
  label: "The counter",
  note: "Six plates · £62",
  intro:
    "A short sequence served at the counter, cooked in front of you. The kitchen chooses the order; the menu follows the market.",
  price: "62",
  pairing: "34",
  courses: [
    {
      numeral: "一",
      name: "Chawanmushi, shiso",
      description: "Silken egg custard, warm dashi, a single shiso leaf.",
      note: "First",
    },
    {
      numeral: "二",
      name: "Hamachi, yuzu, sea salt",
      description: "Cold, clean and bright. Three slices, nothing more.",
      note: "Raw",
    },
    {
      numeral: "三",
      name: "Aubergine, sesame, ginger",
      description: "Charred until soft, dressed at the pass.",
      note: "Fire",
    },
    {
      numeral: "四",
      name: "Black cod, miso",
      description: "Marinated three days, grilled gently, finished with lime.",
      note: "Grill",
    },
    {
      numeral: "五",
      name: "Clay-pot rice, pickles",
      description: "Crisp base, shared at the table. Miso soup alongside.",
      note: "Rice",
    },
    {
      numeral: "六",
      name: "Hojicha, pear",
      description: "Roasted tea, poached fruit, a little cold cream.",
      note: "Sweet",
    },
  ] as Course[],
};

export type TableGroup = {
  id: string;
  title: string;
  note: string;
  items: { name: string; description: string; price: string; vegetarian?: boolean }[];
};

export const tableMenu = {
  id: "table",
  label: "The table",
  note: "Small plates · shared",
  intro:
    "Order two or three plates each, plus the rice. Dishes arrive as they are ready; the table fills slowly.",
  groups: [
    {
      id: "small",
      title: "Small",
      note: "To begin",
      items: [
        {
          name: "Chawanmushi, shiso",
          description: "Silken custard, warm dashi, shiso.",
          price: "9",
        },
        {
          name: "Hamachi, yuzu, sea salt",
          description: "Cold, clean, bright.",
          price: "12",
        },
        {
          name: "Padron, yuzu salt",
          description: "Blistered, salted, sharp.",
          price: "6",
          vegetarian: true,
        },
      ],
    },
    {
      id: "hot",
      title: "Hot",
      note: "From the grill",
      items: [
        {
          name: "Black cod, miso",
          description: "Three-day marinade, grilled gently.",
          price: "18",
        },
        {
          name: "Aubergine, sesame, ginger",
          description: "Soft, charred, nutty.",
          price: "11",
          vegetarian: true,
        },
        {
          name: "Chicken, sansho",
          description: "Grilled over binchotan, pepper at the table.",
          price: "14",
        },
      ],
    },
    {
      id: "rice",
      title: "Rice",
      note: "For the table",
      items: [
        {
          name: "Clay-pot rice, pickles",
          description: "Crisp base, shared. Miso soup alongside.",
          price: "7",
          vegetarian: true,
        },
        {
          name: "Mushroom rice, shiso",
          description: "Autumn mushrooms, butter, shiso.",
          price: "9",
          vegetarian: true,
        },
      ],
    },
    {
      id: "sweet",
      title: "Sweet",
      note: "To finish",
      items: [
        {
          name: "Hojicha, pear",
          description: "Roasted tea, poached fruit.",
          price: "7",
          vegetarian: true,
        },
        {
          name: "Miso caramel, sesame",
          description: "Salt, smoke, a little crunch.",
          price: "6",
          vegetarian: true,
        },
      ],
    },
  ] as TableGroup[],
};

export const house = {
  label: "03 / The house",
  title: "Pale timber, soft light.",
  intro:
    "The room was a joinery workshop before it was a restaurant. We kept the light, lowered the ceiling and built the counter from one long length of ash.",
  paragraphs: [
    "Twenty seats: ten at the counter, ten at tables, and a small courtyard for the summer. The paper screens are replaced every few years; the timber is left to darken.",
    "There is no music. The room is quiet by design, so the kitchen can talk and the table can hear itself. Lunch is quick; dinner is not.",
  ],
  facts: [
    { label: "Opened", value: "2019" },
    { label: "Seats", value: "20" },
    { label: "At the counter", value: "10" },
    { label: "Courtyard", value: "4" },
  ],
  materials: [
    { label: "Ash", note: "Counter, tables, the stair" },
    { label: "Washi", note: "Screens and lamp shades" },
    { label: "Stoneware", note: "Bowls made in Stoke" },
  ],
  plan: {
    note: "Ground floor · 3 Garden Lane",
    labels: {
      counter: "Counter · 10",
      kitchen: "Kitchen",
      tables: "Tables · 10",
      garden: "Courtyard · 4",
      entrance: "Entrance",
    },
  },
};

export const sake = {
  label: "04 / The glass",
  title: "By the glass, never pushed.",
  intro:
    "A short list, kept cold and poured generously. Ask for a taste before you commit; the kitchen will match a glass to the menu.",
  bottles: [
    {
      name: "Namura Junmai",
      style: "Junmai · Niigata",
      note: "Rice, clean water, a little warmth. The house pour.",
      price: "8",
    },
    {
      name: "Kaze Ginjo",
      style: "Ginjo · Yamagata",
      note: "Fragrant, soft, pear and white flower. Good with the cod.",
      price: "11",
    },
    {
      name: "Yama Nigori",
      style: "Nigori · Hiroshima",
      note: "Cloudy, sweet, low alcohol. With the miso caramel.",
      price: "9",
    },
  ],
  note: "Sample list. Bottles, breweries and prices are illustrative.",
};

export type PartySize = "1" | "2" | "3" | "4" | "5" | "6" | "private";

export const booking = {
  label: "05 / Visit",
  title: "An easy evening.",
  intro:
    "Counter seats are kept for walk-ins. Tables can be requested here; the room replies by email within one working day. Lunch does not take reservations.",
  sitting: "18:00 – 22:00",
  lastOrders: "21:30",
  partySizes: [
    { value: "1" as PartySize, label: "One guest" },
    { value: "2" as PartySize, label: "Two guests" },
    { value: "3" as PartySize, label: "Three guests" },
    { value: "4" as PartySize, label: "Four guests" },
    { value: "5" as PartySize, label: "Five guests" },
    { value: "6" as PartySize, label: "Six guests" },
    { value: "private" as PartySize, label: "The courtyard · 8" },
  ],
  services: [
    { value: "dinner", label: "Dinner" },
    { value: "lunch", label: "Lunch (walk-in only)" },
  ],
  seating: [
    { value: "table", label: "A table" },
    { value: "counter", label: "The counter" },
    { value: "courtyard", label: "The courtyard" },
    { value: "either", label: "Either is fine" },
  ],
  note: "Sample booking form. No table is held, no deposit is taken and no email is sent.",
  confirmation:
    "Your request has been recorded for this demonstration. No table is held, no deposit is taken and no email is sent.",
};

export const visit = {
  address: ["Sora", "3 Garden Lane", "London E2 7JY"],
  transport:
    "Overground to Hoxton, then four minutes on foot. The door is the pale timber one beside the florist; there is no sign, only the noren.",
  hours: [
    { day: "Tuesday – Sunday", time: "12:00 – 14:30" },
    { day: "Tuesday – Sunday", time: "18:00 – 22:00" },
    { day: "Monday", time: "Closed" },
  ],
  email: "hello@sora-restaurant.demo",
  phone: "+44 20 7946 0000",
  note: "Fictional venue. The address, telephone number and opening hours are illustrative.",
  lunchNote: "Lunch is walk-in only. The counter turns quickly; tables are usually free by 13:30.",
};
