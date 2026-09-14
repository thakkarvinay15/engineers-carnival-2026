import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { EventStrip } from "@/components/home/EventStrip";
import { CompetitionTeaser } from "@/components/home/CompetitionTeaser";
import { FestivalHighlights } from "@/components/home/FestivalHighlights";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <EventStrip />
        <CompetitionTeaser />
        <FestivalHighlights />
        <FinalCTA buttonText="CLAIM YOUR SPOT" buttonHref="/register" />
      </main>
      <Footer />
    </>
  );
}
