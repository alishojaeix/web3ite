# Web3ite Phase 1 — Studio Foundation & Template Data System

**Date:** 2026-09-28
**Status:** Approved by design review — awaiting spec sign-off
**Path:** Architectural (brainstorming → spec → implementation plan)

---

## 1. Purpose

Transform Web3ite from a showroom of abstract 3D art objects into a premium
template studio that sells business-vertical website templates. Phase 1 builds
the foundation only: the data system, the studio shell, and the first catalog
entry (Cafe).

Phase 1 delivers the first three steps of the product funnel:

> **Discover → Explore → Preview**

Customize (Phase 4), Purchase (Phase 5) and Deploy are explicitly out of scope,
but the studio is shaped so those slots fill later without restructuring.

## 2. Decisions locked in design review

| # | Decision | Rationale |
|---|----------|-----------|
| 1 | Replace the 24 abstract templates with the business-vertical catalog | The abstract templates ("Orbital", "Atelier Noir") are demo bodies per PRODUCT.md; the new product sells Cafe/Restaurant/AI/Crypto/Car templates |
| 2 | Refine the current tungsten look as the authoritative visual direction | Matches the live site; `DESIGN.md`'s cyan/no-gradient system contradicts both the implemented UI and the brief's glassmorphism + soft gradients |
| 3 | Procedural placeholder sculptures now, GLB slot ready | No GLB assets exist; the existing `Probe` fallback renders procedural art until a real model lands |
| 4 | Include the Lenis smooth-scroll provider in Phase 1 | Package already installed and unused; serves the brief's motion requirements |
| 5 | Delete orphaned `components/AppLayout.tsx` | Imported nowhere, uses the rejected cyan palette; admin panel rebuilds on tungsten in its own phase |

## 3. Current architecture (what exists and is kept)

Already present and **not** rewritten:

- `types/template.ts` — `Template`, `TEMPLATE_CATEGORIES`, `CATEGORY_LABELS`, `SculptureKind`
- `lib/templates/repository.ts` — `listTemplates`, `getFeaturedTemplates`, `getTemplateById`, `getTemplatesByCategory`, `getCategoryOptions`. Written as a swap point for a future CMS/API; signatures stay untouched
- `app/` routes — `/`, `/templates`, `/templates/[id]` (App Router preserved)
- `components/3d/` — `Scene` wrapper, `ModelViewer` with GLB `Probe` + sculpture fallback, 12 sculpture kinds, `LazyStage` in-view loading, `CanvasStage` dynamic imports
- `components/site/` — `SiteHeader`, `SiteFooter`
- `tailwind.config.js` — full token scale (type, spacing, radius, shadow, motion)

## 4. Problems found that Phase 1 must fix

**P1 — The build is broken.** `app/layout.tsx:2` imports `Geist` from
`next/font/google`. That font does not exist in Next 14.2 (it arrived in Next 15).
Both `tsc --noEmit` and `next build` fail. Verified:

```
app/layout.tsx(2,32): error TS2305: Module '"next/font/google"' has no exported member 'Geist'.
```

**P2 — Three conflicting design systems.** `DESIGN.md` + `design-tokens.json` +
`tailwind.config.js` describe electric cyan `#00d4ff` and forbid gradients and
glassmorphism. The implemented components are warm tungsten (`#f6f1ea`, `#d4af7a`)
and use both. `.impeccable/surfaces/homepage.md` matches the implementation, not
`DESIGN.md`. Decision 2 makes the implementation authoritative; the docs are
reconciled to it.

**P3 — Orphaned code.** `components/AppLayout.tsx` (a dashboard shell with command
palette, cyan palette, imported by nothing) and `components/ui/button.tsx` (shadcn
Button, never imported). `gsap` and `lenis` are installed but unused.

**P4 — Schema gap.** The brief requires `features` and `technologies`; the current
`Template` type has neither.

## 5. Target architecture

### 5.1 Component tree

