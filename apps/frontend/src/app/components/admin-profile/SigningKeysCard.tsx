"use client";

import { useState } from "react";
import Icon from "../ui/Icon";
import ProfileCard from "./ProfileCard";

const FINGERPRINT =
  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
const SCOPES = ["audit:write", "enclave:attest", "policy:deploy"];

export default function SigningKeysCard() {
  const [copied, setCopied] = useState(false);

  const copyFingerprint = async () => {
    try {
      await navigator.clipboard.writeText(FINGERPRINT);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  const rotateToken = () => {
    if (!window.confirm("Rotate the CLI token? The current key will expire immediately.")) return;
    // TODO: call your rotate-token endpoint and show the new token once
  };

  return (
    <ProfileCard
      icon="token"
      iconClass="text-secondary"
      title="Signing & API Keys"
      aside={
        <span className="rounded bg-surface-container px-2 py-0.5 font-label-sm text-[10px] text-on-surface-variant">
          Post-Quantum
        </span>
      }
    >
      <div className="flex flex-col gap-space-md">
        {/* Signing cert */}
        <div className="flex flex-col gap-1.5 rounded-lg bg-surface-container-low p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="font-label-md text-label-md text-on-surface">Personal Enclave Signing Cert</span>
            <span className="font-label-sm text-label-sm font-semibold text-primary">Valid</span>
          </div>
          <span className="font-label-sm text-[11px] uppercase text-on-surface-variant">SHA-256 Fingerprint:</span>
          <div className="mt-0.5 flex items-center justify-between gap-2 rounded bg-surface-container-lowest p-1.5">
            <span title={FINGERPRINT} className="truncate font-mono text-[11px] text-on-surface">
              {FINGERPRINT}
            </span>
            <button
              type="button"
              onClick={copyFingerprint}
              title={copied ? "Copied" : "Copy fingerprint"}
              aria-label="Copy fingerprint"
              className="shrink-0 text-on-surface-variant hover:text-on-surface"
            >
              <Icon name={copied ? "check" : "content_copy"} className="text-[16px]" />
            </button>
          </div>
          <div className="mt-1 flex flex-wrap items-center justify-between gap-x-2 font-body-sm text-body-sm text-on-surface-variant">
            <span>Algo: Ed25519-Dilithium</span>
            <span>Expires: Nov 2026</span>
          </div>
        </div>

        {/* CLI token */}
        <div className="flex flex-col gap-2 rounded-lg bg-surface-container-low p-3">
          <div className="flex flex-wrap items-center justify-between gap-x-2">
            <div className="flex items-center gap-1.5">
              <Icon name="terminal" className="text-[18px] text-on-surface-variant" />
              <span className="font-label-md text-label-md text-on-surface">CLI & SDK Personal Token</span>
            </div>
            <span className="font-label-sm text-[11px] text-on-surface-variant">Created 3d ago</span>
          </div>
          <div className="rounded bg-surface-container-lowest p-2">
            <span className="block truncate font-mono text-[12px] text-on-surface">
              as_adm_••••••••••••••••7a9f
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1">
            {SCOPES.map((s) => (
              <span key={s} className="rounded bg-surface-container px-1.5 py-0.5 font-mono text-[10px] text-on-surface">
                {s}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={rotateToken}
            className="mt-1 w-full rounded-lg bg-surface-container-lowest px-3 py-1.5 font-label-sm text-label-sm text-primary shadow-sm transition-all hover:bg-primary hover:text-on-primary"
          >
            Rotate CLI Token
          </button>
        </div>
      </div>
    </ProfileCard>
  );
}