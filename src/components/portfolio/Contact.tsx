import { useState, type FormEvent } from "react";
import { Check, Copy, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./reveal";
import { profile } from "@/data/portfolio";

function CopyChip({ icon: Icon, label, value, copyValue }: { icon: typeof Mail; label: string; value: string; copyValue: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      toast.success(`${label} copied to clipboard`);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy manually");
    }
  };

  return (
    <div className="glass flex items-center justify-between gap-3 rounded-2xl p-4">
      <div className="flex min-w-0 items-center gap-3">
        <Icon className="h-4 w-4 shrink-0 text-glow-cyan" />
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
          <p className="truncate text-sm text-foreground">{value}</p>
        </div>
      </div>
      <button
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-glow-cyan/50 hover:text-glow-cyan"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-glow-cyan" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `Hi Rugvesh,\n\n${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app with the message ready to send");
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Contact" title={<>Let's <span className="text-gradient">Talk</span></>} />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Hiring for a full-stack or AI role? Send a message and it opens right in your email app — or copy the
              details directly.
            </p>
            <CopyChip icon={Mail} label="Email" value={profile.email} copyValue={profile.email} />
            <CopyChip icon={Phone} label="Phone" value={profile.phoneDisplay} copyValue={profile.phone} />
          </Reveal>

          <Reveal>
            <form onSubmit={handleSubmit} className="glass glow-card space-y-4 rounded-2xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-glow-cyan/60 focus:outline-none focus:ring-2 focus:ring-glow-cyan/30"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-glow-cyan/60 focus:outline-none focus:ring-2 focus:ring-glow-cyan/30"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Interview opportunity"
                  className="w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-glow-cyan/60 focus:outline-none focus:ring-2 focus:ring-glow-cyan/30"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role…"
                  className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-glow-cyan/60 focus:outline-none focus:ring-2 focus:ring-glow-cyan/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-glow-indigo to-glow-purple px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-glow-indigo/30 transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