```
components/
  ui/            shadcn primitives (Button adopted for new code)
  3d/            Scene, ModelViewer, sculptures, staging        (unchanged)
  templates/     catalog + studio components
    studio/      StudioCanvas, StudioPanel, CustomizePanel, StudioTabs
  sections/      Hero, StudioStrip, Waitlist                    (renamed from home/)
  animations/    Reveal, StaggerContainer, SmoothScroll         (new)
  site/          SiteHeader, SiteFooter                          (unchanged)

data/
  templates/
    index.ts     registry: aggregates + re-exports templates[]
    cafe.ts      one template per file
```

The `components/home/` → `components/sections/` rename reflects what those files
already are (page sections) and matches the brief's requested tree.

### 5.2 Data system

Adding a template = add one file under `data/templates/` + one line in the index.
The repository layer keeps its current signatures, so a later CMS or API swap
touches `lib/templates/repository.ts` only.

`Template` type changes:

```ts
export type Template = {
  id: string;
  title: string;
  category: TemplateCategory;
  description: string;
  previewImage: string;
  model: string;
  price: number;
  features: string[];        // new — per brief
  technologies: string[];    // new — per brief
  featured?: boolean;
  published?: boolean;
  sculpture: SculptureKind;
  accent: string;
};
```

`tags` is removed. `features` subsumes it; catalog search queries
title / description / features / technologies.

### 5.3 Category system

```ts
export const TEMPLATE_CATEGORIES = [
  "cafe",
  "restaurant",
  "ai",
  "security",
  "automotive",
] as const;

export const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  cafe: "Cafe",
  restaurant: "Restaurant",
  ai: "AI Services",
  security: "Security & Crypto",
  automotive: "Automotive",
};
```

Only the Cafe entry is authored in Phase 1. The other four categories exist in
the enum so the UI can render the full category rail without placeholders.

### 5.4 3D scene system

One new sculpture kind is added to `components/3d/sculptures.tsx`:

- `cup` — a steaming coffee cup, the Cafe template's procedural stand-in

The Cafe entry points at `model: "/models/cafe.glb"`. Because no GLB exists there,
the existing `Probe` falls back to rendering `cup`. When a real model is dropped
into `public/models/`, the card picks it up with no code change.

The existing 12 sculpture kinds are kept — `HeroScene` depends on four of them
(`rings`, `crystal`, `hull`, `knot`), and the library is the procedural stand-in
for the whole catalog. Future kinds (`plate`, `chip`, `shield`, `car`) arrive with
their templates in later phases.

### 5.5 Studio foundation — `/templates/[id]`

`TemplateStudio.tsx` is currently one 158-line file mixing layout, scene, sidebar,
tabs and customize controls. It is split so Phase 4 can extend without rewriting:

| Component | Responsibility |
|-----------|----------------|
| `studio/StudioCanvas` | 3D stage + HUD hint ("Drag to orbit · scroll to zoom") |
| `studio/StudioPanel` | Glass side panel — category, title, description, price, features |
| `studio/CustomizePanel` | Accent swatches + auto-rotate now; typography and content slots land in Phase 4 |
| `studio/StudioTabs` | Shared preview/customize tab primitive |

Purchase CTA stays an honest, non-faking affordance — a "Demo" badge plus a
waitlist-style action. No fake checkout. Per PRODUCT.md: *"Claims stay
uninventable; catalog items may be labeled demo."*

### 5.6 Discover and Explore surfaces

- **Home (`/`)** keeps its structure (Hero → Featured → StudioStrip → Waitlist).
  Copy evolves toward template-studio positioning; nothing is rebuilt
- **Explore (`/templates`)** category chips swap to the five new categories;
  search adapts to the new fields
- **shadcn `Button`** is adopted for new and replaced components only. No
  big-bang rewrite of existing raw `<button>` markup

### 5.7 Motion

New `components/animations/`:

- `Reveal` — single in-view entrance wrapper, replacing the inline
  `initial/whileInView` props duplicated in `Hero` and `TemplateCard`
- `StaggerContainer` — staggered list entrance at the documented 50ms/item cadence
- `SmoothScroll` — Lenis provider mounted in the root layout

All motion respects `prefers-reduced-motion` and the existing reduced-motion CSS
block in `globals.css`.

### 5.8 Design system reconciliation

Tungsten is authoritative. Three files are updated to match the implemented
reality and to **explicitly permit** glassmorphism and soft gradient scrims:

