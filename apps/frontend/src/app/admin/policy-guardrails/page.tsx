import PageHeader from "../../components/admin-policy/PageHeader";
import PresetsSection from "../../components/admin-policy/PresetsSection";
import RulesTable from "../../components/admin-policy/RulesTable";
import SandboxPanel from "../../components/admin-policy/SandboxPanel";
import EnclaveControls from "../../components/admin-policy/EnclaveControls";
import StatsGrid from "@/app/components/admin-dashboard/StatsGrid";

export default function PrivacyPolicyGuardrailsPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden px-margin-lg py-space-xl flex flex-col gap-space-xl">
        {/* Atmospheric glow accents */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-96 -left-20 w-80 h-80 bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <PageHeader />

        <StatsGrid />

        <PresetsSection />

        <RulesTable />

        <section
          aria-label="Interactive Sandbox and Enclave Controls"
          className="grid grid-cols-1 lg:grid-cols-12 gap-gutter"
        >
          <SandboxPanel />
          <EnclaveControls />
        </section>
      </div>
    </div>
  );
}
