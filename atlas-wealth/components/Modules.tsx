"use client";
import { motion } from "framer-motion";
import {
  BarChart2, Building2, ArrowLeftRight, Calculator,
  FileText, ShieldCheck, AlertTriangle, Lock,
} from "lucide-react";
import { useState } from "react";

const modules = [
  {
    icon: BarChart2,
    label: "Asset Discovery",
    tag: "v1",
    color: "#c9a84c",
    headline: "Complete Asset Registry",
    description:
      "Ingest and unify every asset across geographies. Public equities, private stakes, real estate, crypto wallets, commodities, and digital assets — in a single structured registry.",
    features: ["Plaid & Open Banking APIs", "CSV & statement upload", "Manual + bulk entry", "Real-time valuations"],
  },
  {
    icon: Building2,
    label: "Entity Management",
    tag: "v1",
    color: "#60a5fa",
    headline: "Model Any Structure",
    description:
      "LLCs, trusts, foundations, offshore vehicles — model every entity and the ownership percentage linking them. The graph updates in real time as structures change.",
    features: ["Unlimited entity types", "Ownership percentage graph", "Director / trustee tracking", "Jurisdiction modeling"],
  },
  {
    icon: ArrowLeftRight,
    label: "Money Movement",
    tag: "v2",
    color: "#a78bfa",
    headline: "Global Transfers, Tracked",
    description:
      "Record inter-entity transfers and currency conversions today. In v2, initiate transfers via Wise and Revolut integrations with built-in AML hooks and immutable audit trail.",
    features: ["Multi-currency wallet", "AML risk scoring", "Immutable audit log", "Wise / Revolut (v2)"],
  },
  {
    icon: Calculator,
    label: "Tax Intelligence",
    tag: "v2",
    color: "#f87171",
    headline: "Scenario-Based Tax Engine",
    description:
      "Model 'what if' scenarios across jurisdictions. Understand capital gains exposure, dividend treatment, and withholding taxes before you move a single asset.",
    features: ["Treaty-aware modeling", "Scenario comparisons", "Jurisdiction arbitrage", "Estimated liability"],
  },
  {
    icon: FileText,
    label: "Consolidated Reporting",
    tag: "v1",
    color: "#34d399",
    headline: "Single Pane of Truth",
    description:
      "Family-office-grade reports, automatically generated. Net worth, entity balance sheets, income statements, cash flows — normalized across currencies.",
    features: ["Multi-currency normalization", "Entity-level P&L", "Time-series wealth charts", "Exportable PDF reports"],
  },
  {
    icon: ShieldCheck,
    label: "Compliance Vault",
    tag: "v1",
    color: "#fbbf24",
    headline: "Never Miss a Deadline",
    description:
      "Store every trust deed, incorporation doc, and tax filing. Get deadline alerts per jurisdiction. Track KYC/AML status across all entities.",
    features: ["Encrypted document storage", "Deadline calendaring", "KYC/AML tracker", "Entity compliance checklist"],
  },
  {
    icon: AlertTriangle,
    label: "Risk Engine",
    tag: "v2",
    color: "#fb923c",
    headline: "Understand Your Exposure",
    description:
      "Quantify concentration risk, currency exposure, country risk, and counterparty exposure. View a risk heatmap across your entire wealth structure.",
    features: ["Country risk scoring", "Currency concentration", "Asset correlation matrix", "Risk heatmap"],
  },
  {
    icon: Lock,
    label: "Security & Permissions",
    tag: "v1",
    color: "#e879f9",
    headline: "Bank-Grade Access Control",
    description:
      "Role-based permissions for owners, accountants, advisors, and auditors. Zero-trust architecture with complete audit logs and MFA on every access.",
    features: ["Role-based access", "Zero-trust architecture", "Complete audit logs", "MFA enforcement"],
  },
];

export default function Modules() {
  const [active, setActive] = useState(0);
  const mod = modules[active];
  const Icon = mod.icon;

  return (
    <section id="modules" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "#c9a84c" }}
          >
            Platform Modules
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl leading-tight"
            style={{ color: "#e4e4e7" }}
          >
            Every layer of
            <span className="text-gold-gradient italic block">
              complex wealth
            </span>
          </motion.h2>
        </div>

        {/* Module grid + detail */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-6">
          {/* Module list */}
          <div className="grid grid-cols-2 gap-2 content-start">
            {modules.map((m, i) => {
              const MIcon = m.icon;
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="text-left px-4 py-4 rounded-sm transition-all duration-200 relative overflow-hidden"
                  style={{
                    background: isActive ? "rgba(17,17,19,1)" : "transparent",
                    border: isActive
                      ? `1px solid ${m.color}40`
                      : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {isActive && (
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{ background: m.color }}
                    />
                  )}
                  <div className="flex items-start gap-3 relative">
                    <div
                      className="p-1.5 rounded-sm mt-0.5"
                      style={{
                        background: isActive ? `${m.color}20` : "transparent",
                        color: isActive ? m.color : "#52525b",
                      }}
                    >
                      <MIcon size={14} />
                    </div>
                    <div>
                      <div
                        className="text-sm font-medium leading-tight"
                        style={{ color: isActive ? "#e4e4e7" : "#71717a" }}
                      >
                        {m.label}
                      </div>
                      <div
                        className="text-xs font-mono mt-0.5"
                        style={{
                          color: isActive ? m.color : "#3f3f46",
                        }}
                      >
                        {m.tag}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-sm p-8 relative overflow-hidden"
            style={{
              background: "#111113",
              border: `1px solid ${mod.color}25`,
            }}
          >
            {/* Background glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
              style={{ background: mod.color }}
            />

            <div
              className="inline-flex items-center justify-center p-3 rounded-sm mb-6"
              style={{ background: `${mod.color}15`, color: mod.color }}
            >
              <Icon size={22} />
            </div>

            <div
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: mod.color }}
            >
              {mod.label}
            </div>

            <h3
              className="font-display text-3xl mb-4 leading-tight"
              style={{ color: "#e4e4e7" }}
            >
              {mod.headline}
            </h3>

            <p className="text-sm leading-relaxed mb-8" style={{ color: "#71717a" }}>
              {mod.description}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {mod.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "#a1a1aa" }}
                >
                  <div
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: mod.color }}
                  />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
