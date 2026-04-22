
"use client";

import React from "react";
import { 
  Database, 
  Network, 
  Globe, 
  FilePieChart, 
  ArrowRight, 
  XCircle, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pillars = [
  {
    title: "Unified Asset Registry",
    subtitle: "Everything you own. Without exception.",
    description: "Atlas creates a single, continuously updated registry of financial accounts, private equity, real estate, and digital holdings.",
    points: ["Valued in real-time", "Classified by type", "Mapped to jurisdiction"],
    icon: Database,
    footer: "👉 You no longer “search” for information. You see your entire financial reality instantly."
  },
  {
    title: "Ownership Graph",
    subtitle: "Not just what you own — how you own it.",
    description: "Atlas models the true structure of your wealth, from individuals to complex LLCs, trusts, and cross-border entities.",
    points: ["Visual flow of capital", "Entity-to-entity connections", "Navigable control structures"],
    icon: Network,
    footer: "👉 What was previously buried in legal documents becomes clear, visual, and navigable."
  },
  {
    title: "Global Intelligence Layer",
    subtitle: "Your wealth, understood in context.",
    description: "Atlas adds intelligence across jurisdictions, answering where your wealth is concentrated and how geography affects your risk.",
    points: ["Multi-currency normalization", "Jurisdiction-aware insights", "Tax modeling signals"],
    icon: Globe,
    footer: "👉 Data becomes context. Context becomes clarity."
  },
  {
    title: "Consolidated Reporting Engine",
    subtitle: "From scattered data to structured insight.",
    description: "Transform complexity into usable outputs like global net worth, entity-level views, and historical performance tracking.",
    points: ["Real-time global net worth", "Geographical class allocation", "Audit-ready consistency"],
    icon: FilePieChart,
    footer: "👉 No more stitching together reports. You operate from a single source of truth."
  }
];

export default function SolutionPage() {
  return (
    <div className="bg-background min-h-screen text-off-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none opacity-30" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            A System of Record <br/> <span className="gold-text italic text-4xl md:text-6xl">for Your Wealth</span>
          </h1>
          <p className="text-2xl md:text-3xl font-headline leading-tight mb-8 text-off-white/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Atlas Wealth OS is not another finance app. It is a unified system that brings structure, visibility, and intelligence to everything you own.
          </p>
          <p className="text-xl text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            For the first time, your wealth is not scattered across platforms, advisors, and jurisdictions. It exists in one place — modeled, connected, and understandable.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-8 border-t border-white/5 animate-in fade-in duration-1000 delay-300">
             <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">From</p>
                <p className="text-lg font-bold">Fragmented Accounts</p>
             </div>
             <ArrowRight className="text-brand-gold hidden md:block" />
             <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-brand-gold mb-2">To</p>
                <p className="text-lg font-bold">Structured System</p>
             </div>
             <div className="w-px h-8 bg-white/10 hidden md:block" />
             <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">From</p>
                <p className="text-lg font-bold">Static Data</p>
             </div>
             <ArrowRight className="text-brand-gold hidden md:block" />
             <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-brand-gold mb-2">To</p>
                <p className="text-lg font-bold">Living Intelligence</p>
             </div>
          </div>
        </div>
      </section>

      {/* Solution Pillars */}
      <section className="py-24 px-6 border-y border-white/5 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto space-y-24">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className={idx % 2 === 0 ? "flex flex-col lg:flex-row gap-16 items-center" : "flex flex-col lg:flex-row-reverse gap-16 items-center"}
            >
              <div className="flex-1 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-navy border border-brand-gold/30 flex items-center justify-center mb-4">
                  <pillar.icon className="w-7 h-7 text-brand-gold" />
                </div>
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold">{pillar.subtitle}</h2>
                <h3 className="font-headline text-4xl font-bold">{pillar.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{pillar.description}</p>
                <ul className="space-y-3">
                  {pillar.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-3 text-off-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                   <p className="text-sm italic text-brand-gold/80 font-medium">{pillar.footer}</p>
                </div>
              </div>
              
              <div className="flex-1 w-full aspect-square md:aspect-video lg:aspect-square relative rounded-3xl overflow-hidden glass border border-white/10 p-1 bg-gradient-to-br from-brand-navy/40 to-brand-charcoal/40">
                <div className="absolute inset-0 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none" />
                <div className="h-full w-full flex items-center justify-center p-12">
                   {/* Abstract Visual Placeholder */}
                   {idx === 0 && <Database className="w-32 h-32 text-brand-gold/20 animate-pulse" />}
                   {idx === 1 && <Network className="w-32 h-32 text-brand-gold/20 animate-pulse" />}
                   {idx === 2 && <Globe className="w-32 h-32 text-brand-gold/20 animate-pulse" />}
                   {idx === 3 && <FilePieChart className="w-32 h-32 text-brand-gold/20 animate-pulse" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-32 px-6 bg-brand-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-20 text-center">The Atlas Transformation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Before */}
            <div className="p-12 md:p-16 bg-brand-charcoal/90 relative group">
              <div className="absolute top-8 right-8 text-brand-gold/10 font-headline text-8xl font-bold pointer-events-none">01</div>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <span className="opacity-50">Before Atlas</span>
              </h3>
              <ul className="space-y-6">
                {[
                  "Disconnected global accounts",
                  "Manual tracking in spreadsheets",
                  "Hidden, opaque ownership structures",
                  "Reactive, information-poor decisions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground">
                    <XCircle className="w-6 h-6 text-red-500/50 shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* With Atlas */}
            <div className="p-12 md:p-16 bg-brand-navy/90 relative group">
              <div className="absolute top-8 right-8 text-brand-gold/10 font-headline text-8xl font-bold pointer-events-none">02</div>
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <span className="text-brand-gold">With Atlas</span>
              </h3>
              <ul className="space-y-6">
                {[
                  "Unified, real-time visibility",
                  "Automated, structured ownership tracking",
                  "Intelligent jurisdiction-aware insights",
                  "Confident, proactive global decisions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-off-white">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0 mt-0.5" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Differentiation */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-12">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground mb-6">Strategic Differentiation</h3>
                  <h4 className="font-headline text-3xl font-bold mb-6">What Atlas Is Not</h4>
                  <div className="space-y-4">
                     {["Not a budgeting tool", "Not a trading platform", "Not another financial dashboard"].map((item, i) => (
                       <div key={i} className="flex items-center gap-3 text-muted-foreground line-through decoration-brand-gold/30">
                         <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                         {item}
                       </div>
                     ))}
                  </div>
                </div>
                
                <div className="p-8 glass rounded-2xl border-brand-gold/30 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4">
                    <ChevronRight className="w-8 h-8 text-brand-gold opacity-20 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-headline text-xl font-bold mb-2 text-brand-gold italic">What Atlas Is</h4>
                  <p className="text-2xl font-bold mb-6">A control plane for wealth.</p>
                  <p className="text-muted-foreground mb-8">A system that organizes, connects, interprets, and elevates decision-making for the world's most significant estates.</p>
                  <Link href="/request-access">
                    <Button variant="link" className="p-0 text-brand-gold font-bold uppercase tracking-widest text-xs h-auto">
                      Explore the Operating System <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
             </div>
             
             <div className="relative">
                <div className="absolute inset-0 bg-brand-gold/10 blur-[100px] rounded-full" />
                <div className="relative aspect-square glass rounded-full border border-white/10 flex items-center justify-center p-12 text-center">
                   <div className="space-y-6">
                      <p className="font-headline text-3xl italic">"When your wealth is structured, your decisions change."</p>
                      <div className="w-12 h-px bg-brand-gold mx-auto" />
                      <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold">The Atlas Premise</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final Micro CTA */}
      <section className="py-32 px-6 text-center border-t border-white/5">
        <Link href="/showcase" className="group inline-flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-muted-foreground mb-4 group-hover:text-brand-gold transition-colors">Strategic Visualizer</span>
          <span className="font-headline text-4xl md:text-5xl font-bold mb-8 underline decoration-brand-gold/20 underline-offset-8 group-hover:decoration-brand-gold transition-all">
            See how your wealth actually looks
          </span>
          <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
            <ArrowRight className="w-6 h-6" />
          </div>
        </Link>
      </section>
    </div>
  );
}
