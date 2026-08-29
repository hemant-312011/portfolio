"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, CircleDot } from "lucide-react";
import { personal } from "@/data/personal";
import { AgentGraph } from "@/components/AgentGraph";
import { Magnetic } from "@/components/ui/Magnetic";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 md:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-overlay"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-radial-fade"
        aria-hidden="true"
      />

      <div className="container-shell relative grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-8">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-border bg-white/[0.03] px-4 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-secondary">
              Frontend Developer • Generative AI Developer
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-ink-primary sm:text-5xl lg:text-[3.4rem]"
          >
            Building modern web
            <br />
            experiences with <span className="gradient-text">Frontend</span>
            {" & "}
            <span className="gradient-text">AI.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-ink-secondary"
          >
            {personal.summary}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight size={16} strokeWidth={2} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </Magnetic>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={16} strokeWidth={1.75} />
              GitHub
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex items-center gap-2 text-xs text-ink-muted"
          >
            <CircleDot size={13} className="text-accent" />
            Open to Frontend / AI Developer opportunities
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md md:max-w-none"
        >
          <AgentGraph />
        </motion.div>
      </div>
    </section>
  );
}
