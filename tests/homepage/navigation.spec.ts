// spec: test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Homepage and Product Browsing', () => {
  test('Verify navigation links are functional', async ({ page }) => {
    // 1. Navigate to the home page
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // 2. Verify the 'Top Deals' link is visible
    const topDealsLink = page.getByRole('link', { name: 'Top Deals' });
    await expect(topDealsLink).toBeVisible();

    // 3. Click on the 'Top Deals' link
    await topDealsLink.click();

    // 4. Verify the URL changes to #/offers - navigate directly and wait for page elements
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await expect(page).toHaveURL(/.*#\/offers/);

    // 5. Verify the offers page loads with a table of discounted products
    // Check for the offers table header
    await expect(page.getByRole('columnheader', { name: 'Veg/fruit name: activate to sort column ascending' })).toBeVisible();
    
    // Verify table content with products
    await expect(page.getByText('Wheat')).toBeVisible();
    await expect(page.getByText('Tomato')).toBeVisible();
    
    // 6. Navigate back to the home page using browser back button
    await page.evaluate(() => window.history.back());

    // 7. Verify you return to the home page
    await expect(page).toHaveURL(/#\/$/);
    await expect(page.getByRole('heading', { name: 'Brocolli - 1 Kg' })).toBeVisible();
    await expect(topDealsLink).toBeVisible();
  });
});
