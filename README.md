## 🧠 Project Context (AI / System Understanding)

This project is a QA Engineering Portfolio Blog System designed to demonstrate modern test automation, API design, and end-to-end testing workflows using Next.js, Prisma, and Playwright.

The system simulates a real-world content platform with a full-stack testing architecture.

---

## Project Purpose

The goal of this project is to demonstrate QA automation engineering skills by building a testable web application with:

- API layer validation
- database-backed content
- UI rendering layer
- end-to-end testing readiness (Playwright)

It is intentionally structured to mirror production systems where QA engineers validate data consistency across multiple layers.

---

## Tech Stack

- Next.js (App Router)
- TypeScript (TSX)
- Prisma ORM
- SQLite database (local development)
- REST API routes (Next.js API layer)
- Playwright (planned for E2E testing)

---

## Architecture Overview

The system follows a layered architecture:

1. Database Layer (Prisma + SQLite)
   - Stores blog posts
   - Defines schema for Post model

2. API Layer (Next.js route handlers)
   - `/api/posts` → returns all posts
   - `/api/posts/[slug]` → returns single post
   - Acts as abstraction between DB and UI

3. UI Layer (Next.js App Router)
   - `/blog` → blog listing page
   - `/blog/[slug]` → dynamic blog detail page
   - Fetches data from API layer

---

## Data Flow

User Request → UI (Next.js Page)
→ fetch() call
→ API Route (Next.js)
→ Prisma Client
→ SQLite Database
→ Response JSON
→ UI rendering

---

## QA Engineering Focus

This project is designed to support QA automation workflows:

- API contract validation (posts, slug endpoints)
- UI rendering verification (blog list and detail pages)
- Data consistency checks between DB, API, and UI
- E2E testing readiness using Playwright
- Regression testing for blog workflows

---

## Key Features

- Dynamic blog routing using `/blog/[slug]`
- Database-driven content system
- REST API abstraction layer
- Clean separation of UI, API, and DB
- Seed-based test data setup
- Designed for automation testing expansion

---

## Testing Strategy (Planned)

- API tests: validate JSON structure and response correctness
- UI tests: validate blog rendering and navigation
- E2E tests: simulate user clicking blog → reading post
- Data validation tests: ensure DB ↔ API ↔ UI consistency

---

## Design Philosophy

The project is intentionally structured to mimic production-grade QA environments where:

- data integrity matters across layers
- APIs are independently testable
- UI is decoupled from database logic
- automation testing is a first-class concern

This makes the project suitable as a QA automation engineering portfolio artifact.

## 🧪 Playwright Test Plan

This project is designed to support end-to-end testing using Playwright. The goal is to validate correctness across API, UI, and database layers in a realistic QA workflow.

---

## Test Scope

The Playwright test suite will cover the following areas:

### 1. Blog Listing Page (`/blog`)
- Verify page loads successfully
- Validate that all seeded posts are displayed
- Confirm each post card contains:
  - title
  - excerpt
  - "Read More" link

---

### 2. Blog Detail Page (`/blog/[slug]`)
- Verify dynamic routing works correctly
- Validate correct post content is displayed based on slug
- Ensure mismatch does not occur between slug and content
- Check that:
  - title matches API data
  - content matches API data
  - tags are displayed correctly

---

### 3. API Layer (`/api/posts`, `/api/posts/[slug]`)
- Validate `/api/posts` returns an array of posts
- Validate `/api/posts/[slug]` returns a single post object
- Confirm response structure matches schema:
  - id
  - title
  - slug
  - excerpt
  - content
  - tags
  - createdAt

---

### 4. Data Consistency Tests
- Ensure UI data matches API response
- Ensure API response matches database records
- Detect missing or mismatched fields across layers

---

### 5. Navigation Flow Tests
- User can navigate from `/blog` → `/blog/[slug]`
- "Read More" links route correctly
- No broken links or 404 pages for valid slugs

---

## Testing Strategy

Playwright tests will simulate real user behavior:

1. Load blog page
2. Select a post
3. Navigate to detail page
4. Validate content correctness
5. Cross-check API responses

---

## Future Enhancements

- Add API mocking for isolated UI tests
- Add visual regression testing for blog layout
- Add CI pipeline (GitHub Actions) for automated test runs
- Extend tests to validate performance and loading time

## Test Execution

### Smoke tests
npx playwright test --grep "@smoke"

### API tests
npx playwright test --grep "@api"

### UI tests
npx playwright test --grep "@ui"

### Integration tests
npx playwright test --grep "@integration"

### Full regression
npx playwright test --grep "@regression"