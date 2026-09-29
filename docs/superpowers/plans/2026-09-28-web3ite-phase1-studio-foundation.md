# Web3ite Phase 1 — Studio Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the abstract 3D art-object catalog with a business-vertical template studio, build the data system and studio shell, and seed the Cafe template — fixing the broken build along the way.

**Architecture:** Data-driven template catalog (one file per template + registry), a repository layer that stays the CMS swap point, and a composable studio split so Phase 4 customization extends rather than rewrites. Tungsten palette is authoritative; `DESIGN.md` is reconciled to the implemented site.

**Tech Stack:** Next.js 14.2 App Router, TypeScript, Tailwind 3.4, React Three Fiber + Drei + Three, framer-motion, Lenis, shadcn/ui, zustand.

**Spec:** `docs/superpowers/specs/2026-09-28-web3ite-phase1-studio-foundation-design.md`

## Global Constraints

Copied verbatim from the spec — every task's requirements include these:

- Preserve the current **Next.js 14** App Router architecture. Do not upgrade Next.
- TypeScript `strict: true`.
- Tungsten palette is authoritative: void `#07080b`, panel `#0b0d11`, card `#111318`, text `#f6f1ea` / `#b8b3aa` / `#8a847c`, gold accent `#d4af7a`, hover `#f0d9a8`, button face `#f4efe6`.
- Accent reserved for interactive elements; no secondary accent color.
- Respect `prefers-reduced-motion` — disable auto-rotate, transitions, Lenis.
- No fake checkout and no invented claims; catalog items may be labeled "Demo".
- Templates are data, not components.
- No GLB assets exist — procedural sculpture renders via the existing `Probe` fallback until a real model lands.
- Inter is the working display face (Geist is not available in Next 14; documented as a future swap).
- This project has **no test framework**. Gate each task on `npx tsc --noEmit` and `npx next build`.

## Review Focus

The five input classes most likely to bite a person using this software, and where each is pinned:

1. **A category with zero templates** (Restaurant, AI, Security, Automotive have no entries in Phase 1) — the gallery must show a graceful empty state, not a broken grid. → Task 7 pins it.
2. **An unknown template id** (`/templates/does-not-exist`) — must 404, not crash. → Task 5 pins it.
3. **`searchParams.view` with an unexpected value** — must fall back to "preview", not throw. → Task 5 pins it.
4. **`prefers-reduced-motion`** — Lenis must not start, entrance animation must be suppressed. → Task 4 pins it.
5. **A template whose `features`/`technologies` are empty** — card chips and studio lists must render nothing, not `undefined.map`. → Task 7 and Task 5 pin it.

---

## Task 1: Fix the broken build

**Files:**
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: none
- Produces: a compiling project — every later task depends on this

The `Geist` import from `next/font/google` does not exist in Next 14.2; `tsc` and `next build` both fail.

- [ ] **Step 1: Establish the failing baseline**

Run:
```bash
npx tsc --noEmit
```
Expected: `app/layout.tsx(2,32): error TS2305: Module '"next/font/google"' has no exported member 'Geist'.`

- [ ] **Step 2: Remove the invalid import**

In `app/layout.tsx`, delete the `Geist` import and its `const geist` declaration, and drop `geist.variable` from the `<html>` className. Inter stays as `--font-display`, Source Sans 3 as `--font-body`.

Replace lines 2–6 and the `<html>` tag so the result is:

```tsx
import type { Metadata, Viewport } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const display = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
```

and:

```tsx
<html lang="en" className={cn(display.variable, body.variable, "font-sans")}>
```

- [ ] **Step 3: Verify the fix**

Run:
```bash
npx tsc --noEmit && npx next build
```
Expected: both succeed; build emits `/`, `/templates`, and static params for `/templates/[id]`.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx
git commit -m "fix: remove invalid Geist font import to unblock Next 14 build"
```

---

## Task 2: Category system and Template type

**Files:**
- Modify: `types/template.ts`

**Interfaces:**
- Consumes: none
- Produces: `TEMPLATE_CATEGORIES` (`cafe | restaurant | ai | security | automotive`), `TemplateCategory`, `CATEGORY_LABELS`, `SculptureKind` (adds `cup`), `Template` with `features` + `technologies` and no `tags`

- [ ] **Step 1: Replace the category union and labels**

In `types/template.ts`, replace the `TEMPLATE_CATEGORIES` array and `CATEGORY_LABELS` map:

```ts
export const TEMPLATE_CATEGORIES = [
  "cafe",
  "restaurant",
  "ai",
  "security",
  "automotive",
] as const;

