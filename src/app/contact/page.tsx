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
  title: "Contact | Engineer's Carnival 2026",
  description:
    "Get in touch with The Explorer Club for Engineer's Carnival 2026 registrations, event queries, and other assistance.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#050814] text-slate-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <TechGridOverlay />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <TelemetryBadge>CONTACT // EC-2026</TelemetryBadge>
              <StatusBeacon label="WE'RE HERE TO HELP" variant="emerald" />
            </div>

            <h1 className="max-w-4xl font-display text-[clamp(2.75rem,8vw,6rem)] font-black uppercase leading-[0.88] tracking-tight text-white">
              LET&apos;S{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent text-glow-gold">
                CONNECT.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-slate-300 md:text-lg">
              Have a question about Engineer&apos;s Carnival 2026? Reach out
              to The Explorer Club for registration assistance, competition
              queries, or general event information.
            </p>
          </div>
        </section>

        {/* Contact Channels */}
        <section className="relative border-y border-white/10 bg-[#070d1d] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
                {"// GET IN TOUCH"}
              </span>

              <h2 className="mt-3 font-display text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                CONTACT THE TEAM
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/9175890828"
                target="_blank"
                rel="noreferrer"
                className="hud-box group relative flex flex-col justify-between border border-emerald-500/30 bg-emerald-950/15 p-8 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)]"
              >
                <HudCorner color="cyan" size="sm" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      {"// QUICK SUPPORT"}
                    </span>

                    <span className="font-mono text-[10px] text-slate-400">
                      WHATSAPP
                    </span>
                  </div>

                  <h2 className="mt-6 font-display text-2xl font-black text-white transition-colors group-hover:text-emerald-300 sm:text-3xl">
                    +91 91758 90828
                  </h2>

                  <p className="mt-3 font-body text-sm leading-relaxed text-slate-300">
                    For quick questions about registrations, competitions,
                    schedules, and other event-related assistance.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-emerald-400">
                  <span>CHAT WITH US</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:explorerclub@paruluniversity.ac.in"
                className="hud-box group relative flex flex-col justify-between border border-amber-500/30 bg-amber-950/15 p-8 backdrop-blur-xl transition-all duration-300 hover:border-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.15)]"
              >
                <HudCorner color="amber" size="sm" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-xs font-bold text-amber-400">
                      {"// OFFICIAL CONTACT"}
                    </span>

                    <span className="font-mono text-[10px] text-slate-400">
                      EMAIL
                    </span>
                  </div>

                  <h2 className="mt-6 break-all font-display text-xl font-black text-white transition-colors group-hover:text-amber-300 sm:text-2xl lg:text-3xl">
                    explorerclub@paruluniversity.ac.in
                  </h2>

                  <p className="mt-3 font-body text-sm leading-relaxed text-slate-300">
                    For general inquiries, event coordination, collaborations,
                    and official communication with The Explorer Club.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-amber-400">
                  <span>SEND EMAIL</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            </div>

            {/* Physical Location */}
            <div className="mt-8">
              <div className="border border-white/10 bg-[#081022]/80 p-6 backdrop-blur-md md:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                      {"// EVENT VENUE"}
                    </span>

                    <p className="mt-2 font-display text-lg font-bold text-white">
                      Parul Institute of Technology (PIT)
                    </p>

                    <p className="mt-1 font-body text-sm text-slate-300">
                      Parul University, P.O. Limda, Waghodia, Vadodara,
                      Gujarat 391760, India
                    </p>
                  </div>

                  <div className="shrink-0">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      EVENT DATE
                    </span>

                    <p className="mt-1 font-mono text-sm font-bold text-amber-400">
                      18 SEPTEMBER 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCTA
          buttonText="EXPLORE ALL ARENAS"
          buttonHref="/competitions"
        />
      </main>

      <Footer />
    </>
  );
}
