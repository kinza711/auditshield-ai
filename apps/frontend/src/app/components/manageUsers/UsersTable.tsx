import UserRow from "./UserRow";
import type { User } from "../../types/user";

interface UsersTableProps {
  users: User[];
  totalCount: number;
  resentId: string | null;
  onRevoke: (id: string) => void;
  onReactivate: (id: string) => void;
  onResend: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function UsersTable({
  users,
  totalCount,
  resentId,
  onRevoke,
  onReactivate,
  onResend,
  onRemove,
}: UsersTableProps) {
  return (
    <>
      {/* Full-width table: no scroll wrapper, no pagination, every record visible */}
      <table className="w-full text-left font-body-md text-body-md">
        <thead>
          <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
            <th className="py-space-sm px-space-lg" scope="col">
              User Name &amp; Identity
            </th>
            <th className="py-space-sm px-space-md" scope="col">
              Assigned Role
            </th>
            <th className="py-space-sm px-space-md" scope="col">
              Department
            </th>
            <th className="py-space-sm px-space-md" scope="col">
              Cryptographic Scope
            </th>
            <th className="py-space-sm px-space-md" scope="col">
              State
            </th>
            <th className="py-space-sm px-space-lg text-right" scope="col">
              Governance Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-on-surface font-body-sm text-body-sm">
          {users.length > 0 ? (
            users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                resent={resentId === user.id}
                onRevoke={onRevoke}
                onReactivate={onReactivate}
                onResend={onResend}
                onRemove={onRemove}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="py-space-xl text-center text-on-surface-variant font-body-md text-body-md"
              >
                No users match your search or filter.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="p-space-md bg-surface-container-lowest flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
        <span>
          Showing <strong className="text-on-surface">{users.length}</strong> of{" "}
          <strong className="text-on-surface">{totalCount}</strong> enterprise
          identities
        </span>
        <span className="font-label-sm text-label-sm text-outline">
          CRYPTOGRAPHIC HASH VERIFIED
        </span>
      </div>
    </>
  );
}
