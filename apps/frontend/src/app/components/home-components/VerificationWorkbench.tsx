"use client";

import { useState } from "react";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";

type MaskChipProps = {
  tag: string;
  tagColor: string;
  faded: boolean;
  inline?: boolean;
  blocks?: string;
};

function MaskChip({
  tag,
  tagColor,
  faded,
  inline = false,
  blocks = "xxx-xx-xxx",
}: MaskChipProps) {
  const size = inline ? "px-2 py-0.5 gap-1" : "px-2.5 py-1 gap-1.5";
  const tagSize = inline ? "text-[9px]" : "text-[10px]";
  return (
    <span
      className={`inline-flex flex-wrap items-center max-w-full rounded bg-inverse-surface text-inverse-on-surface font-mono text-xs transition-opacity duration-300 ${size} ${
        faded ? "opacity-20" : ""
      }`}
    >
      <span>{blocks}</span>
      <span
        className={`font-label-sm text-label-sm break-all ${tagSize} ${tagColor}`}
      >
        {tag}
      </span>
    </span>
  );
}

const flag =
  "inline-block max-w-full break-words px-2 py-1 rounded bg-primary-fixed text-primary font-semibold";
const fieldLabel =
  "font-label-sm text-label-sm uppercase text-on-surface-variant block mb-1";
const sheet =
  "bg-surface-container-lowest rounded-xl p-4 sm:p-6 shadow-sm flex flex-col gap-4 font-body-sm text-body-sm leading-relaxed text-on-surface";
const fieldGrid = "grid grid-cols-1 sm:grid-cols-2 gap-4";
const actionBtn =
  "flex-1 sm:flex-none justify-center whitespace-nowrap font-label-sm text-label-sm px-3 py-2 sm:py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm";

function SheetHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 pb-4 bg-surface-container-low p-3 sm:p-4 rounded-lg">
      <div className="min-w-0">
        <span className="font-headline-sm text-headline-sm block font-bold text-on-surface break-words">
          NORTHSHORE MEDICAL CENTER
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Department of Outpatient Oncology &amp; Surgery
        </span>
      </div>
      <div className="sm:text-right shrink-0">
        <span className="font-label-sm text-label-sm font-mono text-on-surface-variant">
          BATCH: #2025-992-TX
        </span>
      </div>
    </div>
  );
}

