"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { personal } from "@/data/personal";

export function Resume() {
  return (
    <section id="resume" className="section-pad relative">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="card-surface gradient-border flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-12"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-accent/[0.06]">
            <FileText size={22} strokeWidth={1.6} className="text-accent" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-ink-primary md:text-3xl">
              Want to know more about my work?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-ink-secondary">
              My resume covers everything above in detail — skills, projects,
              and how I approach building AI-native products.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Resume
            </a>
            <a href={personal.resumePath} download className="btn-secondary">
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
