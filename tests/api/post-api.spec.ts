import { test, expect } from "@playwright/test";
import { getPosts } from "../utils/api-client";
import { validatePostSchema } from "../schemas/post.schema";

test('@smoke @api @contract GET /api/posts return valid post data', async ({ request }) => {
    const response = await getPosts(request);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    const validation = validatePostSchema(body);
    expect(validation.success).toBe(true);

    
});