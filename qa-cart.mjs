const shots = "C:/Users/LAPTOP STORE/opencode/qa/shots/";
export default async function run(page, ui) {
  const results = {};
  for (const size of [{ name: "m375", width: 375 }, { name: "t768", width: 768 }]) {
    await page.setViewportSize({ width: size.width, height: 812 });
    await page.goto("http://localhost:5173/cart", { waitUntil: "domcontentloaded", timeout: 45000 }).catch(() => {});
    await page.evaluate(() => {
      localStorage.setItem("shopping-cart-items", JSON.stringify([
        { id: "6ae83ee05bf09a629f9c03eb", title: "Checkered Shirt", price: 180, image: "https://backend-e-commerce-uuxn.onrender.com/images/test.png", quantity: 2 },
        { id: "test2", title: "Loose Fit Bermuda Shorts", price: 80, image: "", quantity: 1 },
      ]));
    });
    await page.goto("http://localhost:5173/cart", { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
    await page.waitForTimeout(1200);
    results[size.name + "-cartOverflow"] = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    await page.screenshot({ path: shots + size.name + "-cart-full.png", fullPage: true });
    await page.goto("http://localhost:5173/checkout", { waitUntil: "domcontentloaded", timeout: 45000 }).catch(() => {});
    await page.evaluate(() => {
      localStorage.setItem("shopping-cart-items", JSON.stringify([
        { id: "6ae83ee05bf09a629f9c03eb", title: "Checkered Shirt", price: 180, image: "https://backend-e-commerce-uuxn.onrender.com/images/test.png", quantity: 2 },
        { id: "test2", title: "Loose Fit Bermuda Shorts", price: 80, image: "", quantity: 1 },
      ]));
    });
    await page.reload({ waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
    await page.waitForTimeout(1500);
    results[size.name + "-checkoutOverflow"] = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    await page.screenshot({ path: shots + size.name + "-checkout-full.png", fullPage: true });
  }
  return results;
}
