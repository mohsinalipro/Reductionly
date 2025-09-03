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

type Props = { title?: string };

const WhyChooseSection: FC<Props> = ({ title = "WHY CHOOSE REDUCTIONLY" }) => {
  return (
    <section className="bg-[#F2F8ED] py-12 md:py-28 lg:py-32 text-center rounded-t-[40px] -mt-5 md:-mt-14 xl:-mt-20 relative z-30 px-8 md:mx-3">
      <h2 className="text-[36px] md:text-[44px] font-semibold leading-[115%] text-[#062014] mb-8">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="basis-full md:basis-auto">
            <div className="inline-flex items-center gap-2 bg-[#004725] text-white px-4 md:px-5 py-3 md:py-3 rounded-full text-base md:text-lg font-semibold mx-auto transition-all hover:scale-[1.02] hover:bg-[#0A5A36]">
              <Image src={TickIcon} alt="" className="w-6 md:w-7" />
              {feature}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[#062014] text-[19px] md:text-lg max-w-5xl font-semibold mx-auto leading-[153%]">
        Whether you&apos;re looking to lower your monthly payment, get out of default,
        or just understand your options, Reductionly gives you the tools you need
        to take back control.
      </p>
    </section>
  );
};

export default WhyChooseSection;
