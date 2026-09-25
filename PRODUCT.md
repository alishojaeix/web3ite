# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Founders, agencies, and independent designers who need a live 3D website without assembling a WebGL stack. They arrive to choose a finished template, put their brand on it, and launch.

## Product Purpose

Web3ite is a Website-as-a-Service for premium 3D sites. Visitors pick a template, customize it, and launch a production 3D website. Success is: the first screen proves the product is 3D, templates are browsable as products, and adding or replacing a template does not require rewriting UI.

## Positioning

The catalog is the product. Each template is a 3D object you can inspect, not a screenshot in a card grid. Templates are data (id, model, preview, price, tags) so they can later arrive from a database, CMS, or API.

## Operating Context

Next.js 14 App Router, Tailwind, TypeScript, React Three Fiber, Drei, Three.js. Marketing site today; admin panel later. Demo templates are synthetic until real GLB and photography replace them.

## Capabilities and Constraints

- Confirmed: browse templates, preview in 3D, customize entry, featured catalog on the homepage.
- Architecture must accept `.glb` / `.gltf`, interactive scenes, camera, lighting, animation.
- Categories required: Agency, Portfolio, Product, Architecture, Fashion, Gaming, AI, Automotive.
- Not built yet: payments, real CMS, deploy pipeline, admin UI.
- Undecided: live pricing, licensing, deployment provider.

## Brand Commitments

- Name: Web3ite.
- Reference feeling (do not copy): motionsites.ai — premium SaaS, cinematic 3D, high-end template showcase.
- Pinned by the brief: dark futuristic, glass HUD over 3D, motion, interactive hero that says “Create, customize and launch premium 3D websites.”
- Homepage copy in this pass is English. Previous mixed Persian/RTL is not treated as a locked brand commitment.

## Evidence on Hand

- No real customer logos, testimonials, uptime claims, or traffic numbers. Do not invent them.
- No production GLB files yet. Procedural sculptures stand in until `/public/models` is filled.
- Preview image paths exist in data so files can be dropped in later.

## Product Principles

1. The 3D scene is the proof. UI never substitutes a gradient for the product.
2. Templates are data, not components.
3. Claims stay uninventable; catalog items may be labeled demo.
4. Later admin/CMS should swap the repository, not the cards.

## Accessibility & Inclusion

Respect `prefers-reduced-motion` by pausing WebGL loops and offering a still poster. Keep text contrast on dark glass. Keyboard focus on all controls.
