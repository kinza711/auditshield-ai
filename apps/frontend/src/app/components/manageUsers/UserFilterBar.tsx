import Icon from "../ui/Icon";
import { FILTER_TABS } from "../../data/users";
import type { UserFilter } from "../../types/user";

interface UserFilterBarProps {
  filter: UserFilter;
  onFilterChange: (filter: UserFilter) => void;
  query: string;
  onQueryChange: (query: string) => void;
  counts: Record<UserFilter, number>;
}

export default function UserFilterBar({
  filter,
  onFilterChange,
  query,
  onQueryChange,
  counts,
}: UserFilterBarProps) {
  return (
    <div className="p-space-md flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
      {/* Tabs */}
      <div className="inline-flex flex-wrap items-center p-1 rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md self-start">
        {FILTER_TABS.map((tab) => {
          const active = filter === tab.value;
          const badgeClass = active
            ? "bg-surface-container-lowest/80"
            : tab.value === "pending"
            ? "bg-primary-fixed text-on-primary-fixed"
            : "bg-surface-container";

          return (
            <button
              key={tab.value}
              type="button"
              aria-pressed={active}
              onClick={() => onFilterChange(tab.value)}
              className={`px-space-md py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                active
                  ? "bg-secondary-fixed text-on-secondary-fixed font-semibold shadow-xs"
                  : "hover:text-on-surface"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${badgeClass}`}>
                {counts[tab.value]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative flex items-center w-full lg:w-96 bg-surface-container-low rounded-lg px-space-sm py-1.5">
        <Icon name="search" className="text-[18px] text-on-surface-variant mr-space-xs" />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search by name, email, department..."
          aria-label="Search users"
          className="w-full bg-transparent text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
            className="text-outline hover:text-on-surface"
          >
            <Icon name="close" className="text-[16px]" />
          </button>
        )}
      </div>
    </div>
  );
}