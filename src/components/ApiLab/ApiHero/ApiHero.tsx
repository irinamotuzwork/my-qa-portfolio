import styles from "./ApiHero.module.css";

export default function ApiHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            API TESTING • AUTOMATION
          </p>

          <h1>
            API Testing Lab
          </h1>

          <p className={styles.description}>
            Execute and validate API requests with response
            assertions and schema checks.
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.visual}>
          <div className={styles.terminal}>
            <div className={styles.terminalTop}>
              <span className={styles.red}></span>
              <span className={styles.yellow}></span>
              <span className={styles.green}></span>
            </div>

            <div className={styles.terminalContent}>
              <p>GET /api/posts</p>
              <p>Status: 200 OK</p>
              <p>Response Time: 248ms</p>
              <p>Assertions Passed: 12/12</p>

              <pre>
{`{
  "id": 1,
  "title": "API Automation",
  "status": "success"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}