const shots = "C:/Users/LAPTOP STORE/opencode/qa/shots/";
export default async function run(page, ui) {
  await page.setViewportSize({ width: 375, height: 812 });
  for (const [name, url] of [
    ["m375-home", "http://localhost:5173/"],
    ["m375-shop", "http://localhost:5173/shop"],
    ["m375-detail", "http://localhost:5173/product-details/6ae83ee05bf09a629f9c03eb"],
    ["m375-cart", "http://localhost:5173/cart"],
    ["m375-checkout", "http://localhost:5173/checkout"],
  ]) {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
    await page.waitForTimeout(1200);
    await page.screenshot({ path: shots + name + ".png", fullPage: true });
  }
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(1200);
  await page.screenshot({ path: shots + "t768-home.png", fullPage: true });
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(1200);
  await page.screenshot({ path: shots + "d1280-home.png", fullPage: false });
  return "done";
}
