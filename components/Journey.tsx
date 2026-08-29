"use client";

import { motion } from "framer-motion";
import { journeySteps } from "@/data/journey";

// Precomputed points along a gentle S-curve, spread across a 1000x520 viewBox.
const curvePoints = journeySteps.map((_, i) => {
  const n = journeySteps.length - 1;
  const t = i / n;
  const x = 40 + t * 920;
  const y = 90 + Math.sin(t * Math.PI * 1.6) * 150 + 100;
  return { x, y };
});

function buildPath(points: { x: number; y: number }[]) {
  if (points.length === 0) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.x + curr.x) / 2;
    d += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

const nodeColors = [
  "#818CF8",
  "#60A5FA",
  "#22D3EE",
  "#C084FC",
  "#A855F7",
  "#E879F9",
  "#F472B6",
];

export function Journey() {
  const pathD = buildPath(curvePoints);

  return (
    <section id="journey" className="section-pad relative overflow-hidden">
      <div className="container-shell">
        <p className="eyebrow mb-3 text-center">
          Learning &amp; Building Journey
        </p>
        <h2 className="mx-auto max-w-lg text-center text-3xl font-semibold tracking-tight text-ink-primary md:text-4xl">
          From first line of CSS to multi-agent AI
        </h2>

        <div className="relative mt-16 hidden md:block">
          <svg
            viewBox="0 0 1000 520"
            className="w-full"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="journeyGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="50%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#F472B6" />
              </linearGradient>
            </defs>
            <motion.path
              d={pathD}
              fill="none"
              stroke="url(#journeyGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.55 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {curvePoints.map((p, i) => (
              <motion.circle
                key={journeySteps[i].label}
                cx={p.x}
                cy={p.y}
                r="7"
                fill={nodeColors[i % nodeColors.length]}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.15 * i + 0.4 }}
                style={{
                  filter: `drop-shadow(0 0 6px ${nodeColors[i % nodeColors.length]})`,
                }}
              />
            ))}
          </svg>

          <div className="pointer-events-none absolute inset-0">
            {curvePoints.map((p, i) => (
              <motion.div
                key={journeySteps[i].label}
                className="absolute flex -translate-x-1/2 flex-col items-center gap-1 text-center"
                style={{
                  left: `${(p.x / 1000) * 100}%`,
                  top: `${(p.y / 520) * 100}%`,
                  marginTop: i % 2 === 0 ? "-4.5rem" : "1.4rem",
                }}
                initial={{ opacity: 0, y: i % 2 === 0 ? 10 : -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: 0.15 * i + 0.5 }}
              >
                <span className="whitespace-nowrap rounded-full border border-base-border bg-base-surface/90 px-3 py-1.5 font-mono text-[11px] text-ink-primary shadow-md backdrop-blur-sm">
                  {journeySteps[i].label}
                </span>
                <span className="max-w-[9rem] text-[10.5px] text-ink-muted">
                  {journeySteps[i].note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 md:hidden">
          {journeySteps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3.5"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-semibold text-white"
                style={{
                  background: nodeColors[i % nodeColors.length],
                  boxShadow: `0 0 16px ${nodeColors[i % nodeColors.length]}55`,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-medium text-ink-primary">
                  {step.label}
                </p>
                <p className="text-xs text-ink-muted">{step.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
