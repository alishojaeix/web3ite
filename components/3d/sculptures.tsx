"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { SculptureKind } from "@/types/template";

type SculptureProps = {
  kind: SculptureKind;
  accent: string;
  hovered?: boolean;
};

export function Sculpture({ kind, accent, hovered = false }: SculptureProps) {
  switch (kind) {
    case "rings":
      return <Rings accent={accent} hovered={hovered} />;
    case "frames":
      return <Frames accent={accent} hovered={hovered} />;
    case "capsule":
      return <Capsule accent={accent} hovered={hovered} />;
    case "plinth":
      return <Plinth accent={accent} hovered={hovered} />;
    case "drape":
      return <Drape accent={accent} hovered={hovered} />;
    case "crystal":
      return <Crystal accent={accent} hovered={hovered} />;
    case "lattice":
      return <Lattice accent={accent} hovered={hovered} />;
    case "hull":
      return <Hull accent={accent} hovered={hovered} />;
    case "knot":
      return <Knot accent={accent} hovered={hovered} />;
    case "orb":
      return <Orb accent={accent} hovered={hovered} />;
    case "column":
      return <Column accent={accent} hovered={hovered} />;
    case "shard":
      return <Shard accent={accent} hovered={hovered} />;
    default:
      return <Orb accent={accent} hovered={hovered} />;
  }
}

function useSpin(speed = 0.18) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
  });
  return ref;
}

function metal(color: string, extra?: Partial<THREE.MeshPhysicalMaterialParameters>) {
  return (
    <meshPhysicalMaterial
      color={color}
      metalness={0.72}
      roughness={0.22}
      clearcoat={0.55}
      clearcoatRoughness={0.18}
      envMapIntensity={1.2}
      {...extra}
    />
  );
}

function Rings({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.45 : 0.16);
  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[0.55, 1]} />
        {metal(accent, { emissive: accent, emissiveIntensity: 0.18 })}
      </mesh>
      {[1.05, 1.45, 1.85].map((r, i) => (
        <mesh key={r} rotation={[Math.PI / 2.4, 0.2 * i, 0.4 * i]}>
          <torusGeometry args={[r, 0.035, 12, 64]} />
          {metal("#d7dde6", { metalness: 0.9, roughness: 0.12 })}
        </mesh>
      ))}
    </group>
  );
}

function Frames({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.32 : 0.1);
  return (
    <group ref={ref}>
      {[-0.55, 0, 0.55].map((x, i) => (
        <mesh key={x} position={[x, i * 0.08, i * 0.12]} rotation={[0.15 * i, 0.4, 0.08]}>
          <boxGeometry args={[0.85, 1.15, 0.06]} />
          {metal(i === 1 ? accent : "#c9c3b8", { roughness: 0.28 })}
        </mesh>
      ))}
    </group>
  );
}

function Capsule({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.5 : 0.2);
  return (
    <group ref={ref} rotation={[0.4, 0.2, 0]}>
      <mesh>
        <capsuleGeometry args={[0.38, 1.15, 8, 24]} />
        {metal(accent, { roughness: 0.16, metalness: 0.85 })}
      </mesh>
      <mesh position={[0, 0, 0.42]}>
        <cylinderGeometry args={[0.42, 0.42, 0.06, 32]} />
        {metal("#e8e4dc")}
      </mesh>
    </group>
  );
}

function Plinth({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.22 : 0.08);
  return (
    <group ref={ref}>
      <mesh position={[0, -0.7, 0]}>
        <boxGeometry args={[1.4, 0.18, 1.4]} />
        {metal("#8a8478", { roughness: 0.45, metalness: 0.4 })}
      </mesh>
      <mesh position={[0, -0.35, 0]}>
        <boxGeometry args={[0.95, 0.55, 0.95]} />
        {metal("#b7b0a4", { roughness: 0.38 })}
      </mesh>
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[0.7, 0.9, 0.55]} />
        {metal(accent, { roughness: 0.32 })}
      </mesh>
    </group>
  );
}

