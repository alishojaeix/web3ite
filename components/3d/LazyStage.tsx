"use client";

import { useInView } from "@/hooks/useInView";
import { ModelCanvas } from "./CanvasStage";
import type { ComponentProps } from "react";

export function LazyModelCanvas(props: ComponentProps<typeof ModelCanvas>) {
  const { ref, inView } = useInView<HTMLDivElement>("280px");

  return (
    <div ref={ref} className={props.className ?? "relative h-full w-full"}>
      {inView ? <ModelCanvas {...props} className="h-full w-full" /> : <div className="h-full w-full bg-void" />}
    </div>
  );
}
