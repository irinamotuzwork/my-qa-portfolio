import styles from "./Workflow.module.css";
import Section from "@/components/Section/Section";

export default function Workflow() {
  const steps = [
    "Commit",
    "Build",
    "Test",
    "Report",
    "Analyze",
    "Deploy",
  ];

  return (
    <Section>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>Automation Workflow</h2>

        <div className={styles.pipeline}>
          {steps.map((step, index) => (
            <div key={step} className={styles.step}>
              <span className={styles.label}>{step}</span>

              {index !== steps.length - 1 && (
                <span className={styles.arrow}>→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}