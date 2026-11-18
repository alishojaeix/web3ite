"use client";

import { Component, useEffect, useState, type ErrorInfo, type ReactNode } from "react";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "@/components/3d/Scene";
import { NoirCafeScene } from "@/components/3d/scenes/cafe";
import { SceneError } from "@/components/3d/SceneFallback";
import { noirCafe } from "@/data/templates/cafe";

function SceneBoundary({ children }: { children: ReactNode }) {
  return <Boundary>{children}</Boundary>;
}

class Boundary extends Component<
  { children: ReactNode },
  { error: boolean }
> {
  state = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Noir Café 3D preview failed", error, info);
  }

  render() {
    if (this.state.error) {
      return <SceneError theme={noirCafe.theme} label="نوآر کافه" />;
    }
    return this.props.children;
  }
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2") || canvas.getContext("webgl");
    if (!context) return false;
    context.getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

export function NoirCafeSceneCanvas() {
  const [webgl, setWebgl] = useState<boolean | null>(null);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    setWebgl(supportsWebGL());
    const query = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (webgl === false) {
    return (
      <div className="grid aspect-[4/3] place-items-center border border-white/10 bg-[radial-gradient(ellipse_at_50%_30%,#49341f,#090806_70%)] p-8 text-center" role="img" aria-label="صحنهٔ ثابت قهوهٔ Noir Café؛ WebGL در دسترس نیست">
        <div>
          <p className="font-editorial text-3xl text-[#efe7dc]">قهوه، در آرامش.</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#b8ad9f]">این مرورگر نمی‌تواند صحنهٔ سه‌بعدی اختیاری را نمایش دهد. بقیهٔ وب‌سایت همیشه در دسترس است.</p>
        </div>
      </div>
    );
  }

  if (webgl === null) {
    return <div className="aspect-[4/3] bg-[#090806]" role="status" aria-label="بررسی پشتیبانی سه‌بعدی" />;
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#090806]">
      <SceneBoundary>
        <Scene
          className="h-full w-full"
          camera={{ position: [0, 0.4, 4.8], fov: 34 }}
          dpr={[1, mobile ? 1.12 : 1.45]}
          shadows={false}
          environment={false}
          lighting="none"
          background={noirCafe.theme.background}
          frameloop="demand"
        >
          <NoirCafeScene theme={noirCafe.theme} motion={false} compact />
          <OrbitControls
            makeDefault
            enablePan={false}
            enableZoom={false}
            enableRotate
            autoRotate={false}
            enableDamping
            dampingFactor={0.08}
          />
        </Scene>
      </SceneBoundary>
      <p className="pointer-events-none absolute bottom-4 left-4 rounded-sm bg-black/60 px-3 py-2 text-xs text-white/80">
        برای چرخاندن فنجان بکشید
      </p>
    </div>
  );
}
