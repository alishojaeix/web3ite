import type { Template } from "@/types/template";
import { atelierCoffee, noirCafe, obsidianRoastery } from "./cafe";
import { emberKitchen, maisonDining, soraRestaurant } from "./restaurant";
import { aiProductLaunch, neuralStudio, quantumSystems } from "./ai";
import { cyberDefense, onchainStudio, vaultline } from "./security";
import { apexMarque, electricMotion, velocityStudio } from "./automotive";
import { cigarAtelier, modernTobacco } from "./tobacco";
import { aldaneVoss } from "./aldane-voss";

/**
 * The catalog. Add one definition, then one line here. The repository layer
 * can be swapped for a CMS/API later without touching any UI component.
 */
export const templates: Template[] = [
  noirCafe,
  atelierCoffee,
  obsidianRoastery,
  maisonDining,
  emberKitchen,
  soraRestaurant,
  neuralStudio,
  quantumSystems,
  aiProductLaunch,
  vaultline,
  onchainStudio,
  cyberDefense,
  apexMarque,
  velocityStudio,
  electricMotion,
  aldaneVoss,
  cigarAtelier,
  modernTobacco,
];
