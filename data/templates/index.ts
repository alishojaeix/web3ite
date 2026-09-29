import type { Template } from "@/types/template";
import { cafe } from "./cafe";

/**
 * The catalog. Add one file per template, then one line here.
 * `lib/templates/repository.ts` reads this array — swap that layer for a
 * CMS or API later without touching any component.
 */
export const templates: Template[] = [cafe];
