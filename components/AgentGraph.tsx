"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Bot, Search, Workflow, Sparkles } from "lucide-react";

const nodes = [
  {
    id: "planner",
    label: "Planner Agent",
    icon: Workflow,
    x: 14,
    y: 10,
    color: "#818CF8",
  },
  {
    id: "research",
    label: "Research Agent",
    icon: Search,
    x: 84,
    y: 6,
    color: "#F472B6",
  },
  {
    id: "llm",
    label: "LLM Core",
    icon: Sparkles,
    x: 50,
    y: 40,
    color: "#C084FC",
  },
  {
    id: "exec",
    label: "Executor Agent",
    icon: Bot,
    x: 10,
    y: 68,
    color: "#60A5FA",
  },
];

const edges: [number, number][] = [
  [0, 2],
  [1, 2],
  [2, 3],
  [0, 3],
];

const techBadges = [
  { label: "React.js", x: 90, y: 30 },
  { label: "Next.js", x: -4, y: 40 },
  { label: "TypeScript", x: 92, y: 60 },
  { label: "Tailwind CSS", x: -6, y: 8 },
  { label: "LangGraph.js", x: 6, y: 92 },
];

const codeLines = [
  { indent: 0, text: "const graph = createGraph({ nodes, edges });" },
  { indent: 0, text: "const retriever = new RAGRetriever(vectorStore);" },
  { indent: 0, text: "const chain = graph.pipe(retriever).pipe(llm);" },
  { indent: 0, text: "" },
  { indent: 0, text: "const answer = await chain.invoke(query);" },
  { indent: 0, text: "// grounded, citation-aware response" },
];

export function AgentGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0.5);
  const mvY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mvY, [0, 1], [4, -4]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mvX, [0, 1], [-4, 4]), {
    stiffness: 180,
    damping: 22,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width);
    mvY.set((e.clientY - rect.top) / rect.height);
  }

  function resetTilt() {
    mvX.set(0.5);
    mvY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className="glass-panel gradient-border relative w-full overflow-visible rounded-3xl p-6"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(99,102,241,0.16), transparent 60%), radial-gradient(ellipse 55% 45% at 75% 75%, rgba(236,72,153,0.14), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* AI agent node graph, upper portion */}
      <div className="relative h-52 w-full sm:h-56">
        <svg
          viewBox="0 0 100 100"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="edgeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#F472B6" />
            </linearGradient>
          </defs>
          {edges.map(([a, b], i) => {
            const from = nodes[a];
            const to = nodes[b];
            return (
              <g key={`${a}-${b}`}>
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="url(#edgeGradient)"
                  strokeOpacity="0.25"
                  strokeWidth="0.5"
                />
                <motion.circle
                  r="0.9"
                  fill={to.color}
                  initial={{ opacity: 0 }}
                  animate={{
                    cx: [from.x, to.x],
                    cy: [from.y, to.y],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2.6,
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatDelay: 1.4,
                    ease: "easeInOut",
                  }}
                />
              </g>
            );
          })}
        </svg>

        {nodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={node.id}
              className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 4.5 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-sm sm:h-11 sm:w-11"
                style={{
                  borderColor: `${node.color}55`,
                  background: "rgba(18,18,42,0.85)",
                  boxShadow: `0 0 20px ${node.color}33`,
                }}
              >
                <Icon
                  size={16}
                  strokeWidth={1.6}
                  style={{ color: node.color }}
                />
              </div>
              <span className="hidden rounded-md bg-base-bg/80 px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-wide text-ink-muted sm:block">
                {node.label}
              </span>
            </motion.div>
          );
        })}

        {techBadges.map((badge, i) => (
          <motion.span
            key={badge.label}
            className="absolute z-10 hidden whitespace-nowrap rounded-full border border-base-border bg-base-surface/90 px-2.5 py-1 font-mono text-[9px] text-ink-secondary shadow-lg backdrop-blur-sm lg:block"
            style={{ left: `${badge.x}%`, top: `${badge.y}%` }}
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
            }}
          >
            {badge.label}
          </motion.span>
        ))}
      </div>

      {/* Browser / code window, lower portion */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="browser-frame relative z-10 mt-3 overflow-hidden shadow-xl"
      >
        <div className="browser-frame-bar">
          <span className="h-2.5 w-2.5 rounded-full bg-signal-pink/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-soft/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-blue/60" />
          <span className="ml-2 font-mono text-[10px] text-ink-muted">
            rag-agent.ts
          </span>
        </div>
        <div className="space-y-1.5 bg-base-surface2/70 p-4 font-mono text-[10.5px] leading-relaxed">
          {codeLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.12, duration: 0.4 }}
              className="text-ink-secondary"
            >
              {line.text === "" ? (
                "\u00A0"
              ) : line.text.startsWith("//") ? (
                <span className="text-ink-muted">{line.text}</span>
              ) : (
                <>
                  <span className="text-signal-indigo">const</span>
                  {line.text.replace(/^const/, "")}
                </>
              )}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
