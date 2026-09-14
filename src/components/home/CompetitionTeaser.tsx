"use client";

import { CompetitionList } from "@/components/competitions/CompetitionList";
import { TelemetryBadge, StatusBeacon } from "@/components/ui/TechDecorations";

export function CompetitionTeaser() {
  return (
    <section
      id="competitions"
      className="relative overflow-hidden bg-[#060b18] py-24 lg:py-32"
      aria-labelledby="competitions-heading"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <TelemetryBadge>SECTION 02 // COMPETITIONS</TelemetryBadge>
            <StatusBeacon label="08 COMPETITIONS" variant="emerald" />
          </div>

          <h2
            id="competitions-heading"
            className="font-display text-3xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            FIND YOUR{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent text-glow-gold">
              CHALLENGE.
            </span>
          </h2>

          <p className="mt-5 font-body text-base leading-relaxed text-slate-300 md:text-lg">
            Eight competitions across technology, creativity, strategy, and
            problem-solving. Find your challenge, put your skills to the test,
            and make your mark at Engineer&apos;s Carnival 2026.
          </p>
        </div>

        {/* Competition Cards Grid */}
        <CompetitionList />
      </div>
    </section>
  );
}