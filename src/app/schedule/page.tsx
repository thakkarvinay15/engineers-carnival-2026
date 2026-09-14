import type { Metadata } from "next";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import {
  TechGridOverlay,
  HudCorner,
  TelemetryBadge,
  StatusBeacon,
} from "@/components/ui/TechDecorations";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Schedule | Engineer's Carnival 2026",
  description:
    "Tentative schedule for Engineer's Carnival 2026 at Parul Institute of Technology, Parul University.",
};

const SCHEDULE_STAGES = [
  {
    time: "09:30 AM",
    stage: "STAGE 01",
    activity: "Inauguration Ceremony",
    venue: "PIT Main Hall",
    detail:
      "The day begins with the official inauguration of Engineer's Carnival 2026 in the presence of invited guests, faculty members, and the organizing team.",
    status: "INAUGURATION",
  },
  {
    time: "10:00 AM",
    stage: "STAGE 02",
    activity: "Competitions Begin",
    venue: "Respective Competition Venues",
    detail:
      "Participants report to their assigned competition venues. Event briefings and competition activities begin according to the respective competition schedules.",
    status: "COMPETITIONS",
  },
  {
    time: "12:00 PM",
    stage: "STAGE 03",
    activity: "Lunch & Break",
    venue: "Campus Common Areas",
    detail:
      "A break for participants and organizers to recharge before the afternoon activities begin.",
    status: "INTERMISSION",
  },
  {
    time: "01:00 PM",
    stage: "STAGE 04",
    activity: "ClueChase Begins",
    venue: "PIT Campus",
    detail:
      "Teams take on a campus-wide challenge involving clues, puzzles, teamwork, and problem-solving.",
    status: "CHALLENGE",
  },
  {
    time: "03:00 PM",
    stage: "STAGE 05",
    activity: "Felicitation Ceremony & Awards",
    venue: "Venue to be announced",
    detail:
      "The Carnival concludes with the felicitation of winners, trophy presentations, certificate distribution, and a celebration of the participants' achievements.",
    status: "FELICITATION",
  },
];

export default function SchedulePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#050814] text-slate-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <TechGridOverlay />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <TelemetryBadge>TIMELINE // 18 SEPT 2026</TelemetryBadge>
              <StatusBeacon label="ONE-DAY CARNIVAL" variant="amber" />
            </div>

            <h1 className="max-w-4xl font-display text-[clamp(2.75rem,8vw,6rem)] font-black uppercase leading-[0.88] tracking-tight text-white">
              THE DAY,{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent text-glow-gold">
                MAPPED OUT.
              </span>
            </h1>

            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-slate-300 md:text-lg">
              A tentative timeline for Engineer&apos;s Carnival 2026 at Parul
              Institute of Technology. Get ready for a full day of competition,
              creativity, and celebration.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          className="relative pb-24 lg:pb-32"
          aria-label="Event schedule"
        >
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="relative space-y-10 border-l-2 border-amber-500/30 pl-6 md:pl-10">
              {SCHEDULE_STAGES.map((item) => (
                <div key={item.time} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] top-6 flex h-4 w-4 items-center justify-center md:-left-[47px]">
                    <span className="absolute h-full w-full animate-ping-slow rounded-full bg-amber-400 opacity-75" />
                    <span className="relative h-3 w-3 rounded-full border-2 border-amber-400 bg-[#050814]" />
                  </div>

                  {/* Schedule Card */}
                  <div className="hud-box border border-white/10 bg-[#081022]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/50 hover:bg-[#0c1833] md:p-8">
                    <HudCorner color="amber" size="sm" />

                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-black text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                          {item.time}
                        </span>

                        <span className="font-mono text-[10px] text-slate-400">
                          ❖
                        </span>

                        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                          {item.stage}
                        </span>
                      </div>

                      <span className="rounded border border-white/10 bg-slate-900/60 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-cyan-400">
                        {item.status}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
                      {item.activity}
                    </h2>

                    <p className="mt-2 font-mono text-xs text-amber-300/80">
                      📍 {item.venue}
                    </p>

                    <p className="mt-3 font-body text-sm leading-relaxed text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Schedule Notice */}
            <div className="mt-14 border border-amber-500/30 bg-amber-950/20 p-6 backdrop-blur-md md:p-8">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-amber-400">
                <span>⚠</span>
                <span>OPERATIONAL NOTICE</span>
              </div>

              <p className="mt-2 font-body text-sm leading-relaxed text-slate-300">
                This schedule is tentative and may be subject to changes on
                the day of the event. Final competition timings, brackets,
                reporting instructions, and venue details will be communicated
                to registered participants through the official communication
                channels.
              </p>
            </div>
          </div>
        </section>

        <FinalCTA buttonText="REGISTER NOW" buttonHref="/register" />
      </main>

      <Footer />
    </>
  );
}