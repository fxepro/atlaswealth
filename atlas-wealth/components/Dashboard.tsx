"use client";
import { motion } from "framer-motion";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";

const wealthData = [
  { month: "Jan", value: 18.2 },
  { month: "Feb", value: 19.1 },
  { month: "Mar", value: 18.6 },
  { month: "Apr", value: 20.3 },
  { month: "May", value: 21.8 },
  { month: "Jun", value: 21.2 },
  { month: "Jul", value: 22.5 },
  { month: "Aug", value: 23.1 },
  { month: "Sep", value: 22.8 },
  { month: "Oct", value: 23.9 },
  { month: "Nov", value: 24.1 },
  { month: "Dec", value: 24.7 },
];

const allocations = [
  { label: "Private Equity", value: 38, color: "#c9a84c" },
  { label: "Real Estate", value: 28, color: "#60a5fa" },
  { label: "Public Equities", value: 18, color: "#4ade80" },
  { label: "Crypto", value: 9, color: "#a78bfa" },
  { label: "Cash & Other", value: 7, color: "#71717a" },
];

const alerts = [
  { type: "warn", text: "Singapore entity filing due in 8 days", entity: "JT Holdings" },
  { type: "info", text: "BTC position +22.4% this quarter", entity: "Crypto Wallet" },
  { type: "warn", text: "Cayman trust renewal approaching", entity: "Thornton Trust" },
];

export default function Dashboard() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: "#c9a84c" }}
            >
              Live Dashboard
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl leading-tight"
              style={{ color: "#e4e4e7" }}
            >
              Your wealth,
              <span className="text-gold-gradient italic block">
                always in focus
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm max-w-xs"
            style={{ color: "#52525b" }}
          >
            Updated in real-time across all entities, currencies, and asset classes.
          </motion.p>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-sm overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
            background: "#0d0d0f",
          }}
        >
          {/* Mock browser chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex gap-1.5">
              {["#3f3f46", "#3f3f46", "#3f3f46"].map((c, i) => (
                <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div
              className="flex-1 mx-4 rounded-sm px-3 py-1 text-xs font-mono"
              style={{ background: "#111113", color: "#52525b", maxWidth: 260 }}
            >
              app.atlaswealth.com/dashboard
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-6 grid md:grid-cols-[1fr_1fr_320px] gap-4">
            {/* Net worth + chart */}
            <div
              className="md:col-span-2 rounded-sm p-5"
              style={{
                background: "#111113",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs font-mono mb-1" style={{ color: "#52525b" }}>
                    TOTAL NET WORTH
                  </div>
                  <div
                    className="font-display text-4xl"
                    style={{ color: "#c9a84c" }}
                  >
                    $24,712,400
                  </div>
                  <div className="text-xs font-mono mt-1" style={{ color: "#4ade80" }}>
                    ↑ $2,871,400 · +13.2% this year
                  </div>
                </div>
                <div className="flex gap-2">
                  {["1M", "6M", "1Y", "ALL"].map((t) => (
                    <button
                      key={t}
                      className="text-xs px-2 py-1 rounded-sm font-mono transition-colors"
                      style={{
                        background: t === "1Y" ? "rgba(201,168,76,0.15)" : "transparent",
                        color: t === "1Y" ? "#c9a84c" : "#52525b",
                        border: t === "1Y" ? "1px solid rgba(201,168,76,0.3)" : "1px solid transparent",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={wealthData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c9a84c" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="#c9a84c" stopOpacity={0.01} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tick={{ fill: "#3f3f46", fontSize: 10, fontFamily: "DM Mono" }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      background: "#18181b",
                      border: "1px solid rgba(201,168,76,0.2)",
                      borderRadius: 2,
                      fontSize: 11,
                      fontFamily: "DM Mono",
                      color: "#c9a84c",
                    }}
                    formatter={(v) => [`$${v}M`, "Net Worth"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#c9a84c"
                    strokeWidth={1.5}
                    fill="url(#goldGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4">
              {/* Allocation */}
              <div
                className="rounded-sm p-5 flex-1"
                style={{
                  background: "#111113",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="text-xs font-mono mb-4" style={{ color: "#52525b" }}>
                  ASSET ALLOCATION
                </div>
                <div className="space-y-3">
                  {allocations.map((a) => (
                    <div key={a.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span style={{ color: "#a1a1aa" }}>{a.label}</span>
                        <span className="font-mono" style={{ color: a.color }}>
                          {a.value}%
                        </span>
                      </div>
                      <div
                        className="h-1 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${a.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full rounded-full"
                          style={{ background: a.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alerts */}
              <div
                className="rounded-sm p-5"
                style={{
                  background: "#111113",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="text-xs font-mono mb-3" style={{ color: "#52525b" }}>
                  ALERTS
                </div>
                <div className="space-y-3">
                  {alerts.map((a, i) => (
                    <div key={i} className="flex gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{
                          background: a.type === "warn" ? "#fbbf24" : "#60a5fa",
                        }}
                      />
                      <div>
                        <div className="text-xs" style={{ color: "#a1a1aa" }}>
                          {a.text}
                        </div>
                        <div className="text-xs font-mono mt-0.5" style={{ color: "#52525b" }}>
                          {a.entity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
