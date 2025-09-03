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
    <section className="relative bg-[#004725] text-white pt-14 md:pt-16 pb-16 md:rounded-t-[54px] overflow-hidden -mt-16 md:-mt-24">
      <div className="max-w-screen-xl mx-auto px-5">
        <h2 className="text-center text-[36px] md:text-[44px] font-semibold mb-8 md:mb-12">WHY OUR PROCESS WORKS</h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {pills.map((p, i) => (
            <div key={i} className="basis-full md:basis-auto">
              <div className="inline-flex items-center gap-2 bg-[#0D4C2E] text-white px-4 md:px-5 py-3 rounded-full text-base md:text-lg font-semibold mx-auto transition-all hover:scale-[1.02] hover:bg-[#0A5A36]">
                <Image src={TickIcon} alt="" className="w-6 md:w-7" />
                {p}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center max-w-4xl mx-auto text-[19px] md:text-lg leading-7 opacity-95">
          Whether you're looking to lower your monthly payment, get out of default,
          or just understand your options, Reductionly gives you the tools you need
          to take back control.
        </p>
      </div>
    </section>
  );
}
