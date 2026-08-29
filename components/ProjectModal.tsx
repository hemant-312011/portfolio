"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Github,
  ArrowUpRight,
  Target,
  ListChecks,
  Layers,
} from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel gradient-border relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl rounded-b-none border-b-0 bg-base-surface p-6 sm:rounded-3xl sm:border-b sm:p-8"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-base-border text-ink-secondary transition-colors hover:text-ink-primary"
            >
              <X size={16} />
            </button>

            <div className="pr-10">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {project.categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-accent/25 bg-accent/[0.06] px-2.5 py-0.5 font-mono text-[10px] text-accent"
                  >
                    {c}
                  </span>
                ))}
                <span className="font-mono text-[10px] text-ink-muted">
                  {project.year}
                </span>
              </div>
              <h3
                id="project-modal-title"
                className="text-2xl font-semibold text-ink-primary"
              >
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                {project.description}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-base-border bg-white/[0.02] p-4">
              <div className="mb-1.5 flex items-center gap-2 text-ink-primary">
                <Target size={14} className="text-accent" />
                <p className="text-xs font-semibold uppercase tracking-wide">
                  Problem / Goal
                </p>
              </div>
              <p className="text-sm text-ink-secondary">{project.goal}</p>
            </div>

            <div className="mt-6">
              <div className="mb-2.5 flex items-center gap-2 text-ink-primary">
                <Layers size={14} className="text-accent" />
                <p className="text-xs font-semibold uppercase tracking-wide">
                  Technologies
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-base-border bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-ink-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2.5 flex items-center gap-2 text-ink-primary">
                <ListChecks size={14} className="text-accent" />
                <p className="text-xs font-semibold uppercase tracking-wide">
                  Key Features
                </p>
              </div>
              <ul className="space-y-1.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm text-ink-secondary"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {project.challenges && project.challenges.length > 0 && (
              <div className="mt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-primary">
                  Challenges
                </p>
                <ul className="space-y-1.5">
                  {project.challenges.map((c) => (
                    <li
                      key={c}
                      className="flex gap-2.5 text-sm text-ink-secondary"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-violet" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.learned && project.learned.length > 0 && (
              <div className="mt-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-primary">
                  What I Learned
                </p>
                <ul className="space-y-1.5">
                  {project.learned.map((l) => (
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
            )}

            <div className="mt-8 flex flex-wrap gap-3 border-t border-base-border pt-6">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github size={15} /> View Code
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
