"use client";

import { RoundedBox } from "@react-three/drei";
import {
  Dust,
  Plinth,
  RoundPlinth,
  SceneLights,
  StudioFloor,
  Sway,
  TurnGroup,
  glassMaterial,
  matteMaterial,
  metalMaterial,
} from "./primitives";
import type { SceneProps } from "./types";

export function HeritageTobaccoScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#ffe9c9" intensity={0.85} />
      <StudioFloor color="#090705" accent={theme.accent} />
      <Plinth accent={theme.accent} width={2.2} depth={1.7} height={0.2} />
      <Sway motion={motion} amplitude={0.015} speed={0.35} position={[0, 0.03, 0]}>
        <TurnGroup motion={motion} speed={0.06}>
          <RoundedBox args={[1.55, 0.62, 1.02]} radius={0.055} smoothness={4} position={[0, -0.44, 0]}>
            {matteMaterial("#3a2416", { roughness: 0.55, metalness: 0.08 })}
          </RoundedBox>
          <RoundedBox args={[1.52, 0.08, 0.98]} radius={0.035} smoothness={4} position={[0, -0.11, 0]}>
            {matteMaterial("#4b2f1b", { roughness: 0.5, metalness: 0.08 })}
          </RoundedBox>
          <mesh position={[0, -0.06, 0.02]} rotation={[-0.16, 0, 0]}>
            <boxGeometry args={[1.48, 0.035, 0.92]} />
            {matteMaterial("#5b3a21", { roughness: 0.52 })}
          </mesh>
          <mesh position={[0, -0.43, 0.52]}>
            <planeGeometry args={[0.76, 0.28]} />
            {matteMaterial("#d8c8ad", { roughness: 0.86 })}
          </mesh>
          <mesh position={[0, -0.37, 0.525]}>
            <planeGeometry args={[0.44, 0.012]} />
            <meshBasicMaterial color="#5a422b" />
          </mesh>
          {[-0.65, 0.65].map((x) =>
            [-0.42, 0.42].map((z) => (
              <mesh key={`${x}-${z}`} position={[x, -0.11, z]}>
                <boxGeometry args={[0.09, 0.09, 0.09]} />
                {metalMaterial(theme.accent, { roughness: 0.28, metalness: 0.84 })}
              </mesh>
            ))
          )}
        </TurnGroup>
      </Sway>
      <Dust color="#e0c198" count={40} opacity={0.22} />
    </group>
  );
}

export function CigarAtelierScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#ffe3bf" intensity={0.82} />
      <StudioFloor color="#080705" accent={theme.accent} />
      <group position={[0, 0.1, -1.35]}>
        <mesh>
          <boxGeometry args={[3.5, 3.2, 0.1]} />
          {matteMaterial("#100d09")}
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2.1, 1.3]} />
          <meshBasicMaterial color={theme.accent} transparent opacity={0.035} />
        </mesh>
      </group>
      <RoundPlinth accent={theme.accent} radius={1.12} />
      <Sway motion={motion} amplitude={0.015} speed={0.32} position={[0, 0.02, 0]}>
        <TurnGroup motion={motion} speed={0.06}>
          <mesh position={[0, -0.7, 0]}>
            <cylinderGeometry args={[0.82, 0.9, 0.12, 48]} />
            {metalMaterial("#4b3829", { roughness: 0.32, metalness: 0.72 })}
          </mesh>
          <mesh position={[0, -0.61, 0]}>
            <cylinderGeometry args={[0.54, 0.6, 0.04, 48]} />
            {metalMaterial("#15110e", { roughness: 0.6, metalness: 0.4 })}
          </mesh>
          <mesh position={[0, -0.36, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.11, 0.11, 1.15, 32]} />
            {matteMaterial("#4b2b18", { roughness: 0.72, metalness: 0.05 })}
          </mesh>
          <mesh position={[0.16, -0.36, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.112, 0.112, 0.12, 32]} />
            {metalMaterial(theme.accent, { roughness: 0.22, metalness: 0.8 })}
          </mesh>
          <mesh position={[0.34, -0.36, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.1, 0.1, 0.08, 32]} />
            {matteMaterial("#2d1810", { roughness: 0.8 })}
          </mesh>
          <mesh position={[0.75, -0.63, 0.28]} rotation={[0.2, 0.4, 0]}>
            <boxGeometry args={[0.38, 0.06, 0.24]} />
            {metalMaterial(theme.accent, { roughness: 0.24, metalness: 0.78 })}
          </mesh>
          <mesh position={[0.78, -0.56, 0.28]} rotation={[0.2, 0.4, 0]}>
            <boxGeometry args={[0.22, 0.08, 0.16]} />
            {matteMaterial("#181410", { roughness: 0.5, metalness: 0.3 })}
          </mesh>
        </TurnGroup>
      </Sway>
      <Dust color="#d8b27f" count={38} opacity={0.2} />
    </group>
  );
}

export function ModernTobaccoScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#eef5ef" intensity={0.9} />
      <StudioFloor color="#080a08" accent={theme.accent} />
      <group position={[0, 0.1, -1.45]}>
        {[-1.1, 0, 1.1].map((x) => (
          <mesh key={x} position={[x, 0, 0]}>
            <boxGeometry args={[0.025, 3, 0.04]} />
            {matteMaterial("#8f9a92", { transparent: true, opacity: 0.22 })}
          </mesh>
        ))}
      </group>
      <group position={[0, -1.18, 0]}>
        <mesh position={[0, 0.16, 0]}>
          <boxGeometry args={[2.2, 0.08, 1.2]} />
          {glassMaterial("#c2d0c8", { opacity: 0.26, transmission: 0.7 })}
        </mesh>
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[2.1, 0.12, 1.1]} />
          {metalMaterial("#242b27", { roughness: 0.3, metalness: 0.7 })}
        </mesh>
      </group>
      <Sway motion={motion} amplitude={0.018} speed={0.36} position={[0, 0.05, 0]}>
        <TurnGroup motion={motion} speed={0.07}>
          <RoundedBox args={[0.92, 1.25, 0.6]} radius={0.07} smoothness={4} position={[0, 0.1, 0]}>
            {metalMaterial("#b7c1ba", { roughness: 0.28, metalness: 0.86 })}
          </RoundedBox>
          <mesh position={[0, 0.42, 0.305]}>
            <planeGeometry args={[0.55, 0.32]} />
            {matteMaterial("#e9eee9", { roughness: 0.85 })}
          </mesh>
          <mesh position={[0, 0.42, 0.312]}>
            <planeGeometry args={[0.27, 0.012]} />
            <meshBasicMaterial color="#39463f" />
          </mesh>
          <mesh position={[0, 0.1, 0.31]}>
            <boxGeometry args={[0.92, 0.025, 0.015]} />
            <meshBasicMaterial color={theme.accent} />
          </mesh>
          <mesh position={[0, -0.42, 0.31]}>
            <planeGeometry args={[0.36, 0.012]} />
            <meshBasicMaterial color={theme.accentSoft} />
          </mesh>
        </TurnGroup>
      </Sway>
      <Dust color="#d5e2da" count={30} opacity={0.18} />
    </group>
  );
}
