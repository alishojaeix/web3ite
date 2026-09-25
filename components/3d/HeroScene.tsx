"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { Scene } from "./Scene";
import { Sculpture } from "./sculptures";

function PointerRig() {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0.2, 0));
  useFrame(() => {
    const x = pointer.x * 0.85;
    const y = pointer.y * 0.45;
    camera.position.x += (x * 1.4 - camera.position.x) * 0.045;
    camera.position.y += (0.45 + y * 0.6 - camera.position.y) * 0.045;
    camera.lookAt(target.current);
  });
  return null;
}

function Dust({ count = 140 }: { count?: number }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = Math.random() * 6 - 1.2;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 1;
    }
    return arr;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#c9d6e4" size={0.018} sizeAttenuation transparent opacity={0.45} />
    </points>
  );
}

function FloorRing() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.42, 0]}>
      <ringGeometry args={[1.55, 1.62, 80]} />
      <meshBasicMaterial color="#7ee0ff" transparent opacity={0.22} />
    </mesh>
  );
}

function HeroWorld() {
  return (
    <group>
      <Float speed={1.15} rotationIntensity={0.18} floatIntensity={0.35}>
        <group position={[0.35, 0.1, 0]}>
          <Sculpture kind="rings" accent="#7EE0FF" />
        </group>
      </Float>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.55}>
        <group position={[-2.4, 0.85, -1.2]} scale={0.42}>
          <Sculpture kind="crystal" accent="#C8F27A" />
        </group>
      </Float>
      <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.4}>
        <group position={[2.6, -0.15, -0.8]} scale={0.48}>
          <Sculpture kind="hull" accent="#FF5A36" />
        </group>
      </Float>
      <Float speed={0.9} rotationIntensity={0.15} floatIntensity={0.25}>
        <group position={[1.9, 1.15, -2.1]} scale={0.32}>
          <Sculpture kind="knot" accent="#C4B5FD" />
        </group>
      </Float>
      <FloorRing />
      <Dust />
      <PointerRig />
    </group>
  );
}

export function HeroScene({ className }: { className?: string }) {
  return (
    <div className={className ?? "absolute inset-0"}>
      <Scene
        className="h-full w-full"
        camera={{ position: [0, 0.5, 5.2], fov: 42 }}
        shadows
        environment
      >
        <HeroWorld />
      </Scene>
    </div>
  );
}
