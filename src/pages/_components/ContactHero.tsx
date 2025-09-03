"use client";
import { FC } from "react";

const ContactHero: FC = () => {
  return (
    <section className="relative text-center text-white pt-10 md:pt-28 pb-14 md:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#BADA50] font-semibold mb-3 md:mb-6 uppercase tracking-wide RightGrotesk">
          CONTACT US
        </p>

        <h1 className="text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6 text-[#F8FDE9] RightGrotesk">
          WE’RE HERE TO HELP <br className="hidden md:block" /> YOU SUCCEED
        </h1>

        <p className="text-[19px] md:text-lg text-[#F8FDE9] leading-6 md:leading-7">
          Reach out — we’re here to make student loan management easier, faster,
          and stress-free.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
