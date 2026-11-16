"use client";

import { RoundedBox } from "@react-three/drei";
import {
  ArchBackdrop,
  Dust,
  EmberField,
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

export function MaisonDiningScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#ffe7d1" intensity={0.9} />
      <StudioFloor color="#090706" accent={theme.accent} />
      <ArchBackdrop accent={theme.accent} color="#120b09" />
      <group position={[0, 2.05, -0.35]}>
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 1.3, 12]} />
          {metalMaterial("#b9a485", { roughness: 0.35 })}
        </mesh>
        <mesh position={[0, -0.48, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.55, 0.42, 48, 1, true]} />
          {metalMaterial(theme.accent, { roughness: 0.3, metalness: 0.55, side: 2 })}
        </mesh>
        <mesh position={[0, -0.64, 0]}>
          <sphereGeometry args={[0.13, 24, 24]} />
          <meshBasicMaterial color="#ffe5bc" />
        </mesh>
        <pointLight position={[0, -0.7, 0]} intensity={8} distance={4.5} color="#ffd5a3" />
      </group>
      <RoundPlinth accent={theme.accent} radius={1.12} />
      <Sway motion={motion} amplitude={0.018} speed={0.45} position={[0, 0, 0]}>
        <TurnGroup motion={motion} speed={0.09}>
          <mesh position={[0, -0.78, 0]}>
            <cylinderGeometry args={[1.02, 1.12, 0.07, 64]} />
            {ceramicMaterial("#f1e9dd", { roughness: 0.16, metalness: 0.1 })}
          </mesh>
          <mesh position={[0, -0.4, 0]} scale={[1, 0.66, 1]}>
            <sphereGeometry args={[0.79, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
            {metalMaterial("#d8d0c3", { roughness: 0.18, metalness: 0.72 })}
          </mesh>
          <mesh position={[0, 0.13, 0]}>
            <sphereGeometry args={[0.09, 24, 24]} />
            {metalMaterial(theme.accent, { roughness: 0.24, metalness: 0.55 })}
          </mesh>
          <mesh position={[0.8, -0.7, 0.45]}>
            <cylinderGeometry args={[0.08, 0.08, 0.28, 16]} />
            {glassMaterial("#d9c9b6", { opacity: 0.4 })}
          </mesh>
        </TurnGroup>
      </Sway>
      <Dust color="#e5c6a6" count={50} opacity={0.25} />
    </group>
  );
}

export function EmberKitchenScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#ffc38b" intensity={0.85} />
      <StudioFloor color="#080605" accent={theme.accent} />
      <group position={[0, 0.3, -1.55]}>
        <mesh>
          <boxGeometry args={[4.2, 3.1, 0.12]} />
          {matteMaterial("#0d0a08")}
        </mesh>
        <mesh position={[0, -0.2, 0.08]}>
          <planeGeometry args={[2.8, 1.7]} />
          <meshBasicMaterial color={theme.accent} transparent opacity={0.035} />
        </mesh>
      </group>
      <Plinth accent={theme.accent} width={2.5} depth={1.5} height={0.22} />
      <TurnGroup motion={motion} speed={0.045} position={[0, -0.4, 0]}>
        <RoundedBox args={[2.2, 0.18, 1.12]} radius={0.07} smoothness={4}>
          {matteMaterial("#2b1b12", { roughness: 0.9, metalness: 0.05 })}
        </RoundedBox>
        {[-0.6, -0.3, 0, 0.3, 0.6].map((x) => (
          <mesh key={x} position={[x, 0.16, 0]}>
            <boxGeometry args={[0.018, 0.035, 0.82]} />
            {metalMaterial("#6d6258", { roughness: 0.42, metalness: 0.72 })}
          </mesh>
        ))}
        <mesh position={[0.42, 0.28, 0.08]}>
          <sphereGeometry args={[0.17, 24, 16]} />
          {matteMaterial("#4e2b18", { roughness: 0.95 })}
        </mesh>
        <mesh position={[-0.4, 0.27, -0.12]} rotation={[0.4, 0.3, 0.2]}>
          <coneGeometry args={[0.14, 0.35, 6]} />
          {matteMaterial("#5c351d", { roughness: 0.9 })}
        </mesh>
        <mesh position={[0.02, 0.28, -0.2]} rotation={[0.1, 0, 0.3]}>
          <cylinderGeometry args={[0.035, 0.06, 0.55, 12]} />
          {matteMaterial("#6c4b27", { roughness: 0.8 })}
        </mesh>
        <EmberField accent={theme.accent} count={24} motion={motion} />
        <Steam motion={motion} position={[0.25, 0.35, 0.1]} color="#b7a18d" />
      </TurnGroup>
      <group position={[1.35, -0.95, 0.6]}>
        <mesh rotation={[0.2, 0.2, 0.1]}>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
          {metalMaterial("#9c856d", { roughness: 0.35 })}
        </mesh>
      </group>
      <Dust color="#e09a63" count={60} opacity={0.3} />
    </group>
  );
}

