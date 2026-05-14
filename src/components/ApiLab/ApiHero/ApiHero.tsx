import styles from "./ApiHero.module.css";

export default function ApiHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            API TESTING • AUTOMATION • QA ENGINEERING
          </p>

          <h1>
            Interactive API Testing & Automation Lab
          </h1>

          <p className={styles.description}>
            Simulating real-world API validation workflows
            including response assertions, schema verification,
            request chaining, and automation-focused testing strategies.
          </p>

          <div className={styles.metrics}>
            <div className={styles.metricCard}>
              <span>99.2%</span>
              <p>Tests Passed</p>
            </div>

            <div className={styles.metricCard}>
              <span>248ms</span>
              <p>Avg Response</p>
            </div>

            <div className={styles.metricCard}>
              <span>94%</span>
              <p>Coverage</p>
            </div>
          </div>
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