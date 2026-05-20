import styles from "@/components/Blog/Blog.module.css";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {string} title
 * @property {string} slug
 * @property {string} excerpt
 * @property {string} content
 * @property {string} tags
 * @property {string} createdAt
 */

export default async function BlogPage() {
  /** @type {Post[]} */
  const posts = (await getPosts()) || [];

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>
            QA ENGINEERING BLOG
          </p>

          <h1>
            Notes on Automation,
            Testing, and Engineering
          </h1>

          <p className={styles.description}>
            Thoughts, experiments, and practical lessons from building modern QA automation workflows.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className={styles.postsSection}>
        <div className={styles.container}>
          {posts.length === 0 ? (
            <p className={styles.emptyState}>
              No blog posts found.
            </p>
          ) : (
            <div className={styles.postsGrid}>
              {posts.map((post) => (
                <article
                  key={post.id}
                  className={styles.postCard}
                >
                  <h2>{post.title}</h2>

                  <p>{post.excerpt}</p>

                  <Link href={`/blog/${post.slug}`}>
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}