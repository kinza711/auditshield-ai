import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

const STEPS = [
  {
    badge: "01 / INGEST",
    badgeClass: "bg-surface-container text-on-surface",
    icon: "cloud_upload",
    iconColor: "text-secondary",
    title: "Upload Document",
    description: "Drag & drop confidential files or pipe records via REST API.",
    meta: "Format: PDF, TIFF, DOCX, DICOM",
  },
  {
    badge: "02 / ANALYZE",
    badgeClass: "bg-primary-fixed text-primary",
    icon: "developer_board",
    iconColor: "text-primary",
    title: "AI Guardrail Processing",
    description:
      "High-speed layout parsing via AWS Textract and policy evaluation through Amazon Bedrock foundational models.",
    meta: "Latency: < 0.5s per multi-page doc",
  },
  {
    badge: "03 / SANITIZE",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed-variant",
    icon: "download_for_offline",
    iconColor: "text-secondary",
    title: "Export Clean Redacted PDF",
    description:
      "Download sanitized, vector-flattened PDFs with embedded cryptographic audit receipts.",
    meta: "Output: True Vector-Flattened PDF",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full p-16 scroll-mt-24">
      <SectionHeading
        eyebrow="Execution Lifecycle"
        title="Three Steps to Deterministic Redaction"
        description="From intake to cryptographically signed export in under 600 milliseconds."
        className="max-w-2xl mb-14"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {STEPS.map((s) => (
          <div
            key={s.badge}
            className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`font-label-lg text-label-lg uppercase tracking-wider px-3 py-1 rounded font-mono font-bold ${s.badgeClass}`}
                >
                  {s.badge}
                </span>
                <Icon name={s.icon} className={`text-[24px] ${s.iconColor}`} />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-3">
                {s.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {s.description}
              </p>
            </div>
            <div className="mt-3 pt-3">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                {s.meta}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
