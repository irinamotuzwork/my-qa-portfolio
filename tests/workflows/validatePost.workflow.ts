import { Page } from '@playwright/test';
import { openBlogPage } from './openBlogPage.workflow';

export async function validatePost(
  page: Page
) {
  const blogPage = await openBlogPage(page);

  const firstPost = blogPage
    .getPostLink()
    .first();

  const href = await firstPost.getAttribute('href');

  const slug = href?.split('/').pop();

  await firstPost.click();

  const uiTitle = await page
    .locator('h1')
    .textContent();

  return {
    slug,
    uiTitle
  };
}