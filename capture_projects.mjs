
const { chromium } = await import('playwright');
import fs from 'fs';
const shots = [
  ['https://coconiq.vercel.app','coconiq'],
  ['https://www.memoeria.my.id','memoeria'],
  ['https://41java.vercel.app','41java'],
  ['https://wheelsbali.vercel.app','wheelsbali'],
];
const browser = await chromium.launch({headless:true});
for (const [url,name] of shots) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 980 }, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 });
  await page.screenshot({ path: `/Users/macbookair/Downloads/portfolio-tsabit/public/projects/${name}.png`, fullPage: false });
  await page.close();
}
await browser.close();
