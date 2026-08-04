import { test, expect } from '@playwright/test';
import { PrismaClient } from '@prisma/client';
import { validatePostSchema } from '../schemas/post.schema';

const prisma = new PrismaClient();
const POSTS_ENDPOINT = '/api/posts';

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  createdAt: string;
};

test.afterAll(async () => {
  await prisma.$disconnect();
});

// ---------------------------------------------------------
// Stage 1: HTTP Basics
// ---------------------------------------------------------
test('Stage 1 - GET /api/posts returns 200 and JSON', async ({ request }) => {
  // Step 1: Make the request
  const response = await request.get(POSTS_ENDPOINT);

  // Step 2: Verify request succeeded
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // Step 3: Verify JSON response
  expect(response.headers()['content-type']).toContain('application/json');

  // Step 4: Parse response
  const body: Post[] = await response.json();

  // Step 5: Verify response structure
  expect(body).toBeInstanceOf(Array);
  expect(body.length).toBeGreaterThan(0);
});

// ---------------------------------------------------------
// Stage 2: Contract Validation
// ---------------------------------------------------------
test('Stage 2 - GET /api/posts matches API contract', async ({ request }) => {
  const response = await request.get(POSTS_ENDPOINT);

  expect(response.ok()).toBeTruthy();

  const body = await response.json();

  const result = validatePostSchema(body);

   if (!result.success) {
    console.error(result.error.format());
  }

  expect(result.success).toBe(true);

});

// ---------------------------------------------------------
// Stage 3: Data Integrity
// ---------------------------------------------------------
test('Stage 3 - API posts match database records', async ({ request }) => {
  // Source A: API
  const response = await request.get(POSTS_ENDPOINT);

  expect(response.ok()).toBeTruthy();

  const apiPosts: Post[] = await response.json();

  // Source B: Database
  const dbPosts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Verify same number of posts
  expect(apiPosts.length).toBe(dbPosts.length);

  // Compare every database record to API response
  for (const dbPost of dbPosts) {
    const apiPost = apiPosts.find(post => post.slug === dbPost.slug);

    if (!apiPost) {
      throw new Error(
        `Post "${dbPost.slug}" was not returned by the API`
      );
    }

    expect(apiPost.id).toBe(dbPost.id);
    expect(apiPost.title).toBe(dbPost.title);
    expect(apiPost.slug).toBe(dbPost.slug);
    expect(apiPost.excerpt).toBe(dbPost.excerpt);
    expect(apiPost.content).toBe(dbPost.content);

    // Compare tags
    expect(apiPost.tags).toEqual(dbPost.tags);

    // Prisma returns Date, API returns ISO string
    expect(apiPost.createdAt).toBe(
      dbPost.createdAt.toISOString()
    );
  }
});