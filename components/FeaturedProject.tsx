"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ArrowUpRight, FileStack } from "lucide-react";
import { projects } from "@/data/projects";

const caseStudy = projects.find((p) => p.slug === "documind-ai")!;

export function FeaturedProject() {
  return (
    <section className="section-pad relative">
      <div className="container-shell">
        <p className="eyebrow mb-3">Case Study</p>
        <h2 className="mb-12 max-w-xl text-3xl font-semibold tracking-tight text-ink-primary md:text-4xl">
          A closer look at {caseStudy.title}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="card-surface gradient-border overflow-hidden"
        >
          <div className="browser-frame m-4 mb-0 sm:m-6 sm:mb-0">
            <div className="browser-frame-bar">
              <span className="h-2.5 w-2.5 rounded-full bg-signal-pink/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-soft/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal-blue/60" />
            </div>
            <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-brand-gradient-soft md:aspect-[21/9]">
              {caseStudy.hasScreenshot ? (
                <Image
                  src={caseStudy.image}
                  alt={`${caseStudy.title} preview`}
                  fill
                  sizes="(min-width: 768px) 80vw, 100vw"
                  className="object-cover object-top"
                />
              ) : (
                <>
                  <div
                    className="absolute inset-0 grid-overlay opacity-30"
                    aria-hidden="true"
                  />
                  <FileStack
                    size={64}
                    strokeWidth={1}
                    className="relative text-ink-secondary/70"
                  />
                </>
              )}
            </div>
          </div>

          <div className="grid gap-10 p-6 md:grid-cols-2 md:p-10">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-ink-primary">
                Why I built it
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-ink-secondary">
                {caseStudy.goal}
              </p>

              <h3 className="mb-4 text-xl font-semibold text-ink-primary">
                Main features
              </h3>
              <ul className="space-y-2">
                {caseStudy.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2.5 text-sm text-ink-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-ink-primary">
                Tech stack
              </h3>
              <div className="mb-8 flex flex-wrap gap-1.5">
                {caseStudy.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-base-border bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-ink-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="mb-4 text-xl font-semibold text-ink-primary">
                Challenges
              </h3>
              <ul className="mb-8 space-y-2">
                {caseStudy.challenges?.map((c) => (
                  <li
                    key={c}
                    className="flex gap-2.5 text-sm text-ink-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-violet" />
                    {c}
                  </li>
                ))}
              </ul>

              <h3 className="mb-4 text-xl font-semibold text-ink-primary">
                What I learned
              </h3>
              <ul className="space-y-2">
                {caseStudy.learned?.map((l) => (
                  <li
                    key={l}
                    className="flex gap-2.5 text-sm text-ink-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-violet" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-base-border p-6 md:p-10 md:pt-8">
            <a
              href={caseStudy.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={15} /> View Code
            </a>
            {caseStudy.live && caseStudy.live !== "#" && (
              <a
                href={caseStudy.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live Demo <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
