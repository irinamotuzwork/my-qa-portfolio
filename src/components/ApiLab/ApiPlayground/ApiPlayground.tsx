"use client";

import { useState, useCallback } from "react";
import Section from "@/components/Section/Section";
import styles from "./ApiPlayground.module.css";

export default function ApiPlayground() {
  const [endpoint, setEndpoint] = useState("/api/posts");

  const [response, setResponse] = useState<unknown>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseTime, setResponseTime] = useState<number | null>(null);

  const [assertions, setAssertions] = useState<string[]>([]);

  const sendRequest = useCallback(async () => {
    try {
      setLoading(true);

      const start = performance.now();

      const res = await fetch(endpoint);
      const data = await res.json();

      const end = performance.now();

      // status
      setStatus(`${res.status} ${res.statusText}`);

      // response
      setResponse(data);

      // timing
      setResponseTime(Math.round(end - start));

      // assertions
      const checks: string[] = [];

      if (res.status === 200) {
        checks.push("✓ Status equals 200");
      } else {
        checks.push(`✗ Unexpected status: ${res.status}`);
      }

      if (Array.isArray(data)) {
        checks.push("✓ Response is array");
      } else if (data && typeof data === "object") {
        checks.push("✓ Response is object");
      }

      if (Array.isArray(data) && data.length > 0 && data[0]?.title) {
        checks.push("✓ Required fields present");
      }

      setAssertions(checks);
    } catch (error) {
      console.error(error);
      setStatus("Request failed");
      setResponse(null);
      setAssertions(["✗ Request failed"]);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  return (
    <Section>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>API Playground</h2>

        <p className={styles.sectionIntro}>
          Execute requests and validate endpoint responses,
          status codes, and payload structure.
        </p>

        <div className={styles.playgroundGrid}>
          {/* REQUEST PANEL */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>API Request</div>

            <div className={styles.formGroup}>
              <label>Endpoint</label>

              <input
                type="text"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                data-testid="endpoint-input"
                aria-label="API endpoint URL"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Method</label>

              <select defaultValue="GET" aria-label="HTTP request method">
                <option>GET</option>
                <option>POST</option>
                <option>PUT</option>
                <option>DELETE</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Headers</label>

              <textarea
                rows={5}
                readOnly
                value={`{
  "Content-Type": "application/json",
  "Authorization": "Bearer token"
}`}
                aria-label="Request headers"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Request Body</label>

              <textarea
                rows={7}
                readOnly
                value={`{
  "title": "Automation Test",
  "status": "active"
}`}
                aria-label="Request body"
              />
            </div>

            <button
              className={styles.sendButton}
              onClick={sendRequest}
              data-testid="send-request-button"
              aria-label="Send API request"
            >
              {loading ? "Sending..." : "Send Request"}
            </button>
          </div>

          {/* RESPONSE PANEL */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>API Response</div>

            <div className={styles.responseMeta}>
              <div>
                <span>Status</span>
                <strong>{status || "Waiting..."}</strong>
              </div>

              <div>
                <span>Response Time</span>
                <strong>
                  {responseTime ? `${responseTime}ms` : "--"}
                </strong>
              </div>

              <div>
                <span>Assertions</span>
                <strong>{assertions.length} Checks</strong>
              </div>
            </div>

            <div className={styles.responseBox}>
              <pre>
                {response
                  ? JSON.stringify(response, null, 2)
                  : "No response yet"}
              </pre>
            </div>

            <div className={styles.assertions}>
              {assertions.map((a) => (
                <div
                  key={a}
                  className={
                    a.startsWith("✓")
                      ? styles.assertionSuccess
                      : styles.assertionFailure
                  }
                >
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}