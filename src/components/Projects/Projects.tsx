import styles from "./Projects.module.css";
import Section from "@/components/Section/Section";

export default function Projects() {
  const projects = [
  {
    title: "Playwright UI Automation Framework",
    stack: ["Playwright", "TypeScript", "CI/CD", "GitHub Actions"],
    description:
      "End-to-end UI automation framework with scalable page objects and CI integration.",
    features: [
      "Page Object Model structure",
      "Parallel test execution",
      "CI pipeline integration",
      "HTML reports",
    ],
    strategy:
      "Focused on reducing flaky tests via stable selectors and retry strategies.",
    link: "https://github.com/your-repo",
  },
  {
    title: "REST API Automation Suite",
    stack: ["JavaScript", "REST API", "Postman", "Jest"],
    description:
      "Automated API validation framework with structured assertions and schema validation.",
    features: [
      "Response schema validation",
      "Data-driven tests",
      "Error handling coverage",
    ],
    strategy:
      "Validated contract consistency across microservices and reduced regression risk.",
    link: "https://github.com/your-repo",
  },
  {
    title: "AI-assisted QA Workflow",
    stack: ["Playwright", "AI tools", "Node.js"],
    description:
      "Experimental workflow integrating AI for test generation and failure analysis.",
    features: [
      "AI-generated test cases",
      "Failure pattern analysis",
      "Test optimization suggestions",
    ],
    strategy:
      "Used AI to improve test coverage and reduce manual regression effort.",
    link: "https://github.com/your-repo",
  },
];

  return (
    <Section>
      <div id="projects" className={styles.container}>
        <h2 className={styles.sectionHeading}>Featured Projects</h2>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.projectCard}>
              <h3>{project.title}</h3>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.stack}>
                {project.stack.map((item) => (
                  <span key={item} className={styles.stackItem}>
                    {item}
                  </span>
                ))}
              </div>

              <ul className={styles.features}>
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <p className={styles.strategy}>
                <strong>Testing strategy:</strong> {project.strategy}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View Code →
              </a>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}