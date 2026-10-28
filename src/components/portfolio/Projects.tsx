import { ExternalLink, FolderKanban } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { projects } from "@/data/portfolio";

const accents: Record<string, { text: string; ring: string; glow: string }> = {
  cyan: { text: "text-glow-cyan", ring: "ring-glow-cyan/30", glow: "hover:shadow-[0_20px_60px_-25px] hover:shadow-glow-cyan/50" },
  indigo: { text: "text-glow-indigo", ring: "ring-glow-indigo/30", glow: "hover:shadow-[0_20px_60px_-25px] hover:shadow-glow-indigo/50" },
  purple: { text: "text-glow-purple", ring: "ring-glow-purple/30", glow: "hover:shadow-[0_20px_60px_-25px] hover:shadow-glow-purple/50" },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker="Portfolio" title={<>Featured <span className="text-gradient">Projects</span></>} />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => {
            const a = accents[project.accent];
            return (
              <Reveal key={project.title}>
                <article
                  className={`glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glow-indigo/40 ${a.glow}`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-secondary ring-1 ${a.ring}`}
                    >
                      <FolderKanban className={`h-5 w-5 ${a.text}`} />
                    </div>
                    <ExternalLink
                      className={`h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 ${a.text}`}
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className={`rounded-full border border-border bg-secondary/70 px-2.5 py-1 text-[11px] font-medium ${a.text}`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
