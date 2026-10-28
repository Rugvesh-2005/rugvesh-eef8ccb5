import { Award, GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { certifications, education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Background" title={<>Education &amp; <span className="text-gradient">Certifications</span></>} />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative space-y-6 border-l border-glow-indigo/30 pl-8">
            {education.map((item) => (
              <Reveal key={item.title}>
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-glow-cyan to-glow-indigo shadow-md shadow-glow-indigo/40">
                    <GraduationCap className="h-3 w-3 text-accent-foreground" />
                  </span>
                  <div className="glass rounded-2xl p-5 transition-colors hover:border-glow-indigo/40">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-glow-cyan">{item.score}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground/80">{item.period}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <Reveal key={cert.title}>
                <div className="glass flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-glow-purple/40">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-glow-purple/25 to-glow-indigo/25 ring-1 ring-glow-purple/30">
                    <Award className="h-5 w-5 text-glow-purple" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-sm font-semibold text-foreground">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
