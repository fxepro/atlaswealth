"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Lock, Eye, CheckCircle2, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background overflow-hidden">
      {/* Left Side: Login Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-24 bg-brand-canvas">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-2 group mb-10">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-navy border border-brand-line shadow-sm group-hover:border-brand-sky/40 transition-colors">
                <Shield className="text-brand-gold w-6 h-6" />
              </div>
              <span className="font-headline text-xl font-bold tracking-tight text-brand-heading">
                ATLAS <span className="text-brand-sky font-normal italic">WEALTH OS</span>
              </span>
            </Link>

            <h1 className="font-headline text-4xl font-bold mb-4 text-brand-heading">
              Access Your Wealth <br/> <span className="gold-text">Command Center</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Securely sign in to view your global assets, ownership structures, and financial reporting in one place.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">Email Address</label>
              <Input
                type="email"
                placeholder="you@example.com"
                className="bg-white border-brand-line h-12 focus-visible:ring-brand-sky/30 transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">Password</label>
                <Link href="#" className="text-xs text-brand-navy hover:text-brand-sky hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-white border-brand-line h-12 pr-10 focus-visible:ring-brand-sky/30 transition-colors"
                  required
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-brand-heading">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            <Button className="w-full bg-brand-navy text-white hover:bg-brand-navy/90 font-bold h-12 text-lg shadow-sm">
              Sign In
            </Button>

            <p className="text-[10px] text-center text-muted-foreground italic">
              By signing in, you acknowledge secure access to a private financial platform designed for structured wealth visibility.
            </p>
          </form>

          <div className="mt-12 pt-8 border-t border-brand-line flex flex-col sm:flex-row gap-6 justify-between items-center text-sm">
            <Link href="/request-access" className="text-muted-foreground hover:text-brand-navy flex items-center gap-2 transition-colors">
              Request access <ArrowRight className="w-3 h-3" />
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-brand-navy transition-colors">
              Contact support
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Branding Panel */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden bg-[#B4D3D9]">
        <div className="absolute inset-0 opacity-25">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-large" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E3A5F" strokeWidth="0.12" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid-large)" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/35 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full flex flex-col justify-center px-24">
          <div className="max-w-lg">
            <h2 className="text-brand-navy text-sm font-bold uppercase tracking-[0.4em] mb-6">System of Record</h2>
            <h3 className="font-headline text-5xl font-bold mb-8 italic text-brand-heading">Private. Structured. Global.</h3>

            <div className="space-y-6 text-xl text-brand-body leading-relaxed mb-12">
              <p>
                Atlas Wealth OS is built for individuals and families managing wealth across accounts, entities, jurisdictions, and asset classes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                  <span>Track what you own.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                  <span>Understand how it is structured.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                  <span>Operate from a single source of truth.</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-12 pt-12 border-t border-brand-navy/15">
              {[
                { label: "Encrypted access", icon: Lock },
                { label: "Role-based permissions", icon: CheckCircle2 },
                { label: "Audit-ready architecture", icon: Shield },
                { label: "Multi-entity visibility", icon: Globe }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <item.icon className="w-5 h-5 text-brand-navy group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 group-hover:text-brand-heading transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
