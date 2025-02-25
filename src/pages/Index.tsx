
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Itinerary } from "@/components/Itinerary";
import { Gallery } from "@/components/Gallery";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <Itinerary />
      <Gallery />
      <Pricing />
    </main>
  );
};

export default Index;
