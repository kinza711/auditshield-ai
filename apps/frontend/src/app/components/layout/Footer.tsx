import Link from "next/link";

const LOGO_SRC = "/logo.png";

const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Continuous Auditing", href: "#" },
      { label: "Evidence Graph", href: "#" },
      { label: "Policy Engine", href: "#" },
      { label: "Cloud Integrations", href: "#" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "GDPR Guard", href: "#" },
      { label: "HIPAA Vault", href: "#" },
      { label: "PCI-DSS Framework", href: "#" },
      { label: "FedRAMP Readiness", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API Reference", href: "#" },
      { label: "Audit CLI & SDK", href: "#" },
      { label: "Webhooks", href: "#" },
      { label: "System Status", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Trust Center", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Contact Sales", href: "#" },
    ],
  },
];

const CERT_BADGES = ["SOC 2 Type II", "ISO 27001"];
const COMPLIANCE_PILLS = ["GDPR Ready", "PCI-DSS v4.0", "HIPAA Assured"];

export default function Footer() {
  return (
    <footer className="w-full mt-space-xl bg-surface-container-low/90 backdrop-blur-xl border-t border-outline-variant/30 py-space-xl">
      <div className="max-w-[1600px] mx-auto px-margin flex flex-col gap-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-gutter lg:items-center">
          {/* Brand block */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_SRC}
                alt="AuditShield AI Logo"
                className="h-32 w-auto object-contain"
              />
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Autonomous security governance and deterministic compliance
              verification engineering trust across multi-cloud enterprise
              architectures.
            </p>
            <div className="flex items-center gap-space-sm mt-space-xs">
              {CERT_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-lowest border border-outline-variant/40 font-label-sm text-label-sm text-secondary"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div
              key={col.title}
              className="flex flex-col gap-space-sm lg:pt-34"
            >
              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface">
                {col.title}
              </span>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-space-lg border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-space-md">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2026 AuditShield AI, Inc. Enterprise Grade Zero-Trust Assurance.
            All rights reserved by KINZA.
          </p>
          <div className="flex items-center gap-space-md">
            {COMPLIANCE_PILLS.map((pill) => (
              <span
                key={pill}
                className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
