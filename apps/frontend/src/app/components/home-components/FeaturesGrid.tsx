import type { ReactNode } from "react";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

type Feature = {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  footer: ReactNode;
};

const chip = "font-label-sm text-label-sm px-3 py-1 rounded-full";

const FEATURES: Feature[] = [
  {
    icon: "pattern",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
    title: "Automated PII & Masking",
    description:
      "Auto-detects and masks Names, CNIC/SSN, credit card numbers, IBANs, and biometric records across unstructured PDFs and scanned forms with zero manual tag intervention.",
    footer: (
      <div className="flex flex-wrap gap-2 pt-4">
        <span
          className={`${chip} bg-surface-container text-on-surface font-medium`}
        >
          Names
        </span>
        <span className={`${chip} bg-primary-fixed text-primary font-bold`}>
          CNIC / SSN
        </span>
        <span
          className={`${chip} bg-surface-container text-on-surface font-medium`}
        >
          Credit Cards
        </span>
        <span
          className={`${chip} bg-surface-container text-on-surface font-medium`}
        >
          Addresses
        </span>
      </div>
    ),
  },
  {
    icon: "psychology",
    iconBg: "bg-secondary-fixed",
    iconColor: "text-secondary",
    title: "Context-Aware AI Guardrails",
    description:
      "AWS Bedrock powered foundation models understand legal and clinical context, preventing over-redaction while blocking 100% of sensitive leakage in complex tabular structures.",
    footer: (
      <div className="pt-4">
        <div className="inline-flex max-w-full items-start gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface">
          <Icon
            name="neurology"
            className="text-secondary text-[18px] shrink-0 mt-0.5"
          />
          <span className="font-semibold break-words min-w-0">
            AWS Bedrock LLMs • Verifiable Zero-Data Retention
          </span>
        </div>
      </div>
    ),
  },
  {
    icon: "compare",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    title: "Side-by-Side Audit Comparison Engine",
    description:
      "Inspect original versus masked outputs in real-time with granular diff overlays, confidence scores, and instant reversible redactions with single-click manual overrides.",
    footer: (
      <div className="pt-4 flex flex-col gap-2">
        <div className="flex justify-between gap-2 font-label-sm text-label-sm">
          <span className="text-on-surface-variant">
            Redaction Certainty Score
          </span>
          <span className="text-primary font-bold shrink-0">99.85%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
          <div className="h-full bg-gradient-to-r from-secondary-fixed via-primary to-primary-container w-[99.8%]" />
        </div>
      </div>
    ),
  },
  {
    icon: "admin_panel_settings",
    iconBg: "bg-surface-container-high",
    iconColor: "text-on-surface",
    title: "Role-Based Enterprise Security (RBAC)",
    description:
      "Granular clearance tiers, immutable audit logs, tamper-evident watermarks, and cryptographic compliance certificates for global enterprise privacy operations.",
    footer: (
      <div className="flex flex-wrap gap-2 pt-4">
        <span
          className={`${chip} bg-surface-container text-on-surface font-medium`}
        >
          SAML 2.0 / Okta
        </span>
        <span
          className={`${chip} bg-surface-container text-on-surface font-medium`}
        >
          KMS Encryption
        </span>
        <span
          className={`${chip} bg-secondary-fixed text-on-secondary-fixed-variant font-bold`}
        >
          Immutable Audit Logs
        </span>
      </div>
    ),
  },
];

export default function FeaturesGrid() {
  return (
    <section
      id="features"
      className="w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-10 scroll-mt-24"
    >
      <SectionHeading
        eyebrow="Enterprise Architectural Modules"
        title="Engineered for Zero-Trust Auditing"
        description="Complete operational oversight for high-velocity compliance teams, risk officers, and DevOps data pipelines."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="min-w-0 bg-surface-container-lowest/90 backdrop-blur-md rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${f.iconBg} ${f.iconColor}`}
              >
                <Icon name={f.icon} className="text-[22px] sm:text-[24px]" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-3 break-words">
                {f.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 sm:mb-6 leading-relaxed">
                {f.description}
              </p>
            </div>
            {f.footer}
          </div>
        ))}
      </div>
    </section>
  );
}