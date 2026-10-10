import type { User, UserFilter, UserRole } from "../types/user";

export const INITIAL_USERS: User[] = [
  {
    id: "u1",
    name: "Sarah Khan",
    email: "sarah.khan@enterprise.com",
    role: "hr",
    department: "Human Resources",
    status: "active",
  },
  {
    id: "u2",
    name: "Marcus Vance",
    email: "m.vance@enterprise.com",
    role: "auditor",
    department: "Internal Audit",
    status: "active",
  },
  {
    id: "u3",
    name: "Elena Rostova",
    email: "e.rostova@enterprise.com",
    role: "hr",
    department: "Legal & Compliance",
    status: "active",
  },
  {
    id: "u4",
    name: "David Chen",
    email: "d.chen@enterprise.com",
    role: "auditor",
    department: "Security & Risk",
    status: "active",
  },
  {
    id: "u5",
    name: "Zainab Fatima",
    email: "zainab@enterprise.com",
    role: "hr",
    department: "Talent Acquisition",
    status: "pending",
  },
  {
    id: "u6",
    name: "Julian Sterling",
    email: "j.sterling@enterprise.com",
    role: "hr",
    department: "Finance Operations",
    status: "active",
  },
  {
    id: "u7",
    name: "Robert Taylor",
    email: "r.taylor@enterprise.com",
    role: "auditor",
    department: "External Audit (KPMG)",
    status: "disabled",
  },
];

export const DEPARTMENTS = [
  {
    value: "hr",
    label: "Human Resources (Talent Acquisition)",
    short: "Human Resources",
  },
  {
    value: "legal",
    label: "Legal & Regulatory Compliance",
    short: "Legal & Compliance",
  },
  {
    value: "audit",
    label: "Internal Financial & Security Audit",
    short: "Internal Audit",
  },
  {
    value: "secops",
    label: "Security Operations (SOC-2 Enforcers)",
    short: "Security Operations",
  },
];

export const ROLE_OPTIONS: {
  value: UserRole;
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
}[] = [
  {
    value: "hr",
    title: "HR Member",
    badge: "Standard Upload",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed",
    description:
      "Upload employee documentation, trigger redactions, & view owned AI pipeline results.",
  },
  {
    value: "auditor",
    title: "Compliance Auditor",
    badge: "Zero Raw Access",
    badgeClass: "bg-primary-fixed text-on-primary-fixed",
    description:
      "Inspect confidence scores, verify differential privacy, and monitor immutable logs without raw document exposure.",
  },
];

export const FILTER_TABS: { value: UserFilter; label: string }[] = [
  { value: "all", label: "All Users" },
  { value: "hr", label: "HR Members" },
  { value: "auditor", label: "Auditors" },
  { value: "pending", label: "Pending" },
];
