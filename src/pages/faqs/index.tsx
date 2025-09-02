import React from 'react'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import GetStartedSection from '../_components/GetStartedSection'
import HeroBg from "../../_assets/pngs/hero-bg.png"
import FAQsHero from '../_components/FAQsHero'
import FAQSection from '../_components/FAQSection'

const FAQs = () => {
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
        <FAQsHero />
      </div>
      <FAQSection />
      <div className="bg-[#004725] pt-3 -mt-14 rounded-t-[54px]">
        <GetStartedSection />
      </div>
      <Footer />
    </div>
  )
}

export default FAQs
