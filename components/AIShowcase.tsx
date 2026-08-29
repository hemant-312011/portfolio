"use client";

import { motion } from "framer-motion";
import {
  User,
  AppWindow,
  Search,
  Cpu,
  MessageSquare,
  ArrowDown,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const flow = [
  { icon: User, label: "User", note: "Asks a question", color: "#60A5FA" },
  {
    icon: AppWindow,
    label: "AI Application",
    note: "Next.js + LangChain.js",
    color: "#818CF8",
  },
  {
    icon: Search,
    label: "Retriever / Tools",
    note: "RAG search & agent tools",
    color: "#C084FC",
  },
  { icon: Cpu, label: "LLM", note: "Groq LPU / Ollama", color: "#E879F9" },
  {
    icon: MessageSquare,
    label: "Response",
    note: "Grounded, cited answer",
    color: "#F472B6",
  },
];

const aiProjects = projects.filter(
  (p) => p.categories.includes("AI") && !p.isPlaceholder,
);

export function AIShowcase() {
  return (
    <section id="ai" className="section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-signal-violet/[0.04] via-transparent to-transparent"
        aria-hidden="true"
      />
      <div className="container-shell relative">
        <SectionHeading
          eyebrow="Building with Generative AI"
          title="Beyond the interface — systems that reason"
          description="RAG pipelines and multi-agent workflows I've actually built. Only the technologies and features used in each project are shown below."
        />

        <div className="relative mt-14 flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-4">
          <div
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-signal-blue/40 via-signal-violet/40 to-signal-pink/40 md:block"
            aria-hidden="true"
          />
          {flow.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative flex w-full flex-col items-center md:w-auto"
              >
                <div className="flex flex-col items-center gap-3 md:flex-row md:gap-3">
                  <div
                    className="glass-panel flex w-full flex-col items-center gap-2 rounded-2xl px-6 py-5 text-center md:w-36"
                    style={{ boxShadow: `0 0 30px -14px ${step.color}66` }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      style={{ color: step.color }}
                    />
                    <div>
                      <p className="text-sm font-medium text-ink-primary">
                        {step.label}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] text-ink-muted">
                        {step.note}
                      </p>
                    </div>
                  </div>
                </div>
                {i < flow.length - 1 && (
                  <div className="my-2 text-ink-muted md:hidden">
                    <ArrowDown size={16} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {aiProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-surface gradient-border p-6"
            >
              <div className="mb-3 flex flex-wrap gap-1.5">
                {project.categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-signal-violet/30 bg-signal-violet/[0.08] px-2.5 py-0.5 font-mono text-[10px] text-signal-violet"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 text-base font-semibold text-ink-primary">
                {project.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-ink-secondary">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-base-border bg-white/[0.02] px-2 py-0.5 font-mono text-[10.5px] text-ink-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
