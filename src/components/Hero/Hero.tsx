import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>
            QA AUTOMATION • PLAYWRIGHT • AI WORKFLOWS
          </p>

          <h1>Irina Motuz</h1>

          <h2>
            QA Automation Engineer focused on Playwright,
            JavaScript, and AI-driven testing systems.
          </h2>

          <p className={styles.description}>
            Building modern browser automation frameworks,
            AI-assisted QA workflows, and scalable
            end-to-end testing systems with Playwright and JavaScript.
          </p>

          <div className={styles.ctaButtons}>
            <a href="#projects" className={styles.ctaButton}>
              View Projects
            </a>

            <a href="/resume.pdf" className={styles.ctaButton}>
              Download Resume
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.terminal}>
            <div className={styles.terminalTop}>
              <span className={`${styles.dot} ${styles.red}`} />
              <span className={`${styles.dot} ${styles.yellow}`} />
              <span className={`${styles.dot} ${styles.green}`} />
            </div>

            <div className={styles.terminalContent}>
              <span>$ npx playwright test</span>
              <span>Running 12 tests...</span>
              <span>✓ Passed: Login flow</span>
              <span>✓ Passed: API validation</span>
            </div>
          </div>

          <div className={styles.codeSnippet}>
            <pre>
              <code>
                await page.locator('#submit').click();
              </code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}