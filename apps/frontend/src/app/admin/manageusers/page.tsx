import UsersManager from "../../components/manageUsers/UsersManager";

export default function UsersAndRbacPage() {
  return (
    <div className="relative w-full px-gutter py-space-lg">
      {/* Ambient glow backdrop */}
      <div className="absolute -top-12 left-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-64 right-10 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <UsersManager />
    </div>
  );
}
