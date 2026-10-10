import Icon from "../../components/ui/Icon";
import type { PipelineStep, StepStatus } from "../../types/upload-scan";

const STYLES: Record<
  StepStatus,
  {
    container: string;
    label: string;
    icon: string;
    iconClass: string;
    iconExtra: string;
    title: string;
  }
> = {
  completed: {
    container: "bg-surface-container-low",
    label: "text-secondary font-semibold",
    icon: "check_circle",
    iconClass: "text-secondary",
    iconExtra: "",
    title: "",
  },
  active: {
    container: "bg-primary-fixed/60 shadow-sm relative overflow-hidden",
    label: "text-on-primary-fixed font-bold",
    icon: "sync",
    iconClass: "text-primary",
    iconExtra: "animate-spin",
    title: "font-semibold",
  },
  pending: {
    container: "bg-surface-container-low/60 opacity-70",
    label: "text-on-surface-variant font-semibold",
    icon: "hourglass_empty",
    iconClass: "text-outline",
    iconExtra: "",
    title: "",
  },
};

interface PipelineStepCardProps {
  step: PipelineStep;
  status: StepStatus;
}

export default function PipelineStepCard({ step, status }: PipelineStepCardProps) {
  const s = STYLES[status];
  const detail =
    status === "pending" && step.pendingDetail ? step.pendingDetail : step.detail;

  return (
    <div
      className={`p-space-sm rounded-xl flex flex-col justify-between space-y-space-sm ${s.container}`}
    >
      {status === "active" && (
        <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-primary/10 rounded-full blur-md" />
      )}

      <div className="flex items-center justify-between">
        <span className={`font-label-sm text-label-sm uppercase ${s.label}`}>
          {step.label}
        </span>
        <Icon
          name={s.icon}
          className={`text-[18px] ${s.iconClass} ${s.iconExtra}`}
        />
      </div>

      <div>
        <p className={`font-headline-sm text-headline-sm text-on-surface ${s.title}`}>
          {step.title}
        </p>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{detail}</p>
      </div>

      {status === "completed" && (
        <div className="h-1 w-full bg-secondary rounded-full" />
      )}
      {status === "active" && (
        <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-pulse w-3/4 rounded-full" />
        </div>
      )}
      {status === "pending" && (
        <div className="h-1 w-full bg-surface-container rounded-full" />
      )}
    </div>
  );
}