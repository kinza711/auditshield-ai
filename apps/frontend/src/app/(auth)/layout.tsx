

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
    
      <main className="w-full pt-16 flex-1 flex flex-col">{children}</main>
    </div>
  );
}
