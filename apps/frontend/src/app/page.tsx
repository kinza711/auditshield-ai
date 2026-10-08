import CtaBanner from "./components/home-components/CtaBanner";
import FeaturesGrid from "./components/home-components/FeaturesGrid";
import Hero from "./components/home-components/Hero";
import HowItWorks from "./components/home-components/HowItWorks";
import VerificationWorkbench from "./components/home-components/VerificationWorkbench";

export default function Home() {
  return (
    <main className="w-full pt-20 max-w-[1600px] mx-auto px-margin min-h-screen">
      <Hero />
      <VerificationWorkbench />
      <FeaturesGrid />
      <CtaBanner />
      <HowItWorks />
    </main>
  );
}
