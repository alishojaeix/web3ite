// One-off: strip terminal sentence punctuation from heading fields.
const fs = require("fs");
const path = require("path");

const templateDirs = fs
  .readdirSync(path.join(process.cwd(), "components/sites"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => `components/sites/${entry.name}/content.ts`)
  .filter((rel) => fs.existsSync(path.join(process.cwd(), rel)));

const targets = [
  { file: "lib/sites/data.ts", keys: ["storyTitle", "showcaseTitle", "title"] },
  {
    file: "lib/i18n/fa.ts",
    keys: [
      "signInTitle",
      "registerTitle",
      "successTitle",
      "emptyTitle",
      "roomIsInterface",
      "heading",
      "notFoundTitle",
      "featuredAccent",
    ],
  },
  ...templateDirs.map((file) => ({
    file,
    keys: ["heading", "headline", "headlineAccent", "title", "kicker", "subtitle"],
  })),
];

// `<title>` metadata: only the terminal character is trimmed.
const sitePageTitles = fs
  .readdirSync(path.join(process.cwd(), "app/sites"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => `app/sites/${entry.name}/page.tsx`)
  .filter((rel) => fs.existsSync(path.join(process.cwd(), rel)));

for (const file of sitePageTitles) {
  const abs = path.join(process.cwd(), file);
  const src = fs.readFileSync(abs, "utf8");
  const eol = src.includes("\r\n") ? "\r\n" : "\n";
  let count = 0;
  const out = src
    .split(eol)
    .map((line) => {
      const m = line.match(/^(const title = ".+)([.\u06D4])";$/);
      if (!m) return line;
      count += 1;
      return `${m[1]}";`;
    })
    .join(eol);
  if (count > 0) {
    fs.writeFileSync(abs, out, "utf8");
    console.log(`${file}: ${count} page title fixed`);
  }
}

for (const { file, keys } of targets) {
  const abs = path.join(process.cwd(), file);
  const src = fs.readFileSync(abs, "utf8");
  const eol = src.includes("\r\n") ? "\r\n" : "\n";
  let count = 0;

  const out = src
    .split(eol)
    .map((line) => {
      const m = line.match(/^(\s*([A-Za-z]+)\s*:\s*")(.*)("\s*,?\s*)$/);
      if (!m) return line;
      const [, head, key, value, tail] = m;
      if (!keys.includes(key)) return line;
      const trimmed = value.replace(/[.\u06D4]$/, "").trimEnd();
      if (trimmed === value) return line;
      count += 1;
      return head + trimmed + tail;
    })
    .join(eol);

  fs.writeFileSync(abs, out, "utf8");
  console.log(`${file}: ${count} headings fixed`);
}
