import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CompetitionList } from "@/components/competitions/CompetitionList";
import { FinalCTA } from "@/components/home/FinalCTA";
import { TechGridOverlay, TelemetryBadge, StatusBeacon } from "@/components/ui/TechDecorations";

export const metadata: Metadata = {
  title: "Competitions | Engineer's Carnival 2026",
  description:
    "Eight competitions. Eight completely different ways to spend your Engineer's Day at Parul University.",
};

export default function CompetitionsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#050814] min-h-screen text-slate-100">
        <section
          className="relative overflow-hidden py-20 lg:py-28"
          aria-labelledby="competitions-page-heading"
        >
          <TechGridOverlay />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <TelemetryBadge>DIRECTORY // EC-2026</TelemetryBadge>
              <StatusBeacon label="08 ARENAS ACTIVE" variant="emerald" />
            </div>

            <h1
              id="competitions-page-heading"
              className="font-display text-[clamp(2.75rem,8vw,6rem)] font-black uppercase leading-[0.88] tracking-tight text-white"
            >
              CHOOSE YOUR{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent text-glow-gold">
                ARENA.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-slate-300 md:text-lg">
              Eight official competitions designed for builders, competitive gamers, codecrafters, and tacticians. 
              Find your event, review the dossier, and lock in your registration.
            </p>
          </div>

          <div className="relative mx-auto mt-14 max-w-7xl px-6 lg:px-10" aria-hidden="true">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </section>

        <section className="relative pb-24 lg:pb-32" aria-label="All competitions">
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <CompetitionList />
          </div>
        </section>

        <FinalCTA buttonText="CLAIM YOUR SPOT" buttonHref="/register" />
      </main>
      <Footer />
    </>
  );
}
