
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function CTASection() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Access Requested",
        description: "We've received your interest. Our membership committee will review and reach out shortly.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-headline text-5xl md:text-6xl font-bold mb-8 italic">Own Your Financial Reality</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          The next era of wealth management isn't a spreadsheet. It's an operating system. Join the waitlist for exclusive access.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <Input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your professional email" 
            className="bg-white/5 border-white/20 h-14 text-lg text-off-white"
          />
          <Button type="submit" size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-bold h-14 px-8 shrink-0">
            Request Early Access
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground mt-6 uppercase tracking-widest font-medium">
          Membership by invitation only. Professional domains preferred.
        </p>
      </div>
    </section>
  );
}
