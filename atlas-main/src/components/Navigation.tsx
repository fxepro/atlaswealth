"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Shield } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12",
        isScrolled
          ? "bg-brand-canvas/85 backdrop-blur-md border-b border-brand-line shadow-sm py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-brand-navy border border-brand-line shadow-sm group-hover:border-brand-sky/40 transition-colors">
            <Shield className="text-brand-gold w-6 h-6" />
          </div>
          <span className="font-headline text-xl font-bold tracking-tight text-brand-heading">
            ATLAS <span className="text-brand-sky font-normal italic">WEALTH OS</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/problem" className="text-sm font-medium text-brand-body hover:text-brand-navy transition-colors">Problem</Link>
          <Link href="/solution" className="text-sm font-medium text-brand-body hover:text-brand-navy transition-colors">Solution</Link>
          <Link href="/features" className="text-sm font-medium text-brand-body hover:text-brand-navy transition-colors">Features</Link>
          <Link href="/showcase" className="text-sm font-medium text-brand-body hover:text-brand-navy transition-colors">Showcase</Link>
          <Link href="/login">
            <Button variant="outline" className="border-brand-line text-brand-navy hover:bg-brand-mist">
              Login
            </Button>
          </Link>
          <Link href="/request-access">
            <Button className="bg-brand-navy text-white hover:bg-brand-navy/90 border-none font-semibold shadow-sm">
              Request Early Access
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-brand-heading"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-canvas border-b border-brand-line p-6 flex flex-col gap-4 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
          <Link href="/problem" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium py-2 text-brand-heading">Problem</Link>
          <Link href="/solution" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium py-2 text-brand-heading">Solution</Link>
          <Link href="/features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium py-2 text-brand-heading">Features</Link>
          <Link href="/showcase" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium py-2 text-brand-heading">Showcase</Link>
          <div className="flex flex-col gap-3 pt-4 border-t border-brand-line">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full border-brand-line text-brand-navy">Login</Button>
            </Link>
            <Link href="/request-access" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-brand-navy text-white">Request Access</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
