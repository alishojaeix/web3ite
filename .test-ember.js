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

  const response = await page.goto(`${BASE}/sites/ember-kitchen`, { waitUntil: "networkidle" });
  check("desktop route 200", response.status() === 200, String(response.status()));
  check("title", (await page.title()).includes("Ember Kitchen"), await page.title());
  check(
    "hero heading",
    (await page.locator("h1").innerText()).replace(/\s+/g, " ").trim() === "Cooked by fire.",
    await page.locator("h1").innerText()
  );

  const desktopOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  );
  check("desktop no horizontal overflow", desktopOverflow <= 1, `${desktopOverflow}px`);

  // Menu filter
  const dishCount = () => page.locator(".ek-dish:visible").count();
  check("menu has 9 dishes", (await dishCount()) === 9, String(await dishCount()));
  await page.locator(".ek-toggle").click();
  await page.waitForTimeout(150);
  check("vegetarian filter checked", await page.locator(".ek-toggle input").isChecked());
  check("vegetarian filter shows 6", (await dishCount()) === 6, String(await dishCount()));
  const countText = (await page.locator(".ek-menu-count").innerText()).toLowerCase();
  check("vegetarian count announced", countText.includes("6 vegetarian dishes of 9"), countText);
  await page.locator(".ek-toggle").click();

  // Hearth tabs
  await page.getByRole("tab", { name: /The grill/i }).click();
  check(
    "hearth tab selected",
    (await page.getByRole("tab", { name: /The grill/i }).getAttribute("aria-selected")) === "true"
  );
  check(
    "hearth panel updates",
    (await page.locator(".ek-hearth-panel h3").innerText()).includes("Hard heat"),
    await page.locator(".ek-hearth-panel h3").innerText()
  );
  await page.getByRole("tab", { name: /The grill/i }).focus();
  await page.keyboard.press("ArrowRight");
  check(
    "hearth keyboard navigation",
    (await page.getByRole("tab", { name: /The oven/i }).getAttribute("aria-selected")) === "true"
  );

  // Reduced motion
  await page.emulateMedia({ reducedMotion: "reduce" });
  const animation = await page
    .locator(".ek-status-dot")
    .evaluate((node) => getComputedStyle(node).animationName);
  check("reduced motion disables pulse", animation === "none", animation);
  await page.emulateMedia({ reducedMotion: "no-preference" });

  // Form submission
  const date = new Date();
  date.setDate(date.getDate() + 4);
  const iso = date.toISOString().slice(0, 10);
  await page.locator('input[name="name"]').fill("Test Guest");
  await page.locator('input[name="email"]').fill("ember-test@example.com");
  await page.locator('input[name="date"]').fill(iso);
  await page.locator('select[name="party"]').selectOption("2");
  await page.locator('select[name="preference"]').selectOption("counter");
  await page.locator('textarea[name="notes"]').fill("No allergies. Window seat if possible.");
  const [apiResponse] = await Promise.all([
    page.waitForResponse((res) => res.url().includes("/api/site-interest")),
    page.locator(".ek-form button[type=submit]").click(),
  ]);
  console.log("api", apiResponse.status(), await apiResponse.text());
  await page.waitForTimeout(800);
  const statusClass = await page.locator(".ek-form-status").getAttribute("class");
  const statusText = await page.locator(".ek-form-status").innerText();
  check("booking request succeeds", statusText.includes("recorded"), `${statusClass} :: ${statusText}`);

  // Template cross-links
  const templateResponse = await page.request.get(`${BASE}/templates/ember-kitchen`);
  check("template detail 200", templateResponse.status() === 200, String(templateResponse.status()));
  const previewResponse = await page.request.get(`${BASE}/sites/ember-kitchen`);
  check("site preview 200", previewResponse.status() === 200);

  // Mobile
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  const mpage = await mobile.newPage();
  const mobileErrors = [];
  mpage.on("console", (msg) => {
    if (msg.type() === "error") mobileErrors.push(msg.text());
  });
  mpage.on("pageerror", (err) => mobileErrors.push(String(err)));
  await mpage.goto(`${BASE}/sites/ember-kitchen`, { waitUntil: "networkidle" });
  const mobileOverflow = await mpage.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  );
  check("mobile no horizontal overflow", mobileOverflow <= 1, `${mobileOverflow}px`);

  await mpage.locator(".ek-nav-toggle").click();
  check("mobile navigation opens", await mpage.locator(".ek-mobile-nav").isVisible());
  await mpage.locator('.ek-mobile-nav a[href="#room"]').click();
  await mpage.waitForTimeout(300);
  check("mobile navigation closes after link", (await mpage.locator(".ek-mobile-nav").count()) === 0);

  const tapTargets = await mpage.evaluate(() => {
    const nodes = [...document.querySelectorAll("a, button, input, select, textarea")];
    return nodes
      .filter((node) => !node.matches('input[type="checkbox"]'))
      .filter((node) => !node.closest(".ek-footer-bottom"))
      .filter((node) => {
        const rect = node.getBoundingClientRect();
        const style = getComputedStyle(node);
        return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden";
      })
      .filter((node) => node.getBoundingClientRect().height < 32)
      .map((node) => `${node.tagName}:${(node.textContent || "").trim().slice(0, 24)}`);
  });
  check("no visible control under 32px high", tapTargets.length === 0, tapTargets.slice(0, 8).join(", "));

  await mpage.screenshot({ path: "ember-mobile-top-2.png" });

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
