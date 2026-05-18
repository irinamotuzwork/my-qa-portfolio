import { Metadata } from "next";

import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Workflow from "@/components/Workflow/Workflow";
import Projects from "@/components/Projects/Projects";

export const metadata: Metadata = {
  title: "QA Engineer Portfolio",
  description: "Automation testing, Playwright, API testing portfolio",
  openGraph: {
    title: "QA Engineer Portfolio",
    description: "Automation testing, Playwright, API testing portfolio",
    url: "http://localhost:3000",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

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