- `DESIGN.md` — palette rewritten to the warm void (`#070808`/`#0b0d11`, cream
  `#f6f1ea`, gold `#d4af7a`/`#f0d9a8`); the "no gradients, no glassmorphism"
  don'ts are reversed
- `design-tokens.json` — values synced to the same palette
- `tailwind.config.js` — the `accent` scale retuned to the gold family, and the
  cyan `bg.void`/`accent` scales removed so two palettes no longer coexist

The Geist typography specified in `DESIGN.md` remains documented as a future
swap; Inter stays as the working display face so Next 14 is preserved.

## 6. Files touched

**Created**
- `data/templates/index.ts`
- `data/templates/cafe.ts`
- `components/templates/studio/StudioCanvas.tsx`
- `components/templates/studio/StudioPanel.tsx`
- `components/templates/studio/CustomizePanel.tsx`
- `components/templates/studio/StudioTabs.tsx`
- `components/animations/Reveal.tsx`
- `components/animations/StaggerContainer.tsx`
- `components/animations/SmoothScroll.tsx`

**Modified**
- `app/layout.tsx` — remove the invalid `Geist` import (P1); mount `SmoothScroll`
- `types/template.ts` — new category union, labels, `features`/`technologies`, `tags` removed
- `components/3d/sculptures.tsx` — add the `cup` kind
- `components/templates/TemplateCard.tsx` — render `features` chips, use `Reveal`
- `components/templates/TemplateGrid.tsx` — search the new fields
- `components/templates/FeaturedTemplates.tsx` — new categories
- `components/templates/TemplateStudio.tsx` — compose the new studio components
- `app/page.tsx`, `app/templates/page.tsx` — updated imports for the `sections/` rename
- `components/site/{SiteHeader,SiteFooter}.tsx` — copy and nav evolve to the new positioning
- `tailwind.config.js`, `DESIGN.md`, `design-tokens.json` — palette reconciliation
- `PRODUCT.md` — catalog line updated to the business-vertical collection

**Renamed**
- `components/home/` → `components/sections/` (Hero, StudioStrip, Waitlist)

**Deleted**
- `components/AppLayout.tsx` (orphaned, off-palette)
- `data/templates.ts` (superseded by `data/templates/`)

## 7. Verification

Phase 1 is complete when all of the following pass:

1. `npx tsc --noEmit` exits clean (currently fails on P1)
2. `npx next build` succeeds and produces the three routes
3. `/` renders Hero + featured catalog with no console errors
4. `/templates` renders the Cafe card; category chips show all five categories;
   searching "menu" finds the Cafe entry via its features
5. `/templates/cafe` renders the studio: the procedural `cup` sculpture (no GLB
   exists), the glass panel with price and features, and accent swapping that
   recolors the scene live
6. No route imports the deleted `AppLayout` or the old `data/templates.ts`
7. `prefers-reduced-motion` still suppresses entrance animation and Lenis

## 8. Out of scope (later phases)

- Phase 2 — template gallery beyond the single Cafe entry
- Phase 3 — individual template preview pages / interactive demo
- Phase 4 — customization system (typography, content, camera)
- Phase 5 — purchase flow and deploy
- Real GLB assets and photography
- CMS/API-backed catalog (the repository layer is the seam)
- Admin dashboard (rebuilt on tungsten)
- gsap scroll work (installed; unused in Phase 1)

## 9. Risks

| Risk | Mitigation |
|------|------------|
| Deleting `AppLayout.tsx` discards a dashboard shell the admin phase may want | It is recoverable from git history; PRODUCT.md schedules admin for a later phase, and it uses the rejected cyan palette |
| Lenis in the root layout affects every page including 3D-heavy ones | The R3F canvases here are not scroll-driven, so there is no scroll-binding conflict; the provider respects `prefers-reduced-motion` |
| Removing `tags` may be relied on elsewhere | Grep confirms usage is confined to three components — `TemplateCard`, `TemplateGrid` and `TemplateStudio` — all three of which are modified in this phase |
| Two palettes briefly coexist mid-reconciliation | Reconciliation is a single ordered step in the implementation plan, not spread across the phase |
