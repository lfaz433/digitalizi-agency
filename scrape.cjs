const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  
  await page.goto('https://www.theclips.agency/', { waitUntil: 'load', timeout: 60000 });

  // Scroll to bottom slowly to trigger lazy loading and animations
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 300);
    });
  });

  // Wait a bit for final animations
  await page.waitForTimeout(3000);

  // Take full page screenshot
  await page.screenshot({ path: 'clips-full-scrolled.png', fullPage: true });

  await browser.close();
})();
