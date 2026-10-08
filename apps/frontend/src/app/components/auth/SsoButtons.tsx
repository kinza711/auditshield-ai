import type { ReactNode } from "react";
import Icon from "../ui/Icon";
import { GoogleIcon, MicrosoftIcon, GithubIcon } from "./BrandIcons";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Provider = {
  label: string;
  href: string;
  icon: ReactNode;
};

// TODO: match these paths to your backend OAuth routes
const ENTERPRISE_SSO: Provider = {
  label: "Sign in with Okta SAML 2.0",
  href: `${API_URL}/auth/okta`,
  icon: <Icon name="token" className="text-[18px] text-secondary" />,
};

const SOCIAL_PROVIDERS: Provider[] = [
  {
    label: "Google",
    href: `${API_URL}/auth/google`,
    icon: <GoogleIcon className="w-[18px] h-[18px]" />,
  },
  {
    label: "Microsoft",
    href: `${API_URL}/auth/microsoft`,
    icon: <MicrosoftIcon className="w-[18px] h-[18px]" />,
  },
  {
    label: "GitHub",
    href: `${API_URL}/auth/github`,
    icon: <GithubIcon className="w-[18px] h-[18px] text-on-surface" />,
  },
];

const buttonBase =
  "h-10 px-space-md bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-on-surface rounded-lg transition-colors flex items-center justify-center gap-space-sm shadow-sm cursor-pointer";

export default function SsoButtons() {
  return (
    <div className="space-y-space-md pt-space-sm">
      {/* Enterprise SSO */}
      <a href={ENTERPRISE_SSO.href} className={`w-full ${buttonBase}`}>
        {ENTERPRISE_SSO.icon}
        <span>{ENTERPRISE_SSO.label}</span>
      </a>

      {/* Social logins */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
        {SOCIAL_PROVIDERS.map((p) => (
          <a
            key={p.label}
            href={p.href}
            aria-label={`Sign in with ${p.label}`}
            className={buttonBase}
          >
            {p.icon}
            <span>{p.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