export function SoraRestaurantScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#e9efe1" intensity={0.85} />
      <StudioFloor color="#080a08" accent={theme.accent} />
      <group position={[0, 0.15, -1.55]}>
        {[-1.6, -0.8, 0, 0.8, 1.6].map((x) => (
          <mesh key={x} position={[x, 0, 0]}>
            <boxGeometry args={[0.34, 2.8, 0.06]} />
            {matteMaterial("#a9a18f", { transparent: true, opacity: 0.16 })}
          </mesh>
        ))}
        <mesh position={[0, 0.8, -0.08]}>
          <boxGeometry args={[4, 0.03, 0.04]} />
          {matteMaterial("#b3aa97", { transparent: true, opacity: 0.2 })}
        </mesh>
      </group>
      <group position={[0, -1.18, 0]}>
        <mesh position={[0, 0.09, 0]}>
          <boxGeometry args={[2.1, 0.18, 1.55]} />
          {matteMaterial("#27251f", { roughness: 0.62 })}
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[1.7, 0.06, 1.22]} />
          {matteMaterial("#d4cbb8", { roughness: 0.48 })}
        </mesh>
      </group>
      <Sway motion={motion} amplitude={0.018} speed={0.42} position={[0, 0, 0]}>
        <TurnGroup motion={motion} speed={0.07}>
          <mesh position={[0, -0.18, 0]}>
            <cylinderGeometry args={[0.67, 0.35, 0.32, 64, 1, true]} />
            {ceramicMaterial("#d8d4c5", { roughness: 0.35, side: 2 })}
          </mesh>
          <mesh position={[0, -0.33, 0]}>
            <cylinderGeometry args={[0.34, 0.4, 0.05, 48]} />
            {ceramicMaterial("#c7c3b3", { roughness: 0.36 })}
          </mesh>
          <mesh position={[0.06, -0.12, 0]}>
            <sphereGeometry args={[0.12, 24, 16]} />
            {matteMaterial(theme.accent, { roughness: 0.8 })}
          </mesh>
          <mesh position={[0.65, -0.76, 0.3]}>
            <cylinderGeometry args={[0.16, 0.2, 0.23, 32]} />
            {ceramicMaterial("#e0dbcc", { roughness: 0.3 })}
          </mesh>
          <mesh position={[0.65, -0.6, 0.3]}>
            <cylinderGeometry args={[0.14, 0.14, 0.02, 32]} />
            {glassMaterial("#9baea0", { opacity: 0.4 })}
          </mesh>
          <mesh position={[-0.58, -0.72, -0.2]} rotation={[0.1, 0.2, 1.4]}>
            <cylinderGeometry args={[0.012, 0.018, 0.9, 8]} />
            {matteMaterial("#b49a73", { roughness: 0.7 })}
          </mesh>
        </TurnGroup>
      </Sway>
      <Dust color="#d9d2bd" count={36} opacity={0.2} />
    </group>
  );
}
