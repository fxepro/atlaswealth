"use client";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Server, FileCheck, Users } from "lucide-react";

const items = [
  { icon: Shield, title: "SOC 2 Type II", description: "Certified annually across security, availability, and confidentiality controls." },
  { icon: Lock, title: "AES-256 Encryption", description: "All data encrypted at rest and in transit. Keys managed with hardware HSMs." },
  { icon: Eye, title: "Zero-Trust Architecture", description: "Every request verified regardless of network origin. No implicit trust." },
  { icon: Users, title: "Role-Based Access", description: "Granular permissions for owners, accountants, advisors, and auditors." },
  { icon: FileCheck, title: "Immutable Audit Logs", description: "Every action logged with cryptographic tamper-evidence. Full audit trail." },
  { icon: Server, title: "GDPR Compliant", description: "Data residency controls. Right to erasure. Full compliance documentation." },
];

export default function Security() {
  return (
    <section id="security" className="py-24 px-6" style={{ background: "#f8f7f4" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-28">
            <div className="text-xs font-mono font-medium tracking-widest uppercase mb-3" style={{ color: "#b5882a" }}>Security & Trust</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5" style={{ color: "#1a2744", letterSpacing: "-0.02em" }}>
              Built for the{" "}
              <span style={{ color: "#b5882a", fontStyle: "italic" }}>most sensitive</span>
              {" "}data in the world
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#4a5568" }}>
              Your wealth structure is the most private thing you own.
              We designed Atlas from the ground up with bank-grade security,
              regulatory compliance, and the understanding that trust is earned, not assumed.
            </p>
            <div className="flex flex-wrap gap-3">
              {["SOC 2 Type II", "GDPR", "CCPA", "ISO 27001"].map((badge) => (
                <span key={badge} className="px-3 py-1.5 rounded text-xs font-semibold"
                  style={{ background: "#fff", border: "1px solid #e5e3de", color: "#4a5568" }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex gap-4 p-5 rounded-xl"
                  style={{ background: "#fff", border: "1px solid #e5e3de" }}
                >
                  <div className="p-2.5 rounded-lg flex-shrink-0 h-fit" style={{ background: "#f0f4ff" }}>
                    <Icon size={16} style={{ color: "#1a2744" }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1" style={{ color: "#1a2744" }}>{item.title}</div>
                    <div className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
