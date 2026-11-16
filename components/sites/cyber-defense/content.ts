/**
 * Cyber Defense - sample managed-response practice content.
 *
 * The practice, response model and records are fictional. No live monitoring,
 * certification, incident data or security guarantee is represented.
 */

export const cyberNav = [
  { label: "Defense", href: "#showcase" },
  { label: "Response", href: "#story" },
  { label: "Record", href: "#materials" },
  { label: "Practice", href: "#specs" },
  { label: "Brief", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Cyber Defense / Managed response",
  headline: "Prepared",
  headlineAccent: "before impact.",
  intro:
    "A security response practice presented as a calm operating system: monitoring, escalation and a rehearsed plan, written down before the clock starts.",
  status: "Response desk · illustrative model",
  note: "Sample website concept · fictional practice",
  caption: ["Shield 01 — faceted signal", "Illustrative drawing · not a live feed"],
  footNote: "Managed response · Rehearsed runbooks · Written records",
} as const;

export const heroMeta = [
  { label: "Model", value: "Managed" },
  { label: "Runbooks", value: "Rehearsed" },
  { label: "Reporting", value: "Written" },
] as const;

export const strip = [
  "Signal triage",
  "Named decision rights",
  "Owned runbooks",
  "Rehearsed escalation",
  "Written timelines",
  "24/7 response desk",
] as const;

export const model = {
  label: "01 / The model",
  title: "A calm operating system for response.",
  intro:
    "Monitoring, escalation and a rehearsed plan. Each stage answers one question, names one owner and leaves one artefact behind.",
  note: "Sample response model. The stages, roles and artefacts are illustrative and do not describe a real service.",
  steps: [
    {
      step: "01",
      title: "Signal",
      body: "Telemetry is mapped to the decisions it supports. Alerts are grouped by impact, not by the loudest tool.",
      detail: "Grouped by impact",
    },
    {
      step: "02",
      title: "Decide",
      body: "Escalation paths and decision rights are agreed before an incident. The clock starts with a named owner.",
      detail: "Agreed in advance",
    },
    {
      step: "03",
      title: "Respond",
      body: "Every runbook has an owner, a review date and a rehearsed path. Improvisation is the exception, not the plan.",
      detail: "Owned and rehearsed",
    },
    {
      step: "04",
      title: "Record",
      body: "A factual timeline, the response taken and the changes that follow. Written for the people who were not in the room.",
      detail: "Written to be read",
    },
  ],
  board: {
    title: "Response board",
    caption: "Illustrative state · not live",
    rows: [
      { area: "Monitoring", note: "Mapped to decisions", status: "Mapped" },
      { area: "Escalation", note: "Decision rights agreed", status: "Agreed" },
      { area: "Runbooks", note: "Owner and review date", status: "Owned" },
      { area: "Evidence", note: "Factual written timeline", status: "Written" },
    ],
    note: "A board, not a promise: the rows describe how the practice is organised.",
  },
  quote: {
    text: "The plan is the product.",
    note: "Practice principle · sample copy",
  },
} as const;

export const response = {
  label: "02 / The response",
  title: "The first hour is a rehearsal.",
  intro:
    "Response is a set of decisions made in advance. The practice is built so that the first hour is a rehearsal, not a negotiation.",
  principles: [
    {
      title: "A signal you can act on",
      body: "Alerting is designed around decisions, not dashboards. Every alert names the owner, the impact and the next step.",
    },
    {
      title: "Decisions agreed in advance",
      body: "Escalation is a written path: who decides, who is informed and when the clock starts. It is reviewed before it is needed.",
    },
    {
      title: "Rehearsal as a habit",
      body: "Runbooks are tested on a schedule and revised when the rehearsal exposes a gap. The review date is part of the document.",
    },
    {
      title: "Evidence after the fact",
      body: "Every response produces a timeline that can be read by people who were not in the room, in plain language.",
    },
  ],
  note: "Sample response principles. No real incident, client or outcome is represented.",
  clock: {
    title: "Response clock",
    caption: "Illustrative sequence · sample",
    events: [
      {
        time: "T+00",
        title: "Signal received",
        body: "Impact grouped, owner named, clock started.",
      },
      {
        time: "T+05",
        title: "Decision path opened",
        body: "The agreed escalation path is confirmed, not debated.",
      },
      {
        time: "T+15",
        title: "Runbook in motion",
        body: "The owner follows a rehearsed step and records it as it happens.",
      },
      {
        time: "T+60",
        title: "First written record",
        body: "A factual timeline is shared with the people who need it.",
      },
    ],
    note: "Times are illustrative only. This is not a real incident timeline.",
  },
} as const;

export const record = {
  label: "03 / The record",
  title: "Three artefacts, one story.",
  intro:
    "A response is only as useful as the record it leaves. The visual language follows the same rule: one clear signal, one written account.",
  note: "Sample artefacts for layout only. No real log, record or incident is represented.",
  items: [
    {
      name: "Scan rings",
      note: "Continuous signal",
      swatch: "rings",
      body: "The monitoring view keeps context attached: source, impact and owner. A ring is a question, not a decoration.",
    },
    {
      name: "Signal red",
      note: "One clear alarm",
      swatch: "signal",
      body: "A single alarm colour is reserved for the decision that needs attention. If everything is red, nothing is.",
    },
    {
      name: "Incident paper",
      note: "A written record",
      swatch: "paper",
      body: "The post-incident account is written for people outside the room: what happened, what was decided and what changes.",
    },
  ],
} as const;

export const practice = {
  label: "04 / Details",
  title: "The practice.",
  intro:
    "A small response practice, described the way we would describe an engagement: scope, ownership and the boundaries of the work.",
  facts: [
    { label: "Model", value: "Managed", note: "Response desk" },
    { label: "Coverage", value: "24/7", note: "Illustrative" },
    { label: "Runbooks", value: "Owned", note: "Named keeper" },
    { label: "Reporting", value: "Written", note: "Plain language" },
  ],
  rows: [
    { label: "Engagement", value: "Retained response", note: "Scoped in advance" },
    { label: "Escalation", value: "Agreed path", note: "Decision rights" },
    { label: "Rehearsal", value: "Scheduled", note: "Reviewed after" },
    { label: "Evidence", value: "Written timeline", note: "Readable record" },
    { label: "Handover", value: "Named owners", note: "No shared inbox" },
    { label: "Review", value: "Quarterly", note: "Documented changes" },
  ],
  notClaimed: [
    "No live monitoring is running on this page",
    "No certification or compliance status is claimed",
    "No guarantee of prevention or recovery is made",
    "No real incident, client or response data is shown",
  ],
  notClaimedNote:
    "This is a demonstration website. A real practice would name its team, scope and assurance — or leave the space empty.",
  note: "Illustrative practice details. Values are qualitative on purpose.",
} as const;

export const contact = {
  label: "05 / Brief",
  title: "Rehearse the response.",
  intro:
    "Request a response brief for your team. A short note about the decision you need to support is enough to start.",
  facts: [
    { label: "Reply", value: "2 days" },
    { label: "Format", value: "Brief" },
    { label: "Scope", value: "Team" },
    { label: "Deck", value: "None" },
  ],
  bring: [
    "The decision your response plan has to support",
    "The systems and people already in the path",
    "The constraint you cannot move",
  ],
  quote: "A calm response is designed before it is needed.",
  quoteNote: "Practice principle · sample copy",
  email: "response@cyber-defense.demo",
  phone: "+44 20 7946 0007",
  address: ["Cyber Defense", "5 Watchtower Square", "London E1 8AA"],
  hours: "24/7 · Response desk",
  note: "Fictional practice. Address, telephone number and details are illustrative.",
  form: {
    title: "Response brief",
    sub: "A decision and a constraint, not a sales call",
    types: ["Response brief", "Runbook review", "Rehearsal", "Something else"],
    note: "Sample brief form. Nothing is sent to a real practice, no response is promised and no security service is offered.",
    confirmation:
      "Your brief has been recorded for this demonstration. No message is sent, no engagement is accepted and no security service is offered.",
    fallback:
      "The demo inbox is unavailable right now. Please use the email address on this page.",
  },
} as const;
