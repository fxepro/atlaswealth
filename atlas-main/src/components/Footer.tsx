import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 bg-brand-canvas border-t border-brand-line">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="text-brand-gold w-6 h-6" />
              <span className="font-headline text-xl font-bold tracking-tight text-brand-heading uppercase">
                ATLAS <span className="text-brand-sky font-normal italic">WEALTH OS</span>
              </span>
            </div>
            <p className="text-brand-body max-w-sm leading-relaxed">
              The definitive operating system for global family wealth. Structure, visibility, and control for the world&apos;s most complex estates.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-navy">Product</h5>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-brand-body hover:text-brand-navy transition-colors">Features</Link></li>
              <li><Link href="/security" className="text-brand-body hover:text-brand-navy transition-colors">Security</Link></li>
              <li><Link href="/architecture" className="text-brand-body hover:text-brand-navy transition-colors">Architecture</Link></li>
              <li><Link href="/request-access" className="text-brand-body hover:text-brand-navy transition-colors">Request Access</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-navy">Company</h5>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-brand-body hover:text-brand-navy transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-brand-body hover:text-brand-navy transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-brand-body hover:text-brand-navy transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-brand-body hover:text-brand-navy transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-line flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Atlas Wealth Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-navy transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-navy transition-colors">Twitter</a>
            <Link href="/portal" className="hover:text-brand-navy transition-colors">Institutional Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
