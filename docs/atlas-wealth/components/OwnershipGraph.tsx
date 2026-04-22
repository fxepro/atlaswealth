"use client";
import { motion } from "framer-motion";

export default function OwnershipGraph() {
  return (
    <section id="platform" className="py-24 px-6" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="text-xs font-mono font-medium tracking-widest uppercase mb-3" style={{ color: "#b5882a" }}>
              Core Differentiator
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5" style={{ color: "#1a2744", letterSpacing: "-0.02em" }}>
              The Ownership <span style={{ color: "#b5882a", fontStyle: "italic" }}>Graph</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#4a5568" }}>
              Model the real-world complexity of your wealth structure. Who owns what,
              through which entity, in which jurisdiction — visualized as a living graph
              that updates as your structures evolve.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Total Entities", value: "8", note: "Across 4 jurisdictions" },
              { label: "Net Worth", value: "$24.7M", note: "+13.2% year to date", highlight: true },
              { label: "Asset Classes", value: "6", note: "Public, private, real estate…" },
              { label: "Compliance", value: "All Clear", note: "1 deadline in 8 days" },
            ].map((c, i) => (
              <div key={i} className="p-4 rounded-lg" style={{
                background: c.highlight ? "#fdf8ee" : "#f8f7f4",
                border: `1px solid ${c.highlight ? "#d4a843" : "#e5e3de"}`,
              }}>
                <div className="text-xs mb-1" style={{ color: "#9ca3af" }}>{c.label}</div>
                <div className="font-semibold text-xl mb-0.5" style={{ color: c.highlight ? "#b5882a" : "#1a2744" }}>{c.value}</div>
                <div className="text-xs" style={{ color: "#9ca3af" }}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden relative"
          style={{ border: "1px solid #e5e3de", background: "#f8f7f4", height: 460 }}
        >
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #d4d0c8 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 460" preserveAspectRatio="xMidYMid meet">
            {/* Lines */}
            {[
              [450,75,215,205], [450,75,450,205], [450,75,685,205],
              [215,245,130,360], [215,245,320,360],
              [450,245,555,360],
              [685,245,760,360],
            ].map(([x1,y1,x2,y2], i) => (
              <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#d4d0c8" strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
              />
            ))}

            {/* Level 1 */}
            <GraphNode cx={450} cy={55} r={26} delay={0} label="James Thornton" sub="Individual · US" fill="#1a2744" textColor="#fff" />
            {/* Level 2 */}
            <GraphNode cx={215} cy={225} r={22} delay={0.25} label="Thornton Trust" sub="Revocable · Cayman" fill="#fff" stroke="#1a7a4a" textColor="#1a7a4a" />
            <GraphNode cx={450} cy={225} r={22} delay={0.3} label="Atlas LLC" sub="Delaware · US" fill="#fff" stroke="#1a2744" textColor="#1a2744" />
            <GraphNode cx={685} cy={225} r={22} delay={0.35} label="JT Holdings" sub="Corp · Singapore" fill="#fff" stroke="#b5882a" textColor="#b5882a" />
            {/* Level 3 */}
            <GraphNode cx={130} cy={380} r={18} delay={0.5} label="London RE" sub="£4.2M" fill="#fff" stroke="#1a7a4a" textColor="#1a7a4a" />
            <GraphNode cx={320} cy={380} r={18} delay={0.55} label="Foundation" sub="Geneva" fill="#fff" stroke="#1a7a4a" textColor="#1a7a4a" />
            <GraphNode cx={555} cy={380} r={18} delay={0.6} label="Crypto" sub="12 assets" fill="#fff" stroke="#1a2744" textColor="#1a2744" />
            <GraphNode cx={760} cy={380} r={18} delay={0.65} label="Series A" sub="$2.1M" fill="#fff" stroke="#b5882a" textColor="#b5882a" />
          </svg>

          {/* Legend */}
          <div className="absolute bottom-5 left-6 flex items-center gap-6">
            {[
              { color: "#1a2744", label: "Individual / LLC" },
              { color: "#1a7a4a", label: "Trust / Foundation" },
              { color: "#b5882a", label: "Corporation" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                <span className="text-xs" style={{ color: "#6b7280" }}>{l.label}</span>
              </div>
            ))}
          </div>

          {/* Tag */}
          <div className="absolute top-5 right-5 px-3 py-1.5 rounded text-xs font-medium"
            style={{ background: "#fff", border: "1px solid #e5e3de", color: "#6b7280" }}>
            Interactive · Drill-down enabled
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GraphNode({ cx, cy, r, delay, label, sub, fill, stroke, textColor }: {
  cx: number; cy: number; r: number; delay: number; label: string; sub: string;
  fill: string; stroke?: string; textColor: string;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
    >
      <circle cx={cx} cy={cy} r={r + 6} fill={stroke || fill} opacity={0.08} />
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke={stroke || "#1a2744"} strokeWidth="1.5" />
      <text x={cx} y={cy + r + 16} textAnchor="middle" fill="#1a2744" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500">{label}</text>
      <text x={cx} y={cy + r + 28} textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="Inter, sans-serif">{sub}</text>
    </motion.g>
  );
}
