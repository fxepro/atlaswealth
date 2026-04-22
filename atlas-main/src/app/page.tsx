
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { WealthInsightTool } from "@/components/WealthInsightTool";
import { FeatureSection } from "@/components/FeatureSection";
import { TrustSection } from "@/components/TrustSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="bg-brand-canvas selection:bg-brand-sky/20">
      <Hero />
      
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full flex justify-center mb-16">
             <WealthInsightTool />
          </div>
        </div>
      </section>

      <ProblemSection />
      
      <FeatureSection />
      
      <TrustSection />
      
      <CTASection />
    </div>
  );
}
