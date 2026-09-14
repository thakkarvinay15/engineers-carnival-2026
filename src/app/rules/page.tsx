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
  title: "Rules | Engineer's Carnival 2026",
  description:
    "General rules and guidelines for Engineer's Carnival 2026 at Parul Institute of Technology.",
};

const RULES = [
  {
    title: "Eligibility",
    rule:
      "Participants must meet the eligibility requirements specified for their respective competition. Check the individual competition dossier before registering.",
  },

  {
    title: "Reporting Time",
    rule:
      "All registered participants must report to the designated reporting venue by 9:30 AM sharp on 18 September 2026.",
  },

  {
    title: "College ID Card",
    rule:
      "Participants must carry their official College ID card and present it whenever requested by the organizers. First-year students who have not yet received their ID card should carry valid proof of admission.",
  },

  {
    title: "Late Entry Protocol",
    rule:
      "Participants arriving after their competition has commenced may not be permitted to enter. Organizers and event coordinators will have the final say regarding late entry.",
  },

  {
    title: "Simultaneous Participation",
    rule:
      "Participants should not register for multiple competitions scheduled at the same time. ClueChase takes place in the afternoon and may be taken in addition to another competition where the schedules permit.",
  },

  {
    title: "Discipline & Decorum",
    rule:
      "All participants are expected to maintain discipline, decorum, and respectful behaviour throughout the event and campus. Competition-specific instructions must also be followed at all times.",
  },

  {
    title: "Fair Play & Integrity",
    rule:
      "Cheating, impersonation, misconduct, deliberate disruption, unfair assistance, or attempts to exploit competition rules may result in immediate disqualification.",
  },

  {
    title: "Photography & Media Consent",
    rule:
      "Photography and videography may take place throughout the event. By participating, you acknowledge that event-related media may be used on official platforms for promotional and archival purposes.",
  },
];

export default function RulesPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#050814] text-slate-100">
        {/* Rules Hero */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <TechGridOverlay />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <TelemetryBadge>
                DIRECTIVES // EC-2026
              </TelemetryBadge>

              <StatusBeacon
                label="CAMPUS PROTOCOL"
                variant="amber"
              />
            </div>

            <h1 className="max-w-5xl font-display text-[clamp(2.75rem,8vw,6rem)] font-black uppercase leading-[0.88] tracking-tight text-white">
              BEFORE YOU{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent text-glow-gold">
                ENTER.
              </span>
            </h1>

            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-slate-300 md:text-lg">
              Know the rules. Know the arena. Make your mark.
            </p>
          </div>
        </section>

        {/* Rules Grid */}
        <section
          className="relative border-y border-white/10 bg-[#070d1d] py-20 lg:py-28"
          aria-label="General event rules"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
                {"// GENERAL EVENT DIRECTIVES"}
              </span>

              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                EC/2026/PIT
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {RULES.map((item, index) => (
                <article
                  key={item.title}
                  className="hud-box relative border border-white/10 bg-[#081022]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/40 hover:bg-[#0c1833] md:p-8"
                >
                  <HudCorner color="amber" size="sm" />

                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="font-mono text-xs font-black text-amber-400">
                      {"// DIRECTIVE 0"}
                      {index + 1}
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                      MANDATORY
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-xl font-bold uppercase tracking-tight text-white md:text-2xl">
                    {item.title}
                  </h2>

                  <p className="mt-3 font-body text-sm leading-relaxed text-slate-300 md:text-base">
                    {item.rule}
                  </p>
                </article>
              ))}
            </div>

            {/* Operational Notes */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="border border-amber-500/30 bg-amber-950/20 p-6 backdrop-blur-md md:p-8">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400">
                  ⚠ OPERATIONAL COMMUNICATION
                </span>

                <p className="mt-3 font-body text-sm leading-relaxed text-slate-300">
                  Competition-specific rules, venues, reporting instructions,
                  schedules, bracket information, and important updates will
                  be communicated by the respective event coordinators and
                  through official communication channels.
                </p>
              </div>

              <div className="border border-cyan-500/30 bg-cyan-950/20 p-6 backdrop-blur-md md:p-8">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
                  ❖ JURY &amp; COMMITTEE AUTHORITY
                </span>

                <p className="mt-3 font-body text-sm leading-relaxed text-slate-300">
                  Organizers, referees, judges, and designated event
                  coordinators reserve the right to make final decisions on
                  competition and operational matters arising during the
                  event.
                </p>
              </div>
            </div>

            {/* Final Reminder */}
            <div className="mt-8 border border-white/10 bg-[#081022]/60 p-6 text-center backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                READ YOUR COMPETITION DOSSIER BEFORE REPORTING
              </p>
            </div>
          </div>
        </section>

        <FinalCTA
          buttonText="PROCEED TO REGISTRATION"
          buttonHref="/register"
        />
      </main>

      <Footer />
    </>
  );
}