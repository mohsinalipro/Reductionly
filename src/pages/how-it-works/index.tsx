import Navbar from "@/pages/_components/Navbar";
import Footer from "@/pages/_components/Footer";
import HowItWorksHero from "./Hero";
import ProcessSteps from "./Steps";
import WhyProcess from "./WhyProcess";
import CircleCta from "./CircleCta";
import HeroBg from "../../_assets/pngs/hero-bg.png";
import GetStartedSection from "../_components/GetStartedSection";

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
      <GetStartedSection contentWidth="476px" title="Ready to Make Your Student Loans Manageable?" description="Take the first step today — it's faster and easier than you think."/>
      <Footer />
    </div>
  );
}