export type TemplateCategory = (typeof TEMPLATE_CATEGORIES)[number];
```

```ts
export const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  cafe: "Cafe",
  restaurant: "Restaurant",
  ai: "AI Services",
  security: "Security & Crypto",
  automotive: "Automotive",
};
```

- [ ] **Step 2: Add the `cup` sculpture kind**

Add `"cup"` to the `SculptureKind` union (keep the existing twelve):

```ts
export type SculptureKind =
  | "rings"
  | "frames"
  | "capsule"
  | "plinth"
  | "drape"
  | "crystal"
  | "lattice"
  | "hull"
  | "knot"
  | "orb"
  | "column"
  | "shard"
  | "cup";
```

- [ ] **Step 3: Extend `Template` and drop `tags`**

```ts
export type Template = {
  id: string;
  title: string;
  category: TemplateCategory;
  description: string;
  previewImage: string;
  model: string;
  price: number;
  features: string[];
  technologies: string[];
  featured?: boolean;
  published?: boolean;
  sculpture: SculptureKind;
  accent: string;
};
```

- [ ] **Step 4: Verify it compiles (old catalog still references the old fields — expected failures)**

Run:
```bash
npx tsc --noEmit
```
Expected: errors in `data/templates.ts` (old catalog entries no longer satisfy the type). That file is replaced in Task 3 — do not fix it here.

- [ ] **Step 5: Commit**

```bash
git add types/template.ts
git commit -m "feat(types): business-vertical categories, features and technologies fields"
```

---

## Task 3: Template data registry and Cafe entry

**Files:**
- Create: `data/templates/cafe.ts`
- Create: `data/templates/index.ts`
- Delete: `data/templates.ts`

**Interfaces:**
- Consumes: `Template` from Task 2
- Produces: `templates: Template[]` re-exported from `@/data/templates` — the same import path the repository layer already uses, so `lib/templates/repository.ts` needs no change

- [ ] **Step 1: Write the Cafe template**

`data/templates/cafe.ts`:

```ts
import type { Template } from "@/types/template";

/**
 * Cafe — luxury modern cafe website.
 * Drop a real GLB at `model` and a still at `previewImage` to go live;
 * until then ModelViewer renders the `cup` sculpture.
 */
export const cafe: Template = {
  id: "noir-cafe",
  title: "Noir Café",
  category: "cafe",
  description:
    "A luxury modern cafe site. An espresso cup turning under a warm key light, a menu that reads like a tasting card, and a reservation rail that never leaves the room.",
  previewImage: "/images/templates/noir-cafe.jpg",
  model: "/models/noir-cafe.glb",
  price: 249,
  features: [
    "Menu showcase",
    "Reservations",
    "Gallery",
    "Location & hours",
    "Slow camera orbit",
  ],
  technologies: [
    "Next.js 14",
    "React Three Fiber",
    "Drei",
    "Tailwind CSS",
    "Lenis",
  ],
  featured: true,
  published: true,
  sculpture: "cup",
  accent: "#C8A05A",
};
```

- [ ] **Step 2: Write the registry**

`data/templates/index.ts`:

```ts
import type { Template } from "@/types/template";
import { cafe } from "./cafe";

/**
 * The catalog. Add one file per template, then one line here.
 * `lib/templates/repository.ts` reads this array — swap that layer for a
 * CMS or API later without touching any component.
 */
