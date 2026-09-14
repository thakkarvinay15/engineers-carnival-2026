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
  title: "Prizes | Engineer's Carnival 2026",
  description:
    "Discover the trophies, certificates, and recognition awarded at Engineer's Carnival 2026.",
};

const PRIZE_TIERS = [
  {
    number: "01",
    title: "TROPHIES",
    tag: "CHAMPIONSHIP TROPHIES",
    desc: "Trophies will be awarded to the winners of the competition arenas in recognition of their performance and achievement.",
    icon: "🏆",
    color: "amber",
  },
  {
    number: "02",
    title: "CERTIFICATES",
    tag: "OFFICIAL CERTIFICATES",
    desc: "Participants and winners will receive certificates recognising their participation, performance, and contribution to the Carnival.",
    icon: "📜",
    color: "cyan",
  },
  {
    number: "03",
    title: "RECOGNITION",
    tag: "CELEBRATE YOUR ACHIEVEMENT",
    desc: "Every competition is an opportunity to showcase your skills, challenge yourself, and earn recognition for your achievement.",
    icon: "⚡",
    color: "amber",
  },
];

export default function PrizesPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#050814] text-slate-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <TechGridOverlay />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <TelemetryBadge>ACCOLADES // EC-2026</TelemetryBadge>
              <StatusBeacon label="AWARDS & RECOGNITION" variant="amber" />
            </div>

            <h1 className="max-w-4xl font-display text-[clamp(2.75rem,8vw,6rem)] font-black uppercase leading-[0.88] tracking-tight text-white">
              COMPETE.{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent text-glow-gold">
                ACHIEVE.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-slate-300 md:text-lg">
              Step into the arena, put your skills to the test, and earn your
              place among the winners of Engineer&apos;s Carnival 2026.
            </p>
          </div>
        </section>

        {/* Awards Grid */}
        <section className="relative border-y border-white/10 bg-[#070d1d] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
                {"// WHAT YOU TAKE HOME"}
              </span>

              <h2 className="mt-3 font-display text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
                RECOGNITION THAT{" "}
                <span className="text-cyan-400">MATTERS.</span>
              </h2>

              <p className="mt-4 font-body text-sm leading-relaxed text-slate-400 md:text-base">
                From the competition floor to the final podium, every
                achievement deserves to be recognised.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {PRIZE_TIERS.map((tier) => {
                const isCyan = tier.color === "cyan";

                return (
                  <div
                    key={tier.number}
                    className={`hud-box relative flex flex-col justify-between border ${
                      isCyan
                        ? "border-cyan-500/30 bg-cyan-950/15 hover:border-cyan-400"
                        : "border-amber-500/30 bg-amber-950/15 hover:border-amber-400"
                    } p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_35px_rgba(245,158,11,0.15)]`}
                  >
                    <HudCorner
                      color={isCyan ? "cyan" : "amber"}
                      size="md"
                    />

                    <div>
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span
                          className={`font-mono text-sm font-black ${
                            isCyan ? "text-cyan-400" : "text-amber-400"
                          }`}
                        >
                          {"// "}
                          {tier.number}
                        </span>

                        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                          {tier.tag}
                        </span>
                      </div>

                      <div className="my-6 text-4xl">{tier.icon}</div>

                      <h2 className="font-display text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                        {tier.title}
                      </h2>

                      <p className="mt-4 font-body text-sm leading-relaxed text-slate-300">
                        {tier.desc}
                      </p>
                    </div>

                    <div className="mt-8 border-t border-white/5 pt-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        PIT CAMPUS · ENGINEER&apos;S CARNIVAL 2026
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Beyond the Podium */}
        <section className="py-24 text-center lg:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
              {"// BEYOND THE PODIUM"}
            </span>

            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-white md:text-5xl">
              MORE THAN A{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                COMPETITION.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-slate-300 md:text-lg">
              Challenge yourself, meet fellow students, showcase your skills,
              and be part of an experience built around creativity,
              competition, and engineering.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA
          buttonText="ENTER THE COMPETITION"
          buttonHref="/register"
        />
      </main>

      <Footer />
    </>
  );
}