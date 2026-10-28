import { Briefcase, Building2 } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading kicker="Experience" title={<>Where I've <span className="text-gradient">Worked</span></>} />

        <Reveal>
          <article className="glass glow-card relative rounded-2xl p-6 sm:p-8">
            <div className="absolute -left-3 top-8 hidden h-6 w-6 rounded-full bg-gradient-to-br from-glow-cyan to-glow-indigo shadow-lg shadow-glow-indigo/40 sm:block" />
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-glow-indigo/25 to-glow-purple/25 ring-1 ring-glow-indigo/30">
                  <Briefcase className="h-5 w-5 text-glow-cyan" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{experience.role}</h3>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-glow-cyan">
                    <Building2 className="h-3.5 w-3.5" />
                    {experience.company}
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-glow-cyan/30 bg-glow-cyan/10 px-3.5 py-1.5 text-xs font-semibold text-glow-cyan">
                {experience.period}
              </span>
            </div>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {experience.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-glow-cyan to-glow-indigo" />
                  {b}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
