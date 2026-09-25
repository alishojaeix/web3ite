"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const HeroSceneInner = dynamic(() => import("./HeroScene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-void" />,
});

const ModelViewerInner = dynamic(() => import("./ModelViewer").then((m) => m.ModelViewer), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-void" />,
});

export function HeroCanvas(props: ComponentProps<typeof HeroSceneInner>) {
  return <HeroSceneInner {...props} />;
}

export function ModelCanvas(props: ComponentProps<typeof ModelViewerInner>) {
  return <ModelViewerInner {...props} />;
}
