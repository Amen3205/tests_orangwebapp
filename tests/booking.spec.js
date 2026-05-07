import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.waitForLoadState('load');
  await page.waitForTimeout(1000);
});

// TC-01
test('Open booking form', async ({ page }) => {
  await expect(page.locator('#booking')).toBeVisible();
});

// TC-02
test('Homepage loads correctly', async ({ page }) => {
  await expect(page).toHaveURL(/automationintesting.online/);
});

// TC-03
test('Booking form has input fields', async ({ page }) => {
  const bookingSection = page.locator('#booking');
  await expect(bookingSection).toBeVisible({ timeout: 10000 });
  const inputs = bookingSection.locator('input');
  const count = await inputs.count();
  expect(count).toBeGreaterThan(0);
});

// TC-21 — Firstname field accepts text
test('Firstname field accepts text input', async ({ page }) => {
  const bookingSection = page.locator('#booking');
  await expect(bookingSection).toBeVisible({ timeout: 10000 });
  const firstname = bookingSection.locator('input').first();
  await firstname.fill('Ahmed');
  await expect(firstname).toHaveValue('Ahmed');
});

// TC-22 — Lastname field accepts text
test('Lastname field accepts text input', async ({ page }) => {
  const bookingSection = page.locator('#booking');
  await expect(bookingSection).toBeVisible({ timeout: 10000 });
  const lastname = bookingSection.locator('input').nth(1);
  await lastname.fill('Ben Ali');
  await expect(lastname).toHaveValue('Ben Ali');
});

// TC-23 — Email field accepts valid email (by placeholder)
test('Email field accepts valid email', async ({ page }) => {
  const bookingSection = page.locator('#booking');
  await expect(bookingSection).toBeVisible({ timeout: 10000 });
  const inputs = bookingSection.locator('input');
  const count = await inputs.count();
  // prend l'avant-dernier input (email est généralement index count-2)
  const emailInput = inputs.nth(count - 2);
  await emailInput.fill('ahmed@test.tn');
  await expect(emailInput).toHaveValue('ahmed@test.tn');
});

// TC-24 — Phone field accepts numbers (by placeholder)
test('Phone field accepts phone number', async ({ page }) => {
  const bookingSection = page.locator('#booking');
  await expect(bookingSection).toBeVisible({ timeout: 10000 });
  const inputs = bookingSection.locator('input');
  const count = await inputs.count();
  // prend le dernier input (phone est généralement le dernier)
  const phoneInput = inputs.nth(count - 1);
  await phoneInput.fill('12345678');
  await expect(phoneInput).toHaveValue('12345678');
});