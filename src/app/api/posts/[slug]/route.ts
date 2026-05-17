import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return Response.json(post);
}