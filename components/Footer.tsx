import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer className="relative border-t border-base-border">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-violet/50 to-transparent"
        aria-hidden="true"
      />
      <div className="container-shell flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-ink-primary">
            {personal.name}
          </p>
          <p className="text-xs text-ink-muted">{personal.role}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-secondary transition-colors hover:text-ink-primary"
          >
            <Github size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-secondary transition-colors hover:text-ink-primary"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-ink-secondary transition-colors hover:text-ink-primary"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="font-mono text-[11px] text-ink-muted">
          Built with Next.js &amp; TypeScript
        </p>
      </div>
    </footer>
  );
}
