import { chromium } from '/Users/yazidhilmi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const ROOT = new URL('..', import.meta.url).pathname;
const deck = `file://${ROOT}/materials/workshop/html-deck/ai-dashboard-gas-workshop.html`;
const preview = `file://${ROOT}/materials/workshop/starter-dashboard/preview.html`;
const viewports = [{ width: 1440, height: 810 }, { width: 1280, height: 720 }];
const browser = await chromium.launch({ headless: true });

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  await page.goto(deck, { waitUntil: 'networkidle' });
  const count = await page.locator('.slide').count();
  if (count !== 28) throw new Error(`${viewport.width}x${viewport.height}: expected 28 slides, got ${count}`);
  const imageCount = await page.locator('img').count();
  for (let i = 0; i < imageCount; i += 1) {
    const loaded = await page.locator('img').nth(i).evaluate(img => img.complete && img.naturalWidth > 0);
    if (!loaded) throw new Error(`${viewport.width}x${viewport.height}: image ${i} did not load`);
  }
  const overflow = [];
  for (let i = 0; i < count; i += 1) {
    await page.evaluate(index => document.querySelectorAll('.slide').forEach((slide, j) => slide.classList.toggle('active', j === index)), i);
    const metrics = await page.locator('.slide.active').evaluate(el => ({ title: el.dataset.title, scrollHeight: el.scrollHeight, clientHeight: el.clientHeight, scrollWidth: el.scrollWidth, clientWidth: el.clientWidth }));
    if (metrics.scrollHeight > metrics.clientHeight + 2 || metrics.scrollWidth > metrics.clientWidth + 2) overflow.push(metrics);
  }
  if (overflow.length) throw new Error(`${viewport.width}x${viewport.height}: overflow ${JSON.stringify(overflow)}`);

  await page.goto(deck, { waitUntil: 'networkidle' });
  const visible = await page.evaluate(() => [...document.querySelectorAll('.slide')].filter(s => getComputedStyle(s).display !== 'none').length);
  if (visible !== 1) throw new Error(`${viewport.width}x${viewport.height}: ${visible} slides visible on startup`);
  const centerTitle = await page.evaluate(() => document.elementFromPoint(innerWidth / 2, innerHeight / 2)?.closest('.slide')?.dataset.title);
  if (centerTitle !== 'Dashboard Rekap Layanan Kecamatan') throw new Error(`startup occlusion: ${centerTitle}`);

  await page.locator('#next').click();
  await page.locator('#next').click();
  if (await page.locator('#counter').innerText() !== '03 / 28') throw new Error('cover → slide 3 counter failed');
  if (await page.locator('.slide.active').getAttribute('data-title') !== 'Basic AI untuk pekerjaan administrasi') throw new Error('cover → slide 3 title failed');
  await page.reload({ waitUntil: 'networkidle' });
  if (await page.locator('#counter').innerText() !== '03 / 28') throw new Error('slide hash reload failed');

  await page.goto(deck, { waitUntil: 'networkidle' });
  await page.keyboard.press('n');
  if (!(await page.locator('#notesPanel').isVisible())) throw new Error('notes panel did not open');
  await page.keyboard.press('o');
  if (!(await page.locator('body').evaluate(body => body.classList.contains('overview')))) throw new Error('overview did not open');
  await page.keyboard.press('Escape');
  if (await page.locator('body').evaluate(body => body.classList.contains('overview'))) throw new Error('overview did not close');

  await page.emulateMedia({ media: 'print' });
  const printVisible = await page.evaluate(() => [...document.querySelectorAll('.slide')].filter(s => getComputedStyle(s).display !== 'none').length);
  if (printVisible !== 28) throw new Error(`print view shows ${printVisible}/28 slides`);
  await page.close();
  console.log(`PASS deck ${viewport.width}x${viewport.height}`);
}

const dashboard = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await dashboard.goto(preview, { waitUntil: 'networkidle' });
await dashboard.waitForTimeout(200);
for (const [id, expected] of [['total', '100'], ['completed', '25'], ['inProcess', '50']]) {
  const actual = await dashboard.locator(`#${id}`).innerText();
  if (actual !== expected) throw new Error(`preview ${id}: expected ${expected}, got ${actual}`);
}
if (await dashboard.locator('#rows tr').count() !== 100) throw new Error('preview did not render 100 rows');
await dashboard.selectOption('#statusFilter', { label: 'Selesai' });
await dashboard.waitForTimeout(150);
if (await dashboard.locator('#total').innerText() !== '25') throw new Error('status filter total failed');
if (await dashboard.locator('#inProcess').innerText() !== '0') throw new Error('status filter in-process KPI failed');
await dashboard.selectOption('#statusFilter', { label: 'Semua status' });
await dashboard.selectOption('#serviceFilter', { label: 'Administrasi Umum' });
await dashboard.waitForTimeout(150);
if (await dashboard.locator('#total').innerText() !== '20') throw new Error('service filter total failed');
await dashboard.close();
await browser.close();
console.log('PASS local dashboard preview');
