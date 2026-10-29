import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { NAV_LINKS, profile } from "@/data/portfolio";

export default function Navbar({ onOpenResumes }: { onOpenResumes: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-glow-indigo/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="text-gradient flex h-10 w-10 items-center justify-center rounded-xl bg-secondary font-display text-sm font-bold ring-1 ring-glow-indigo/40">
            {profile.initials}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-semibold text-foreground">
              {profile.name}
            </span>
            <span className="block text-[11px] text-muted-foreground">{profile.role}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenResumes}
            className="hidden items-center gap-2 rounded-full border border-glow-cyan/40 bg-glow-cyan/10 px-4 py-2 text-sm font-medium text-glow-cyan transition-all hover:bg-glow-cyan/20 hover:shadow-[0_0_24px_-6px] hover:shadow-glow-cyan/50 sm:inline-flex"
          >
            <FileText className="h-4 w-4" />
            Resumes
          </button>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-glow-indigo to-glow-purple px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-glow-indigo/30 transition-transform hover:scale-[1.03]"
          >
            Let's Talk
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-border px-5 py-3 lg:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onOpenResumes();
              }}
              className="mt-1 inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-glow-cyan hover:bg-secondary"
            >
              <FileText className="h-4 w-4" />
              Resumes
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
