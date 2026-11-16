"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import { ScenePoster } from "./SceneFallback";
import { useInView } from "@/hooks/useInView";

const TemplateCanvasInner = dynamic(
  () => import("./TemplateCanvas").then((m) => m.TemplateCanvas),
  { ssr: false }
);

const ModelViewerInner = dynamic(
  () => import("./ModelViewer").then((m) => m.ModelViewer),
  { ssr: false }
);

export function TemplateSceneCanvas(
  props: ComponentProps<typeof TemplateCanvasInner>
) {
  return <TemplateCanvasInner {...props} />;
}

export function ModelCanvas(props: ComponentProps<typeof ModelViewerInner>) {
  return <ModelViewerInner {...props} />;
}

export function LazyTemplateScene({
  className,
  priority = false,
  ...props
}: ComponentProps<typeof TemplateSceneCanvas> & { priority?: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>(priority ? "900px" : "360px", false);

  return (
    <div ref={ref} className={className ?? "relative h-full w-full"}>
      {inView ? (
        <TemplateSceneCanvas {...props} active={inView && (props.active ?? true)} />
      ) : (
        <ScenePoster
          theme={props.accent ? { ...props.theme, accent: props.accent } : props.theme}
          label={props.label}
          compact={props.variant === "card"}
        />
      )}
    </div>
  );
}
