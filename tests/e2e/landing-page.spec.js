import { test, expect } from '@playwright/test';

test.describe('Landing Page Geographic Logic', () => {
    test('should load institutional hero section', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('h1')).toContainText(/Institutional/i);
    });

    test('should navigate to pricing protocol', async ({ page }) => {
        await page.goto('/');
        await page.click('text=Pricing');
        await expect(page).toHaveURL(/\/pricing/);
    });
});
