"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { projects, type Project, type ProjectCategory } from "@/data/projects";

const filters: Array<ProjectCategory | "All"> = [
  "All",
  "Frontend",
  "React",
  "Next.js",
  "AI",
  "RAG",
  "Multi-Agent",
];

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) =>
      p.categories.includes(active as ProjectCategory),
    );
  }, [active]);

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Things I've built"
            description="A mix of production-style AI systems and frontend engineering. Drag, swipe, or use the arrows below to browse — or open any project for the full case study."
          />
        </div>

        <div className="mt-12">
          <FeaturedCarousel projects={projects} onOpen={setSelected} />
        </div>

        <div className="mt-20 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                active === f
                  ? "border-transparent bg-brand-gradient text-white shadow-[0_6px_20px_-8px_rgba(168,85,247,0.6)]"
                  : "border-base-border text-ink-secondary hover:border-signal-violet/40 hover:text-ink-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                onOpen={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-ink-muted">
            No projects in this category yet.
          </p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
