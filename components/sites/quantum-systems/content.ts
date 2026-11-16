/**
 * Quantum Systems - sample company content.
 *
 * The company, platform, research index and all contact details are fictional.
 * Performance figures are deliberately avoided: this is a layout demonstration,
 * not a product specification.
 */

export const qsNav = [
  { label: "Platform", href: "#platform" },
  { label: "Research", href: "#research" },
  { label: "Company", href: "#company" },
] as const;

export const hero = {
  eyebrow: "Quantum Systems / Precision compute",
  headline: "Measured",
  headlineAccent: "in microns.",
  intro:
    "A technical product story for teams working at the edge of compute. Exact language, engineered visuals, no mythology.",
  status: "Platform brief · documented limits",
  note: "Sample website concept · fictional company and assembly",
  caption: [
    "Assembly 03 — control, calibration, readout",
    "Illustrative drawing · not to scale",
  ],
  footNote: "Precision compute · Modular assembly · Published method",
} as const;

export const heroMeta = [
  { label: "Discipline", value: "Precision compute" },
  { label: "Architecture", value: "Modular" },
  { label: "Method", value: "Documented" },
];

export const platform = {
  label: "01 / The platform",
  title: "A system, not a black box.",
  intro:
    "Control, calibration and readout presented as observable parts. The console, the tolerance note and the telemetry describe the same state — in the same language.",
  note: "Sample platform description. Capabilities shown are illustrative; no product is sold.",
  items: [
    {
      index: "01",
      title: "Control plane",
      body: "One console for the full assembly. State is visible before an action is taken.",
      outputs: ["Live state", "Run history", "Operator log"],
    },
    {
      index: "02",
      title: "Calibration",
      body: "Tolerance notes and repeatable runs. The method is published with the result.",
      outputs: ["Calibration note", "Repeatable run", "Method record"],
    },
    {
      index: "03",
      title: "Readout",
      body: "Clear telemetry, no hidden state. What the system knows, the operator knows.",
      outputs: ["Live telemetry", "Fault states", "Export"],
    },
    {
      index: "04",
      title: "Research",
      body: "Published methods, limits and open questions. Precision is a practice, not a claim.",
      outputs: ["Method note", "Limits", "Open questions"],
    },
  ],
  limits: [
    "No unlabelled automation",
    "No hidden state",
    "No result without its method",
  ],
} as const;

export const method = {
  label: "02 / The method",
  title: "Precision is the story.",
  intro:
    "An assembly is only as honest as its documentation. Four habits shape every run — and every page of the technical brief.",
  steps: [
    {
      step: "01",
      title: "Define the tolerance",
      body: "Before a run, the tolerance is written down in the same language the operator uses.",
      output: "Tolerance note",
    },
    {
      step: "02",
      title: "Publish the method",
      body: "The calibration method ships with the result, including the assumptions that shaped it.",
      output: "Method record",
    },
    {
      step: "03",
      title: "Show the limit",
      body: "Where the assembly stops being reliable is documented as clearly as where it works.",
      output: "Limits note",
    },
    {
      step: "04",
      title: "Repeat the run",
      body: "A second operator can repeat the measurement without asking the first. That is the test.",
      output: "Reproduction check",
    },
  ],
} as const;

export const assembly = {
  label: "03 / The assembly",
  title: "Observable, by design.",
  intro:
    "Three parts, one state. The assembly is modular so a team can inspect a single stage without replacing the whole.",
  rows: [
    { label: "Architecture", value: "Modular" },
    { label: "Deployment", value: "On-prem / cloud" },
    { label: "Interface", value: "API + console" },
    { label: "Calibration", value: "Documented per run" },
    { label: "Telemetry", value: "Operator-visible" },
    { label: "Limits", value: "Published" },
    { label: "Method", value: "Ships with result" },
    { label: "Readout", value: "Glass panel" },
  ],
  parts: [
    {
      code: "A",
      title: "Control plane",
      body: "State, runs and operator actions in one console.",
    },
    {
      code: "B",
      title: "Calibration cell",
      body: "The reference stage, documented in every run.",
    },
    {
      code: "C",
      title: "Readout",
      body: "Telemetry and fault states on a glass panel.",
    },
  ],
  note: "Illustrative assembly. No physical product is sold and no certification is claimed.",
} as const;

export const research = {
  label: "04 / Research",
  title: "Published, not promised.",
  intro:
    "A short index of method notes. Each entry describes how a measurement is framed, repeated and questioned — not what it achieved.",
  items: [
    {
      index: "R-01",
      year: "2026",
      title: "Writing a tolerance note another engineer can repeat",
      abstract:
        "A short method for stating assumptions, reference conditions and the point at which a measurement should be distrusted.",
      tags: ["Metrology", "Method"],
    },
    {
      index: "R-02",
      year: "2026",
      title: "Failure states in a calibration loop",
      abstract:
        "A taxonomy of drift, stall and bad input — and what the operator should see before acting on any of them.",
      tags: ["Calibration", "Interface"],
    },
    {
      index: "R-03",
      year: "2026",
      title: "The case for a boring readout",
      abstract:
        "Why an operator-facing display should prefer clarity over spectacle, especially when the system is uncertain.",
      tags: ["Readout", "Design"],
    },
  ],
  note: "Illustrative research index. Sample titles; no external papers are linked.",
} as const;

export const company = {
  label: "05 / Company",
  title: "Engineers first.",
  paragraphs: [
    "Quantum Systems is a precision-compute company. The platform is built by engineers who publish their methods and keep the limits visible.",
    "The work is deliberately unglamorous: fixtures, calibration notes, telemetry and a console that says what it knows. The assembly is modular so a team can inspect one part without replacing the whole.",
  ],
  principles: [
    {
      title: "Show the state",
      body: "No hidden mode, no mystery indicator. The operator can see what the system sees.",
    },
    {
      title: "Publish the method",
      body: "Every result leaves with the conditions that produced it.",
    },
    {
      title: "Respect the limit",
      body: "A documented boundary is part of the product, not a footnote.",
    },
  ],
  facts: [
    { label: "Focus", value: "Precision compute" },
    { label: "Team", value: "Engineers" },
    { label: "Base", value: "Meridian Works" },
    { label: "Deployment", value: "On-prem / cloud" },
  ],
  quote: "If we cannot explain the tolerance, we do not ship the number.",
  quoteNote: "Engineering principle · sample copy",
} as const;

export const contact = {
  label: "06 / Technical brief",
  title: "Request the technical brief.",
  intro:
    "Tell us the measurement, the environment and the constraint. We reply with the method and the limits — not a feature list.",
  bring: [
    "The quantity you need to measure",
    "The environment and duty cycle",
    "The interface your team already uses",
  ],
  email: "hello@quantum-systems.demo",
  phone: "+44 20 7946 0002",
  address: ["Quantum Systems", "1 Meridian Works", "London E2 7JY"],
  hours: "Monday – Friday · 09:00 – 17:00",
  note: "Fictional company. The address, telephone number and details are illustrative.",
  form: {
    title: "Technical request",
    sub: "A short requirement, not a sales call",
    applications: [
      "Platform evaluation",
      "Calibration method",
      "Integration review",
      "Research enquiry",
      "Something else",
    ],
    note: "Sample request form. Nothing is sent to a real company, no product is supplied and no payment is taken.",
    confirmation:
      "Your request has been recorded for this demonstration. No message is sent, no product is supplied and no payment is taken.",
    fallback:
      "The demo inbox is unavailable right now. Please use the email address on this page.",
  },
} as const;
