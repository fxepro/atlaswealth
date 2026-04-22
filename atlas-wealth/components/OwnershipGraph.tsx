"use client";
import { motion } from "framer-motion";

// Static SVG-based ownership graph visualization
export default function OwnershipGraph() {
  return (
    <section id="platform" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "#c9a84c" }}
          >
            Core Differentiator
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl leading-tight mb-6"
            style={{ color: "#e4e4e7" }}
          >
            The Ownership
            <span className="text-gold-gradient block italic">Graph</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: "#71717a" }}
            className="text-lg leading-relaxed"
          >
            Model the real-world complexity of your wealth structure. Who owns what,
            through which entity, in which jurisdiction — visualized in a living graph
            that updates as you grow.
          </motion.p>
        </div>

        {/* Graph Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-sm overflow-hidden"
          style={{
            background: "#0d0d0f",
            border: "1px solid rgba(255,255,255,0.07)",
            height: 480,
          }}
        >
          {/* Graph grid bg */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 480" preserveAspectRatio="xMidYMid meet">
            {/* Connection lines */}
            {/* Root → Trust */}
            <motion.line x1="450" y1="80" x2="220" y2="210"
              stroke="rgba(201,168,76,0.3)" strokeWidth="1.5" strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            {/* Root → Corp */}
            <motion.line x1="450" y1="80" x2="680" y2="210"
              stroke="rgba(201,168,76,0.3)" strokeWidth="1.5" strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            {/* Root → LLC */}
            <motion.line x1="450" y1="80" x2="450" y2="210"
              stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.35 }}
            />
            {/* Trust → RE */}
            <motion.line x1="220" y1="250" x2="140" y2="370"
              stroke="rgba(74,222,128,0.25)" strokeWidth="1.5" strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            {/* Trust → Foundation */}
            <motion.line x1="220" y1="250" x2="330" y2="370"
              stroke="rgba(74,222,128,0.25)" strokeWidth="1.5" strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.65 }}
            />
            {/* Corp → Startup */}
            <motion.line x1="680" y1="250" x2="760" y2="370"
              stroke="rgba(248,113,113,0.25)" strokeWidth="1.5" strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            {/* LLC → Crypto */}
            <motion.line x1="450" y1="250" x2="560" y2="370"
              stroke="rgba(96,165,250,0.25)" strokeWidth="1.5" strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.75 }}
            />

            {/* NODES */}
            {/* Root: Individual */}
            <GraphNode cx={450} cy={60} delay={0} label="James Thornton" sub="Individual · US" color="#c9a84c" r={26} />
            {/* Level 2 */}
            <GraphNode cx={220} cy={230} delay={0.3} label="Thornton Trust" sub="Revocable · Cayman" color="#4ade80" r={22} />
            <GraphNode cx={450} cy={230} delay={0.35} label="Atlas LLC" sub="Delaware · US" color="#60a5fa" r={22} />
            <GraphNode cx={680} cy={230} delay={0.4} label="JT Holdings" sub="Corp · Singapore" color="#f87171" r={22} />
            {/* Level 3 */}
            <GraphNode cx={140} cy={390} delay={0.6} label="London RE" sub="£4.2M · Residential" color="#4ade80" r={18} />
            <GraphNode cx={330} cy={390} delay={0.65} label="Philanthropy Fund" sub="Foundation · Geneva" color="#4ade80" r={18} />
            <GraphNode cx={560} cy={390} delay={0.7} label="Crypto Wallet" sub="ETH · BTC · 12 assets" color="#60a5fa" r={18} />
            <GraphNode cx={760} cy={390} delay={0.75} label="Series A Co" sub="Private · $2.1M" color="#f87171" r={18} />
          </svg>

          {/* Legend */}
          <div className="absolute bottom-6 left-6 flex items-center gap-6">
            {[
              { color: "#c9a84c", label: "Individual" },
              { color: "#4ade80", label: "Trust / Foundation" },
              { color: "#60a5fa", label: "LLC / Entity" },
              { color: "#f87171", label: "Corporation" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: item.color }}
                />
                <span className="text-xs font-mono" style={{ color: "#52525b" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Top right stats */}
          <div
            className="absolute top-5 right-5 px-4 py-3 rounded-sm text-right"
            style={{
              background: "rgba(9,9,11,0.8)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="font-mono text-xs mb-1" style={{ color: "#52525b" }}>
              Total Net Worth
            </div>
            <div className="font-display text-2xl" style={{ color: "#c9a84c" }}>
              $24.7M
            </div>
            <div className="font-mono text-xs mt-1" style={{ color: "#4ade80" }}>
              ↑ 12.4% YTD
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GraphNode({
  cx, cy, delay, label, sub, color, r,
}: {
  cx: number; cy: number; delay: number; label: string; sub: string; color: string; r: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {/* Glow */}
      <circle cx={cx} cy={cy} r={r + 8} fill={color} opacity={0.08} />
      {/* Ring */}
      <circle cx={cx} cy={cy} r={r + 1} fill="none" stroke={color} strokeWidth="0.5" opacity={0.4} />
      {/* Main circle */}
      <circle cx={cx} cy={cy} r={r} fill="#111113" stroke={color} strokeWidth="1.5" />
      {/* Label below */}
      <text x={cx} y={cy + r + 16} textAnchor="middle" fill="#a1a1aa" fontSize="10" fontFamily="'DM Mono', monospace">
        {label}
      </text>
      <text x={cx} y={cy + r + 28} textAnchor="middle" fill="#52525b" fontSize="9" fontFamily="'DM Mono', monospace">
        {sub}
      </text>
    </motion.g>
  );
}
