# Design System: Web3ite — Premium 3D Website-as-a-Service

> A design system blending Apple's cinematic premium, Framer's tool-forward interactivity, Linear's precision dark-mode, and Stripe's trust/premium aesthetic into a clean, scalable SaaS system for React/Next.js.

---

## 1. Visual Theme & Atmosphere

**Web3ite** is a premium SaaS platform where customers choose 3D website templates, preview them interactively, customize branding, purchase, and receive a fully deployed live website. The design must communicate:

- **Premium craft** — Every pixel feels deliberate, like Apple product marketing
- **Tool confidence** — The platform is powerful, precise, and transparent, like Linear/Framer
- **Trust & polish** — Financial-grade reliability, like Stripe
- **3D-first** — The product *is* 3D; the UI showcases it without competing

**Core metaphor**: A dark-room gallery where 3D templates float as luminous objects. The UI recedes into near-invisibility — subtle, precise, high-contrast — letting the 3D content star.

**Color posture**: Near-black canvas (`#050608`), cool neutrals, single brand accent (electric cyan `#00d4ff`). No gradients, no decorative color. Accent reserved *only* for interactive elements.

**Typography**: Geist Variable (display) + Geist Mono (code/technical) — geometric, compressed tracking at display sizes, optical weight restraint.

---

## 2. Color Palette & Roles

### Primary Surfaces
| Token | Value | Role |
|-------|-------|------|
| `--bg-void` | `#050608` | Page background, deepest canvas |
| `--bg-panel` | `#0b0d10` | Panels, sidebars, elevated containers |
| `--bg-card` | `#111317` | Cards, modals, interactive surfaces |
| `--bg-hover` | `#181b20` | Hover states on cards/rows |
| `--bg-input` | `#0e1014` | Input backgrounds |

### Text & Content
| Token | Value | Role |
|-------|-------|------|
| `--text-primary` | `#fafafa` | Headlines, high-emphasis text |
| `--text-secondary` | `#b8bcc8` | Body text, descriptions |
| `--text-muted` | `#7a808d` | Metadata, timestamps, placeholders |
| `--text-disabled` | `#4a4f5a` | Disabled states, subtle labels |

### Brand & Interactive
| Token | Value | Role |
|-------|-------|------|
| `--accent` | `#00d4ff` | Primary CTA, links, focus rings, active states |
| `--accent-hover` | `#00e5ff` | Hover on accent elements |
| `--accent-muted` | `rgba(0, 212, 255, 0.12)` | Accent backgrounds, selection rings |
| `--accent-ring` | `rgba(0, 212, 255, 0.35)` | Focus rings, glow shadows |

### Semantic
| Token | Value | Role |
|-------|-------|------|
| `--success` | `#10b981` | Success badges, deployed status |
| `--success-muted` | `rgba(16, 185, 129, 0.15)` | Success backgrounds |
| `--warning` | `#f59e0b` | Pending, review states |
| `--warning-muted` | `rgba(245, 158, 11, 0.15)` | Warning backgrounds |
| `--danger` | `#ef4444` | Errors, destructive actions |
| `--danger-muted` | `rgba(239, 68, 68, 0.15)` | Error backgrounds |

### Borders & Dividers
| Token | Value | Role |
|-------|-------|------|
| `--border-subtle` | `rgba(255, 255, 255, 0.04)` | Default card/container borders |
| `--border-standard` | `rgba(255, 255, 255, 0.08)` | Input borders, stronger separation |
| `--border-strong` | `rgba(255, 255, 255, 0.14)` | Active/selected borders |
| `--border-accent` | `rgba(0, 212, 255, 0.4)` | Accent-focused borders |

### Shadows & Depth
| Token | Value | Role |
|-------|-------|------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.4)` | Micro-elevation (toolbar, badges) |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)` | Cards, dropdowns |
| `--shadow-lg` | `0 12px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)` | Modals, popovers, previews |
| `--shadow-xl` | `0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)` | Full-screen preview, major overlays |
| `--shadow-accent` | `0 0 0 1px rgba(0,212,255,0.35), 0 8px 32px rgba(0,212,255,0.15)` | Accent-focused elevation |

---

## 3. Typography Rules

