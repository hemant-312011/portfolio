export interface Skill {
  name: string;
  description: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  blurb: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    blurb: "Interfaces that are fast, accessible, and hold up in production.",
    skills: [
      { name: "HTML5", description: "Semantic, accessible markup as the foundation." },
      { name: "CSS3", description: "Modern layout, animation, and responsive styling." },
      { name: "Advanced CSS", description: "Custom properties, complex selectors, fine-grained control." },
      { name: "CSS Grid", description: "Structured, responsive two-dimensional layouts." },
      { name: "JavaScript", description: "ES2023+ fundamentals across the stack." },
      { name: "React.js", description: "Component-driven UIs with hooks and modern patterns." },
      { name: "Redux", description: "Predictable state management for complex apps." },
      { name: "TypeScript", description: "Type-safe code across UI and business logic." },
      { name: "Next.js", description: "Production React framework — routing, rendering, performance." },
      { name: "Tailwind CSS", description: "Utility-first styling for consistent, fast UI work." },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    blurb: "The workflow behind shipping and collaborating on real code.",
    skills: [
      { name: "Git", description: "Version control for every project, solo or collaborative." },
      { name: "GitHub", description: "Hosting, code review, and open-source collaboration." },
    ],
  },
  {
    id: "ai",
    title: "Generative AI",
    blurb: "Building applications on top of LLMs — not just calling an API.",
    skills: [
      { name: "LangChain.js", description: "Orchestrating prompts, chains, and tools around LLMs." },
      { name: "RAG", description: "Retrieval-augmented generation for grounded, cited answers." },
      { name: "Multi-AI Agents", description: "Coordinating specialized agents for multi-step tasks." },
      { name: "LangGraph.js", description: "Stateful agent graphs with memory and controlled flow." },
    ],
  },
];

export const techBadges: string[] = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Redux", "Next.js",
  "Tailwind CSS", "Git", "GitHub", "LangChain.js", "RAG", "LangGraph.js",
  "Multi-AI Agents", "Ollama", "Groq API",
];
