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
    <footer className="w-full mt-space-xl bg-surface-container-low/90 backdrop-blur-xl border-t border-outline-variant/30 py-10 sm:py-space-xl">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-margin flex flex-col gap-8 sm:gap-space-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-8 sm:gap-gutter xl:items-center">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-4 xl:col-span-2 flex flex-col gap-space-md min-w-0">
            <div className="flex items-center gap-space-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_SRC}
                alt="AuditShield AI Logo"
                className="h-20 sm:h-24 xl:h-32 w-auto object-contain"
              />
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm md:max-w-xl xl:max-w-sm">
              Autonomous security governance and deterministic compliance
              verification engineering trust across multi-cloud enterprise
              architectures.
            </p>
            <div className="flex flex-wrap items-center gap-space-sm mt-space-xs">
              {CERT_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container-lowest border border-outline-variant/40 font-label-sm text-label-sm text-secondary whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div
              key={col.title}
              className="min-w-0 flex flex-col gap-space-sm xl:pt-34"
            >
              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface">
                {col.title}
              </span>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-0.5 font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors break-words"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-space-lg border-t border-outline-variant/30 flex flex-col lg:flex-row items-center lg:justify-between gap-space-md text-center lg:text-left">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2026 AuditShield AI, Inc. Enterprise Grade Zero-Trust Assurance.
            All rights reserved by KINZA.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-space-md">
            {COMPLIANCE_PILLS.map((pill) => (
              <span
                key={pill}
                className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant whitespace-nowrap"
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