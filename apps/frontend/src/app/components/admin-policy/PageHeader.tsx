"use client";

import Icon from "../ui/Icon";
import { GUARDRAIL_RULES } from "../../data/guardrails";

export default function PageHeader() {
  const handleExport = () => {
    const blob = new Blob([JSON.stringify(GUARDRAIL_RULES, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "guardrail-rule-set.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCreate = () => {
    document.getElementById("rule-search")?.focus();
  };

  return (
    <header className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-lg">
      <div className="flex flex-col gap-space-xs max-w-3xl">
        <div className="flex flex-wrap items-center gap-space-sm mb-space-xs">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">
              Policy Engine v4.8
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            • Active in Enclave (us-east-1a)
          </span>
          <span className="px-2 py-0.5 rounded bg-primary-fixed text-primary font-label-sm text-label-sm font-semibold">
            Zero-Leak Guard
          </span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          Privacy Policy &amp; AI Guardrail Rules
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Configure global enterprise anonymization policies, regulatory compliance
          standards, and real-time LLM token masking guardrails within
          hardware-isolated Nitro enclaves.
        </p>
      </div>

      <div className="flex items-center gap-space-sm self-stretch xl:self-auto shrink-0">
        <button
          type="button"
          onClick={handleExport}
          className="flex-1 xl:flex-initial inline-flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface-container transition-all font-label-lg text-label-lg text-on-surface"
        >
          <Icon name="download" className="text-[18px] text-secondary" />
          <span>Export Rule Set</span>
        </button>
        <button
          type="button"
          onClick={handleCreate}
          className="flex-1 xl:flex-initial inline-flex items-center justify-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary shadow-sm hover:shadow-md transition-all font-label-lg text-label-lg"
        >
          <Icon name="add_moderator" className="text-[18px]" />
          <span>Create Custom Guardrail</span>
        </button>
      </div>
    </header>
  );
}