# API Contract

This document defines the expected behavior of the blog posts API.

---

## Shared Schema — Post Object

| Field     | Type          | Rules                                                      |
| --------- | ------------- | ---------------------------------------------------------- |
| id        | integer       | unique                                                     |
| title     | string        | required, non-empty                                        |
| slug      | string        | required, lowercase, allowed characters: `a-z0-9-`, unique |
| excerpt   | string        | required, non-empty                                        |
| content   | string        | required, non-empty                                        |
| tags      | array<string> | 1+ non-empty strings                                       |
| createdAt | string        | ISO 8601 date string                                       |

---

## GET /api/posts

| Requirement   | Expected Result                |
| ------------- | ------------------------------ |
| Status        | 200                            |
| Content-Type  | application/json               |
| Response      | Array<Post>                    |
| Minimum items | 1                              |
| Schema        | Must follow Post Object Schema |

---

## GET /api/posts/{slug}

| Requirement      | Expected Result                    |
| ---------------- | ---------------------------------- |
| Status (valid)   | 200                                |
| Status (invalid) | 404                                |
| Content-Type     | application/json                   |
| Response         | Post Object                        |
| Schema           | Must follow Post Object Schema     |
| Business rule    | Returned `slug` must match request |
| Strict schema    | No extra fields allowed            |

---

## Error Contract

| Status | Response                            |
| ------ | ----------------------------------- |
| 404    | `{ "error": "Post not found" }`     |
| 405    | `{ "error": "Method not allowed" }` |

---

## Notes

* All responses must conform strictly to the Post Object schema.
* Arrays must never be empty unless explicitly allowed.
* Slug matching is case-sensitive and must be exact.
