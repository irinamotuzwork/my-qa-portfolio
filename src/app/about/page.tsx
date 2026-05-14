import styles from "@/components/About/About.module.css";

export default function AboutPage() {
  return (
    <main>

      {/* HERO */}
      <section className={styles.aboutHero}>
        <div className={styles.sectionContainer}>
          <div className={styles.heroContent}>

            <p className={styles.eyebrow}>
              QA ENGINEERING • AUTOMATION • PLAYWRIGHT
            </p>

            <h1>About Me</h1>

            <p>
              I’m Irina, a QA Engineer with 6+ years of experience
              testing web, mobile, and enterprise applications in Agile
              environments, including Salesforce-integrated systems.
            </p>

            <p>
              My background includes end-to-end testing, API validation,
              integration testing, and SQL-based data verification across
              business-critical workflows.
            </p>

            <p>
              I work closely with developers, product teams, and business
              stakeholders to improve release quality, reduce production
              risk, and support reliable software delivery.
            </p>

            <p>
              Recently, I’ve been expanding into modern QA automation
              engineering through hands-on work with Playwright,
              JavaScript, CI/CD pipelines, and AI-assisted testing
              workflows.
            </p>

          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className={styles.section}>
        <div className={styles.sectionContainer}>

          <h2>Experience & Engineering Focus</h2>

          <div className={styles.experienceGrid}>

            <div className={styles.experienceCard}>
              <h3>Enterprise QA Foundation</h3>
              <p>
                Testing enterprise web, mobile, and Salesforce-integrated
                applications in Agile environments.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <h3>Validation & Quality Engineering</h3>
              <p>
                API validation, integration workflows, regression testing,
                and SQL-based data integrity verification.
              </p>
            </div>

            <div className={styles.experienceCard}>
              <h3>Automation Engineering Growth</h3>
              <p>
                Building Playwright automation frameworks, scalable UI testing
                workflows, and CI/CD-driven quality processes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CURRENT FOCUS */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionContainer}>

          <h2>Current Technical Focus</h2>

          <div className={styles.skillsGrid}>
            <span className={styles.skillTag}>Playwright</span>
            <span className={styles.skillTag}>JavaScript</span>
            <span className={styles.skillTag}>TypeScript</span>
            <span className={styles.skillTag}>API Testing</span>
            <span className={styles.skillTag}>SQL</span>
            <span className={styles.skillTag}>GitHub Actions</span>
            <span className={styles.skillTag}>CI/CD</span>
            <span className={styles.skillTag}>AI-assisted QA</span>
            <span className={styles.skillTag}>Test Automation</span>
          </div>

        </div>
      </section>

      {/* CAREER DIRECTION */}
      <section className={styles.section}>
        <div className={styles.sectionContainer}>

          <h2>Career Direction</h2>

          <div className={styles.careerText}>

            <p>
              My current focus is transitioning from traditional QA
              into modern automation engineering by building practical,
              maintainable, and scalable testing systems.
            </p>

            <p>
              This portfolio reflects hands-on learning in Playwright,
              API testing, frontend integration, and automation-focused
              engineering workflows.
            </p>

          </div>

        </div>
      </section>

    </main>
  );
}