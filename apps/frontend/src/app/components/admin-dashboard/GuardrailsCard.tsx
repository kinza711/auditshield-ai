import Icon from "../ui/Icon";

type Guardrail = {
  icon: string;
  label: string;
  status: string;
};

const GUARDRAILS: Guardrail[] = [
  { icon: "badge", label: "CNIC Masking", status: "ON (99.0% Conf.)" },
  { icon: "credit_card", label: "Credit Card Redaction", status: "ON (Luhn Validated)" },
  { icon: "person_search", label: "Person Name Anonymization", status: "ON (NER Transformer)" },
  { icon: "contact_phone", label: "Phone & SSN Masking", status: "ON (E.164 & IRS Rule)" },
];

export default function GuardrailsCard() {
  return (
    <div className="rounded-xl bg-surface-container-lowest/95 backdrop-blur-xl p-space-md lg:p-space-lg shadow-sm space-y-space-md">
      <div className="space-y-0.5">
        <div className="flex items-center gap-1.5">
          <Icon name="security" className="text-[20px] text-primary" />
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            Active AI Guardrails
          </h3>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          AWS Bedrock &amp; Titan Guardrail Policy Enforcement
        </p>
      </div>

      <div className="space-y-2.5">
        {GUARDRAILS.map((g) => (
          <div
            key={g.label}
            className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-surface-container-low/60 hover:bg-surface-container-low transition-colors"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <Icon name={g.icon} className="text-[18px] text-secondary" />
              <span className="font-label-md text-label-md text-on-surface font-medium truncate">
                {g.label}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 font-label-sm text-label-sm font-bold whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              {g.status}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="w-full py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
      >
        <span>Configure Guardrail Weights</span>
        <Icon name="tune" className="text-[16px]" />
      </button>
    </div>
  );
}