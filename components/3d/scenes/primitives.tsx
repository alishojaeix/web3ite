"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function metalMaterial(
  color: string,
  options: Partial<THREE.MeshPhysicalMaterialParameters> = {}
) {
  return (
    <meshPhysicalMaterial
      color={color}
      metalness={0.78}
      roughness={0.22}
      clearcoat={0.45}
      clearcoatRoughness={0.18}
      envMapIntensity={1.1}
      {...options}
    />
  );
}

export function ceramicMaterial(
  color: string,
  options: Partial<THREE.MeshPhysicalMaterialParameters> = {}
) {
  return (
    <meshPhysicalMaterial
      color={color}
      metalness={0.04}
      roughness={0.32}
      clearcoat={0.3}
      clearcoatRoughness={0.28}
      {...options}
    />
  );
}

export function glassMaterial(
  color: string,
  options: Partial<THREE.MeshPhysicalMaterialParameters> = {}
) {
  return (
    <meshPhysicalMaterial
      color={color}
      metalness={0}
      roughness={0.08}
      transmission={0.88}
      thickness={0.65}
      ior={1.48}
      transparent
      opacity={0.55}
      {...options}
    />
  );
}

export function matteMaterial(
  color: string,
  options: Partial<THREE.MeshStandardMaterialParameters> = {}
) {
  return <meshStandardMaterial color={color} roughness={0.78} metalness={0.08} {...options} />;
}

export function SceneLights({
  accent,
  accentSoft,
  keyColor = "#fff1dd",
  intensity = 1,
}: {
  accent: string;
  accentSoft: string;
  keyColor?: string;
  intensity?: number;
}) {
  return (
    <>
      <ambientLight intensity={0.16 * intensity} color={accentSoft} />
      <directionalLight
        position={[4.5, 6, 3.5]}
        intensity={2.1 * intensity}
        color={keyColor}
      />
      <directionalLight
        position={[-4, 2, -1]}
        intensity={0.65 * intensity}
        color={accent}
      />
      <spotLight
        position={[-1.8, 3.8, 2.2]}
        intensity={22 * intensity}
        angle={0.55}
        penumbra={1}
        distance={12}
        color={accent}
      />
      <pointLight position={[0, -0.8, 1.4]} intensity={2.2 * intensity} color={accentSoft} />
    </>
  );
}

export function StudioFloor({
  color = "#080808",
  y = -1.22,
  size = 14,
  accent,
}: {
  color?: string;
  y?: number;
  size?: number;
  accent?: string;
}) {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, y, 0]} receiveShadow>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial color={color} roughness={0.38} metalness={0.35} />
      </mesh>
      {accent ? (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, y + 0.004, 0]}>
          <ringGeometry args={[1.35, 1.38, 96]} />
          <meshBasicMaterial color={accent} transparent opacity={0.2} side={THREE.DoubleSide} />
        </mesh>
      ) : null}
    </group>
  );
}

export function RoundPlinth({
  accent,
  radius = 0.9,
  y = -1.18,
}: {
  accent: string;
  radius?: number;
  y?: number;
}) {
  return (
    <group position={[0, y, 0]}>
      <mesh position={[0, 0.04, 0]} receiveShadow>
        <cylinderGeometry args={[radius, radius * 1.06, 0.12, 64]} />
        {metalMaterial("#171615", { roughness: 0.42, metalness: 0.5 })}
      </mesh>
      <mesh position={[0, 0.115, 0]}>
        <cylinderGeometry args={[radius * 0.88, radius * 0.92, 0.04, 64]} />
        {metalMaterial(accent, { roughness: 0.3, metalness: 0.72 })}
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}>
        <ringGeometry args={[radius * 1.02, radius * 1.04, 96]} />
        <meshBasicMaterial color={accent} transparent opacity={0.24} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export function Plinth({
  accent,
  width = 1.7,
  depth = 1.7,
  height = 0.18,
}: {
  accent: string;
  width?: number;
  depth?: number;
  height?: number;
}) {
  return (
    <group position={[0, -1.18, 0]}>
      <mesh position={[0, height / 2, 0]} receiveShadow>
        <boxGeometry args={[width, height, depth]} />
        {metalMaterial("#151514", { roughness: 0.46, metalness: 0.42 })}
      </mesh>
      <mesh position={[0, height + 0.008, 0]}>
        <boxGeometry args={[width * 0.94, 0.012, depth * 0.94]} />
        <meshBasicMaterial color={accent} transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export function ArchBackdrop({
  accent,
  color = "#101010",
  position = [0, 0.2, -1.45],
}: {
  accent: string;
  color?: string;
  position?: [number, number, number];
}) {
  return (
    <group position={position}>
      <mesh>
        <torusGeometry args={[2.15, 0.022, 10, 100, Math.PI]} />
        <meshBasicMaterial color={accent} transparent opacity={0.28} />
      </mesh>
      <mesh position={[0, -1.08, -0.04]}>
        <boxGeometry args={[4.3, 2.14, 0.05]} />
        {matteMaterial(color, { transparent: true, opacity: 0.5 })}
      </mesh>
      <mesh position={[-2.15, -0.54, -0.04]}>
        <boxGeometry args={[0.03, 1.1, 0.05]} />
        <meshBasicMaterial color={accent} transparent opacity={0.16} />
      </mesh>
      <mesh position={[2.15, -0.54, -0.04]}>
        <boxGeometry args={[0.03, 1.1, 0.05]} />
        <meshBasicMaterial color={accent} transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

export function TurnGroup({
  children,
  motion,
  speed = 0.14,
  axis = "y",
  position = [0, 0, 0],
}: {
  children: React.ReactNode;
  motion: boolean;
  speed?: number;
  axis?: "x" | "y" | "z";
  position?: [number, number, number];
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current || !motion) return;
    const step = delta * speed;
    ref.current.rotation[axis] += step;
  });
  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

export function Sway({
  children,
  motion,
  amplitude = 0.04,
  speed = 0.7,
  position = [0, 0, 0],
}: {
  children: React.ReactNode;
  motion: boolean;
  amplitude?: number;
  speed?: number;
  position?: [number, number, number];
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    if (!motion) {
      ref.current.position.y = position[1];
      return;
    }
    ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * speed) * amplitude;
  });
  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

export function Dust({
  count = 70,
  color = "#d9c7ad",
  spread = 7,
  opacity = 0.35,
}: {
  count?: number;
  color?: string;
  spread?: number;
  opacity?: number;
}) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 1] = Math.random() * 4.2 - 1;
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread - 0.8;
    }
    return arr;
  }, [count, spread]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.018}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </points>
  );
}

