# Vazirmatn webfont payload

`app/layout.tsx` loads Vazirmatn through `next/font/local` from the generated
module `lib/fonts/vazirmatn.ts`, which points at this folder (`public/font`).

Vazirmatn is the single Persian face for the entire product. Drop the official
`.woff2` files from the Vazirmatn release here and they are wired automatically.

## Naming

`scripts/sync-vazirmatn.mjs` derives each file's CSS weight from its name, so
name the files after the cut they contain:

| File                        | CSS weight |
| --------------------------- | ---------- |
| `Vazirmatn-Thin.woff2`      | 100        |
| `Vazirmatn-ExtraLight.woff2`| 200        |
| `Vazirmatn-Light.woff2`     | 300        |
| `Vazirmatn-Regular.woff2`   | 400        |
| `Vazirmatn-Medium.woff2`    | 500        |
| `Vazirmatn-SemiBold.woff2`  | 600        |
| `Vazirmatn-Bold.woff2`      | 700        |
| `Vazirmatn-ExtraBold.woff2` | 800        |
| `Vazirmatn-Black.woff2`     | 900        |

Only the files that are actually present are wired; a weight with no file is
simply not declared. A variable `Vazirmatn[wght].woff2` is ignored (its weight
cannot be inferred from the name) — prefer the static per-weight cuts.

## Wiring

`node scripts/sync-vazirmatn.mjs` validates each file (woff2 header + size) and
regenerates `lib/fonts/vazirmatn.ts` containing only the weights that exist. The
script runs automatically via `predev`, `prebuild`, `pretypecheck` and `pretest`.
Until at least one weight is present, the site renders with the system Persian
stack (`Segoe UI`, Tahoma, …) and the build stays green.
