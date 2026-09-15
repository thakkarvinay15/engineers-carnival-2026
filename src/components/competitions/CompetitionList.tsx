"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { COMPETITIONS, getRegistrationLinks } from "@/lib/constants";
import { HudCorner } from "@/components/ui/TechDecorations";

const CATEGORY_MAP: Record<
  string,
  { category: string; icon: string; specs: string }
> = {
  traitor: {
    category: "SOCIAL DEDUCTION",
    icon: "👁️",
    specs: "Individual · ~2 Hours · Social Deduction",
  },

  "robo-fight": {
    category: "ROBOTICS",
    icon: "🤖",
    specs: "Teams of 2-3 · 800g Sumo Bot · 3-Min Bouts",
  },

  "battle-royale": {
    category: "ESPORTS",
    icon: "🎮",
    specs: "VALORANT (5v5) + BGMI (Squads) · LAN Finale",
  },

  "cook-off": {
    category: "INNOVATION",
    icon: "🔥",
    specs: "Duo (2) · 60 Mins · Maggi Innovation",
  },

  cluechase: {
    category: "CAMPUS HUNT",
    icon: "🧭",
    specs: "Teams of 4 · PIT Campus · Treasure Hunt",
  },

  codecraft: {
    category: "CODING",
    icon: "💻",
    specs: "Individual · 1 Hour · Vibe Coding or Debugging",
  },

  "frame-and-focus": {
    category: "MEDIA",
    icon: "📸",
    specs: "Individual · Mobile Camera Only · 1-2 Hours",
  },

  "pixel-play": {
    category: "DIGITAL DESIGN",
    icon: "🎨",
    specs: "Individual · 40 Minutes · No AI Allowed",
  },
};

const FILTER_TABS = [
  { id: "all", label: "ALL COMPETITIONS" },
  { id: "robotics", label: "ROBOTICS", match: ["robo-fight"] },
  { id: "esports", label: "ESPORTS", match: ["battle-royale"] },
  {
    id: "coding",
    label: "CODE & DESIGN",
    match: ["codecraft", "pixel-play"],
  },
  {
    id: "campus",
    label: "CAMPUS & SOCIAL",
    match: ["traitor", "cluechase", "cook-off", "frame-and-focus"],
  },
];

export function CompetitionList() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCompetitions = COMPETITIONS.filter((comp) => {
    if (activeFilter === "all") return true;

    const tab = FILTER_TABS.find((t) => t.id === activeFilter);

    return tab?.match ? tab.match.includes(comp.slug) : true;
  });

  return (
    <div>
      {/* Category Filter Navigation */}
      <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
        <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
          FILTER BY:
        </span>

        {FILTER_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`border px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
              activeFilter === tab.id
                ? "border-amber-400 bg-amber-500/20 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                : "border-white/10 bg-slate-900/40 text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Competition Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredCompetitions.map((comp) => {
            const meta = CATEGORY_MAP[comp.slug] || {
              category: "EVENT",
              icon: "⚡",
              specs: "PIT Campus",
            };

            const registrationLinks = getRegistrationLinks(comp.slug);

            return (
              <motion.div
                key={comp.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between border border-white/10 bg-[#081022]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/50 hover:bg-[#0c1833] hover:shadow-[0_0_35px_rgba(245,158,11,0.12)] md:p-8"
              >
                <HudCorner color="amber" size="md" />

                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-extrabold text-amber-400">
                        {"// "}{comp.number}
                      </span>

                      <span className="font-mono text-[10px] text-slate-400">
                        ❖
                      </span>

                      <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400">
                        {meta.category}
                      </span>
                    </div>

                    {comp.tag ? (
                      <span className="rounded border border-rose-500/40 bg-rose-950/40 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-rose-300">
                        {comp.tag}
                      </span>
                    ) : (
                      <span className="rounded border border-emerald-500/30 bg-emerald-950/30 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                        OPEN
                      </span>
                    )}
                  </div>

                  {/* Main Title */}
                  <div className="mt-5">
                    <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-amber-300 md:text-3xl">
                      {comp.name}
                    </h3>

                    <p className="mt-2.5 font-mono text-xs text-slate-400">
                      {meta.specs}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-8 border-t border-white/10 pt-5">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* View Competition Details */}
                    <Link
                      href={`/competitions/${comp.slug}`}
                      className="group/link inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-slate-200 backdrop-blur-md transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white"
                    >
                      <span>VIEW DETAILS</span>

                      <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>

                    {/* Direct Registration Link(s) */}
                    {registrationLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="cyber-btn inline-flex items-center gap-1.5 border border-amber-400/60 bg-amber-500/20 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:border-amber-400 hover:bg-amber-500/30 hover:text-white"
                      >
                        <span>{link.label.replace("Register for ", "")}</span>
                        <span className="text-[10px]">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}