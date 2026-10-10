import Icon from "../ui/Icon";
import StatCard from "./StatCard";

const chip =
  "inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
      {/* Documents scanned */}
      <StatCard
        label="Total Documents Scanned"
        value="1,482"
        icon="description"
        iconBoxClassName="bg-primary-fixed/60 text-primary"
        progress={{ value: 78, barClassName: "bg-primary" }}
        footer={
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 font-label-sm text-label-sm font-semibold">
              <Icon name="trending_up" className="text-[14px]" />
              +12% this week
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              vs 1,323 last week
            </span>
          </div>
        }
      />

      {/* Active users */}
      <StatCard
        label="Active System Users"
        value="54 Users"
        icon="group"
        iconBoxClassName="bg-secondary-fixed/70 text-secondary"
        progress={{ value: 90, barClassName: "bg-secondary" }}
        footer={
          <div className="flex items-center justify-between font-body-sm text-body-sm">
            <span className="text-on-surface-variant font-medium">48 HR Members</span>
            <span className="w-1 h-1 rounded-full bg-on-surface-variant/40" />
            <span className="text-secondary font-semibold">6 Auditors</span>
          </div>
        }
      />

      {/* PII masked */}
      <StatCard
        label="PII Masked Entities"
        value="12,940"
        icon="verified_user"
        iconBoxClassName="bg-tertiary-fixed text-primary shadow-sm"
        progress={{ value: 65, barClassName: "bg-primary-container" }}
        footer={
          <div className="flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
            <span className={chip}>CNIC</span>
            <span className={chip}>Cards</span>
            <span className={chip}>Names</span>
            <span className="text-primary font-bold ml-auto whitespace-nowrap">
              +348 today
            </span>
          </div>
        }
      />

      {/* Flagged reviews */}
      <StatCard
        label="Flagged Policy Reviews"
        value="3 Pending"
        valueClassName="text-primary"
        icon="error"
        iconBoxClassName="bg-error-container text-error"
        progress={{ value: 35, barClassName: "bg-error" }}
        footer={
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping" />
              High Priority
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant text-right">
              Requires Admin Attention
            </span>
          </div>
        }
      />
    </div>
  );
}