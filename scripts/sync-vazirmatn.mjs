#!/usr/bin/env node
/**
 * Prepares the Vazirmatn webfont payload for `next/font/local`.
 *
 * Vazirmatn is the single Persian face for the whole product. This script scans
 * `public/font` for the real `.woff2` files that ship with the project and
 * builds the thin `lib/fonts/vazirmatn.ts` module that `next/font/local`
 * consumes. It never invents a weight: only files that actually exist and pass
 * a woff2 sanity check are wired, and each one is mapped to the CSS weight its
 * filename declares (Regular=400, Medium=500, SemiBold=600, Bold=700, …).
 *
 * Why a generated module instead of a hand-written one: Next 14 carries every
 * `src` entry into the build graph, so a missing file breaks `next build`
 * outright. Generating the module means the project compiles while files are
 * being dropped in, and each added weight is picked up on the next `dev`/`build`
 * run without editing TypeScript by hand.
 *
 * Runs automatically as `predev`, `prebuild`, `pretypecheck` and `pretest`.
 * Safe and idempotent to run by hand: `node scripts/sync-vazirmatn.mjs`.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const fontDir = join(projectRoot, "public", "font");
const targetFile = join(projectRoot, "lib", "fonts", "vazirmatn.ts");

/**
 * Vazirmatn weight suffixes → CSS font-weight. These are the weights the
 * upstream family actually ships; a filename whose suffix is not listed here
 * (a variable `[wght]` build, an unexpected cut) is skipped rather than
 * guessed at.
 */
const WEIGHT_BY_SUFFIX = {
  thin: "100",
  extralight: "200",
  light: "300",
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

const MAGIC = "wOF2";

/** Derive the CSS weight from a Vazirmatn file name, or null if unknown. */
function weightFor(file) {
  const match = /vazirmatn[-_ ]?([a-z]+)/i.exec(file);
  if (!match) return null;
  return WEIGHT_BY_SUFFIX[match[1].toLowerCase()] ?? null;
}

/** Validate a candidate file: woff2 header + plausible size. */
function inspect(file) {
  const weight = weightFor(file);
  if (!weight) return { file, weight: null, usable: false, reason: "unknown weight" };

  const path = join(fontDir, file);
  const head = readFileSync(path).subarray(0, 4).toString("latin1");
  const size = statSync(path).size;
  if (head !== MAGIC) return { file, weight, usable: false, reason: "not a woff2 file", size };
  if (size < 20_000) return { file, weight, usable: false, reason: "suspiciously small", size };
  return { file, weight, usable: true, size };
}

function discover() {
  if (!existsSync(fontDir)) return [];
  return readdirSync(fontDir)
    .filter((name) => name.toLowerCase().endsWith(".woff2"))
    .map(inspect)
    // One cut per weight: if two files claim the same weight, keep the first.
    .filter((result, index, all) => all.findIndex((r) => r.weight === result.weight) === index);
}

function buildModule(usable) {
  if (usable.length === 0) {
    // `next/font/local` rejects an empty `src`, so emit an inert stand-in that
    // keeps the same shape. Persian text falls back to the root stack until a
    // weight lands; nothing else changes.
    return `/* eslint-disable */
/**
 * GENERATED FILE — do not edit by hand.
 * Regenerate with \`node scripts/sync-vazirmatn.mjs\` (also runs before
 * \`dev\`, \`build\`, \`typecheck\` and \`test\`).
 *
 * STATUS: no Vazirmatn woff2 files found in public/font yet.
 * The class below is intentionally inert; add the font files and rerun the
 * sync script to activate the real face.
 */
export const vazirmatn = { variable: "" };
`;
  }

  const ordered = [...usable].sort((a, b) => Number(a.weight) - Number(b.weight));
  const src = ordered
    .map(
      ({ file, weight }) =>
        `    { path: "../../public/font/${file}", weight: "${weight}", style: "normal" },`
    )
    .join("\n");

  return `/* eslint-disable */
/**
 * GENERATED FILE — do not edit by hand.
 * Regenerate with \`node scripts/sync-vazirmatn.mjs\` (also runs before
 * \`dev\`, \`build\`, \`typecheck\` and \`test\`).
 *
 * Vazirmatn — the single Persian face for the whole product. Only weights that
 * physically exist in public/font are declared below.
 */
import localFont from "next/font/local";

export const vazirmatn = localFont({
  src: [
${src}
  ],
  variable: "--font-vazirmatn",
  display: "swap",
  fallback: ["Tahoma", "Arial", "system-ui", "sans-serif"],
  adjustFontFallback: false,
  preload: true,
});
`;
}

function main() {
  mkdirSync(fontDir, { recursive: true });
  mkdirSync(dirname(targetFile), { recursive: true });

  const results = discover();
  const usable = results.filter((result) => result.usable);
  const rejected = results.filter((result) => !result.usable);

  const output = buildModule(usable);
  const previous = existsSync(targetFile) ? readFileSync(targetFile, "utf8") : "";
  if (previous !== output) writeFileSync(targetFile, output, "utf8");

  const weights = [...usable]
    .sort((a, b) => Number(a.weight) - Number(b.weight))
    .map((result) => result.weight)
    .join(", ");
  const lines = [
    `[vazirmatn] ${usable.length} weight(s) ready${weights ? ` (${weights})` : ""}`,
  ];
  for (const result of rejected) {
    const detail = result.size ? `, ${result.reason}, ${result.size} bytes` : `, ${result.reason}`;
    lines.push(`[vazirmatn] skipped: public/font/${result.file}${detail}`);
  }

  if (usable.length === 0) {
    console.warn(lines.join("\n"));
    console.warn(
      "[vazirmatn] The app will fall back to the system Persian stack until the woff2 files are present in public/font."
    );
    return;
  }
  console.log(lines.join("\n"));
}

main();
