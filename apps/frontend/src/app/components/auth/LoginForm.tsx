"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icon from "../ui/Icon";
import TextInput from "./TextInput";
import SelectInput, { type SelectOption } from "./SelectInput";
import PasswordInput from "./PasswordInput";

const ROLE_OPTIONS: SelectOption[] = [
  { value: "admin", label: "Compliance Officer / Admin" },
  { value: "employee", label: "Standard Employee / HR" },
  { value: "auditor", label: "External Auditor" },
];

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // TODO: point this at your real backend login endpoint
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, role, password, remember }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message ?? "Invalid email or password.");
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-space-md">
      {error && (
        <div
          role="alert"
          className="flex items-start gap-space-xs bg-error-container text-on-error-container px-space-md py-space-sm rounded-lg font-body-sm text-body-sm"
        >
          <Icon name="error" className="text-[18px]" />
          <span>{error}</span>
        </div>
      )}

      <TextInput
        id="email"
        label="Corporate Email Address"
        icon="alternate_email"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="name@enterprise-domain.com"
        autoComplete="email"
        required
      />

      <SelectInput
        id="role"
        label="Designated Role"
        icon="admin_panel_settings"
        value={role}
        onChange={setRole}
        options={ROLE_OPTIONS}
        placeholder="Select Role"
        required
      />

      <PasswordInput
        id="password"
        label="Master Password"
        value={password}
        onChange={setPassword}
        labelAside={
          <Link
            href="/forgot-password"
            className="font-label-sm text-label-sm text-primary font-semibold hover:underline"
          >
            Forgot Password?
          </Link>
        }
      />

      <label className="flex items-center gap-space-xs pt-space-xs cursor-pointer select-none w-fit">
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="w-4 h-4 rounded accent-primary cursor-pointer"
        />
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          Remember hardware token (12h)
        </span>
      </label>

      <div className="pt-space-md">
        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-primary hover:bg-on-primary-fixed-variant disabled:opacity-70 disabled:cursor-not-allowed text-on-primary font-label-lg text-label-lg rounded-lg shadow-md shadow-primary/25 transition-all active:scale-[0.99] flex items-center justify-center gap-space-xs font-bold cursor-pointer"
        >
          {loading ? (
            <>
              <Icon
                name="progress_activity"
                className="text-[20px] animate-spin"
              />
              <span>Verifying...</span>
            </>
          ) : (
            <>
              <span>Access Dashboard</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
