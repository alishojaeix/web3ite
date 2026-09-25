"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

type SceneProps = {
  children: React.ReactNode;
  className?: string;
  camera?: { position?: [number, number, number]; fov?: number };
  dpr?: [number, number];
  shadows?: boolean;
  environment?: boolean;
  frameloop?: "always" | "demand";
  onCreated?: () => void;
};

export function Scene({
  children,
  className,
  camera = { position: [0, 0.35, 4.2], fov: 38 },
  dpr = [1, 1.6],
  shadows = true,
  environment = true,
  frameloop = "always",
  onCreated,
}: SceneProps) {
  return (
    <Canvas
      className={className}
      dpr={dpr}
      frameloop={frameloop}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.05,
      }}
      camera={{ position: camera.position, fov: camera.fov }}
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace;
        onCreated?.();
      }}
    >
      <color attach="background" args={["#07080b"]} />
      <fog attach="fog" args={["#07080b", 6, 16]} />
      <hemisphereLight args={["#c9d4e4", "#1a120c", 0.45]} />
      <directionalLight position={[4.5, 6, 3]} intensity={1.35} color="#fff4e6" />
      <directionalLight position={[-3, 2, -2]} intensity={0.55} color="#7ee0ff" />
      <pointLight position={[0, -1.2, 2]} intensity={0.35} color="#ffb07a" />
      <Suspense fallback={null}>
        {environment ? <Environment preset="city" /> : null}
        {children}
        {shadows ? (
          <ContactShadows
            position={[0, -1.35, 0]}
            opacity={0.45}
            scale={8}
            blur={2.4}
            far={3}
            color="#000000"
          />
        ) : null}
      </Suspense>
    </Canvas>
  );
}
