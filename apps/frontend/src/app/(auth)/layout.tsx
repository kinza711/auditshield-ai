import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="w-full pt-16 flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
