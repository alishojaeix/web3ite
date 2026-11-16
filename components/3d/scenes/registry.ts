import type { ComponentType } from "react";
import type { TemplateSceneId } from "@/types/template";
import type { SceneProps } from "./types";
import { AtelierCoffeeScene, NoirCafeScene, ObsidianRoasteryScene } from "./cafe";
import { EmberKitchenScene, MaisonDiningScene, SoraRestaurantScene } from "./restaurant";
import { AIProductLaunchScene, NeuralStudioScene, QuantumSystemsScene } from "./technology";
import { CyberDefenseScene, OnchainStudioScene, VaultlineScene } from "./security";
import { ApexMarqueScene, ElectricMotionScene, VelocityStudioScene } from "./automotive";
import { CigarAtelierScene, HeritageTobaccoScene, ModernTobaccoScene } from "./tobacco";

export type SceneDefinition = {
  Component: ComponentType<SceneProps>;
  camera: [number, number, number];
  fov: number;
};

/**
 * The only place template ids and WebGL implementations meet. Catalog cards,
 * the studio and future CMS-driven entries all resolve through this registry.
 */
export const sceneRegistry: Record<TemplateSceneId, SceneDefinition> = {
  "noir-cafe": { Component: NoirCafeScene, camera: [0, 0.4, 4.8], fov: 34 },
  "atelier-coffee": { Component: AtelierCoffeeScene, camera: [0, 0.25, 4.9], fov: 34 },
  "obsidian-roastery": { Component: ObsidianRoasteryScene, camera: [0, 0.3, 4.9], fov: 34 },
  "maison-dining": { Component: MaisonDiningScene, camera: [0, 0.35, 4.9], fov: 35 },
  "ember-kitchen": { Component: EmberKitchenScene, camera: [0, 0.25, 5.1], fov: 36 },
  "sora-restaurant": { Component: SoraRestaurantScene, camera: [0, 0.2, 4.9], fov: 34 },
  "neural-studio": { Component: NeuralStudioScene, camera: [0, 0.2, 5.4], fov: 37 },
  "quantum-systems": { Component: QuantumSystemsScene, camera: [0, 0.3, 5.2], fov: 34 },
  "ai-product-launch": { Component: AIProductLaunchScene, camera: [0, 0.2, 4.8], fov: 34 },
  vaultline: { Component: VaultlineScene, camera: [0, 0.3, 5.1], fov: 34 },
  "onchain-studio": { Component: OnchainStudioScene, camera: [0, 0.3, 5.2], fov: 35 },
  "cyber-defense": { Component: CyberDefenseScene, camera: [0, 0.25, 5.2], fov: 34 },
  "apex-marque": { Component: ApexMarqueScene, camera: [0, 0.75, 5.9], fov: 35 },
  "velocity-studio": { Component: VelocityStudioScene, camera: [0, 0.35, 5.3], fov: 35 },
  "electric-motion": { Component: ElectricMotionScene, camera: [0, 0.5, 5.5], fov: 35 },
  "heritage-tobacco": { Component: HeritageTobaccoScene, camera: [0, 0.35, 4.9], fov: 34 },
  "cigar-atelier": { Component: CigarAtelierScene, camera: [0, 0.25, 4.8], fov: 34 },
  "modern-tobacco": { Component: ModernTobaccoScene, camera: [0, 0.2, 4.9], fov: 34 },
};
