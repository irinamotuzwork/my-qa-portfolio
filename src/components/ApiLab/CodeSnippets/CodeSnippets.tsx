import Section from "@/components/Section/Section";
import styles from "./CodeSnippets.module.css";

export default function CodeSnippets() {
  const snippets = [
    {
      title: "Response Assertion",
      code: `const response = await request.get("/api/posts");

expect(response.status()).toBe(200);

const body = await response.json();

expect(body.status).toBe("success");`,
    },
    {
      title: "Schema Validation",
      code: `expect(body).toMatchObject({
  id: expect.any(Number),
  title: expect.any(String),
  status: expect.any(String),
});`,
    },
    {
      title: "Request Chaining",
      code: `const login = await request.post("/auth");

const token = (await login.json()).token;

const profile = await request.get("/profile", {
  headers: {
    Authorization: \`Bearer \${token}\`,
  },
});`,
    },
  ];

  return (
    <Section>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>
          Automation Code Snippets
        </h2>

        <p className={styles.sectionIntro}>
          Example API automation patterns including
          response assertions, schema validation,
          and authenticated request workflows.
        </p>

        <div className={styles.grid}>
          {snippets.map((snippet) => (
            <article
              key={snippet.title}
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <div className={styles.dots}>
                  <span className={styles.red}></span>
                  <span className={styles.yellow}></span>
                  <span className={styles.green}></span>
                </div>

                <p>{snippet.title}</p>
              </div>

              <pre className={styles.codeBlock}>
                <code>{snippet.code}</code>
              </pre>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}