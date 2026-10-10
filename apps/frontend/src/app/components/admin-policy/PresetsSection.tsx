"use client";

import { useState } from "react";
import Icon from "../ui/Icon";
import { REGULATORY_PRESETS } from "../../data/guardrails";
import type { RegulatoryPreset } from "../../types/guardrail";

function PresetCard({
  preset,
  onEnable,
}: {
  preset: RegulatoryPreset;
  onEnable: (id: string) => void;
}) {
  const active = preset.status === "active";

  return (
    <div
      className={`p-space-md rounded-xl flex flex-col justify-between gap-space-sm hover:shadow-sm transition-all group ${
        active ? "bg-surface-container-low" : "bg-surface-container-highest/60"
      }`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`font-label-lg text-label-lg text-on-surface font-semibold transition-colors ${
            active ? "group-hover:text-primary" : ""
          }`}
        >
          {preset.name}
        </span>
        <span
          className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${
            active
              ? "bg-primary-fixed text-primary"
              : "bg-surface-container text-on-surface-variant"
          }`}
        >
          {active ? "Active" : "Standby"}
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
        {preset.description}
      </p>
      <div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
        <span className="font-mono text-[11px]">{preset.version}</span>
        {active ? (
          <button
            type="button"
            className="text-secondary hover:text-on-secondary-container underline"
          >
            Audit Spec
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onEnable(preset.id)}
            className="text-primary hover:underline font-semibold"
          >
            Enable
          </button>
        )}
      </div>
    </div>
  );
}

export default function PresetsSection() {
  const [presets, setPresets] = useState<RegulatoryPreset[]>(REGULATORY_PRESETS);

  const enable = (id: string) =>
    setPresets((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "active" } : p))
    );

  return (
    <section
      aria-label="Regulatory Presets Status"
      className="rounded-2xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col gap-space-md"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center">
            <Icon name="policy" className="text-secondary text-[20px]" />
          </div>
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Regulatory Compliance Standard Presets
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              One-click enclave baselines mapped automatically to international
              statutory guidelines.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Global Enforce Mode:
          </span>
          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
            Deterministic Strict
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-space-md">
        {presets.map((preset) => (
          <PresetCard key={preset.id} preset={preset} onEnable={enable} />
        ))}
      </div>
    </section>
  );
}