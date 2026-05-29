import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage.page';


test('valid login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginPage.validLogin();
    await expect(page.getByPlaceholder('Search')).toBeVisible();

})