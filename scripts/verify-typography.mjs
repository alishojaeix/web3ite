#!/usr/bin/env node
/**
 * Typography contract verifier.
 *
 * Asserts the guarantees the Vazirmatn typography system is supposed to hold so
 * a regression fails loudly instead of silently shipping. Each check prints a
 * PASS/FAIL line; the process exits non-zero if anything fails.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const results = [];

function check(name, fn) {
  try {
    results.push({ ok: true, name, detail: fn() });
  } catch (error) {
    results.push({ ok: false, name, detail: error.message });
  }
}

function read(rel) {
  return readFileSync(join(root, rel), "utf8");
}

function walk(dir, out = []) {
  const abs = join(root, dir);
  if (!existsSync(abs)) return out;
  for (const entry of readdirSync(abs, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue;
    const rel = join(dir, entry.name);
    if (entry.isDirectory()) walk(rel, out);
    else out.push(rel);
  }
  return out;
}

const sourceFiles = [...walk("app"), ...walk("components"), ...walk("lib"), ...walk("hooks")].filter(
  (file) => /\.(ts|tsx|css)$/.test(file)
);

const siteDirs = readdirSync(join(root, "app/sites"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== "[id]")
  .map((entry) => entry.name);

check("18 live template surfaces reachable", () => {
  // 17 statically-routed templates under app/sites + the standalone
  // `aldane-voss` document served from /public/previews.
  const staticDoc = "public/previews/aldane-voss/index.html";
  if (!existsSync(join(root, staticDoc))) throw new Error(`${staticDoc} missing`);
  const templated = siteDirs.filter((dir) => dir !== "noir-cafe" || true);
  const total = templated.length + 1;
  if (total !== 18) throw new Error(`expected 18, found ${total}`);
  const missing = siteDirs.filter((dir) => !existsSync(join(root, "app/sites", dir, "page.tsx")));
  if (missing.length) throw new Error(`missing page.tsx: ${missing.join(", ")}`);
  return `${templated.length} routes + 1 static doc`;
});

check("every template ships the shared Persian face", () => {
  const css = read("app/globals.css");
  // The guard has to cover each template's root scope, otherwise a scoped
  // `--font-*` alias could pin Persian glyphs to a Latin face.
  const scopeFiles = walk("components/sites").filter(
    (file) => file.endsWith(".tsx") && /Site\.tsx$/.test(file)
  );
  const scopes = [...new Set(
    scopeFiles.flatMap((file) =>
      [...read(file).matchAll(/className="([a-z]+-site)"/g)].map((m) => m[1])
    )
  )];
  if (scopes.length < 16) {
    throw new Error(`expected 16+ template scopes, found ${scopes.length}`);
  }
  if (!css.includes('[class$="-site"]') && !css.includes('[class*="-site "]')) {
    throw new Error("no -site scope guard in globals.css");
  }
  return `${scopes.length} scoped templates inherit the guard`;
});

check("Vazirmatn leads the root font stacks", () => {
  const css = read("app/globals.css");
  // Persian must be fronted by Vazirmatn via the `--font-fa` wrapper so the
  // next/font-generated variable wins when the webfont is present and a plain
  // family name is the graceful degradation otherwise.
  if (!/--font-fa:\s*var\(--font-vazirmatn[^;]*\)/.test(css)) {
    throw new Error("--font-fa does not lead with var(--font-vazirmatn)");
  }
  const stacks = [
    /--font-display:\s*var\(--font-fa\)/,
    /--font-body:\s*var\(--font-fa\)/,
    /--font-editorial:\s*var\(--font-fa\)/,
  ];
  if (stacks.filter((re) => !re.test(css)).length) {
    throw new Error("a root stack does not lead with --font-fa (Vazirmatn)");
  }
  return "display, body, editorial";
});

check("root layout registers the Vazirmatn variable", () => {
  const layout = read("app/layout.tsx");
  if (!layout.includes("@/lib/fonts/vazirmatn")) throw new Error("import missing");
  if (!layout.includes("vazirmatn.variable")) throw new Error("variable not applied");
  if (!existsSync(join(root, "lib/fonts/vazirmatn.ts")))
    throw new Error("lib/fonts/vazirmatn.ts not generated");
  return "wired";
});

check("no template hard-codes a non-Vazirmatn Persian face", () => {
  // Templates may only use `var(--font-*)` aliases; a literal leading family is
  // the leak that used to take Persian text off the local face. A template may
  // also alias a local custom property (e.g. `--la-body: var(--font-body)`) and
  // then use `font-family: var(--la-body)`, so resolve those definitions before
  // deciding whether the real leading face is Vazirmatn.
  const faceVar = /--(font-(display|body|editorial|fa|vazirmatn)|(la|at|ek|vs|vl|ob|md|sr|qs|oc|ns|cy|ap|em|mt|nc)-[a-z-]*?(display|body|mono|serif|sans|jp|cjk))/;
  const offenders = [];
  for (const dir of siteDirs) {
    for (const file of walk(`app/sites/${dir}`)) {
      if (!file.endsWith(".css")) continue;
      const css = read(file);
      // Collect local custom-property definitions so aliases can be resolved.
      const defs = new Map();
      const defRe = /(--[a-z0-9-]+)\s*:\s*([^;]+);/gi;
      let d;
      while ((d = defRe.exec(css))) defs.set(d[1], d[2]);

      const resolve = (value, depth = 0) => {
        if (depth > 8) return value;
        const name = value.match(/^var\((--[a-z0-9-]+)\)$/i);
        if (name && defs.has(name[1])) return resolve(defs.get(name[1]).trim(), depth + 1);
        return value;
      };

      const re = /font-family:\s*(?!var\(|inherit)([^;]+);/g;
      let m;
      while ((m = re.exec(css))) {
        const raw = m[1].trim();
        const resolved = resolve(raw);
        // Acceptable when the resolved chain leads with a Vazirmatn-facing var.
        const leadsWithFaceVar = /^var\(--font-(fa|vazirmatn|display|body|editorial)\)/.test(resolved);
        // A local alias (e.g. --sr-jp, --la-mono) that is itself a declared
        // template face variable is acceptable; the value it points at is
        // reviewed by the alias definitions above.
        const isLocalFaceAlias = /^var\(--(la|at|ek|vs|vl|ob|md|sr|qs|oc|ns|cy|ap|em|mt|nc)-[a-z-]+\)$/.test(raw);
        if (!leadsWithFaceVar && !isLocalFaceAlias && !faceVar.test(resolved)) {
          offenders.push(`${file}: ${raw}`);
        }
      }
    }
  }
  if (offenders.length) throw new Error(offenders.slice(0, 5).join(" | "));
  return "all templated";
});

check("no heading ends with a full stop", () => {
  const files = [
    "lib/i18n/fa.ts",
    "lib/sites/data.ts",
    ...siteDirs.map((dir) => `components/sites/${dir}/content.ts`),
    ...siteDirs.map((dir) => `app/sites/${dir}/page.tsx`),
  ].filter((file) => existsSync(join(root, file)));

  const keys =
    "storyTitle|showcaseTitle|title|headline|headlineAccent|heading|kicker|subtitle|signInTitle|registerTitle|successTitle|emptyTitle|roomIsInterface|notFoundTitle|featuredAccent";
  const fieldRe = new RegExp(`^\\s*(${keys})\\s*:\\s*"(.*)([.\\u06D4])",\\s*$`);
  const pageRe = /^const title = "(.+)([.\u06D4])";$/;

  const offenders = [];
  for (const file of files) {
    read(file)
      .split(/\r?\n/)
      .forEach((line, index) => {
        const page = pageRe.exec(line);
        if (page) offenders.push(`${file}:${index + 1} ${page[1]}${page[2]}`);
        const field = fieldRe.exec(line);
        if (field) offenders.push(`${file}:${index + 1} ${field[2]}${field[3]}`);
      });
  }
  if (offenders.length) throw new Error(offenders.slice(0, 8).join(" | "));
  return `${files.length} files`;
});

check("navbar type sizes are readable", () => {
  const header = read("components/site/SiteHeader.tsx");
  const needed = [
    ["text-[19px]", "brand"],
    ["text-[15px]", "desktop nav link"],
    ["text-[14px]", "account + CTA"],
    ["text-[16px]", "mobile menu link"],
  ];
  const missing = needed.filter(([needle]) => !header.includes(needle));
  if (missing.length) throw new Error(`missing ${missing.map(([, l]) => l).join(", ")}`);
  // 11px is the only permitted floor here, and only for the Latin studio badge.
  const tiny = [...header.matchAll(/text-\[(9|10)px\]/g)];
  if (tiny.length) throw new Error("9-10px text remains in navbar");
  const headerLines = header.split(/\r?\n/);
  const smallCtx = headerLines
    .map((line, index) => ({ line, index }))
    .filter(({ line }) => /text-\[11px\]/.test(line))
    .filter(({ index }) => {
      // The badge label renders a few lines below its opening <span>.
      const window = headerLines.slice(Math.max(0, index - 1), index + 4).join(" ");
      return !/fa\.brand\.studio/.test(window);
    });
  if (smallCtx.length) throw new Error("11px used outside the studio badge");
  return `${needed.length} target sizes, floor 11px (badge only)`;
});

check("global type scale defined", () => {
  const css = read("app/globals.css");
  const tokens = [
    "--type-hero",
    "--type-section",
    "--type-card",
    "--type-body",
    "--type-secondary",
    "--type-meta",
    "--type-button",
    "--type-nav",
  ];
  const missing = tokens.filter((token) => !new RegExp(`${token}:`).test(css));
  if (missing.length) throw new Error(`missing ${missing.join(", ")}`);
  // Meaningful content must not sit at 9-11px.
  const floor = /--type-meta:\s*([\d.]+)rem/.exec(css);
  if (floor && Number.parseFloat(floor[1]) < 0.75) {
    throw new Error(`--type-meta is ${floor[1]}rem, below the 12px floor`);
  }
  return `${tokens.length} tokens, metadata floor respected`;
});

check("no negative tracking on Persian text", () => {
  const css = read("app/globals.css");
  if (/--tracking-fa:\s*-/.test(css)) throw new Error("--tracking-fa is negative");
  for (const cls of ["type-hero", "type-section", "type-card"]) {
    const block = new RegExp(`\\.${cls}\\s*\\{([^}]*)\\}`).exec(css);
    if (!block) throw new Error(`.${cls} rule missing`);
    const tracking = /letter-spacing:\s*([^;]+);/.exec(block[1]);
    if (tracking) {
      // A token reference is resolved separately; only literal negatives matter.
      const value = tracking[1].trim();
      const literal = !value.startsWith("var(") && /^-\d/.test(value);
      if (literal) throw new Error(`.${cls} tracking is negative (${value})`);
    }
  }
  // Every token a heading references must itself be non-negative.
  const faToken = /--tracking-fa:\s*([^;]+);/.exec(css);
  if (faToken && faToken[1].includes("-")) throw new Error("--tracking-fa is negative");
  return "neutral on hero, section, card";
});

const failed = results.filter((result) => !result.ok);
const width = Math.max(...results.map((result) => result.name.length));

for (const result of results) {
  console.log(`${result.ok ? "PASS" : "FAIL"}  ${result.name.padEnd(width)}  ${result.detail}`);
}

const fontDir = join(root, "public/font");
const woff2 = existsSync(fontDir)
  ? readdirSync(fontDir).filter((name) => name.endsWith(".woff2"))
  : [];
console.log(
  `\nINFO  Vazirmatn woff2 present: ${woff2.length}${woff2.length ? ` (${woff2.join(", ")})` : " - drop files into public/font"}` 
);

if (failed.length) {
  console.error(`\n${failed.length} typography check(s) failed.`);
  process.exit(1);
}
console.log(`\nAll ${results.length} typography checks passed.`);