### Font Families
- **Display/UI**: `Geist Variable` (weights 300–700) — geometric, compressed, engineered
- **Mono**: `Geist Mono Variable` — code, technical labels, IDs
- **Fallback**: `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Features |
|------|------|------|--------|-------------|----------------|----------|
| **Display Hero** | Geist Variable | 64px (4rem) | 300 | 1.02 | -0.04em | — |
| **Display Large** | Geist Variable | 48px (3rem) | 300 | 1.05 | -0.03em | — |
| **Display Medium** | Geist Variable | 36px (2.25rem) | 400 | 1.10 | -0.02em | — |
| **Heading 1** | Geist Variable | 30px (1.875rem) | 400 | 1.15 | -0.015em | — |
| **Heading 2** | Geist Variable | 24px (1.5rem) | 500 | 1.20 | -0.01em | — |
| **Heading 3** | Geist Variable | 20px (1.25rem) | 500 | 1.30 | normal | — |
| **Body Large** | Geist Variable | 18px (1.125rem) | 400 | 1.60 | normal | — |
| **Body** | Geist Variable | 16px (1rem) | 400 | 1.55 | normal | — |
| **Body Small** | Geist Variable | 14px (0.875rem) | 400 | 1.50 | normal | — |
| **Caption** | Geist Variable | 13px (0.8125rem) | 400 | 1.45 | normal | — |
| **Label** | Geist Variable | 12px (0.75rem) | 500 | 1.40 | 0.01em | uppercase |
| **Micro** | Geist Variable | 11px (0.6875rem) | 400 | 1.35 | 0.02em | uppercase |
| **Button** | Geist Variable | 14px (0.875rem) | 500 | 1.00 | normal | — |
| **Button Large** | Geist Variable | 16px (1rem) | 500 | 1.00 | normal | — |
| **Code** | Geist Mono Variable | 13px (0.8125rem) | 400 | 1.65 | normal | — |
| **Code Label** | Geist Mono Variable | 11px (0.6875rem) | 500 | 1.40 | 0.02em | uppercase |

### Principles
- **Weight 300 at display sizes** — whisper-weight authority (Apple/Stripe influence)
- **Weight 400–500 for UI** — never bold (700) in primary font
- **Negative tracking at display sizes only** — progressive relaxation downward
- **Uppercase + tracking for labels/micro** — technical precision (Linear influence)

---

## 4. Spacing & Layout

### Base Unit: 4px
Scale: `1, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`

### Container Widths
- **Narrow**: 640px — forms, modals, narrow content
- **Standard**: 1040px — default content width
- **Wide**: 1280px — dashboard, gallery grids
- **Full**: 100% — immersive 3D preview, hero sections

### Grid
- **4-column** on mobile (< 640px)
- **8-column** on tablet (640–1024px)
- **12-column** on desktop (> 1024px)
- **Gutter**: 24px (desktop), 16px (tablet), 12px (mobile)

### Section Rhythm
- **Compact**: 32px — tight groups
- **Default**: 64px — standard section spacing
- **Generous**: 96px — major section breaks
- **Hero**: 128px+ — immersive sections

---

## 5. Border Radius Scale

| Token | Value | Use |
|-------|-------|-----|
| `--radius-none` | 0 | Sharp edges, code blocks |
| `--radius-xs` | 4px | Badges, chips, small buttons |
| `--radius-sm` | 6px | Buttons, inputs, small cards |
| `--radius-md` | 10px | Standard cards, panels, dropdowns |
| `--radius-lg` | 16px | Featured cards, modals, preview containers |
| `--radius-xl` | 24px | Hero elements, large immersive cards |
| `--radius-full` | 9999px | Pills, avatar, progress rings |

---

## 6. Component Stylings

### Buttons

#### Primary (CTA)
```css
background: var(--accent);
color: var(--bg-void);
padding: 12px 24px;
border-radius: var(--radius-sm);
font: var(--button-large);
border: none;
transition: background 150ms ease, transform 100ms ease;
```
- Hover: `background: var(--accent-hover)`
- Active: `transform: scale(0.98)`
- Focus: `box-shadow: var(--shadow-accent)`

#### Secondary (Ghost)
```css
background: transparent;
color: var(--text-primary);
padding: 12px 24px;
border-radius: var(--radius-sm);
border: 1px solid var(--border-standard);
font: var(--button-large);
transition: background 150ms ease, border-color 150ms ease;
```
- Hover: `background: var(--bg-hover); border-color: var(--border-strong)`
- Focus: `box-shadow: var(--shadow-accent)`

#### Subtle (Toolbar)
```css
background: transparent;
color: var(--text-muted);
padding: 8px 12px;
border-radius: var(--radius-xs);
border: 1px solid transparent;
font: var(--button);
transition: color 150ms ease, background 150ms ease;
```
- Hover: `color: var(--text-primary); background: var(--bg-hover)`

#### Destructive
```css
background: transparent;
color: var(--danger);
padding: 12px 24px;
border-radius: var(--radius-sm);
border: 1px solid var(--danger);
font: var(--button-large);
```
- Hover: `background: var(--danger-muted)`

### Cards & Containers

#### Standard Card
```css
background: var(--bg-card);
border: 1px solid var(--border-subtle);
border-radius: var(--radius-md);
box-shadow: var(--shadow-md);
transition: border-color 150ms ease, box-shadow 150ms ease, transform 100ms ease;
```
- Hover: `border-color: var(--border-standard); box-shadow: var(--shadow-lg); transform: translateY(-2px)`

#### Preview Card (Template Gallery)
```css
background: var(--bg-panel);
border: 1px solid var(--border-subtle);
border-radius: var(--radius-lg);
overflow: hidden;
position: relative;
```
- 3D canvas fills top 60%, metadata bottom 40%
- Hover: subtle glow ring `box-shadow: var(--shadow-accent)`

#### Elevated Panel (Modals, Sidebars)
```css
background: var(--bg-panel);
border: 1px solid var(--border-standard);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-xl);
```

### Inputs & Forms

#### Text Input
```css
background: var(--bg-input);
color: var(--text-primary);
border: 1px solid var(--border-standard);
border-radius: var(--radius-sm);
padding: 12px 16px;
font: var(--body);
transition: border-color 150ms ease, box-shadow 150ms ease;
```
- Placeholder: `color: var(--text-disabled)`
- Focus: `border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-muted)`
- Error: `border-color: var(--danger); box-shadow: 0 0 0 3px var(--danger-muted)`

#### Select / Dropdown
Same as input, with chevron icon (16px, `var(--text-muted)`)

#### Checkbox / Radio
```css
width: 20px; height: 20px;
border: 1px solid var(--border-standard);
border-radius: var(--radius-xs);
background: var(--bg-input);
accent-color: var(--accent);
```

#### Toggle Switch
```css
width: 44px; height: 24px;
background: var(--border-standard);
border-radius: var(--radius-full);
position: relative;
transition: background 200ms ease;
```
- Thumb: `20px` circle, `var(--text-primary)`, `box-shadow: var(--shadow-sm)`
- Checked: `background: var(--accent)`

### Badges & Pills

#### Status Badge
```css
padding: 4px 10px;
border-radius: var(--radius-full);
font: var(--label);
border: 1px solid transparent;
```
- **Success**: `background: var(--success-muted); color: var(--success); border-color: rgba(16,185,129,0.3)`
- **Warning**: `background: var(--warning-muted); color: var(--warning); border-color: rgba(245,158,11,0.3)`
- **Danger**: `background: var(--danger-muted); color: var(--danger); border-color: rgba(239,68,68,0.3)`
- **Neutral**: `background: var(--bg-hover); color: var(--text-secondary); border-color: var(--border-subtle)`

#### Category Pill
```css
background: var(--bg-hover);
color: var(--text-secondary);
padding: 4px 12px;
border-radius: var(--radius-full);
font: var(--caption);
border: 1px solid var(--border-subtle);
transition: all 150ms ease;
```
- Hover/Active: `background: var(--accent-muted); color: var(--accent); border-color: var(--accent)`

### Navigation

#### Top Nav (Marketing)
```css
height: 64px;
background: rgba(5, 6, 8, 0.85);
backdrop-filter: saturate(180%) blur(20px);
border-bottom: 1px solid var(--border-subtle);
position: sticky; top: 0; z-index: 100;
```
- Logo: 28px, weight 500, `var(--text-primary)`
- Links: `var(--body-small)`, `var(--text-secondary)`, gap 32px
- Hover: `color: var(--text-primary)`
- CTA: Primary button

#### App Shell Nav (Dashboard)
```css
width: 260px;
height: 100vh;
background: var(--bg-panel);
border-right: 1px solid var(--border-subtle);
padding: 24px 16px;
display: flex; flex-direction: column;
```
- Nav items: `var(--body-small)`, `var(--text-secondary)`, padding `10px 12px`, `var(--radius-sm)`
- Active: `background: var(--accent-muted); color: var(--accent)`
- Hover: `background: var(--bg-hover); color: var(--text-primary)`

### 3D Canvas Container
```css
background: var(--bg-void);
border-radius: var(--radius-lg);
overflow: hidden;
position: relative;
```
- Loading state: centered spinner, `var(--accent)`, 40px
- Error state: inline message, `var(--danger)`, retry button
- Fullscreen button: top-right, subtle button, `var(--radius-sm)`

---

## 7. Motion & Interaction

### Timing Functions
- **Fast**: `150ms ease-out` — hovers, fades, color changes
- **Standard**: `250ms ease-out` — panel slides, modal entry
- **Slow**: `400ms ease-out` — page transitions, major state changes
- **Spring**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — playful accents, success states

### Motion Tokens
| Token | Value | Use |
|-------|-------|-----|
| `--duration-fast` | 150ms | Micro-interactions |
| `--duration-standard` | 250ms | Default transitions |
| `--duration-slow` | 400ms | Major transitions |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Standard easing |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Delightful accents |

### Motion Principles
- **Respect `prefers-reduced-motion`** — disable non-essential animation
- **No animation on layout-critical paths** — loading, navigation, form submission
- **Staggered entrance** — 50ms delay per item in lists/grids
- **Meaningful motion** — spatial continuity (sidebar slides from left, modal scales from center)

### Key Interactions
- **3D Preview Orbit**: Click-drag to orbit, scroll to zoom, right-click to pan
- **Template Hover**: Subtle 3D preview animation (auto-rotate 2°/sec)
- **Color Picker**: Real-time 3D material update
- **Command Palette**: `Cmd+K` opens, fuzzy search, keyboard navigation

---

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Columns | Key Changes |
|------|-------|---------|-------------|
| Mobile | < 640px | 4 | Single column, stacked cards, bottom sheet modals |
| Tablet | 640–1024px | 8 | 2-col grids, collapsible sidebar, reduced padding |
| Desktop | 1024–1440px | 12 | Full layout, persistent sidebar |
| Wide | > 1440px | 12 | Max-width containers, generous margins |

### Touch Targets
- Minimum 44×44px on all interactive elements
- Buttons: 48px height minimum
- Nav items: 48px height
- Form controls: 44px height

### Collapse Strategy
- **Sidebar**: Desktop persistent → Tablet collapsible rail → Mobile bottom sheet
- **Template Grid**: 4-col → 2-col → 1-col
- **Preview**: Side-by-side (config + 3D) → Stacked (tabs) on mobile
- **Typography**: Display Hero 64px → 48px → 36px

---

## 9. Accessibility

- **Contrast**: All text ≥ 4.5:1 (AA), large text ≥ 3:1
- **Focus Visible**: 3px accent ring on all interactive elements
- **Keyboard**: Full navigation, `Tab` order logical, `Esc` closes modals
- **Screen Readers**: Semantic HTML, ARIA labels on icon buttons, live regions for status
- **Reduced Motion**: Disable auto-rotate, transitions, parallax
- **Color Independence**: Never color-only for status (icons + text + color)

---

## 10. Component Inventory (React/Next.js Ready)

### Atoms
- `Button` (primary, secondary, subtle, destructive, ghost, loading)
- `Input` (text, email, password, search, textarea)
- `Select` (single, multi, searchable)
- `Checkbox` / `Radio` / `Toggle`
- `Label` / `Caption` / `Heading` (1–3)
- `Badge` (status, category, count)
- `Avatar` (image, fallback, status indicator)
- `Icon` (lucide-react, 16/20/24px)
- `Spinner` / `Skeleton` / `Progress`

### Molecules
- `Card` (standard, preview, featured, interactive)
- `Modal` (confirm, form, full-screen, drawer)
- `Dropdown` / `Popover` / `Tooltip`
- `Tabs` / `SegmentedControl`
- `Table` / `DataGrid` (virtualized)
- `FormField` (label + input + error + help)
- `ColorPicker` (swatches + custom + 3D preview sync)
- `TemplateCard` (thumbnail, title, category, price, preview trigger)
- `PriceDisplay` (monthly/annual, badge, features)
- `Stepper` (purchase flow, onboarding)

### Organisms
- `Header` (marketing, app shell)
- `Sidebar` (navigation, filters, properties)
- `TemplateGallery` (grid, filters, search, infinite scroll)
- `ThreeDPreview` (canvas, controls, fullscreen, share)
- `CustomizationPanel` (brand, content, 3D settings, live sync)
- `CheckoutForm` (stripe elements, summary, confirmation)
- `Dashboard` (project list, analytics, settings)
- `CommandPalette` (global search, actions, shortcuts)

---

## 11. Key Platform Surfaces

| Surface | Archetype | Primary Goal |
|---------|-----------|--------------|
| **Landing Page** | Decide/Learn | Convert visitors → template exploration |
| **Template Gallery** | Explore | Browse, filter, compare 3D templates |
| **Template Preview** | Experience | Immersive 3D interaction, "try before buy" |
| **Customization Editor** | Configure | Brand, content, 3D settings → live preview |
| **Checkout** | Persuade | Purchase completion, trust reinforcement |
| **Dashboard** | Operate | Manage sites, deployments, analytics, billing |

---

## 12. Implementation Notes for React/Next.js

### CSS Strategy
- **CSS Variables** for all tokens (defined in `:root`, overrideable via `[data-theme]`)
- **Tailwind CSS v4** with `@theme` directive mapping tokens
- **CSS Modules** for component-scoped styles
- **No CSS-in-JS** — zero runtime overhead

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist+Variable:wght@300;400;500;600;700&family=Geist+Mono+Variable:wght@400;500;600&display=swap" rel="stylesheet">
```

