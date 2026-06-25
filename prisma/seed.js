import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
      {
        title: "Playwright Framework Structure",
        slug: "playwright-framework-structure",
        excerpt: "How to organize scalable Playwright automation frameworks.",
        content: "A scalable Playwright framework should separate fixtures, pages, and tests.",
        tags: ["Playwright", "Automation"],
      },
      {
        title: "UI vs API Testing",
        slug: "ui-vs-api-testing",
        excerpt: "Comparing UI and API testing strategies.",
        content: "API tests are faster while UI tests validate user workflows.",
        tags: ["API Testing", "QA"],
      },
      {
        title: "Preventing Flaky Tests",
        slug: "preventing-flaky-tests",
        excerpt: "How to reduce flaky automation tests in CI pipelines.",
        content: "Flaky tests often come from unstable selectors and timing issues.",
        tags: ["Automation", "Best Practices"],
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });