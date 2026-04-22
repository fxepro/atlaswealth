
"use client";

import React from "react";
import { ShieldCheck, Lock, HardDrive, Key } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-24 border-y border-white/5 relative bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">Integrity & Security</h2>
          <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6">Built for Serious Capital</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Atlas Wealth OS is not a budgeting app or a trading platform. It is a personal control plane for the world's most significant private estates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-8">
            <ShieldCheck className="w-12 h-12 text-brand-gold mb-6" />
            <h4 className="text-xl font-bold mb-3">Absolute Privacy</h4>
            <p className="text-muted-foreground">Zero-knowledge architecture. Your financial data is encrypted and visible only to your authorized users.</p>
          </div>
          <div className="flex flex-col items-center text-center p-8">
            <Lock className="w-12 h-12 text-brand-gold mb-6" />
            <h4 className="text-xl font-bold mb-3">Military-Grade Security</h4>
            <p className="text-muted-foreground">SOC2 Type II compliant with multi-signature authorization for all data exports and structure changes.</p>
          </div>
          <div className="flex flex-col items-center text-center p-8">
            <HardDrive className="w-12 h-12 text-brand-gold mb-6" />
            <h4 className="text-xl font-bold mb-3">Local or Cloud</h4>
            <p className="text-muted-foreground">Choose between our highly-secure cloud hosting or a private server deployment for your family office.</p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck className="w-6 h-6" /> SOC2 COMPLIANT</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Lock className="w-6 h-6" /> AES-256 ENCRYPTION</div>
          <div className="flex items-center gap-2 font-bold text-xl"><Key className="w-6 h-6" /> MULTI-SIG AUTH</div>
        </div>
      </div>
    </section>
  );
}
