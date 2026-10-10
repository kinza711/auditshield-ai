import Icon from "../ui/Icon";

// TODO: replace with the logged-in user from your auth/session
const USER = {
  name: "Eleanor Vance",
  title: "Super Admin",
  email: "eleanor.vance@auditshield.ai",
  lastActive: "Just now (10.14.88.21)",
};

export default function ProfileHero() {
  const initials = USER.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="rounded-xl bg-surface-container-lowest p-4 shadow-sm sm:p-space-lg">
      <div className="flex flex-col gap-space-lg xl:flex-row xl:items-center xl:justify-between">
        {/* Identity */}
        <div className="flex min-w-0 items-center gap-space-md">
          <div className="relative shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-container to-primary font-headline-lg text-headline-lg text-on-primary shadow-md sm:h-20 sm:w-20">
              {initials}
            </div>
            <div
              title="Root Authority Verified"
              className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-surface-container-lowest shadow-sm"
            >
              <Icon name="verified" className="text-[18px] text-primary" />
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                {USER.name}
              </h2>
            </div>
            <span className="break-words font-body-md text-body-md text-on-surface-variant">
              {USER.title}
            </span>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
              <span className="inline-flex min-w-0 items-center gap-1 break-all">
                <Icon
                  name="mail"
                  className="shrink-0 text-[16px] text-secondary"
                />
                {USER.email}
              </span>
              <span className="inline-flex items-center gap-1 font-mono">
                <span className="h-2 w-2 shrink-0 rounded-full bg-green-700 animate-pulse" />
                Last Active: {USER.lastActive}
              </span>
            </div>
          </div>
        </div>

        {/* Scorecards */}
      </div>
    </section>
  );
}
