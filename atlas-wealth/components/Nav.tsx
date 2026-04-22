"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = ["Platform", "Modules", "Security", "Pricing", "About"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
        style={{
          background: scrolled
            ? "rgba(9,9,11,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className="w-8 h-8 rounded-sm flex items-center justify-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
              }}
            >
              <span className="font-display font-semibold text-black text-lg leading-none">A</span>
            </div>
            <div>
              <span className="font-display text-lg tracking-wide text-white">Atlas</span>
              <span className="font-mono text-xs text-[#71717a] ml-1.5 tracking-widest uppercase">Wealth OS</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm tracking-wide transition-colors duration-200"
                style={{ color: "#71717a" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#e4e4e7")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#71717a")}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm px-4 py-2 rounded transition-colors duration-200"
              style={{ color: "#71717a" }}
            >
              Sign in
            </a>
            <a
              href="#"
              className="text-sm px-5 py-2 rounded font-medium transition-all duration-200 hover:brightness-110"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                color: "#09090b",
              }}
            >
              Request Access
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#71717a" }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[60px] z-40 p-6 flex flex-col gap-4"
            style={{
              background: "rgba(9,9,11,0.97)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(20px)",
            }}
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-base py-2"
                style={{ color: "#a1a1aa" }}
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 text-sm px-5 py-3 rounded font-medium text-center"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                color: "#09090b",
              }}
            >
              Request Access
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
