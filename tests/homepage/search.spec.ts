// spec: test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Homepage and Product Browsing', () => {
  test('Verify search functionality filters products', async ({ page }) => {
    // 1. Navigate to the home page
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // 2. Click on the search box
    await page.getByRole('searchbox', { name: 'Search for Vegetables and' }).click();

    // 3. Type 'Tomato' in the search field
    await page.getByRole('searchbox', { name: 'Search for Vegetables and' }).fill('Tomato');

    // 4. Verify only Tomato product is displayed
    await expect(page.getByRole('heading', { name: 'Tomato - 1 Kg' })).toBeVisible();

    // 5. Verify other products are hidden from the results - verify Brocolli is not visible
    await expect(page.getByRole('heading', { name: 'Brocolli - 1 Kg' })).not.toBeVisible();

    // 6. Clear the search box
    await page.getByRole('searchbox', { name: 'Search for Vegetables and' }).click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');

    // 7. Verify all products are displayed again
    await expect(page.getByRole('heading', { name: 'Brocolli - 1 Kg' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Tomato - 1 Kg' })).toBeVisible();

    // 8. Search for 'Mango'
    await page.getByRole('searchbox', { name: 'Search for Vegetables and' }).fill('Mango');

    // 9. Verify only Mango product is shown
    await expect(page.getByRole('heading', { name: 'Mango - 1 Kg' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Brocolli - 1 Kg' })).not.toBeVisible();
  });
});
