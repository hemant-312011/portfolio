"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ArrowUpRight,
  LayoutTemplate,
} from "lucide-react";
import type { Project } from "@/data/projects";

interface CarouselProps {
  projects: Project[];
  onOpen: (project: Project) => void;
}

export function FeaturedCarousel({ projects, onOpen }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = projects.length;
  const active = projects[index];
  const prevProject = projects[(index - 1 + total) % total];
  const nextProject = projects[(index + 1) % total];

  function go(step: number) {
    setDirection(step);
    setIndex((i) => (i + step + total) % total);
  }

  return (
    <div className="relative">
      <div className="grid items-center gap-4 md:grid-cols-[0.72fr_1.6fr_0.72fr]">
        <button
          type="button"
          onClick={() => go(-1)}
          className="card-surface hidden cursor-pointer flex-col overflow-hidden p-0 opacity-60 transition-opacity duration-300 hover:opacity-100 md:flex"
          aria-label={`Preview: ${prevProject.title}`}
        >
          <PreviewFace project={prevProject} />
        </button>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.slug}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction >= 0 ? 60 : -60,
                rotateY: direction >= 0 ? 6 : -6,
              }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{
                opacity: 0,
                x: direction >= 0 ? -60 : 60,
                rotateY: direction >= 0 ? -6 : 6,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) go(1);
                else if (info.offset.x > 80) go(-1);
              }}
              className="card-surface gradient-border cursor-grab overflow-hidden active:cursor-grabbing"
              style={{ perspective: 1000 }}
            >
              <div className="browser-frame m-4 mb-0 sm:m-5 sm:mb-0">
                <div className="browser-frame-bar">
                  <span className="h-2.5 w-2.5 rounded-full bg-signal-pink/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-soft/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-signal-blue/60" />
                </div>
                <div className="relative flex aspect-[16/9] items-center justify-center bg-brand-gradient-soft">
                  {active.hasScreenshot ? (
                    <Image
                      src={active.image}
                      alt={`${active.title} preview`}
                      fill
                      sizes="(min-width: 768px) 60vw, 100vw"
                      priority
                      className="object-cover object-top"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 grid-overlay opacity-30" />
                      <LayoutTemplate
                        size={44}
                        strokeWidth={1}
                        className="relative text-ink-secondary/70"
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="p-5 sm:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  {active.categories.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-signal-violet/30 bg-signal-violet/10 px-2.5 py-0.5 font-mono text-[10px] text-accent-soft"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-ink-primary sm:text-2xl">
                  {active.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-secondary">
                  {active.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {active.technologies.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-base-border bg-white/[0.02] px-2 py-0.5 font-mono text-[10.5px] text-ink-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => onOpen(active)}
                    className="btn-primary"
                  >
                    View Details <ArrowUpRight size={15} />
                  </button>
                  {active.github && active.github !== "#" && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="btn-secondary"
                    >
                      <Github size={15} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          className="card-surface hidden cursor-pointer flex-col overflow-hidden p-0 opacity-60 transition-opacity duration-300 hover:opacity-100 md:flex"
          aria-label={`Preview: ${nextProject.title}`}
        >
          <PreviewFace project={nextProject} />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-base-border text-ink-secondary transition-colors hover:border-signal-violet/50 hover:text-ink-primary"
        >
          <ArrowLeft size={16} />
        </button>

        <span className="font-mono text-xs text-ink-muted">
          <span className="text-ink-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          {" / "}
          {String(total).padStart(2, "0")}
        </span>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next project"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-base-border text-ink-secondary transition-colors hover:border-signal-violet/50 hover:text-ink-primary"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function PreviewFace({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-brand-gradient-soft">
        {project.hasScreenshot ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="20vw"
            className="object-cover object-top"
          />
        ) : (
          <>
            <div className="absolute inset-0 grid-overlay opacity-20" />
            <LayoutTemplate
              size={26}
              strokeWidth={1}
              className="relative text-ink-secondary/60"
            />
          </>
        )}
      </div>
      <div className="p-3 text-left">
        <p className="truncate text-xs font-medium text-ink-secondary">
          {project.title}
        </p>
      </div>
    </div>
  );
}
