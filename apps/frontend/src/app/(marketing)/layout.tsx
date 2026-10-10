import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-secondary-fixed/40 blur-[140px]" />
        <div className="absolute top-1/4 -right-40 w-[650px] h-[650px] rounded-full bg-tertiary-fixed/30 blur-[160px]" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] rounded-full bg-secondary-container/20 blur-[130px]" />
      </div>

      <Header />
      {children}
      <Footer />
    </>
  );
}