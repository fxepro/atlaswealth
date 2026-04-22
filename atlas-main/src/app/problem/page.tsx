
"use client";

import React from "react";
import { Globe, Network, Scale, FileSpreadsheet, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const problemBlocks = [
  {
    id: 1,
    title: "Fragmentation Across Borders",
    icon: Globe,
    description: "Your assets don’t live in one place.",
    bullets: ["Multiple countries", "Multiple currencies", "Multiple institutions"],
    footer: "No single system shows the full picture.",
  },
  {
    id: 2,
    title: "Ownership is Invisible",
    icon: Network,
    description: "What you own is only half the story. How you own it is what matters.",
    bullets: ["LLCs, trusts, holding companies", "Layered ownership structures", "Cross-border entities"],
    footer: "Today, there is no intuitive way to see or understand this.",
  },
  {
    id: 3,
    title: "Tax Complexity Without Clarity",
    icon: Scale,
    description: "Every decision has consequences: where you sell, where you hold, which entity owns the asset.",
    bullets: ["Don’t model tax impact", "Don’t simulate outcomes", "Don’t guide decisions"],
    footer: "You operate blind.",
  },
  {
    id: 4,
    title: "Spreadsheets Are the Default",
    icon: FileSpreadsheet,
    description: "Even at the highest levels, the system of record is still fragmented.",
    bullets: ["Wealth is tracked manually", "Reports are stitched together", "Advisors work in silos"],
    footer: "The default is 👉 Excel, email, and memory.",
  },
];

export default function ProblemPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Narrative */}
      <section className="pt-20 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-12">
            Wealth Was Never Designed to <span className="gold-text italic">Be Simple</span>
          </h1>
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-headline leading-tight text-off-white">
              You don’t lose control of wealth because you lack intelligence. <br/>
              <span className="text-brand-gold">You lose control because the system was never built for clarity.</span>
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Modern wealth lives everywhere — across countries, entities, accounts, and asset classes. 
              But the tools to manage it are fragmented, outdated, and fundamentally incomplete.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Grid */}
      <section className="py-20 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none opacity-20" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
          {problemBlocks.map((block) => (
            <div 
              key={block.id} 
              className="group relative p-10 md:p-16 bg-brand-charcoal hover:bg-white/[0.02] transition-all duration-500"
            >
              {/* Subtle gold glow on hover */}
              <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/[0.02] transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-navy border border-white/10 flex items-center justify-center mb-8 group-hover:border-brand-gold/50 transition-colors">
                  <block.icon className="w-6 h-6 text-brand-gold" />
                </div>
                
                <h3 className="font-headline text-3xl font-bold mb-6 text-off-white group-hover:text-brand-gold transition-colors">
                  {block.title}
                </h3>
                
                <p className="text-lg text-off-white/80 mb-8 leading-relaxed">
                  {block.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {block.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8 border-t border-white/5">
                  <p className="text-sm font-medium text-brand-gold/80 italic">
                    {block.footer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold italic">
              "The problem isn’t access to information. It’s the absence of a system that makes it usable."
            </h2>
          </div>
          
          <div className="pt-12">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-bold">
              A fragmented system creates hidden risk. <br/>
              <span className="text-brand-gold">A unified system creates control.</span>
            </p>
          </div>

          <div className="flex justify-center pt-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}
