// spec: test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Homepage and Product Browsing', () => {
  test('Verify homepage displays all products', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/seleniumPractise/#/
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // 2. Wait for the page to load completely
    // Page loads automatically with goto

    // 3. Verify the GreenKart header is visible
    await expect(page.getByText('GREENKART')).toBeVisible();

    // 4. Verify the search box is present and displays placeholder text 'Search for Vegetables and Fruits'
    const searchBox = page.getByRole('searchbox', { name: 'Search for Vegetables and Fruits' });
    await expect(searchBox).toBeVisible();

    // 5. Verify the cart icon is visible in the header
    await expect(page.getByRole('link', { name: 'Cart' })).toBeVisible();

    // 6. Verify the items counter shows '0' and price counter shows '0'
    await expect(page.getByText('Items')).toBeVisible();
    await expect(page.getByText('Price')).toBeVisible();
    // Verify 0 values are displayed
    const itemRows = page.locator('strong');
    const firstZero = itemRows.first();
    await expect(firstZero).toContainText('0');

    // 7. Verify at least 30 products are displayed with names, prices, and quantity controls
    // Verify products with images and headings
    const productHeadings = page.getByRole('heading', { level: 4 });
    const count = await productHeadings.count();
    expect(count).toBeGreaterThanOrEqual(30);

    // Verify products have prices
    const prices = page.locator('paragraph:has-text("₹")');
    const priceCount = await prices.count();
    expect(priceCount).toBeGreaterThanOrEqual(30);

    // Verify ADD TO CART buttons are present
    const addToCartButtons = page.getByRole('button', { name: 'ADD TO CART' });
    const buttonCount = await addToCartButtons.count();
    expect(buttonCount).toBeGreaterThanOrEqual(30);

    // Verify quantity spinners exist
    const spinbuttons = page.getByRole('spinbutton');
    const spinbuttonCount = await spinbuttons.count();
    expect(spinbuttonCount).toBeGreaterThanOrEqual(30);

    // Verify specific products are displayed
    await expect(page.getByRole('heading', { name: 'Brocolli - 1 Kg' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Mango - 1 Kg' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Cashews - 1 Kg' })).toBeVisible();
  });
});
