import Section from "@/components/Section/Section";
import styles from "./ApiPlayground.module.css";

export default function ApiPlayground() {
  return (
    <Section>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          API Playground
        </h2>

        <p className={styles.sectionIntro}>
          Simulated API validation environment for testing
          request workflows, response assertions, and
          structured API automation scenarios.
        </p>

        <div className={styles.playgroundGrid}>
          {/* REQUEST PANEL */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              Request Builder
            </div>

            <div className={styles.formGroup}>
              <label>Endpoint</label>

              <input
                type="text"
                value="/api/posts"
                readOnly
              />
            </div>

            <div className={styles.formGroup}>
              <label>Method</label>

              <select defaultValue="GET">
                <option>GET</option>
                <option>POST</option>
                <option>PUT</option>
                <option>DELETE</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Headers</label>

              <textarea
                rows={5}
                readOnly
                value={`{
  "Content-Type": "application/json",
  "Authorization": "Bearer token"
}`}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Request Body</label>

              <textarea
                rows={7}
                readOnly
                value={`{
  "title": "Automation Test",
  "status": "active"
}`}
              />
            </div>

            <button className={styles.sendButton}>
              Send Request
            </button>
          </div>

          {/* RESPONSE PANEL */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              Response Viewer
            </div>

            <div className={styles.responseMeta}>
              <div>
                <span>Status</span>
                <strong>200 OK</strong>
              </div>

              <div>
                <span>Response Time</span>
                <strong>248ms</strong>
              </div>

              <div>
                <span>Assertions</span>
                <strong>12 Passed</strong>
              </div>
            </div>

            <div className={styles.responseBox}>
<pre>{`{
  "id": 1,
  "title": "Automation Test",
  "status": "success",
  "results": {
    "schema": "valid",
    "responseTime": "within threshold"
  }
}`}</pre>
            </div>

            <div className={styles.assertions}>
              <div className={styles.assertionSuccess}>
                ✓ Status equals 200
              </div>

              <div className={styles.assertionSuccess}>
                ✓ Response schema valid
              </div>

              <div className={styles.assertionSuccess}>
                ✓ Response time under 300ms
              </div>

              <div className={styles.assertionSuccess}>
                ✓ Required fields present
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}