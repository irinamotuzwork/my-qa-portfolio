import Section from "@/components/Section/Section";
import styles from "./MetricsDashboard.module.css";

export default function MetricsDashboard() {
  const metrics = [
    { label: "Tests Passed", value: "128" },
    { label: "Avg Response Time", value: "210ms" },
    { label: "API Coverage", value: "87%" },
    { label: "Failed Assertions", value: "2" },
  ];

  return (
    <Section>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          Testing Metrics
        </h2>

        <p className={styles.sectionIntro}>
          Snapshot of API reliability, execution performance,
          and automated test coverage signals.
        </p>

        <div className={styles.grid}>
          {metrics.map((metric) => (
            <div key={metric.label} className={styles.card}>
              <div className={styles.value}>
                {metric.value}
              </div>

              <div className={styles.label}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}