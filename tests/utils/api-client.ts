import { APIRequestContext } from "@playwright/test";

export async function getPosts(request: APIRequestContext) {
    return request.get('/api/posts');
}

