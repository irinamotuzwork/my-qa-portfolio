import { Page } from '@playwright/test';
import { BlogPage } from '../pages/BlogPage';

export async function openBlogPage(page: Page) {
    const blogPage = new BlogPage(page);

    await blogPage.open();

    return blogPage;
}