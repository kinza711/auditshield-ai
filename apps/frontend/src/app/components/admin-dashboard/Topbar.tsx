"use client";

import Icon from "../ui/Icon";

type TopbarProps = {
  onMenuClick: () => void;
};

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-[260px] h-16 z-40 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 w-full px-space-md lg:px-space-lg flex items-center justify-between gap-space-md">
        {/* Left: menu + search */}
        <div className="flex items-center gap-space-sm flex-1 max-w-sm">
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open navigation menu"
            className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
          >
            <Icon name="menu" className="text-[22px]" />
          </button>

          <div className="relative flex-1 hidden sm:block">
            <Icon
              name="search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]"
            />
            <input
              type="text"
              placeholder="Search docs, or audit logs (Ctrl + K)..."
              className="w-full pl-9 pr-14 py-2 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-secondary/40 transition-all shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
            />
            <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant pointer-events-none">
              Ctrl K
            </kbd>
          </div>
        </div>

        {/* Right: status + notifications + profile */}
        <div className="flex items-center gap-space-sm shrink-0">
          <button
            type="button"
            aria-label="Notifications"
            className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
          >
            <Icon name="notifications" className="text-[22px]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
          </button>

          <div className="flex items-center gap-space-xs">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Icon name="person" className="text-on-primary text-[18px]" />
            </div>
            <Icon
              name="expand_more"
              className="text-on-surface-variant text-[18px] hidden sm:block"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
