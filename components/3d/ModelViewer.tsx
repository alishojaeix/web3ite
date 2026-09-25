"use client";

import { Suspense, useEffect, useState } from "react";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Scene } from "./Scene";
import { Sculpture } from "./sculptures";
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

function GltfModel({ url }: { url: string }) {
  const gltf = useGLTF(url);
  return (
    <Center>
      <primitive object={gltf.scene} />
    </Center>
  );
}

function Probe({ url, onReady }: { url: string; onReady: (ok: boolean) => void }) {
  useEffect(() => {
    let live = true;
    fetch(url, { method: "HEAD" })
      .then((res) => {
        const type = res.headers.get("content-type") ?? "";
        const ok =
          res.ok &&
          !type.includes("text/html") &&
          (url.endsWith(".glb") || url.endsWith(".gltf") || type.includes("model"));
        if (live) onReady(ok);
      })
      .catch(() => {
        if (live) onReady(false);
      });
    return () => {
      live = false;
    };
  }, [url, onReady]);
  return null;
}

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
      <Probe url={model} onReady={setHasModel} />
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
