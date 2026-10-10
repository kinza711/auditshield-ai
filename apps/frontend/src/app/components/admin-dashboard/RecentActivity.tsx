"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Icon from "../ui/Icon";

type Status = "flagged" | "passed";
type Dept = "Legal" | "HR" | "Finance";

type Doc = {
  id: string;
  name: string;
  size: string;
  icon: string;
  iconClass: string;
  user: string; // first name
  dept: Dept;
  time: string;
  pii: { icon: string; label: string; tone: "alert" | "ok" };
  status: Status;
};

// TODO: replace with data from your API
const DOCS: Doc[] = [
  {
    id: "DOC-8910",
    name: "Vendor_Master_Contract_2026.pdf",
    size: "4.2 MB",
    icon: "picture_as_pdf",
    iconClass: "bg-primary-fixed text-primary",
    user: "Eleanor",
    dept: "Legal",
    time: "Just now",
    pii: { icon: "emergency", label: "7 Flagged", tone: "alert" },
    status: "flagged",
  },
  {
    id: "DOC-8909",
    name: "Clinical_Trial_Patient_Record_v2.pdf",
    size: "1.8 MB",
    icon: "medical_services",
    iconClass: "bg-primary-fixed text-primary",
    user: "Marcus",
    dept: "HR",
    time: "14 mins ago",
    pii: { icon: "priority_high", label: "5 Critical (HIPAA)", tone: "alert" },
    status: "flagged",
  },
  {
    id: "DOC-8908",
    name: "Executive_Severance_Package.docx",
    size: "890 KB",
    icon: "article",
    iconClass: "bg-secondary-fixed text-on-secondary-fixed",
    user: "Sarah",
    dept: "Finance",
    time: "1 hour ago",
    pii: { icon: "visibility_off", label: "14 Masked", tone: "ok" },
    status: "passed",
  },
  {
    id: "DOC-8907",
    name: "Q4_Payroll_Tax_Ledger.pdf",
    size: "12.4 MB",
    icon: "receipt_long",
    iconClass: "bg-secondary-fixed text-on-secondary-fixed",
    user: "David",
    dept: "Finance",
    time: "Yesterday, 17:42",
    pii: { icon: "visibility_off", label: "48 Masked", tone: "ok" },
    status: "passed",
  },
  {
    id: "DOC-8906",
    name: "Employee_Onboarding_Form_B9.pdf",
    size: "320 KB",
    icon: "folder_shared",
    iconClass: "bg-surface-container-high text-on-surface-variant",
    user: "Marcus",
    dept: "HR",
    time: "Yesterday, 14:15",
    pii: { icon: "check_circle", label: "0 Clean", tone: "ok" },
    status: "passed",
  },
];

const TOTAL_EVENTS = 1482;

const STATUS_META: Record<
  Status,
  { icon: string; label: string; className: string }
> = {
  flagged: {
    icon: "flag",
    label: "Flagged",
    className: "bg-primary-fixed text-primary",
  },
  passed: {
    icon: "check_circle",
    label: "Passed",
    className: "bg-secondary-fixed text-secondary",
  },
};

const iconBtn =
  "inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-primary";