export default function VerificationWorkbench() {
  const [faded, setFaded] = useState(false);

  return (
    <section
      id="security"
      className="w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-12 xl:px-20 scroll-mt-24"
    >
      <SectionHeading
        eyebrow="Deterministic Verification Core"
        title="Side-by-Side Verification Engine"
        description="Watch raw unredacted clinical and financial records get transformed into verifiable, sanitized compliance artifacts with zero leakage."
        className="max-w-3xl mb-6 sm:mb-10"
      />

      <div className="w-full bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden">
        {/* Top bar */}
        <div className="px-4 sm:px-6 py-4 bg-surface-container flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-3 h-3 rounded-full bg-primary shrink-0" />
              <span className="font-label-md text-label-md text-on-surface font-bold break-all">
                Medical_Claim_Form_2025.pdf
              </span>
            </div>
            <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant">
              Version 4.2 • 1.4 MB
            </span>
            <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-medium">
              Status: Redaction Completed - 0.42s
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <button
              type="button"
              className={`${actionBtn} bg-surface-container-lowest text-on-surface hover:bg-surface-container-high`}
            >
              <Icon name="code" className="text-[16px] text-secondary" />
              <span>Audit Trail JSON</span>
            </button>
            <button
              type="button"
              onClick={() => setFaded((v) => !v)}
              className={`${actionBtn} bg-surface-container-lowest text-on-surface hover:bg-surface-container-high`}
            >
              <Icon name="visibility" className="text-[16px] text-primary" />
              <span>{faded ? "Show Solid Masks" : "Toggle PII Masks"}</span>
            </button>
            <button
              type="button"
              className={`${actionBtn} bg-primary hover:bg-primary-container text-on-primary`}
            >
              <Icon name="download" className="text-[16px]" />
              <span>Export Redacted PDF</span>
            </button>
          </div>
        </div>

        {/* Split view */}
        <div className="grid grid-cols-1 xl:grid-cols-2 divide-y xl:divide-y-0 xl:divide-x divide-outline-variant/30">
          {/* LEFT: source */}
          <div className="min-w-0 p-4 sm:p-6 xl:p-8 flex flex-col gap-4 sm:gap-6 bg-surface-container-low/40">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Source Document
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Raw Ingestion (Layer 0)
                </span>
              </div>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-primary-fixed text-primary font-semibold">
                5 Flags Raised
              </span>
            </div>

            <div className={sheet}>
              <SheetHeader />
              <div className={`${fieldGrid} pt-2`}>
                <div className="min-w-0">
                  <span className={fieldLabel}>Patient Full Name</span>
                  <span className={flag}>Sarah Jenkins</span>
                </div>
                <div className="min-w-0">
                  <span className={fieldLabel}>National ID / CNIC</span>
                  <span className={`${flag} font-mono`}>42101-8392019-1</span>
                </div>
              </div>
              <div className={fieldGrid}>
                <div className="min-w-0">
                  <span className={fieldLabel}>Billing Account / Card</span>
                  <span className={`${flag} font-mono`}>
                    4532 9901 8821 3410
                  </span>
                </div>
                <div className="min-w-0">
                  <span className={fieldLabel}>Date of Admission</span>
                  <span className="text-on-surface">January 14, 2025</span>
                </div>
              </div>
              <div className="pt-2">
                <span className={fieldLabel}>
                  Clinical Evaluation &amp; Treatment Notes
                </span>
                <p className="text-on-surface bg-surface-container-low p-3 rounded-lg leading-relaxed break-words">
                  Patient presented with persistent cervical lymphadenopathy.
                  Prescribed experimental immunotherapy protocol #TR-402 under
                  supervision of{" "}
                  <span className="bg-primary-fixed text-primary px-1.5 py-0.5 rounded font-medium">
                    Dr. Harold Vance
                  </span>
                  . Home address registered as{" "}
                  <span className="bg-primary-fixed text-primary px-1.5 py-0.5 rounded font-medium">
                    742 Evergreen Terrace, Springfield OR 97477
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: sanitized */}
          <div className="min-w-0 p-4 sm:p-6 xl:p-8 flex flex-col gap-4 sm:gap-6 bg-surface-container-low/20">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  Sanitized Output
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Deterministic Redaction (Layer 1)
                </span>
              </div>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-semibold">
                Safe for Cloud Sync
              </span>
            </div>

            <div className={sheet}>
              <SheetHeader />
              <div className={`${fieldGrid} pt-2`}>
                <div className="min-w-0">
                  <span className={fieldLabel}>Patient Full Name</span>
                  <MaskChip
                    tag="[PII-NAME-REDACTED]"
                    tagColor="text-primary-fixed"
                    faded={faded}
                  />
                </div>
                <div className="min-w-0">
                  <span className={fieldLabel}>National ID / CNIC</span>
                  <MaskChip
                    tag="[CNIC-MASKED]"
                    tagColor="text-secondary-fixed"
                    faded={faded}
                  />
                </div>
              </div>
              <div className={fieldGrid}>
                <div className="min-w-0">
                  <span className={fieldLabel}>Billing Account / Card</span>
                  <MaskChip
                    tag="[PCI-CARD-MASKED]"
                    tagColor="text-tertiary-fixed"
                    faded={faded}
                  />
                </div>
                <div className="min-w-0">
                  <span className={fieldLabel}>Date of Admission</span>
                  <span className="text-on-surface">January 14, 2025</span>
                </div>
              </div>
              <div className="pt-2">
                <span className={fieldLabel}>
                  Clinical Evaluation &amp; Treatment Notes
                </span>
                <p className="text-on-surface bg-surface-container-low p-3 rounded-lg leading-relaxed break-words">
                  Patient presented with persistent cervical lymphadenopathy.
                  Prescribed experimental immunotherapy protocol #TR-402 under
                  supervision of{" "}
                  <MaskChip
                    inline
                    blocks="XXX-XXXX-XXXXXX-XX"
                    tag="[STAFF-ID]"
                    tagColor="text-primary-fixed"
                    faded={faded}
                  />
                  . Home address registered as{" "}
                  <MaskChip
                    inline
                    blocks="XXX-XXXX-XXXXXX-XX"
                    tag="[GEO-MASK]"
                    tagColor="text-secondary-fixed"
                    faded={faded}
                  />
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary drawer */}
        <div className="p-4 sm:p-6 bg-surface-container-high flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 min-w-0">
            <div className="flex items-center gap-2">
              <Icon
                name="check_circle"
                className="text-secondary text-[20px] shrink-0"
              />
              <span className="font-label-md text-label-md text-on-surface font-bold">
                0 PII Leaks Detected
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                name="verified"
                className="text-secondary text-[20px] shrink-0"
              />
              <span className="font-label-md text-label-md text-on-surface font-bold">
                100% HIPAA Safe
              </span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <Icon
                name="tag"
                className="text-secondary text-[20px] shrink-0"
              />
              <span className="font-label-sm text-label-sm font-mono text-on-surface-variant break-all">
                Bedrock Guardrail Hash: 8bf2...e09a
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Vector sanitization: 100% flattened
            </span>
            <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container-lowest font-mono font-bold text-primary">
              AUDIT PASSED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
