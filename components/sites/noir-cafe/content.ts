export type CafeMenuItem = {
  name: string;
  description: string;
};

export type CafeImage = {
  src: string;
  alt: string;
  caption: string;
  position?: string;
};

/**
 * Sample concept copy only. Replace the illustrative menu and story with
 * owner-approved content before publishing this as a real café website.
 */
export const noirCafeContent = {
  brand: "Noir Café",
  shortBrand: "NOIR",
  sampleNotice: "Sample website concept · illustrative copy and menu",
  navigation: [
    { label: "Our story", href: "#story" },
    { label: "Coffee", href: "#menu" },
    { label: "The room", href: "#gallery" },
    { label: "Visit", href: "#visit" },
  ],
  hero: {
    kicker: "A coffee lounge, after hours",
    title: "Coffee,\nafter dark.",
    introduction:
      "A quieter kind of coffee room. Slow espresso, thoughtful company, and a little more time at the table.",
    image: "/images/sites/noir-cafe/hero.webp",
    imageAlt:
      "A dark, warmly lit lounge with leather chairs, brass pendant lights, and intimate seating",
  },
  story: {
    heading: "Make room\nfor the ritual.",
    paragraphs: [
      "Noir is imagined as a neighborhood espresso room shaped by warm wood, low light, and the pleasure of staying a little longer.",
      "The details are deliberately unhurried: coffee prepared with care, a considered room, and space for conversation to find its own pace.",
    ],
    note: "Brand story shown here is sample copy for the website concept.",
  },
  menu: {
    heading: "A short menu.\nA little ceremony.",
    introduction:
      "Illustrative coffee selections for the concept. Menu details, availability, and prices have not been supplied.",
    groups: [
      {
        title: "Espresso bar",
        items: [
          {
            name: "House espresso",
            description: "A balanced sample blend, served short and unhurried.",
          },
          {
            name: "Cappuccino",
            description: "Espresso beneath softly textured milk.",
          },
          {
            name: "Caffè crema",
            description: "A longer espresso with a rounded finish.",
          },
        ] satisfies CafeMenuItem[],
      },
      {
        title: "Slow coffee",
        items: [
          {
            name: "Guest roaster",
            description: "A rotating sample pour-over from a visiting roaster.",
          },
          {
            name: "Decaf, considered",
            description: "A gentle sample option, served with the same attention.",
          },
          {
            name: "Something alongside",
            description: "A small seasonal pairing, to be set by the café.",
          },
        ] satisfies CafeMenuItem[],
      },
    ],
  },
  collections: {
    heading: "Take the ritual home.",
    introduction:
      "A sample coffee collection layout. Product names, sourcing, availability, and prices require owner-approved details.",
    items: [
      {
        number: "01",
        name: "The house blend",
        description: "A sample espresso profile for the imagined evening bar.",
        detail: "Coffee · sample concept",
      },
      {
        number: "02",
        name: "The guest roast",
        description: "A sample rotating coffee selection for slower mornings.",
        detail: "Small batch · sample concept",
      },
      {
        number: "03",
        name: "The brew set",
        description: "A sample collection of considered tools for home brewing.",
        detail: "Coffee accessories · sample concept",
      },
    ],
  },
  gallery: {
    heading: "A room to settle into.",
    introduction:
      "Details from the supplied lounge reference, cropped to show its light, seating, and materials.",
    images: [
      {
        src: "/images/sites/noir-cafe/lounge.webp",
        alt: "Leather lounge seating in warm pools of light",
        caption: "A quieter corner",
        position: "center 62%",
      },
      {
        src: "/images/sites/noir-cafe/warm-light.webp",
        alt: "Warm pendant lighting above a dark wood lounge",
        caption: "The evening light",
        position: "center 38%",
      },
      {
        src: "/images/sites/noir-cafe/leather-details.webp",
        alt: "Leather chairs and a low table in an intimate lounge setting",
        caption: "Stay a little longer",
        position: "center 65%",
      },
    ] satisfies CafeImage[],
  },
  visit: {
    heading: "Come as you are.\nStay for a while.",
    introduction:
      "The room is ready to feel like a place. Real visit details will be added when the café provides them.",
    address: null as string | null,
    hours: null as string | null,
    email: null as string | null,
    telephone: null as string | null,
    reservationUrl: null as string | null,
    mapUrl: null as string | null,
  },
  footerNote:
    "Noir Café is a fictional website concept. Menu and brand copy are illustrative; no operating venue or products are represented.",
};
