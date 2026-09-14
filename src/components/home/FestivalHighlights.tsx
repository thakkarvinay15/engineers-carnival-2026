"use client";

import { motion } from "framer-motion";
import { HudCorner, TelemetryBadge } from "@/components/ui/TechDecorations";

const PILLARS = [
  {
    index: "01",
    tag: "ROBOTICS & ENGINEERING",
    title: "ROBOTICS CHALLENGE",
    description:
      "Build and compete with custom sumo robots, putting your design, engineering, and control skills to the test.",
    highlight: "Robo Fight",
    accent: "amber",
  },
  {
    index: "02",
    tag: "ESPORTS & GAMING",
    title: "COMPETITIVE GAMING",
    description:
      "Team up, compete, and put your strategy and skills to the test across competitive gaming challenges.",
    highlight: "Battle Royale",
    accent: "cyan",
  },
  {
    index: "03",
    tag: "CODING & PROBLEM-SOLVING",
    title: "CODING CHALLENGES",
    description:
      "Test your programming, debugging, and problem-solving skills through fast-paced coding challenges.",
    highlight: "CodeCraft",
    accent: "amber",
  },
  {
    index: "04",
    tag: "CREATIVE & STRATEGIC",
    title: "CREATIVE CHALLENGES",
    description:
      "From strategy and deduction to puzzles and visual design, explore challenges that put creativity and thinking to the test.",
    highlight: "ClueChase",
    accent: "cyan",
  },
];

export function FestivalHighlights() {
  return (
    <section className="relative border-t border-white/10 bg-[#040814] py-24 lg:py-32">
      {/* Background cyber grid */}
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <TelemetryBadge>SECTION 03 // EVENT HIGHLIGHTS</TelemetryBadge>
            </div>
            <h2 className="font-display text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
              FOUR AREAS{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent text-glow-cyan">
              ONE CARNIVAL.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs uppercase tracking-wider text-slate-400">
          A mix of technology, creativity, competition, and problem-solving, bringing different skills and interests together under one event.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => {
            const isCyan = p.accent === "cyan";
            return (
              <motion.div
                key={p.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`group relative flex flex-col justify-between border ${
                  isCyan
                    ? "border-cyan-500/20 bg-cyan-950/10 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]"
                    : "border-amber-500/20 bg-amber-950/10 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]"
                } p-6 backdrop-blur-md transition-all duration-300`}
              >
                <HudCorner color={isCyan ? "cyan" : "amber"} size="sm" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span
                      className={`font-mono text-xs font-black ${
                        isCyan ? "text-cyan-400" : "text-amber-400"
                      }`}
                    >
                      {"// "}{p.index}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight text-white group-hover:text-white">
                    {p.title}
                  </h3>

                  <p className="mt-3 font-body text-xs leading-relaxed text-slate-300">
                    {p.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/5 pt-4">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.16em] ${
                      isCyan ? "text-cyan-400" : "text-amber-400"
                    }`}
                  >
                    FEATURED: {p.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
