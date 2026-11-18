/**
 * Typography pass for the platform surfaces (catalog, checkout, auth, account,
 * homepage sections). Raises sub-12px text to a readable floor and replaces
 * Latin-oriented negative tracking on Persian copy with the neutral token.
 *
 * Deliberately conservative: only the two literal patterns below are touched.
 * English brand names keep whatever size/tracking their own utility sets.
 */
const fs = require("fs");
const path = require("path");

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(path.join(process.cwd(), dir), { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(rel, out);
    else if (/\.tsx$/.test(entry.name) && !rel.includes(`${path.sep}sites${path.sep}`)) out.push(rel);
  }
  return out;
}

const files = [...walk("components"), ...walk("app")];

const sizeMap = { 9: "12px", 10: "13px", 11: "13px" };
const totals = { files: 0, sizes: 0, tracking: 0 };

for (const file of files) {
  const abs = path.join(process.cwd(), file);
  const src = fs.readFileSync(abs, "utf8");
  let changed = false;

  const out = src
    .replace(/text-\[(9|10|11)px\]/g, (match, px) => {
      totals.sizes += 1;
      changed = true;
      return `text-[${sizeMap[Number(px)]}]`;
    })
    .replace(/tracking-\[-0\.0\d+em\]/g, () => {
      totals.tracking += 1;
      changed = true;
      return "tracking-[0.01em]";
    });

  if (changed) {
    fs.writeFileSync(abs, out, "utf8");
    totals.files += 1;
  }
}

console.log(
  `platform: ${totals.files} files updated, ${totals.sizes} sizes raised, ${totals.tracking} negative trackings relaxed`
);
