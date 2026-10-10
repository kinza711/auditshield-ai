import Icon from "../ui/Icon";
import ProfileCard from "./ProfileCard";

type Clearance = {
  icon: string;
  iconClass: string;
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  wide?: boolean;
};

const CLEARANCES: Clearance[] = [
  {
    icon: "visibility",
    iconClass: "text-secondary",
    title: "Zero-Knowledge PII Inspection",
    badge: "Granted",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed-variant",
    description: "Full Redaction Oversight across AWS Textract and Comprehend NLP streams.",
  },
  {
    icon: "cloud_sync",
    iconClass: "text-primary",
    title: "Nitro Enclave Root Deployment",
    badge: "Enforced",
    badgeClass: "bg-primary-fixed text-on-primary-fixed-variant",
    description: "Authorizes deterministic hardware-level attested builds in us-east-1.",
  },
  {
    icon: "fingerprint",
    iconClass: "text-secondary",
    title: "Merkle Root Notarization",
    badge: "Authorized Signer",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed-variant",
    description: "Capable of committing block anchors to decentralized WORM audit trails.",
  },
  {
    icon: "delete_forever",
    iconClass: "text-error",
    title: "Audit Log Deletion",
    badge: "Strictly Restricted",
    badgeClass: "bg-error-container text-on-error-container",
    description: "WORM Compliance Enforced. Irrevocable ledger prevents deletion by any persona.",
  },
  {
    icon: "vpn_key",
    iconClass: "text-tertiary",
    title: "Policy Guardrail Rule Override",
    badge: "Dual-Key Quorum Required",
    badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    description:
      "Requires co-signature of Secondary Enclave Keyholder (Chief Compliance Officer) to deploy zero-day bypasses.",
    wide: true,
  },
];

export default function RbacMatrix() {
  return (
    <ProfileCard
      icon="admin_panel_settings"
      iconClass="text-secondary"
      title="RBAC & Security Clearance Matrix"
      aside={
        <span className="rounded bg-primary-fixed px-2 py-0.5 font-label-sm text-label-sm font-semibold text-on-primary-fixed">
          Level 5 Root Clearance
        </span>
      }
    >
      <div className="grid grid-cols-1 gap-space-sm md:grid-cols-2">
        {CLEARANCES.map((c) => (
          <div
            key={c.title}
            className={`flex min-w-0 items-start gap-3 rounded-xl bg-surface-container-low p-3.5 ${
              c.wide ? "md:col-span-2" : ""
            }`}
          >
            <div className={`shrink-0 rounded-lg bg-surface-container-lowest p-2 shadow-sm ${c.iconClass}`}>
              <Icon name={c.icon} className="text-[20px]" />
            </div>
            <div className="flex min-w-0 flex-col">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-label-md text-label-md text-on-surface">
                  {c.title}
                </span>
                <span className={`rounded px-1.5 py-0.5 font-label-sm text-[10px] ${c.badgeClass}`}>
                  {c.badge}
                </span>
              </div>
              <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
                {c.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ProfileCard>
  );
}