"use client";

const cols = [
  {
    title: "Platform",
    links: ["Asset Discovery", "Entity Management", "Tax Intelligence", "Reporting", "Compliance Vault", "Risk Engine"],
  },
  {
    title: "Integrations",
    links: ["Plaid", "Coinbase", "Wise", "Revolut", "Open Banking", "Broker APIs"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Security", "GDPR", "Cookie Policy"],
  },
];

export default function Footer() {
  return (
    <footer
      className="px-6 py-16"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-7 h-7 rounded-sm flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}
              >
                <span className="font-display font-semibold text-black text-base">A</span>
              </div>
              <span className="font-display text-base text-white">Atlas</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "#3f3f46" }}>
              Your Personal Family Office Operating System.
            </p>
            <div className="mt-4 font-mono text-xs" style={{ color: "#3f3f46" }}>
              © 2025 Atlas Wealth OS
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: "#52525b" }}
              >
                {col.title}
              </div>
              <div className="space-y-2.5">
                {col.links.map((link) => (
                  <div key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#3f3f46" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#71717a")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#3f3f46")}
                    >
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-xs" style={{ color: "#3f3f46" }}>
            Atlas is not a registered investment advisor. Nothing on this platform
            constitutes financial, legal, or tax advice.
          </p>
          <div className="flex items-center gap-1">
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#4ade80" }}
            />
            <span className="font-mono text-xs" style={{ color: "#3f3f46" }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
