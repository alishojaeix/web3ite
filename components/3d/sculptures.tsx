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
    case "cup":
      return <Cup accent={accent} hovered={hovered} />;
    case "plate":
      return <Plate accent={accent} hovered={hovered} />;
    case "chip":
      return <Chip accent={accent} hovered={hovered} />;
    case "shield":
      return <Shield accent={accent} hovered={hovered} />;
    case "car":
      return <Car accent={accent} hovered={hovered} />;
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

function Cup({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.35 : 0.12);
  return (
    <group ref={ref}>
      {/* saucer */}
      <mesh position={[0, -0.78, 0]}>
        <cylinderGeometry args={[0.92, 0.98, 0.08, 48]} />
        {metal("#e6e0d6", { roughness: 0.3, metalness: 0.25 })}
      </mesh>
      {/* cup body */}
      <mesh position={[0, -0.28, 0]}>
        <cylinderGeometry args={[0.56, 0.46, 0.66, 48]} />
        {metal("#f2ece2", { roughness: 0.24, metalness: 0.15 })}
      </mesh>
      {/* espresso surface */}
      <mesh position={[0, 0.07, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.04, 48]} />
        {metal(accent, { roughness: 0.42, metalness: 0.1, emissive: accent, emissiveIntensity: 0.1 })}
      </mesh>
      {/* handle */}
      <mesh position={[0.68, -0.26, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.22, 0.055, 16, 32]} />
        {metal("#f2ece2", { roughness: 0.24, metalness: 0.15 })}
      </mesh>
      {/* steam */}
      <Steam />
    </group>
  );
}

function Steam() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.children.forEach((child, i) => {
      child.position.y = 0.55 + i * 0.34 + Math.sin(t * 1.4 + i * 1.1) * 0.09;
      child.rotation.z = Math.sin(t * 0.9 + i) * 0.22;
    });
  });
  return (
    <group ref={ref}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 0.55 + i * 0.34, 0]}>
          <sphereGeometry args={[0.055 - i * 0.008, 16, 16]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transparent
            opacity={0.16 - i * 0.035}
            roughness={1}
            metalness={0}
          />
        </mesh>
      ))}
    </group>
  );
}

function Plate({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.3 : 0.1);
  return (
    <group ref={ref}>
      {/* dinner plate */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[1.0, 1.12, 0.08, 64]} />
        {metal("#f6f1ea", { roughness: 0.16, metalness: 0.08 })}
      </mesh>
      {/* cloche dome */}
      <mesh position={[0, 0.02, 0]} scale={[1, 0.6, 1]}>
        <sphereGeometry args={[0.8, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
        {metal("#ece7df", { roughness: 0.2, metalness: 0.75 })}
      </mesh>
      {/* finial knob */}
      <mesh position={[0, 0.56, 0]}>
        <sphereGeometry args={[0.09, 24, 24]} />
        {metal(accent, { roughness: 0.28, emissive: accent, emissiveIntensity: 0.12 })}
      </mesh>
    </group>
  );
}

function Chip({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.34 : 0.12);
  const pins = useMemo(() => {
    const out: { pos: [number, number, number]; rot: [number, number, number] }[] = [];
    [-0.42, -0.14, 0.14, 0.42].forEach((a) => {
      // pins along the Z-facing edges
      out.push({ pos: [a, -0.4, 0.4], rot: [0, 0, 0] });
      out.push({ pos: [a, -0.4, -0.4], rot: [0, 0, 0] });
      // pins along the X-facing edges
      out.push({ pos: [0.4, -0.4, a], rot: [0, Math.PI / 2, 0] });
      out.push({ pos: [-0.4, -0.4, a], rot: [0, Math.PI / 2, 0] });
    });
    return out;
  }, []);

  return (
    <group ref={ref}>
      {/* board */}
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[1.3, 0.1, 1.3]} />
        {metal("#151a20", { roughness: 0.5, metalness: 0.3 })}
      </mesh>
      {/* pins */}
      {pins.map((pin, i) => (
        <mesh key={i} position={pin.pos} rotation={pin.rot}>
          <boxGeometry args={[0.08, 0.06, 0.18]} />
          {metal("#d8d2c6", { roughness: 0.3, metalness: 0.6 })}
        </mesh>
      ))}
      {/* die */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[0.62, 0.2, 0.62]} />
        {metal("#242a32", { roughness: 0.28, metalness: 0.5 })}
      </mesh>
      {/* glowing core */}
      <mesh position={[0, -0.26, 0]}>
        <boxGeometry args={[0.3, 0.05, 0.3]} />
        {metal(accent, {
          roughness: 0.25,
          emissive: accent,
          emissiveIntensity: 0.65,
        })}
      </mesh>
    </group>
  );
}

function Shield({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.26 : 0.09);
  return (
    <group ref={ref}>
      {/* accent border */}
      <mesh position={[0, 0, -0.07]} scale={[0.88, 1.1, 0.24]}>
        <octahedronGeometry args={[1, 0]} />
        {metal(accent, { roughness: 0.3, metalness: 0.6, emissive: accent, emissiveIntensity: 0.08 })}
      </mesh>
      {/* shield face */}
      <mesh position={[0, 0, 0]} scale={[0.8, 1.0, 0.18]}>
        <octahedronGeometry args={[1, 0]} />
        {metal("#ece7df", { roughness: 0.18, metalness: 0.5 })}
      </mesh>
      {/* shackle */}
      <mesh position={[0, 0.2, 0.11]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.12, 0.035, 16, 32]} />
        {metal(accent, { roughness: 0.24 })}
      </mesh>
      {/* lock body */}
      <mesh position={[0, -0.02, 0.13]}>
        <boxGeometry args={[0.3, 0.26, 0.12]} />
        {metal(accent, { roughness: 0.24 })}
      </mesh>
    </group>
  );
}

