import type { Template } from "@/types/template";
import { cafe } from "./cafe";
import { restaurant } from "./restaurant";
import { ai } from "./ai";
import { security } from "./security";
import { automotive } from "./automotive";

/**
 * The catalog. Add one file per template, then one line here.
 * `lib/templates/repository.ts` reads this array — swap that layer for a
 * CMS or API later without touching any component.
 */
export const templates: Template[] = [
  cafe,
  restaurant,
  ai,
  security,
  automotive,
];
