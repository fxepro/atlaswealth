
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "A representative from our private membership team will contact you shortly.",
    });
  };

  return (
    <div className="bg-background py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-headline text-5xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Inquiries regarding institutional partnerships or private membership.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 glass p-10 rounded-3xl border border-white/10">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">First Name</label>
              <Input className="bg-white/5 border-white/10" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last Name</label>
              <Input className="bg-white/5 border-white/10" required />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Professional Email</label>
            <Input type="email" className="bg-white/5 border-white/10" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Subject</label>
            <Input className="bg-white/5 border-white/10" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea className="bg-white/5 border-white/10 min-h-[150px]" required />
          </div>
          <Button type="submit" className="w-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-bold h-12">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
