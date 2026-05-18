import ApiHero from "@/components/ApiLab/ApiHero/ApiHero";
import ApiPlayground from "@/components/ApiLab/ApiPlayground/ApiPlayground";
import AutomationConcepts from "@/components/ApiLab/AutomationConcepts/AutomationConcepts";
import CodeSnippets from "@/components/ApiLab/CodeSnippets/CodeSnippets";
import MetricsDashboard from "@/components/ApiLab/MetricsDashboard/MetricsDashboard";

export default function ApiLabPage() {
  return (
<main>
  <div style={{ paddingTop: "var(--header-height)" }}>

    <section>
      <ApiPlayground />
    </section>

    <section style={{ marginTop: "var(--space-10)", borderTop: "1px solid var(--border)" }}>
      <AutomationConcepts />
    </section>

    <section style={{ marginTop: "var(--space-10)", borderTop: "1px solid var(--border)" }}>
      <CodeSnippets />
    </section>

  </div>
</main>
  );
}