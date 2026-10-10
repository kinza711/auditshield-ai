"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import UsersPageHeader from "./UsersPageHeader";
import UserStatCards from "./UserStatCards";
import UserFilterBar from "./UserFilterBar";
import UsersTable from "./UsersTable";
import InviteUserDrawer from "./InviteUserDrawer";
import SecurityFootnote from "./SecurityFootnote";
import { DEPARTMENTS, INITIAL_USERS } from "../../data/users";
import { ROLE_META, STATUS_META, exportUsersCsv } from "../../lib/users";
import type { InviteValues, User, UserFilter, UserStatus } from "../../types/user";

export default function UsersManager() {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [filter, setFilter] = useState<UserFilter>("all");
  const [query, setQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [resentId, setResentId] = useState<string | null>(null);
  const resendTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resendTimer.current) clearTimeout(resendTimer.current);
    },
    []
  );

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const counts: Record<UserFilter, number> = useMemo(
    () => ({
      all: users.length,
      hr: users.filter((u) => u.role === "hr").length,
      auditor: users.filter((u) => u.role === "auditor").length,
      pending: users.filter((u) => u.status === "pending").length,
    }),
    [users]
  );

  const visibleUsers = useMemo(() => {
    const q = query.trim().toLowerCase();
    return users.filter((u) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "hr" && u.role === "hr") ||
        (filter === "auditor" && u.role === "auditor") ||
        (filter === "pending" && u.status === "pending");
      if (!matchesFilter) return false;
      if (!q) return true;
      return [
        u.name,
        u.email,
        u.department,
        ROLE_META[u.role].label,
        STATUS_META[u.status].label,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [users, filter, query]);

  const setStatus = (id: string, status: UserStatus) =>
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status } : u)));

  const removeUser = (id: string) =>
    setUsers((prev) => prev.filter((u) => u.id !== id));

  const handleResend = (id: string) => {
    setResentId(id);
    if (resendTimer.current) clearTimeout(resendTimer.current);
    resendTimer.current = setTimeout(() => setResentId(null), 2000);
    // TODO: call your "resend invite" API here
  };

  const handleInvite = (values: InviteValues): string | null => {
    const email = values.email.trim().toLowerCase();
    if (users.some((u) => u.email.toLowerCase() === email)) {
      return "A user with this email already exists.";
    }

    const department = DEPARTMENTS.find((d) => d.value === values.departmentValue);
    const newUser: User = {
      id: `u-${Date.now()}`,
      name: values.name.trim(),
      email,
      role: values.role,
      department: department?.short ?? "Unassigned",
      status: "pending",
    };

    setUsers((prev) => [newUser, ...prev]);
    setFilter("all");
    setQuery("");
    // TODO: call your "send invite" API here
    return null;
  };

  return (
    <div className="flex flex-col gap-space-lg w-full">
      <UsersPageHeader
        onExport={() => exportUsersCsv(users)}
        onAdd={() => setDrawerOpen(true)}
      />

      <UserStatCards users={users} />

      <section
        aria-label="User records"
        className="w-full bg-surface-container-lowest rounded-xl shadow-sm flex flex-col"
      >
        <UserFilterBar
          filter={filter}
          onFilterChange={setFilter}
          query={query}
          onQueryChange={setQuery}
          counts={counts}
        />
        <UsersTable
          users={visibleUsers}
          totalCount={users.length}
          resentId={resentId}
          onRevoke={(id) => setStatus(id, "disabled")}
          onReactivate={(id) => setStatus(id, "active")}
          onResend={handleResend}
          onRemove={removeUser}
        />
      </section>

      <SecurityFootnote />

      {drawerOpen && (
        <InviteUserDrawer onClose={closeDrawer} onInvite={handleInvite} />
      )}
    </div>
  );
}