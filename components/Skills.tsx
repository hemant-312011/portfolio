"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, BrainCircuit } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups, techBadges } from "@/data/skills";

const groupIcons: Record<
  string,
  React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
    style?: React.CSSProperties;
  }>
> = {
  frontend: Code2,
  tools: Wrench,
  ai: BrainCircuit,
};

const groupColors: Record<string, string> = {
  frontend: "#818CF8",
  tools: "#60A5FA",
  ai: "#F472B6",
};

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="What I build with"
          description="Grouped by how I actually use them — the interface layer, the workflow behind it, and the AI systems underneath."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = groupIcons[group.id] ?? Code2;
            const color = groupColors[group.id] ?? "#A855F7";
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: gi * 0.08 }}
                className="card-surface gradient-border flex flex-col p-6"
              >
                <div className="mb-1 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: `${color}40`,
                      backgroundColor: `${color}14`,
                    }}
                  >
                    <Icon size={17} strokeWidth={1.7} style={{ color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-ink-primary">
                    {group.title}
                  </h3>
                </div>
                <p className="mb-5 text-sm text-ink-muted">{group.blurb}</p>

                <div className="flex flex-col gap-1">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between gap-3 rounded-lg px-2.5 py-2.5 transition-colors duration-200 hover:bg-white/[0.035]"
                    >
                      <div>
                        <p className="text-sm font-medium text-ink-primary">
                          {skill.name}
                        </p>
                        <p className="text-xs text-ink-muted">
                          {skill.description}
                        </p>
                      </div>
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full opacity-40 transition-all duration-200 group-hover:opacity-100"
                        style={{
                          backgroundColor: color,
                          boxShadow: `0 0 8px ${color}`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16">
          <p className="eyebrow mb-6 text-center">Technology Stack</p>
          <div
            className="relative overflow-hidden py-2"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="flex w-max animate-marquee gap-3">
              {[...techBadges, ...techBadges].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="glass-panel whitespace-nowrap rounded-full px-4 py-2 font-mono text-xs text-ink-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
