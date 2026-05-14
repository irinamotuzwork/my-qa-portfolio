import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Workflow from "@/components/Workflow/Workflow";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Workflow />
      <Projects />
    </main>
  );
}