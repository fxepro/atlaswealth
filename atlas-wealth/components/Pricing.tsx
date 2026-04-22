"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For founders and investors managing personal wealth.",
    color: "#60a5fa",
    features: [
      "Up to 500 assets",
      "5 entities",
      "Net worth dashboard",
      "Basic reporting",
      "Plaid + crypto integrations",
      "Document vault (5 GB)",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Elite",
    price: "$249",
    period: "per month",
    description: "For complex multi-entity structures with global exposure.",
    color: "#c9a84c",
    features: [
      "Unlimited assets",
      "Unlimited entities",
      "Full ownership graph",
      "Tax scenario modeling",
      "Multi-currency reporting",
      "Compliance vault (50 GB)",
      "Risk engine & heatmap",
      "Priority + advisor support",
    ],
    cta: "Request Access",
    highlighted: true,
  },
  {
    name: "Family Office",
    price: "Custom",
    period: "annual contract",
    description: "For UHNW families, family offices, and multi-family offices.",
    color: "#a78bfa",
    features: [
      "Everything in Elite",
      "White-label option",
      "Dedicated customer success",
      "Custom integrations",
      "On-premise deployment",
      "SLA & audit support",
      "Advisor portal",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "#c9a84c" }}
          >
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl leading-tight"
            style={{ color: "#e4e4e7" }}
          >
            Transparent pricing,
            <span className="text-gold-gradient italic block">
              institutional quality
            </span>
          </motion.h2>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-sm p-8 relative overflow-hidden flex flex-col"
              style={{
                background: plan.highlighted ? "#111113" : "#0d0d0f",
                border: plan.highlighted
                  ? "1px solid rgba(201,168,76,0.3)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: plan.highlighted
                  ? "0 0 60px rgba(201,168,76,0.07)"
                  : "none",
              }}
            >
              {plan.highlighted && (
                <>
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
                    }}
                  />
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-mono"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      color: "#c9a84c",
                    }}
                  >
                    Most Popular
                  </div>
                </>
              )}

              <div className="mb-6">
                <div
                  className="font-mono text-xs tracking-widest uppercase mb-3"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </div>
                <div className="flex items-end gap-2 mb-2">
                  <span
                    className="font-display text-5xl"
                    style={{ color: "#e4e4e7" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm mb-1.5" style={{ color: "#52525b" }}>
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm" style={{ color: "#71717a" }}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm">
                    <Check size={13} style={{ color: plan.color, flexShrink: 0 }} />
                    <span style={{ color: "#a1a1aa" }}>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="block text-center py-3 rounded-sm text-sm font-medium tracking-wide transition-all duration-200"
                style={
                  plan.highlighted
                    ? {
                        background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                        color: "#09090b",
                      }
                    : {
                        border: `1px solid ${plan.color}40`,
                        color: plan.color,
                      }
                }
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
