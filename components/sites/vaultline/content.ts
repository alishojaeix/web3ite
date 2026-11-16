/**
 * Vaultline - sample custody-infrastructure content.
 *
 * The company, platform and audit record are fictional. No certification,
 * audit opinion, compliance status or security guarantee is represented.
 */

export const vaultNav = [
  { label: "Infrastructure", href: "#showcase" },
  { label: "Assurance", href: "#story" },
  { label: "Platform", href: "#specs" },
  { label: "Disclosure", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Vaultline / Custody infrastructure",
  headline: "Security",
  headlineAccent: "you can inspect.",
  intro:
    "A custody and infrastructure platform that shows its work: controls, audit history and a direct disclosure channel.",
  status: "Platform overview · illustrative record",
  note: "Sample website concept · fictional company and platform",
  caption: [
    "Vault 01 — layered custody",
    "Illustrative drawing · not to scale",
  ],
  footNote: "Custody infrastructure · Named owners · Documented controls",
} as const;

export const heroMeta = [
  { label: "Focus", value: "Custody" },
  { label: "Method", value: "Inspectable" },
  { label: "Channel", value: "Direct" },
] as const;

export const strip = [
  "Key separation",
  "Named owners",
  "Append-only audit",
  "Documented controls",
  "Direct disclosure",
  "Published status",
] as const;

export const showcase = {
  label: "01 / The vault",
  title: "Controls, audit history, and a direct route in.",
  intro:
    "A custody platform that shows its work. Four surfaces, one record: who acted, under which policy, and what changed.",
  note: "Sample platform description. Capabilities are illustrative; no security guarantee is made.",
  features: [
    {
      index: "01",
      title: "Custody",
      body: "Key separation and policy. Every action has a named owner, and every owner is on the record.",
      detail: "Separation · Policy · Owner",
    },
    {
      index: "02",
      title: "Audit",
      body: "A continuous event history, written to be read by an outside reviewer — not just by the team that wrote it.",
      detail: "Append-only · Exportable",
    },
    {
      index: "03",
      title: "Assurance",
      body: "Controls documented with scope and evidence. The date and the limit sit beside the claim.",
      detail: "Scoped · Dated",
    },
    {
      index: "04",
      title: "Disclosure",
      body: "A direct security channel with a clear scope and a response expectation. No ticket maze.",
      detail: "Direct · Scoped",
    },
  ],
  quote: {
    text: "A badge is a claim. A dated record is evidence.",
    note: "Assurance principle · sample copy",
  },
} as const;

export const assurance = {
  label: "02 / Controls",
  title: "Security you can inspect.",
  intro:
    "Assurance is a record, not a badge. The platform is documented in layers: what is controlled, who owns it and what the evidence looks like.",
  principles: [
    {
      title: "Layers, not promises",
      body: "Custody is explained as physical and procedural layers, each with a named owner and a testable control.",
    },
    {
      title: "A named owner",
      body: "Every control has a person and a policy behind it. An anonymous control is not a control.",
    },
    {
      title: "Evidence with a date",
      body: "A review is only useful if it says what was examined, when, and what changed as a result.",
    },
  ],
  record: {
    label: "Illustrative audit record",
    note: "Sample events for layout only. This is not a real audit log and no external review is represented.",
    events: [
      {
        date: "2026 · Q1",
        tag: "Reviewed",
        title: "Access review",
        body: "Named owners re-attested for the custody path. Scope and exceptions recorded.",
      },
      {
        date: "2026 · Q1",
        tag: "Tested",
        title: "Key separation",
        body: "Control tested against the documented policy. Result recorded with its limit.",
      },
      {
        date: "2026 · Q2",
        tag: "Exercised",
        title: "Disclosure drill",
        body: "The security channel exercised end-to-end with a tabletop report.",
      },
      {
        date: "2026 · Q2",
        tag: "Exported",
        title: "Reader export",
        body: "Audit history exported for an outside reviewer in a documented format.",
      },
    ],
  },
  note: "Illustrative assurance story. No certification, audit opinion or compliance status is claimed.",
} as const;

export const platform = {
  label: "03 / Assurance",
  title: "The platform.",
  intro:
    "Written the way a reviewer would want to read it: grouped, dated and honest about what the page cannot prove.",
  note: "Illustrative platform description. Values are qualitative on purpose; no security guarantee is made.",
  rows: [
    { label: "Custody model", value: "Key separation", note: "Policy-backed" },
    { label: "Deployment", value: "Private cloud", note: "Single tenant" },
    { label: "Controls", value: "Documented", note: "Named owner" },
    { label: "Audit cadence", value: "Continuous", note: "Append-only" },
    { label: "Access", value: "Policy + owner", note: "Reviewed" },
    { label: "Export", value: "Reader format", note: "Documented" },
    { label: "Disclosure", value: "Direct", note: "Scoped" },
    { label: "Status", value: "Published", note: "Plain language" },
  ],
  notClaimed: [
    "No certification is claimed",
    "No audit opinion is represented",
    "No compliance status is asserted",
  ],
  notClaimedNote:
    "This demonstration deliberately avoids trust badges. A real deployment would publish scope, date and evidence — or say nothing.",
} as const;

export const materials = {
  label: "04 / Details",
  title: "An interface of evidence.",
  intro:
    "The design language follows the product: violet light for the control room, layered steel for the vault, and paper for the record.",
  note: "Design notes for this template. No supplier, finish or certification is represented.",
  items: [
    {
      name: "Violet light",
      note: "Control room calm",
      body: "One cool accent marks state and focus. Everything else stays neutral so the record can be read.",
      swatch: "violet" as const,
    },
    {
      name: "Layered steel",
      note: "The vault",
      body: "Concentric plates and hairline seams. Depth comes from structure, not from glow.",
      swatch: "steel" as const,
    },
    {
      name: "Audit paper",
      note: "Evidence, not decoration",
      body: "A quiet off-white for the record: timestamps, scope notes and the limits of a claim.",
      swatch: "paper" as const,
    },
  ],
} as const;

export const disclosure = {
  label: "05 / Disclosure",
  title: "Inspect the controls.",
  intro:
    "Request the control overview or open a disclosure. We reply with scope and evidence — not a badge.",
  bring: [
    "The control area you need to inspect",
    "The environment and deployment model",
    "The decision your review has to support",
  ],
  facts: [
    { label: "Response", value: "2 days" },
    { label: "Channel", value: "Direct" },
    { label: "Scope", value: "Stated" },
    { label: "Badges", value: "None" },
  ],
  quote: "If we cannot show the evidence, we do not make the claim.",
  quoteNote: "Assurance principle · sample copy",
  email: "security@vaultline.demo",
  phone: "+44 20 7946 0004",
  address: ["Vaultline", "7 Bastion Court", "London E2 7JY"],
  hours: "Monday – Friday · 09:00 – 18:00",
  note: "Fictional company. Address, telephone number and details are illustrative.",
  form: {
    title: "Control overview request",
    sub: "A scoped request, not a sales call",
    types: [
      "Control overview",
      "Security disclosure",
      "Platform review",
      "Something else",
    ],
    note: "Sample request form. Nothing is sent to a real company, no review is performed and no security guarantee is made.",
    confirmation:
      "Your request has been recorded for this demonstration. No message is sent, no review is performed and no security guarantee is made.",
    fallback:
      "The demo inbox is unavailable right now. Please use the email address on this page.",
  },
} as const;
