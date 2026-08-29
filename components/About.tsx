"use client";

import { motion } from "framer-motion";
import { Layout, Boxes, Sparkles, Network, MapPin, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";

const focusAreas = [
  { icon: Layout, text: "Responsive, accessible interfaces", color: "#818CF8" },
  {
    icon: Boxes,
    text: "Reusable React & Next.js component systems",
    color: "#60A5FA",
  },
  {
    icon: Network,
    text: "RAG pipelines and multi-agent AI workflows",
    color: "#C084FC",
  },
  {
    icon: Sparkles,
    text: "AI-powered applications, end to end",
    color: "#F472B6",
  },
];

const floatingBadges = [
  { label: "React", x: "6%", y: "10%", delay: 0 },
  { label: "TypeScript", x: "72%", y: "4%", delay: 0.5 },
  { label: "LangChain.js", x: "68%", y: "82%", delay: 1 },
  { label: "Next.js", x: "4%", y: "78%", delay: 1.5 },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-shell grid gap-14 lg:grid-cols-[1.05fr_0.85fr] lg:gap-10">
        <div>
          <SectionHeading
            eyebrow="About"
            title="A frontend developer who builds AI-native products"
            description="I build across the stack that modern AI products need — from pixel-accurate, accessible React interfaces to the RAG pipelines and multi-agent systems running behind them. Every project I show is something I've actually built and shipped, not a checklist of technologies."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="card-surface flex items-center gap-3.5 p-4"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: `${item.color}40`,
                      backgroundColor: `${item.color}14`,
                    }}
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.75}
                      style={{ color: item.color }}
                    />
                  </div>
                  <p className="text-sm text-ink-secondary">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          <div className="glass-panel gradient-border relative overflow-visible rounded-3xl p-7">
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-80"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 20% 0%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, rgba(236,72,153,0.15), transparent 60%)",
              }}
              aria-hidden="true"
            />

            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-[0_10px_30px_-8px_rgba(168,85,247,0.6)]">
                <Sparkles size={24} strokeWidth={1.6} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink-primary">
                {personal.name}
              </h3>
              <p className="mt-1 text-sm text-ink-secondary">{personal.role}</p>

              <div className="mt-3 flex items-center gap-1.5 text-xs text-ink-muted">
                <MapPin size={12} />
                {personal.location}
              </div>

              <div className="mt-6 flex w-full items-center gap-2 rounded-xl border border-base-border bg-white/[0.02] px-4 py-3 text-left">
                <Code2 size={14} className="shrink-0 text-accent-soft" />
                <p className="text-xs text-ink-secondary">
                  Building at the intersection of frontend engineering and
                  generative AI.
                </p>
              </div>
            </div>

            {floatingBadges.map((badge) => (
              <motion.span
                key={badge.label}
                className="absolute hidden rounded-full border border-base-border bg-base-surface/90 px-2.5 py-1 font-mono text-[9.5px] text-ink-secondary shadow-lg backdrop-blur-sm sm:block"
                style={{ left: badge.x, top: badge.y }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: badge.delay,
                }}
              >
                {badge.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
