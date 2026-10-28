import { useState } from "react";
import { Cpu } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { skillCategories, skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [active, setActive] = useState<(typeof skillCategories)[number]>("All Skills");

  const groups =
    active === "All Skills" ? skillGroups : skillGroups.filter((g) => g.category === active);

  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Expertise" title={<>Technical <span className="text-gradient">Skills</span></>} />

        <Reveal>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  active === cat
                    ? "bg-gradient-to-r from-glow-indigo to-glow-purple text-primary-foreground shadow-lg shadow-glow-indigo/30"
                    : "glass text-muted-foreground hover:border-glow-indigo/40 hover:text-foreground",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <Reveal key={group.name}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="flex items-center gap-2.5">
                  <Cpu className="h-4 w-4 text-glow-cyan" />
                  <h3 className="font-display text-base font-semibold text-foreground">{group.name}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-secondary/70 px-3 py-1.5 text-xs text-foreground/85 transition-colors hover:border-glow-cyan/40 hover:text-glow-cyan"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
