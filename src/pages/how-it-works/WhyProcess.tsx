"use client";
import Image from "next/image";
import TickIcon from "../../_assets/svgs/tick.svg";

const pills = [
  "Quick, Step-by-Step Process",
  "No Confusion — Clear Guidance",
  "Real Control Over Your Payments",
  "Designed to Save You Money",
  "Independent — Compare Options",
];

export default function WhyProcess() {
  return (
    <section className="bg-[#00391F] text-white pt-14 pb-16 md:pb-24">
      <div className="max-w-screen-xl mx-auto px-5">
        <h2 className="text-center text-[36px] md:text-[44px] font-semibold mb-8 md:mb-12">WHY OUR PROCESS WORKS</h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {pills.map((p, i) => (
            <div key={i} className="basis-full md:basis-auto">
              <div className="inline-flex items-center gap-2 bg-[#0D4C2E] text-white px-4 md:px-5 py-3 rounded-full text-base md:text-lg font-semibold mx-auto">
                <Image src={TickIcon} alt="" className="w-6 md:w-7" />
                {p}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

