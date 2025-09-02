"use client";

import Image from "next/image";
import CardImg1 from "../../_assets/pngs/specializations-img-1.png"
import CardImg2 from "../../_assets/pngs/specializations-img-2.png"
import CardImg3 from "../../_assets/pngs/specializations-img-3.png"
import { StaticImageData } from "next/image";
import GlobalBtn from "./GlobalBtn";

type Specialization = {
  title: string
  description: string;
  buttonText: string;
  image: string | StaticImageData;
};

const specializations: Specialization[] = [
  {
    title: "INCOME-BASED REPAYMENT (IBR) PLANS",
    description:
      "Lower your monthly payments based on your income and family size — sometimes to as low as $0/month — and stay on track toward forgiveness.",
    buttonText: "Get Started",
    image: CardImg1,
  },
  {
    title: "STUDENT LOAN REHABILITATION",
    description:
      "Struggling with defaulted loans? Our system helps you qualify for rehabilitation, rebuild your credit, and regain access to federal repayment benefits.",
    buttonText: "Get Started",
    image: CardImg2,
  },
  {
    title: "STUDENT LOAN CONSOLIDATION",
    description:
      "Simplify your loans into a single payment. We help you combine multiple loans into one manageable monthly bill with better terms.",
    buttonText: "Get Started",
    image: CardImg3,
  },
];

const Specializations = () => {
  return (
    <section className="bg-[#F8FDE9] rounded-[50px] pt-20 pb-28">
      <div className="max-w-screen-xl mx-auto px-5 text-center">
        <h2 className="text-[32px] md:text-3xl lg:text-[44px] text-[#062014] font-bold mb-2 md:mb-8 lg:mb-12 md:mt-14">WE SPECIALIZE IN:</h2>
        <div className="w-full space-y-10">
          {specializations.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row items-center justify-between gap-6 w-full ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="flex-1 md:text-left max-w-[400px] text-center">
                <h3 className="text-[28px] leading-[32px] md:text-[32px] md:leading-10 font-bold mb-5 md:mb-6 text-[#062014]">{item.title}</h3>
                <p className="text-[#062014] mb-5 md:mb-7 text-lg">{item.description}</p>
                <GlobalBtn
                  className='h-14 w-full md:w-[156px] bg-[#004725] text-[#F8FDE9] justify-center rounded-xl text-center text-sm md:h-12 uppercase font-semibold shadow-[4px_4px_0px_#BADA50]'
                  text={`${item.buttonText}`}
                />
              </div>

              <div className={`relative flex flex-1 justify-center ${index % 2 === 1 ? "md:justify-start" : "md:justify-end"}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
