"use client";
import { FC } from "react";

const ContactHero: FC = () => {
  return (
    <section className="relative text-center text-white pt-10 md:pt-28 pb-14 md:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#BADA50] font-semibold mb-3 md:mb-6 uppercase tracking-wide">
          CONTACT US
        </p>

        <h1 className="text-3xl leading-[115%] md:text-5xl lg:text-[64px] font-extrabold mb-3 md:mb-6 text-[#F8FDE9]">
          WE’RE HERE TO HELP <br className="hidden md:block" /> YOU SUCCEED
        </h1>

        <p className="text-base md:text-lg text-[#F8FDE9]">
          Reach out — we’re here to make student loan management easier, faster,
          and stress-free.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;