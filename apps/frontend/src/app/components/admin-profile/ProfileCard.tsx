import type { ReactNode } from "react";
import Icon from "../ui/Icon";

type ProfileCardProps = {
  icon: string;
  iconClass?: string;
  title: string;
  aside?: ReactNode;
  className?: string;
  children: ReactNode;
};

export default function ProfileCard({
  icon,
  iconClass = "text-primary",
  title,
  aside,
  className = "",
  children,
}: ProfileCardProps) {
  return (
    <section
      className={`min-w-0 rounded-xl bg-surface-container-lowest p-4 shadow-sm sm:p-space-lg ${className}`}
    >
      <div className="mb-space-md flex flex-wrap items-center justify-between gap-2 pb-space-sm">
        <div className="flex min-w-0 items-center gap-space-xs">
          <Icon name={icon} className={`shrink-0 text-[22px] ${iconClass}`} />
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            {title}
          </h3>
        </div>
        {aside}
      </div>
      {children}
    </section>
  );
}