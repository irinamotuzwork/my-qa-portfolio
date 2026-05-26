import { Page } from '@playwright/test';
import { BlogPage } from '../pages/BlogPage';

export async function navigateBlog(page: Page) {
    const blogPage = new BlogPage(page);

    await blogPage.open();


    const posts = blogPage.getPostCards();
    const links = blogPage.getPostLink();

    return {
        blogPage,
        posts,
        links,
    };
}