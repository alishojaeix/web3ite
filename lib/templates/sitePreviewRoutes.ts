/**
 * Standalone website previews that are ready to open from the marketplace.
 * Every published template has a real website route. Seventeen templates use
 * dedicated hand-built pages; Aldane & Voss is served by its standalone static
 * catalogue document in /public/previews.
 */
const sitePreviewRoutes: Record<string, string> = {
  "noir-cafe": "/sites/noir-cafe",
  "atelier-coffee": "/sites/atelier-coffee",
  "obsidian-roastery": "/sites/obsidian-roastery",
  "maison-dining": "/sites/maison-dining",
  "ember-kitchen": "/sites/ember-kitchen",
  "sora-restaurant": "/sites/sora-restaurant",
  "neural-studio": "/sites/neural-studio",
  "quantum-systems": "/sites/quantum-systems",
  "ai-product-launch": "/sites/ai-product-launch",
  vaultline: "/sites/vaultline",
  "onchain-studio": "/sites/onchain-studio",
  "cyber-defense": "/sites/cyber-defense",
  "apex-marque": "/sites/apex-marque",
  "velocity-studio": "/sites/velocity-studio",
  "electric-motion": "/sites/electric-motion",
  "aldane-voss": "/previews/aldane-voss",
  "cigar-atelier": "/sites/cigar-atelier",
  "modern-tobacco": "/sites/modern-tobacco",
};

export function getSitePreviewRoute(templateId: string): string | undefined {
  return sitePreviewRoutes[templateId];
}
