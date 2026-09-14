import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { TechGridOverlay, HudCorner, TelemetryBadge, StatusBeacon } from "@/components/ui/TechDecorations";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About | Engineer's Carnival 2026",
  description: "About Engineer's Carnival 2026 and The Explorer Club at Parul University.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#050814] text-slate-100">
        <section className="relative overflow-hidden py-20 lg:py-28">
          <TechGridOverlay />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <TelemetryBadge>MANIFESTO // EC-2026</TelemetryBadge>
              <StatusBeacon label="THE EXPLORER CLUB" variant="amber" />
            </div>

            <h1 className="max-w-5xl font-display text-[clamp(2.75rem,8vw,6.5rem)] font-black uppercase leading-[0.88] tracking-tight text-white">
              BUILT TO{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent text-glow-gold">
                MAKE.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-slate-300 md:text-xl">
              Engineer&apos;s Carnival &apos;26 is the signature one-day engineering festival organised by The Explorer Club at Parul Institute of Technology, Parul University.
            </p>
          </div>
        </section>

        {/* Manifesto Content */}
        <section className="relative border-y border-white/10 bg-[#070d1d] py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <p className="font-display text-2xl font-bold uppercase leading-relaxed text-white sm:text-3xl lg:text-4xl">
              Eight competitions. One stage. Zero filler — engineered for students who&apos;d rather build, code, and compete than sit on the sidelines.
            </p>

            <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
              <div className="hud-box border border-white/10 bg-[#091226]/80 p-6 backdrop-blur-xl">
                <HudCorner color="amber" size="sm" />
                <span className="font-mono text-xs font-bold text-amber-400">
                  {"// THE VISION"}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold uppercase text-white">
                  Where Engineering Comes To Life
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-300">
                A celebration of engineering, innovation, and creativity—bringing students together to compete, build, experiment, and showcase what they can create..
                </p>
              </div>

              <div className="hud-box border border-white/10 bg-[#091226]/80 p-6 backdrop-blur-xl">
                <HudCorner color="cyan" size="sm" />
                <span className="font-mono text-xs font-bold text-cyan-400">
                  {"// THE EXPLORER CLUB"}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold uppercase text-white">
                  Student-Led Innovation
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-300">
                The Explorer Club is a student-led community at Parul Institute of Technology, bringing together technology, creativity, innovation, and leadership through events, hackathons, workshops, and student initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA buttonText="JOIN THE CARNIVAL" buttonHref="/register" />
      </main>
      <Footer />
    </>
  );
}
