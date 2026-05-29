import { type Page, type Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly searchField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.getByPlaceholder('Search');
    }
}
