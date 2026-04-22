"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Pro",
    price: "$49",
    period: "/ month",
    description: "For founders and investors managing personal wealth.",
    features: ["Up to 500 assets", "5 entities", "Net worth dashboard", "Basic reporting", "Plaid + crypto integrations", "Document vault (5 GB)", "Email support"],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Elite",
    price: "$249",
    period: "/ month",
    description: "For complex multi-entity structures with global exposure.",
    features: ["Unlimited assets", "Unlimited entities", "Full ownership graph", "Tax scenario modeling", "Multi-currency reporting", "Compliance vault (50 GB)", "Risk engine & heatmap", "Priority support"],
    cta: "Request Access",
    highlighted: true,
  },
  {
    name: "Family Office",
    price: "Custom",
    period: "annual",
    description: "For UHNW families and multi-family offices.",
    features: ["Everything in Elite", "White-label option", "Dedicated success manager", "Custom integrations", "On-premise deployment", "SLA & audit support", "Advisor portal"],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs font-mono font-medium tracking-widest uppercase mb-3" style={{ color: "#b5882a" }}>Pricing</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight" style={{ color: "#1a2744", letterSpacing: "-0.02em" }}>
            Transparent pricing,{" "}
            <span style={{ color: "#b5882a", fontStyle: "italic" }}>institutional quality</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl p-8 flex flex-col relative"
              style={{
                background: plan.highlighted ? "#1a2744" : "#fff",
                border: plan.highlighted ? "none" : "1px solid #e5e3de",
                boxShadow: plan.highlighted ? "0 8px 40px rgba(26,39,68,0.2)" : "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                  style={{ background: "#b5882a", color: "#fff" }}>
                  Most Popular
                </div>
              )}

              <div className="mb-7">
                <div className="text-xs font-mono font-medium tracking-widest uppercase mb-3"
                  style={{ color: plan.highlighted ? "rgba(255,255,255,0.5)" : "#9ca3af" }}>
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="font-display text-4xl font-semibold"
                    style={{ color: plan.highlighted ? "#fff" : "#1a2744" }}>
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: plan.highlighted ? "rgba(255,255,255,0.4)" : "#9ca3af" }}>
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm" style={{ color: plan.highlighted ? "rgba(255,255,255,0.6)" : "#6b7280" }}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm">
                    <Check size={14} style={{ color: plan.highlighted ? "#b5882a" : "#1a7a4a", flexShrink: 0 }} />
                    <span style={{ color: plan.highlighted ? "rgba(255,255,255,0.75)" : "#4a5568" }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href="#" className="block text-center py-3 rounded-lg text-sm font-semibold transition-all duration-150"
                style={plan.highlighted
                  ? { background: "#b5882a", color: "#fff" }
                  : { background: "#f3f2ef", color: "#1a2744", border: "1px solid #e5e3de" }
                }>
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
