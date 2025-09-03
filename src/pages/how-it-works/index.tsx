import Navbar from "@/pages/_components/Navbar";
import Footer from "@/pages/_components/Footer";
import HowItWorksHero from "./Hero";
import ProcessSteps from "./Steps";
import WhyProcess from "./WhyProcess";
import CircleCta from "./CircleCta";
import HeroBg from "../../_assets/pngs/hero-bg.png";

export default function HowItWorksPage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${HeroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top left",
        }}
      >
        <Navbar />
        <HowItWorksHero />
      </div>
      <div className="md:px-3">
        <ProcessSteps />
      </div>
      <WhyProcess />
      <CircleCta />
      <Footer />
    </div>
  );
}
