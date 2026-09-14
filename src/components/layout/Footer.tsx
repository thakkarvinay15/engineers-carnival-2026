import Link from "next/link";
import Image from "next/image";

import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#03060f] text-slate-400">
      {/* Top accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="mb-5">
              <Link href="/" className="group inline-flex">
                <Image
                  src="/PUxEC-Logo.png"
                  alt="Parul University × The Explorer Club"
                  width={820}
                  height={90}
                  className="h-10 sm:h-11 md:h-12 w-auto max-w-[300px] object-contain transition-opacity duration-200 group-hover:opacity-90"
                />
              </Link>
            </div>

            <p className="font-body text-sm leading-relaxed text-slate-400">
              A student-led engineering carnival bringing together technology,
              creativity, innovation, and competition. Organised by{" "}
              <strong className="text-white">The Explorer Club</strong> at
              Parul Institute of Technology.
            </p>

            <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>PIT CAMPUS · 18 SEPTEMBER 2026</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
              {"// QUICK LINKS"}
            </p>

            <ul className="mt-4 space-y-2 font-mono text-xs uppercase tracking-[0.14em]">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white hover:text-glow-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/register"
                  className="font-bold text-amber-400 transition-colors hover:text-amber-300"
                >
                  Register Now →
                </Link>
              </li>
            </ul>
          </div>

          {/* Credits */}
          <div className="md:col-span-4 md:col-start-9">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
              {"// WEBSITE CREDITS"}
            </p>

            <div className="mt-4 space-y-3 border-l-2 border-amber-500/50 pl-4">
              <div>
                <p className="font-mono text-[10px] uppercase text-slate-500">
                  DESIGNED &amp; DEVELOPED BY
                </p>

                <p className="font-display text-sm font-bold text-white">
                  Vinay Rajesh Thakkar
                </p>

                <p className="font-mono text-[11px] text-slate-400">
                  Technical Lead · The Explorer Club
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase text-slate-500">
                  ORGANISER
                </p>

                <p className="font-mono text-xs text-slate-300">
                  THE EXPLORER CLUB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rule & Metadata */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:flex-row">
          <div className="flex items-center gap-3">
            <span>EC/2026/PIT</span>
            <span>•</span>
            <span>PARUL INSTITUTE OF TECHNOLOGY</span>
          </div>

          <div className="flex items-center gap-2">
            <span>THE EXPLORER CLUB · ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}