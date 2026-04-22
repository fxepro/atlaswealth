"use client";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Server, FileCheck, Users } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Certified annually across security, availability, and confidentiality controls.",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description: "All data encrypted at rest and in transit. Keys managed with hardware HSMs.",
  },
  {
    icon: Eye,
    title: "Zero-Trust Architecture",
    description: "Every request verified, regardless of network origin. No implicit trust.",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Granular permissions for owners, accountants, advisors, and auditors.",
  },
  {
    icon: FileCheck,
    title: "Immutable Audit Logs",
    description: "Every action logged with cryptographic tamper-evidence. Full audit trail.",
  },
  {
    icon: Server,
    title: "GDPR Compliant",
    description: "Data residency controls. Right to erasure. Full compliance documentation.",
  },
];

export default function Security() {
  return (
    <section id="security" className="py-32 px-6 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(96,165,250,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: "#c9a84c" }}
            >
              Security & Trust
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl leading-tight mb-6"
              style={{ color: "#e4e4e7" }}
            >
              Built for the
              <span className="text-gold-gradient italic block">
                most sensitive
              </span>
              data in the world
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base leading-relaxed"
              style={{ color: "#71717a" }}
            >
              Your wealth structure is the most private thing you own. 
              We designed Atlas from the ground up with bank-grade security, 
              regulatory compliance, and the understanding that trust is earned, not assumed.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 rounded-sm"
                  style={{
                    background: "#111113",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="p-2 rounded-sm inline-flex mb-3"
                    style={{
                      background: "rgba(96,165,250,0.1)",
                      color: "#60a5fa",
                    }}
                  >
                    <Icon size={14} />
                  </div>
                  <div
                    className="text-sm font-medium mb-1"
                    style={{ color: "#e4e4e7" }}
                  >
                    {item.title}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "#52525b" }}>
                    {item.description}
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
