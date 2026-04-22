"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Modules", href: "#modules" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(248,247,244,0.95)",
          borderBottom: scrolled ? "1px solid #e5e3de" : "1px solid transparent",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded flex items-center justify-center"
              style={{ background: "#1a2744" }}
            >
              <span className="font-display font-bold text-white text-sm">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-semibold text-sm tracking-tight" style={{ color: "#1a2744" }}>Atlas</span>
              <span className="font-mono text-[10px] tracking-widest" style={{ color: "#9ca3af" }}>WEALTH OS</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: "#6b7280" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#1a2744")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#6b7280")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium px-4 py-2 transition-colors" style={{ color: "#6b7280" }}>
              Sign in
            </a>
            <a
              href="#"
              className="text-sm font-semibold px-5 py-2.5 rounded transition-all duration-150 hover:opacity-90"
              style={{ background: "#1a2744", color: "#fff" }}
            >
              Request Access
            </a>
          </div>

          <button className="md:hidden p-1" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: "#4a5568" }}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-16 z-40 p-6 flex flex-col gap-4"
            style={{ background: "#fff", borderBottom: "1px solid #e5e3de", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
          >
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium py-1.5" style={{ color: "#1a2744" }} onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#" className="mt-2 text-sm font-semibold px-5 py-3 rounded text-center" style={{ background: "#1a2744", color: "#fff" }}>
              Request Access
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
