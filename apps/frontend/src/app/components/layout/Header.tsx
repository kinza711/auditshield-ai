"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

const LOGO_SRC = "logo.png";

export default function Header() {
  const [active, setActive] = useState("#features");

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/85 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_4px_20px_-2px_rgba(30,32,36,0.04)]">
      <div className="h-20 max-w-[1600px] mx-auto px-margin flex items-center justify-between gap-space-lg">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-space-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_SRC}
            alt="AuditShield AI Logo"
            className="h-16 w-auto object-contain"
          />
          <div className="flex items-center gap-space-sm">
            <span className="font-headline-lg text-headline-xl text-secondary">
              AuditShield AI
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActive(item.href)}
                aria-current={isActive ? "page" : undefined}
                className={`font-label-lg text-label-lg transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-space-md">
          <Link
            href="/sign-in"
            className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface px-space-md py-space-sm rounded-lg transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-lg shadow-[0_6px_20px_rgba(184,3,69,0.28)] hover:shadow-[0_8px_24px_rgba(184,3,69,0.38)] transition-all flex items-center gap-space-xs"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
