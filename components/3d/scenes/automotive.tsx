"use client";

import { RoundedBox } from "@react-three/drei";
import {
  Dust,
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

export function ApexMarqueScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#ffe9da" intensity={1} />
      <StudioFloor color="#090706" accent={theme.accent} />
      <group position={[0, 0.1, -1.5]}>
        <mesh>
          <boxGeometry args={[4.8, 3.2, 0.08]} />
          {matteMaterial("#0c0a08")}
        </mesh>
      </group>
      <RoundPlinth accent={theme.accent} radius={1.65} y={-1.24} />
      <Sway motion={motion} amplitude={0.018} speed={0.36} position={[0, 0.1, 0]}>
        <TurnGroup motion={motion} speed={0.08}>
          <group position={[0, -0.1, 0]}>
            <RoundedBox args={[2.35, 0.38, 0.96]} radius={0.16} smoothness={5} position={[0, -0.1, 0]}>
              {metalMaterial("#ded7cb", { roughness: 0.16, metalness: 0.92 })}
            </RoundedBox>
            <RoundedBox args={[1.95, 0.24, 0.86]} radius={0.1} smoothness={4} position={[0, 0.11, 0]}>
              {metalMaterial("#b9b1a4", { roughness: 0.2, metalness: 0.88 })}
            </RoundedBox>
            <RoundedBox args={[1.08, 0.42, 0.76]} radius={0.14} smoothness={4} position={[-0.08, 0.4, 0]}>
              {glassMaterial("#1b2025", {
                opacity: 0.92,
                transmission: 0.08,
                roughness: 0.08,
                metalness: 0.42,
              })}
            </RoundedBox>
            <mesh position={[-0.08, 0.63, 0]}>
              <boxGeometry args={[0.9, 0.035, 0.62]} />
              {metalMaterial(theme.accent, {
                roughness: 0.22,
                metalness: 0.7,
                emissive: theme.accent,
                emissiveIntensity: 0.1,
              })}
            </mesh>
            <mesh position={[1.16, -0.02, 0]}>
              <boxGeometry args={[0.05, 0.1, 0.76]} />
              <meshBasicMaterial color={theme.accent} />
            </mesh>
            <mesh position={[-1.16, -0.02, 0]}>
              <boxGeometry args={[0.05, 0.08, 0.7]} />
              <meshBasicMaterial color="#b83b2b" />
            </mesh>
            {[
              [-0.74, 0.48],
              [-0.74, -0.48],
              [0.74, 0.48],
              [0.74, -0.48],
            ].map(([x, z], i) => (
              <group key={i} position={[x, -0.33, z]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                  <cylinderGeometry args={[0.26, 0.26, 0.16, 32]} />
                  {metalMaterial("#121315", { roughness: 0.72, metalness: 0.2 })}
                </mesh>
                <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, z > 0 ? 0.09 : -0.09]}>
                  <cylinderGeometry args={[0.16, 0.16, 0.02, 24]} />
                  {metalMaterial(theme.accent, { roughness: 0.2, metalness: 0.86 })}
                </mesh>
              </group>
            ))}
            <mesh position={[0, -0.03, 0.49]}>
              <boxGeometry args={[1.7, 0.07, 0.02]} />
              {metalMaterial("#2c2a26", { roughness: 0.4, metalness: 0.7 })}
            </mesh>
          </group>
        </TurnGroup>
      </Sway>
      <Dust color="#e4b28d" count={40} opacity={0.22} />
    </group>
  );
}

