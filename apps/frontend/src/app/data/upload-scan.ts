import type { PipelineStep, ScanFile } from "@/types/upload-scan";

export const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB

export const ACCEPTED_EXTENSIONS = [
  ".pdf",
  ".png",
  ".jpg",
  ".jpeg",
  ".tif",
  ".tiff",
  ".docx",
];

export const ACCEPT_ATTR = ACCEPTED_EXTENSIONS.join(",");

export const FORMAT_BADGES = ["PDF", "DOCX", "PNG / TIFF"];

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: "ingest",
    label: "01 / S3 Sync",
    title: "Encrypted Ingest",
    detail: "Nitro Enclave Key (0.4s)",
    log: "Encrypting payload with enclave key and syncing to S3...",
  },
  {
    id: "ocr",
    label: "02 / OCR Engine",
    title: "Amazon Textract",
    detail: "Layout & Token Map (1.1s)",
    log: "Extracting layout and building token map...",
  },
  {
    id: "audit",
    label: "03 / Bedrock AI",
    title: "Guardrail Audit",
    detail: "Auditing 180+ PII Rulesets",
    log: "[MATCH] Found SSN pattern line 44, Tax ID line 89. Redacting...",
  },
  {
    id: "redaction",
    label: "04 / Redaction",
    title: "Sanitized Output",
    detail: "Sanitized document ready",
    pendingDetail: "Awaiting Guardrail Sign-off",
    log: "Applying redactions and generating sanitized output...",
  },
];

export const ASSURANCES = [
  {
    icon: "enhanced_encryption",
    iconClass: "text-secondary",
    label: "256-Bit Encrypted S3 Storage",
  },
  {
    icon: "verified",
    iconClass: "text-primary",
    label: "GDPR & PCI-DSS Redaction Engine",
  },
  {
    icon: "policy",
    iconClass: "text-secondary",
    label: "Zero Human Read Privileges",
  },
];

// Sample file shown on first load (matches the design). Set the initial
// file state in UploadWorkspace to null if you don't want a demo.
export const DEMO_FILE: ScanFile = {
  name: "Executive_Contract_2026.pdf",
  size: Math.round(2.4 * 1024 * 1024),
  type: "application/pdf",
};