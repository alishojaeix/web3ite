"use client";

import {
  ArchBackdrop,
  Dust,
  Plinth,
  RoundPlinth,
  SceneLights,
  Steam,
  StudioFloor,
  Sway,
  TurnGroup,
  ceramicMaterial,
  glassMaterial,
  matteMaterial,
  metalMaterial,
} from "./primitives";
import type { SceneProps } from "./types";

export function NoirCafeScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#ffe8c8" />
      <StudioFloor color="#080705" accent={theme.accent} />
      <ArchBackdrop accent={theme.accent} color="#110d08" />
      <RoundPlinth accent={theme.accent} radius={1.15} />
      <Sway motion={motion} amplitude={0.025} speed={0.55} position={[0, 0, 0]}>
        <TurnGroup motion={motion} speed={0.11}>
          <mesh position={[0, -0.82, 0]} receiveShadow>
            <cylinderGeometry args={[0.94, 1.02, 0.075, 64]} />
            {ceramicMaterial("#e7dfd2", { roughness: 0.24, metalness: 0.1 })}
          </mesh>
          <mesh position={[0, -0.78, 0]}>
            <cylinderGeometry args={[0.72, 0.8, 0.025, 64]} />
            {metalMaterial(theme.accent, { metalness: 0.45, roughness: 0.34 })}
          </mesh>
          <mesh position={[0, -0.31, 0]}>
            <cylinderGeometry args={[0.55, 0.43, 0.72, 64]} />
            {ceramicMaterial("#f0e8dc", { roughness: 0.22, metalness: 0.12 })}
          </mesh>
          <mesh position={[0, 0.035, 0]}>
            <cylinderGeometry args={[0.505, 0.505, 0.035, 64]} />
            {metalMaterial(theme.accent, {
              roughness: 0.38,
              metalness: 0.15,
              emissive: theme.accent,
              emissiveIntensity: 0.08,
            })}
          </mesh>
          <mesh position={[0.63, -0.29, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.21, 0.052, 16, 40]} />
            {ceramicMaterial("#f0e8dc", { roughness: 0.22, metalness: 0.12 })}
          </mesh>
          <Steam motion={motion} position={[0, 0.25, 0]} color="#f6efe3" />
        </TurnGroup>
      </Sway>
      <Dust color="#d7bf98" opacity={0.3} />
    </group>
  );
}

export function AtelierCoffeeScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#fff2d8" />
      <StudioFloor color="#0b0906" accent={theme.accent} />
      <Plinth accent={theme.accent} width={2.3} depth={1.8} />
      <group position={[-0.1, 0.02, 0]}>
        <mesh position={[0, -0.34, 0]}>
          <cylinderGeometry args={[0.5, 0.58, 0.86, 48, 1, true]} />
          {glassMaterial("#e7dcc9", { opacity: 0.34, transmission: 0.9 })}
        </mesh>
        <mesh position={[0, -0.54, 0]}>
          <cylinderGeometry args={[0.44, 0.5, 0.38, 48]} />
          {metalMaterial("#6f4528", { roughness: 0.28, metalness: 0.16 })}
        </mesh>
        <mesh position={[0, -0.79, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.035, 48]} />
          {metalMaterial(theme.accent, { metalness: 0.6, roughness: 0.28 })}
        </mesh>
        <mesh position={[0, 0.29, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.56, 0.64, 48, 1, true]} />
          {ceramicMaterial("#eee5d7", { roughness: 0.3 })}
        </mesh>
        <mesh position={[0, 0.31, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.46, 0.52, 48, 1, true]} />
          {matteMaterial("#d5c4a7", { side: 2, transparent: true, opacity: 0.9 })}
        </mesh>
        <mesh position={[0, 0.62, 0]}>
          <torusGeometry args={[0.3, 0.045, 12, 40]} />
          {metalMaterial(theme.accent, { roughness: 0.24, metalness: 0.75 })}
        </mesh>
        <Sway motion={motion} amplitude={0.02} speed={0.5} position={[0, 0.7, 0]}>
          <mesh>
            <cylinderGeometry args={[0.035, 0.035, 1.1, 16]} />
            {metalMaterial("#a78c68", { roughness: 0.36 })}
          </mesh>
          <mesh position={[0, 0.58, 0]}>
            <torusGeometry args={[0.17, 0.025, 10, 32]} />
            {metalMaterial(theme.accent, { metalness: 0.8 })}
          </mesh>
        </Sway>
        <group position={[0.84, -0.85, 0.34]}>
          <mesh>
            <cylinderGeometry args={[0.23, 0.19, 0.3, 32]} />
            {ceramicMaterial("#e8ddcb", { roughness: 0.28 })}
          </mesh>
          <mesh position={[0, 0.13, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.02, 32]} />
            {metalMaterial("#6c4327", { roughness: 0.3 })}
          </mesh>
        </group>
      </group>
      <Dust color="#f0d6a8" count={45} opacity={0.25} />
    </group>
  );
}

export function ObsidianRoasteryScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#fff0d6" intensity={0.9} />
      <StudioFloor color="#070707" accent={theme.accent} />
      <group position={[0, 0.35, -1.4]}>
        <mesh>
          <boxGeometry args={[3.8, 3.4, 0.12]} />
          {matteMaterial("#0d0d0c")}
        </mesh>
        <mesh position={[0, 0, 0.07]}>
          <ringGeometry args={[1.05, 1.08, 96]} />
          <meshBasicMaterial color={theme.accent} transparent opacity={0.22} />
        </mesh>
      </group>
      <RoundPlinth accent={theme.accent} radius={1.05} />
      <TurnGroup motion={motion} speed={0.08} position={[0, 0.12, 0]}>
        <mesh>
          <cylinderGeometry args={[0.56, 0.56, 1.95, 64]} />
          {matteMaterial("#11100e", { roughness: 0.34, metalness: 0.46 })}
        </mesh>
        <mesh position={[0, 0.975, 0]}>
          <cylinderGeometry args={[0.53, 0.56, 0.05, 64]} />
          {matteMaterial("#0c0b0a", { roughness: 0.42, metalness: 0.38 })}
        </mesh>
        <mesh position={[0, 1.005, 0]}>
          <cylinderGeometry args={[0.2, 0.24, 0.04, 48]} />
          {metalMaterial("#2a2722", { roughness: 0.4, metalness: 0.5 })}
        </mesh>
        <mesh position={[0, 0.35, 0]}>
          <cylinderGeometry args={[0.575, 0.575, 0.045, 64]} />
          {metalMaterial(theme.accent, { roughness: 0.26, metalness: 0.82 })}
        </mesh>
        <mesh position={[0, -0.42, 0]}>
          <cylinderGeometry args={[0.568, 0.568, 0.44, 32, 1, true, -0.6, 1.2]} />
          {matteMaterial("#d8cbb8", { roughness: 0.9 })}
        </mesh>
        <mesh position={[0, -0.33, 0]}>
          <cylinderGeometry args={[0.573, 0.573, 0.012, 32, 1, true, -0.28, 0.56]} />
          <meshBasicMaterial color="#171512" />
        </mesh>
      </TurnGroup>
      <group position={[1.2, -0.9, 0.55]} rotation={[0, 0.5, 0.1]}>
        <mesh>
          <cylinderGeometry args={[0.055, 0.045, 0.58, 16]} />
          {metalMaterial("#b08b58", { roughness: 0.24 })}
        </mesh>
        <mesh position={[0.18, 0.15, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          {metalMaterial("#c6a575", { roughness: 0.3 })}
        </mesh>
      </group>
      <Dust color="#d8c3a2" opacity={0.22} count={45} />
    </group>
  );
}
