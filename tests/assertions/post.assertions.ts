import { expect, Locator, Page } from "@playwright/test";

// verify the URL is correct for the post
export async function expectPostUrl(
    page: Page,
    slug: string
) {
    await expect(page).toHaveURL(
        new RegExp(`/blog/${slug}$`)
    );
}

// verify the post content is visible
export async function expectPostPageLoaded(
  page: Page
) {
  await expect(page.locator('article')).toBeVisible();
}

// verify the post title is visible
export async function expectPostTitleVisible(
  title: Locator
) {
  await expect(title).toBeVisible();
}