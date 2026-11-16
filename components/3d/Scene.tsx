"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

type SceneProps = {
  children: React.ReactNode;
  className?: string;
  camera?: { position?: [number, number, number]; fov?: number };
  dpr?: [number, number];
  shadows?: boolean;
  environment?: boolean | "local";
  lighting?: "default" | "none";
  background?: string;
  fog?: boolean;
  exposure?: number;
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
  lighting = "default",
  background = "#07080b",
  fog = false,
  exposure = 1.05,
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
        alpha: false,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: exposure,
      }}
      camera={{ position: camera.position, fov: camera.fov }}
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace;
        onCreated?.();
      }}
    >
      <color attach="background" args={[background]} />
      {fog ? <fog attach="fog" args={[background, 7, 18]} /> : null}
      {lighting === "default" ? (
        <>
          <hemisphereLight args={["#c9d4e4", "#1a120c", 0.35]} />
          <directionalLight position={[4.5, 6, 3]} intensity={1.35} color="#fff4e6" />
          <directionalLight position={[-3, 2, -2]} intensity={0.45} color="#c9a36a" />
          <pointLight position={[0, -1.2, 2]} intensity={0.25} color="#ffb07a" />
        </>
      ) : null}
      <Suspense fallback={null}>
        {environment === "local" ? (
          <Environment resolution={64} frames={1}>
            <Lightformer
              form="rect"
              intensity={3.2}
              color="#fff3e0"
              position={[0, 5, -2]}
              scale={[8, 4, 1]}
            />
            <Lightformer
              form="rect"
              intensity={1.6}
              color="#d5c2a8"
              position={[-5, 1, 2]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[5, 4, 1]}
            />
            <Lightformer
              form="circle"
              intensity={1.4}
              color="#ffffff"
              position={[5, 2, 3]}
              scale={3}
            />
          </Environment>
        ) : environment === true ? (
          <Environment preset="city" />
        ) : null}
        {children}
        {shadows ? (
          <ContactShadows
            position={[0, -1.17, 0]}
            opacity={0.42}
            scale={7.5}
            blur={2.8}
            far={4.5}
            frames={1}
            color="#000000"
          />
        ) : null}
      </Suspense>
    </Canvas>
  );
}
