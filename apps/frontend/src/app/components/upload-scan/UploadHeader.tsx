import Icon from "../ui/Icon";

export default function UploadHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
      <div className="space-y-space-xs">
        <div className="flex flex-wrap items-center gap-space-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
            Admin Portal
          </span>
          <span className="text-on-surface-variant font-label-sm">/</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Upload &amp; Scan
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
            Nitro Enclave v4.2 Ready
          </span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          Upload Document for AI Audit
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Securely submit contracts, personnel records, or transaction ledgers for
          automated PII masking and synthetic anonymization.
        </p>
      </div>

      <div className="flex items-center gap-space-sm">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-sm text-on-surface-variant">
          <Icon name="verified_user" className="text-[18px] text-secondary" />
          <span className="font-label-md text-label-md text-on-surface">
            SOC 2 Type II
          </span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-sm text-on-surface-variant">
          <Icon name="lock_clock" className="text-[18px] text-primary" />
          <span className="font-label-md text-label-md text-on-surface">
            Auto-Purge: 24h
          </span>
        </div>
      </div>
    </div>
  );
}