### 3D Integration
- **React Three Fiber** + **Drei** for 3D canvas components
- **GLTF/GLB** templates loaded via `useGLTF`
- **Suspense** boundaries for async model loading
- **Canvas pooling** for gallery previews (reuse contexts)

### State Management
- **Zustand** for global UI state (sidebar, theme, command palette)
- **React Hook Form** + **Zod** for forms
- **TanStack Query** for server state (templates, user, deployments)
- **LocalStorage** for editor draft persistence

### Performance
- **Next.js App Router** with RSC for marketing pages
- **Dynamic imports** for heavy 3D components
- **Image optimization** via `next/image` for thumbnails
- **Service Worker** for offline template caching

---

## 13. Do's and Don'ts

### Do
- Use `--bg-void` as the true background — never lighter
- Reserve `--accent` *exclusively* for interactive elements
- Keep display text at weight 300 with negative tracking
- Use `var(--shadow-accent)` for focus/selection only
- Let 3D content be the hero — UI is the frame
- Stagger grid entrances (50ms/item)
- Use `Geist Mono` for any technical data (IDs, prices, code)

### Don't
- Don't use pure black (`#000000`) — `--bg-void` has blue depth
- Don't introduce secondary accent colors
- Don't use weight 600+ on Geist Variable display text
- Don't use positive letter-spacing on headlines
- Don't add decorative gradients, glows, or glassmorphism
- Don't use borders heavier than `var(--border-standard)`
- Don't animate layout properties (width, height, top, left)
- Don't show 3D canvas without loading/error states

