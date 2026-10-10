import Icon from "../ui/Icon";

interface UsersPageHeaderProps {
  onExport: () => void;
  onAdd: () => void;
}

export default function UsersPageHeader({ onExport, onAdd }: UsersPageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-sm">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            RBAC Protocol v4.2
          </span>
          <span className="font-label-sm text-label-sm text-outline">
            SEC-OPS / GOVERNANCE
          </span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
          User Governance &amp; Access Control
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Invite, manage, and enforce role-based cryptographic boundaries across HR
          personnel and external compliance auditors.
        </p>
      </div>

      <div className="flex items-center gap-space-sm self-start md:self-center">
        <button
          type="button"
          onClick={onExport}
          className="flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-sm transition-all text-label-lg font-label-lg"
        >
          <Icon name="file_download" className="text-[18px] text-on-surface-variant" />
          <span>Export Directory</span>
        </button>
        <button
          type="button"
          onClick={onAdd}
          className="flex items-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container shadow-sm hover:shadow-md transition-all text-label-lg font-label-lg font-semibold"
        >
          <Icon name="person_add" className="text-[20px]" />
          <span>Add New User</span>
        </button>
      </div>
    </div>
  );
}