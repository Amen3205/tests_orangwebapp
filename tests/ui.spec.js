import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.waitForLoadState('load');
  await page.waitForTimeout(500);
});

test('Mobile responsive', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page.locator('body')).toBeVisible();
});

test('Navigation visible', async ({ page }) => {
  await expect(page.locator('nav')).toBeVisible();
});

test('Page reload stable', async ({ page }) => {
  await page.reload();
  await expect(page.locator('body')).toBeVisible();
});