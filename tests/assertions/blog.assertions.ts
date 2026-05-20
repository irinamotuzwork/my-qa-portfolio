import { expect, Locator } from '@playwright/test';

export async function expectBlogHasPosts(posts: Locator) {
    const count = await posts.count();

    expect(count).toBeGreaterThan(0);
}