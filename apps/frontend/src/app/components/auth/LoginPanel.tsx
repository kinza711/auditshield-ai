import Icon from "../../components/ui/Icon";
import SsoButtons from "./SsoButtons";
import LoginForm from "./LoginForm";

export default function LoginPanel() {
  return (
    <div className="w-full lg:w-1/2 p-space-lg sm:p-space-xl flex flex-col justify-between bg-surface-container-lowest">
      <div className="space-y-space-md">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight py-4">
            EnterPrice OnBoarding
          </h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Verify multi-tenant credentials to unlock the audit governance
            vault.
          </p>
        </div>

        <SsoButtons />
        <div className="relative flex items-center justify-center  mt-10 py-space-xs">
          <div className="w-full h-px bg-surface-container-high" />
          <span className="absolute bg-surface-container-lowest px-space-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
            or email password
          </span>
        </div>

        <LoginForm />
      </div>

      {/* Security assurance */}
      {/* <div className="mt-space-lg pt-space-md text-center bg-surface-container-low/50 rounded-xl p-space-sm">
        <div className="flex items-center justify-center gap-space-xs text-on-surface font-label-md text-label-md font-semibold">
          <Icon name="verified_user" className="text-primary text-[18px]" />
          <span>🔒 256-Bit Encrypted &amp; Role-Gated Session</span>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5 font-mono">
          FIPS 140-2 Validated • Session ID: #AUD-8821X
        </p>
      </div> */}
    </div>
  );
}
