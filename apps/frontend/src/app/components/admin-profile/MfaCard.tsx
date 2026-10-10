"use client";

import Icon from "../ui/Icon";
import ProfileCard from "./ProfileCard";

const ROTATED_DAYS = 18;
const POLICY_DAYS = 90;

export default function MfaCard() {
  const testToken = () => {
    // TODO: start the WebAuthn / FIDO2 attestation test
  };
  const viewBackupCodes = () => {
    // TODO: open a re-authentication prompt, then show the codes
  };
  const changePassword = () => {
    // TODO: open your change-password modal
  };

  return (
    <ProfileCard
      icon="phonelink_lock"
      title="Hardware Auth & MFA"
      aside={<span className="h-2.5 w-2.5 rounded-full bg-primary" title="Secured" />}
    >
      <div className="flex flex-col gap-space-sm">
        {/* Hardware key */}
        <div className="flex flex-col gap-2 rounded-lg bg-surface-container-low p-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <Icon name="usb" className="shrink-0 text-[20px] text-primary" />
              <div className="flex min-w-0 flex-col">
                <span className="font-label-md text-label-md text-on-surface">YubiKey 5C NFC</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Primary FIDO2 Hardware Key</span>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-secondary-fixed px-2 py-0.5 font-label-sm text-[10px] font-semibold text-on-secondary-fixed">
              Connected
            </span>
          </div>
          <div className="flex items-center justify-between gap-2 pt-1">
            <span className="truncate font-mono text-[11px] text-on-surface-variant">AAGUID: c08846c4-8...</span>
            <button type="button" onClick={testToken} className="shrink-0 font-label-sm text-label-sm text-secondary hover:text-primary">
              Test Token
            </button>
          </div>
        </div>

        {/* Authenticator */}
        <div className="flex items-center justify-between gap-2 rounded-lg bg-surface-container-low p-3">
          <div className="flex min-w-0 items-center gap-2">
            <Icon name="lock_clock" className="shrink-0 text-[20px] text-secondary" />
            <div className="flex min-w-0 flex-col">
              <span className="font-label-md text-label-md text-on-surface">Authenticator App</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">1Password / Google TOTP</span>
            </div>
          </div>
          <span className="shrink-0 rounded bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface">Active</span>
        </div>

        {/* Backup codes */}
        <div className="flex items-center justify-between gap-2 rounded-lg bg-surface-container-low p-3">
          <div className="flex min-w-0 items-center gap-2">
            <Icon name="key_off" className="shrink-0 text-[20px] text-outline" />
            <div className="flex min-w-0 flex-col">
              <span className="font-label-md text-label-md text-on-surface">Emergency Backup Codes</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">10 of 10 Unused (Hardware Vaulted)</span>
            </div>
          </div>
          <button type="button" onClick={viewBackupCodes} className="shrink-0 font-label-sm text-label-sm text-secondary hover:underline">
            View
          </button>
        </div>

        {/* Password rotation */}
        <div className="mt-2 flex flex-col gap-2 pt-space-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Password Last Rotated</span>
            <span className="font-label-sm text-label-sm font-semibold text-on-surface">{ROTATED_DAYS} Days Ago</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
            <div
              className="h-1.5 rounded-full bg-secondary"
              style={{ width: `${(ROTATED_DAYS / POLICY_DAYS) * 100}%` }}
            />
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Policy: NIST 800-63B (Rotation required in {POLICY_DAYS - ROTATED_DAYS} days)
          </span>
          <button
            type="button"
            onClick={changePassword}
            className="mt-1 w-full rounded-lg bg-surface-container px-3 py-2 font-label-md text-label-md text-on-surface transition-colors hover:bg-surface-container-high"
          >
            Change Master Password
          </button>
        </div>
      </div>
    </ProfileCard>
  );
}