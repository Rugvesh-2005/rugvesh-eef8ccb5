import portrait from "@/assets/rugvesh-portrait.jpg";

export const profile = {
  name: "Mateti Rugvesh",
  initials: "RM",
  role: "Full-Stack & AI Engineer",
  tagline: "Full-Stack & AI Engineer | LLM Post-Training & Evaluation Specialist",
  description:
    "B.Tech Computer Science graduate from Hyderabad, India. Specializing in building scalable full-stack web applications, rigorous LLM post-training evaluation workflows, prompt engineering, and intelligent computer vision pipelines.",
  email: "matetirugvesh@gmail.com",
  phone: "+91-7674094228",
  phoneDisplay: "+91-7674094228",
  github: "https://github.com/Rugvesh-2005",
  githubLabel: "Rugvesh-2005",
  linkedin: "https://www.linkedin.com/in/rugvesh-mateti-b482232a5",
  linkedinLabel: "rugvesh-mateti",
  location: "Hyderabad, India",
  degreeTag: "B.Tech CSE 2026",
  portrait: portraitAsset.url,
  resumes: {
    fullstack: {
      label: "Full-Stack Resume",
      url: "/downloads/mateti-rugvesh-fullstack-resume.pdf",
    },
    ai: {
      label: "AI & LLM Resume",
      url: "/downloads/mateti-rugvesh-ai-llm-resume.pdf",
    },
  },
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const summaryCards = [
  {
    title: "Academic Excellence",
    description:
      "B.Tech CSE from Kamala Institute of Technology and Science (2022–2026), CGPA 7.8/10, with a flawless 10/10 CGPA in 10th Standard.",
    tags: ["CGPA 7.8/10", "10th — 10/10", "2022–2026"],
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web applications across the stack — REST APIs, relational and document databases, and responsive React interfaces.",
    tags: ["Python", "SQL", "JavaScript", "React.js", "Node.js", "Express.js", "Flask", "MySQL", "MongoDB"],
  },
  {
    title: "AI & LLM Workflows",
    description:
      "Rigorous LLM evaluation and post-training support — prompt engineering, human-in-the-loop validation, and intelligent computer vision pipelines.",
    tags: ["LLM Evaluation", "Prompt Engineering", "Human-in-the-Loop", "OpenCV", "MediaPipe", "n8n Automation"],
  },
];

export const experience = {
  role: "LLM Post-Training Intern",
  company: "Ethara AI",
  period: "Mar 2026 – May 2026",
  bullets: [
    "Data preparation and curation of training datasets for LLM post-training workflows.",
    "Reviewing, rating and comparatively assessing AI responses for quality and consistency.",
    "Prompt testing cycles to probe model behavior across varied instruction patterns.",
    "Dataset annotation with human-in-the-loop validation of model outputs.",
    "Task management and team coordination via Slack & MultiMango.",
  ],
};

export const projects = [
  {
    title: "TARA E-Commerce Website",
    stack: ["Node.js", "Express", "MySQL", "Razorpay"],
    description:
      "Full-stack shopping platform with REST APIs for products, cart and orders, integrated with the Razorpay payment gateway.",
    accent: "cyan",
  },
  {
    title: "Hire Vision (AI Interview Assessment)",
    stack: ["Python", "Flask", "MongoDB", "OpenCV", "MediaPipe"],
    description:
      "Real-time computer vision platform evaluating interview confidence, eye contact and posture.",
    accent: "purple",
  },
  {
    title: "AI Summarizer App",
    stack: ["React", "TypeScript", "Vite", "Supabase", "OpenAI API"],
    description:
      "Generative AI tool that condenses long-form text into concise summaries via the OpenAI API.",
    accent: "indigo",
  },
  {
    title: "Gmail AI Agent",
    stack: ["n8n", "LLM APIs"],
    description:
      "AI-powered email automation workflow that classifies and processes incoming mail with LLM integration.",
    accent: "cyan",
  },
];

export const skillCategories = ["All Skills", "AI & LLM", "Full-Stack", "Computer Vision", "Cloud & Tools"] as const;

export const skillGroups = [
  {
    name: "Languages",
    category: "Full-Stack",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    name: "Frontend",
    category: "Full-Stack",
    skills: ["React.js", "HTML5", "CSS3"],
  },
  {
    name: "Backend & Databases",
    category: "Full-Stack",
    skills: ["Node.js", "Express.js", "Flask", "MySQL", "MongoDB"],
  },
  {
    name: "AI & LLM",
    category: "AI & LLM",
    skills: [
      "Prompt Engineering",
      "LLM Evaluation",
      "Data Annotation",
      "Response Rating",
      "Model Testing",
      "OpenAI/Anthropic/Gemini APIs",
    ],
  },
  {
    name: "Computer Vision",
    category: "Computer Vision",
    skills: ["OpenCV", "MediaPipe"],
  },
  {
    name: "Cloud & Tools",
    category: "Cloud & Tools",
    skills: ["AWS (EC2, S3, VPC)", "Git & GitHub", "n8n", "Slack", "MultiMango"],
  },
];

export const education = [
  {
    title: "B.Tech — Computer Science & Engineering",
    institution: "Kamala Institute of Technology and Science",
    period: "2022 – 2026",
    score: "CGPA 7.8 / 10",
  },
  {
    title: "Intermediate — MPC",
    institution: "Sri Sai Junior College",
    period: "2020 – 2022",
    score: "76%",
  },
  {
    title: "10th Standard",
    institution: "St. Mary's High School",
    period: "2020",
    score: "CGPA 10 / 10",
  },
];

export const certifications = [
  { title: "HTML5", issuer: "Infosys", date: "Apr 2024" },
  { title: "Cyber Security", issuer: "IBM x Microsoft", date: "Aug 2024" },
  { title: "AI with Cloud Computing", issuer: "Brain O Vision", date: "Apr 2025" },
];