export const templates: Template[] = [cafe];
```

- [ ] **Step 3: Delete the superseded flat catalog**

```bash
git rm data/templates.ts
```

- [ ] **Step 4: Verify**

```bash
npx tsc --noEmit
```
Expected: clean. `lib/templates/repository.ts` imports `@/data/templates`, which now resolves to `data/templates/index.ts`.

- [ ] **Step 5: Commit**

```bash
git add data/templates/index.ts data/templates/cafe.ts
git commit -m "feat(data): per-template registry with the Noir Café entry"
```

---

## Task 4: Motion primitives (Reveal, Stagger, SmoothScroll)

**Files:**
- Create: `components/animations/Reveal.tsx`
- Create: `components/animations/StaggerContainer.tsx`
- Create: `components/animations/SmoothScroll.tsx`
- Create: `components/animations/index.ts`

**Interfaces:**
- Consumes: `framer-motion`, `lenis`
- Produces: `<Reveal>`, `<StaggerContainer>` + `<StaggerItem>`, `<SmoothScroll>` — used by Task 7 (cards) and mounted in Task 8

- [ ] **Step 1: `Reveal.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: `StaggerContainer.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function StaggerContainer({
  children,
  className,
  stagger = 0.06,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: `SmoothScroll.tsx` — pins Review Focus 4 (reduced motion)**

```tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
```

- [ ] **Step 4: `index.ts` barrel**

```ts
export { Reveal } from "./Reveal";
export { StaggerContainer, StaggerItem } from "./StaggerContainer";
export { SmoothScroll } from "./SmoothScroll";
```

- [ ] **Step 5: Verify**

```bash
npx tsc --noEmit
```
Expected: clean. If `lenis` has no default export in the installed version, switch to `import { Lenis } from "lenis"` — the `lenis` package ships both; verify with `node -e "console.log(Object.keys(require('lenis')))"`.

- [ ] **Step 6: Commit**

```bash
git add components/animations/
git commit -m "feat(animations): Reveal, StaggerContainer and Lenis SmoothScroll primitives"
```

---

## Task 5: Studio component split

**Files:**
- Create: `components/templates/studio/StudioTabs.tsx`
- Create: `components/templates/studio/StudioCanvas.tsx`
- Create: `components/templates/studio/StudioPanel.tsx`
- Create: `components/templates/studio/CustomizePanel.tsx`
- Modify: `components/templates/TemplateStudio.tsx` (compose the four)

**Interfaces:**
- Consumes: `Template` from Task 2, `ModelCanvas` from `components/3d/CanvasStage`
- Produces: `<TemplateStudio template={} initialView=[]>` — same props as today, so `app/templates/[id]/page.tsx` needs no change

- [ ] **Step 1: `StudioTabs.tsx`**

```tsx
"use client";

export type StudioView = "preview" | "customize";

