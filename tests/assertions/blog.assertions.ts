import { expect, Locator, Page } from '@playwright/test';
import { postMessageToThread } from 'node:worker_threads';

// verify that the blog page has posts
export async function expectBlogHasPosts(posts: Locator) {
    const count = await posts.count();

    expect(count).toBeGreaterThan(0);
}

// verify the page itself opened correctly
export async function expectBlogPageLoaded(
    page: Page
) {
    await expect(page).toHaveURL(new RegExp('/blog$'));
}

// verify that the post cards are visible
export async function expectPostCardsVisible(
  posts: Locator
) {
  const count = await posts.count();

  for (let i = 0; i < count; i++) {
    await expect(posts.nth(i)).toBeVisible();
  }
}