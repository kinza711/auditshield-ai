"use client";

import { useState } from "react";
import Icon from "../ui/Icon";
import ProfileCard from "./ProfileCard";

const CHANNELS = [
  { id: "pii", title: "High-Risk PII Intercept", description: "Instant SMS & PagerDuty escalation" },
  { id: "memory", title: "Enclave Memory Breach", description: "Trigger if heap allocation exceeds 90%" },
  { id: "rbac", title: "Unauthorized RBAC Attempts", description: "Alert on failed Level 4-5 escalations" },
  { id: "digest", title: "Weekly Cryptographic Digest", description: "Automated PDF sent to root mailbox" },
];

export default function AlertChannels() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    pii: true,
    memory: true,
    rbac: true,
    digest: true,
  });

  const toggle = (id: string) => {
    // TODO: persist this preference through your API
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ProfileCard
      icon="notifications_active"
      title="Security Alert Channels"
      aside={<Icon name="broadcast_on_personal" className="text-[18px] text-secondary" />}
    >
      <div className="flex flex-col gap-3">
        {CHANNELS.map((c) => (
          <label
            key={c.id}
            className="flex cursor-pointer items-start justify-between gap-3 rounded p-2 transition-colors hover:bg-surface-container-low"
          >
            <div className="flex min-w-0 flex-col">
              <span className="font-label-md text-label-md text-on-surface">{c.title}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{c.description}</span>
            </div>
            <input
              type="checkbox"
              checked={enabled[c.id]}
              onChange={() => toggle(c.id)}
              className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded accent-primary"
            />
          </label>
        ))}
      </div>
    </ProfileCard>
  );
}