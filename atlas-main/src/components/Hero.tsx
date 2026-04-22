
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, BarChart3, Fingerprint } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brand-midnight/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Globe className="w-3 h-3" />
          The Global OS for Family Wealth
        </div>

        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Everything You Own. Everywhere in the World. <span className="gold-text">In One System.</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
          Atlas Wealth OS is your personal family office — track assets, structure ownership, and optimize globally with institutional-grade clarity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
          <Button size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 px-8 py-7 text-lg font-bold min-w-[220px]">
            Request Early Access
          </Button>
          <Button size="lg" variant="outline" className="border-border bg-white/5 hover:bg-white/10 px-8 py-7 text-lg min-w-[220px]">
            See How It Works
          </Button>
        </div>

        {/* Dashboard Mockup Component */}
        <div className="relative max-w-6xl mx-auto animate-in zoom-in-95 fade-in duration-1000 delay-500">
          <div className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            <div className="bg-brand-navy/60 border-b border-white/5 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="h-4 w-32 bg-white/10 rounded" />
              </div>
              <div className="flex gap-4">
                <div className="h-6 w-6 bg-white/10 rounded-full" />
                <div className="h-6 w-24 bg-white/10 rounded" />
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-px bg-white/5">
              <div className="col-span-12 lg:col-span-8 bg-brand-charcoal/40 p-8">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h3 className="text-muted-foreground text-sm uppercase tracking-widest mb-1">Total Net Worth</h3>
                    <p className="text-4xl md:text-5xl font-headline font-bold">$142,580,210.00</p>
                  </div>
                  <div className="text-right">
                    <span className="text-brand-teal text-sm font-medium flex items-center gap-1">
                      +4.2% <ArrowRight className="w-3 h-3 -rotate-45" />
                    </span>
                    <p className="text-xs text-muted-foreground">vs Last Quarter</p>
                  </div>
                </div>

                <div className="h-64 relative">
                  {/* Mock Chart */}
                  <div className="absolute inset-0 flex items-end justify-between gap-1">
                    {[40, 45, 38, 55, 62, 58, 75, 82, 80, 85, 92, 100].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-brand-gold/20 hover:bg-brand-gold/40 transition-colors rounded-t-sm" 
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
                    <div className="w-full border-t border-white/5" />
                    <div className="w-full border-t border-white/5" />
                    <div className="w-full border-t border-white/5" />
                    <div className="w-full border-t border-white/5" />
                  </div>
                </div>
              </div>
              
              <div className="col-span-12 lg:col-span-4 bg-brand-midnight/20 p-8">
                <h3 className="text-muted-foreground text-sm uppercase tracking-widest mb-6">Asset Distribution</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Equities (Global)</span>
                      <span className="font-semibold">42%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-gold w-[42%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Real Estate (Lux/NYC)</span>
                      <span className="font-semibold">28%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-teal w-[28%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Private Equity</span>
                      <span className="font-semibold">15%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-white/20 w-[15%]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Commodities & Cash</span>
                      <span className="font-semibold">15%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-white/10 w-[15%]" />
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-4 rounded-lg bg-brand-navy border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <Fingerprint className="text-brand-gold w-5 h-5" />
                    <span className="text-sm font-medium">Compliance Check</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">All KYC/AML profiles for Entity "Apollo Trust" are current.</p>
                  <div className="w-full h-1 bg-brand-teal rounded-full" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Accents */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-brand-teal/10 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>
      </div>
    </section>
  );
}
