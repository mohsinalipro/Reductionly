"use client";
import { FC } from "react";

const FAQsHero: FC = () => {
  return (
    <section className="relative text-center text-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#BADA50] font-semibold mb-3 md:mb-6 uppercase tracking-wide">
          FAQs
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-[64px] font-extrabold leading-snug mb-3 md:mb-6 text-[#F8FDE9]">
          Your Student Loan Questions, Answered
        </h1>

        <p className="text-base md:text-lg text-[#F8FDE9]">
          At Reductionly, we believe the more you know, the more confident you’ll feel about managing your student loans. Here are answers to the most common questions we get
        </p>
      </div>
    </section>
  );
};

export default FAQsHero;
