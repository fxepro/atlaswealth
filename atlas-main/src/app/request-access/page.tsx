
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Shield, Lock, CheckCircle2, ArrowRight, Loader2, Globe, Scale, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid professional email"),
  role: z.string().min(1, "Please select your primary role"),
  assetScope: z.string().min(1, "Please select your approximate asset scope"),
  geoExposure: z.string().min(2, "Please describe your geographic exposure"),
  challenge: z.string().min(10, "Please briefly describe your current challenge"),
});

export default function RequestAccessPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      role: "",
      assetScope: "",
      geoExposure: "",
      challenge: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Received",
        description: "Your request for access has been logged. Our membership team will contact you following review.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      {/* Left Side: Request Form */}
      <div className="flex-1 px-6 py-20 lg:px-24 bg-brand-charcoal/50">
        <div className="max-w-xl mx-auto">
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-off-white">
              Request Access to <br/> <span className="gold-text">Atlas Wealth OS</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A private system for individuals managing wealth across entities, jurisdictions, and asset classes. Access is currently limited.
            </p>
          </div>

          <div className="mb-12 py-4 px-6 border-y border-white/5 bg-white/[0.02] animate-in fade-in duration-1000">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold text-center">
              Not open to the public. Designed for clarity at scale.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-white/5 border-white/10 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Professional Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@familyoffice.com" {...field} className="bg-white/5 border-white/10 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Primary Role</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/10 h-12">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-brand-navy border-white/10">
                          <SelectItem value="founder">Founder</SelectItem>
                          <SelectItem value="investor">Investor</SelectItem>
                          <SelectItem value="executive">Executive</SelectItem>
                          <SelectItem value="family-office">Family Office</SelectItem>
                          <SelectItem value="advisor">Advisor</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="assetScope"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Approximate Asset Scope</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/5 border-white/10 h-12">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-brand-navy border-white/10">
                          <SelectItem value="<1m">&lt;$1M</SelectItem>
                          <SelectItem value="1-5m">$1M–$5M</SelectItem>
                          <SelectItem value="5-25m">$5M–$25M</SelectItem>
                          <SelectItem value="25-100m">$25M–$100M</SelectItem>
                          <SelectItem value="100m+">$100M+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="geoExposure"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Geographic Exposure</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. EU, USA, Singapore" {...field} className="bg-white/5 border-white/10 h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="challenge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Current Challenge</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Briefly describe the complexity you are currently managing..." 
                        {...field} 
                        className="bg-white/5 border-white/10 min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4 pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 font-bold h-14 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
                    </>
                  ) : (
                    "Request Access"
                  )}
                </Button>
                <p className="text-[10px] text-center text-muted-foreground italic leading-relaxed px-8">
                  Your information is kept strictly confidential. Atlas Wealth OS is a private platform with controlled onboarding and invitation-only membership.
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>

      {/* Right Side: Narrative Panel */}
      <div className="hidden lg:flex flex-1 relative bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-dots" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="white" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid-dots)" />
          </svg>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-24 py-20 w-full">
          <div className="max-w-lg">
            <div className="mb-20 animate-in fade-in slide-in-from-right-8 duration-700">
              <h2 className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-6">Why Early Access Matters</h2>
              <h3 className="font-headline text-4xl font-bold text-off-white mb-10 italic">Foundation Membership</h3>
              <ul className="space-y-8">
                {[
                  { title: "Influence Core Features", body: "Directly shape the evolution of the system to match your specific office requirements." },
                  { title: "Priority Onboarding", body: "Receive white-glove assistance in structural modeling and historical data migration." },
                  { title: "Private Access", body: "Build and secure your wealth graph before public jurisdictional nodes are deployed." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 group">
                    <div className="w-px h-12 bg-brand-gold/20 group-hover:bg-brand-gold transition-colors duration-500" />
                    <div>
                      <h4 className="font-bold text-off-white mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-in fade-in slide-in-from-right-12 duration-700 delay-300">
              <h2 className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-8">What to Expect</h2>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { step: "01", label: "Review", icon: Scale },
                  { step: "02", label: "Invitation", icon: Users },
                  { step: "03", label: "Onboarding", icon: Globe }
                ].map((item, i) => (
                  <div key={i} className="p-6 glass rounded-2xl border-white/5 text-center group">
                    <item.icon className="w-5 h-5 text-brand-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">{item.step}</p>
                    <p className="text-xs font-bold text-off-white">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 animate-in fade-in duration-1000 delay-500">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold italic">
                Limited onboarding capacity. Access granted on a rolling basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
