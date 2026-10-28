import { Download, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, GraduationCap } from "lucide-react";
import { Reveal } from "./reveal";
import { profile } from "@/data/portfolio";

const connectLinks = [
  { icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phoneDisplay, href: `tel:${profile.phone}` },
];

export default function Hero({ onOpenResumes }: { onOpenResumes: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-glow-cyan/30 bg-glow-cyan/10 px-4 py-1.5 text-xs font-medium text-glow-cyan">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-glow-cyan" />
            Open to opportunities
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
            Hi, I'm <span className="text-gradient">Mateti Rugvesh</span>
          </h1>

          <p className="mt-4 font-display text-lg font-medium text-foreground/90 sm:text-xl">{profile.tagline}</p>

          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{profile.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenResumes}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-glow-indigo to-glow-purple px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-glow-indigo/30 transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" />
              Download Resumes
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-glow-cyan/50 hover:text-glow-cyan"
            >
              <MessageCircle className="h-4 w-4" />
              Get in Touch
            </a>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Connect</p>
            <div className="flex flex-wrap gap-2.5">
              {connectLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass group inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm text-muted-foreground transition-all hover:border-glow-indigo/50 hover:text-foreground hover:shadow-[0_0_28px_-8px] hover:shadow-glow-indigo/60"
                >
                  <Icon className="h-4 w-4 text-glow-cyan transition-transform group-hover:scale-110" />
                  <span className="hidden sm:inline">{value}</span>
                  <span className="sm:hidden">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="flex justify-center lg:justify-end">
          <div className="float-slow relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-glow-cyan/25 via-glow-indigo/25 to-glow-purple/25 blur-2xl" />
            <div className="glow-card relative w-72 overflow-hidden rounded-3xl border border-border bg-card sm:w-96">
              <img
                src={profile.portrait}
                alt={`Professional portrait of ${profile.name}`}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-background/95 via-background/70 to-transparent px-4 pb-4 pt-10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
                  <MapPin className="h-3.5 w-3.5 text-glow-cyan" />
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
                  <GraduationCap className="h-3.5 w-3.5 text-glow-purple" />
                  {profile.degreeTag}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