function Drape({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.28 : 0.09);
  return (
    <group ref={ref}>
      <mesh rotation={[0.15, 0.4, 0.2]} scale={[1.1, 1.6, 0.35]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        {metal(accent, { roughness: 0.55, metalness: 0.15, sheen: 1, sheenColor: accent })}
      </mesh>
      <mesh position={[0, -0.85, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 0.4, 16]} />
        {metal("#d8cfc4")}
      </mesh>
    </group>
  );
}

function Crystal({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.55 : 0.2);
  return (
    <group ref={ref}>
      <mesh rotation={[0.4, 0.2, 0.15]}>
        <octahedronGeometry args={[1.05, 0]} />
        {metal(accent, {
          roughness: 0.08,
          metalness: 0.2,
          transmission: 0.55,
          thickness: 1.2,
          ior: 1.5,
          transparent: true,
          opacity: 0.92,
          emissive: accent,
          emissiveIntensity: 0.12,
        })}
      </mesh>
    </group>
  );
}

function Lattice({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.35 : 0.12);
  const positions = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          pts.push([x * 0.55, y * 0.55, z * 0.55]);
        }
      }
    }
    return pts;
  }, []);
  return (
    <group ref={ref}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.18, 0.18, 0.18]} />
          {metal(i % 4 === 0 ? accent : "#cfd6de", { roughness: 0.2 })}
        </mesh>
      ))}
    </group>
  );
}

function Hull({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.4 : 0.14);
  return (
    <group ref={ref} rotation={[0.15, 0.6, 0]}>
      <mesh rotation={[0, 0, Math.PI / 2]} scale={[0.45, 1.7, 0.45]}>
        <sphereGeometry args={[0.7, 24, 16]} />
        {metal(accent, { roughness: 0.18, metalness: 0.88 })}
      </mesh>
      <mesh position={[0.9, 0, 0]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.7, 0.08, 0.45]} />
        {metal("#e6e6e6", { metalness: 0.95, roughness: 0.1 })}
      </mesh>
    </group>
  );
}

function Knot({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.48 : 0.18);
  return (
    <group ref={ref}>
      <mesh>
        <torusKnotGeometry args={[0.62, 0.18, 128, 16]} />
        {metal(accent, { roughness: 0.14, metalness: 0.7, emissive: accent, emissiveIntensity: 0.1 })}
      </mesh>
    </group>
  );
}

function Orb({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.4 : 0.15);
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.78, 48, 48]} />
        {metal(accent, { roughness: 0.12, metalness: 0.65, emissive: accent, emissiveIntensity: 0.16 })}
      </mesh>
      <mesh>
        <sphereGeometry args={[0.92, 32, 32]} />
        <meshPhysicalMaterial
          color={accent}
          transparent
          opacity={0.12}
          roughness={0.1}
          metalness={0}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

function Column({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.2 : 0.07);
  return (
    <group ref={ref}>
      <mesh position={[0, -0.85, 0]}>
        <cylinderGeometry args={[0.55, 0.62, 0.18, 24]} />
        {metal("#cfc8bc")}
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.32, 0.38, 1.5, 20]} />
        {metal(accent, { roughness: 0.4, metalness: 0.35 })}
      </mesh>
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.5, 0.42, 0.16, 24]} />
        {metal("#cfc8bc")}
      </mesh>
    </group>
  );
}

function Shard({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.5 : 0.16);
  return (
    <group ref={ref} rotation={[0.3, 0.2, 0.5]}>
      <mesh>
        <coneGeometry args={[0.55, 1.7, 5]} />
        {metal(accent, { roughness: 0.2, metalness: 0.75 })}
      </mesh>
      <mesh position={[0.35, -0.2, 0.1]} rotation={[0.4, 0.6, 0.2]}>
        <coneGeometry args={[0.28, 1.1, 4]} />
        {metal("#dfe4ea", { roughness: 0.16 })}
      </mesh>
    </group>
  );
}
