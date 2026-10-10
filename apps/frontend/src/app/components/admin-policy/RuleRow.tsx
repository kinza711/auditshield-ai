"use client";

import Icon from "../ui/Icon";
import ToggleSwitch from "../ui/toggleSwitch";
import type { GuardrailRule } from "../../types/guardrail";

interface RuleRowProps {
  rule: GuardrailRule;
  onToggle: (id: string, enabled: boolean) => void;
}

export default function RuleRow({ rule, onToggle }: RuleRowProps) {
  return (
    <tr className="hover:bg-secondary-fixed/10 transition-colors group">
      <td className="py-4 px-space-lg">
        <div className="flex items-center gap-space-sm">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${rule.iconWrapClass}`}
          >
            <Icon name={rule.icon} className={`text-[20px] ${rule.iconClass}`} />
          </div>
          <div>
            <div className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
              {rule.title}
            </div>
            <div className="font-label-sm text-label-sm text-on-surface-variant font-mono">
              {rule.ruleCode}
            </div>
          </div>
        </div>
      </td>

      <td className="py-4 px-space-md">
        <div className="flex flex-col">
          <span className="font-medium text-on-surface">{rule.engine}</span>
          <span className="text-on-surface-variant text-[11px]">
            {rule.engineDetail}
          </span>
        </div>
      </td>

      <td className="py-4 px-space-md">
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md font-label-sm text-label-sm font-semibold ${rule.strategyClass}`}
        >
          <Icon name={rule.strategyIcon} className="text-[14px]" />
          <span>{rule.strategyLabel}</span>
        </span>
      </td>

      <td className="py-4 px-space-md">
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold ${rule.enforcementClass}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${rule.enforcementDotClass}`} />
          <span>{rule.enforcementLabel}</span>
        </div>
      </td>

      <td className="py-4 px-space-md text-center">
        <ToggleSwitch
          checked={rule.enabled}
          onChange={(next) => onToggle(rule.id, next)}
          label={`Toggle ${rule.title}`}
        />
      </td>

      <td className="py-4 px-space-lg text-right">
        <div className="inline-flex items-center gap-1">
          <button
            type="button"
            title="Configure Rule Thresholds"
            className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-surface-container rounded transition-colors"
          >
            <Icon name="tune" className="text-[18px]" />
          </button>
          <button
            type="button"
            title="Edit Rule Spec"
            className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded transition-colors"
          >
            <Icon name="edit" className="text-[18px]" />
          </button>
        </div>
      </td>
    </tr>
  );
}