import { expect } from '@playwright/test';
import { Given, When, Then } from './fixtures';

Given('I am on the login page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('I log in with valid credentials', async ({ loginPage }) => {
  await loginPage.validLogin();
});

When('I log in with username {string} and password {string}', async ({ loginPage }, username: string, password: string) => {
  await loginPage.attemptLogin(username, password);
});

Then('I should see the dashboard search field', async ({ dashboardPage }) => {
  await expect(dashboardPage.searchField).toBeVisible();
});

Then('I should see the error {string}', async ({ page }, error: string) => {
  await expect(page.getByText(error).first()).toBeVisible();
});

Then('I should see a {string} error for {string}', async ({ loginPage }, error: string, field: string) => {
  await expect(loginPage.fieldError(field).getByText(error)).toBeVisible();
});
