"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TelemetryBadge, StatusBeacon } from "@/components/ui/TechDecorations";

type FinalCTAProps = {
  buttonText?: string;
  buttonHref?: string;
};

export function FinalCTA({
  buttonText = "REGISTER NOW",
  buttonHref = "/register",
}: FinalCTAProps) {
  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-[#050918] py-28 lg:py-36"
      aria-labelledby="final-cta-heading"
    >
      {/* Laser glow lines & ambient energy */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[750px] rounded-full bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-transparent blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex flex-wrap items-center justify-center gap-3"
        >
          <TelemetryBadge>ENGINEER&apos;S CARNIVAL 2026</TelemetryBadge>
          <StatusBeacon label="REGISTRATIONS OPEN" variant="emerald" />
        </motion.div>

        <motion.h2
          id="final-cta-heading"
          className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          BE PART OF THE{" "}
          <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent text-glow-gold">
            CARNIVAL.
          </span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-slate-300 md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          A day of engineering, creativity, innovation, and competition.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <Link
            href={buttonHref}
            className="cyber-btn group inline-flex items-center justify-center gap-3 border border-amber-400/80 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_30px_rgba(245,158,11,0.35)] transition-all hover:brightness-110"
          >
            <span>{buttonText}</span>
            <span
              className="inline-block transition-transform group-hover:translate-x-1.5"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

          <Link
            href="/schedule"
            className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-7 py-4 font-mono text-xs uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all hover:border-cyan-400/60 hover:bg-cyan-500/10"
          >
            <span>VIEW SCHEDULE</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>

        {/* Subtle Footer Note in Box */}
        <div className="mx-auto mt-12 max-w-md border border-white/5 bg-slate-900/40 p-4 font-mono text-[11px] text-slate-400 backdrop-blur-md">
          <div className="flex items-center justify-center gap-2">
            <span className="text-amber-400">❖</span>
            <span>VENUE: PIT CAMPUS · REPORTING TIME: 09:30 AM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
