"use client";

import { useEffect } from "react";
import { Center, useGLTF } from "@react-three/drei";

/**
 * Renders a GLB/GLTF file once it resolves. Suspense is provided by the
 * surrounding `Scene`, so a missing or invalid file is caught by the
 * template canvas error boundary instead of crashing the page.
 */
export function GltfModel({ url }: { url: string }) {
  const gltf = useGLTF(url);
  return (
    <Center>
      <primitive object={gltf.scene} />
    </Center>
  );
}

/**
 * Confirms a model URL actually points at a 3D file before suspending on it.
 * A missing file resolves to a plain 404 HTML document from the static
 * server, which would otherwise blow up `useGLTF`.
 */
export function ModelProbe({
  url,
  onResult,
}: {
  url: string;
  onResult: (available: boolean) => void;
}) {
  useEffect(() => {
    let live = true;
    fetch(url, { method: "HEAD" })
      .then((res) => {
        const type = res.headers.get("content-type") ?? "";
        const ok =
          res.ok &&
          !type.includes("text/html") &&
          (url.endsWith(".glb") || url.endsWith(".gltf") || type.includes("model"));
        if (live) onResult(ok);
      })
      .catch(() => {
        if (live) onResult(false);
      });
    return () => {
      live = false;
    };
  }, [url, onResult]);
  return null;
}
