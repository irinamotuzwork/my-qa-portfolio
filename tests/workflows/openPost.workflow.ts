import { Page } from '@playwright/test';
import { BlogPage } from '../pages/BlogPage';

export async function openPost(page: Page, slug: string) {
  await page.goto(`/blog/${slug}`);

  const blogPage = new BlogPage(page);

  return {
    blogPage,
    slug,
  };
}