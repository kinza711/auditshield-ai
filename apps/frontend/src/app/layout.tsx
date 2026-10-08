import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AuditShield AI - Enterprise Compliance Architecture",
  description:
    "Automated AI document redaction and compliance audit powered by AWS Bedrock guardrails.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable} bg-background font-body-md text-on-surface relative min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed antialiased`}
      >
        {/* Global ambient glow */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-secondary-fixed/40 blur-[140px]" />
          <div className="absolute top-1/4 -right-40 w-[650px] h-[650px] rounded-full bg-tertiary-fixed/30 blur-[160px]" />
          <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] rounded-full bg-secondary-container/20 blur-[130px]" />
        </div>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