export function EmberField({
  accent,
  count = 22,
  motion,
}: {
  accent: string;
  count?: number;
  motion: boolean;
}) {
  const ref = useRef<THREE.Group>(null);
  const embers = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        x: (Math.random() - 0.5) * 1.6,
        y: Math.random() * 1.4 - 0.4,
        z: (Math.random() - 0.5) * 0.8,
        size: 0.012 + Math.random() * 0.022,
        phase: i * 0.61,
      })),
    [count]
  );

  useFrame(({ clock }) => {
    if (!ref.current || !motion) return;
    const t = clock.elapsedTime;
    ref.current.children.forEach((child, i) => {
      const ember = embers[i];
      child.position.y = ember.y + ((t * 0.16 + ember.phase) % 1.8) - 0.2;
      child.position.x = ember.x + Math.sin(t * 0.4 + ember.phase) * 0.12;
    });
  });

  return (
    <group ref={ref}>
      {embers.map((ember, i) => (
        <mesh key={i} position={[ember.x, ember.y, ember.z]}>
          <sphereGeometry args={[ember.size, 8, 8]} />
          <meshBasicMaterial color={accent} transparent opacity={0.75 - (i % 4) * 0.12} />
        </mesh>
      ))}
    </group>
  );
}

export function Steam({
  color = "#efe8dc",
  motion,
  position = [0, 0.6, 0],
}: {
  color?: string;
  motion: boolean;
  position?: [number, number, number];
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.children.forEach((child, i) => {
      child.position.y = i * 0.3 + (motion ? Math.sin(t * 1.1 + i) * 0.08 : 0);
      child.rotation.z = motion ? Math.sin(t * 0.7 + i) * 0.18 : 0;
    });
  });
  return (
    <group ref={ref} position={position}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, i * 0.3, 0]}>
          <sphereGeometry args={[0.065 - i * 0.009, 16, 16]} />
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.16 - i * 0.025}
            roughness={1}
            metalness={0}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export function NodeField({
  accent,
  accentSoft,
  motion,
}: {
  accent: string;
  accentSoft: string;
  motion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const { nodes, linePositions } = useMemo(() => {
    const layers = [
      [-1.15, -0.15, 0.35],
      [-0.15, 0.55, -0.15],
      [0.85, -0.35, 0.2],
    ];
    const points: THREE.Vector3[] = [];
    layers.forEach(([x, y, z], layer) => {
      const count = 5 - Math.abs(layer - 1);
      for (let i = 0; i < count; i++) {
        points.push(
          new THREE.Vector3(
            x + (Math.random() - 0.5) * 0.5,
            y + (i - (count - 1) / 2) * 0.38,
            z + (Math.random() - 0.5) * 0.55
          )
        );
      }
    });
    const positions: number[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 0.95) {
          positions.push(points[i].x, points[i].y, points[i].z, points[j].x, points[j].y, points[j].z);
        }
      }
    }
    return { nodes: points, linePositions: new Float32Array(positions) };
  }, []);

  useFrame(({ clock }) => {
    if (!group.current || !motion) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.2) * 0.12;
    group.current.rotation.x = Math.cos(clock.elapsedTime * 0.15) * 0.04;
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={accent} transparent opacity={0.26} />
      </lineSegments>
      {nodes.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[i % 5 === 0 ? 0.085 : 0.05, 16, 16]} />
          <meshBasicMaterial color={i % 5 === 0 ? accent : accentSoft} />
        </mesh>
      ))}
    </group>
  );
}
