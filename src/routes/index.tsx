import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import ResumeModal from "@/components/portfolio/ResumeModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Mateti Rugvesh — Full-Stack & AI Engineer",
      },
      {
        name: "description",
        content:
          "Portfolio of Mateti Rugvesh, Full-Stack & AI Engineer from Hyderabad, India — scalable web applications, LLM post-training evaluation, prompt engineering and computer vision pipelines.",
      },
      { property: "og:title", content: "Mateti Rugvesh — Full-Stack & AI Engineer" },
      {
        property: "og:description",
        content:
          "Full-Stack & AI Engineer specializing in scalable web apps, LLM post-training evaluation workflows, prompt engineering and computer vision.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [resumesOpen, setResumesOpen] = useState(false);
  const openResumes = () => setResumesOpen(true);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      {/* Ambient glow background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 h-[34rem] w-[34rem] rounded-full bg-glow-indigo/15 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-glow-purple/10 blur-[140px]" />
        <div className="absolute bottom-0 -left-40 h-[28rem] w-[28rem] rounded-full bg-glow-cyan/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(1 0 0 / 3%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 3%) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <Navbar onOpenResumes={openResumes} />

      <main>
        <Hero onOpenResumes={openResumes} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-border py-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {`Mateti Rugvesh`} · Built with React &amp; Tailwind CSS
        </p>
      </footer>

      <ResumeModal open={resumesOpen} onOpenChange={setResumesOpen} />
    </div>
  );
}
