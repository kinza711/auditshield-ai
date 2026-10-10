"use client";

import { useMemo, useState } from "react";
import Icon from "../ui/Icon";
import RuleRow from "./RuleRow";
import { GUARDRAIL_RULES, TOTAL_RULES } from "../../data/guardrails";
import type {
  GuardrailCategory,
  GuardrailMode,
  GuardrailRule,
} from "../../types/guardrail";

type CategoryFilter = "all" | GuardrailCategory;
type ModeFilter = "all-modes" | GuardrailMode;

const selectClass =
  "px-3 py-2 bg-surface-container-lowest text-on-surface font-body-sm text-body-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all cursor-pointer";

export default function RulesTable() {
  const [rules, setRules] = useState<GuardrailRule[]>(GUARDRAIL_RULES);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [mode, setMode] = useState<ModeFilter>("all-modes");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rules.filter((r) => {
      const matchesQuery =
        !q ||
        [r.title, r.ruleCode, r.engine, r.engineDetail, r.strategyLabel]
          .join(" ")
          .toLowerCase()
          .includes(q);
      const matchesCategory = category === "all" || r.category === category;
      const matchesMode = mode === "all-modes" || r.mode === mode;
      return matchesQuery && matchesCategory && matchesMode;
    });
  }, [rules, query, category, mode]);

  const toggleRule = (id: string, enabled: boolean) =>
    setRules((prev) => prev.map((r) => (r.id === id ? { ...r, enabled } : r)));

  return (
    <section
      aria-label="Configured Guardrail Policies"
      className="rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col overflow-hidden"
    >
      {/* Controls bar */}
      <div className="p-space-lg flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md bg-surface-container-low/50">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
            Active LLM Guardrail Rule Set
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {TOTAL_RULES} enforced filtering layers applied sequentially during
            model inference &amp; context embedding.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-space-sm">
          <div className="relative flex-1 sm:flex-initial min-w-[240px]">
            <Icon
              name="search"
              className="absolute left-3 top-2.5 text-[18px] text-on-surface-variant"
            />
            <input
              id="rule-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search entity, regex, rule ID..."
              className="w-full pl-9 pr-3 py-2 bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all"
            />
          </div>

          <select
            aria-label="Filter by category"
            value={category}
            onChange={(e) => setCategory(e.target.value as CategoryFilter)}
            className={selectClass}
          >
            <option value="all">All Categories</option>
            <option value="pii">PII &amp; Identity</option>
            <option value="financial">Financial / PCI</option>
            <option value="health">Health / PHI</option>
            <option value="secrets">API Secrets &amp; Keys</option>
          </select>

          <select
            aria-label="Filter by enforcement mode"
            value={mode}
            onChange={(e) => setMode(e.target.value as ModeFilter)}
            className={selectClass}
          >
            <option value="all-modes">All Enforcement Modes</option>
            <option value="masking">Masking &amp; Redaction</option>
            <option value="hashing">SHA-256 Hashing</option>
            <option value="token">Tokenization</option>
            <option value="blocking">Strict Blocking</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left font-body-sm text-body-sm">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
              <th className="py-3.5 px-space-lg" scope="col">
                Rule &amp; Entity Type
              </th>
              <th className="py-3.5 px-space-md" scope="col">
                Detection Engine
              </th>
              <th className="py-3.5 px-space-md" scope="col">
                Sanitization Strategy
              </th>
              <th className="py-3.5 px-space-md" scope="col">
                Enforcement Level
              </th>
              <th className="py-3.5 px-space-md text-center" scope="col">
                Status
              </th>
              <th className="py-3.5 px-space-lg text-right" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container">
            {filtered.length > 0 ? (
              filtered.map((rule) => (
                <RuleRow key={rule.id} rule={rule} onToggle={toggleRule} />
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="py-10 text-center text-on-surface-variant font-body-md text-body-md"
                >
                  No guardrail rules match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-space-md px-space-lg bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
        <span>
          Showing {filtered.length} of {TOTAL_RULES} active privacy guardrail
          rules across 4 operational tiers
        </span>
        <div className="flex items-center gap-space-xs font-label-md text-label-md">
          <button
            type="button"
            disabled
            className="px-2.5 py-1 rounded bg-surface-container-lowest shadow-sm text-on-surface hover:bg-surface-container transition-colors disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-2 text-on-surface">Page 1 of 4</span>
          <button
            type="button"
            className="px-2.5 py-1 rounded bg-surface-container-lowest shadow-sm text-on-surface hover:bg-surface-container transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
