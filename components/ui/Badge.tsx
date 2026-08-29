interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-base-border bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-secondary ${className}`}
    >
      {children}
    </span>
  );
}
