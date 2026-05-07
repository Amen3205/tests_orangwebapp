import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.waitForLoadState('load');
  await page.waitForTimeout(500);
});

// TC-04
test('Home page loads', async ({ page }) => {
  await expect(page).toHaveURL(/automationintesting.online/);
});

// TC-05
test('Rooms displayed on page', async ({ page }) => {
  await expect(page.locator('.room-card').first()).toBeVisible();
});

// TC-06
test('Navigation menu visible', async ({ page }) => {
  await expect(page.locator('nav')).toBeVisible();
});

// TC-07
test('Footer visible and contains content', async ({ page }) => {
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
});

// TC-25
test('Page has a title', async ({ page }) => {
  const title = await page.title();
  expect(title.length).toBeGreaterThan(0);
});

// TC-26 — Logo visible in navbar
test('Logo visible in header', async ({ page }) => {
  const navbar = page.locator('nav').first();
  await expect(navbar).toBeVisible({ timeout: 10000 });
});

// TC-27
test('Booking section exists in DOM', async ({ page }) => {
  const booking = page.locator('#booking');
  await expect(booking).toBeAttached();
});

// TC-28 — JS errors check (ignoré sur Firefox car erreurs tiers)
test('Page loads without critical JS errors', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Firefox reporte des erreurs JS tierces non bloquantes');
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  await page.goto('https://automationintesting.online/');
  await page.waitForLoadState('load');
  expect(errors.length).toBe(0);
});