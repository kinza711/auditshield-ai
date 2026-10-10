"use client";

import type { FormEvent, ReactNode } from "react";
import Icon from "../ui/Icon";
import ProfileCard from "./ProfileCard";

const input =
  "h-10 w-full min-w-0 rounded-lg bg-surface-container-low px-3 font-body-md text-body-md text-on-surface transition-colors focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary-container";

function Field({
  id,
  label,
  aside,
  children,
}: {
  id: string;
  label: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <label
        htmlFor={id}
        className="flex items-center justify-between gap-2 font-label-md text-label-md text-on-surface"
      >
        <span>{label}</span>
        {aside}
      </label>
      {children}
    </div>
  );
}

export default function ProfileForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: send `data` to your API
    console.log(data);
  };

  return (
    <ProfileCard
      icon="badge"
      title="Profile & Workstation Credentials"
      aside={
        <span className="rounded bg-surface-container px-2 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
          Tenant: Enterprise Global
        </span>
      }
    >
      <form
        id="profile-form"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-space-md md:grid-cols-2"
      >
        <Field id="fullName" label="Full Name">
          <input id="fullName" name="fullName" type="text" defaultValue="Eleanor Vance" className={input} />
        </Field>

        <Field
          id="email"
          label="Official Work Email"
          aside={
            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary">
              <Icon name="check_circle" className="text-[14px]" /> Verified
            </span>
          }
        >
          <input
            id="email"
            name="email"
            type="email"
            readOnly
            defaultValue="eleanor.vance@auditshield.ai"
            className={`${input} cursor-not-allowed opacity-80`}
          />
        </Field>

        <Field id="department" label="Department">
          <input id="department" name="department" type="text" defaultValue="Information Security & Data Governance" className={input} />
        </Field>

        <Field id="designation" label="Designation / Role Scope">
          <input id="designation" name="designation" type="text" defaultValue="Chief Security Officer (CISO) & Enclave Root Owner" className={input} />
        </Field>

        <Field id="timezone" label="Operating Timezone">
          <select id="timezone" name="timezone" defaultValue="UTC-05:00" className={`${input} cursor-pointer`}>
            <option value="UTC-05:00">UTC-05:00 (Eastern Time - New York)</option>
            <option value="UTC-08:00">UTC-08:00 (Pacific Time - San Francisco)</option>
            <option value="UTC+00:00">UTC+00:00 (Coordinated Universal Time - London)</option>
            <option value="UTC+01:00">UTC+01:00 (Central European Time - Frankfurt)</option>
          </select>
        </Field>

        <Field
          id="pager"
          label="Escalation Pager / Emergency Endpoint"
          aside={
            <span className="font-label-sm text-label-sm font-medium text-primary">
              OpsDuty P1
            </span>
          }
        >
          <input id="pager" name="pager" type="email" defaultValue="sec-ops-pager@auditshield.ai" className={input} />
        </Field>
      </form>
    </ProfileCard>
  );
}