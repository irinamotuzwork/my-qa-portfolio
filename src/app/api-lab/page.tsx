import styles from "@/components/ApiLab/ApiLab.module.css";

export default function ApiTestingPage() {
  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>

            <h1>QA API Playground</h1>

            <p>
              Test and validate API endpoints with structured
              request/response workflows.
            </p>

          </div>
        </div>
      </section>

      {/* GET ALL POSTS */}
      <section className={styles.section}>
        <div className={styles.container}>

          <h2>GET All Posts</h2>

          <button className={styles.button}>
            Get All Posts
          </button>

        </div>
      </section>

      {/* GET SINGLE POST */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>

          <h2>GET Single Post</h2>

          <form className={styles.form}>
            <input
              className={styles.input}
              type="number"
              placeholder="Enter Post ID"
            />

            <button className={styles.button} type="submit">
              Get Post
            </button>
          </form>

        </div>
      </section>

    </main>
  );
}