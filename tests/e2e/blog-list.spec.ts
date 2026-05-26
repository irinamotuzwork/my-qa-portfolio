import { test } from '@playwright/test';
import { openBlogPage } from '../workflows/openBlogPage.workflow';
import { expectBlogHasPosts } from '../assertions/blog.assertions';



test('@smoke @ui blog-list renders posts', async ({ page}) => {
    const blogPage = await openBlogPage(page);

    const posts = blogPage.getPostCards();

    await expectBlogHasPosts(posts);
    
});