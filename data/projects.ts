export type ProjectCategory =
  | "Frontend"
  | "React"
  | "Next.js"
  | "AI"
  | "RAG"
  | "Multi-Agent";

export interface Project {
  slug: string;
  title: string;
  categories: ProjectCategory[];
  year: string;
  description: string;
  goal: string;
  image: string;
  hasScreenshot?: boolean;
  technologies: string[];
  features: string[];
  challenges?: string[];
  learned?: string[];
  github: string;
  live: string;
  featured: boolean;
  size: "large" | "medium" | "horizontal";
  isPlaceholder?: boolean;
}

/**
 * ── HOW TO EDIT THIS FILE ──────────────────────────────────────────────
 * All 9 projects below are real — verified directly from each project's
 * GitHub README and, where relevant, its live deployment. Ordered with
 * the strongest / most technically substantial projects first.
 *
 * For every project, you can update:
 *  - image  → screenshot in /public/projects/
 *  - github → repo URL ("" hides the Code button)
 *  - live   → deployed URL ("" hides the Live Demo button)
 * ─────────────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    slug: "documind-ai",
    title: "DocuMind AI",
    categories: ["AI", "RAG", "React"],
    year: "2026",
    description:
      "A full-stack Retrieval-Augmented Generation application that lets users upload PDF documents and ask natural-language questions about their content, with grounded answers and file-name and page-level citations.",
    goal:
      "Most chat-with-your-docs tools hallucinate or lose track of source pages. DocuMind AI was built to answer strictly from the uploaded documents and always cite the exact file and page an answer came from.",
    image: "/projects/documind-ai.png",
    hasScreenshot: true,
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "LangChain.js",
      "Groq",
      "Ollama",
    ],
    features: [
      "Multi-PDF upload with drag-and-drop and full document library management",
      "PDF text extraction with recursive text chunking",
      "Local embeddings via Ollama (nomic-embed-text) with an in-memory vector store",
      "Semantic similarity search feeding a Retrieval-Augmented Generation pipeline",
      "Groq-powered AI responses with page-level source citations and a hallucination-control prompt",
      "Automatic index rebuilding, light/dark mode, and copyable AI responses",
    ],
    challenges: [
      "Keeping retrieval accurate across many documents without exploding latency or cost",
      "Designing a hallucination-control prompt that keeps answers grounded strictly in retrieved context",
    ],
    learned: [
      "Orchestrating a full RAG pipeline end-to-end with LangChain.js, from chunking to citation-aware generation",
      "Running local embeddings with Ollama alongside Groq-hosted inference in the same pipeline",
    ],
    github: "https://github.com/hemant-312011/documind-ai-rag",
    live: "https://documind-ai-rag-pi.vercel.app/",
    featured: true,
    size: "large",
  },
  {
    slug: "launchforge",
    title: "LaunchForge AI",
    categories: ["AI", "Multi-Agent", "Next.js"],
    year: "2026",
    description:
      "A multi-agent AI product studio that turns a raw product idea into a complete launch strategy — positioning, target audience, launch messaging, go-to-market plan, and risks — using a team of specialized AI agents.",
    goal:
      "A single AI call tends to blur research, strategy, and marketing together. LaunchForge breaks the product-launch problem into specialized agent stages, each focused on one responsibility and passing its output to the next.",
    image: "/projects/multi-agent-orchestration.png",
    hasScreenshot: true,
    technologies: ["Next.js", "TypeScript", "LangGraph.js", "LangChain.js", "Groq"],
    features: [
      "Research Agent — identifies market opportunities, customer problems, and competitive considerations",
      "Product Strategist Agent — defines positioning, value proposition, and target customers",
      "Marketing Agent — produces launch headline, messaging, benefits, and campaign ideas",
      "Final Strategist Agent — combines prior outputs into a launch blueprint with risks and recommendations",
      "Sequential LangGraph workflow where each agent's output feeds the next",
    ],
    challenges: [
      "Coordinating agent hand-offs so research, strategy, and marketing outputs stay consistent with each other",
      "Structuring a LangGraph workflow where each stage reliably builds on the previous agent's output",
    ],
    learned: [
      "Designing a sequential multi-agent architecture with LangGraph.js instead of one general-purpose prompt",
      "Splitting a complex generation task into specialized agent responsibilities",
    ],
    github: "https://github.com/hemant-312011/launchforge",
    live: "https://launchforge-phi.vercel.app/",
    featured: true,
    size: "large",
  },
  {
    slug: "nexa-ai-helpdesk",
    title: "Nexa AI Helpdesk",
    categories: ["AI", "React"],
    year: "2026",
    description:
      "An AI-powered customer support assistant that handles account, billing, and technical support queries through a conversational chat interface, with persistent memory across messages.",
    goal:
      "Support chatbots that forget context mid-conversation frustrate users. Nexa keeps conversational memory so it can hold context-aware, multi-turn support conversations.",
    image: "/projects/nexa-ai-helpdesk.png",
    hasScreenshot: true,
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "LangGraph.js",
      "LangChain.js",
      "Groq",
    ],
    features: [
      "Persistent conversation memory using LangGraph's MemorySaver",
      "Multiple chat sessions with markdown rendering and syntax-highlighted code blocks",
      "Copy AI responses and delete conversations, with LocalStorage persistence",
      "Fast responses powered by the Groq LLM API",
      "Responsive, modern chat UI with quick-action shortcuts (password reset, billing, order tracking, technical support)",
    ],
    github: "https://github.com/hemant-312011/nexa-ai-helpdesk",
    live: "https://nexa-ai-helpdesk.vercel.app/",
    featured: false,
    size: "medium",
  },
  {
    slug: "hemant-chef-ai",
    title: "Hemant The Master Chef",
    categories: ["AI", "React"],
    year: "2026",
    description:
      "An AI cooking assistant that turns a simple prompt like \"what should we cook today\" into a full recipe — ingredients table, quantities, and step-by-step method — generated on demand.",
    goal:
      "Recipe search usually means scrolling past a blog post to find the actual ingredients. This assistant generates a clean, structured recipe directly from a single prompt.",
    image: "/projects/hemant-chef-ai.png",
    hasScreenshot: true,
    technologies: ["React", "Vite", "Tailwind CSS", "LangChain.js", "Groq"],
    features: [
      "Natural-language prompt in, structured recipe out — ingredients table plus numbered method",
      "LLM responses generated via LangChain.js and the Groq API",
      "Single-input chat-style interface built with React and Tailwind CSS",
    ],
    github: "https://github.com/hemant-312011/hemant-chef-ai",
    live: "https://chef-chatbot.netlify.app/",
    featured: false,
    size: "medium",
  },
  {
    slug: "nexus-admin-dashboard",
    title: "Nexus Admin Dashboard",
    categories: ["React", "Frontend"],
    year: "2026",
    description:
      "A responsive admin dashboard with real-time-style analytics — revenue charts, active users, order tracking, and category breakdowns — built as a portfolio-ready admin panel.",
    goal:
      "Build an admin panel that stays fast and legible at a glance: charts, tables, and navigation that hold up on desktop, tablet, and mobile alike.",
    image: "/projects/nexus-admin-dashboard.png",
    hasScreenshot: true,
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "React Router DOM", "Recharts", "Lucide React"],
    features: [
      "Dashboard analytics with revenue, active users, orders, and page-view charts (Recharts)",
      "Inventory, transactions, and user management sections",
      "Dark / light mode with search and filter across data views",
      "Reusable component architecture, fully typed with TypeScript",
      "Fully responsive across desktop, tablet, and mobile",
    ],
    github: "https://github.com/hemant-312011/nexus-admin-dashboard",
    live: "https://nexus-admin-dashboard-sepia.vercel.app/dashboard",
    featured: false,
    size: "medium",
  },
  {
    slug: "myntra-clone",
    title: "Myntra Functional Clone",
    categories: ["Frontend"],
    year: "2025",
    description:
      "A functional front-end clone of the Myntra e-commerce experience — category browsing, product listings with pricing and ratings, and a shopping bag/wishlist UI.",
    goal:
      "Recreate a real-world e-commerce interface end-to-end — from category navigation to product cards to a working bag page — as a front-end build exercise.",
    image: "/projects/myntra-clone.png",
    hasScreenshot: true,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Category navigation (Men, Women, Kids, Home & Living, Beauty, Studio)",
      "Product grid with pricing, discounts, and ratings",
      "Dedicated bag page for cart contents",
      "Profile and wishlist entry points in the header",
    ],
    github: "",
    live: "https://functional-clone.netlify.app/",
    featured: false,
    size: "medium",
  },
  {
    slug: "quiz-time",
    title: "Quiz Time — Interactive MCQ Platform",
    categories: ["Frontend"],
    year: "2025",
    description:
      "A real-time interactive quiz application built with vanilla JavaScript, HTML5, and CSS3.",
    goal:
      "Practice core JavaScript fundamentals by building a fully interactive, stateful UI without a framework.",
    image: "/projects/quiz-time.png",
    hasScreenshot: true,
    technologies: ["JavaScript", "HTML5", "CSS3"],
    features: [
      "Real-time countdown timer with urgency-based color cues",
      "Instant right/wrong answer highlighting with a question progress counter",
      "Audio feedback for enhanced UX",
      "Responsive quiz UI with a Next button to advance questions",
    ],
    github: "https://github.com/hemant-312011/quizz-app",
    live: "https://mcq-project.netlify.app/",
    featured: false,
    size: "horizontal",
  },
  {
    slug: "focus-today",
    title: "Focus on Today",
    categories: ["Frontend"],
    year: "2025",
    description:
      "A minimal daily focus and habit tracker that shows today's tasks with a completion progress bar.",
    goal:
      "A single-page, no-clutter place to see today's few priorities and mark them off — nothing more.",
    image: "/projects/focus-today.png",
    hasScreenshot: true,
    technologies: ["JavaScript", "HTML5", "CSS3"],
    features: [
      "Daily task checklist with strike-through completion state",
      "Progress bar showing tasks completed out of total for the day",
      "Clean, single-page layout built with vanilla JavaScript",
    ],
    github: "https://github.com/hemant-312011/focus-today",
    live: "https://focus-today-project.netlify.app/",
    featured: false,
    size: "horizontal",
  },
  {
    slug: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    categories: ["Frontend"],
    year: "2025",
    description:
      "A browser-based Rock Paper Scissors game with score tracking against the computer.",
    goal:
      "A classic DOM-manipulation and game-logic exercise — player vs. computer, running entirely client-side.",
    image: "/projects/rock-paper-scissors.png",
    hasScreenshot: true,
    technologies: ["JavaScript", "HTML5", "CSS3"],
    features: [
      "Player vs. computer game logic with win/lose/draw detection",
      "Running score tracker for both player and computer",
      "Simple, icon-based move selection UI",
    ],
    github: "https://github.com/hemant-312011/rock-paper-scissors",
    live: "https://hemant-rock-paper-scissors.netlify.app/",
    featured: false,
    size: "horizontal",
  },
];
