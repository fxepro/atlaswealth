"use client";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe2, Shield } from "lucide-react";

const stats = [
  { value: "$4.2T", label: "Assets tracked" },
  { value: "180+", label: "Jurisdictions" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "SOC 2", label: "Type II certified" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden" style={{ background: "#f8f7f4" }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #d4d0c8 1px, transparent 0)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-8"
            style={{ background: "#fdf8ee", border: "1px solid #d4a843", color: "#b5882a" }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#b5882a" }} />
            Private Beta — By Invitation Only
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display leading-tight mb-6"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)", color: "#1a2744", letterSpacing: "-0.02em" }}
          >
            Your Personal
            <span className="block" style={{ color: "#b5882a", fontStyle: "italic" }}>Family Office</span>
            Operating System
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg mb-10 max-w-xl leading-relaxed"
            style={{ color: "#4a5568" }}
          >
            A complete system of record for ownership, value, and movement.
            Model your entities, track global assets, and understand tax exposure —
            with the sophistication once reserved for institutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-semibold transition-all duration-150 hover:opacity-90 shadow-sm hover:shadow-md"
              style={{ background: "#1a2744", color: "#fff" }}
            >
              Request Access <ArrowRight size={15} />
            </a>
            <a
              href="#platform"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-sm font-medium transition-all duration-150 hover:border-opacity-60"
              style={{ border: "1.5px solid #d4d0c8", color: "#4a5568", background: "#fff" }}
            >
              See how it works
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-lg overflow-hidden"
            style={{ border: "1px solid #e5e3de", background: "#e5e3de" }}
          >
            {stats.map((s, i) => (
              <div key={i} className="px-6 py-5 text-center" style={{ background: "#fff" }}>
                <div className="font-display text-2xl font-semibold mb-0.5" style={{ color: "#1a2744" }}>{s.value}</div>
                <div className="text-xs" style={{ color: "#9ca3af" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating cards — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute right-12 top-40 hidden xl:flex flex-col gap-3"
      >
        <FloatCard icon={<TrendingUp size={14} />} title="Net Worth" value="$24.7M" sub="+13.2% YTD" color="#1a7a4a" bg="#f0faf5" />
        <FloatCard icon={<Globe2 size={14} />} title="Entities" value="8 Active" sub="4 jurisdictions" color="#1a2744" bg="#f0f4ff" />
        <FloatCard icon={<Shield size={14} />} title="Compliance" value="All Clear" sub="Next filing: 8 days" color="#b5882a" bg="#fdf8ee" />
      </motion.div>
    </section>
  );
}

function FloatCard({ icon, title, value, sub, color, bg }: {
  icon: React.ReactNode; title: string; value: string; sub: string; color: string; bg: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
      className="px-4 py-3.5 rounded-lg shadow-lg"
      style={{ background: "#fff", border: "1px solid #e5e3de", minWidth: 190 }}
    >
      <div className="flex items-center gap-2 mb-1" style={{ color }}>
        <div className="p-1 rounded" style={{ background: bg }}>{icon}</div>
        <span className="text-xs font-medium" style={{ color: "#6b7280" }}>{title}</span>
      </div>
      <div className="font-semibold text-base" style={{ color: "#1a2744" }}>{value}</div>
      <div className="text-xs" style={{ color: "#9ca3af" }}>{sub}</div>
    </motion.div>
  );
}
