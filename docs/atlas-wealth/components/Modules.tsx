"use client";
import { motion } from "framer-motion";
import { BarChart2, Building2, ArrowLeftRight, Calculator, FileText, ShieldCheck, AlertTriangle, Lock } from "lucide-react";
import { useState } from "react";

const modules = [
  {
    icon: BarChart2, label: "Asset Discovery", tag: "v1", accent: "#1a2744",
    headline: "Complete Asset Registry",
    description: "Ingest and unify every asset across geographies. Public equities, private stakes, real estate, crypto wallets, commodities, and digital assets — in a single structured registry.",
    features: ["Plaid & Open Banking APIs", "CSV & statement upload", "Manual + bulk entry", "Real-time valuations"],
  },
  {
    icon: Building2, label: "Entity Management", tag: "v1", accent: "#1a7a4a",
    headline: "Model Any Structure",
    description: "LLCs, trusts, foundations, offshore vehicles — model every entity and the ownership percentage linking them. The ownership graph updates in real time.",
    features: ["Unlimited entity types", "Ownership percentage graph", "Director / trustee tracking", "Jurisdiction modeling"],
  },
  {
    icon: ArrowLeftRight, label: "Money Movement", tag: "v2", accent: "#4a5568",
    headline: "Global Transfers, Tracked",
    description: "Record inter-entity transfers and currency conversions today. In v2, initiate transfers via Wise and Revolut with built-in AML hooks and immutable audit trail.",
    features: ["Multi-currency wallet", "AML risk scoring", "Immutable audit log", "Wise / Revolut (v2)"],
  },
  {
    icon: Calculator, label: "Tax Intelligence", tag: "v2", accent: "#b5882a",
    headline: "Scenario-Based Tax Engine",
    description: "Model 'what if' scenarios across jurisdictions. Understand capital gains exposure, dividend treatment, and withholding taxes before you move a single asset.",
    features: ["Treaty-aware modeling", "Scenario comparisons", "Jurisdiction arbitrage", "Estimated liability"],
  },
  {
    icon: FileText, label: "Consolidated Reporting", tag: "v1", accent: "#1a2744",
    headline: "Single Pane of Truth",
    description: "Family-office-grade reports, automatically generated. Net worth, entity balance sheets, income statements, cash flows — normalized across currencies.",
    features: ["Multi-currency normalization", "Entity-level P&L", "Time-series wealth charts", "Exportable PDF reports"],
  },
  {
    icon: ShieldCheck, label: "Compliance Vault", tag: "v1", accent: "#1a7a4a",
    headline: "Never Miss a Deadline",
    description: "Store every trust deed, incorporation doc, and tax filing. Get deadline alerts per jurisdiction. Track KYC/AML status across all entities.",
    features: ["Encrypted document storage", "Deadline calendaring", "KYC/AML tracker", "Entity compliance checklist"],
  },
  {
    icon: AlertTriangle, label: "Risk Engine", tag: "v2", accent: "#c0392b",
    headline: "Understand Your Exposure",
    description: "Quantify concentration risk, currency exposure, country risk, and counterparty exposure. View a risk heatmap across your entire wealth structure.",
    features: ["Country risk scoring", "Currency concentration", "Asset correlation matrix", "Risk heatmap"],
  },
  {
    icon: Lock, label: "Security & Permissions", tag: "v1", accent: "#4a5568",
    headline: "Bank-Grade Access Control",
    description: "Role-based permissions for owners, accountants, advisors, and auditors. Zero-trust architecture with complete audit logs and MFA on every access.",
    features: ["Role-based access", "Zero-trust architecture", "Complete audit logs", "MFA enforcement"],
  },
];

export default function Modules() {
  const [active, setActive] = useState(0);
  const mod = modules[active];
  const Icon = mod.icon;

  return (
    <section id="modules" className="py-24 px-6" style={{ background: "#f8f7f4" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-mono font-medium tracking-widest uppercase mb-3" style={{ color: "#b5882a" }}>Platform Modules</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight" style={{ color: "#1a2744", letterSpacing: "-0.02em" }}>
            Every layer of <span style={{ color: "#b5882a", fontStyle: "italic" }}>complex wealth</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[340px_1fr] gap-6">
          {/* Module list */}
          <div className="flex flex-col gap-1.5">
            {modules.map((m, i) => {
              const MIcon = m.icon;
              const isActive = i === active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-left transition-all duration-150"
                  style={{
                    background: isActive ? "#fff" : "transparent",
                    border: isActive ? "1px solid #e5e3de" : "1px solid transparent",
                    boxShadow: isActive ? "0 1px 6px rgba(0,0,0,0.05)" : "none",
                  }}
                >
                  <div className="p-1.5 rounded flex-shrink-0" style={{ background: isActive ? `${m.accent}12` : "#e5e3de30" }}>
                    <MIcon size={14} style={{ color: isActive ? m.accent : "#9ca3af" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium" style={{ color: isActive ? "#1a2744" : "#6b7280" }}>{m.label}</div>
                  </div>
                  <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{
                    background: isActive ? `${m.accent}12` : "#f3f2ef",
                    color: isActive ? m.accent : "#9ca3af",
                  }}>{m.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl p-8"
            style={{ background: "#fff", border: "1px solid #e5e3de", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
          >
            <div className="inline-flex items-center justify-center p-3 rounded-lg mb-5" style={{ background: `${mod.accent}10` }}>
              <Icon size={22} style={{ color: mod.accent }} />
            </div>
            <div className="text-xs font-mono font-medium tracking-widest uppercase mb-2" style={{ color: mod.accent }}>
              {mod.label}
            </div>
            <h3 className="font-display text-3xl mb-4 leading-tight" style={{ color: "#1a2744", letterSpacing: "-0.01em" }}>
              {mod.headline}
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#4a5568" }}>{mod.description}</p>
            <div className="grid grid-cols-2 gap-3">
              {mod.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: mod.accent }} />
                  <span style={{ color: "#4a5568" }}>{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
