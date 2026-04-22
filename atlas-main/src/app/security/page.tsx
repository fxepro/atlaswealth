import React from "react";
import { 
  ShieldCheck, 
  Lock, 
  Fingerprint, 
  History, 
  EyeOff, 
  CheckCircle2, 
  Info,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const securitySections = [
  {
    title: "Secure Architecture",
    icon: ShieldCheck,
    points: ["TLS 1.3 encryption for all data in transit", "Segmented infrastructure with isolated data nodes", "Token-based, stateless authentication"]
  },
  {
    title: "Data Protection & Encryption",
    icon: Lock,
    points: ["AES-256 encryption for data at rest", "Secure key management and rotation", "Zero plaintext storage of sensitive values"]
  },
  {
    title: "Access Control",
    icon: Fingerprint,
    points: ["Granular role-based permissions (RBAC)", "Mandatory multi-factor authentication", "Strict session duration and idle controls"]
  },
  {
    title: "Audit & Traceability",
    icon: History,
    points: ["Immutable system and access logs", "Entity-level change tracking", "Exportable audit trails for compliance"]
  },
  {
    title: "Privacy & Data Ownership",
    icon: EyeOff,
    points: ["No data selling or monetization", "No unauthorized third-party sharing", "Strict least-privilege internal access"]
  },
  {
    title: "Compliance Foundation",
    icon: CheckCircle2,
    points: ["GDPR-aware data handling", "SOC 2 alignment (roadmap)", "Regular internal security assessments"]
  }
];

export default function SecurityPage() {
  return (
    <div className="bg-background min-h-screen text-off-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none opacity-30" />
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-8">
            Security by Design. <br/> <span className="gold-text italic">Privacy by Default.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Atlas Wealth OS is built to protect sensitive financial data at every layer—from infrastructure to access control.
          </p>
        </div>
      </section>

      {/* Security Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securitySections.map((section, idx) => (
              <div 
                key={idx}
                className="group p-10 glass rounded-3xl border border-white/5 hover:border-brand-gold/20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy border border-white/10 flex items-center justify-center mb-8 group-hover:border-brand-gold/50 transition-colors">
                  <section.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold mb-6 text-off-white group-hover:text-brand-gold transition-colors">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <div className="w-1 h-1 rounded-full bg-brand-gold/40 mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope & Responsibility Section */}
      <section className="py-24 px-6 bg-brand-navy/20">
        <div className="max-w-4xl mx-auto glass p-12 rounded-[40px] border-white/5 animate-in fade-in duration-1000">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-20 h-20 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
              <Info className="w-10 h-10 text-brand-gold" />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-headline italic">Scope & Responsibility</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-gold" />
                  No fund custody
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-gold" />
                  No transaction execution
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-gold" />
                  No legal or tax advice
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-gold" />
                  Secure data practices only
                </p>
              </div>
              <p className="pt-4 text-xs italic text-muted-foreground opacity-60">
                Atlas Wealth OS acts as a system of record and intelligence. We do not operate as a financial institution or custodian.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Still have questions?
          </h2>
          <p className="text-xl text-muted-foreground">
            Our security and infrastructure team is available for deep-dive technical reviews with qualified family offices.
          </p>
          <div className="pt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-bold h-16 px-12 text-lg">
                Contact Security Team <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
