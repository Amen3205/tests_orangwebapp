import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.waitForLoadState('load');
  await page.click('text=Rooms');
  await expect(page.locator('.room-card').first()).toBeVisible({ timeout: 10000 });
});

test('Page navigation works', async ({ page }) => {
  await page.click('text=Rooms');
  await expect(page.locator('.room-card').first()).toBeVisible();
});

test('Contact section visible', async ({ page }) => {
  await expect(page.locator('section#contact')).toBeVisible();
});

test('Room cards are clickable', async ({ page }) => {
  const firstRoomCard = page.locator('.room-card').first();
  await expect(firstRoomCard).toBeVisible();
  const roomLink = firstRoomCard.locator('a.btn-primary');
  await expect(roomLink).toBeVisible();
});

test('Multiple rooms displayed', async ({ page }) => {
  const roomCards = page.locator('.room-card');
  const count = await roomCards.count();
  expect(count).toBeGreaterThan(1);
});

test('Room cards have titles', async ({ page }) => {
  const firstRoom = page.locator('.room-card').first();
  const roomTitle = firstRoom.locator('h5');
  await expect(roomTitle).toBeVisible();
});

test('Amenities visible on rooms', async ({ page }) => {
  const firstRoom = page.locator('.room-card').first();
  const amenities = firstRoom.locator('.badge');
  const count = await amenities.count();
  expect(count).toBeGreaterThan(0);
});

test('Booking section scrollable', async ({ page }) => {
  await page.click('text=Booking');
  await expect(page.locator('#booking')).toBeInViewport();
});

test('Room prices visible', async ({ page }) => {
  const firstRoom = page.locator('.room-card').first();
  const price = firstRoom.locator('.fw-bold');
  await expect(price).toBeVisible();
});

test('Hero section visible', async ({ page }) => {
  const heroSection = page.locator('section.hero');
  await expect(heroSection).toBeVisible();
});

test('Location section with map visible', async ({ page }) => {
  const locationSection = page.locator('section#location');
  await expect(locationSection).toBeVisible();
});