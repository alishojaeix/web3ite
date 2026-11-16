const { chromium } = require("C:/Users/lenovo/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  page.on("console", (msg) => console.log("CONSOLE", msg.type(), msg.text(), JSON.stringify(msg.location())));
  page.on("pageerror", (err) => console.log("PAGEERROR", String(err), err.stack));
  page.on("response", (res) => {
    if (res.status() >= 400) console.log("HTTP", res.status(), res.url());
  });
  page.on("requestfailed", (req) => console.log("REQFAIL", req.url(), req.failure()?.errorText));
  const response = await page.goto("http://localhost:3001/sites/sora-restaurant", { waitUntil: "networkidle" });
  console.log("STATUS", response.status());
  await page.waitForTimeout(2500);
  console.log("H1", await page.locator("h1").innerText());
  await browser.close();
})();
