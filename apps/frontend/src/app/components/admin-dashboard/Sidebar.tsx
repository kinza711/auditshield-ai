"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../ui/Icon";

type NavItem = { label: string; href: string; icon: string };
type NavSection = { title: string; items: NavItem[] };

const NAV_SECTIONS: NavSection[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/admin/dashboard", icon: "grid_view" },
      {
        label: "Upload & Scan",
        href: "/admin/uploads",
        icon: "upload_file",
      },
    ],
  },
  {
    title: "Compliance & Security",
    items: [
      {
        label: "Compliance Audit",
        href: "/admin/compliance-audit",
        icon: "verified_user",
      },
      {
        label: "Privacy Policy & Guardrails",
        href: "/admin/policy-guardrails",
        icon: "shield_lock",
      },
      {
        label: "Audit History Logs",
        href: "/admin/audit-logs",
        icon: "receipt_long",
      },
    ],
  },
  {
    title: "Access Control (RBAC)",
    items: [
      {
        label: "Manage Users & Roles",
        href: "/admin/manageusers",
        icon: "group",
      },
      {
        label: "Add Users",
        href: "/admin/addusers",
        icon: "man",
      },
    ],
  },
  {
    title: "System",
    items: [
      {
        label: "Cloud Integrations",
        href: "/admin/integrations",
        icon: "hub",
      },
      { label: "Settings", href: "/admin/settings", icon: "settings" },
      { label: "Profile", href: "/admin/profile", icon: "account_circle" },
    ],
  },
];

// TODO: replace with the logged-in user from your auth/session
const CURRENT_USER = { name: "Eleanor Vance", role: "Super Admin" };

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  const initials = CURRENT_USER.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.06)] flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col flex-1 min-h-0">
        {/* Brand */}
        <div className="h-16 px-space-md flex items-center gap-space-sm shrink-0 bg-surface-container-low/40">
          <Link
            href="/dashboard"
            className="flex items-center gap-space-sm min-w-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="AuditShield AI Logo"
              className="h-8 w-auto max-w-[130px] object-contain"
            />
            <span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider whitespace-nowrap">
              Admin Portal
            </span>
          </Link>
        </div>

        {/* Nav */}
        <div className="min-h-0 flex-1 space-y-space-sm overflow-y-auto px-space-sm py-space-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-space-xs">
              <div className="px-space-sm py-space-xs font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
                {section.title}
              </div>
              <nav className="space-y-0.5">
                {section.items.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-space-sm px-space-sm py-2 rounded-lg font-label-md text-label-md transition-colors ${
                        active
                          ? "bg-secondary-container text-on-secondary-container font-bold shadow-sm"
                          : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                      }`}
                    >
                      <Icon name={item.icon} className="text-[20px]" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </div>
      {/* User card */}
      <div className="p-space-sm bg-surface-container-low shrink-0">
        <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="w-9 h-9 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 font-label-md text-label-md font-bold">
              {initials}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md text-on-surface truncate">
                {CURRENT_USER.name}
              </span>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                {CURRENT_USER.role}
              </span>
            </div>
          </div>
          {/* TODO: call your logout endpoint before redirecting */}
          <Link
            href="/login"
            title="Sign out"
            aria-label="Sign out"
            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors shrink-0"
          >
            <Icon name="logout" className="text-[20px]" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