export function StudioTabs({
  view,
  onChange,
}: {
  view: StudioView;
  onChange: (view: StudioView) => void;
}) {
  return (
    <div className="flex gap-2">
      {(["preview", "customize"] as const).map((id) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={`rounded-sm px-4 py-2 text-[12px] uppercase tracking-[0.14em] ${
            view === id
              ? "bg-[#f4efe6] text-[#111]"
              : "border border-white/10 text-[#9a958c] hover:text-[#e8e4dc]"
          }`}
        >
          {id === "preview" ? "Preview" : "Customize"}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: `StudioCanvas.tsx`**

```tsx
"use client";

import { ModelCanvas } from "@/components/3d/CanvasStage";
import type { SculptureKind } from "@/types/template";

export function StudioCanvas({
  model,
  sculpture,
  accent,
  autoRotate,
}: {
  model: string;
  sculpture: SculptureKind;
  accent: string;
  autoRotate: boolean;
}) {
  return (
    <section className="relative min-h-[60vh] lg:min-h-screen">
      <ModelCanvas
        model={model}
        sculpture={sculpture}
        accent={accent}
        autoRotate={autoRotate}
        interactive
        className="absolute inset-0 h-full w-full"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07080b] to-transparent" />
      <p className="absolute bottom-6 left-6 text-[12px] uppercase tracking-[0.18em] text-[#8a847c]">
        Drag to orbit · scroll to zoom
      </p>
    </section>
  );
}
```

- [ ] **Step 3: `StudioPanel.tsx` — pins Review Focus 5 (empty feature list)**

```tsx
import { CATEGORY_LABELS } from "@/types/template";
import type { Template } from "@/types/template";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function StudioPanel({ template }: { template: Template }) {
  return (
    <div>
      <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-[#d4af7a]">
        {CATEGORY_LABELS[template.category]}
      </p>
      <h1 className="mt-2 font-display text-[40px] leading-none tracking-[-0.04em] text-[#f6f1ea]">
        {template.title}
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-[#b8b3aa]">
        {template.description}
      </p>
      <p className="mt-6 font-display text-[28px] text-[#f0d9a8]">
        {formatPrice(template.price)}
      </p>

      {template.features.length > 0 ? (
        <ul className="mt-8 flex flex-wrap gap-2">
          {template.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-[#9a958c]"
            >
              {feature}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
```

- [ ] **Step 4: `CustomizePanel.tsx`**

```tsx
"use client";

const DEFAULT_ACCENTS = ["#7EE0FF", "#F0D9A8", "#FF5A36", "#C8F27A", "#C4B5FD"];

export function CustomizePanel({
  accent,
  onAccentChange,
  spin,
  onSpinChange,
  model,
}: {
  accent: string;
  onAccentChange: (accent: string) => void;
  spin: boolean;
  onSpinChange: (spin: boolean) => void;
  model: string;
}) {
  const accents = [accent, ...DEFAULT_ACCENTS.filter((c) => c !== accent)];

  return (
    <div className="mt-8 space-y-6">
      <div>
        <p className="text-[12px] uppercase tracking-[0.14em] text-[#8a847c]">Accent</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {accents.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => onAccentChange(color)}
              aria-label={`Accent ${color}`}
              className={`h-9 w-9 rounded-full border ${
                accent === color ? "border-white" : "border-white/20"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      <label className="flex items-center justify-between text-[14px] text-[#c4bfb6]">
        Auto rotate
        <input
          type="checkbox"
          checked={spin}
          onChange={(e) => onSpinChange(e.target.checked)}
          className="h-4 w-4 accent-[#d4af7a]"
        />
      </label>
      <p className="text-[13px] text-[#8a847c]">
        Model path: {model}. Drop a GLB there to replace the sculpture.
      </p>
    </div>
  );
}
```

- [ ] **Step 5: Recompose `TemplateStudio.tsx` — pins Review Focus 3 (bad `view` param)**

Replace the whole file. The `initialView` coercion falls back to `"preview"` for any unexpected value:

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StudioCanvas } from "./studio/StudioCanvas";
import { StudioPanel } from "./studio/StudioPanel";
import { StudioTabs, type StudioView } from "./studio/StudioTabs";
import { CustomizePanel } from "./studio/CustomizePanel";
import type { Template } from "@/types/template";

export function TemplateStudio({
  template,
  initialView,
}: {
  template: Template;
  initialView?: string;
}) {
  const start: StudioView = initialView === "customize" ? "customize" : "preview";
  const [view, setView] = useState<StudioView>(start);
  const [accent, setAccent] = useState(template.accent);
  const [spin, setSpin] = useState(true);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="grid min-h-screen pt-24 lg:grid-cols-[minmax(0,1fr)_380px]">
        <StudioCanvas
          model={template.model}
          sculpture={template.sculpture}
          accent={accent}
          autoRotate={spin}
        />

        <aside className="border-t border-white/10 bg-[#0b0d11]/90 p-6 backdrop-blur-xl lg:border-l lg:border-t-0">
          <Link
            href="/templates"
            className="text-[12px] uppercase tracking-[0.16em] text-[#8a847c] hover:text-[#f0d9a8]"
          >
            Back to templates
          </Link>
          <StudioPanel template={template} />
          <div className="mt-8">
            <StudioTabs view={view} onChange={setView} />
          </div>

          {view === "customize" ? (
            <CustomizePanel
              accent={accent}
              onAccentChange={setAccent}
              spin={spin}
              onSpinChange={setSpin}
              model={template.model}
            />
          ) : null}

          <div className="mt-10 flex flex-col gap-3">
            <button
              type="button"
              className="rounded-sm bg-[#f4efe6] px-4 py-3 text-[14px] font-medium text-[#111]"
            >
              Request this template
            </button>
            <Link
              href="/templates"
              className="rounded-sm border border-white/15 px-4 py-3 text-center text-[14px] text-[#f6f1ea]"
            >
              Browse others
            </Link>
          </div>
        </aside>
      </main>
    </div>
  );
}
```

- [ ] **Step 6: Verify**

```bash
npx tsc --noEmit && npx next build
```
Expected: clean; `/templates/noir-cafe` builds. Note `StudioPanel` is a server component (no `"use client"`) — it is imported by the client `TemplateStudio`, which is fine and keeps it out of the client bundle.

- [ ] **Step 7: Commit**

```bash
git add components/templates/studio/ components/templates/TemplateStudio.tsx
git commit -m "feat(studio): split TemplateStudio into canvas, panel, tabs and customize units"
```

---

## Task 6: Cup sculpture

**Files:**
- Modify: `components/3d/sculptures.tsx`

**Interfaces:**
- Consumes: `SculptureKind` from Task 2
- Produces: the `"cup"` branch of `<Sculpture>` — the procedural stand-in for the Cafe template

- [ ] **Step 1: Add the `cup` branch**

In the `Sculpture` switch, add:

```tsx
    case "cup":
      return <Cup accent={accent} hovered={hovered} />;
```

- [ ] **Step 2: Implement `Cup`**

Add alongside the other sculpture components, using the file's existing `useSpin` and `metal` helpers:

```tsx
function Cup({ accent, hovered }: { accent: string; hovered: boolean }) {
  const ref = useSpin(hovered ? 0.35 : 0.12);
  return (
    <group ref={ref}>
      {/* saucer */}
      <mesh position={[0, -0.78, 0]}>
        <cylinderGeometry args={[0.92, 0.98, 0.08, 48]} />
        {metal("#e6e0d6", { roughness: 0.3, metalness: 0.25 })}
      </mesh>
      {/* cup body */}
      <mesh position={[0, -0.28, 0]}>
        <cylinderGeometry args={[0.56, 0.46, 0.66, 48]} />
        {metal("#f2ece2", { roughness: 0.24, metalness: 0.15 })}
      </mesh>
      {/* espresso surface */}
      <mesh position={[0, 0.07, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.04, 48]} />
        {metal(accent, { roughness: 0.42, metalness: 0.1, emissive: accent, emissiveIntensity: 0.1 })}
      </mesh>
      {/* handle */}
      <mesh position={[0.68, -0.26, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.22, 0.055, 16, 32]} />
        {metal("#f2ece2", { roughness: 0.24, metalness: 0.15 })}
      </mesh>
      {/* steam */}
      <Steam />
    </group>
  );
}

function Steam() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.children.forEach((child, i) => {
      child.position.y = 0.55 + i * 0.34 + Math.sin(t * 1.4 + i * 1.1) * 0.09;
      child.rotation.z = Math.sin(t * 0.9 + i) * 0.22;
    });
  });
  return (
    <group ref={ref}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 0.55 + i * 0.34, 0]}>
          <sphereGeometry args={[0.055 - i * 0.008, 16, 16]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transparent
            opacity={0.16 - i * 0.035}
            roughness={1}
            metalness={0}
          />
        </mesh>
      ))}
    </group>
  );
}
```

- [ ] **Step 3: Verify**

```bash
npx tsc --noEmit
```
Expected: clean. `useRef`, `useFrame` and `THREE` are already imported at the top of the file.

- [ ] **Step 4: Commit**

```bash
git add components/3d/sculptures.tsx
git commit -m "feat(3d): cup sculpture with drifting steam for the Cafe template"
```

---

## Task 7: Catalog surfaces — card, grid, featured

**Files:**
- Modify: `components/templates/TemplateCard.tsx`
- Modify: `components/templates/TemplateGrid.tsx`
- Modify: `components/templates/FeaturedTemplates.tsx`

**Interfaces:**
- Consumes: `Template` from Task 2, `Reveal`/`StaggerContainer` from Task 4
- Produces: the Explore surface reading `features`/`technologies` instead of `tags`

- [ ] **Step 1: `TemplateCard` — use features + Reveal — pins Review Focus 5**

Swap the inline `motion.article` for `Reveal`, and render `features` chips. Replace the motion import and the article body:

```tsx
import { Reveal } from "@/components/animations/Reveal";
```

Replace `<motion.article ...>` … `</motion.article>` with:

```tsx
      <Reveal delay={Math.min(index * 0.06, 0.3)} className="h-full">
        <article
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group relative isolate flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#0b0d11]/80 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-md"
        >
```

…and close it with `</article></Reveal>`. Replace the `tags.slice(0, 3)` list with:

```tsx
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {template.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-white/[0.06] px-2.5 py-1 text-[11px] text-[#9a958c]"
            >
              {feature}
            </li>
          ))}
        </ul>
```

Remove the now-unused `motion` import.

- [ ] **Step 2: `TemplateGrid` — search the new fields — pins Review Focus 1 (empty category)**

Replace the `visible` computation so it searches features and technologies:

```tsx
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return templates.filter((t) => {
      if (category !== "all" && t.category !== category) return false;
      if (!q) return true;
      return (
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.features.some((f) => f.toLowerCase().includes(q)) ||
        t.technologies.some((tech) => tech.toLowerCase().includes(q))
      );
    });
  }, [templates, query, category]);
```

The existing empty-state block already handles `visible.length === 0` — no change needed.

- [ ] **Step 3: `FeaturedTemplates` — stagger the grid**

Wrap the grid in `StaggerContainer` and each card in `StaggerItem`, replacing the per-card inline delay from Task 7 Step 1's `index` usage is no longer needed for staggering but is harmless to keep:

```tsx
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
```

```tsx
        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {visible.map((template) => (
            <StaggerItem key={template.id}>
              <TemplateCard template={template} index={0} />
            </StaggerItem>
          ))}
        </StaggerContainer>
```

- [ ] **Step 4: Verify**

```bash
npx tsc --noEmit && npx next build
```
Expected: clean. Visit `/templates` — the empty category chips (Restaurant, AI, Security, Automotive) show the existing "Nothing on this aisle" empty state.

- [ ] **Step 5: Commit**

```bash
git add components/templates/TemplateCard.tsx components/templates/TemplateGrid.tsx components/templates/FeaturedTemplates.tsx
git commit -m "feat(catalog): card and grid read features and technologies, staggered grid"
```

---

## Task 8: Sections rename, Discover copy, dead code, SmoothScroll mount

**Files:**
- Rename: `components/home/` → `components/sections/`
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx` (mount `SmoothScroll`)
- Modify: `components/site/SiteHeader.tsx`, `components/site/SiteFooter.tsx`
- Delete: `components/AppLayout.tsx`

**Interfaces:**
- Consumes: `SmoothScroll` from Task 4
- Produces: the Discover surface and the final component tree

- [ ] **Step 1: Rename the directory**

```bash
git mv components/home components/sections
```

- [ ] **Step 2: Update imports in `app/page.tsx`**

```tsx
import { Hero } from "@/components/sections/Hero";
import { StudioStrip } from "@/components/sections/StudioStrip";
import { Waitlist } from "@/components/sections/Waitlist";
```

- [ ] **Step 3: Mount SmoothScroll in `app/layout.tsx`**

```tsx
import { SmoothScroll } from "@/components/animations/SmoothScroll";
```

Inside `<body>`, before `{children}`:

```tsx
      <body>
        <SmoothScroll />
        {children}
      </body>
```

- [ ] **Step 4: Delete the orphaned dashboard shell**

```bash
git rm components/AppLayout.tsx
```

- [ ] **Step 5: Update header nav and footer copy**

In `SiteHeader.tsx`, point the nav at the new surfaces:

```tsx
const links = [
  { href: "/#templates", label: "Templates" },
  { href: "/templates", label: "Explore" },
  { href: "/#studio", label: "Studio" },
];
```

In `SiteFooter.tsx`, update the description:

```tsx
          Choose a finished 3D template, tune it in the studio, and launch. The catalog is data — models swap without rewriting the floor.
```

- [ ] **Step 6: Verify**

```bash
npx tsc --noEmit && npx next build
```
Expected: clean. Grep to confirm no stale imports survive:

```bash
grep -rn "components/home" app components
grep -rn "AppLayout" app components
```
Both should return nothing.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat(shell): sections rename, SmoothScroll mounted, orphaned AppLayout removed"
```

---

## Task 9: Design system reconciliation

**Files:**
- Modify: `tailwind.config.js`
- Modify: `DESIGN.md`
- Modify: `design-tokens.json`
- Modify: `PRODUCT.md`

**Interfaces:**
- Consumes: none
- Produces: one authoritative palette across docs and config

- [ ] **Step 1: `tailwind.config.js` — retune the accent scale**

The `accent` scale currently holds cyan `#00d4ff`. Replace it with the tungsten gold family so the two palettes stop coexisting:

```js
        accent: {
          DEFAULT: "#d4af7a",
          hover: "#f0d9a8",
          muted: "rgba(212,175,122,0.12)",
          ring: "rgba(212,175,122,0.35)",
        },
```

Leave `bg.void` (`#050608`) and the neutral `text` scale in place — the 3D components depend on `bg-void`, and a neutral near-black is not a second accent color.

- [ ] **Step 2: `DESIGN.md` — reconcile palette and reverse the glassmorphism don'ts**

Update the **Color Palette & Roles** tables to the implemented tungsten values (void `#07080b`, panel `#0b0d11`, card `#111318`, text `#f6f1ea` / `#b8b3aa` / `#8a847c`, accent `#d4af7a`, hover `#f0d9a8`).

In **Typography**, replace the Geist families with `Inter` (display) + `Source Sans 3` (body), and note that Geist is the intended future swap once the project moves to Next 15.

In **§13 Do's and Don'ts**, remove the line `Don't add decorative gradients, glows, or glassmorphism` and replace with:

> - Don't let glassmorphism or gradients compete with the 3D scene — they frame it, never replace it

Update the **CSS Strategy** note from "Tailwind CSS v4 with `@theme`" to the actual stack (Tailwind CSS v3.4 with a JS config and CSS variables), since the project is on v3.

- [ ] **Step 3: `design-tokens.json` — sync values**

Set `color.bg.void` to `#07080b`, `color.text.primary` to `#f6f1ea`, `secondary` to `#b8b3aa`, `muted` to `#8a847c`, and `color.accent` to `{ "primary": "#d4af7a", "hover": "#f0d9a8", "muted": "rgba(212,175,122,0.12)", "ring": "rgba(212,175,122,0.35)" }`. Update `typography.fontFamilies` to Inter / Source Sans 3.

- [ ] **Step 4: `PRODUCT.md` — reflect the new catalog**

In **Operating Context**, update the last sentence to note the catalog is now business-vertical with one entry (Noir Café) and procedural stand-ins. In **Capabilities and Constraints**, replace the old category list with `Cafe, Restaurant, AI Services, Security & Crypto, Automotive`, and note that only Cafe has a template in Phase 1.

- [ ] **Step 5: Verify**

```bash
npx next build
```
Expected: succeeds. Docs are prose — confirm by re-reading the four edited sections, not by build.

- [ ] **Step 6: Commit**

```bash
git add tailwind.config.js DESIGN.md design-tokens.json PRODUCT.md
git commit -m "docs: reconcile design system to the tungsten palette and actual stack"
```

---

## Task 10: End-to-end verification

**Files:** none (verification only)

This task runs the seven acceptance criteria from the spec.

- [ ] **Step 1: Typecheck and build**

```bash
npx tsc --noEmit && npx next build
```
Expected: both clean; routes `/`, `/templates`, `/templates/noir-cafe` emitted.

- [ ] **Step 2: No dangling references**

```bash
grep -rn "components/home\|AppLayout\|data/templates.ts\b" app components lib
grep -rn "\.tags" app components
```
Expected: nothing.

- [ ] **Step 3: Live pass — start the dev server**

```bash
npm run dev
```
Then in a browser check:
- `/` renders the hero and the featured grid with the Noir Café card
- `/templates` shows all five category chips; clicking **Restaurant** shows the empty state; searching **menu** finds Noir Café via its features
- `/templates/noir-cafe` renders the cup sculpture (no GLB exists, so the `Probe` fallback is what you see), the price `$249`, and the feature chips
- On the studio page, **Customize** → clicking an accent recolors the espresso surface live
- `/templates/does-not-exist` returns 404
- Emulating `prefers-reduced-motion: reduce` suppresses entrance animation and smooth scroll

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: phase 1 verification pass"
```

---

## Self-review notes

Checked against the spec before handoff:

1. **Spec coverage** — every §5 subsection maps to a task (5.1→T8, 5.2→T3, 5.3→T2, 5.4→T6, 5.5→T5, 5.6→T7/T8, 5.7→T4, 5.8→T9). §4's four problems are covered (P1→T1, P2→T9, P3→T4/T8, P4→T2). §6's file list is fully accounted for.
2. **Placeholders** — none; every step carries concrete code or an exact command.
3. **Type consistency** — `StudioView` is defined and consumed consistently; `Template` field names (`features`, `technologies`, no `tags`) match between T2, T3, T5 and T7.
4. **Review Focus** — all five input classes have an owning task and a verification step.
