/**
 * Persian display names for each template brand. Used in user-facing copy
 * (copyright lines, wordmarks) so no Latin brand name leaks into the UI.
 * Technical identifiers, ids and route slugs are never translated.
 */
export const BRAND_FA: Record<string, string> = {
  "noir-cafe": "نوآر کافه",
  "atelier-coffee": "آتلیه قهوه",
  "obsidian-roastery": "رُستری ابسیدین",
  "maison-dining": "مزون داینینگ",
  "ember-kitchen": "امبر کیچن",
  "sora-restaurant": "سورا",
  "neural-studio": "استودیوی نیورال",
  "quantum-systems": "کوانتوم سیستمز",
  "ai-product-launch": "پریزم کامپیوت",
  vaultline: "والت‌لاین",
  "onchain-studio": "آن‌چین استودیو",
  "cyber-defense": "سایبر دیفنس",
  "apex-marque": "اپکس مارک",
  "velocity-studio": "استودیوی ولوکیتی",
  "electric-motion": "الکتریک موشن",
  "aldane-voss": "آلدین و واس",
  "cigar-atelier": "سیگار آتلیه",
  "modern-tobacco": "مدرن توباکو",
};

export function brandFa(id: string, fallback = ""): string {
  return BRAND_FA[id] ?? fallback;
}
