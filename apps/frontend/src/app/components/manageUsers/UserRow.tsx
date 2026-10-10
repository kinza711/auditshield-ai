import Icon from "../ui/Icon";
import {
  ROLE_META,
  STATUS_META,
  getAvatarClass,
  getInitials,
  getScope,
} from "../../lib/users";
import type { User } from "../../types/user";

interface UserRowProps {
  user: User;
  resent: boolean;
  onRevoke: (id: string) => void;
  onReactivate: (id: string) => void;
  onResend: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function UserRow({
  user,
  resent,
  onRevoke,
  onReactivate,
  onResend,
  onRemove,
}: UserRowProps) {
  const role = ROLE_META[user.role];
  const status = STATUS_META[user.status];
  const scope = getScope(user);
  const isDisabled = user.status === "disabled";
  const isPending = user.status === "pending";

  return (
    <tr
      className={`hover:bg-surface-container-low/70 transition-colors group ${
        isPending ? "bg-surface-container-low/30" : ""
      } ${isDisabled ? "opacity-75" : ""}`}
    >
      {/* Identity */}
      <td className="py-space-md px-space-lg">
        <div className="flex items-center gap-space-sm">
          <div
            className={`w-9 h-9 rounded-full font-bold font-label-md flex items-center justify-center shadow-xs shrink-0 ${getAvatarClass(
              user
            )}`}
          >
            {getInitials(user.name)}
          </div>
          <div className="flex flex-col min-w-0">
            <span
              className={`font-label-lg text-label-lg font-bold ${
                isDisabled
                  ? "text-on-surface-variant line-through"
                  : "text-on-surface group-hover:text-primary transition-colors"
              }`}
            >
              {user.name}
            </span>
            <span
              className={`font-body-sm text-body-sm break-all ${
                isDisabled ? "text-outline" : "text-on-surface-variant"
              }`}
            >
              {user.email}
            </span>
          </div>
        </div>
      </td>

      {/* Role */}
      <td className="py-space-md px-space-md">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold ${
            isDisabled
              ? "bg-surface-container-highest text-outline"
              : role.badgeClass
          }`}
        >
          <Icon name={role.icon} className="text-[14px]" />
          {role.label}
        </span>
      </td>

      {/* Department */}
      <td
        className={`py-space-md px-space-md font-medium ${
          isDisabled ? "text-on-surface-variant" : "text-on-surface"
        }`}
      >
        {user.department}
      </td>

      {/* Cryptographic scope */}
      <td className="py-space-md px-space-md">
        <span
          className={`inline-flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded text-label-sm font-label-sm ${scope.textClass}`}
        >
          <Icon name={scope.icon} className={`text-[14px] ${scope.iconClass}`} />
          {scope.label}
        </span>
      </td>

      {/* State */}
      <td className="py-space-md px-space-md">
        <span
          className={`inline-flex items-center gap-1.5 text-label-sm font-label-sm font-semibold ${status.textClass}`}
        >
          <span
            className={`w-2 h-2 rounded-full ${status.dotClass} ${
              status.pulse ? "animate-pulse" : ""
            }`}
          />
          {status.label}
        </span>
      </td>

      {/* Actions */}
      <td className="py-space-md px-space-lg text-right">
        <div className="inline-flex items-center gap-space-xs">
          {user.status === "active" && (
            <>
              <button
                type="button"
                title="Edit Permissions"
                className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors"
              >
                <Icon name="edit" className="text-[16px]" />
              </button>
              <button
                type="button"
                title="Revoke Authorization"
                onClick={() => onRevoke(user.id)}
                className="p-1.5 rounded-lg bg-error-container hover:bg-primary-fixed text-on-error-container transition-colors"
              >
                <Icon name="delete_sweep" className="text-[16px]" />
              </button>
            </>
          )}

          {user.status === "pending" && (
            <>
              <button
                type="button"
                onClick={() => onResend(user.id)}
                className="px-2 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1"
              >
                <Icon name={resent ? "check" : "send"} className="text-[14px]" />
                <span>{resent ? "Sent" : "Resend"}</span>
              </button>
              <button
                type="button"
                title="Cancel Invite"
                onClick={() => onRemove(user.id)}
                className="p-1.5 rounded-lg bg-error-container hover:bg-primary-fixed text-on-error-container transition-colors"
              >
                <Icon name="close" className="text-[16px]" />
              </button>
            </>
          )}

          {user.status === "disabled" && (
            <button
              type="button"
              onClick={() => onReactivate(user.id)}
              className="px-2 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1"
            >
              <Icon name="restore" className="text-[14px]" />
              <span>Reactivate</span>
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}