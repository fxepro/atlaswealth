
import { Button } from "@/components/ui/button";
import { ShieldCheck, BarChart3, Users } from "lucide-react";

export default function PortalPage() {
  return (
    <div className="bg-background py-20 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="font-headline text-5xl font-bold mb-8">Institutional Portal</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Centralized management for wealth advisors, multi-family offices, and financial institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 glass rounded-3xl border border-white/10 text-center">
            <Users className="w-12 h-12 text-brand-gold mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4">Client Onboarding</h3>
            <p className="text-sm text-muted-foreground mb-8">Streamlined digital onboarding for complex client structures with automated KYC/AML checks.</p>
            <Button variant="outline" className="w-full border-brand-gold/50 text-brand-gold">Access Module</Button>
          </div>
          <div className="p-8 glass rounded-3xl border border-white/10 text-center">
            <BarChart3 className="w-12 h-12 text-brand-gold mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4">Aggregate Reporting</h3>
            <p className="text-sm text-muted-foreground mb-8">Generate cross-portfolio insights and compliance reports for your entire institutional book.</p>
            <Button variant="outline" className="w-full border-brand-gold/50 text-brand-gold">View Dashboard</Button>
          </div>
          <div className="p-8 glass rounded-3xl border border-white/10 text-center">
            <ShieldCheck className="w-12 h-12 text-brand-gold mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4">Compliance Center</h3>
            <p className="text-sm text-muted-foreground mb-8">Maintain rigorous audit trails and jurisdictional compliance across all managed entities.</p>
            <Button variant="outline" className="w-full border-brand-gold/50 text-brand-gold">Manage Rules</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
