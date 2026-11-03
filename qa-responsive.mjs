const API = "https://backend-e-commerce-uuxn.onrender.com/api";

const sizes = [
  { name: "mobile-375", width: 375, height: 812 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1280", width: 1280, height: 800 },
  { name: "desktop-1440", width: 1440, height: 900 },
];

const results = {};

async function checkPage(page, name, url, screenshot) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(1200);
  const info = await page.evaluate(() => {
    const doc = document.documentElement;
    const overflowing = [];
    document.querySelectorAll("*").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.right > doc.clientWidth + 1 && r.width > 0 && !el.closest(".filter-drawer") && getComputedStyle(el).position !== "fixed") {
        overflowing.push(el.tagName + "." + (el.className && typeof el.className === "string" ? el.className.split(" ").slice(0, 2).join(".") : ""));
      }
    });
    return {
      scrollW: doc.scrollWidth,
      clientW: doc.clientWidth,
      hasHScroll: doc.scrollWidth > doc.clientWidth + 1,
      overflowing: [...new Set(overflowing)].slice(0, 8),
    };
  });
  results[name] = info;
  if (screenshot) {
    await page.screenshot({ path: screenshot, fullPage: false });
  }
}

export default async function run(page, ui) {
  // get a product id for detail page + seed cart
  let pid = null;
  try {
    const res = await page.evaluate(async (api) => {
      const r = await fetch(api + "/products");
      return r.json();
    }, API);
    const arr = Array.isArray(res) ? res : res.products || res.data || [];
    pid = arr[0]?._id || arr[0]?.id || null;
  } catch (e) {
    results.apiError = String(e);
  }
  results.productId = pid;

  const base = "http://localhost:5173";
  const productUrl = pid ? `${base}/product-details/${pid}` : `${base}/product-details/x`;

  for (const size of sizes) {
    await page.setViewportSize({ width: size.width, height: size.height });
    await checkPage(page, `${size.name}-home`, base, null);
    await page.screenshot({ path: `C:/Users/LAPTOP STORE/opencode/qa/shots/${size.name}-home.png` });
    await checkPage(page, `${size.name}-shop`, `${base}/shop`, null);
    await page.screenshot({ path: `C:/Users/LAPTOP STORE/opencode/qa/shots/${size.name}-shop.png` });
    await checkPage(page, `${size.name}-detail`, productUrl, null);
    await page.screenshot({ path: `C:/Users/LAPTOP STORE/opencode/qa/shots/${size.name}-detail.png` });
    // seed cart then load cart & checkout
    if (pid) {
      await page.evaluate((id) => {
        localStorage.setItem("cartItems", JSON.stringify([{ id, _id: id, title: "Test Item", price: 100, quantity: 2, image: "", images: [], size: "M", color: "Black" }]));
      }, pid);
    }
    await checkPage(page, `${size.name}-cart`, `${base}/cart`, null);
    await page.screenshot({ path: `C:/Users/LAPTOP STORE/opencode/qa/shots/${size.name}-cart.png` });
    await checkPage(page, `${size.name}-checkout`, `${base}/checkout`, null);
    await page.screenshot({ path: `C:/Users/LAPTOP STORE/opencode/qa/shots/${size.name}-checkout.png` });
  }
  return results;
}
