"use client";
import Image from "next/image";
import TickIcon from "../../_assets/svgs/tick.svg";

const pills = [
  "Quick, Step-by-Step Process",
  "No Sales Pressure — Just Solutions",
  "Real Experts Behind the Software",
  "Designed to Save You Time and Money",
];

export default function WhyProcess() {
  return (
    <section className="relative bg-[#004725] text-[#F8FDE9] pt-14 md:pt-16 pb-16 md:pb-20 rounded-t-[54px] overflow-hidden -mt-16 md:-mt-24 shadow-[0_20px_40px_#004725]">
      <div className="max-w-screen-xl mx-auto px-5">
        <h2 className="text-center text-[32px] md:text-[44px] font-semibold mb-7 md:mb-10 leading-[115%] RightGrotesk">WHY OUR PROCESS WORKS</h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-5xl mx-auto">
          {pills.map((p, i) => (
            <div key={i} className="basis-full md:basis-auto flex justify-center md:justify-normal">
              <div className="inline-flex items-center gap-2.5 bg-[#055931] text-[#F8FDE9] px-4 md:px-4 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold mx-auto transition-all hover:scale-[1.02] hover:bg-[#0A5A36]">
                <Image src={TickIcon} alt="" className="w-6 md:w-7" />
                {p}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-7 md:mt-10 text-center max-w-4xl mx-auto text-lg md:text-xl leading-[153%] md:leading-[153%] font-semibold">
          Whether you&apos;re looking to lower your monthly payment, get out of default,
          or just understand your options, Reductionly gives you the tools you need
          to take back control.
        </p>
      </div>
    </section>
  );
}
