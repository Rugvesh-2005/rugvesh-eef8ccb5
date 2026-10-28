import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}

export function SectionHeading({ kicker, title }: { kicker: string; title: ReactNode }) {
  return (
    <Reveal className="mb-10 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-glow-cyan">{kicker}</span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-glow-indigo to-transparent" />
    </Reveal>
  );
}
