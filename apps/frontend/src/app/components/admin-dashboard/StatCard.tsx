import type { ReactNode } from "react";
import Icon from "../ui/Icon";

export type StatCardProps = {
  label: string;
  value: string;
  valueClassName?: string;
  icon: string;
  iconBoxClassName: string;
  footer: ReactNode;
  progress: { value: number; barClassName: string };
};

export default function StatCard({
  label,
  value,
  valueClassName = "text-on-surface",
  icon,
  iconBoxClassName,
  footer,
  progress,
}: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest/90 backdrop-blur-md p-space-md shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
            {label}
          </span>
          <div className={`font-headline-xl text-headline-xl tracking-tight ${valueClassName}`}>
            {value}
          </div>
        </div>
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconBoxClassName}`}
        >
          <Icon name={icon} className="text-[24px]" />
        </div>
      </div>

      <div className="mt-4">{footer}</div>

      <div className="mt-3 w-full bg-surface-container rounded-full h-1 overflow-hidden">
        <div
          className={`h-full rounded-full ${progress.barClassName}`}
          style={{ width: `${progress.value}%` }}
        />
      </div>
    </div>
  );
}