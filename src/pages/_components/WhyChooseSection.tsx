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
    <section className="bg-[#F2F8ED] py-16 md:py-28 lg:py-32 text-center rounded-t-[40px] -mt-10 md:-mt-14 xl:-mt-20 relative z-30 px-5 mx-3">
      <h2 className="text-[32px] md:text-[44px] font-medium text-[#062014] mb-8">
        WHY CHOOSE REDUCTIONLY
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-green-900 text-white px-4 py-2 md:py-3 rounded-full text-sm md:text-lg font-medium"
          >
            <Image src={TickIcon} alt="" />
            {feature}
          </div>
        ))}
      </div>

      <p className="mt-8 text-[#062014] text-lg md:text-xl max-w-5xl font-medium mx-auto">
        Whether you&apos;re looking to lower your monthly payment, get out of default,
        or just understand your options, Reductionly gives you the tools you need
        to take back control.
      </p>
    </section>
  );
};

export default WhyChooseSection;
