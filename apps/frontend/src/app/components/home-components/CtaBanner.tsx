import Icon from "../ui/Icon";
import TrialForm from "./TrialForm";

const POINTS = [
  "No credit card required",
  "GDPR, HIPAA, and PCI-DSS verified",
  "Deploy directly in your AWS VPC",
];

export default function CtaBanner() {
  return (
    <section
      id="pricing"
      className="w-full p-16 scroll-mt-24 items-center justify-center flex"
    >
      <div className="w-full bg-surface-container-lowest/90 backdrop-blur-xl rounded-3xl p-8 md:p-14 shadow-xl text-center relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-fixed-dim/70 rounded-full blur-3xl pointer-events-none -z-10 animate-blob-wander motion-reduce:animate-none" />

        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold block mb-4">
          Enterprise Redaction Readiness
        </span>
        <h2 className="font-display-lg text-display-lg text-on-surface max-w-3xl mx-auto font-bold mb-4">
          Eliminate compliance exposure before your next audit.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
          Join over 140+ security teams protecting clinical patient data and
          financial records with automated Bedrock AI pipelines.
        </p>

        <TrialForm />

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-on-surface-variant font-label-sm text-label-sm">
          {POINTS.map((p) => (
            <span key={p} className="flex items-center gap-1.5">
              <Icon name="check" className="text-[16px] text-secondary" />
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
