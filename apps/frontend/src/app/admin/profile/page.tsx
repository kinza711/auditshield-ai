import type { Metadata } from "next";
import ProfileHeader from "../../components/admin-profile/ProfileHeader";
import ProfileHero from "../../components/admin-profile/ProfileHero";
import ProfileForm from "../../components/admin-profile/ProfileForm";
import RbacMatrix from "../../components/admin-profile/RbacMatrix";
import ActiveSessions from "../../components/admin-profile/ActiveSessions";
import MfaCard from "../../components/admin-profile/MfaCard";
import SigningKeysCard from "../../components/admin-profile/SigningKeysCard";
import AlertChannels from "../../components/admin-profile/AlertChannels";

export const metadata: Metadata = {
  title: "Profile - AuditShield AI",
};

export default function ProfilePage() {
  return (
    <div className="relative isolate mx-auto w-full max-w-[1600px] space-y-space-lg px-4 py-space-lg sm:px-space-md lg:px-space-lg">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-10 top-0 -z-10 h-64 w-64 rounded-full bg-secondary-container/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute right-0 top-10 -z-10 h-64 w-64 rounded-full bg-primary-fixed/25 blur-3xl sm:h-80 sm:w-80" />

      <ProfileHeader />
      <ProfileHero />

      <div className="grid grid-cols-1 items-start gap-space-lg lg:grid-cols-12">
        <div className="min-w-0 space-y-space-lg lg:col-span-8">
          <ProfileForm />
          <RbacMatrix />
          <ActiveSessions />
        </div>
        <div className="min-w-0 space-y-space-lg lg:col-span-4">
          <MfaCard />
          <SigningKeysCard />
          <AlertChannels />
        </div>
      </div>
    </div>
  );
}
