import type { Metadata } from "next";
import Link from "next/link";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

import {
  TechGridOverlay,
  HudCorner,
  TelemetryBadge,
  StatusBeacon,
} from "@/components/ui/TechDecorations";

import { COMPETITIONS, getRegistrationLinks } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Register | Engineer's Carnival 2026",
  description:
    "Register for Engineer's Carnival 2026 competitions at Parul Institute of Technology, Parul University.",
};

const QUICK_SPECS: Record<string, string> = {
  traitor: "Individual · PIT Students Only · Social Deduction",
  "robo-fight": "2–3 Members · 800g Sumo Bot · Ring Battle",
  "battle-royale": "VALORANT (5v5) + BGMI (Squads) · LAN Finale",
  "cook-off": "2 Members (Duo) · Bio/Food/Dairy Tech Only · 60 Mins",
  cluechase: "Max 4 Members · PIT Students Only · Campus Hunt",
  codecraft: "Individual · 1 Hour · Vibe Coding or Debugging",
  "frame-and-focus":
    "Individual · Mobile Camera Only · Photography & Video",
  "pixel-play": "Individual · 40-Minute Design Sprint · No AI",
};

export default function RegisterPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#050814] text-slate-100">
        {/* Registration Hero */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <TechGridOverlay />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <TelemetryBadge>
                FAST-TRACK PORTAL // EC-2026
              </TelemetryBadge>

              <StatusBeacon
                label="REGISTRATIONS LIVE"
                variant="emerald"
              />
            </div>

            <h1 className="max-w-5xl font-display text-[clamp(2.75rem,8vw,6rem)] font-black uppercase leading-[0.88] tracking-tight text-white">
              PICK YOUR{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent text-glow-gold">
                COMPETITION.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-slate-300 md:text-lg">
              Choose your arena below and access the official registration
              form. Review the competition details before submitting your
              entry. Battle Royale has separate registration forms for
              VALORANT and BGMI.
            </p>
          </div>
        </section>

        {/* Registration Cards */}
        <section
          className="relative pb-24 lg:pb-32"
          aria-label="Registration options"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6">
              {COMPETITIONS.map((competition) => {
                const links = getRegistrationLinks(competition.slug);

                const spec =
                  QUICK_SPECS[competition.slug] ||
                  "PIT Campus Arena";

                return (
                  <div
                    key={competition.slug}
                    className="hud-box relative border border-white/10 bg-[#081022]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/50 hover:bg-[#0c1833] md:p-8"
                  >
                    <HudCorner color="amber" size="sm" />

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                      {/* Competition Information */}
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-xs font-black text-amber-400">
                            {"// ARENA "}
                            {competition.number}
                          </span>

                          {competition.tag ? (
                            <span className="rounded border border-rose-500/40 bg-rose-950/40 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-rose-300">
                              {competition.tag}
                            </span>
                          ) : (
                            <span className="rounded border border-emerald-500/30 bg-emerald-950/30 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                              OPEN
                            </span>
                          )}
                        </div>

                        <h2 className="mt-3 font-display text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                          {competition.name}
                        </h2>

                        <p className="mt-2 font-mono text-xs text-slate-400">
                          {spec}
                        </p>
                      </div>

                      {/* Registration Actions */}
                      <div className="flex flex-wrap items-center gap-3">
                        <Link
                          href={`/competitions/${competition.slug}`}
                          className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-slate-200 backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white"
                        >
                          <span>READ RULES</span>

                          <span
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </Link>

                        {links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="cyber-btn group inline-flex items-center gap-2.5 border border-amber-400/80 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all hover:brightness-110"
                          >
                            <span>{link.label}</span>

                            <span
                              className="transition-transform duration-200 group-hover:translate-x-1"
                              aria-hidden="true"
                            >
                              ↗
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Registration Information */}
            <div className="mt-14 border border-cyan-500/30 bg-cyan-950/20 p-6 backdrop-blur-md md:p-8">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                <span aria-hidden="true">❖</span>
                <span>REGISTRATION PROTOCOL</span>
              </div>

              <ul className="mt-5 space-y-3 font-body text-sm leading-relaxed text-slate-300">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 text-amber-400"
                    aria-hidden="true"
                  >
                    •
                  </span>

                  <span>
                    <strong className="text-white">
                      Check Eligibility:
                    </strong>{" "}
                    Review the individual competition rules carefully before
                    registering. Carry your valid College ID card where
                    required.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 text-amber-400"
                    aria-hidden="true"
                  >
                    •
                  </span>

                  <span>
                    <strong className="text-white">
                      Avoid Schedule Conflicts:
                    </strong>{" "}
                    Participants should not register for multiple competitions
                    taking place at the same time. ClueChase takes place in
                    the afternoon and may be combined with another competition
                    where schedules permit.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 text-amber-400"
                    aria-hidden="true"
                  >
                    •
                  </span>

                  <span>
                    <strong className="text-white">
                      Limited Entries:
                    </strong>{" "}
                    Competitions marked as{" "}
                    <span className="text-rose-300">
                      LIMITED ENTRIES
                    </span>{" "}
                    are subject to available slots. Early registration is
                    recommended.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 text-amber-400"
                    aria-hidden="true"
                  >
                    •
                  </span>

                  <span>
                    <strong className="text-white">
                      Official Forms:
                    </strong>{" "}
                    Registration is completed through the official Google Form
                    linked to each competition.
                  </span>
                </li>
              </ul>
            </div>

            {/* Bottom Note */}
            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                EC/2026/PIT // REGISTRATION TERMINAL
              </span>

              <Link
                href="/competitions"
                className="font-mono text-xs uppercase tracking-[0.14em] text-amber-400 transition-colors hover:text-white"
              >
                VIEW ALL ARENAS →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}