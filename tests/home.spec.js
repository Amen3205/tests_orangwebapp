import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.waitForLoadState('load');
  await page.waitForTimeout(500);
});

test('Home page loads', async ({ page }) => {
  await expect(page).toHaveURL(/automationintesting.online/);
});

test('Rooms displayed on page', async ({ page }) => {
  await expect(page.locator('.room-card').first()).toBeVisible();
});

test('Navigation menu visible', async ({ page }) => {
  await expect(page.locator('nav')).toBeVisible();
});

test('Footer visible and contains content', async ({ page }) => {
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
});