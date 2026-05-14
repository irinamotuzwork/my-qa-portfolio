import styles from "./Skills.module.css";
import Section from "@/components/Section/Section";

export default function Skills() {
  return (
    <Section>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>Skills & Automation Stack</h2>

        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>Playwright</div>
          <div className={styles.skillCard}>Cypress</div>
          <div className={styles.skillCard}>TypeScript</div>
          <div className={styles.skillCard}>JavaScript</div>
          <div className={styles.skillCard}>REST APIs</div>
          <div className={styles.skillCard}>CI/CD</div>
          <div className={styles.skillCard}>GitHub Actions</div>
          <div className={styles.skillCard}>SQL</div>
        </div>
      </div>
    </Section>
  );
}