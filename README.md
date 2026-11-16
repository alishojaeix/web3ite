# Web3ite

A catalogue of 18 industry-specific website templates. Each entry is a complete,
independent demonstration website with its own visual identity, content,
sections and responsive layout. The storefront adds a lightweight membership and
purchase flow.

This is a design and engineering demonstration. Every business, menu, address,
price and claim inside a template website is fictional. Read `/legal` for the
demo and age policy.

## Requirements

- Node.js 20 or newer
- npm

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build, includes type checking
npm start       # serve the production build
npx tsc --noEmit
```

No ESLint configuration is committed; `next build` performs type validation and the
project is checked with `npx tsc --noEmit`.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage, curated template selection and 3D showroom |
| `/templates` | Full catalogue with category filtering and search |
| `/templates/[id]` | Template detail, 3D studio, live website link and purchase CTA |
| `/sites/[id]` | The 17 hand-built template websites (statically generated) |
| `/previews/aldane-voss` | Self-contained static Aldane & Voss catalogue, age-gated |
| `/register`, `/login`, `/account` | Membership and purchase history |
| `/checkout/[id]`, `/checkout/success` | Checkout summary and verified Stripe result |
| `/age-gate` | 18+ confirmation for tobacco demonstrations |
| `/legal` | Demo, age, data and payment policy |
| `/api/og?site=[id]` | Per-template Open Graph image |

## Architecture

- `data/templates/` — catalogue records (price, features, category, theme).
- `components/sites/<id>/` — the 17 hand-built template websites, each with its
  own sections, artwork and scoped stylesheet.
- `lib/sites/data.ts` — editorial content for the shared site engine.
- `lib/sites/skins.ts` — per-site palettes, type system and layout language for
  the engine.
- `components/sites/engine/` — shared website renderer retained for the legacy
  `/sites/aldane-voss` entry and any future template sites.
- `components/sites/noir-cafe/` — the original hand-built café website.
- `components/3d/` — lazy-loaded WebGL showroom and studio scenes. WebGL is an
  enhancement; every template website works without it.
- `lib/server/` — dependency-free JSON persistence, scrypt password hashing,
  signed sessions, Stripe REST helpers and rate limiting.
- `app/sites/site-engine.css` — scoped website styles, mobile-first and
  reduced-motion aware.

## Environment variables

Copy `.env.example` to `.env.local` and fill in only what you need.

| Variable | Required | Purpose |
| --- | --- | --- |
| `AUTH_SECRET` | Production | At least 32 characters. Signs the HttpOnly session cookie. Without it, account endpoints return `503` in production. |
| `WEB3ITE_DATA_DIR` | Production | Writable directory for `users.json`, `purchases.json`, `inquiries.json` and `waitlist.json`. Defaults to `data/runtime` locally. |
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical origin used for Stripe success/cancel URLs, for example `https://web3ite.vercel.app`. |
| `STRIPE_SECRET_KEY` | Optional | Enables Stripe Checkout. Without it the checkout page shows an honest disabled state and no payment can be taken. |
| `STRIPE_WEBHOOK_SECRET` | Optional | Verifies `checkout.session.completed` webhook signatures. |
| `SITE_INBOX_WEBHOOK_URL` | Optional | If set, template contact forms forward inquiries to this webhook instead of local JSON storage. |

Never commit `.env.local` or the contents of `data/runtime`.

## Deployment blockers and limits

- **Serverless filesystems are read-only.** The JSON store needs a writable
  volume (`WEB3ITE_DATA_DIR`) or a real database before accounts, purchase
  history or form submissions work in production. Write failures are surfaced to
  the visitor as errors; they are never reported as success.
- **Stripe is not configured in this working tree.** The checkout summary,
  disabled fallback, success-page verification and webhook signature handling
  are implemented, but no live payment has been tested. Set both Stripe
  variables and register the webhook before enabling the CTA.
- **Auth secret is not configured.** Local development falls back to a fixed
  development secret. Production requires `AUTH_SECRET` of at least 32
  characters.
- **Purchase fulfilment is manual.** A verified purchase appears in the member
  dashboard, but source files are not delivered automatically.
- **Age confirmation is an acknowledgement, not identity verification.** It is a
  first-party cookie lasting 30 days. Tobacco websites are `noindex`, excluded
  from the sitemap and excluded from the homepage showroom.
- **The Aldane static catalogue uses two version-pinned CDN scripts**
  (Three.js r128 and Lenis 1.1.13) with SRI where the CDN supports it. If the
  CDN is unavailable, the catalogue's 2D content and age gate still work.

## Demo data

`data/runtime/` is intentionally ignored by git. It is created on first write.
To reset local accounts, purchases, inquiries and waitlist entries, stop the
server and delete that directory.
