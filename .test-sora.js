const { chromium } = require("C:/Users/lenovo/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright");

const BASE = "http://localhost:3001";
const results = [];
function check(name, pass, detail = "") {
  results.push({ name, pass, detail });
  console.log(`${pass ? "PASS" : "FAIL"} ${name}${detail ? ` — ${detail}` : ""}`);
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(String(err)));

  const response = await page.goto(`${BASE}/sites/sora-restaurant`, { waitUntil: "networkidle" });
  check("desktop route 200", response.status() === 200, String(response.status()));
  check("title", (await page.title()).includes("Sora Restaurant"), await page.title());
  check(
    "hero heading",
    (await page.locator("h1").innerText()).replace(/\s+/g, " ").trim() === "A quieter table.",
    await page.locator("h1").innerText()
  );

  const desktopOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  );
  check("desktop no horizontal overflow", desktopOverflow <= 1, `${desktopOverflow}px`);

  // Menu tabs
  const counterPanel = page.locator("#sr-menu-panel-counter");
  const tablePanel = page.locator("#sr-menu-panel-table");
  check("counter panel visible by default", await counterPanel.isVisible());
  check("table panel hidden by default", !(await tablePanel.isVisible()));
  check("only one panel visible", (await page.locator(".sr-menu-panel:visible").count()) === 1);

  await page.getByRole("tab", { name: /The table/i }).click();
  await page.waitForTimeout(150);
  check("table tab selected", (await page.getByRole("tab", { name: /The table/i }).getAttribute("aria-selected")) === "true");
  check("table panel visible", await tablePanel.isVisible());
  check("counter panel hidden", !(await counterPanel.isVisible()));
  check("still one panel visible", (await page.locator(".sr-menu-panel:visible").count()) === 1);

  const tableItems = await page.locator("#sr-menu-panel-table .sr-dish-name").count();
  check("table menu has 10 dishes", tableItems === 10, String(tableItems));
  const veg = await page.locator("#sr-menu-panel-table .sr-veg-mark").count();
  check("table menu marks 6 vegetarian dishes", veg === 6, String(veg));

  await page.getByRole("tab", { name: /The table/i }).focus();
  await page.keyboard.press("ArrowRight");
  check(
    "tab keyboard wraps to counter",
    (await page.getByRole("tab", { name: /The counter/i }).getAttribute("aria-selected")) === "true"
  );
  await page.keyboard.press("End");
  check(
    "tab End selects table",
    (await page.getByRole("tab", { name: /The table/i }).getAttribute("aria-selected")) === "true"
  );
  await page.keyboard.press("Home");
  check(
    "tab Home selects counter",
    (await page.getByRole("tab", { name: /The counter/i }).getAttribute("aria-selected")) === "true"
  );

  // Menu should scroll to section anchor
  check("menu section anchor exists", (await page.locator("#menu").count()) === 1);

  // Reduced motion
  await page.emulateMedia({ reducedMotion: "reduce" });
  const animation = await page
    .locator(".sr-status-dot")
    .evaluate((node) => getComputedStyle(node).animationName);
  check("reduced motion disables pulse", animation === "none", animation);
  await page.emulateMedia({ reducedMotion: "no-preference" });

  // Shared form fields
  const date = new Date();
  date.setDate(date.getDate() + 5);
  const iso = date.toISOString().slice(0, 10);
  await page.locator('input[name="name"]').fill("Test Guest");
  await page.locator('input[name="email"]').fill("sora-test@example.com");
  await page.locator('input[name="date"]').fill(iso);
  await page.locator('select[name="party"]').selectOption("2");

  // Lunch is walk-in only
  await page.locator('select[name="service"]').selectOption("lunch");
  let lunchRequested = false;
  page.on("request", (request) => {
    if (request.url().includes("/api/site-interest")) lunchRequested = true;
  });
  await page.locator(".sr-form button[type=submit]").click();
  await page.waitForTimeout(500);
  const lunchText = await page.locator(".sr-form-status").innerText();
  check("lunch rejected as walk-in only", lunchText.toLowerCase().includes("walk-in only"), lunchText);
  check("lunch rejection sends no request", lunchRequested === false);

  // Dinner request succeeds
  await page.locator('select[name="service"]').selectOption("dinner");
  await page.locator('select[name="seating"]').selectOption("counter");
  await page.locator('textarea[name="notes"]').fill("No allergies. Counter if possible.");
  const [apiResponse] = await Promise.all([
    page.waitForResponse((res) => res.url().includes("/api/site-interest")),
    page.locator(".sr-form button[type=submit]").click(),
  ]);
  check("dinner API responds 201", apiResponse.status() === 201, String(apiResponse.status()));
  await page.waitForTimeout(400);
  const statusClass = await page.locator(".sr-form-status").getAttribute("class");
  const statusText = await page.locator(".sr-form-status").innerText();
  check(
    "dinner request succeeds",
    statusClass.includes("success") && statusText.includes("recorded"),
    `${statusClass} :: ${statusText}`
  );

  // Cross-links
  const templateResponse = await page.request.get(`${BASE}/templates/sora-restaurant`);
  check("template detail 200", templateResponse.status() === 200, String(templateResponse.status()));
  const checkoutResponse = await page.request.get(`${BASE}/checkout/sora-restaurant`);
  check("checkout 200", checkoutResponse.status() === 200, String(checkoutResponse.status()));

  // Mobile
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  const mpage = await mobile.newPage();
  const mobileErrors = [];
  mpage.on("console", (msg) => {
    if (msg.type() === "error") mobileErrors.push(msg.text());
  });
  mpage.on("pageerror", (err) => mobileErrors.push(String(err)));
  await mpage.goto(`${BASE}/sites/sora-restaurant`, { waitUntil: "networkidle" });
  const mobileOverflow = await mpage.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  );
  check("mobile no horizontal overflow", mobileOverflow <= 1, `${mobileOverflow}px`);

  await mpage.locator(".sr-nav-toggle").click();
  check("mobile navigation opens", await mpage.locator(".sr-mobile-nav").isVisible());
  await mpage.locator('.sr-mobile-nav a[href="#house"]').click();
  await mpage.waitForTimeout(350);
  check("mobile navigation closes after link", (await mpage.locator(".sr-mobile-nav").count()) === 0);

  // Mobile table tab works
  await mpage.getByRole("tab", { name: /The table/i }).click();
  check("mobile table panel visible", await mpage.locator("#sr-menu-panel-table").isVisible());

  const tapTargets = await mpage.evaluate(() => {
    const nodes = [...document.querySelectorAll("a, button, input, select, textarea")];
    return nodes
      .filter((node) => !node.matches('input[type="checkbox"]'))
      .filter((node) => !node.closest(".sr-footer-bottom"))
      .filter((node) => {
        const rect = node.getBoundingClientRect();
        const style = getComputedStyle(node);
        return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden";
      })
      .filter((node) => node.getBoundingClientRect().height < 32)
      .map((node) => `${node.tagName}:${(node.textContent || "").trim().slice(0, 24)}`);
  });
  check("no visible control under 32px high", tapTargets.length === 0, tapTargets.slice(0, 8).join(", "));

  check("no desktop console errors", errors.length === 0, errors.join(" | ").slice(0, 500));
  check("no mobile console errors", mobileErrors.length === 0, mobileErrors.join(" | ").slice(0, 500));

  await browser.close();

  const failed = results.filter((result) => !result.pass);
  console.log(`\n${results.length - failed.length}/${results.length} checks passed`);
  process.exit(failed.length ? 1 : 0);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
