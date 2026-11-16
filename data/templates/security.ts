import type { Template } from "@/types/template";

export const vaultline: Template = {
  id: "vaultline",
  title: "Vaultline",
  category: "security",
  description:
    "A premium security and infrastructure page built around a layered vault monolith, audit timeline and disclosure channel.",
  previewImage: "/images/templates/vaultline.jpg",
  scene: "vaultline",
  theme: {
    accent: "#b6a4e8",
    accentSoft: "#6b5a9c",
    background: "#09090d",
    foreground: "#f2eef8",
    muted: "#a49cb2",
    atmosphere: "#171227",
  },
  content: {
    nav: ["Infrastructure", "Assurance", "Disclosure"],
    eyebrow: "Vaultline / Custody infrastructure",
    headline: "Security",
    headlineAccent: "you can inspect.",
    intro:
      "A custody and infrastructure platform that shows its work: controls, audit history and a direct disclosure channel.",
    primaryCta: "Read the controls",
    secondaryCta: "Open disclosure",
    note: "Demo experience · drag to inspect the vault",
    chapters: [
      {
        label: "01 / The vault",
        title: "Layers, not promises",
        body: "The page explains custody as a set of physical and procedural layers, each with a named owner and a testable control.",
      },
      {
        label: "02 / The record",
        title: "Assurance over time",
        body: "An audit timeline documents what was reviewed, when, and what changed. No badge without a date and a scope.",
      },
      {
        label: "03 / The channel",
        title: "A direct route in",
        body: "A disclosure page with a clear scope, a response expectation and a key for sensitive reports.",
      },
    ],
    specs: [
      { label: "Template", value: "Vaultline" },
      { label: "Industry", value: "Security & Web3" },
      { label: "Hero scene", value: "Layered vault / violet key light" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 399,
  features: ["Audit timeline", "Control overview", "Disclosure channel", "Status page", "Layered vault scene"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: true,
  published: true,
  isDemo: true,
};

export const onchainStudio: Template = {
  id: "onchain-studio",
  title: "Onchain Studio",
  category: "security",
  description:
    "A restrained Web3 product studio with a ledger-like block sculpture, precise typography and no speculative claims.",
  previewImage: "/images/templates/onchain-studio.jpg",
  scene: "onchain-studio",
  theme: {
    accent: "#9fbf9a",
    accentSoft: "#5b7b58",
    background: "#090b09",
    foreground: "#f0f3ed",
    muted: "#9ba79a",
    atmosphere: "#141b12",
  },
  content: {
    nav: ["Protocols", "Studio", "Notes"],
    eyebrow: "Onchain Studio / Product engineering",
    headline: "Onchain,",
    headlineAccent: "made legible.",
    intro:
      "A product studio for teams building on open networks. Clear interfaces, honest constraints and work that can be audited.",
    primaryCta: "See the work",
    secondaryCta: "Read the notes",
    note: "Demo experience · drag to inspect the chain",
    chapters: [
      {
        label: "01 / The work",
        title: "Products, not narratives",
        body: "Case studies describe the problem, the interface and the trade-offs. Token mechanics are documented when they exist.",
      },
      {
        label: "02 / The studio",
        title: "Technical by default",
        body: "Design and protocol engineering sit together. Every interface is tested against real state, not a happy-path mock.",
      },
      {
        label: "03 / The notes",
        title: "A public working file",
        body: "Short notes on interface patterns, wallet flows and the unglamorous edges of onchain product design.",
      },
    ],
    specs: [
      { label: "Template", value: "Onchain Studio" },
      { label: "Industry", value: "Security & Web3" },
      { label: "Hero scene", value: "Ledger blocks / muted green light" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 359,
  features: ["Case-study grid", "Protocol notes", "Studio page", "Contact flow", "Ledger sculpture"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: false,
  published: true,
  isDemo: true,
};

export const cyberDefense: Template = {
  id: "cyber-defense",
  title: "Cyber Defense",
  category: "security",
  description:
    "An interactive security environment with a faceted shield, scanning rings and a controlled threat-response story.",
  previewImage: "/images/templates/cyber-defense.jpg",
  scene: "cyber-defense",
  theme: {
    accent: "#e08a68",
    accentSoft: "#8d4f39",
    background: "#0b0808",
    foreground: "#f6ece7",
    muted: "#ad9b93",
    atmosphere: "#21100c",
  },
  content: {
    nav: ["Defense", "Response", "Brief"],
    eyebrow: "Cyber Defense / Managed response",
    headline: "Prepared",
    headlineAccent: "before impact.",
    intro:
      "A security response practice presented as a calm operating system: monitoring, escalation and a rehearsed plan.",
    primaryCta: "See the response model",
    secondaryCta: "Request a brief",
    note: "Demo experience · drag to inspect the shield",
    chapters: [
      {
        label: "01 / Monitor",
        title: "A clear signal path",
        body: "Telemetry is mapped to the decisions it supports. Alerts are grouped by impact, not by the loudest tool.",
      },
      {
        label: "02 / Respond",
        title: "Rehearsed, not improvised",
        body: "Escalation paths and decision rights are agreed before an incident. Every runbook has an owner and a review date.",
      },
      {
        label: "03 / Recover",
        title: "A written record",
        body: "After an incident, the team delivers a factual timeline, the response taken and the changes that follow.",
      },
    ],
    specs: [
      { label: "Template", value: "Cyber Defense" },
      { label: "Industry", value: "Security & Web3" },
      { label: "Hero scene", value: "Faceted shield / scanning rings" },
      { label: "Interaction", value: "Drag to orbit" },
    ],
  },
  price: 389,
  features: ["Response model", "Threat timeline", "Runbook library", "Incident brief", "Animated scan rings"],
  technologies: ["Next.js 14", "React Three Fiber", "Drei", "Tailwind CSS", "Procedural scene"],
  featured: true,
  published: true,
  isDemo: true,
};
