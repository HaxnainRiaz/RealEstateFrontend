import { test, expect } from '@playwright/test';

test.describe('Landlord Portal Forensic', () => {
    test.beforeEach(async ({ page }) => {
        // Log in as landlord node
        await page.goto('/login');
        await page.fill('input[name="email"]', 'landlord@institutional.node');
        await page.fill('input[name="password"]', 'protocol-123');
        await page.click('button[type="submit"]');
    });

    test('should display portfolio overview telemetry', async ({ page }) => {
        await page.goto('/landlord/dashboard');
        await expect(page.locator('text=Portfolio Overview')).toBeVisible();
    });
});
