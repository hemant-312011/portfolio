export interface JourneyStep {
  label: string;
  note: string;
}

export const journeySteps: JourneyStep[] = [
  { label: "HTML / CSS", note: "Structured, styled the web" },
  { label: "JavaScript", note: "Made it interactive" },
  { label: "React", note: "Started thinking in components" },
  { label: "Git / GitHub", note: "Learned to version and collaborate" },
  { label: "TypeScript", note: "Added safety to the stack" },
  { label: "Next.js", note: "Moved to production-grade React" },
  { label: "Tailwind CSS", note: "Sped up UI without losing control" },
  { label: "LangChain.js", note: "Started building on top of LLMs" },
  { label: "RAG", note: "Grounded AI answers in real data" },
  { label: "Multi-AI Agents", note: "Coordinated specialized agents" },
  { label: "LangGraph.js", note: "Structured agent state and flow" },
];
