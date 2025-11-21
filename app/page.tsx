import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { Outcomes } from "@/components/Outcomes";
import { IdealFit } from "@/components/IdealFit";
import { WhyNeuhives } from "@/components/WhyNeuhives";
import { EngagementModel } from "@/components/EngagementModel";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Outcomes />
      <IdealFit />
      <WhyNeuhives />
      <EngagementModel />
      <FinalCTA />
      <Footer />
    </div>
  );
}
