import Navbar from "@/pages/_components/Navbar";
import Footer from "@/pages/_components/Footer";
import HowItWorksHero from "./Hero";
import ProcessSteps from "./Steps";
import WhyProcess from "./WhyProcess";
import CircleCta from "./CircleCta";

export default function HowItWorksPage() {
  return (
    <div>
      <Navbar />
      <HowItWorksHero />
      <ProcessSteps />
      <WhyProcess />
      <CircleCta />
      <Footer />
    </div>
  );
}
