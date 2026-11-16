/**
 * Ember Kitchen — sample brand content.
 *
 * The venue, menu, prices and address are fictional. They exist to demonstrate
 * this template and must be replaced with owner-approved details before the
 * site is used commercially.
 */

export const emberNav = [
  { label: "Tonight", href: "#menu" },
  { label: "The hearth", href: "#hearth" },
  { label: "The room", href: "#room" },
  { label: "Book", href: "#book" },
] as const;

export const heroMeta = [
  { label: "Counter seats", value: "18" },
  { label: "Hearth", value: "One" },
  { label: "Service", value: "Tue–Sat" },
];

export const hero = {
  eyebrow: "Ember Kitchen / Live-fire dining",
  headline: "Cooked",
  headlineAccent: "by fire.",
  subline: "Eaten in its light.",
  intro:
    "One oak hearth, eighteen counter seats and a menu written at the pass. Dinner at Ember begins when the coals are ready and ends when the room is.",
  note: "Sample website concept · fictional kitchen, menu and imagery",
  status: "The fire is lit · service from 17:30",
  caption: ["The hearth at 16:30, before service", "Oak, ash and one iron grate"],
  footNote: "Four snacks · three plates · two to share",
  closing: "No gas. No second oven. One fire, all night.",
};

export type EmberDish = {
  name: string;
  description: string;
  price: string;
  vegetarian?: boolean;
};

export type EmberMenuGroup = {
  id: string;
  numeral: string;
  title: string;
  note: string;
  items: EmberDish[];
};

export const menu = {
  label: "01 / Tonight",
  title: "The card is written at the pass.",
  intro:
    "Four snacks, three plates from the fire and two things to share. The menu moves with the market and the mood of the coals, so it is never quite the same twice.",
  date: "Tuesday 11 November",
  note: "Sample menu. Dishes, prices and availability are illustrative. Tell the kitchen about allergies when you book; most plates can be adjusted.",
  groups: [
    {
      id: "snacks",
      numeral: "I",
      title: "Snacks",
      note: "While the coals settle",
      items: [
        {
          name: "Ember flatbread, smoked butter",
          description: "Blistered at the hearth, torn at the table.",
          price: "6",
          vegetarian: true,
        },
        {
          name: "Charred olives, orange",
          description: "Warm, salty, bright.",
          price: "5",
          vegetarian: true,
        },
      ],
    },
    {
      id: "fire",
      numeral: "II",
      title: "From the fire",
      note: "Cooked over oak and ash",
      items: [
        {
          name: "Grilled leek, romesco",
          description: "Soft inside, black at the edges.",
          price: "12",
          vegetarian: true,
        },
        {
          name: "Wood-fired squid, nduja",
          description: "Quick over the coals, finished with lemon.",
          price: "16",
        },
        {
          name: "Mackerel, rhubarb, fennel",
          description: "Whole, scored, cooked hard and fast.",
          price: "15",
        },
      ],
    },
    {
      id: "share",
      numeral: "III",
      title: "To share",
      note: "Two or three plates between you",
      items: [
        {
          name: "Aged rib, fermented chilli",
          description: "For two. Rest twenty minutes.",
          price: "48",
        },
        {
          name: "Hispi cabbage, brown butter",
          description: "The whole room orders it.",
          price: "14",
          vegetarian: true,
        },
      ],
    },
    {
      id: "finish",
      numeral: "IV",
      title: "To finish",
      note: "One cold thing, one warm thing",
      items: [
        {
          name: "Burnt honey tart",
          description: "Cold cream, no fuss.",
          price: "9",
          vegetarian: true,
        },
        {
          name: "Ash-baked pear, bay cream",
          description: "Buried in the embers until soft.",
          price: "8",
          vegetarian: true,
        },
      ],
    },
  ] as EmberMenuGroup[],
};

