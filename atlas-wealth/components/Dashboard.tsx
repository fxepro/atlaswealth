"use client";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const wealthData = [
  { month: "Jan", value: 18.2 }, { month: "Feb", value: 19.1 },
  { month: "Mar", value: 18.6 }, { month: "Apr", value: 20.3 },
  { month: "May", value: 21.8 }, { month: "Jun", value: 21.2 },
  { month: "Jul", value: 22.5 }, { month: "Aug", value: 23.1 },
  { month: "Sep", value: 22.8 }, { month: "Oct", value: 23.9 },
  { month: "Nov", value: 24.1 }, { month: "Dec", value: 24.7 },
];

const allocations = [
  { label: "Private Equity", value: 38, color: "#1a2744" },
  { label: "Real Estate", value: 28, color: "#4a7c59" },
  { label: "Public Equities", value: 18, color: "#b5882a" },
  { label: "Crypto", value: 9, color: "#6b7280" },
  { label: "Cash & Other", value: 7, color: "#d4d0c8" },
];

const alerts = [
  { type: "warn", text: "Singapore entity filing due in 8 days", entity: "JT Holdings" },
  { type: "ok", text: "BTC position up 22.4% this quarter", entity: "Crypto Wallet" },
  { type: "warn", text: "Cayman trust renewal approaching", entity: "Thornton Trust" },
];

export default function Dashboard() {
  return (
    <section className="py-24 px-6" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-mono font-medium tracking-widest uppercase mb-3" style={{ color: "#b5882a" }}>Live Dashboard</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight" style={{ color: "#1a2744", letterSpacing: "-0.02em" }}>
            Your wealth,{" "}
            <span style={{ color: "#b5882a", fontStyle: "italic" }}>always in focus</span>
          </h2>
        </div>

        {/* Browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden shadow-xl"
          style={{ border: "1px solid #e5e3de" }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: "#f3f2ef", borderColor: "#e5e3de" }}>
            <div className="flex gap-1.5">
              {["#f87171","#fbbf24","#4ade80"].map((c, i) => (
                <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div className="flex-1 mx-4 px-3 py-1.5 rounded text-xs font-mono max-w-xs" style={{ background: "#fff", color: "#9ca3af", border: "1px solid #e5e3de" }}>
              app.atlaswealth.com/dashboard
            </div>
          </div>

          {/* Dashboard */}
          <div className="p-6 grid md:grid-cols-3 gap-5" style={{ background: "#f8f7f4" }}>
            {/* Net worth chart - spans 2 cols */}
            <div className="md:col-span-2 bg-white rounded-xl p-6" style={{ border: "1px solid #e5e3de" }}>
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="text-xs font-medium mb-1" style={{ color: "#9ca3af" }}>Total Net Worth</div>
                  <div className="font-display text-3xl font-semibold" style={{ color: "#1a2744" }}>$24,712,400</div>
                  <div className="text-xs font-medium mt-1" style={{ color: "#1a7a4a" }}>↑ $2,871,400 · +13.2% this year</div>
                </div>
                <div className="flex gap-1">
                  {["1M","6M","1Y","All"].map((t) => (
                    <button key={t} className="text-xs px-2.5 py-1 rounded font-medium transition-colors"
                      style={{ background: t === "1Y" ? "#1a2744" : "transparent", color: t === "1Y" ? "#fff" : "#9ca3af" }}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={160}>
                <AreaChart data={wealthData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <defs>
                    <linearGradient id="navyGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1a2744" stopOpacity={0.15} />
                      <stop offset="100%" stopColor="#1a2744" stopOpacity={0.01} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tick={{ fill: "#d4d0c8", fontSize: 10, fontFamily: "Inter" }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ background: "#fff", border: "1px solid #e5e3de", borderRadius: 8, fontSize: 12, fontFamily: "Inter", color: "#1a2744" }}
                    formatter={(v) => [`$${v}M`, "Net Worth"]}
                  />
                  <Area type="monotone" dataKey="value" stroke="#1a2744" strokeWidth={2} fill="url(#navyGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-5">
              {/* Allocation */}
              <div className="bg-white rounded-xl p-5 flex-1" style={{ border: "1px solid #e5e3de" }}>
                <div className="text-xs font-medium mb-4" style={{ color: "#9ca3af" }}>Asset Allocation</div>
                <div className="space-y-3">
                  {allocations.map((a) => (
                    <div key={a.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span style={{ color: "#4a5568" }}>{a.label}</span>
                        <span className="font-medium" style={{ color: "#1a2744" }}>{a.value}%</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#f3f2ef" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${a.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className="h-full rounded-full"
                          style={{ background: a.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alerts */}
              <div className="bg-white rounded-xl p-5" style={{ border: "1px solid #e5e3de" }}>
                <div className="text-xs font-medium mb-3" style={{ color: "#9ca3af" }}>Alerts</div>
                <div className="space-y-3">
                  {alerts.map((a, i) => (
                    <div key={i} className="flex gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: a.type === "warn" ? "#b5882a" : "#1a7a4a" }} />
                      <div>
                        <div className="text-xs leading-snug" style={{ color: "#4a5568" }}>{a.text}</div>
                        <div className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>{a.entity}</div>
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