export default function RecentActivity() {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState<"all" | Dept>("all");
  const [status, setStatus] = useState<"all" | Status>("all");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DOCS.filter(
      (d) =>
        (dept === "all" || d.dept === dept) &&
        (status === "all" || d.status === status) &&
        (!q ||
          d.name.toLowerCase().includes(q) ||
          d.id.toLowerCase().includes(q) ||
          d.user.toLowerCase().includes(q)),
    );
  }, [query, dept, status]);

  const flaggedCount = DOCS.filter((d) => d.status === "flagged").length;

  const field =
    "w-full rounded-lg bg-surface-container-low px-3 py-2 font-body-sm text-body-sm text-on-surface focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary-container transition-colors";

  return (
    <section className="flex w-full min-w-0 flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm">
      {/* Header + filters */}
      <div className="flex flex-col gap-space-sm p-4 pb-space-md sm:p-space-lg">
        <div className="flex flex-col gap-space-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              Recent System Activity &amp; Flagged Documents
            </h2>
            <p className="mt-0.5 font-body-sm text-body-sm text-on-surface-variant">
              Ledger of active document redactions, role audits, and pending
              manual overrides.
            </p>
          </div>
          <span className="inline-flex items-center gap-1 self-start whitespace-nowrap rounded-full bg-secondary-fixed px-2.5 py-1 font-label-sm text-label-sm text-on-secondary-fixed sm:self-auto">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary motion-reduce:animate-none" />
            Streaming Ledger
          </span>
        </div>

        <div className="grid grid-cols-1 gap-space-sm pt-space-sm sm:grid-cols-12">
          <div className="relative sm:col-span-6">
            <Icon
              name="search"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by document or user..."
              aria-label="Filter by document or user"
              className={`${field} pl-9`}
            />
          </div>
          <div className="sm:col-span-3">
            <select
              value={dept}
              onChange={(e) => setDept(e.target.value as "all" | Dept)}
              aria-label="Filter by department"
              className={`${field} cursor-pointer`}
            >
              <option value="all">All Departments</option>
              <option value="Legal">Legal &amp; Contracts</option>
              <option value="HR">HR &amp; People</option>
              <option value="Finance">Finance &amp; Tax</option>
            </select>
          </div>
          <div className="sm:col-span-3">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "all" | Status)}
              aria-label="Filter by status"
              className={`${field} cursor-pointer`}
            >
              <option value="all">All Statuses</option>
              <option value="flagged">Flagged ({flaggedCount})</option>
              <option value="passed">
                Passed ({(TOTAL_EVENTS - flaggedCount).toLocaleString()})
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Table (scrolls sideways on small screens) */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[760px] text-left font-body-sm text-body-sm">
          <thead>
            <tr className="bg-surface-container-low font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              <th className="px-space-md py-3">Document Name</th>
              <th className="px-space-md py-3">Uploaded By</th>
              <th className="px-space-md py-3">Dept</th>
              <th className="px-space-md py-3">Timestamp</th>
              <th className="px-space-md py-3">PII Count</th>
              <th className="px-space-md py-3 text-center">Status</th>
              <th className="px-space-md py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((d) => {
              const s = STATUS_META[d.status];
              return (
                <tr
                  key={d.id}
                  className="group transition-colors hover:bg-surface-container-low"
                >
                  <td className="px-space-md py-3.5">
                    <div className="flex items-center gap-space-sm">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${d.iconClass}`}
                      >
                        <Icon name={d.icon} className="text-[18px]" />
                      </span>
                      <div className="flex min-w-0 flex-col">
                        <span className="max-w-[260px] truncate font-headline-sm text-headline-sm text-on-surface transition-colors group-hover:text-primary">
                          {d.name}
                        </span>
                        <span className="font-mono text-body-sm text-on-surface-variant">
                          {d.size} • ID #{d.id}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-space-md py-3.5 font-label-md text-label-md text-on-surface">
                    {d.user}
                  </td>

                  <td className="px-space-md py-3.5">
                    <span className="rounded-full bg-surface-container-high px-2 py-0.5 font-label-sm text-label-sm text-on-surface">
                      {d.dept}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-space-md py-3.5 text-on-surface-variant">
                    {d.time}
                  </td>

                  <td className="whitespace-nowrap px-space-md py-3.5">
                    <span
                      className={`inline-flex items-center gap-1 ${
                        d.pii.tone === "alert"
                          ? "font-semibold text-primary"
                          : "text-on-surface-variant"
                      }`}
                    >
                      <Icon
                        name={d.pii.icon}
                        className={`text-[16px] ${
                          d.pii.tone === "ok" ? "text-secondary" : ""
                        }`}
                      />
                      {d.pii.label}
                    </span>
                  </td>

                  {/* Status: icon only */}
                  <td className="px-space-md py-3.5 text-center">
                    <span
                      role="img"
                      title={s.label}
                      aria-label={s.label}
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${s.className}`}
                    >
                      <Icon name={s.icon} className="text-[18px]" />
                    </span>
                  </td>

                  {/* Actions: icon only */}
                  <td className="whitespace-nowrap px-space-md py-3.5 text-right">
                    <div className="inline-flex items-center gap-1">
                      {d.status === "flagged" ? (
                        <button
                          type="button"
                          title="Override"
                          aria-label={`Override redaction for ${d.name}`}
                          // TODO: open the override flow for d.id
                          className={`${iconBtn} bg-primary text-on-primary shadow-sm hover:bg-primary-container`}
                        >
                          <Icon name="gavel" className="text-[18px]" />
                        </button>
                      ) : (
                        <Link
                          href="/dashboard/audit-logs"
                          title="View Audit Log"
                          aria-label={`View audit log for ${d.name}`}
                          className={`${iconBtn} bg-surface-container-high text-on-surface hover:bg-surface-container-highest`}
                        >
                          <Icon name="history" className="text-[18px]" />
                        </Link>
                      )}
                      <button
                        type="button"
                        title="View Split Comparison"
                        aria-label={`View split comparison for ${d.name}`}
                        // TODO: open the split comparison for d.id
                        className={`${iconBtn} text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface`}
                      >
                        <Icon name="splitscreen" className="text-[18px]" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}

            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-space-md py-10 text-center text-on-surface-variant"
                >
                  No documents match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-between gap-space-sm bg-surface-container-lowest p-space-md text-center sm:flex-row sm:text-left">
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          Showing <strong className="text-on-surface">{rows.length}</strong> of{" "}
          <strong className="text-on-surface">
            {TOTAL_EVENTS.toLocaleString()}
          </strong>{" "}
          audit events
        </span>
        <Link
          href="/dashboard/audit-logs"
          className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary transition-colors hover:text-primary"
        >
          <span>View Complete Ledger in Audit History Logs</span>
          <Icon name="arrow_forward" className="text-[16px]" />
        </Link>
      </div>
    </section>
  );
}
