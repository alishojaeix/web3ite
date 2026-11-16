const { chromium } = require("C:/Users/lenovo/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright");

const BASE = "http://localhost:3001";
const results = [];
function check(name, pass, detail = "") {
  results.push({ name, pass, detail });
  console.log(`${pass ? "PASS" : "FAIL"} ${name}${detail ? ` — ${detail}` : ""}`);
}

async function overflow(page) {
  return page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
}

async function checkSite(browser, spec) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  await context.addCookies([
    {
      name: "web3ite_age_ok",
      value: "1",
      url: BASE,
    },
  ]);
  const page = await context.newPage();
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(String(err)));

  const response = await page.goto(`${BASE}${spec.path}`, { waitUntil: "networkidle" });
  check(`${spec.id} desktop route 200`, response.status() === 200, String(response.status()));
  const robots = await page.locator('meta[name="robots"]').getAttribute("content");
  check(`${spec.id} noindex`, (robots || "").includes("noindex"), robots || "missing");
  check(
    `${spec.id} title`,
    (await page.title()).includes(spec.title),
    await page.title()
  );
  const heading = (await page.locator("h1").innerText()).replace(/\s+/g, " ").trim();
  check(`${spec.id} hero heading`, heading === spec.heading, heading);
  check(`${spec.id} health warning visible`, await page.getByText("Tobacco use is harmful to health").first().isVisible());
  check(`${spec.id} desktop overflow`, (await overflow(page)) <= 1, `${await overflow(page)}px`);

  const first = page.locator(spec.radio).nth(0);
  const second = page.locator(spec.radio).nth(1);
  check(`${spec.id} first record selected`, await first.isChecked());
  check(`${spec.id} first readout`, (await page.locator(spec.readout).innerText()).includes(spec.first));
  await second.check({ force: true });
  await page.waitForTimeout(120);
  check(`${spec.id} second record selected`, await second.isChecked());
  check(`${spec.id} readout updates`, (await page.locator(spec.readout).innerText()).includes(spec.second));
  check(`${spec.id} only one radio checked`, (await page.locator(`${spec.radio}:checked`).count()) === 1);

  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  await mobile.addCookies([{ name: "web3ite_age_ok", value: "1", url: BASE }]);
  const phone = await mobile.newPage();
  const mobileResponse = await phone.goto(`${BASE}${spec.path}`, { waitUntil: "networkidle" });
  check(`${spec.id} mobile route 200`, mobileResponse.status() === 200, String(mobileResponse.status()));
  check(`${spec.id} mobile overflow`, (await overflow(phone)) <= 1, `${await overflow(phone)}px`);
  check(`${spec.id} mobile heading`, (await phone.locator("h1").innerText()).replace(/\s+/g, " ").trim() === spec.heading);

  const pageErrors = errors.filter((text) => !/favicon/i.test(text));
  check(`${spec.id} no page errors`, pageErrors.length === 0, pageErrors.join(" | "));

  await context.close();
  await mobile.close();
}

(async () => {
  const browser = await chromium.launch();
  const gated = await browser.newContext();
  const gatePage = await gated.newPage();
  const gateResponse = await gatePage.goto(`${BASE}/sites/cigar-atelier`, { waitUntil: "networkidle" });
  check(
    "ungated visit redirects to age gate",
    gatePage.url().includes("/age-gate") && gatePage.url().includes("returnTo"),
    `${gateResponse.status()} ${gatePage.url()}`
  );
  await gated.close();

  await checkSite(browser, {
    id: "cigar",
    path: "/sites/cigar-atelier",
    title: "Cigar Atelier",
    heading: "Craft, kept quiet.",
    radio: 'input[name="ca-record"]',
    readout: ".ca-readout",
    first: "Connecticut",
    second: "Record 02",
  });
  await checkSite(browser, {
    id: "modern",
    path: "/sites/modern-tobacco",
    title: "Modern Tobacco",
    heading: "A different shelf.",
    radio: 'input[name="mt-object"]',
    readout: ".mt-readout",
    first: "Brushed steel",
    second: "Object 02",
  });

  await browser.close();
  const failed = results.filter((item) => !item.pass);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
  if (failed.length) process.exitCode = 1;
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
