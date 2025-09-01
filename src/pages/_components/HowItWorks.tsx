"use client";
import { FC } from "react";
import NumCircle from "../../_assets/svgs/how-it-works-circile.svg"
import CardIcon1 from "../../_assets/svgs/how-it-works-card-icon-1.svg"
import CardIcon2 from "../../_assets/svgs/how-it-works-card-icon-2.svg"
import CardIcon3 from "../../_assets/svgs/how-it-works-card-icon-3.svg"
import CardIcon4 from "../../_assets/svgs/how-it-works-card-icon-4.svg"
import CardSideIcon1 from "../../_assets/svgs/how-it-works-sprinkle-1.svg"
import CardSideIcon2 from "../../_assets/svgs/how-it-works-sprinkle-2.png"
import CardSideIcon3 from "../../_assets/svgs/how-it-works-sprinkle-3.svg"
import CardSideIcon4 from "../../_assets/svgs/how-it-works-sprinkle-4.svg"
import ArrowLeftIcon from "../../_assets/svgs/round-left-arrow-icon.svg"
import ArrowRightIcon from "../../_assets/svgs/round-arrow-right-icon.svg"
import Image, { StaticImageData } from "next/image";

type Step = {
  id: string;
  title: string;
  description: string;
  icon: string | StaticImageData;
  sideicon: string | StaticImageData;
};

const steps: Step[] = [
  {
    id: "01",
    title: "ANALYZE YOUR LOANS",
    description:
      "Connect your student loan information securely, and let our software identify all available federal programs you’re eligible for",
    icon: CardIcon1,
    sideicon: CardSideIcon1,
  },
  {
    id: "02",
    title: "PERSONALIZED PLAN",
    description:
      "Get a custom strategy to reduce your payments, stop wage garnishments, or consolidate your loans — tailored to your unique financial situation",
    icon: CardIcon2,
    sideicon: CardSideIcon2,
  },
  {
    id: "03",
    title: "STRESS-FREE GUIDANCE",
    description:
      "Our easy-to-use platform walks you through every step, ensuring your paperwork is accurate and submitted correctly",
    icon: CardIcon3,
    sideicon: CardSideIcon3,
  },
  {
    id: "04",
    title: "STAY ON TRACK",
    description:
      "We provide ongoing support and reminders to help you maintain your plan, re-certify annually, and avoid costly mistakes",
    icon: CardIcon4,
    sideicon: CardSideIcon4,
  },
];

const HowItWorks: FC = () => {
  return (
    <section className="relative bg-[#00391F] text-white py-16 md:rounded-t-[54px] overflow-hidden -mt-16 md:-mt-24">
      <h2 className="text-center text-[32px] md:text-[44px] text-[#F8FDE9] font-semibold mb-16 px-5">
        HOW REDUCTIONLY WORKS
      </h2>
      <div className={`w-full how-it-works-bg bg-cover bg-top bg-no-repeat`}>
        <div className="relative max-w-5xl mx-auto sm:w-[80%]">
          <div className="flex flex-col gap-7 md:gap-24 px-6 md:pt-[15%]">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row-reverse lg:rotate-[5deg]" : "md:flex-row lg:-rotate-[5deg]"
                  } flex-col md:justify-between gap-6`}
              >
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 rounded-full items-center justify-center text-white">
                  <div className="relative">
                    <Image src={NumCircle} alt="" className={`w-[120px] lg:w-[200px] ${index % 2 !== 0 && "rotate-180"}`} />
                    <div className=" absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 leading-0 text-2xl lg:text-[32px] text-[#062014] !font-bold">
                      {step.id}
                    </div>
                  </div>
                </div>

                <div
                  className={` relative rounded-xl shadow-xl max-w-[300px] lg:max-w-[330px] transform ${index % 2 === 0 ? "md:translate-x-[20%]" : "md:-translate-x-[20%]"
                    }`}
                >
                  <div className={`hidden md:block absolute ${index == 0 ? "-top-[18%] -right-[25%]" : index == 1 ? "-top-[10%] -left-[19%]":  index == 2 ? "-top-[20%] -right-[25%]":  index == 3 && "-bottom-[20%] -left-[27%]"}`}>
                    <Image src={step.sideicon} alt="" />
                  </div>
                  <div className={`hidden md:block absolute ${index == 0 ? "-bottom-1/2 -right-[10%]" : index == 1 ? "-bottom-1/2 -left-20 ":  index == 2 ? "-bottom-1/2 -right-24":  index == 3 && "md:hidden"}`}>
                    <Image src={index == 1 ? ArrowRightIcon: ArrowLeftIcon} alt="" />
                  </div>
                  <div className="flex items-center justify-center bg-[#F8FDE9] p-4 h-[218px] rounded-[20px]">
                    <div className="w-full h-full flex items-center justify-center rounded-xl bg-[#062014]">
                      <Image src={step.icon} alt="" />
                    </div>
                  </div>
                  <div className="bg-[#F8FDE9] p-4 text-[#062014] rounded-[20px]">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-base">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:h-[300px] xl:h-[500px]"/>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
