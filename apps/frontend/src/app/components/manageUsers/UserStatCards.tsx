import Icon from "../ui/Icon";
import { getUserStats , StatusBreakdown} from "../../lib/users";
import type { User } from "../../types/user";

interface StatCardConfig {
  id: string;
  eyebrow: string;
  title: string;
  value: number;
  caption: string;
  captionClass: string;
  icon: string;
  iconWrapClass: string;
  breakdown: StatusBreakdown;
}

function StatCard({ card }: { card: StatCardConfig }) {
  const items = [
    { label: "Active", count: card.breakdown.active, dot: "bg-secondary" },
    { label: "Pending", count: card.breakdown.pending, dot: "bg-tertiary" },
    { label: "Disabled", count: card.breakdown.disabled, dot: "bg-primary" },
  ];

  return (
    <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
            {card.eyebrow}
          </span>
          <span className="font-headline-md text-headline-md text-on-surface font-bold">
            {card.title}
          </span>
        </div>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${card.iconWrapClass}`}
        >
          <Icon name={card.icon} className="text-[22px]" />
        </div>
      </div>

      <div className="flex items-baseline gap-space-sm">
        <span className="font-display-lg text-display-lg text-on-surface font-extrabold tracking-tight">
          {card.value}
        </span>
        <span className={`font-label-lg text-label-lg font-semibold ${card.captionClass}`}>
          {card.caption}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-x-space-md gap-y-1 bg-surface-container-low px-space-sm py-1.5 rounded-lg">
        {items.map((item) => (
          <span
            key={item.label}
            className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5"
          >
            <span className={`w-2 h-2 rounded-full ${item.dot}`} />
            {item.count} {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function UserStatCards({ users }: { users: User[] }) {
  const stats = getUserStats(users);
  const share = (n: number) =>
    stats.total ? Math.round((n / stats.total) * 100) : 0;

  const cards: StatCardConfig[] = [
    {
      id: "total",
      eyebrow: "Active Workspace",
      title: "Total Users",
      value: stats.total,
      caption: "Authorized seats",
      captionClass: "text-secondary",
      icon: "group",
      iconWrapClass: "bg-secondary-fixed text-on-secondary-fixed",
      breakdown: stats.totalBreakdown,
    },
    {
      id: "hr",
      eyebrow: "Standard Upload Role",
      title: "Total HR Members",
      value: stats.hr,
      caption: `${share(stats.hr)}% of all users`,
      captionClass: "text-secondary",
      icon: "badge",
      iconWrapClass: "bg-secondary-fixed text-on-secondary-fixed",
      breakdown: stats.hrBreakdown,
    },
    {
      id: "auditors",
      eyebrow: "Zero Raw Access Role",
      title: "Total Auditors",
      value: stats.auditors,
      caption: `${share(stats.auditors)}% of all users`,
      captionClass: "text-primary",
      icon: "policy",
      iconWrapClass: "bg-primary-fixed text-on-primary-fixed",
      breakdown: stats.auditorsBreakdown,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
      {cards.map((card) => (
        <StatCard key={card.id} card={card} />
      ))}
    </div>
  );
}