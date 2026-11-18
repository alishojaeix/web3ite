// The template engine's typography pass: Persian text never uses Latin
// uppercase treatment or sub-12px body copy. Decorative labels keep their
// tracking, but the floor is 12px and nothing is uppercased unless it is an
// explicitly Latin-only badge (none here).
const fs = require("fs");
const path = require("path");

const dir = path.join(process.cwd(), "app/sites");
const files = fs
  .readdirSync(dir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(dir, entry.name))
  .flatMap((abs) =>
    fs.readdirSync(abs).filter((name) => name.endsWith(".css")).map((name) => path.join(abs, name))
  );

const sizeMap = { "9px": "0.75rem", "10px": "0.8125rem", "11px": "0.8125rem" };
const totals = { files: 0, sizes: 0, uppers: 0, tracking: 0 };

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  const eol = src.includes("\r\n") ? "\r\n" : "\n";
  const before = totals.sizes + totals.uppers + totals.tracking;

  const out = src
    .split(eol)
    .map((line) => {
      const size = line.match(/^(\s*font-size:\s*)(9|10|11)px(;.*)$/);
      if (size) {
        totals.sizes += 1;
        return `${size[1]}${sizeMap[`${size[2]}px`]}${size[3]}`;
      }
      if (/^\s*text-transform:\s*uppercase;\s*$/.test(line)) {
        totals.uppers += 1;
        return null;
      }
      const neg = line.match(/^(\s*letter-spacing:\s*)-0\.0\d+em(;.*)$/);
      if (neg) {
        totals.tracking += 1;
        return `${neg[1]}var(--tracking-fa, 0)${neg[2]}`;
      }
      return line;
    })
    .filter((line) => line !== null)
    .join(eol);

  if (totals.sizes + totals.uppers + totals.tracking > before) {
    fs.writeFileSync(file, out, "utf8");
    totals.files += 1;
  }
}

console.log(
  `templates: ${totals.files} files updated, ${totals.sizes} sizes raised, ${totals.uppers} uppercase removed, ${totals.tracking} trackings neutralised`
);
