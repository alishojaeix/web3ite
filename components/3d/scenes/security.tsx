"use client";

import { RoundedBox } from "@react-three/drei";
import {
  Dust,
  EmberField,
  RoundPlinth,
  SceneLights,
  StudioFloor,
  Sway,
  TurnGroup,
  matteMaterial,
  metalMaterial,
} from "./primitives";
import type { SceneProps } from "./types";

export function VaultlineScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#f0e8ff" intensity={0.85} />
      <StudioFloor color="#08070d" accent={theme.accent} />
      <group position={[0, 0.2, -1.35]}>
        <mesh>
          <boxGeometry args={[3.5, 3.5, 0.25]} />
          {matteMaterial("#0d0b12", { roughness: 0.48, metalness: 0.25 })}
        </mesh>
        <mesh position={[0, 0, 0.15]}>
          <ringGeometry args={[1.35, 1.37, 96]} />
          <meshBasicMaterial color={theme.accent} transparent opacity={0.2} />
        </mesh>
      </group>
      <RoundPlinth accent={theme.accent} radius={1.1} />
      <TurnGroup motion={motion} speed={0.06} position={[0, 0.05, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.02, 1.02, 0.42, 64]} />
          {metalMaterial("#3c3649", { roughness: 0.28, metalness: 0.86 })}
        </mesh>
        <mesh position={[0, 0, 0.23]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.78, 0.78, 0.05, 64]} />
          {metalMaterial("#16141d", { roughness: 0.36, metalness: 0.7 })}
        </mesh>
        {[0.62, 0.88].map((radius) => (
          <mesh key={radius} position={[0, 0, 0.27]}>
            <torusGeometry args={[radius, 0.024, 12, 96]} />
            {metalMaterial(theme.accent, { roughness: 0.2, metalness: 0.8 })}
          </mesh>
        ))}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 0.62, Math.sin(angle) * 0.62, 0.28]}
              rotation={[0, 0, angle]}
            >
              <cylinderGeometry args={[0.045, 0.045, 0.05, 12]} />
              {metalMaterial("#b6a8cc", { roughness: 0.22, metalness: 0.9 })}
            </mesh>
          );
        })}
        <mesh position={[0, 0, 0.34]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.27, 0.27, 0.06, 48]} />
          {metalMaterial(theme.accent, { roughness: 0.2, metalness: 0.7 })}
        </mesh>
        <mesh position={[0, 0, 0.38]}>
          <torusGeometry args={[0.15, 0.02, 10, 40]} />
          <meshBasicMaterial color={theme.accent} />
        </mesh>
      </TurnGroup>
      <Dust color="#cabbea" count={55} opacity={0.28} />
    </group>
  );
}

export function OnchainStudioScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#eef5e9" intensity={0.85} />
      <StudioFloor color="#070906" accent={theme.accent} />
      <gridHelper args={[12, 28, "#1b2a1c", "#111a12"]} position={[0, -1.21, 0]} />
      <RoundPlinth accent={theme.accent} radius={1.3} />
      <TurnGroup motion={motion} speed={0.07} position={[0, 0.15, 0]}>
        {[
          [-0.58, -0.52, 0],
          [0.58, -0.52, 0.08],
          [-0.58, 0.48, 0.05],
          [0.58, 0.48, -0.06],
          [0, 0, 0.25],
        ].map(([x, y, z], i) => (
          <group key={i} position={[x, y, z]}>
            <RoundedBox args={[0.66, 0.66, 0.66]} radius={0.08} smoothness={4}>
              {matteMaterial(i === 4 ? "#1d2a1c" : "#141a13", {
                roughness: 0.34,
                metalness: 0.55,
              })}
            </RoundedBox>
            <mesh position={[0, 0, 0.34]}>
              <planeGeometry args={[0.28, 0.03]} />
              <meshBasicMaterial color={i === 4 ? theme.accent : theme.accentSoft} />
            </mesh>
            {i < 4 ? (
              <mesh position={[x > 0 ? -0.33 : 0.33, y > 0 ? -0.33 : 0.33, 0]}>
                <boxGeometry args={[0.42, 0.035, 0.035]} />
                {metalMaterial(theme.accentSoft, { roughness: 0.28, metalness: 0.72 })}
              </mesh>
            ) : null}
          </group>
        ))}
        <mesh position={[0, 0, 0.72]}>
          <torusGeometry args={[1.02, 0.01, 8, 96]} />
          <meshBasicMaterial color={theme.accent} transparent opacity={0.38} />
        </mesh>
      </TurnGroup>
      <Dust color="#bdd0b7" count={44} opacity={0.24} />
    </group>
  );
}

export function CyberDefenseScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#ffe4d3" intensity={0.9} />
      <StudioFloor color="#0a0706" accent={theme.accent} />
      <group position={[0, 0.15, -0.8]}>
        <Sway motion={motion} amplitude={0.035} speed={0.5}>
          <mesh scale={[0.92, 1.12, 0.3]}>
            <octahedronGeometry args={[1, 0]} />
            {metalMaterial(theme.accent, {
              roughness: 0.22,
              metalness: 0.6,
              transparent: true,
              opacity: 0.86,
              emissive: theme.accent,
              emissiveIntensity: 0.08,
            })}
          </mesh>
          <mesh scale={[0.78, 0.97, 0.22]}>
            <octahedronGeometry args={[1, 0]} />
            {metalMaterial("#eee3d9", { roughness: 0.18, metalness: 0.62 })}
          </mesh>
          <mesh position={[0, 0, 0.3]}>
            <icosahedronGeometry args={[0.19, 1]} />
            <meshBasicMaterial color={theme.accent} />
          </mesh>
        </Sway>
        <TurnGroup motion={motion} speed={0.18}>
          <mesh rotation={[Math.PI / 2.1, 0, 0]}>
            <torusGeometry args={[1.35, 0.012, 8, 96]} />
            <meshBasicMaterial color={theme.accent} transparent opacity={0.42} />
          </mesh>
          <mesh rotation={[Math.PI / 2.4, 0.5, 0]}>
            <torusGeometry args={[1.62, 0.008, 8, 96]} />
            <meshBasicMaterial color={theme.accentSoft} transparent opacity={0.3} />
          </mesh>
        </TurnGroup>
      </group>
      <RoundPlinth accent={theme.accent} radius={1.25} />
      <EmberField accent={theme.accent} count={18} motion={motion} />
      <Dust color="#e6b399" count={50} opacity={0.3} />
    </group>
  );
}
