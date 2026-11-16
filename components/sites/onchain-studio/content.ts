/**
 * Onchain Studio - sample studio content.
 *
 * The studio, projects and notes are fictional. No client, token, financial
 * product or outcome is represented. All figures and names are illustrative.
 */

export const onchainNav = [
  { label: "Protocols", href: "#showcase" },
  { label: "Studio", href: "#story" },
  { label: "Notes", href: "#materials" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Onchain Studio / Product engineering",
  headline: "Onchain,",
  headlineAccent: "made legible.",
  intro:
    "A product studio for teams building on open networks. Clear interfaces, honest constraints and work that can be audited.",
  status: "Working file · 2026",
  note: "Sample studio concept · fictional projects and notes",
  caption: ["Ledger 01 — blocks in sequence", "Illustrative drawing · not chain data"],
  footNote: "Product engineering · Open networks · Auditable work",
} as const;

export const heroMeta = [
  { label: "Focus", value: "Products" },
  { label: "Method", value: "Documented" },
  { label: "Work", value: "Auditable" },
] as const;

export const strip = [
  "Wallet flows",
  "Protocol mechanics",
  "Interface testing",
  "Working notes",
  "Public process",
  "No speculation",
] as const;

export const protocols = {
  label: "02 / Protocols",
  title: "Products, not narratives.",
  intro:
    "Case studies describe the problem, the interface and the trade-offs. Mechanics are documented when they exist — in language a user can follow.",
  note: "Sample capability list. Nothing here represents a client engagement, audit or production system.",
  items: [
    {
      index: "01",
      title: "Interfaces",
      body: "Wallet flows that explain themselves before a signature is requested. State is shown first; the button comes second.",
      detail: "Wallet flows · State-first",
    },
    {
      index: "02",
      title: "Protocol design",
      body: "Mechanics written down while they are being designed, not after launch. Constraints sit beside the promise.",
      detail: "Mechanics · Documented",
    },
    {
      index: "03",
      title: "Testing",
      body: "Every interface is tested against real state, not a happy-path mock. Edge cases are part of the design file.",
      detail: "Real state · Edge cases",
    },
    {
      index: "04",
      title: "Notes",
      body: "A public working file on patterns, flows and the unglamorous edges of onchain product design.",
      detail: "Public · Working file",
    },
  ],
  quote: {
    text: "If the interface cannot explain it, it is not finished.",
    note: "Studio principle · sample copy",
  },
} as const;

export const work = {
  label: "Selected work · illustrative",
  note: "Fictional projects included to demonstrate the case-study layout. No client, metric or production outcome is represented.",
  projects: [
    {
      index: "01",
      name: "Ledgerline",
      kind: "Custody interface",
      problem:
        "A custody tool asked users to approve transfers without showing which policy would be applied.",
      interface:
        "A review step that names the policy, the owner and the exact change before anything is signed.",
      tradeoff:
        "One extra screen in the flow, in exchange for a decision a reviewer can defend.",
      tags: ["Wallet flow", "Policy review"],
    },
    {
      index: "02",
      name: "Quorum Notes",
      kind: "Governance client",
      problem:
        "Delegates were reading raw proposal data and missing the practical effect of a vote.",
      interface:
        "A plain-language summary layer: what changes, who is affected and when the change takes effect.",
      tradeoff:
        "Summaries are editorial work, so the client labels every one as sourced or incomplete.",
      tags: ["Proposal reader", "Editorial layer"],
    },
    {
      index: "03",
      name: "Field",
      kind: "Protocol explorer",
      problem:
        "A test network explorer exposed every event at once, with no way to follow one transaction.",
      interface:
        "A single trace view with named stages, clear failures and a copyable state snapshot.",
      tradeoff:
        "Fewer charts on the first screen, and a faster route to the question people actually arrived with.",
      tags: ["Trace view", "Error states"],
    },
  ],
} as const;

export const studio = {
  label: "01 / The studio",
  title: "Onchain, made legible.",
  intro:
    "Design and protocol engineering sit together. The work is technical by default, written in public where it can be, and tested against reality rather than a demo.",
  principles: [
    {
      title: "One room",
      body: "Interface design and protocol mechanics are worked on together. Hand-offs are where the explanation usually gets lost.",
    },
    {
      title: "Test the edges",
      body: "Empty wallets, rejected signatures, pending state and failed reads are designed before the success screen.",
    },
    {
      title: "Write it down",
      body: "Decisions live in a working file: what changed, why, and what the interface still cannot promise.",
    },
  ],
  method: {
    label: "A working method",
    steps: [
      { step: "01", title: "Brief", body: "The decision the product has to support." },
      { step: "02", title: "Map", body: "States, actors and the failure paths between them." },
      { step: "03", title: "Build", body: "Interface and mechanics in the same iteration." },
      { step: "04", title: "Publish", body: "Notes, limits and a readable record of the work." },
    ],
  },
  note: "Sample studio story. The studio, method and projects are fictional.",
} as const;

export const notes = {
  label: "03 / Notes",
  title: "A public working file.",
  intro:
    "Short notes on interface patterns, wallet flows and the unglamorous edges of onchain product design. Written to be useful before they are polished.",
  note: "Sample notes for layout only. No real article, author or publication is represented.",
  items: [
    {
      date: "2026 · 05",
      tag: "Interface",
      title: "The signature is not the flow",
      excerpt:
        "A wallet prompt is the middle of a flow, not the end of one. If the review starts at the signature, the user has already lost the context they need.",
      read: "4 min",
    },
    {
      date: "2026 · 04",
      tag: "State",
      title: "Design the pending state first",
      excerpt:
        "Pending is not a spinner. It is a question: what is happening, who can act, and what happens if nothing arrives? The answer belongs on the screen.",
      read: "5 min",
    },
    {
      date: "2026 · 03",
      tag: "Protocol",
      title: "Mechanics deserve a sentence",
      excerpt:
        "A parameter table is not an explanation. One sentence about who is affected and when is worth more than another diagram of the system.",
      read: "6 min",
    },
  ],
} as const;

export const details = {
  label: "04 / Details",
  title: "The studio.",
  intro:
    "A small product studio, described the way we would describe a project: focus, method and the boundaries of the work.",
  facts: [
    { label: "Focus", value: "Onchain products", note: "Interfaces + mechanics" },
    { label: "Team", value: "Design + protocol", note: "One room" },
    { label: "Engagement", value: "Project", note: "Scoped" },
    { label: "Working file", value: "Public", note: "Where possible" },
  ],
  disciplines: [
    "Interface design",
    "Protocol research",
    "Front-end engineering",
    "Technical writing",
  ],
  notClaimed: [
    "No token is offered or promoted",
    "No financial product or return is represented",
    "No client, audit or production system is claimed",
  ],
  notClaimedNote:
    "This is a demonstration website. A real studio page would name its team, clients and scope — or leave the space empty.",
  note: "Illustrative studio details. All values are qualitative on purpose.",
} as const;

export const contact = {
  label: "05 / Contact",
  title: "Make the next one legible.",
  intro:
    "A short brief and a link to the product is enough. We reply with a scope, a first question and a point of view — not a deck.",
  facts: [
    { label: "Reply", value: "3 days" },
    { label: "Format", value: "Brief" },
    { label: "Scope", value: "Project" },
    { label: "Deck", value: "None" },
  ],
  bring: [
    "The product and the network it runs on",
    "The decision your interface has to support",
    "The constraint you cannot move",
  ],
  quote: "The best onchain interface is the one that explains the chain.",
  quoteNote: "Studio principle · sample copy",
  email: "hello@onchain-studio.demo",
  phone: "+44 20 7946 0006",
  address: ["Onchain Studio", "12 Ledger Lane", "London E2 7JY"],
  hours: "Monday – Friday · 10:00 – 18:00",
  note: "Fictional studio. Address, telephone number and details are illustrative.",
  form: {
    title: "Project brief",
    sub: "A link and a decision, not a sales call",
    types: ["Interface review", "Protocol design", "Product build", "Something else"],
    note: "Sample brief form. Nothing is sent to a real studio, no project is accepted and no financial product is offered.",
    confirmation:
      "Your brief has been recorded for this demonstration. No message is sent, no project is accepted and no financial product is offered.",
    fallback:
      "The demo inbox is unavailable right now. Please use the email address on this page.",
  },
} as const;
