"use client";
import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react";

const stats = [
  { value: "$4.2T", label: "Assets tracked globally" },
  { value: "180+", label: "Jurisdictions supported" },
  { value: "99.99%", label: "Platform uptime" },
  { value: "SOC 2", label: "Type II certified" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-6">
      {/* Radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 80%)",
        }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase"
        style={{
          border: "1px solid rgba(201,168,76,0.3)",
          color: "#c9a84c",
          background: "rgba(201,168,76,0.06)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full inline-block animate-pulse"
          style={{ background: "#c9a84c" }}
        />
        Private Beta — By Invitation Only
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center max-w-5xl"
      >
        <h1
          className="font-display leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.02em" }}
        >
          <span className="text-white block">Your Private</span>
          <span className="shimmer-text block italic">Family Office</span>
          <span className="text-white block">Operating System</span>
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#71717a" }}
        >
          A complete system of record for ownership, value, and movement. 
          Model your entities, track global assets, understand tax exposure — 
          with the sophistication once reserved for institutions.
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-10"
      >
        <a
          href="#"
          className="group flex items-center gap-2 px-8 py-4 rounded-sm font-medium text-sm tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_40px_rgba(201,168,76,0.25)]"
          style={{
            background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
            color: "#09090b",
          }}
        >
          Request Access
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
        <a
          href="#modules"
          className="flex items-center gap-2 px-8 py-4 rounded-sm text-sm tracking-wide transition-all duration-300"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#a1a1aa",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "rgba(201,168,76,0.3)";
            el.style.color = "#e4e4e7";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "rgba(255,255,255,0.1)";
            el.style.color = "#a1a1aa";
          }}
        >
          Explore the Platform
        </a>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px w-full max-w-3xl"
        style={{
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-6 px-4 text-center"
            style={{
              background: "#111113",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
          >
            <span
              className="font-display text-2xl font-light mb-1"
              style={{ color: "#c9a84c" }}
            >
              {stat.value}
            </span>
            <span className="text-xs tracking-wide" style={{ color: "#52525b" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Floating indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute left-8 top-1/3 hidden xl:block"
      >
        <FloatingCard icon={<Globe size={14} />} title="Entity Graph" sub="12 entities mapped" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute right-8 top-1/2 hidden xl:block"
      >
        <FloatingCard icon={<TrendingUp size={14} />} title="Net Worth" sub="+14.2% YTD" positive />
      </motion.div>
    </section>
  );
}

function FloatingCard({
  icon,
  title,
  sub,
  positive,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
  positive?: boolean;
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="px-4 py-3 rounded-sm text-left"
      style={{
        background: "#111113",
        border: "1px solid rgba(255,255,255,0.08)",
        minWidth: 170,
      }}
    >
      <div
        className="flex items-center gap-2 mb-1"
        style={{ color: positive ? "#4ade80" : "#c9a84c" }}
      >
        {icon}
        <span className="text-xs font-mono">{title}</span>
      </div>
      <span className="text-xs" style={{ color: "#71717a" }}>
        {sub}
      </span>
    </motion.div>
  );
}
