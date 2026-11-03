export default async function run(page, ui) {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("http://localhost:5173/shop", { waitUntil: "networkidle", timeout: 45000 });
  await page.waitForTimeout(1500);
  return await page.evaluate(() => {
    const rules = [];
    for (const ss of document.styleSheets) {
      let rs;
      try { rs = ss.cssRules; } catch (e) { continue; }
      for (const r of rs) {
        if (r.cssRules) {
          for (const rr of r.cssRules) {
            if (rr.selectorText && /shop-grid|product-card-link|shop-products/.test(rr.selectorText)) {
              rules.push((r.conditionText || "") + " @ " + rr.selectorText + " { " + rr.cssText.slice(0, 160) + " }");
            }
          }
        } else if (r.selectorText && /shop-grid|product-card-link|shop-products/.test(r.selectorText)) {
          rules.push(r.selectorText + " { " + r.cssText.slice(0, 160) + " }");
        }
      }
    }
    const kids = [...document.querySelector(".shop-products-container").children].map((c) => {
      const r = c.getBoundingClientRect();
      const cs = getComputedStyle(c);
      return { cls: typeof c.className === 'string' ? c.className : c.tagName, w: Math.round(r.width), scrollW: c.scrollWidth, display: cs.display, minW: cs.minWidth, gridCols: cs.gridTemplateColumns !== 'none' ? cs.gridTemplateColumns : undefined };
    });
    const drawers = [...document.querySelectorAll('[class*="filter"], [class*="drawer"]')].map((c) => {
      const r = c.getBoundingClientRect();
      return { cls: c.className, right: Math.round(r.right), pos: getComputedStyle(c).position };
    });
    return { rules: rules.slice(0, 20), kids: kids.slice(0, 10), drawers: drawers.slice(0, 12) };
  });
}
