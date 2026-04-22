"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-6" style={{ background: "#f8f7f4" }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-14 relative overflow-hidden"
          style={{ background: "#1a2744" }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative">
            <div className="text-xs font-mono font-medium tracking-widest uppercase mb-4" style={{ color: "#b5882a" }}>
              Private Beta
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5" style={{ color: "#fff", letterSpacing: "-0.02em" }}>
              Ready to see the{" "}
              <span style={{ color: "#d4a843", fontStyle: "italic" }}>full picture?</span>
            </h2>
            <p className="text-base mb-10 max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Atlas is currently in private beta. Apply for early access and be among the first
              to experience a truly comprehensive wealth operating system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold transition-all duration-150 hover:opacity-95"
                style={{ background: "#b5882a", color: "#fff" }}>
                Apply for Early Access <ArrowRight size={15} />
              </a>
              <a href="#" className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
                Schedule a demo →
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-8">
              {["No credit card required", "Setup in minutes", "Cancel anytime"].map((text) => (
                <div key={text} className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                  <div className="w-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
