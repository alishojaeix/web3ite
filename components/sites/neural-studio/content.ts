/**
 * Neural Studio - sample brand content.
 *
 * The studio, its systems and all contact details are fictional. They exist to
 * demonstrate this template and must be replaced with owner-approved details
 * before the site is used commercially.
 */

export const neuralNav = [
  { label: "Systems", href: "#systems" },
  { label: "Work", href: "#work" },
  { label: "Method", href: "#method" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Neural Studio / Applied AI",
  headline: "Intelligence,",
  headlineAccent: "given form.",
  intro:
    "A product studio for applied machine learning. We turn ambiguous data problems into interfaces people can trust.",
  note: "Sample website concept · fictional studio, systems and details",
  status: "Selective engagements · senior team",
  caption: [
    "Node field 01 — a system, made legible",
    "Illustrative visualisation · not a live model",
  ],
  footNote:
    "Applied AI · Product studio · Evaluation, interfaces and operations",
} as const;

export const heroMeta = [
  { label: "Practice", value: "Applied AI" },
  { label: "Model", value: "Product studio" },
  { label: "Team", value: "Senior, small" },
];

export const strip = [
  "Evaluation",
  "Provenance",
  "Confidence",
  "Human review",
  "Observability",
  "Interfaces",
  "Deployment",
] as const;

export const systems = {
  label: "01 / Systems",
  title: "Built around the problem.",
  intro:
    "Four disciplines, one loop. We do not begin with a model; we begin with the decision the product has to support, then earn the right to automate it.",
  note: "Every system is described in plain language: what it does, what it cannot do and where a person takes over.",
  items: [
    {
      index: "01",
      title: "Research",
      body: "Frame the problem before choosing a model. The brief is part of the work.",
      deliverables: ["Working brief", "Decision map", "Evaluation plan"],
    },
    {
      index: "02",
      title: "Product",
      body: "Design the system around the decision a person actually has to make.",
      deliverables: ["Interface model", "Failure states", "Prototype"],
    },
    {
      index: "03",
      title: "Engineering",
      body: "Ship the interface, the evaluation loop and the observability together.",
      deliverables: ["Vertical slice", "Eval harness", "Telemetry"],
    },
    {
      index: "04",
      title: "Deployment",
      body: "Operate with confidence: clear limits, measured behaviour, a human route in.",
      deliverables: ["Runbook", "Limits", "Review queue"],
    },
  ],
} as const;

export type ProjectVariant = "review" | "extract" | "retrieve";

export const work = {
  label: "02 / Selected systems",
  title: "Interfaces for decisions.",
  intro:
    "Three illustrative systems that show the shape of the work: a queue, a pipeline and a search surface. Each one is designed to explain itself.",
  note: "Illustrative engagement descriptions. No client work, results or claims are represented.",
  projects: [
    {
      index: "01",
      name: "Signal Review",
      kind: "Operations · Anomaly review",
      description:
        "A review surface for model-flagged events. Reason codes, provenance and an override path sit beside the queue, so a person can act without guessing.",
      tags: ["Evaluation", "Human review", "Reason codes"],
      variant: "review" as ProjectVariant,
    },
    {
      index: "02",
      name: "Ledger Intelligence",
      kind: "Finance · Document extraction",
      description:
        "A document pipeline that shows its work: extracted fields, source spans and a confidence note before anything reaches the ledger.",
      tags: ["Extraction", "Provenance", "Audit trail"],
      variant: "extract" as ProjectVariant,
    },
    {
      index: "03",
      name: "Atlas Retrieval",
      kind: "Knowledge · Internal search",
      description:
        "Retrieval for operations teams, with citations, permissions and an honest empty state when the corpus has no good answer.",
      tags: ["Retrieval", "Citations", "Permissions"],
      variant: "retrieve" as ProjectVariant,
    },
  ],
} as const;

export const method = {
  label: "03 / Method",
  title: "Evidence, not theatre.",
  intro:
    "A short, visible loop. Each step ends with an artefact you can read, challenge and keep — no black boxes between the brief and the build.",
  steps: [
    {
      step: "01",
      title: "Frame",
      body: "A working session and a written brief. We name the decision, the constraints and what would count as evidence.",
      output: "Brief · decision map",
    },
    {
      step: "02",
      title: "Sketch",
      body: "Low-fidelity interfaces and an evaluation plan. We test the shape of the product before choosing a model.",
      output: "Prototype · eval plan",
    },
    {
      step: "03",
      title: "Build",
      body: "A vertical slice: interface, model, evaluation and observability in one loop, reviewed weekly.",
      output: "Working system",
    },
    {
      step: "04",
      title: "Operate",
      body: "Limits documented, behaviour measured, a human route in. The system is handed over with its evidence.",
      output: "Runbook · handover",
    },
  ],
} as const;

export const studio = {
  label: "04 / Studio",
  title: "A small senior room.",
  paragraphs: [
    "The studio is deliberately small. Strategy, research, design and engineering sit in one room, from the first sketch to the shipped system.",
    "We take one substantial engagement at a time. That keeps the people who framed the problem in the room when it is built — and accountable when it ships.",
  ],
  principles: [
    {
      title: "Evidence over theatre",
      body: "No AI mystique. Confidence, provenance and failure states are part of the interface.",
    },
    {
      title: "The decision is the product",
      body: "A model is only useful if it helps someone act with more clarity.",
    },
    {
      title: "A human route in",
      body: "Every automated path has a visible way to ask, override or escalate.",
    },
  ],
  facts: [
    { label: "Focus", value: "Applied AI" },
    { label: "Team", value: "Senior" },
    { label: "Engagement", value: "Project" },
    { label: "Base", value: "London" },
  ],
  quote: "The model is never the product. The decision is.",
  quoteNote: "Studio principle · sample copy",
} as const;

export const notes = {
  label: "Field notes",
  title: "Working in the open.",
  intro:
    "Short notes on the parts of applied AI that are usually left out of the launch page.",
  items: [
    {
      index: "Note 01",
      title: "Designing for low confidence",
      body: "What an interface owes a person when the model is unsure — and how to make uncertainty actionable rather than decorative.",
      tag: "Interface",
    },
    {
      index: "Note 02",
      title: "Evaluation is a product surface",
      body: "The review queue deserves the same care as the happy path. A short argument for treating evaluation as a feature.",
      tag: "Evaluation",
    },
    {
      index: "Note 03",
      title: "Provenance, not decoration",
      body: "Showing where an answer came from without burying the decision. Notes on citations, spans and trust.",
      tag: "Trust",
    },
  ],
  note: "Illustrative field notes. No external articles are linked.",
} as const;

export const contact = {
  label: "05 / Contact",
  title: "Bring us the hard problem.",
  intro:
    "A short technical brief is enough to start: the decision, the data you have and what makes it difficult. We reply within two working days.",
  bring: [
    "The decision the product needs to support",
    "What data exists — and what does not",
    "Constraints: team, timeline, regulation",
  ],
  email: "hello@neural-studio.demo",
  phone: "+44 20 7946 0001",
  address: ["Neural Studio", "4 Signal Yard", "London E2 7JY"],
  hours: "Monday – Friday · 09:00 – 18:00",
  note: "Fictional studio. The address, telephone number and details are illustrative.",
  form: {
    title: "Project intake",
    sub: "A short brief, not a sales call",
    projectTypes: [
      "Applied AI product",
      "Evaluation & review",
      "Interface & design system",
      "Technical advisory",
      "Something else",
    ],
    note: "Sample intake form. Nothing is sent to a real studio, no project is accepted and no payment is taken.",
    confirmation:
      "Your brief has been recorded for this demonstration. No message is sent, no project is accepted and no payment is taken.",
    fallback:
      "The demo inbox is unavailable right now. Please use the email address on this page.",
  },
} as const;
