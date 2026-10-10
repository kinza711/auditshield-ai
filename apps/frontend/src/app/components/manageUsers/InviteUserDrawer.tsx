"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import Icon from "../ui/Icon";
import { DEPARTMENTS, ROLE_OPTIONS } from "../../data/users";
import type { InviteValues, UserRole } from "../../types/user";

interface InviteUserDrawerProps {
  onClose: () => void;
  /** Return an error message to show in the form, or null on success. */
  onInvite: (values: InviteValues) => string | null;
}

const labelClass =
  "font-label-sm text-label-sm font-bold text-on-surface uppercase tracking-wider";
const fieldClass =
  "relative flex items-center bg-surface-container-low rounded-lg px-space-md py-2 focus-within:bg-surface-container-lowest focus-within:shadow-xs transition-all";

export default function InviteUserDrawer({
  onClose,
  onInvite,
}: InviteUserDrawerProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<UserRole>("hr");
  const [departmentValue, setDepartmentValue] = useState(DEPARTMENTS[0].value);
  const [error, setError] = useState<string | null>(null);
  const [phase, setPhase] = useState<"idle" | "sending" | "sent">("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Clear timers on unmount
  useEffect(() => {
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (phase !== "idle") return;

    if (!name.trim()) {
      setError("Full name is required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Enter a valid enterprise work email.");
      return;
    }

    const result = onInvite({ name, email, role, departmentValue });
    if (result) {
      setError(result);
      return;
    }

    setError(null);
    setPhase("sending");
    timers.current.push(setTimeout(() => setPhase("sent"), 600));
    timers.current.push(setTimeout(onClose, 1400));
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="invite-title"
    >
      <div
        className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <aside className="relative w-full max-w-md h-full overflow-y-auto bg-surface-container-lowest shadow-xl p-space-lg flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex items-start justify-between pb-space-sm">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Icon name="person_add" className="text-[20px] text-primary" />
              <h2
                id="invite-title"
                className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight"
              >
                Invite Team Member
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Provision RBAC credential with hardware-backed cryptographic role
              boundary.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="new-user-name" className={labelClass}>
              Full Legal Name
            </label>
            <div className={fieldClass}>
              <Icon
                name="person"
                className="text-[18px] text-outline mr-space-xs"
              />
              <input
                id="new-user-name"
                type="text"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jane Doe"
                className="w-full bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="new-user-email" className={labelClass}>
              Enterprise Work Email
            </label>
            <div className={fieldClass}>
              <Icon
                name="mail"
                className="text-[18px] text-outline mr-space-xs"
              />
              <input
                id="new-user-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none"
              />
            </div>
          </div>

          {/* Role */}
          <div className="flex flex-col gap-space-xs">
            <span className={labelClass}>Cryptographic RBAC Role</span>
            <div className="grid grid-cols-1 gap-space-xs">
              {ROLE_OPTIONS.map((option) => {
                const selected = role === option.value;
                return (
                  <label
                    key={option.value}
                    className={`p-space-md rounded-xl cursor-pointer transition-all flex items-start gap-space-sm ${
                      selected
                        ? "bg-secondary-fixed/40 ring-1 ring-secondary/30"
                        : "bg-surface-container-low hover:bg-surface-container"
                    }`}
                  >
                    <input
                      type="radio"
                      name="rbac-role"
                      value={option.value}
                      checked={selected}
                      onChange={() => setRole(option.value)}
                      className="mt-1 accent-primary h-4 w-4"
                    />
                    <div className="flex flex-col gap-1 flex-1">
                      <div className="flex items-center justify-between gap-space-sm">
                        <span className="font-label-lg text-label-lg font-bold text-on-surface">
                          {option.title}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm ${option.badgeClass}`}
                        >
                          {option.badge}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {option.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Department */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="department-select" className={labelClass}>
              Assigned Business Unit
            </label>
            <div className="relative bg-surface-container-low rounded-lg px-space-md py-2 flex items-center">
              <Icon
                name="domain"
                className="text-[18px] text-outline mr-space-xs"
              />
              <select
                id="department-select"
                value={departmentValue}
                onChange={(e) => setDepartmentValue(e.target.value)}
                className="w-full bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none appearance-none cursor-pointer"
              >
                {DEPARTMENTS.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
              <Icon
                name="expand_more"
                className="text-[18px] text-outline pointer-events-none"
              />
            </div>
          </div>

          {/* Policy banner */}
          <div className="p-space-sm rounded-lg bg-surface-container flex items-start gap-space-xs">
            <Icon name="lock" className="text-[18px] text-secondary mt-0.5" />
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm font-bold text-on-surface">
                Mandatory SSO &amp; WebAuthn
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Recipient must register a hardware FIDO2 key upon first
                credential exchange.
              </p>
            </div>
          </div>

          {error && (
            <p
              role="alert"
              className="font-body-sm text-body-sm text-error bg-error-container px-3 py-2 rounded-lg"
            >
              {error}
            </p>
          )}

          {/* Actions */}
          <div className="flex items-center justify-end gap-space-sm pt-space-xs">
            <button
              type="button"
              onClick={onClose}
              className="px-space-md py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={phase !== "idle"}
              className="flex items-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container shadow-sm font-label-lg text-label-lg font-bold transition-all disabled:opacity-80"
            >
              {phase === "idle" && (
                <>
                  <Icon name="forward_to_inbox" className="text-[18px]" />
                  <span>Send Invite Link</span>
                </>
              )}
              {phase === "sending" && (
                <>
                  <Icon name="refresh" className="text-[18px] animate-spin" />
                  <span>Transmitting...</span>
                </>
              )}
              {phase === "sent" && (
                <>
                  <Icon name="check_circle" className="text-[18px]" />
                  <span>Dispatched</span>
                </>
              )}
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
}
