const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function main() {
  const url = process.env.TARGET_URL || "https://ravenx666.github.io/id?sex=m&image=https%3A%2F%2Fi.imgur.com%2FRrFirOI.png&birthday=15.09.2007&name=Oliwier&surname=Szulc&nationality=Polskie&familyName=Szulc&fathersFamilyName=Szulc&mothersFamilyName=Kaczmarek&birthPlace=Wrocław&countryOfBirth=Polska&adress1=Rolna+43B&adress2=61-259&city=Poznań";
  const outDir = path.resolve(__dirname, '..', 'clones');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r=>setTimeout(r,1200));
  const html = await page.evaluate(() => document.documentElement.outerHTML);
  const now = new Date().toISOString().replace(/[:.]/g, '-');
  const htmlPath = path.join(outDir, `ravenx_id_${now}.html`);
  fs.writeFileSync(htmlPath, html);
  const pngPath = path.join(outDir, `ravenx_id_${now}.png`);
  await page.screenshot({ path: pngPath, fullPage: true });
  await browser.close();
  console.log('Saved:', htmlPath);
  console.log('Screenshot:', pngPath);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
