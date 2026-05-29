import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.getByPlaceholder('Username');
        this.passwordField = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: ' Login ' });
    }

    async validLogin() {
        await this.attemptLogin('Admin', 'admin123');
    }

    async attemptLogin(username: string, password: string) {
        if (username) {
            await this.usernameField.fill(username);
        }
        if (password) {
            await this.passwordField.fill(password);
        }
        await this.loginButton.click();
    }

    fieldError(field: string): Locator {
        return this.page.locator('.oxd-input-group', { has: this.page.getByPlaceholder(field) });
    }
}