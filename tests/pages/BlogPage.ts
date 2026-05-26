import { Page } from '@playwright/test';

export class BlogPage {
    constructor(private page: Page) {}

    async open() {
        await this.page.goto('/blog');
    }

    getPostCards() {
        return this.page.locator('[data-testid="post-card"]');
    }

    getPostLink() {
        return this.page.locator('[data-testid="post-link"]');
    }

}