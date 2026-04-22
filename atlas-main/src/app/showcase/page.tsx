
import { WealthInsightTool } from "@/components/WealthInsightTool";

export default function ShowcasePage() {
  return (
    <div className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-8">Visual Control Plane</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the interface that power high-net-worth decisions. Interactive, secure, and infinitely clear.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="p-8 glass rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-brand-gold">Multi-Currency Engine</h3>
              <p className="text-muted-foreground leading-relaxed">View your net worth in any major currency, with real-time exchange rates and historical performance tracking across borders.</p>
            </div>
            <div className="p-8 glass rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-brand-gold">Entity Graphing</h3>
              <p className="text-muted-foreground leading-relaxed">Dynamic visualization of trusts, holding companies, and special purpose vehicles. Identify bottlenecks and compliance risks at a glance.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <WealthInsightTool />
          </div>
        </div>
      </div>
    </div>
  );
}
