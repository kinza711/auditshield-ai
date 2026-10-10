export type StepStatus = "completed" | "active" | "pending";

export interface PipelineStep {
  id: string;
  label: string;
  title: string;
  detail: string;
  pendingDetail?: string;
  log: string;
}

export interface ScanFile {
  name: string;
  size: number;
  type: string;
}