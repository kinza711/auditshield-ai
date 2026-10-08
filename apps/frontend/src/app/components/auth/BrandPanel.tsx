import Icon from "../../components/ui/Icon";

export default function BrandPanel() {
  return (
    <div className="w-full lg:w-1/2 p-space-lg sm:p-space-xl flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#E0EDFB] via-[#FCE1E2] to-[#FCC7CF]">
      {/* Dotted grid watermark */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="audit-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#326288"
                strokeDasharray="2 2"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#audit-grid)" />
        </svg>
      </div>

      {/* Top: identity + tagline */}
      <div className="relative z-10 space-y-space-md">
        <div className="flex items-center justify-between gap-space-sm flex-wrap">
          <div className="flex items-center gap-space-sm bg-surface/80 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="AuditShield AI Logo"
              className="h-7 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-space-xs bg-surface/90 backdrop-blur px-space-sm py-1 rounded-full text-secondary font-label-sm text-label-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Audit Engine v4.2 • Operational</span>
          </div>
        </div>

        <div>
          <p className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">
            Continuous Regulatory Intelligence
          </p>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight mt-1">
            Deterministic Zero-Trust Redaction
          </h2>
        </div>
      </div>

      {/* Middle: dark verification widget */}
      <div className="relative z-10 my-space-lg rounded-2xl bg-inverse-surface text-inverse-on-surface p-space-lg shadow-xl shadow-slate-900/15 overflow-hidden">
        <div className="flex items-center justify-between mb-space-sm">
          <div className="flex items-center gap-space-xs">
            <Icon
              name="shield_locked"
              className="text-primary-fixed-dim text-[20px]"
            />
            <span className="font-label-sm text-label-sm text-surface-variant font-semibold uppercase tracking-wider">
              Zero Storage Protocol
            </span>
          </div>
          <span className="font-label-sm text-label-sm bg-surface-container-highest/20 text-inverse-primary px-space-sm py-0.5 rounded-full">
            FIPS 140-2
          </span>
        </div>

        <p className="font-headline-sm text-headline-sm text-surface-bright font-medium leading-snug">
          “Enterprise-grade data masking with zero local storage risk.”
        </p>

        <div className="mt-space-md space-y-space-xs bg-on-background/40 rounded-xl p-space-md">
          <div className="flex items-center justify-between font-body-sm text-body-sm text-surface-variant">
            <span className="flex items-center gap-space-xs">
              <Icon
                name="lock_clock"
                className="text-[16px] text-secondary-fixed"
              />
              Session Quarantine
            </span>
            <span className="font-label-md text-label-md text-surface-bright font-semibold">
              Active AES-256
            </span>
          </div>
          <div className="flex items-center justify-between font-body-sm text-body-sm text-surface-variant">
            <span className="flex items-center gap-space-xs">
              <Icon
                name="memory"
                className="text-[16px] text-primary-fixed-dim"
              />
              Ephemeral Memory
            </span>
            <span className="font-label-md text-label-md text-emerald-400 font-semibold">
              0 persistent bytes
            </span>
          </div>
          <div className="flex items-center justify-between font-body-sm text-body-sm text-surface-variant pt-space-xs">
            <span className="font-label-sm text-label-sm text-outline-variant">
              Live Audit Sig
            </span>
            <code className="font-mono text-label-sm text-secondary-fixed-dim bg-inverse-surface px-space-sm py-0.5 rounded">
              0x7f88...b912 [VERIFIED]
            </code>
          </div>
        </div>

        <div className="mt-space-md flex items-center justify-between bg-inverse-surface/80 p-space-sm rounded-lg">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm shadow-primary/30">
              <Icon name="verified" className="text-[18px]" />
            </div>
            <div>
              <p className="font-label-md text-label-md text-surface-bright font-semibold">
                Automated Masking Matrix
              </p>
              <p className="font-body-sm text-body-sm text-surface-variant">
                1,420 regulatory vectors synced
              </p>
            </div>
          </div>
          <Icon
            name="sync"
            className="text-secondary-fixed animate-spin text-[20px] [animation-duration:9s]"
          />
        </div>
      </div>

      {/* Bottom: quote + badges */}
      <div className="relative z-10 space-y-space-md">
        <blockquote className="bg-surface/85 backdrop-blur-md p-space-md rounded-xl shadow-sm">
          <p className="font-body-sm text-body-sm text-on-surface italic leading-relaxed">
            “AuditShield eliminated 100% of PII leakage across our unstructured
            legal pipelines.”
          </p>
          <div className="mt-space-xs flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface font-bold">
              Global FinTech CISO
            </span>
            <span className="font-label-sm text-label-sm text-secondary font-medium">
              Tier-1 Bank
            </span>
          </div>
        </blockquote>

        <div className="flex flex-wrap items-center gap-space-xs">
          {["AWS Bedrock Protected", "SOC 2 Type II", "HIPAA Ready"].map(
            (b) => (
              <span
                key={b}
                className="font-label-sm text-label-sm bg-surface/90 text-secondary px-space-sm py-1 rounded-full shadow-sm font-semibold"
              >
                {b}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
