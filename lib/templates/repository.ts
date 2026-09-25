import { templates } from "@/data/templates";
import {
  CATEGORY_LABELS,
  TEMPLATE_CATEGORIES,
  type Template,
  type TemplateCategory,
} from "@/types/template";

/**
 * Catalog access lives here so a later database, CMS, or API
 * can replace the in-memory source without touching UI components.
 *
 * Swap `loadCatalog` to fetch("/api/templates") or a CMS client.
 */
async function loadCatalog(): Promise<Template[]> {
  return templates;
}

function isLive(template: Template) {
  return template.published !== false;
}

export async function listTemplates(): Promise<Template[]> {
  const catalog = await loadCatalog();
  return catalog.filter(isLive);
}

export async function getFeaturedTemplates(): Promise<Template[]> {
  const catalog = await listTemplates();
  const featured = catalog.filter((template) => template.featured);
  return featured.length > 0 ? featured : catalog.slice(0, 8);
}

export async function getTemplateById(id: string): Promise<Template | null> {
  const catalog = await listTemplates();
  return catalog.find((template) => template.id === id) ?? null;
}

export async function getTemplatesByCategory(
  category: TemplateCategory | "all"
): Promise<Template[]> {
  const catalog = await listTemplates();
  if (category === "all") return catalog;
  return catalog.filter((template) => template.category === category);
}

export function getCategoryOptions() {
  return TEMPLATE_CATEGORIES.map((id) => ({
    id,
    label: CATEGORY_LABELS[id],
  }));
}

export type { Template, TemplateCategory };
