
"use client";

import React from "react";
import { 
  BarChart3, 
  Database, 
  Network, 
  Globe, 
  FileText, 
  ArrowRightLeft, 
  Lock, 
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featureData = [
  {
    title: "Global Asset Tracking",
    description: "Track everything you own—across every market. Public markets, private equity, real estate, and alternatives.",
    icon: BarChart3,
    footer: "Measured with precision."
  },
  {
    title: "Entity & Ownership Modeling",
    description: "Model LLCs, corporations, trusts, and foundations. Map multi-layer ownership and beneficial visibility.",
    icon: Database,
    footer: "Manageable complexity."
  },
  {
    title: "Dynamic Ownership Graph",
    description: "Navigate your financial structure visually with an interactive node-based graph across jurisdictions.",
    icon: Network,
    footer: "Instantly understood."
  },
  {
    title: "Multi-Currency Intelligence",
    description: "Real-time FX conversion, currency exposure breakdowns, and historical impact tracking.",
    icon: Globe,
    footer: "Global friction removed."
  },
  {
    title: "Consolidated Financial Reporting",
    description: "One system. One source of truth. Real-time net worth dashboards and entity-level balance views.",
    icon: FileText,
    footer: "A continuous state."
  },
  {
    title: "Transaction & Flow Tracking",
    description: "Understand how capital moves with inter-entity transaction visibility and a full historical audit trail.",
    icon: ArrowRightLeft,
    footer: "Traceable and accountable."
  },
  {
    title: "Document & Structure Vault",
    description: "Trust deeds, incorporation documents, and contracts linked directly to your entities and assets.",
    icon: Lock,
    footer: "Reality connected."
  },
  {
    title: "Risk & Exposure Insights",
    description: "Geographic exposure analysis and asset concentration risk mapping with early warning indicators.",
    icon: ShieldAlert,
    footer: "Proactive visibility."
  }
];

export default function FeaturesPage() {
  return (
    <div className="bg-background min-h-screen text-off-white">
      {/* Hero Header */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-8">
            Precision Tools for <br/> <span className="gold-text italic">Complex Wealth</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Atlas Wealth OS is built for environments where simplicity breaks down. Every feature exists to handle real-world complexity—across assets, entities, and jurisdictions.
          </p>
          <div className="mt-12 flex justify-center">
             <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            {featureData.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative p-10 bg-brand-charcoal hover:bg-white/[0.02] transition-all duration-500 border-r border-b border-white/5"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/[0.01] transition-colors" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy border border-white/10 flex items-center justify-center mb-8 group-hover:border-brand-gold/50 transition-colors">
                    <feature.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-4 group-hover:text-brand-gold transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed line-clamp-3">
                    {feature.description}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold opacity-60">
                      {feature.footer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-brand-navy/30">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold">Feature Philosophy</h2>
            <h3 className="font-headline text-4xl md:text-5xl font-bold italic">Built for Real-World Complexity</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4 p-8 glass rounded-3xl border-white/5">
               <p className="text-lg text-muted-foreground italic">"Most tools simplify by removing detail. Atlas simplifies by structuring detail."</p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
               <div className="flex items-center gap-3 text-off-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>It does not hide complexity</span>
               </div>
               <div className="flex items-center gap-3 text-off-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>It organizes it</span>
               </div>
               <div className="flex items-center gap-3 text-off-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>It makes it usable</span>
               </div>
               <p className="pt-4 text-brand-gold font-bold">👉 That difference is everything.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary and CTA */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] font-bold text-muted-foreground mb-12">Every feature exists to answer one question</p>
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-16 italic">
            "What do I own, how is it structured, <br/> and what does it mean?"
          </h2>
          
          <Link href="/request-access">
            <Button size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-bold h-16 px-12 text-lg">
              Explore the System <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
