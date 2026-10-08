import type { Metadata } from "next";

import BrandPanel from "@/app/components/auth/BrandPanel";
import LoginPanel from "@/app/components/auth/LoginPanel";

export const metadata: Metadata = {
  title: "Sign In - AuditShield AI",
};

export default function LoginPage() {
  return (
    <div className="relative isolate flex-1 flex flex-col w-full px-margin-sm sm:px-margin lg:px-margin-lg py-space-lg items-center justify-center">
      {/* Ambient glow spots */}
      <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-8 right-1/4 w-96 h-96 rounded-full bg-tertiary-fixed/30 blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-6xl rounded-3xl bg-surface-container-lowest shadow-[0_12px_48px_-12px_rgba(26,28,32,0.12)] overflow-hidden flex flex-col lg:flex-row min-h-[760px] relative">
        <BrandPanel />
        <LoginPanel />
      </div>
    </div>
  );
}
