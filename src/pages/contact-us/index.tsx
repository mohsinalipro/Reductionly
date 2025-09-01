import React from 'react'
import ContactSection from '../_components/ContactSection'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'
import GetStartedSection from '../_components/GetStartedSection'
import HeroBg from "../../_assets/pngs/hero-bg.png"
import ContactHero from '../_components/ContactHero'

const ContactUs = () => {
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
        <ContactHero/>
      </div>
      <ContactSection/>
      <div className="bg-[#004725] pt-14 -mt-14 rounded-t-[54px]">
      <GetStartedSection/>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs
