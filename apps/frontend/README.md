🛡️ AuditShield AI — Automated Compliance & PII Redaction PlatformAuditShield AI is an enterprise-grade compliance governance platform designed to automate PII/PHI detection, document redaction, and compliance auditing across sensitive corporate workflows (GDPR, PCI-DSS, HIPAA). It features an interactive Split-Screen Audit Viewer, real-time processing feedback, and tailored Role-Based Dashboards for Admins, Members/HR, and Compliance Auditors.🌐 Live Staging DeploymentThe staging branch of the frontend is live and automatically updated on Render:Staging Frontend App: https://final-auditshield-ai.onrender.com .comDeployment Status: Active (staging branch)✨ Key Features & Capability Matrix👤 Role-Based Access Control (RBAC)RoleTarget PersonaKey CapabilitiesAdminIT / Security GovernancePolicy threshold controls, system guardrails, user management, global security logsMember / HROperations / Legal / HRDrag-and-drop document upload, redacted PDF download, side-by-side verificationAuditorThird-party AuditorOverall compliance scorecards, violation risk matrix, confidence metrics, CSV audit exports🛠 Core Application FeaturesUnified Authentication System (/login, /register):Single portal supporting login for all 3 roles (ADMIN, MEMBER, AUDITOR) with dynamic redirection.Interactive Document Processing Pipeline:Real-time 4-step processing modal: S3 Upload $\rightarrow$ AWS Textract OCR $\rightarrow$ Bedrock AI Audit $\rightarrow$ Redaction Complete.Split-Screen Audit Viewer (/audit/[id]):50/50 side-by-side comparison of original documents vs. redacted output with flagged PII tag overlays ([NAME_REDACTED], [CARD_REDACTED]).Audit History & System Access Logs (/logs):Immutable security trail with search, risk filters, and export capabilities.Robust System Resilience:Built-in custom 404 (not-found.tsx) catch-all and global error boundary handles (error.tsx).📁 Repository Structure (Monorepo)auditshield-ai/
├── apps/
│   ├── frontend/                       # Next.js App Router Application
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── (marketing)/        # Landing Page (Home)
│   │   │   │   ├── (auth)/             # Login & Register Pages
│   │   │   │   ├── (dashboards)/       # Role Dashboards (Admin, HR, Auditor)
│   │   │   │   │   ├── admin-dashboard/
│   │   │   │   │   ├── hr-dashboard/
│   │   │   │   │   ├── auditor-dashboard/
│   │   │   │   │   ├── audit/[id]/     # Split-Screen Viewer
│   │   │   │   │   └── logs/           # Compliance History Logs
│   │   │   │   ├── not-found.tsx       # Custom 404 Page
│   │   │   │   └── error.tsx           # Global Error Page
│   │   │   ├── components/             # Atomic & Shared Dashboard Components
│   │   │   ├── lib/                    # Helpers, Themes, and Axios Clients
│   │   │   └── types/                  # TypeScript Data Structures
│   │   ├── tailwind.config.js          # Dynamic HSL Theme Configuration
│   │   └── package.json
│   │
│   └── backend/                        # NestJS Microservice Placeholder
│       └── .gitkeep
│
└── README.md                           # Documentation Root
🚀 Getting Started LocallyPrerequisitesNode.js: v18.17.0 or highernpm: v9.0.0 or higherGitInstallation StepsClone the Repository:git clone https://github.com/kinza711/auditshield-ai.git
cd auditshield-ai
Switch to Development Branch:git checkout dev
Navigate to Frontend App & Install Dependencies:cd apps/frontend
npm install
Environment Configuration:
Create a .env.local file inside apps/frontend/:NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
NODE_ENV=development
Run the Local Development Server:npm run dev
Open http://localhost:3000 in your browser.🎨 Theme & Styling SystemThe application uses dynamic CSS variable tokens mapped through Tailwind CSS for seamless dark mode support and consistent semantic styling:bg-primary: Dark Navy Governance Surface (#0a192f / HSL)text-secondary: Slate Subtextbg-surface: Clean Elevation Cardstext-danger / text-warning / text-success: Dynamic Risk Badges🌿 Git Workflow & Branch StrategyThe project strictly follows a professional multi-branch release process:main: Production-ready, fully verified stable code.staging: Pre-production testing environment (connected directly to Render CI/CD).dev: Active feature development workspace.📜 LicenseDistributed under the MIT License. See LICENSE for more information.