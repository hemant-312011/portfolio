"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { personal } from "@/data/personal";

export function GithubSection() {
  return (
    <section className="relative">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="glass-panel gradient-border noise-layer relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12"
        >
          <div
            className="pointer-events-none absolute inset-0 grid-overlay opacity-30"
            aria-hidden="true"
          />
          <Github
            size={30}
            strokeWidth={1.3}
            className="relative mx-auto mb-5 text-accent"
          />
          <h3 className="relative text-2xl font-semibold text-ink-primary md:text-3xl">
            More projects, experiments and code on GitHub.
          </h3>
          <p className="relative mx-auto mt-3 max-w-md text-sm text-ink-secondary">
            Every repository is public — from full applications to smaller
            experiments with new AI tooling.
          </p>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary relative mt-8"
          >
            Visit GitHub Profile
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
