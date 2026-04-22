
"use client";

import React from "react";
import { Eye, Network, Globe, Zap } from "lucide-react";

const features = [
  {
    title: "Track Everything",
    description: "Public, private, real estate, crypto, and global bank accounts unified in a single, secure vault.",
    icon: Eye,
  },
  {
    title: "Model Ownership",
    description: "Visualize exactly how your assets flow through entities, trusts, and jurisdictions with our dynamic graph tool.",
    icon: Network,
  },
  {
    title: "Think Globally",
    description: "Real-time multi-currency and multi-country visibility, accounting for global inflation and regional shifts.",
    icon: Globe,
  },
  {
    title: "Act with Clarity",
    description: "Generate boardroom-ready reports and receive AI-assisted structural insights for complex decisions.",
    icon: Zap,
  },
];

export function FeatureSection() {
  return (
    <section id="features" className="py-32 bg-brand-navy/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">Core Capabilities</h2>
            <h3 className="font-headline text-4xl md:text-5xl font-bold mb-8 leading-tight">A System of Record for Global Wealth</h3>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              We provide the underlying infrastructure for modern families to operate with the same precision as a sovereign wealth fund.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h4 className="text-lg font-bold">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-gold/5 blur-[100px] rounded-full" />
            <div className="relative p-1 glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="p-8 bg-brand-charcoal/80">
                 <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-50">Entity Structure: The Apollo Trust</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-brand-teal/20 text-brand-teal border border-brand-teal/30">Active</span>
                 </div>
                 
                 {/* Entity Graph Mock */}
                 <div className="relative h-80 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-2 border-brand-gold bg-brand-navy flex items-center justify-center z-10 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                      <span className="font-headline text-brand-gold font-bold">Trust</span>
                    </div>
                    
                    {/* SVG Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                      <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                      <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="white" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
                    </svg>
                    
                    <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-lg glass border border-white/10 flex items-center justify-center animate-float">
                      <span className="text-[10px] text-center font-bold px-1">Holdings Co</span>
                    </div>
                    <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-lg glass border border-white/10 flex items-center justify-center animate-float [animation-delay:1s]">
                      <span className="text-[10px] text-center font-bold px-1">Global LLC</span>
                    </div>
                    <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-16 h-16 rounded-lg glass border border-white/10 flex items-center justify-center animate-float [animation-delay:2s]">
                      <span className="text-[10px] text-center font-bold px-1">Properties</span>
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
                    <div className="text-center">
                      <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Jurisdictions</p>
                      <p className="font-headline font-bold">12</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Currencies</p>
                      <p className="font-headline font-bold">6</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Compliance</p>
                      <p className="font-headline font-bold text-brand-teal">Passed</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
