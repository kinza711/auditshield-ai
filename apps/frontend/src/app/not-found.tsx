import Link from "next/link";
import {
  ArrowRight,
  LayoutDashboard,
  ReceiptText,
  Search,
  Shield,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-dvh flex-col justify-between overflow-hidden bg-background font-body text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[300px] w-full max-w-5xl -translate-x-1/2 bg-gradient-to-b from-secondary-fixed/40 via-transparent to-transparent blur-3xl sm:h-[420px]" />

      <div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary-fixed/60 to-transparent blur-2xl sm:top-24 sm:h-[340px] sm:w-[340px]" />

      {/* Main */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:py-16">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
          {/* Shield Icon */}
          <div className="relative mb-5 sm:mb-6">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-outline-variant/50 bg-surface shadow-sm sm:h-20 sm:w-20">
              <div className="pointer-events-none absolute inset-0 scale-110 rounded-2xl border border-primary/20" />

              <Shield
                className="h-8 w-8 text-primary sm:h-10 sm:w-10"
                strokeWidth={1.8}
              />
            </div>

            {/* 404 Badge */}
            <div className="absolute -bottom-2 -right-3 whitespace-nowrap rounded-full border border-surface bg-secondary-fixed px-2 py-0.5 font-mono text-[10px] font-medium text-on-secondary-fixed shadow-sm">
              404_NULL
            </div>
          </div>

          {/* 404 */}
          <div className="mb-3 font-display text-6xl font-extrabold leading-none tracking-tight text-on-surface sm:text-7xl md:text-8xl">
            4<span className="text-primary">0</span>4
          </div>

          {/* Heading */}
          <h1 className="mb-3 font-display text-xl font-bold tracking-tight text-on-surface break-words sm:text-2xl md:text-3xl">
            Resource not found
          </h1>

          {/* Description */}
          <p className="mb-6 max-w-md text-sm leading-relaxed text-on-surface-variant sm:mb-8 md:text-base">
            The compliance record or ledger route you are looking for has been
            moved, archived, or does not exist.
          </p>

          {/* Search */}
          <div className="mb-6 w-full max-w-md sm:mb-8">
            <form
              className="relative flex items-center"
              //onSubmit={(event) => event.preventDefault()}
            >
              <Search className="pointer-events-none absolute left-3.5 h-[18px] w-[18px] text-on-surface-variant/60" />

              <input
                type="search"
                placeholder="Search hash or audit log..."
                aria-label="Search document hash or audit log"
                className="h-11 w-full min-w-0 rounded-xl border border-outline-variant/50 bg-surface pl-10 pr-20 text-base text-on-surface shadow-sm outline-none transition-all placeholder:text-on-surface-variant/60 focus:border-primary focus:ring-2 focus:ring-primary/10 sm:pr-24 sm:text-sm"
              />

              <button
                type="submit"
                className="absolute right-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
              >
                Search
              </button>
            </form>
          </div>

          {/* Primary Actions */}
          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
            {/* Dashboard */}
            <Link
              href="/"
              className="inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-primary px-6 text-sm font-semibold text-on-primary shadow-sm transition-all hover:bg-primary-container hover:shadow-md hover:shadow-primary/20 sm:w-auto"
            >
              <LayoutDashboard className="h-[18px] w-[18px] shrink-0" />
              <span>Return to Dashboard</span>
            </Link>

            {/* Audit Logs */}
            <Link
              href="/audit-logs"
              className="inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-outline-variant/50 bg-surface px-5 text-sm font-medium text-on-surface-variant shadow-sm transition-all hover:bg-surface-container hover:text-on-surface sm:w-auto"
            >
              <ReceiptText className="h-[18px] w-[18px] shrink-0" />
              <span>View Audit Logs</span>
            </Link>
          </div>

          {/* Support */}
          <div className="mt-6 sm:mt-8">
            <Link
              href="/contact"
              className="inline-flex flex-wrap items-center justify-center gap-1 py-2 text-center text-xs text-on-surface-variant transition-colors hover:text-primary"
            >
              <span>Need assistance? Contact Security Officer</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}