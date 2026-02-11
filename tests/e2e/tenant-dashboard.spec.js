import { test, expect } from '@playwright/test';

test.describe('Tenant Dashboard Interaction', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/login');
        await page.fill('input[name="email"]', 'tenant@node.com');
        await page.fill('input[name="password"]', 'protocol-123');
        await page.click('button[type="submit"]');
    });

    test('should visualize ledger history', async ({ page }) => {
        await page.goto('/tenant/dashboard');
        await expect(page.locator('text=Recent Activity')).toBeVisible();
    });
});
