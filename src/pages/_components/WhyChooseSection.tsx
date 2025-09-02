"use client";
import Image from "next/image";
import { FC } from "react";
import TickIcon from "../../_assets/svgs/tick.svg"

const features = [
  "Save Thousands Over Time",
  "Avoid Loan Default and Wage Garnishment",
  "Protect Your Credit",
  "Quick, Hassle-Free Setup",
  "Secure and Private",
  "Expert Support When You Need It",
];

const WhyChooseSection: FC = () => {
  return (
    <section className="bg-[#F2F8ED] py-12 md:py-28 lg:py-32 text-center rounded-t-[40px] -mt-5 md:-mt-14 xl:-mt-20 relative z-30 px-5 md:mx-3">
      <h2 className="text-[32px] md:text-[44px] font-semibold leading-[115%] text-[#062014] mb-8">
        WHY CHOOSE REDUCTIONLY
      </h2>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-[#004725] text-white px-3 md:px-4 py-2 md:py-3 rounded-full text-sm md:text-lg font-medium"
          >
            <Image src={TickIcon} alt="" className="w-6" />
            {feature}
          </div>
        ))}
      </div>

      <p className="mt-8 text-[#062014] text-lg md:text-xl max-w-5xl font-semibold mx-auto">
        Whether you&apos;re looking to lower your monthly payment, get out of default,
        or just understand your options, Reductionly gives you the tools you need
        to take back control.
      </p>
    </section>
  );
};

export default WhyChooseSection;