function Car({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.38 : 0.13);
  const wheels: [number, number][] = [
    [-0.62, -0.5],
    [0.62, -0.5],
    [-0.62, 0.5],
    [0.62, 0.5],
  ];
  return (
    <group ref={ref}>
      {/* body */}
      <mesh position={[0, -0.12, 0]}>
        <boxGeometry args={[1.9, 0.4, 0.82]} />
        {metal("#ece7df", { roughness: 0.2, metalness: 0.85 })}
      </mesh>
      {/* cabin */}
      <mesh position={[-0.05, 0.16, 0]} rotation={[0, 0, -0.05]}>
        <boxGeometry args={[1.0, 0.34, 0.7]} />
        {metal("#1b1e24", { roughness: 0.1, metalness: 0.55, transmission: 0.15, transparent: true, opacity: 0.92 })}
      </mesh>
      {/* roof spine */}
      <mesh position={[-0.05, 0.34, 0]} rotation={[0, 0, -0.05]}>
        <boxGeometry args={[0.92, 0.05, 0.6]} />
        {metal(accent, { roughness: 0.22, emissive: accent, emissiveIntensity: 0.08 })}
      </mesh>
      {/* head and tail lights */}
      <mesh position={[0.92, -0.06, 0.26]}>
        <boxGeometry args={[0.07, 0.13, 0.1]} />
        {metal(accent, { roughness: 0.2, emissive: accent, emissiveIntensity: 0.8 })}
      </mesh>
      <mesh position={[0.92, -0.06, -0.26]}>
        <boxGeometry args={[0.07, 0.13, 0.1]} />
        {metal(accent, { roughness: 0.2, emissive: accent, emissiveIntensity: 0.8 })}
      </mesh>
      <mesh position={[-0.92, -0.06, 0.26]}>
        <boxGeometry args={[0.07, 0.13, 0.1]} />
        {metal("#c34a38", { roughness: 0.25, emissive: "#c34a38", emissiveIntensity: 0.5 })}
      </mesh>
      <mesh position={[-0.92, -0.06, -0.26]}>
        <boxGeometry args={[0.07, 0.13, 0.1]} />
        {metal("#c34a38", { roughness: 0.25, emissive: "#c34a38", emissiveIntensity: 0.5 })}
      </mesh>
      {/* wheels */}
      {wheels.map(([x, z], i) => (
        <group key={i} position={[x, -0.4, z]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.24, 0.24, 0.18, 24]} />
            {metal("#14171c", { roughness: 0.6, metalness: 0.2 })}
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <cylinderGeometry args={[0.13, 0.13, 0.2, 16]} />
            {metal(accent, { roughness: 0.24, metalness: 0.7 })}
          </mesh>
        </group>
      ))}
    </group>
  );
}
