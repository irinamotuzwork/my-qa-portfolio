import { z } from 'zod';

export const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  createdAt: z.string().datetime(),
});

export const PostsSchema = z.array(PostSchema);

export function validatePostSchema(data: unknown) {
  return PostsSchema.safeParse(data);
}