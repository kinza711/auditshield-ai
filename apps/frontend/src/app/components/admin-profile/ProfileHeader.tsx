"use client";

import { useState } from "react";
import Icon from "../ui/Icon";

type SaveState = "idle" | "saving" | "saved";

export default function ProfileHeader() {
  const [state, setState] = useState<SaveState>("idle");

  const handleSave = () => {
    const form = document.getElementById("profile-form") as HTMLFormElement | null;
    form?.requestSubmit();
    setState("saving");
    // TODO: await your real save request instead of this timer
    setTimeout(() => {
      setState("saved");
      setTimeout(() => setState("idle"), 2200);
    }, 900);
  };

  return (
    <div className="flex flex-col gap-space-md md:flex-row md:items-center md:justify-between">
      <div className="min-w-0 space-y-1">
        <div className="flex flex-wrap items-center gap-space-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-fixed px-2.5 py-0.5 font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Identity &amp; Access Management
          </span>
          <span className="inline-flex items-center gap-1 rounded bg-surface-container-high px-2 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
            <Icon name="security" className="shrink-0 text-[14px] text-primary" />
            Role: Super Admin (Enclave Root Authority)
          </span>
        </div>
        <h1 className="break-words font-headline-xl text-headline-xl tracking-tight text-on-surface">
          Administrator Profile &amp; Security Credentials
        </h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Cryptographically notarized root access matrix for high-assurance
          enterprise compliance nodes.
        </p>
      </div>

      <div className="flex w-full flex-col gap-space-sm sm:flex-row md:w-auto md:shrink-0">
        <button
          type="button"
          // TODO: call your audit-log export endpoint
          className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-surface-container-lowest px-space-md font-label-lg text-label-lg text-on-surface shadow-sm transition-all hover:bg-surface-container sm:w-auto"
        >
          <Icon name="file_download" className="text-[18px] text-secondary" />
          Download Security Audit Log
        </button>
        <button
          type="button"
          onClick={handleSave}
          disabled={state === "saving"}
          className={`inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg px-space-md font-label-lg text-label-lg text-on-primary shadow-sm transition-all disabled:opacity-80 sm:w-auto ${
            state === "saved"
              ? "bg-secondary"
              : "bg-primary hover:bg-primary-container"
          }`}
        >
          <Icon
            name={
              state === "saving"
                ? "refresh"
                : state === "saved"
                  ? "check"
                  : "verified_user"
            }
            className={`text-[18px] ${state === "saving" ? "animate-spin motion-reduce:animate-none" : ""}`}
          />
          {state === "saving"
            ? "Signing & Saving..."
            : state === "saved"
              ? "Changes Saved & Signed"
              : "Save Profile Changes"}
        </button>
      </div>
    </div>
  );
}