export const hearth = {
  label: "02 / The hearth",
  title: "One fire. Every plate.",
  intro:
    "There is no gas in the kitchen and no second oven. Everything that leaves the pass has spent time over the same oak fire, and the room is arranged so you can watch it happen.",
  stations: [
    {
      id: "coals",
      numeral: "01",
      label: "The coals",
      title: "Everything starts here.",
      body: "Oak and ash burn down for two hours before service. The coals are raked under the grill and kept alive all night; the temperature is read by hand, not by dial.",
      details: ["Oak and ash", "Two-hour burn", "Raked by hand"],
    },
    {
      id: "grill",
      numeral: "02",
      label: "The grill",
      title: "Hard heat, quick hands.",
      body: "The grill sits closest to the coals. Leeks, squid and the whole mackerel pass over it in minutes; the rib starts here and finishes in the residual heat of the oven.",
      details: ["Iron bars", "High heat", "Minutes, not hours"],
    },
    {
      id: "oven",
      numeral: "03",
      label: "The oven",
      title: "The slow side of the fire.",
      body: "A brick chamber beside the firebox holds the heat after the flames have moved on. Flatbread, cabbage and the pear bake here while the grill does the fast work.",
      details: ["Brick chamber", "Residual heat", "Bread and roots"],
    },
    {
      id: "chimney",
      numeral: "04",
      label: "The chimney",
      title: "Air is the third ingredient.",
      body: "The damper and the door vents steer the fire. A little more air and the coals wake up; a little less and the oven holds its heat. The chimney is the quietest station in the kitchen.",
      details: ["Hand damper", "Draft control", "No dials"],
    },
  ],
  note: "Illustrative section. The hearth, kitchen and service shown here are part of a fictional demonstration venue.",
};

export const room = {
  label: "03 / The room",
  title: "The best seat is nearest the fire.",
  intro:
    "The room was a metal workshop before it was a restaurant. We kept the concrete floor, added a long counter and built the hearth into the back wall. There is no music; the fire does the talking.",
  paragraphs: [
    "Eighteen stools face the fire. Six more sit at the pass table, close enough to hear the kitchen call the tickets. The room is small on purpose: one seating, one fire, one menu.",
    "The counter is charred oak, sealed with oil and left to mark. The stools are iron and leather. Everything in the room is meant to age, including the floor.",
  ],
  facts: [
    { label: "Seats", value: "24" },
    { label: "At the counter", value: "18" },
    { label: "At the pass", value: "6" },
    { label: "Hearths", value: "One" },
  ],
  seats: [
    {
      label: "The counter",
      note: "Eighteen stools along the fire. The full menu, cooked in front of you.",
    },
    {
      label: "The pass",
      note: "One table for six at the end of the kitchen. Best for groups who want the whole show.",
    },
    {
      label: "The buyout",
      note: "The whole room can be taken on a Monday or Tuesday. Ask for the buyout card.",
    },
  ],
  materials: [
    { label: "Charred oak", note: "Counter, boards, the fire" },
    { label: "Blackened iron", note: "Grill, stools, door pulls" },
    { label: "Concrete", note: "Floor, walls, the old workshop" },
  ],
};

export type PartySize = "1" | "2" | "3" | "4" | "5" | "6" | "private";

export const booking = {
  label: "04 / Book",
  title: "Take a seat by the fire.",
  intro:
    "Counter seats are released each morning for the same evening. Tell us the date, the size of your party and where you would rather sit; the kitchen replies by email within one working day.",
  sitting: "17:30 – 22:00",
  lastOrders: "21:45",
  partySizes: [
    { value: "1" as PartySize, label: "One guest" },
    { value: "2" as PartySize, label: "Two guests" },
    { value: "3" as PartySize, label: "Three guests" },
    { value: "4" as PartySize, label: "Four guests" },
    { value: "5" as PartySize, label: "Five guests" },
    { value: "6" as PartySize, label: "Six guests" },
    { value: "private" as PartySize, label: "Private buyout" },
  ],
  preferences: [
    { value: "counter" as const, label: "The counter" },
    { value: "pass" as const, label: "The pass table" },
    { value: "either" as const, label: "Either is fine" },
  ],
  note: "Sample booking form. No table is held, no deposit is taken and no email is sent.",
  confirmation:
    "Your request has been recorded for this demonstration. No table is held, no deposit is taken and no email is sent.",
};

export const visit = {
  label: "05 / Visit",
  title: "Find the fire.",
  address: ["Ember Kitchen", "22 Kiln Street", "London E2 8HD"],
  transport:
    "Overground to Hoxton, then six minutes on foot. The door is the black steel one under the extractor hood; press the bell marked Ember.",
  hours: [
    { day: "Tuesday – Saturday", time: "17:30 – late" },
    { day: "Sunday – Monday", time: "Closed" },
  ],
  email: "fire@ember-kitchen.demo",
  phone: "+44 20 7946 0000",
  note: "Fictional venue. The address, telephone number and opening hours are illustrative.",
  steps: [
    { number: "01", label: "Hoxton Overground", note: "Leave by the Geffrye Museum exit." },
    { number: "02", label: "Kiln Street", note: "Walk south, past the old brass foundry." },
    { number: "03", label: "The black door", note: "Under the hood, beside the wood store." },
  ],
};
