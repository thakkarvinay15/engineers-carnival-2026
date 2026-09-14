"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TechGridOverlay,
  HeroDiagramMarks,
  HudCorner,
  StatusBeacon,
  TelemetryBadge,
} from "@/components/ui/TechDecorations";

const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: easeOut },
  }),
};

const emptySubscribe = () => () => {};

function CountdownTimer() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: September 18, 2026, 09:30:00 IST
    const target = new Date("2026-09-18T09:30:00+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-3">
        {["DAYS", "HRS", "MIN", "SEC"].map((label) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center border border-white/10 bg-slate-900/60 px-3.5 py-2 min-w-[62px]"
          >
            <span className="font-mono text-xl font-black text-amber-400">--</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const units = [
    { label: "DAYS", val: timeLeft.days },
    { label: "HRS", val: timeLeft.hours },
    { label: "MIN", val: timeLeft.minutes },
    { label: "SEC", val: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="hud-box relative flex min-w-[58px] flex-col items-center justify-center border border-white/10 bg-slate-950/70 px-3 py-2 backdrop-blur-md sm:min-w-[68px] sm:py-2.5"
        >
          <span className="font-mono text-xl font-black tracking-tight text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)] sm:text-2xl">
            {String(unit.val).padStart(2, "0")}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] overflow-hidden bg-[#050814] pt-8 pb-20 lg:pt-16 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <TechGridOverlay />
      <HeroDiagramMarks />

      {/* Radiant Floating Glow Orbs */}
      <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top Telemetry & Status Bar */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <StatusBeacon label="EVENT DAY · 18 SEPT 2026" variant="amber" />
          <TelemetryBadge>PARUL INSTITUTE OF TECHNOLOGY</TelemetryBadge>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 md:inline-block">
            {"//"} ORGANISED BY THE EXPLORER CLUB
          </span>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Main Typography Column */}
          <div className="lg:col-span-8">
            <motion.h1
              id="hero-heading"
              className="font-display leading-[0.84] tracking-tight"
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span className="block text-[clamp(2.75rem,9.5vw,7.8rem)] font-black uppercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                Engineer&apos;s
              </span>
              <span className="relative block text-[clamp(2.75rem,9.5vw,7.8rem)] font-black uppercase bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent text-glow-gold">
                Carnival
                <span className="ml-2 font-mono text-[clamp(1.2rem,3.5vw,2.8rem)] font-extrabold text-cyan-400 drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">
                  &apos;26
                </span>
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl font-body text-base leading-relaxed text-slate-300 md:text-xl md:leading-relaxed"
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              One Day. Eight Competitions. Choose your challenge - robotics, esports, coding, and more.
            </motion.p>

            {/* Countdown Box */}
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                EVENT STARTS IN:
              </div>
              <CountdownTimer />
            </motion.div>
          </div>

          {/* Right Action & Dossier Panel */}
          <div className="lg:col-span-4 lg:pb-2">
            <motion.div
              className="relative border border-white/10 bg-[#0a1226]/80 p-6 backdrop-blur-xl md:p-8"
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <HudCorner color="amber" size="md" />

              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
                  {"//"} EVENT DETAILS
                </span>
                <span className="font-mono text-[10px] text-slate-400">PIT-EC26</span>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">DATE</span>
                  <span className="font-bold text-white">18 SEPTEMBER 2026</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">VENUE</span>
                  <span className="font-bold text-white">PIT CAMPUS</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">REPORTING</span>
                  <span className="font-bold text-amber-400">09:30 AM SHARP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ELIGIBILITY</span>
                  <span className="font-bold text-emerald-400">ONLY PIT STUDENTS</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="#competitions"
                  className="cyber-btn group flex items-center justify-center gap-2.5 border border-amber-400/80 bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-center font-mono text-xs font-bold uppercase tracking-[0.16em] text-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:brightness-110"
                >
                  <span>EXPLORE 08 COMPETITIONS</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    ↓
                  </span>
                </a>

                <Link
                  href="/schedule"
                  className="group flex items-center justify-center gap-2 border border-white/15 bg-white/5 px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-slate-200 backdrop-blur-md transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-white"
                >
                  <span>VIEW SCHEDULE</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Metric Badges */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4 md:gap-4 lg:mt-20"
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {[
            { metric: "08", label: "Competitions", sub: "Traitors, Esports & Many More" },
            { metric: "01", label: "One Full Day", sub: "9:30 AM to 5:00 PM" },
            { metric: "1000+", label: "Participants", sub: "Across PIT Campus" },
            { metric: "🏆", label: "Trophies & Recognition", sub: "Awards & Recognition" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative border border-white/5 bg-slate-900/40 p-4 backdrop-blur-md transition-all duration-300 hover:border-amber-500/30 hover:bg-slate-900/70"
            >
              <div className="font-display text-2xl font-black text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] md:text-3xl">
                {item.metric}
              </div>
              <div className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-white">
                {item.label}
              </div>
              <div className="mt-0.5 font-mono text-[10px] text-slate-400">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
