import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.waitForLoadState('load');
  await page.waitForTimeout(500);
});

test('Open booking form', async ({ page }) => {
  await expect(page.locator('#booking')).toBeVisible();
});

test('Homepage loads correctly', async ({ page }) => {
  await expect(page).toHaveURL(/automationintesting.online/);
});

test('Booking form has input fields', async ({ page }) => {
  const bookingSection = page.locator('#booking');
  await expect(bookingSection).toBeVisible({ timeout: 10000 });
  const inputs = bookingSection.locator('input');
  const count = await inputs.count();
  expect(count).toBeGreaterThan(0);
});