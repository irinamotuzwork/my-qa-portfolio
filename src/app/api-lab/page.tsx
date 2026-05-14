import ApiHero from "@/components/ApiLab/ApiHero/ApiHero";
import ApiPlayground from "@/components/ApiLab/ApiPlayground/ApiPlayground";
import AutomationConcepts from "@/components/ApiLab/AutomationConcepts/AutomationConcepts";
import CodeSnippets from "@/components/ApiLab/CodeSnippets/CodeSnippets";
import MetricsDashboard from "@/components/ApiLab/MetricsDashboard/MetricsDashboard";

export default function ApiLabPage() {
  return (
    <main>
      <ApiHero />
      <ApiPlayground />
      <AutomationConcepts />
      <CodeSnippets />
      <MetricsDashboard />
    </main>
  );
}