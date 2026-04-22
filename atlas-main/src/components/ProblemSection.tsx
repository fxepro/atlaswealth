
"use client";

import React from "react";
import { Globe2, Layers, ShieldAlert, FileSpreadsheet } from "lucide-react";

const problems = [
  {
    title: "Fragmented Visibility",
    description: "Assets scattered across global custodians, banks, and private registries with no unified view.",
    icon: Globe2,
  },
  {
    title: "Structural Complexity",
    description: "Multi-layered entity structures (Trusts, SPVs, LLCs) that are difficult to visualize and manage.",
    icon: Layers,
  },
  {
    title: "Compliance Blindspots",
    description: "Ever-changing international tax laws and reporting requirements create hidden risks.",
    icon: ShieldAlert,
  },
  {
    title: "Spreadsheet Decay",
    description: "Relying on manual spreadsheets that are outdated the moment they are saved.",
    icon: FileSpreadsheet,
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-brand-charcoal relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">The Challenge</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6">Wealth is Fragmented</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Traditional tools aren't built for the global complexity of high-net-worth ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-gold/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-midnight flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                <problem.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <h4 className="text-xl font-bold mb-3">{problem.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
