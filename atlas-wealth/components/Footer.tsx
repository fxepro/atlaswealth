"use client";

const cols = [
  { title: "Platform", links: ["Asset Discovery", "Entity Management", "Tax Intelligence", "Reporting", "Compliance Vault", "Risk Engine"] },
  { title: "Integrations", links: ["Plaid", "Coinbase", "Wise", "Revolut", "Open Banking", "Broker APIs"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Security", "GDPR"] },
];

export default function Footer() {
  return (
    <footer className="px-6 py-16" style={{ background: "#fff", borderTop: "1px solid #e5e3de" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: "#1a2744" }}>
                <span className="font-display font-bold text-white text-xs">A</span>
              </div>
              <span className="font-semibold text-sm" style={{ color: "#1a2744" }}>Atlas Wealth OS</span>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "#9ca3af" }}>
              Your Personal Family Office Operating System.
            </p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#1a7a4a" }} />
              <span className="text-xs" style={{ color: "#9ca3af" }}>All systems operational</span>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold mb-4" style={{ color: "#1a2744" }}>{col.title}</div>
              <div className="space-y-2.5">
                {col.links.map((link) => (
                  <div key={link}>
                    <a href="#" className="text-sm transition-colors duration-150"
                      style={{ color: "#9ca3af" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#4a5568")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9ca3af")}>
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: "1px solid #f3f2ef" }}>
          <p className="text-xs" style={{ color: "#d4d0c8" }}>
            © 2025 Atlas Wealth OS. Atlas is not a registered investment advisor.
            Nothing on this platform constitutes financial, legal, or tax advice.
          </p>
          <span className="text-xs font-mono" style={{ color: "#d4d0c8" }}>v1.0.0-beta</span>
        </div>
      </div>
    </footer>
  );
}
