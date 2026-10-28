import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText } from "lucide-react";
import { experience, profile } from "@/data/portfolio";

const fullstackSkills = [
  ["Languages", "Python, SQL, JavaScript"],
  ["Frontend", "React.js, HTML5, CSS3"],
  ["Backend & Databases", "Node.js, Express.js, Flask, MySQL, MongoDB"],
  ["Cloud & Tools", "AWS (EC2, S3, VPC), Git & GitHub, n8n, Slack, MultiMango"],
];

const aiSkills = [
  ["AI & LLM", "Prompt Engineering, LLM Evaluation, Data Annotation, Response Rating, Model Testing, OpenAI/Anthropic/Gemini APIs"],
  ["Computer Vision", "OpenCV, MediaPipe"],
  ["Languages", "Python, SQL, JavaScript"],
  ["Workflow & Automation", "n8n, Slack, MultiMango, AWS (EC2, S3, VPC), Git & GitHub"],
];

function ResumePreview({ focus, skills }: { focus: string; skills: string[][] }) {
  return (
    <div className="glass max-h-[52vh] overflow-y-auto rounded-2xl p-6">
      <div className="border-b border-border pb-4">
        <h3 className="font-display text-xl font-bold text-foreground">{profile.name}</h3>
        <p className="text-sm font-medium text-glow-cyan">{profile.role}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {profile.location} • {profile.email} • {profile.phoneDisplay}
        </p>
      </div>

      <div className="mt-4">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Summary</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">
          {focus === "ai"
            ? "LLM post-training and evaluation specialist — data preparation, response rating, comparative assessments, prompt testing and human-in-the-loop validation, with computer vision pipelines and n8n automation."
            : "Full-stack developer building scalable web applications end to end — REST APIs, relational and document databases, and responsive React interfaces, with projects spanning e-commerce payments and computer vision."}
        </p>
      </div>

      <div className="mt-4">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Technical Skills</h4>
        <dl className="mt-1.5 space-y-1.5 text-sm">
          {skills.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[130px_1fr] gap-2">
              <dt className="font-semibold text-foreground">{k}</dt>
              <dd className="text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-4">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Experience</h4>
        <div className="mt-1.5 flex items-baseline justify-between gap-3">
          <p className="text-sm font-semibold text-foreground">
            {experience.role} — {experience.company}
          </p>
          <span className="whitespace-nowrap text-xs text-muted-foreground">{experience.period}</span>
        </div>
        <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
          {experience.bullets.slice(0, focus === "ai" ? 5 : 3).map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Education</h4>
        <p className="mt-1.5 text-sm text-foreground">
          B.Tech CSE — Kamala Institute of Technology and Science (2022–2026) · CGPA 7.8/10
        </p>
      </div>
    </div>
  );
}

export default function ResumeModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass max-h-[90vh] max-w-2xl overflow-y-auto border-border sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display text-xl">
            <FileText className="h-5 w-5 text-glow-cyan" />
            Resume Center
          </DialogTitle>
          <DialogDescription>
            Switch between the Full-Stack and AI &amp; LLM resumes and download the PDF instantly.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="fullstack" className="mt-2">
          <TabsList className="grid w-full grid-cols-2 bg-secondary">
            <TabsTrigger value="fullstack" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Full-Stack Resume
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              AI &amp; LLM Resume
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fullstack" className="mt-4 space-y-4">
            <ResumePreview focus="fullstack" skills={fullstackSkills} />
            <a
              href={profile.resumes.fullstack.url}
              download="Mateti-Rugvesh-FullStack-Resume.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-glow-indigo to-glow-purple px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-glow-indigo/30 transition-transform hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              Download Full-Stack Resume
            </a>
          </TabsContent>

          <TabsContent value="ai" className="mt-4 space-y-4">
            <ResumePreview focus="ai" skills={aiSkills} />
            <a
              href={profile.resumes.ai.url}
              download="Mateti-Rugvesh-AI-LLM-Resume.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-glow-cyan to-glow-indigo px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-glow-cyan/25 transition-transform hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              Download AI &amp; LLM Resume
            </a>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
