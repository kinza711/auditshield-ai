export type GuardrailCategory = "pii" | "financial" | "health" | "secrets";
export type GuardrailMode = "masking" | "hashing" | "token" | "blocking";

export interface GuardrailRule {
  id: string;
  title: string;
  ruleCode: string;
  category: GuardrailCategory;
  mode: GuardrailMode;
  enabled: boolean;
  icon: string; // Material Symbols name
  iconWrapClass: string;
  iconClass: string;
  engine: string;
  engineDetail: string;
  strategyIcon: string;
  strategyLabel: string;
  strategyClass: string;
  enforcementLabel: string;
  enforcementClass: string;
  enforcementDotClass: string;
}

export interface RegulatoryPreset {
  id: string;
  name: string;
  description: string;
  version: string;
  status: "active" | "standby";
}

export interface ControlItem {
  id: string;
  icon: string;
  iconClass: string;
  title: string;
  description: string;
  badge: string;
}