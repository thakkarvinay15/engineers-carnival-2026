import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Engineer's Carnival 2026 | Parul Institute of Technology",

  description:
    "Engineer's Carnival 2026 is a student-led engineering carnival at Parul Institute of Technology, bringing together technology, creativity, innovation, and competition through a diverse range of events.",

  keywords: [
    "Engineer's Carnival 2026",
    "Engineers Carnival 2026",
    "Parul Institute of Technology",
    "PIT",
    "Parul University",
    "Engineering Carnival",
    "Technical Events",
    "Student Competitions",
    "Robo Fight",
    "Esports",
    "CodeCraft",
    "The Explorer Club",
  ],

  authors: [
    { name: "The Explorer Club" },
    { name: "Vinay Rajesh Thakkar" },
  ],

  creator: "The Explorer Club",
  publisher: "The Explorer Club",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Engineer's Carnival 2026 | Parul Institute of Technology",
    description:
      "Technology, creativity, innovation, and competition come together at Engineer's Carnival 2026, organised by The Explorer Club at Parul Institute of Technology.",
    type: "website",
    siteName: "Engineer's Carnival 2026",
  },

  twitter: {
    card: "summary_large_image",
    title: "Engineer's Carnival 2026 | PIT",
    description:
      "A student-led engineering carnival bringing together technology, creativity, innovation, and competition.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050814",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${ibmPlexMono.variable} h-full antialiased dark`}
    >
      <body className="tech-noise min-h-full font-body bg-[#050814] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}