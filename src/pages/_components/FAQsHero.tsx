"use client";
import { FC } from "react";

const FAQsHero: FC = () => {
  return (
    <section className="relative text-center text-white pt-10 md:pt-28 pb-7 md:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#BADA50] font-semibold mb-3 md:mb-6 uppercase tracking-wide">
          FAQs
        </p>


        <h2 className="text-[36px] md:text-[44px] font-semibold leading-[115%] text-[#F8FDE9] mb-8">
            YOUR STUDENT LOAN QUESTIONS, ANSWERED
        </h2>
        <p className="md:text-lg text-[#F8FDE9] text-[19px]">
          At Reductionly, we believe the more you know, the more confident you’ll feel about managing your student loans. Here are answers to the most common questions we get
        </p>
      </div>
    </section>
  );
};

export default FAQsHero;
