import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { TechGridOverlay, HudCorner, TelemetryBadge, StatusBeacon } from "@/components/ui/TechDecorations";
import { COMPETITION_DETAILS } from "@/lib/competitionDetails";
import {
  COMPETITIONS,
  getCompetitionBySlug,
  getRegistrationLinks,
} from "@/lib/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return COMPETITIONS.map((comp) => ({ slug: comp.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const competition = getCompetitionBySlug(slug);

  if (!competition) return { title: "Competition Not Found" };

  return {
    title: `${competition.name} | Engineer's Carnival 2026`,
    description: `${competition.name} — Engineer's Carnival 2026 at Parul University.`,
  };
}

export default async function CompetitionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const competition = getCompetitionBySlug(slug);

  if (!competition) notFound();

  const registrationLinks = getRegistrationLinks(competition.slug);
  const details = COMPETITION_DETAILS[competition.slug];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#050814] text-slate-100">
        {/* Mission Dossier Hero */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <TechGridOverlay />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            {/* Breadcrumb & Telemetry */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Link
                href="/competitions"
                className="font-mono text-xs text-amber-400 hover:text-white transition-colors"
              >
                ← ARENAS
              </Link>
              <span className="font-mono text-xs text-slate-500">/</span>
              <TelemetryBadge>DOSSIER // {competition.number}</TelemetryBadge>
              {competition.tag ? (
                <StatusBeacon label={competition.tag} variant="rose" />
              ) : (
                <StatusBeacon label="REGISTRATION OPEN" variant="emerald" />
              )}
            </div>

            {/* Title */}
            <h1 className="max-w-5xl font-display text-[clamp(2.75rem,8vw,6.5rem)] font-black uppercase leading-[0.88] tracking-tight text-white">
              {competition.name}
            </h1>

            {/* Subtitle / Intro */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="border border-white/10 bg-slate-900/60 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                {details?.intro ?? "Engineer's Carnival 2026 Arena"}
              </span>
              <span className="border border-white/10 bg-slate-900/60 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-slate-400 backdrop-blur-md">
                PIT Campus · 18 Sept 2026
              </span>
            </div>

            {/* Registration CTA Bar */}
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
              {registrationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-btn group inline-flex items-center gap-3 border border-amber-400/80 bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all hover:brightness-110"
                >
                  <span>{link.label}</span>
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Briefing Blocks */}
        {details && (
          <section className="relative border-y border-white/10 bg-[#070d1d] py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
                  {"// RULES, CRITERIA & OPERATIONAL SPECS"}
                </span>
                <span className="font-mono text-[10px] uppercase text-slate-500">
                  CONFIDENTIAL DOSSIER
                </span>
              </div>

              <div className="space-y-6">
                {details.blocks.map((block, index) => (
                  <article
                    key={block.heading}
                    className="relative border border-white/10 bg-[#091226]/90 p-6 backdrop-blur-xl transition-all duration-200 hover:border-white/20 md:p-8"
                  >
                    <HudCorner color="amber" size="sm" />

                    <div className="grid gap-6 md:grid-cols-[240px_1fr]">
                      <div>
                        <span className="font-mono text-xs font-bold text-amber-400">
                          {"// SECTION 0"}{index + 1}
                        </span>
                        <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-white">
                          {block.heading}
                        </h2>
                      </div>

                      <div className="max-w-3xl">
                        {block.paragraphs?.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="mb-4 font-body text-sm leading-relaxed text-slate-300 md:text-base"
                          >
                            {paragraph}
                          </p>
                        ))}

                        {block.items && (
                          <ul className="space-y-3">
                            {block.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3 font-body text-sm leading-relaxed text-slate-300 md:text-base"
                              >
                                <span
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                                  aria-hidden="true"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Next Steps / Back to Arenas */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
                {"// READY TO ENTER?"}
              </span>
              <p className="mt-2 font-body text-base text-slate-300">
                Official registration is processed via Google Forms. Secure your slot early.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/competitions"
                className="group inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all hover:border-amber-400 hover:bg-amber-500/10"
              >
                <span className="transition-transform group-hover:-translate-x-1" aria-hidden="true">
                  ←
                </span>
                <span>ALL ARENAS</span>
              </Link>

              {registrationLinks.length > 0 && (
                <a
                  href={registrationLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-btn inline-flex items-center gap-2 border border-amber-400/80 bg-amber-500/20 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-amber-300 hover:border-amber-400 hover:bg-amber-500/30"
                >
                  <span>OFFICIAL FORM</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
