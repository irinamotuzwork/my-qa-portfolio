import styles from "@/components/Blog/Blog.module.css";

export default function BlogPage() {
  const posts = [
    {
      title: "Building Reliable Playwright Tests",
      summary:
        "Lessons learned while improving selector stability and reducing flaky tests.",
    },
    {
      title: "Testing REST APIs with JavaScript",
      summary:
        "Using structured request validation and response assertions for API testing.",
    },
    {
      title: "Transitioning from Manual QA to Automation",
      summary:
        "How I started building automation frameworks using Playwright and Next.js.",
    },
  ];

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
            Thoughts, experiments, and practical lessons
            from building modern QA automation workflows.
          </p>

        </div>
      </section>

      {/* POSTS */}
      <section className={styles.postsSection}>
        <div className={styles.container}>

          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <article
                key={post.title}
                className={styles.postCard}
              >
                <h2>{post.title}</h2>

                <p>{post.summary}</p>

                <a href="#">
                  Read More →
                </a>
              </article>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}