"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-sm p-16 relative overflow-hidden"
          style={{
            border: "1px solid rgba(201,168,76,0.2)",
            background: "#0d0d0f",
          }}
        >
          {/* Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 opacity-30 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #c9a84c, transparent)" }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)",
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest uppercase mb-6"
            style={{ color: "#c9a84c" }}
          >
            Private Beta
          </motion.div>

          <h2
            className="font-display text-5xl md:text-6xl leading-tight mb-6"
            style={{ color: "#e4e4e7" }}
          >
            Ready to see the
            <span className="text-gold-gradient italic block">
              full picture?
            </span>
          </h2>

          <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: "#71717a" }}>
            Atlas is currently in private beta. Apply for early access and 
            be among the first to experience a truly comprehensive wealth operating system.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group flex items-center gap-2 px-10 py-4 rounded-sm font-medium tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_50px_rgba(201,168,76,0.3)]"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                color: "#09090b",
              }}
            >
              Apply for Early Access
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="text-sm"
              style={{ color: "#52525b" }}
            >
              Schedule a demo instead →
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8">
            {["No credit card required", "Setup in minutes", "Cancel anytime"].map(
              (text) => (
                <div key={text} className="flex items-center gap-2 text-xs" style={{ color: "#3f3f46" }}>
                  <div className="w-1 h-1 rounded-full" style={{ background: "#3f3f46" }} />
                  {text}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
