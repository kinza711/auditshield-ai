import type { Metadata } from "next";
import Link from "next/link";
import Icon from "../../components/ui/Icon";
import StatsGrid from "../../components/admin-dashboard/StatsGrid";
import GuardrailsCard from "../../components/admin-dashboard/GuardrailsCard";
import ThroughputChart from "@/app/components/admin-dashboard/ThroughputChart";
import RecentActivity from "@/app/components/admin-dashboard/RecentActivity";

export const metadata: Metadata = {
  title: "Dashboard - AuditShield AI",
};

export default function DashboardPage() {
  return (
    <div className="relative isolate w-full px-4 sm:px-space-md lg:px-space-lg py-space-lg max-w-[1600px] mx-auto space-y-space-lg">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 sm:right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary-fixed-dim/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 left-0 sm:left-10 w-64 h-64 sm:w-80 sm:h-80 bg-secondary-container/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Welcome header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 space-y-2">
          <div className="flex flex-wrap items-center gap-space-xs">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">
              Live Surveillance
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Policy Engine v4.2
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight break-words">
            Welcome back, System Admin
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Real-time compliance oversight and AI document redaction status.
          </p>
        </div>

        {/* Actions */}
        <div className="flex w-full flex-col gap-2 sm:flex-row md:w-auto md:shrink-0">
          <Link
            href="/dashboard/users/new"
            className="inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-outline-variant/50 bg-surface-container-lowest px-3 font-label-lg text-label-lg text-on-surface shadow-sm transition-colors hover:bg-surface-container-high sm:w-auto"
          >
            <Icon name="person_add" className="shrink-0 text-[20px]" />
            <span>Add New User</span>
          </Link>
          <Link
            href="/dashboard/upload"
            className="inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-primary px-3 font-label-lg text-label-lg text-on-primary shadow-sm transition-all hover:bg-primary-container hover:shadow-md sm:w-auto"
          >
            <Icon name="upload_file" className="shrink-0 text-[20px]" />
            <span>Upload Documents</span>
          </Link>
        </div>
      </div>

      <StatsGrid />

      <div className="grid grid-cols-1 items-stretch gap-space-lg lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-8">
          <ThroughputChart />
        </div>
        <div className="min-w-0 space-y-space-md lg:col-span-4">
          <GuardrailsCard />
        </div>
      </div>

      <RecentActivity />
    </div>
  );
}
