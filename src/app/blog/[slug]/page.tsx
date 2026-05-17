type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string;
  createdAt: string;
};

async function getPost(slug: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <main>
        <h1>Post not found</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      <article>{post.content}</article>
    </main>
  );
}