---

## 14. Design Tokens Export (JSON)

```json
{
  "color": {
    "bg": { "void": "#050608", "panel": "#0b0d10", "card": "#111317", "hover": "#181b20", "input": "#0e1014" },
    "text": { "primary": "#fafafa", "secondary": "#b8bcc8", "muted": "#7a808d", "disabled": "#4a4f5a" },
    "accent": { "primary": "#00d4ff", "hover": "#00e5ff", "muted": "rgba(0,212,255,0.12)", "ring": "rgba(0,212,255,0.35)" },
    "semantic": { "success": "#10b981", "warning": "#f59e0b", "danger": "#ef4444" },
    "border": { "subtle": "rgba(255,255,255,0.04)", "standard": "rgba(255,255,255,0.08)", "strong": "rgba(255,255,255,0.14)", "accent": "rgba(0,212,255,0.4)" }
  },
  "shadow": { "sm": "0 1px 2px rgba(0,0,0,0.4)", "md": "0 4px 12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)", "lg": "0 12px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)", "xl": "0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)", "accent": "0 0 0 1px rgba(0,212,255,0.35), 0 8px 32px rgba(0,212,255,0.15)" },
  "radius": { "none": "0", "xs": "4px", "sm": "6px", "md": "10px", "lg": "16px", "xl": "24px", "full": "9999px" },
  "spacing": { "base": "4px", "scale": [1,2,3,4,6,8,12,16,20,24,32,40,48,64,80,96,128] },
  "typography": {
    "fontFamilies": { "display": "Geist Variable", "mono": "Geist Mono Variable" },
    "sizes": { "hero": "64px", "displayLarge": "48px", "displayMedium": "36px", "h1": "30px", "h2": "24px", "h3": "20px", "bodyLarge": "18px", "body": "16px", "bodySmall": "14px", "caption": "13px", "label": "12px", "micro": "11px", "button": "14px", "buttonLarge": "16px", "code": "13px" },
    "weights": { "light": 300, "regular": 400, "medium": 500, "semibold": 600 },
    "lineHeights": { "tight": 1.02, "snug": 1.1, "normal": 1.3, "relaxed": 1.55, "loose": 1.65 },
    "letterSpacings": { "tight": "-0.04em", "snug": "-0.02em", "normal": "0", "wide": "0.01em", "wider": "0.02em" }
  },
  "motion": { "durations": { "fast": "150ms", "standard": "250ms", "slow": "400ms" }, "easings": { "out": "cubic-bezier(0.16, 1, 0.3, 1)", "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)" } },
  "breakpoints": { "mobile": "640px", "tablet": "1024px", "desktop": "1440px" }
}
```