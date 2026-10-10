import DashboardShell from "../components/admin-dashboard/DashboardShell";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <DashboardShell>{children}</DashboardShell>;
}