export function VelocityStudioScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#ffe0d5" intensity={0.95} />
      <StudioFloor color="#080707" accent={theme.accent} />
      <RoundPlinth accent={theme.accent} radius={1.3} />
      <Sway motion={motion} amplitude={0.03} speed={0.5} position={[0, 0.1, 0]}>
        <TurnGroup motion={motion} speed={0.12}>
          <mesh rotation={[0, 0, Math.PI / 2]} scale={[0.86, 1.25, 0.58]}>
            <capsuleGeometry args={[0.32, 1.9, 8, 32]} />
            {metalMaterial("#d5d0c9", { roughness: 0.14, metalness: 0.92 })}
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]} position={[0.1, 0.25, 0]} scale={[0.72, 0.8, 0.46]}>
            <capsuleGeometry args={[0.22, 0.95, 8, 24]} />
            {glassMaterial("#20252a", { opacity: 0.8, transmission: 0.16, metalness: 0.35 })}
          </mesh>
          {[-0.35, 0, 0.35].map((offset, i) => (
            <mesh key={offset} position={[0, 0, offset]} rotation={[0, i === 1 ? 0.3 : -0.2, 0]}>
              <torusGeometry args={[1.0 + i * 0.18, 0.018, 8, 64, Math.PI * 1.45]} />
              {metalMaterial(i === 1 ? theme.accent : "#b9b4ad", {
                roughness: 0.16,
                metalness: 0.95,
              })}
            </mesh>
          ))}
          <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.04, 0.04, 0.5, 12]} />
            <meshBasicMaterial color={theme.accent} />
          </mesh>
          <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.035, 0.035, 0.4, 12]} />
            <meshBasicMaterial color={theme.accent} transparent opacity={0.7} />
          </mesh>
        </TurnGroup>
      </Sway>
      <Dust color="#f0b2a8" count={50} opacity={0.26} />
    </group>
  );
}

export function ElectricMotionScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#e8fff7" intensity={0.9} />
      <StudioFloor color="#070a08" accent={theme.accent} />
      <group position={[0, 0.1, -1.2]}>
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[1.75, 0.035, 12, 96, Math.PI]} />
          {metalMaterial(theme.accent, { roughness: 0.28, metalness: 0.55 })}
        </mesh>
        <mesh position={[-1.75, -0.87, 0]}>
          <boxGeometry args={[0.07, 1.74, 0.08]} />
          {metalMaterial(theme.accentSoft, { roughness: 0.4, metalness: 0.4 })}
        </mesh>
        <mesh position={[1.75, -0.87, 0]}>
          <boxGeometry args={[0.07, 1.74, 0.08]} />
          {metalMaterial(theme.accentSoft, { roughness: 0.4, metalness: 0.4 })}
        </mesh>
      </group>
      <RoundPlinth accent={theme.accent} radius={1.5} />
      <Sway motion={motion} amplitude={0.025} speed={0.4} position={[0, 0.05, 0]}>
        <TurnGroup motion={motion} speed={0.07}>
          <mesh rotation={[0, 0, Math.PI / 2]} scale={[0.62, 1.05, 0.68]}>
            <capsuleGeometry args={[0.48, 1.65, 12, 48]} />
            {metalMaterial("#dfe9e3", { roughness: 0.18, metalness: 0.65 })}
          </mesh>
          <mesh position={[0.02, 0.44, 0]} scale={[0.8, 0.32, 0.6]}>
            <sphereGeometry args={[0.55, 48, 24]} />
            {glassMaterial("#183028", { opacity: 0.72, transmission: 0.2, metalness: 0.3 })}
          </mesh>
          <mesh position={[0, -0.37, 0]}>
            <boxGeometry args={[1.85, 0.14, 0.68]} />
            {metalMaterial("#303a35", { roughness: 0.4, metalness: 0.55 })}
          </mesh>
          {[-0.62, 0.62].map((x) => (
            <mesh key={x} position={[x, -0.43, 0.35]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 0.16, 24]} />
              {metalMaterial("#171b18", { roughness: 0.7 })}
            </mesh>
          ))}
          <mesh position={[1.0, 0.05, 0]}>
            <sphereGeometry args={[0.04, 12, 12]} />
            <meshBasicMaterial color={theme.accent} />
          </mesh>
        </TurnGroup>
      </Sway>
      <Dust color="#c3e4d6" count={42} opacity={0.24} />
    </group>
  );
}
