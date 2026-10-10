"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "../ui/Icon";
import { CONTROL_ITEMS } from "../../data/guardrails";

export default function EnclaveControls() {
  const [deploying, setDeploying] = useState(false);
  const [footer, setFooter] = useState(
    "Last deployed cluster-wide: Today at 04:12 UTC by Eleanor Vance",
  );
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const deploy = () => {
    setDeploying(true);
    setFooter(
      "Synchronizing policy manifest across AWS Nitro Enclave Cluster...",
    );
    timer.current = setTimeout(() => {
      setDeploying(false);
      setFooter("Policy manifest synchronized just now");
    }, 1500);
  };

  return (
    <div className="lg:col-span-5 rounded-2xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col justify-between gap-space-md">
      {/* Title */}
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center">
              <Icon
                name="enhanced_encryption"
                className="text-secondary text-[20px]"
              />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Hardware Isolation Controls
            </h3>
          </div>
          <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-[10px] text-on-surface-variant">
            AWS Nitro Enclave
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Cryptographic safeguards securing guardrail processing without
          operator access.
        </p>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-space-sm">
        {CONTROL_ITEMS.map((item) => (
          <div
            key={item.id}
            className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between gap-space-sm"
          >
            <div className="flex items-center gap-space-sm">
              <Icon
                name={item.icon}
                className={`text-[22px] ${item.iconClass}`}
              />
              <div>
                <div className="font-label-lg text-label-lg text-on-surface font-semibold">
                  {item.title}
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.description}
                </div>
              </div>
            </div>
            <span className="px-2 py-1 rounded bg-primary-fixed text-primary font-label-sm text-label-sm font-semibold shrink-0">
              {item.badge}
            </span>
          </div>
        ))}

        {/* Audit seal */}
        <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <Icon name="verified" className="text-secondary text-[18px]" />
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Cryptographic Audit Seal
              </span>
            </div>
            <span className="font-mono text-[11px] text-emerald-600 font-medium">
              Valid Seal
            </span>
          </div>
          <div className="mt-1 p-2 bg-surface-container-lowest rounded font-mono text-[11px] text-on-surface-variant break-all select-all shadow-inner">
            MERKLE_ROOT: 0x8842af91cb4d12...c9f18a20e4b
          </div>
          <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-0.5">
            <span>Notarized via Enclave KMS HSM</span>
            <span className="font-mono text-[10px]">#POL-8842-ROOT</span>
          </div>
        </div>
      </div>

      {/* Deploy */}
      <div className="pt-space-xs flex flex-col gap-space-xs">
        <button
          type="button"
          onClick={deploy}
          disabled={deploying}
          className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-xl bg-secondary hover:bg-on-secondary-container text-on-secondary font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all disabled:opacity-60"
        >
          <Icon name="cloud_sync" className="text-[18px]" />
          <span>
            {deploying ? "Deploying..." : "Deploy Policy to Enclave Cluster"}
          </span>
        </button>
        <span className="text-center font-label-sm text-label-sm text-on-surface-variant">
          {footer}
        </span>
      </div>
    </div>
  );
}
