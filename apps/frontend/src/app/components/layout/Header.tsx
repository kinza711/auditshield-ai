"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

const LOGO_SRC = "/logo.png";

export default function Header() {
  const [active, setActive] = useState("#features");
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape, and if the screen grows to desktop size
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/85 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_4px_20px_-2px_rgba(30,32,36,0.04)]">
      <div className="h-16 sm:h-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-margin flex items-center justify-between gap-2 sm:gap-space-lg">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-space-md min-w-0"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_SRC}
            alt="AuditShield AI Logo"
            className="h-10 sm:h-14 lg:h-16 w-auto object-contain shrink-0"
          />
          <span className="font-headline-lg text-lg sm:text-2xl lg:text-headline-xl text-on-surface font-bold whitespace-nowrap truncate">
            AuditShield <span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Desktop nav */}
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
        <div className="flex items-center gap-1 sm:gap-space-md shrink-0">
          <Link
            href="/login"
            className="hidden sm:inline-block font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface px-space-md py-space-sm rounded-lg transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="font-label-lg text-label-lg whitespace-nowrap bg-primary hover:bg-primary-container text-on-primary px-3 py-2 sm:px-space-lg sm:py-space-sm rounded-lg shadow-[0_6px_20px_rgba(184,3,69,0.28)] hover:shadow-[0_8px_24px_rgba(184,3,69,0.38)] transition-all flex items-center gap-space-xs"
          >
            Get Started
          </Link>

          {/* Hamburger (below xl) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      {open && (
        <div
          id="mobile-menu"
          className="xl:hidden border-t border-outline-variant/30 bg-surface-container-lowest/95 backdrop-blur-xl max-h-[calc(100dvh-4rem)] overflow-y-auto"
        >
          <nav className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3 flex flex-col">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-label-lg text-label-lg py-3 border-b border-outline-variant/20 transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="sm:hidden font-label-lg text-label-lg py-3 text-on-surface-variant hover:text-on-surface"
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}