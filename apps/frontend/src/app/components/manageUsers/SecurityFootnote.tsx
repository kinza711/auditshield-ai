import Icon from "../ui/Icon";

export default function SecurityFootnote() {
  return (
    <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-md">
        <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed shrink-0">
          <Icon name="fingerprint" className="text-[18px]" />
        </div>
        <div className="flex flex-col">
          <span className="font-label-md text-label-md font-bold text-on-surface">
            Active Session Entitlement Verification
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            All RBAC policy modifications are cryptographically signed and
            replicated across quorum nodes.
          </span>
        </div>
      </div>
      <div className="flex items-center gap-space-sm">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
          Enforcement:
        </span>
        <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface font-bold">
          AES-256 GCM
        </span>
        <span className="px-2 py-0.5 rounded bg-secondary-fixed font-label-sm text-label-sm text-on-secondary-fixed font-bold">
          FIPS 140-3 Sealed
        </span>
      </div>
    </div>
  );
}