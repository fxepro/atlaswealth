
"use client";

import React, { useState } from "react";
import { generateWealthInsight } from "@/ai/flows/generate-wealth-insight";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Loader2, Info } from "lucide-react";

export function WealthInsightTool() {
  const [concept, setConcept] = useState("");
  const [insight, setInsight] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!concept) return;
    
    setLoading(true);
    try {
      const result = await generateWealthInsight({ concept });
      setInsight(result.snippet);
    } catch (error) {
      console.error("Failed to generate insight:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 rounded-3xl glass border border-brand-gold/20 max-w-xl mx-auto w-full relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles className="w-12 h-12 text-brand-gold" />
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-brand-gold" />
        </div>
        <h3 className="text-lg font-bold">AI Intelligence Preview</h3>
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        Test our global intelligence engine. Enter a concept like <span className="text-brand-gold cursor-pointer" onClick={() => setConcept("International Trusts")}>"International Trusts"</span> or <span className="text-brand-gold cursor-pointer" onClick={() => setConcept("Diversified Portfolio")}>"Family Office Structure"</span>.
      </p>

      <form onSubmit={handleGenerate} className="space-y-4">
        <div className="flex gap-2">
          <Input 
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            placeholder="e.g. Sovereign Wealth"
            className="bg-white/5 border-white/10 text-off-white placeholder:text-muted-foreground"
          />
          <Button 
            disabled={loading || !concept} 
            className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-bold"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Insight"}
          </Button>
        </div>
      </form>

      {insight && (
        <div className="mt-6 p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/20 animate-in fade-in slide-in-from-top-2">
          <p className="text-sm italic leading-relaxed text-off-white">"{insight}"</p>
          <div className="flex items-center gap-1 mt-3 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            <Info className="w-3 h-3" /> informational only • no financial advice
          </div>
        </div>
      )}
    </div>
  );
}
