import { Award, Bot, Code2 } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { summaryCards } from "@/data/portfolio";

const icons = [Award, Code2, Bot];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker="About" title={<>Professional <span className="text-gradient">Summary</span></>} />

        <div className="grid gap-6 md:grid-cols-3">
          {summaryCards.map((card, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={card.title} className={i === 1 ? "md:-mt-4" : undefined}>
                <article className="glass glow-card group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-glow-indigo/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-glow-indigo/25 to-glow-purple/25 ring-1 ring-glow-indigo/30">
                    <Icon className="h-5 w-5 text-glow-cyan" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-secondary/70 px-2.5 py-1 text-[11px] text-foreground/80"
                      >
                        {tag}
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
