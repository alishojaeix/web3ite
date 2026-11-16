"use client";

import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Sculpture } from "./sculptures";
import { GltfModel, ModelProbe } from "./GltfAsset";
import type { SculptureKind } from "@/types/template";

type ModelViewerProps = {
  model: string;
  sculpture: SculptureKind;
  accent: string;
  className?: string;
  autoRotate?: boolean;
  interactive?: boolean;
  hovered?: boolean;
};

export function ModelViewer({
  model,
  sculpture,
  accent,
  className,
  autoRotate = true,
  interactive = false,
  hovered = false,
}: ModelViewerProps) {
  const [hasModel, setHasModel] = useState(false);

  return (
    <div className={className ?? "relative h-full w-full"}>
      <ModelProbe url={model} onResult={setHasModel} />
      <Scene className="h-full w-full" camera={{ position: [0, 0.2, 3.6], fov: 36 }}>
        <Suspense fallback={null}>
          {hasModel ? (
            <GltfModel url={model} />
          ) : (
            <group position={[0, 0.05, 0]}>
              <Sculpture kind={sculpture} accent={accent} hovered={hovered} />
            </group>
          )}
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={interactive}
          enableRotate={interactive}
          autoRotate={autoRotate}
          autoRotateSpeed={hovered ? 1.6 : 0.55}
          minPolarAngle={Math.PI / 3.4}
          maxPolarAngle={Math.PI / 1.7}
        />
      </Scene>
    </div>
  );
}
