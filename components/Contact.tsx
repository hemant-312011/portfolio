"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { personal } from "@/data/personal";

/**
 * This form is UI-only. No backend is wired up.
 * To make it functional, either:
 *  1) Formspree — set `action="https://formspree.io/f/YOUR_ID"` on the <form>
 *     and remove `onSubmit` (or keep it and let the browser submit natively).
 *  2) Resend / custom API — replace `handleSubmit` below with a fetch() call
 *     to your own /api/contact route.
 */
export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to Formspree, Resend, or your own API route.
    setStatus("sent");
  }

  const contactLinks = [
    { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
    { icon: Github, label: "GitHub", href: personal.github },
    { icon: Linkedin, label: "LinkedIn", href: personal.linkedin },
  ];

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-shell grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink-primary md:text-4xl">
            Let&apos;s build something great.
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-secondary">
            Open to Frontend and AI Developer roles. If you have a project or a
            role in mind, reach out — I usually reply within a day or two.
          </p>

          <div className="mt-9 flex flex-col gap-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-3 text-sm text-ink-secondary transition-colors hover:text-ink-primary"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-base-border transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    <Icon size={15} strokeWidth={1.75} />
                  </span>
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          onSubmit={handleSubmit}
          className="card-surface gradient-border flex flex-col gap-4 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-xs font-medium text-ink-secondary"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="rounded-xl border border-base-border bg-white/[0.02] px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent/50 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs font-medium text-ink-secondary"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="rounded-xl border border-base-border bg-white/[0.02] px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent/50 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium text-ink-secondary"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell me about the role or project"
              className="resize-none rounded-xl border border-base-border bg-white/[0.02] px-4 py-3 text-sm text-ink-primary placeholder:text-ink-muted focus:border-accent/50 focus:outline-none"
            />
          </div>

          <button type="submit" className="btn-primary mt-2 justify-center">
            Send Message
            <Send size={15} />
          </button>

          {status === "sent" && (
            <p className="text-center text-xs text-accent" role="status">
              This form isn&apos;t connected to a backend yet — see the comment
              at the top of Contact.tsx to wire it up.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
