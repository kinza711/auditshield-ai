import type { User, UserRole, UserStatus } from "../types/user";

export const ROLE_META: Record<
  UserRole,
  { label: string; icon: string; badgeClass: string }
> = {
  hr: {
    label: "HR Member",
    icon: "badge",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed",
  },
  auditor: {
    label: "Auditor",
    icon: "policy",
    badgeClass: "bg-surface-container-highest text-on-surface",
  },
};

export const STATUS_META: Record<
  UserStatus,
  { label: string; dotClass: string; textClass: string; pulse: boolean }
> = {
  active: {
    label: "Active",
    dotClass: "bg-secondary",
    textClass: "text-on-surface",
    pulse: false,
  },
  pending: {
    label: "Pending Invite",
    dotClass: "bg-tertiary",
    textClass: "text-tertiary",
    pulse: true,
  },
  disabled: {
    label: "Disabled",
    dotClass: "bg-primary",
    textClass: "text-primary",
    pulse: false,
  },
};

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export function getAvatarClass(user: User): string {
  if (user.status === "disabled") return "bg-surface-container text-outline";
  if (user.status === "pending") return "bg-tertiary-fixed text-on-tertiary-fixed";
  if (user.role === "hr") return "bg-secondary-fixed text-on-secondary-fixed";
  return "bg-surface-container-highest text-on-surface";
}

export function getScope(user: User): {
  label: string;
  icon: string;
  iconClass: string;
  textClass: string;
} {
  if (user.status === "disabled") {
    return {
      label: "Access Terminated",
      icon: "block",
      iconClass: "text-outline",
      textClass: "text-outline",
    };
  }
  if (user.role === "hr") {
    return {
      label: "Resource-Level (Own Uploads)",
      icon: "lock",
      iconClass: "text-secondary",
      textClass: "text-on-surface-variant",
    };
  }
  return {
    label: "Metadata Only (Zero Raw Access)",
    icon: "visibility_off",
    iconClass: "text-primary",
    textClass: "text-on-surface-variant",
  };
}

export interface StatusBreakdown {
  active: number;
  pending: number;
  disabled: number;
}

function breakdown(list: User[]): StatusBreakdown {
  return {
    active: list.filter((u) => u.status === "active").length,
    pending: list.filter((u) => u.status === "pending").length,
    disabled: list.filter((u) => u.status === "disabled").length,
  };
}

export function getUserStats(users: User[]) {
  const hr = users.filter((u) => u.role === "hr");
  const auditors = users.filter((u) => u.role === "auditor");
  return {
    total: users.length,
    totalBreakdown: breakdown(users),
    hr: hr.length,
    hrBreakdown: breakdown(hr),
    auditors: auditors.length,
    auditorsBreakdown: breakdown(auditors),
  };
}

export function exportUsersCsv(users: User[]) {
  const esc = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const header = ["Name", "Email", "Role", "Department", "Status"];
  const rows = users.map((u) => [
    u.name,
    u.email,
    ROLE_META[u.role].label,
    u.department,
    STATUS_META[u.status].label,
  ]);
  const csv = [header, ...rows].map((r) => r.map(esc).join(",")).join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "user-directory.csv";
  a.click();
  URL.revokeObjectURL(url);
}