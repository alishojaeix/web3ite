"use client";

import { RoundedBox } from "@react-three/drei";
import {
  Dust,
  NodeField,
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

export function NeuralStudioScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#e9edff" intensity={0.85} />
      <StudioFloor color="#07080d" accent={theme.accent} />
      <group position={[0, 0.15, -0.6]}>
        <TurnGroup motion={motion} speed={0.035}>
          {[-0.45, 0.05, 0.55].map((z, i) => (
            <mesh key={z} position={[0, 0, z]} rotation={[0, 0.08 * i, 0]}>
              <planeGeometry args={[3.2, 2.2]} />
              {glassMaterial(theme.accent, {
                opacity: 0.07,
                transmission: 0,
                side: 2,
                depthWrite: false,
              })}
            </mesh>
          ))}
        </TurnGroup>
        <NodeField accent={theme.accent} accentSoft={theme.accentSoft} motion={motion} />
        <mesh>
          <icosahedronGeometry args={[0.3, 2]} />
          {metalMaterial(theme.accent, {
            roughness: 0.12,
            metalness: 0.55,
            emissive: theme.accent,
            emissiveIntensity: 0.45,
          })}
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.78, 0.012, 8, 96]} />
          <meshBasicMaterial color={theme.accent} transparent opacity={0.5} />
        </mesh>
        <mesh rotation={[Math.PI / 2.4, 0.3, 0.2]}>
          <torusGeometry args={[1.1, 0.01, 8, 96]} />
          <meshBasicMaterial color={theme.accentSoft} transparent opacity={0.28} />
        </mesh>
      </group>
      <RoundPlinth accent={theme.accent} radius={1.3} />
      <Dust color="#bcc5ff" count={80} opacity={0.34} />
    </group>
  );
}

export function QuantumSystemsScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#f1f8ff" intensity={0.95} />
      <StudioFloor color="#07090a" accent={theme.accent} />
      <RoundPlinth accent={theme.accent} radius={1.18} />
      <Sway motion={motion} amplitude={0.035} speed={0.4} position={[0, 0.08, 0]}>
        <TurnGroup motion={motion} speed={0.1}>
          <mesh>
            <cylinderGeometry args={[0.35, 0.42, 1.45, 48]} />
            {metalMaterial("#87959d", { roughness: 0.18, metalness: 0.92 })}
          </mesh>
          <mesh position={[0, 0.62, 0]}>
            <cylinderGeometry args={[0.24, 0.34, 0.18, 48]} />
            {metalMaterial(theme.accent, { roughness: 0.2, metalness: 0.82 })}
          </mesh>
          <mesh position={[0, -0.52, 0]}>
            <cylinderGeometry args={[0.43, 0.36, 0.2, 48]} />
            {metalMaterial("#2b3338", { roughness: 0.34, metalness: 0.8 })}
          </mesh>
          {[
            [0.3, 0.2, 0.1],
            [0.8, 0.4, -0.2],
            [-0.4, 0.6, 0.4],
          ].map(([x, y, z], i) => (
            <mesh key={i} position={[x, y, z]} rotation={[0.4 * i, 0.6 * i, 0.2]}>
              <torusGeometry args={[0.85 + i * 0.22, 0.018, 10, 96]} />
              {metalMaterial(i === 1 ? theme.accent : "#c8d4da", {
                roughness: 0.14,
                metalness: 0.95,
              })}
            </mesh>
          ))}
          {[
            [1.2, 0.3, 0],
            [-1.15, -0.3, 0.2],
            [0.2, 1.15, -0.4],
          ].map(([x, y, z], i) => (
            <mesh key={i} position={[x, y, z]}>
              <sphereGeometry args={[0.055, 20, 20]} />
              <meshBasicMaterial color={theme.accent} />
            </mesh>
          ))}
        </TurnGroup>
      </Sway>
      <Dust color="#cfdde5" count={42} opacity={0.24} />
    </group>
  );
}

export function AIProductLaunchScene({ theme, motion }: SceneProps) {
  return (
    <group>
      <SceneLights accent={theme.accent} accentSoft={theme.accentSoft} keyColor="#fff0dc" intensity={0.95} />
      <StudioFloor color="#080706" accent={theme.accent} />
      <group position={[0, 0.2, -1.4]}>
        <mesh>
          <boxGeometry args={[4, 3.2, 0.08]} />
          {matteMaterial("#0d0c0a")}
        </mesh>
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[2.6, 1.8]} />
          <meshBasicMaterial color={theme.accent} transparent opacity={0.04} />
        </mesh>
      </group>
      <Plinth accent={theme.accent} width={1.65} depth={1.65} height={0.26} />
      <Sway motion={motion} amplitude={0.025} speed={0.38} position={[0, 0.04, 0]}>
        <TurnGroup motion={motion} speed={0.09}>
          <RoundedBox args={[1.12, 1.12, 1.12]} radius={0.09} smoothness={5}>
            {glassMaterial("#d9d2c6", {
              opacity: 0.32,
              transmission: 0.94,
              roughness: 0.03,
              ior: 1.52,
            })}
          </RoundedBox>
          <mesh>
            <icosahedronGeometry args={[0.31, 1]} />
            {metalMaterial(theme.accent, {
              roughness: 0.16,
              metalness: 0.7,
              emissive: theme.accent,
              emissiveIntensity: 0.5,
            })}
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.82, 0.012, 8, 96]} />
            <meshBasicMaterial color={theme.accent} transparent opacity={0.6} />
          </mesh>
          <mesh rotation={[Math.PI / 2.8, 0.4, 0]}>
            <torusGeometry args={[1.02, 0.008, 8, 96]} />
            <meshBasicMaterial color={theme.accentSoft} transparent opacity={0.4} />
          </mesh>
        </TurnGroup>
      </Sway>
      <Dust color="#f2cf9b" count={48} opacity={0.26} />
    </group>
  );
}
