"use client";
import { FC } from "react";

const FAQsHero: FC = () => {
  return (
    <section className="relative text-center text-white pt-10 md:pt-28 pb-7 md:pb-28">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#BADA50] font-semibold mb-3 md:mb-6 uppercase tracking-wide RightGrotesk">FAQs</p>

        <h1 className="text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6 text-[#F8FDE9] RightGrotesk">
          YOUR STUDENT LOAN QUESTIONS, ANSWERED
        </h1>
        <p className="text-[19px] md:text-lg text-[#F8FDE9] leading-6 md:leading-7">
          At Reductionly, we believe the more you know, the more confident you’ll feel about
          managing your student loans. Here are answers to the most common questions we get
        </p>
      </div>
    </section>
  );
};

export default FAQsHero;
