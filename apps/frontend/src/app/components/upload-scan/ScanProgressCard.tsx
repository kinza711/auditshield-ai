import Icon from "../ui/Icon";
import PipelineStepCard from "../../components/upload-scan/PipelineStepCard";
import { PIPELINE_STEPS } from "../../data/upload-scan";
import { formatBytes, getFileIcon } from "../../lib/format";
import type { ScanFile, StepStatus } from "../../types/upload-scan";

interface ScanProgressCardProps {
  file: ScanFile;
  progress: number; // 0-100
  onCancel: () => void;
}

export default function ScanProgressCard({
  file,
  progress,
  onCancel,
}: ScanProgressCardProps) {
  const complete = progress >= 100;
  const activeIndex = complete
    ? PIPELINE_STEPS.length
    : Math.max(0, Math.min(3, Math.ceil(progress / 25) - 1));

  const statusFor = (index: number): StepStatus => {
    if (index < activeIndex) return "completed";
    if (index === activeIndex) return "active";
    return "pending";
  };

  const logLine = complete
    ? "Scan complete. Sanitized output is ready."
    : PIPELINE_STEPS[activeIndex].log;

  return (
    <div className="rounded-2xl bg-surface-container-lowest/95 backdrop-blur-xl shadow-md p-space-lg space-y-space-lg">
      {/* File header + status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md min-w-0">
          <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0 shadow-sm">
            <Icon
              name={getFileIcon(file.name)}
              className="text-primary text-[26px]"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-sm text-headline-sm text-on-surface truncate">
                {file.name}
              </span>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface">
                SHA-256
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {formatBytes(file.size)} • Ingested via Encrypted TLS 1.3 to{" "}
              <code className="font-body-sm text-secondary">us-east-1</code>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-space-sm self-start sm:self-center">
          {complete ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md shadow-sm">
              <Icon name="check_circle" className="text-[16px]" />
              Scan Complete
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Scanning ({progress}%)
            </div>
          )}
        </div>
      </div>

      {/* Progress meter */}
      <div className="space-y-space-xs">
        <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
          <span>Overall Analysis Pipeline</span>
          <span className="text-primary font-semibold">
            {complete
              ? "All 4 Stages Complete"
              : `Stage ${activeIndex + 1} of 4 Active`}
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(229,52,99,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 4-step pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-space-sm">
        {PIPELINE_STEPS.map((step, i) => (
          <PipelineStepCard key={step.id} step={step} status={statusFor(i)} />
        ))}
      </div>

      {/* Telemetry */}
      <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm min-w-0">
          <Icon
            name="terminal"
            className="text-secondary text-[20px] shrink-0"
          />
          <div className="font-body-sm text-body-sm min-w-0">
            <span className="text-on-surface font-medium">
              Bedrock Agent #8412:
            </span>
            <span className="text-on-surface-variant ml-1 font-mono text-[13px]">
              {logLine}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-md shrink-0">
          <button
            type="button"
            className="font-label-md text-label-md text-secondary hover:text-on-surface font-semibold flex items-center gap-1 transition-colors"
          >
            <Icon name="visibility" className="text-[16px]" />
            Live Telemetry
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="font-label-md text-label-md text-error hover:text-on-error-container font-semibold transition-colors"
          >
            {complete ? "Dismiss" : "Cancel Audit"}
          </button>
        </div>
      </div>
    </div>
  );
}
