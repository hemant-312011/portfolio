"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, LayoutTemplate } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

const floatOffsets = [
  "md:-translate-y-3",
  "md:translate-y-4",
  "md:-translate-y-1",
  "md:translate-y-2",
];

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const isHorizontal = project.size === "horizontal";
  const ref = useRef<HTMLDivElement>(null);

  const mvX = useMotionValue(0.5);
  const mvY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mvY, [0, 1], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mvX, [0, 1], [-6, 6]), {
    stiffness: 200,
    damping: 20,
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
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
      className={`animate-float-slow ${floatOffsets[index % floatOffsets.length]} ${
        project.size === "large" ? "sm:col-span-2" : ""
      }`}
      style={{ animationDelay: `${(index % 4) * 0.7}s` }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className={`card-surface gradient-border group relative flex overflow-hidden ${
          isHorizontal ? "flex-col sm:flex-row" : "flex-col"
        }`}
      >
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="absolute inset-0 z-10"
          aria-label={`View details for ${project.title}`}
        />

        <div
          className={`browser-frame relative m-3 mb-0 ${
            isHorizontal ? "sm:m-4 sm:mb-4 sm:w-[42%]" : "sm:mb-0"
          }`}
        >
          <div className="browser-frame-bar">
            <span className="h-2 w-2 rounded-full bg-signal-pink/60" />
            <span className="h-2 w-2 rounded-full bg-accent-soft/60" />
            <span className="h-2 w-2 rounded-full bg-signal-blue/60" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-brand-gradient-soft">
            {project.hasScreenshot ? (
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              <>
                <div
                  className="absolute inset-0 grid-overlay opacity-30"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <LayoutTemplate
                    size={project.size === "large" ? 42 : 30}
                    strokeWidth={1}
                    className="text-ink-secondary/60 transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </>
            )}
          </div>
          {project.featured && (
            <span className="absolute right-2 top-9 rounded-full bg-brand-gradient px-2.5 py-1 font-mono text-[10px] font-semibold text-white shadow-[0_4px_16px_-4px_rgba(168,85,247,0.6)]">
              Featured
            </span>
          )}
          <span className="absolute left-2 top-9 rounded-full bg-base-bg/70 px-2 py-0.5 font-mono text-[10px] text-ink-muted backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-ink-primary">
              {project.title}
            </h3>
            <span className="font-mono text-[11px] text-ink-muted">
              {project.year}
            </span>
          </div>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-secondary line-clamp-2">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-1.5 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-base-border bg-white/[0.02] px-2 py-0.5 font-mono text-[10.5px] text-ink-secondary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-md px-2 py-0.5 font-mono text-[10.5px] text-ink-muted">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="relative z-20 flex items-center gap-4 border-t border-base-border pt-4">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-ink-secondary transition-colors hover:text-ink-primary"
              >
                <Github size={13} /> Code
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-ink-secondary transition-colors hover:text-ink-primary"
              >
                <ArrowUpRight size={13} /> Live Demo
              </a>
            )}
            <span className="ml-auto flex items-center gap-1 text-xs font-medium text-accent-soft opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
              Details <ArrowUpRight size={13} />
            </span>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
