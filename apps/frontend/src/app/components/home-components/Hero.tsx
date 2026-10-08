import Icon from "../ui/Icon";

const COMPLIANCE_BADGES = [
  { icon: "verified_user", label: "HIPAA Security Rule" },
  { icon: "lock", label: "GDPR Article 32" },
  { icon: "shield", label: "PCI-DSS v4.0 Level 1" },
  { icon: "cloud_done", label: "FedRAMP Ready" },
];

const METRICS = [
  { label: "Detected PII", value: "5 Entities", color: "text-on-surface" },
  { label: "CNIC / SSN", value: "2 High-Risk", color: "text-primary" },
  { label: "Payment Cards", value: "1 Card (PCI)", color: "text-tertiary" },
  { label: "Audit Latency", value: "0.42 sec", color: "text-secondary" },
];

const highlight =
  "bg-primary-fixed text-primary px-2 py-0.5 rounded font-medium";
const LOGO_SRC = "logo.png";
export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-primary-fixed/40 via-secondary-fixed/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-96 left-4 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <section className="w-full pt-12 pb-20 flex flex-col items-center text-center relative">
        {/* Trust pill */}
        <div className="inline-flex items-center gap-space-sm px-4 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-sm mb-6">
          <span className="text-base leading-none">
            {" "}
            <img
              src={LOGO_SRC}
              alt="AuditShield AI Logo"
              className="h-7 w-auto object-contain"
            />
          </span>
          <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">
            SOC 2 Type II Certified
          </span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label-sm text-label-sm text-primary font-bold tracking-wide">
            AWS Bedrock Powered
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display-lg text-display-lg text-on-surface max-w-4xl tracking-tight mb-6">
          Automated AI Document Redaction &amp;{" "}
          <span className="bg-gradient-to-r from-primary via-primary-container to-tertiary bg-clip-text text-transparent">
            Compliance Audit
          </span>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
          Secure sensitive enterprise records across PDF, DOCX, and scanned
          forms in milliseconds. Powered by multimodal Bedrock AI guardrails
          with verifiable zero-retention privacy.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-space-md mb-12">
          <button
            type="button"
            className="font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-space-xl py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-space-sm cursor-pointer group"
          >
            <span>Start Free Audit</span>
          </button>
          <button
            type="button"
            className="font-label-lg text-label-lg bg-surface-container-lowest/80 backdrop-blur-md text-on-surface hover:bg-surface-container-lowest px-space-lg py-3.5 rounded-xl shadow-sm transition-all flex items-center gap-space-sm cursor-pointer"
          >
            <Icon name="play_circle" className="text-primary text-[20px]" />
            <span>Live Demo</span>
          </button>
        </div>

        {/* Compliance badges */}
        <div className="flex flex-col items-center gap-3 pt-2">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            Deterministic Defense for Regulated Stacks
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {COMPLIANCE_BADGES.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest/70 backdrop-blur-sm shadow-sm"
              >
                <Icon name={b.icon} className="text-secondary text-[18px]" />
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating verification card */}
        <div className="w-full max-w-4xl mt-12 text-left relative">
          <div className="bg-surface-container-lowest/90 backdrop-blur-2xl rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-secondary-fixed via-primary to-secondary-fixed animate-pulse" />

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-surface-container-low mb-6">
              {METRICS.map((m) => (
                <div key={m.label}>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    {m.label}
                  </span>
                  <p
                    className={`font-headline-md text-headline-md font-bold ${m.color}`}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

            {/* OCR preview */}
            <div className="p-5 rounded-xl bg-surface-container-lowest font-body-sm text-body-sm text-on-surface leading-loose relative">
              <span className="font-label-xl text-label-lg text-secondary uppercase block mb-2">
                Multimodal OCR Extract Preview
              </span>
              <p>
                Patient Name: <span className={highlight}>Sarah Jenkins</span>{" "}
                (DOB: 1984-06-12). Primary Insured ID:{" "}
                <span className={`${highlight} font-mono`}>
                  42101-8392019-1
                </span>
                . Billing reference confirmed via MasterCard ending in{" "}
                <span className={`${highlight} font-mono`}>
                  4532 •••• •••• 8821
                </span>
                . Attending physician Dr. Robert Caldwell marked diagnosis as
                confidential under HIPAA rule Section 164.514.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
