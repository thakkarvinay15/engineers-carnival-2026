"use client";

import React from "react";
import { motion } from "framer-motion";

export function TechGridOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Top ambient radial glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-b from-amber-500/15 via-cyan-500/10 to-transparent blur-3xl opacity-75" />
      
      {/* Animated subtle grid */}
      <motion.div
        className="absolute inset-0 tech-grid-major opacity-50"
        animate={{ backgroundPosition: ["0px 0px", "32px 32px"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Cyber edge beam lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </div>
  );
}

export function HudCorner({
  className = "",
  size = "md",
  color = "amber",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "amber" | "cyan";
}) {
  const sizeClass = size === "sm" ? "w-2.5 h-2.5" : size === "lg" ? "w-5 h-5" : "w-3.5 h-3.5";
  const borderCol = color === "cyan" ? "border-cyan-400" : "border-amber-400";

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <span className={`absolute top-0 left-0 ${sizeClass} border-t-2 border-l-2 ${borderCol}`} />
      <span className={`absolute top-0 right-0 ${sizeClass} border-t-2 border-r-2 ${borderCol}`} />
      <span className={`absolute bottom-0 left-0 ${sizeClass} border-b-2 border-l-2 ${borderCol}`} />
      <span className={`absolute bottom-0 right-0 ${sizeClass} border-b-2 border-r-2 ${borderCol}`} />
    </div>
  );
}

export function StatusBeacon({
  label = "SYSTEMS NOMINAL",
  variant = "emerald",
}: {
  label?: string;
  variant?: "emerald" | "amber" | "cyan" | "rose";
}) {
  const colors = {
    emerald: {
      dot: "bg-emerald-400",
      ping: "bg-emerald-400",
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-950/40",
    },
    amber: {
      dot: "bg-amber-400",
      ping: "bg-amber-400",
      text: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-950/40",
    },
    cyan: {
      dot: "bg-cyan-400",
      ping: "bg-cyan-400",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-950/40",
    },
    rose: {
      dot: "bg-rose-400",
      ping: "bg-rose-400",
      text: "text-rose-400",
      border: "border-rose-500/30",
      bg: "bg-rose-950/40",
    },
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border ${colors.border} ${colors.bg} px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${colors.text} shadow-sm backdrop-blur-md`}
    >
      <span className="relative flex h-2 w-2">
        <span className={`absolute inline-flex h-full w-full animate-ping-slow rounded-full opacity-75 ${colors.ping}`} />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${colors.dot}`} />
      </span>
      {label}
    </span>
  );
}

export function TelemetryBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 border border-white/10 bg-slate-900/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 backdrop-blur-md ${className}`}
    >
      <span className="text-amber-400">❖</span>
      {children}
    </div>
  );
}

export function AnnotationLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-amber-400/90 ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-amber-400" />
      {children}
    </span>
  );
}

export function BlueprintGridOverlay() {
  return <TechGridOverlay />;
}

export function HeroDiagramMarks() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Reticle top-left */}
      <circle cx="48" cy="48" r="4" fill="none" stroke="#00f0ff" strokeWidth="1" />
      <line x1="48" y1="28" x2="48" y2="68" stroke="#00f0ff" strokeWidth="0.75" strokeDasharray="2 2" />
      <line x1="28" y1="48" x2="68" y2="48" stroke="#00f0ff" strokeWidth="0.75" strokeDasharray="2 2" />

      {/* Dashed tech dimension line — top right */}
      <line
        x1="72%"
        y1="10%"
        x2="94%"
        y2="10%"
        stroke="#f59e0b"
        strokeWidth="0.75"
        strokeDasharray="4 4"
      />
      <circle cx="72%" cy="10%" r="2" fill="#f59e0b" />
      <circle cx="94%" cy="10%" r="2" fill="#f59e0b" />

      {/* Radar arc — bottom left */}
      <path
        d="M 6% 86% A 90 90 0 0 1 20% 70%"
        fill="none"
        stroke="#00f0ff"
        strokeWidth="1"
        strokeDasharray="4 3"
      />

      {/* Technical HUD Crosshair right */}
      <g transform="translate(88%, 60%)">
        <circle r="16" fill="none" stroke="#f59e0b" strokeWidth="0.75" strokeDasharray="3 3" />
        <circle r="6" fill="none" stroke="#00f0ff" strokeWidth="0.75" />
        <line x1="-22" y1="0" x2="22" y2="0" stroke="#f59e0b" strokeWidth="0.5" />
        <line x1="0" y1="-22" x2="0" y2="22" stroke="#f59e0b" strokeWidth="0.5" />
      </g>
    </svg>
  );
}
