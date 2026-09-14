"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/85 backdrop-blur-xl transition-all duration-300">
      {/* Top micro-line accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center">
          <Image
            src="/PUxEC-Logo.png"
            alt="Parul University × The Explorer Club"
            width={820}
            height={90}
            priority
            className="h-7 w-auto max-w-[190px] object-contain transition-opacity duration-200 group-hover:opacity-90 sm:h-8 sm:max-w-none md:h-9"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.14em] transition-all duration-200 ${
                    isActive
                      ? "font-semibold text-amber-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/register"
            className="cyber-btn hidden items-center gap-2 border border-amber-400/60 bg-gradient-to-r from-amber-500/20 to-amber-600/30 px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:border-amber-400 hover:text-white hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] sm:inline-flex"
          >
            <span>REGISTER</span>
            <span className="font-sans text-xs">→</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/10 bg-slate-900/60 text-white lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-5 bg-amber-400 transition-transform duration-300 ${
                menuOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-slate-300 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-cyan-400 transition-transform duration-300 ${
                menuOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[#070d1d]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="border-b border-white/5 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              MENU // ENGINEER&apos;S CARNIVAL 2026
            </div>

            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href;

                return (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between border-b border-white/5 py-3 font-mono text-sm uppercase tracking-[0.14em] transition-colors ${
                        isActive
                          ? "font-semibold text-amber-400"
                          : "text-slate-300 hover:text-white"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-xs text-slate-600">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}

              <li className="pb-2 pt-5">
                <Link
                  href="/register"
                  className="cyber-btn flex w-full items-center justify-center gap-2 border border-amber-400/50 bg-amber-500/20 py-3.5 text-center font-mono text-xs font-bold uppercase tracking-[0.16em] text-amber-300"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>REGISTER NOW</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}