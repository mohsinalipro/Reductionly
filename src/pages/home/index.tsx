import HomeHeroSection from '@/pages/_components/HomeHeroSection'
import Navbar from '@/pages/_components/Navbar'
import HeroBg from "../../_assets/pngs/hero-bg.png"
import React from 'react'
import Specializations from '../_components/Specializations'
import HowItWorks from '../_components/HowItWorks'
import Footer from '../_components/Footer'
import GetStartedSection from '../_components/GetStartedSection'
import WhyChooseSection from '../_components/WhyChooseSection'

const HomePage = () => {
  return (
    <div>
      <div 
        style={{
          backgroundImage: `url(${HeroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "top left",
        }}
      >
        <Navbar/>
        <HomeHeroSection/>
      </div>

      <div className="md:px-3">
        <Specializations/>
      </div>
      <div className=""><HowItWorks/></div>
      <WhyChooseSection/>
      <GetStartedSection/>
      <Footer/>
    </div>
  )
}

export default HomePage
