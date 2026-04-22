
"use client";

import React from "react";
import { 
  Database, 
  Network, 
  Cpu, 
  Share2, 
  Layout, 
  Workflow, 
  Layers, 
  ShieldCheck, 
  BarChart3,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const architectureLayers = [
  {
    title: "Data Layer",
    description: "Federated data connectors with unified schema management for multi-asset classes.",
    icon: Database,
    points: ["Institutional API bridges", "Encrypted manual ingestion", "Unified financial schema"]
  },
  {
    title: "Ownership Graph Engine",
    description: "Proprietary node-based modeling of legal, beneficial, and structural ownership.",
    icon: Network,
    points: ["Recursive entity mapping", "Cross-jurisdiction nodes", "Dynamic relationship weighting"]
  },
  {
    title: "Processing & Intelligence",
    description: "Real-time engine for FX normalization, tax modeling signals, and risk analysis.",
    icon: Cpu,
    points: ["Live FX settlement engine", "Concentration risk mapping", "Automated structural auditing"]
  },
  {
    title: "API Layer",
    description: "Secure, high-availability bridge for institutional integration and system extensibility.",
    icon: Share2,
    points: ["TLS 1.3 encrypted tunnels", "Stateless auth architecture", "Audit-ready event logging"]
  },
  {
    title: "Interface Layer",
    description: "High-performance visualization plane built for low-latency financial decision making.",
    icon: Layout,
    points: ["Real-time data streaming", "Interactive structural graphs", "Modular reporting widgets"]
  }
];

const dataFlowSteps = [
  { step: "01", label: "Input", detail: "Secure ingestion from global sources" },
  { step: "02", label: "Validation", detail: "Double-entry integrity checks" },
  { step: "03", label: "Mapping", detail: "Structural node assignment" },
  { step: "04", label: "Processing", detail: "Real-time value calculation" },
  { step: "05", label: "Output", detail: "Structured visual insights" }
];

export default function ArchitecturePage() {
  return (
    <div className="bg-background min-h-screen text-off-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-8">
            Engineered for <br/> <span className="gold-text italic">Structure, Scale, and Clarity</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Atlas Wealth OS is a modular, secure system designed to model complex financial structures and operate reliably across global data environments.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 border-y border-white/5 bg-brand-charcoal/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold">System Philosophy</h2>
              <h3 className="font-headline text-4xl font-bold italic">Built to reflect the <br/> real-world complexity of wealth.</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most financial systems treat wealth as a flat list of accounts. Atlas treats wealth as a multi-dimensional graph. Our architecture is designed to handle the recursive nature of entities, where trusts own companies that own assets across different borders and currencies.
              </p>
              <div className="flex gap-4">
                <div className="p-4 rounded-xl glass border-white/5 flex-1">
                   <p className="text-sm font-bold mb-1">Structural Integrity</p>
                   <p className="text-xs text-muted-foreground">Double-entry logic applied to non-bank assets.</p>
                </div>
                <div className="p-4 rounded-xl glass border-white/5 flex-1">
                   <p className="text-sm font-bold mb-1">Jurisdictional Awareness</p>
                   <p className="text-xs text-muted-foreground">Every node carries its regulatory context.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
               <div className="aspect-square glass rounded-full border border-white/5 flex items-center justify-center p-12 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gold/5 blur-3xl rounded-full" />
                  <div className="relative z-10 space-y-8 text-center">
                    <Layers className="w-16 h-16 text-brand-gold mx-auto opacity-40" />
                    <p className="font-headline text-2xl italic">"Complexity structured is clarity gained."</p>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute inset-0 border border-brand-gold/10 rounded-full scale-90" />
                  <div className="absolute inset-0 border border-brand-gold/5 rounded-full scale-75" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-center text-brand-gold mb-20">Core Architecture Layers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architectureLayers.map((layer, idx) => (
              <div 
                key={idx}
                className="group p-10 glass rounded-3xl border border-white/5 hover:border-brand-gold/20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy border border-white/10 flex items-center justify-center mb-8 group-hover:border-brand-gold/50 transition-colors">
                  <layer.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-off-white group-hover:text-brand-gold transition-colors">
                  {layer.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  {layer.description}
                </p>
                <ul className="space-y-3">
                  {layer.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-3 text-xs text-muted-foreground">
                      <ChevronRight className="w-3 h-3 text-brand-gold/40" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow Section */}
      <section className="py-32 px-6 bg-brand-navy/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-center text-brand-gold mb-16">The Data Pipeline</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block -translate-y-1/2" />
            
            {dataFlowSteps.map((item, i) => (
              <div key={i} className="relative z-10 flex-1 w-full md:w-auto">
                <div className="p-6 glass rounded-2xl border-white/5 hover:border-brand-gold/20 transition-colors group text-center md:text-left">
                  <span className="text-[10px] font-bold text-brand-gold opacity-50 mb-2 block tracking-widest">{item.step}</span>
                  <h4 className="text-lg font-bold mb-1">{item.label}</h4>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
               <div>
                  <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">Global Design Principles</h2>
                  <div className="space-y-6">
                    <div className="flex gap-6">
                      <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                        <Workflow className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Multi-Currency & Jurisdictional</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">Built from the ground up to handle global tax residency and currency normalization natively at every node.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Fault Isolation & Resilience</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">Modular infrastructure ensures that data ingestion silos do not affect core system integrity or reporting reliability.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                        <BarChart3 className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Linear Scalability</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">Handles large-scale asset sets and deep ownership chains with consistent query performance and visualization clarity.</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="p-12 glass rounded-[40px] border-white/5 flex flex-col justify-center text-center space-y-8 bg-gradient-to-br from-brand-navy/40 to-brand-charcoal/40">
              <h3 className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em]">Operational Visibility</h3>
              <p className="font-headline text-3xl italic">"Real-time visibility is not a luxury. It is a foundational requirement for modern wealth management."</p>
              <div className="w-12 h-px bg-brand-gold mx-auto" />
              <p className="text-sm text-muted-foreground italic">What this enables is a continuous system of record that elevates every strategic decision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-8 italic">
            Ready to structure your <br/> <span className="gold-text">Financial Reality?</span>
          </h2>
          <div className="flex justify-center gap-4">
            <Link href="/request-access">
              <Button size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-bold h-16 px-12 text-lg">
                Explore the System <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

