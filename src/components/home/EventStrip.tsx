"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
  "08 COMPETITIONS",
  "18 SEPTEMBER 2026",
  "PARUL INSTITUTE OF TECHNOLOGY",
  "ROBO FIGHT",
  "BATTLE ROYALE",
  "CODECRAFT",
  "TRAITOR",
  "CLUECHASE",
  "FRAME & FOCUS",
  "PIXEL PLAY",
  "THE EXPLORER CLUB",
];

export function EventStrip() {
  return (
    <div
      aria-label="Event highlights"
      className="relative overflow-hidden border-y border-amber-500/20 bg-[#070e1e] py-3.5"
    >
      {/* Laser glow lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* Infinite smooth marquee */}
      <div className="flex select-none whitespace-nowrap">
        <motion.div
          className="flex items-center gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-200">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              <span className="font-mono text-[10px] text-cyan-400/70">{"//"}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
