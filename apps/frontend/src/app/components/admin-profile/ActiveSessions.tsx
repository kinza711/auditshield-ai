"use client";

import { useState } from "react";
import Icon from "../ui/Icon";
import ProfileCard from "./ProfileCard";

type Session = {
  id: string;
  icon: string;
  iconClass: string;
  title: string;
  tag?: { label: string; className: string };
  meta: { icon?: string; text: string; mono?: boolean }[];
  current?: boolean;
};

// TODO: replace with sessions from your API
const INITIAL_SESSIONS: Session[] = [
  {
    id: "current",
    icon: "laptop_mac",
    iconClass: "text-primary",
    title: "macOS Sonoma • Chrome 124.0.6367",
    tag: { label: "Current Session", className: "bg-secondary-fixed text-on-secondary-fixed-variant font-semibold" },
    meta: [
      { icon: "location_on", text: "New York, USA" },
      { icon: "lan", text: "IP: 10.14.88.21", mono: true },
      { text: "Started: 2h 14m ago" },
    ],
    current: true,
  },
  {
    id: "bastion",
    icon: "terminal",
    iconClass: "text-secondary",
    title: "Ubuntu 22.04 LTS (Security Bastion Host)",
    tag: { label: "SSH CLI Key (ed25519)", className: "bg-surface-container-highest text-on-surface-variant" },
    meta: [
      { icon: "cloud", text: "AWS us-east-1 VPC (Private Subnet)" },
      { icon: "lan", text: "IP: 172.31.18.94", mono: true },
      { text: "Last heartbeat: 42m ago" },
    ],
  },
];

export default function ActiveSessions() {
  const [sessions, setSessions] = useState(INITIAL_SESSIONS);
  const others = sessions.filter((s) => !s.current);

  const revoke = (id: string) => {
    if (!window.confirm("Revoke this session immediately? Its keys will be invalidated.")) return;
    // TODO: call your revoke-session endpoint
    setSessions((prev) => prev.filter((s) => s.id !== id));
  };

  const revokeOthers = () => {
    if (!window.confirm("Terminate all other active sessions?")) return;
    // TODO: call your revoke-all-others endpoint
    setSessions((prev) => prev.filter((s) => s.current));
  };

  return (
    <ProfileCard
      icon="devices_other"
      iconClass="text-secondary"
      title="Active Admin Sessions & Fingerprints"
      aside={
        <button
          type="button"
          onClick={revokeOthers}
          disabled={others.length === 0}
          className="inline-flex items-center gap-1.5 rounded-lg bg-surface-container-low px-3 py-1.5 font-label-sm text-label-sm text-error transition-colors hover:bg-error-container hover:text-on-error-container disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Icon name="power_settings_new" className="text-[16px]" />
          Revoke All Other Sessions
        </button>
      }
    >
      <div className="flex flex-col gap-space-sm">
        {sessions.map((s) => (
          <div
            key={s.id}
            className="flex flex-col items-start justify-between gap-3 rounded-xl bg-surface-container-low p-space-md sm:flex-row sm:items-center"
          >
            <div className="flex min-w-0 items-start gap-3">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-container-lowest shadow-sm ${s.iconClass}`}>
                <Icon name={s.icon} className="text-[22px]" />
              </div>
              <div className="flex min-w-0 flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="break-words font-label-lg text-label-lg text-on-surface">
                    {s.title}
                  </span>
                  {s.tag && (
                    <span className={`rounded-full px-2 py-0.5 font-label-sm text-label-sm ${s.tag.className}`}>
                      {s.tag.label}
                    </span>
                  )}
                </div>
                <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
                  {s.meta.map((m) => (
                    <span key={m.text} className={`inline-flex items-center gap-1 ${m.mono ? "font-mono" : ""}`}>
                      {m.icon && <Icon name={m.icon} className="shrink-0 text-[14px]" />}
                      {m.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 self-end sm:self-auto">
              {s.current ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-surface-container-lowest px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Active Now
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => revoke(s.id)}
                  className="rounded-lg bg-surface-container-lowest px-3 py-1.5 font-label-sm text-label-sm text-on-surface shadow-sm transition-colors hover:bg-error-container hover:text-error"
                >
                  Revoke Node
                </button>
              )}
            </div>
          </div>
        ))}

        {others.length === 0 && (
          <p className="rounded-xl bg-surface-container-low px-space-md py-3 text-center font-label-md text-label-md text-on-surface-variant">
            No other active sessions.
          </p>
        )}
      </div>
    </ProfileCard>
  );
}