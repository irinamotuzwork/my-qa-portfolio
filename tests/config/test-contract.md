# Test Runner Contract

## Purpose
This document defines execution rules for all automated tests in this project.

---

## 1. Tagging Rules

Every test MUST include at least one tag:

- @smoke → critical system validation
- @regression → full coverage validation
- @api → API layer tests
- @ui → UI layer tests
- @integration → cross-layer validation
- @workflow → business flow tests

---

## 2. Execution Rules

### Smoke Tests
- Must be fast (<5s per test)
- Must not depend on multiple systems
- Must validate critical paths only

### API Tests
- Must validate schema + response structure
- Must not depend on UI

### UI Tests
- Must validate rendering and navigation only
- Must not include API assertions directly

### Integration Tests
- Must validate DB → API → UI consistency

---

## 3. Workflow Rules

- Workflows MUST NOT contain assertions
- Workflows define user behavior only
- Workflows must be reusable across test types

---

## 4. Assertion Rules

- Assertions must be pure functions
- Assertions must not contain navigation logic
- Assertions must be reusable across tests

---

## 5. Stability Rules

- No hardcoded timing waits
- No test dependency on execution order
- All test data must be deterministic (seeded DB)

---

## 6. CI Execution Rules

- Smoke tests run on every PR
- Full regression runs on merge to main
- Integration tests run on main branch only