/**
 * Maison Dining — sample brand content.
 *
 * The venue, menu, prices and address are fictional. They exist to demonstrate
 * this template and must be replaced with owner-approved details before the
 * site is used commercially.
 */

export const maisonNav = [
  { label: "Menu", href: "#menu" },
  { label: "The room", href: "#room" },
  { label: "The evening", href: "#evening" },
  { label: "Visit", href: "#visit" },
] as const;

export const heroMeta = [
  { label: "Paris 1er", value: "6 Rue des Orfèvres" },
  { label: "Covers", value: "Twelve" },
  { label: "Seating", value: "18:30" },
];

export type Course = {
  numeral: string;
  name: string;
  description: string;
  pairing: string;
};

export type MenuOption = {
  id: string;
  label: string;
  note: string;
  courses: Course[];
};

export const menu = {
  label: "01 / The menu",
  title: "One menu, written each morning.",
  intro:
    "Five courses, one seating, and a card that changes with what the market sends us. The kitchen cooks the same menu for the whole room so that every plate leaves the pass at the same moment.",
  date: "Autumn card · November 2026",
  price: "95",
  pairing: "65",
  duration: "Three and a half hours",
  options: [
    {
      id: "full",
      label: "The full menu",
      note: "Five courses",
      courses: [
        {
          numeral: "I",
          name: "Oyster, kohlrabi, verbena",
          description: "Chilled, mineral, a little sharp. Served in the shell.",
          pairing: "Champagne, Blanc de Blancs",
        },
        {
          numeral: "II",
          name: "Cured trout, buttermilk, dill",
          description: "A soft cure, a cold sauce, and rye toasted at the pass.",
          pairing: "Sancerre, Les Monts Damnés",
        },
        {
          numeral: "III",
          name: "Turbot, beurre blanc, sea herbs",
          description: "Line-caught, cooked on the bone, finished with salted butter.",
          pairing: "Meursault, Les Narvaux",
        },
        {
          numeral: "IV",
          name: "Aged duck, cherry, black garlic",
          description: "Dry-aged for fourteen days and carved at the table.",
          pairing: "Pinot Noir, Côte de Nuits",
        },
        {
          numeral: "V",
          name: "Buckwheat, honey, cream",
          description: "Toasted buckwheat, cold cream, a thin sheet of honey.",
          pairing: "Jurançon, late harvest",
        },
      ],
    },
    {
      id: "garden",
      label: "From the garden",
      note: "Five courses · vegetarian",
      courses: [
        {
          numeral: "I",
          name: "Kohlrabi, oyster leaf, verbena",
          description: "Shaved raw, dressed with verbena oil and sea salt.",
          pairing: "Champagne, Blanc de Blancs",
        },
        {
          numeral: "II",
          name: "Heritage beetroot, smoked cream",
          description: "Roasted in salt, peeled warm, finished at the pass.",
          pairing: "Sancerre, Les Monts Damnés",
        },
        {
          numeral: "III",
          name: "Celeriac, hazelnut, truffle",
          description: "Baked whole for three hours, carved like a joint.",
          pairing: "Meursault, Les Narvaux",
        },
        {
          numeral: "IV",
          name: "Comté, quince, walnut",
          description: "Aged comté, quince paste, and a warm walnut loaf.",
          pairing: "Pinot Noir, Côte de Nuits",
        },
        {
          numeral: "V",
          name: "Buckwheat, honey, cream",
          description: "Toasted buckwheat, cold cream, a thin sheet of honey.",
          pairing: "Jurançon, late harvest",
        },
      ],
    },
  ] as MenuOption[],
  note: "Sample menu. Dishes, prices and pairings are illustrative. Allergies can be accommodated with 48 hours' notice.",
};

export const room = {
  label: "02 / The room",
  title: "Twelve seats, arranged around the pass.",
  intro:
    "The dining room is one long table and two small ones, set around the kitchen rather than away from it. There is no music and no second seating: the room fills once and stays until the last course.",
  paragraphs: [
    "Walnut tables, unbleached linen, old silver and a single pendant over the pass. The room was a print workshop before it was a restaurant; the marks on the floor are still the marks of the presses.",
    "Every seat can see the kitchen. We think that is the point: the cooking is the room's only performance, and the pace belongs to the pass.",
  ],
  materials: [
    { label: "Walnut", note: "Tables, cut from one tree" },
    { label: "Linen", note: "Unbleached, changed daily" },
    { label: "Silver", note: "The cloche, lifted at the table" },
  ],
  facts: [
    { label: "Opened", value: "2018" },
    { label: "Covers", value: "12" },
    { label: "Kitchen", value: "Open pass" },
    { label: "Service", value: "One seating" },
  ],
  plan: {
    note: "Ground floor · 6 Rue des Orfèvres",
    labels: {
      pass: "The pass",
      cellar: "Cellar",
      entrance: "Entrance",
      room: "Dining room · 12 covers",
    },
  },
};

export const evening = {
  label: "03 / The evening",
  title: "The room sets its own pace.",
  intro:
    "Doors open a quarter of an hour before the seating. Courses move with the kitchen, not a clock, and the last petit four arrives when the room is ready for it.",
  timeline: [
    { time: "18:15", title: "Doors", body: "Aperitif at the bar while the room is set." },
    { time: "18:30", title: "Seating", body: "Everyone is seated together for the first course." },
    { time: "18:45", title: "The menu", body: "Five courses, served from the open pass." },
    { time: "22:30", title: "Last course", body: "Petit four, coffee, and the walk home." },
  ],
  quote:
    "We cook one menu so we can buy better, waste less, and give every plate the time it needs.",
  attribution: "The kitchen",
  note: "We ask guests to arrive together. The room is small, and the first course waits for no one.",
};

export type PartySize = "2" | "3" | "4" | "6" | "private";

export const reservation = {
  label: "04 / Reservations",
  title: "Reserve the room.",
  intro:
    "One seating each evening, Wednesday to Sunday. Tell us the date and any dietary needs; the réservations desk replies by email within one working day.",
  sitting: "18:30",
  price: "95",
  pairing: "65",
  partySizes: [
    { value: "2" as PartySize, label: "Two guests" },
    { value: "3" as PartySize, label: "Three guests" },
    { value: "4" as PartySize, label: "Four guests" },
    { value: "6" as PartySize, label: "Six guests" },
    { value: "private" as PartySize, label: "Private room · 12" },
  ],
  note: "Sample reservation form. No table is held and no email is sent.",
  confirmation:
    "Your request has been recorded for this demonstration. No table is held, no deposit is taken, and no email is sent.",
};

export const visit = {
  label: "05 / Visit",
  title: "Find the room.",
  address: ["Maison Dining", "6 Rue des Orfèvres", "75001 Paris"],
  transport:
    "Métro Pont Neuf (line 7), four minutes on foot. The door is the green one beside the gallery; ring the bell marked Maison.",
  hours: [
    { day: "Wednesday – Sunday", time: "18:30 seating" },
    { day: "Monday – Tuesday", time: "Closed" },
  ],
  email: "reservations@maison-dining.demo",
  phone: "+33 1 84 00 00 00",
  privateNote:
    "The whole room can be taken privately for up to twelve guests. Ask for the buyout card when you write.",
  note: "Fictional venue. The address, telephone number and opening hours are illustrative.",
};
