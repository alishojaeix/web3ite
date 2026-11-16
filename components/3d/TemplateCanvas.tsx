"use client";

import { Component, useEffect, useState, type ReactNode } from "react";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";
import { Scene } from "./Scene";
import { sceneRegistry } from "./scenes/registry";
import { SceneError, SceneLoading, ScenePoster } from "./SceneFallback";
import { GltfModel, ModelProbe } from "./GltfAsset";
import type { TemplateSceneId, TemplateTheme } from "@/types/template";

export type TemplateCanvasProps = {
  scene: TemplateSceneId;
  theme: TemplateTheme;
  accent?: string;
  label?: string;
  variant?: "card" | "detail";
  interactive?: boolean;
  autoRotate?: boolean;
  active?: boolean;
  /**
   * Optional GLB/GLTF path. When the file resolves it replaces the
   * procedural scene; when it is missing the procedural scene stays.
   */
  modelPath?: string;
  /**
   * Framing hint. "stage-right" shifts the scene off-center so hero copy
   * can sit beside it; the camera keeps its authored position so the
   * shift reads as composition, not a different scene.
   */
  align?: "center" | "stage-right";
  className?: string;
};

class SceneBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error) {
    console.error("Web3ite scene error:", error);
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2", { failIfMajorPerformanceCaveat: false }) ||
      canvas.getContext("webgl", { failIfMajorPerformanceCaveat: false });
    if (!gl) return false;
    const extension = gl.getExtension("WEBGL_lose_context");
    extension?.loseContext();
    return true;
  } catch {
    return false;
  }
}

type ControlsLike = {
  target: THREE.Vector3;
  update: () => void;
};

/**
 * Lives inside the canvas: positions the scene group, re-frames the camera
 * when a different template's authored camera takes over (the hero swaps
 * templates inside one persistent canvas), and owns the orbit controls so
 * their target always matches the framing.
 */
function StageLayout({
  align,
  cameraPosition,
  fov,
  interactive,
  autoRotate,
  motion,
  compact,
  children,
}: {
  align: "center" | "stage-right";
  cameraPosition: [number, number, number];
  fov: number;
  interactive: boolean;
  autoRotate: boolean;
  motion: boolean;
  compact: boolean;
  children: ReactNode;
}) {
  const size = useThree((state) => state.size);
  const camera = useThree((state) => state.camera) as THREE.PerspectiveCamera;
  const controls = useThree((state) => state.controls) as ControlsLike | null;

  const narrow = size.width / size.height < 0.95;
  const offset: [number, number, number] =
    align === "stage-right" ? (narrow ? [0, 0.55, 0] : [1.35, 0.05, 0]) : [0, 0, 0];

  // Snap to the authored camera of the active scene. Keyed on values, not
  // identities, so per-render array literals do not retrigger it.
  const cameraKey = `${cameraPosition.join(",")}|${fov}`;
  useEffect(() => {
    camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);
    camera.fov = fov;
    camera.updateProjectionMatrix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraKey]);

  useEffect(() => {
    if (!controls) return;
    controls.target.set(0, -0.08, 0);
    controls.update();
  }, [controls, cameraKey]);

  return (
    <>
      <group position={offset}>{children}</group>
      {!compact ? (
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={interactive}
          enableRotate={interactive}
          autoRotate={motion && autoRotate}
          autoRotateSpeed={0.45}
          enableDamping
          dampingFactor={0.06}
          minDistance={3.2}
          maxDistance={8}
          minPolarAngle={Math.PI / 3.6}
          maxPolarAngle={Math.PI / 1.75}
          target={[0, -0.08, 0]}
        />
      ) : null}
    </>
  );
}

export function TemplateCanvas({
  scene,
  theme,
  accent,
  label,
  variant = "detail",
  interactive = false,
  autoRotate = true,
  active = true,
  modelPath,
  align = "center",
  className,
}: TemplateCanvasProps) {
  const reduceMotion = useReducedMotion();
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [ready, setReady] = useState(false);
  const [modelOk, setModelOk] = useState<boolean | null>(null);
  const definition = sceneRegistry[scene];
  const resolvedTheme = accent ? { ...theme, accent } : theme;
  const motionEnabled = active && !reduceMotion;
  const isCard = variant === "card";

  useEffect(() => {
    setWebgl(supportsWebGL());
  }, []);

  // A different template means a different model path: re-probe from scratch.
  useEffect(() => {
    setModelOk(null);
  }, [modelPath]);
  if (!definition) {
    return <SceneError theme={resolvedTheme} label={label} />;
  }

  if (webgl === null) {
    return <SceneLoading theme={resolvedTheme} label={label} />;
  }

  if (!webgl) {
    return <ScenePoster theme={resolvedTheme} label={label} compact={isCard} />;
  }

  const SceneComponent = definition.Component;
  const probingModel = Boolean(modelPath) && modelOk === null;

  return (
    <div
      className={className ?? "relative h-full w-full"}
      role="img"
      aria-label={`${label ?? "Template"} 3D preview`}
    >
      {modelPath && modelOk === null ? (
        <ModelProbe url={modelPath} onResult={setModelOk} />
      ) : null}
      <SceneBoundary fallback={<SceneError theme={resolvedTheme} label={label} />}>
        <Scene
          className="h-full w-full"
          camera={{ position: definition.camera, fov: definition.fov }}
          dpr={isCard ? [1, 1.2] : [1, 1.75]}
          lighting="none"
          environment={isCard ? false : "local"}
          shadows={!isCard}
          background={resolvedTheme.background}
          frameloop={motionEnabled ? "always" : "demand"}
          onCreated={() => setReady(true)}
        >
          <StageLayout
            align={align}
            cameraPosition={definition.camera}
            fov={definition.fov}
            interactive={interactive}
            autoRotate={autoRotate}
            motion={motionEnabled}
            compact={isCard}
          >
            {modelPath && modelOk ? (
              <GltfModel url={modelPath} />
            ) : (
              <SceneComponent
                theme={resolvedTheme}
                motion={motionEnabled}
                compact={isCard}
              />
            )}
          </StageLayout>
        </Scene>
      </SceneBoundary>
      {!ready || probingModel ? (
        <SceneLoading theme={resolvedTheme} label={label} />
      ) : null}
    </div>
  );
}
