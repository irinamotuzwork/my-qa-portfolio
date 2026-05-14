import Section from "@/components/Section/Section";
import styles from "./AutomationConcepts.module.css";

export default function AutomationConcepts() {
  const concepts = [
    {
      title: "Schema Validation",
      description:
        "Validate response structures and ensure API contracts remain consistent across releases.",
    },
    {
      title: "Auth Testing",
      description:
        "Verify authentication flows, token handling, authorization logic, and protected endpoints.",
    },
    {
      title: "Response Assertions",
      description:
        "Assert status codes, payload values, response timing, and required field integrity.",
    },
    {
      title: "Contract Testing",
      description:
        "Ensure frontend and backend integrations remain compatible during service evolution.",
    },
    {
      title: "Request Chaining",
      description:
        "Reuse API responses dynamically across workflows to simulate real business scenarios.",
    },
    {
      title: "Error Handling",
      description:
        "Validate API behavior under invalid inputs, edge cases, and unexpected failure conditions.",
    },
  ];

  return (
    <Section>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          Automation Testing Concepts
        </h2>

        <p className={styles.sectionIntro}>
          Core API automation principles used to validate
          reliability, integration stability, response accuracy,
          and production-ready service behavior.
        </p>

        <div className={styles.grid}>
          {concepts.map((concept) => (
            <article
              key={concept.title}
              className={styles.card}
            >
              <h3>{concept.title}</h3>

              <p>{concept.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}