import type { Metadata } from "next";

import BrandPanel from "@/app/components/auth/BrandPanel";
import LoginPanel from "@/app/components/auth/LoginPanel";

export const metadata: Metadata = {
  title: "Sign In - AuditShield AI",
};

export default function LoginPage() {
  return (
    <div className="relative isolate flex-1 flex flex-col w-full px-4 sm:px-margin lg:px-margin-lg py-6 sm:py-space-lg items-center justify-center overflow-x-clip">
      {/* Ambient glow spots */}
      <div className="absolute top-8 left-0 w-64 h-64 sm:top-12 sm:left-1/4 sm:w-96 sm:h-96 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-4 right-0 w-64 h-64 sm:bottom-8 sm:right-1/4 sm:w-96 sm:h-96 rounded-full bg-tertiary-fixed/30 blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-6xl min-w-0 rounded-2xl sm:rounded-3xl bg-surface-container-lowest shadow-[0_12px_48px_-12px_rgba(26,28,32,0.12)] overflow-hidden flex flex-col lg:flex-row lg:min-h-[760px] relative">
        <BrandPanel />
        <LoginPanel />
      </div>
    </div>
  );
}