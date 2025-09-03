"use client";
import Image from "next/image";
import GlobalBtn from "@/pages/_components/GlobalBtn";
import HeroImg from "../../_assets/pngs/hero-img.png";

export default function HowItWorksHero() {
  return (
    <section className="relative bg-[radial-gradient(1200px_600px_at_70%_0%,#0c3b25_0%,#00391F_40%,#003019_80%)] text-white">
      <div className="grid grid-cols-1 md:grid-cols-9 items-center gap-7 md:gap-10 max-w-screen-xl mx-auto px-5 pt-12 md:pt-20 pb-10 md:pb-16">
        <div className="col-span-1 md:col-span-4 mb-14 md:mb-0 md:py-10 order-2 md:order-1">
          <p className="text-lime-300 font-semibold mb-2 md:text-lg">HOW REDUCTIONLY WORKS</p>
          <h1 className="text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-4 text-[#F8FDE9]">
            STUDENT LOAN
            <br className="hidden md:block" />
            RELIEF, SIMPLIFIED.
          </h1>
          <p className="text-[19px] md:text-lg leading-6 md:leading-7 text-[#F8FDE9] mb-5 md:mb-6 max-w-[560px]">
            Managing student loans can feel overwhelming — but it doesn’t have to be. Reductionly takes the confusion out of repayment and consolidation, giving you a clear, stress-free path to lower payments and better financial health.
          </p>
        </div>
        <div className="flex justify-center md:justify-end relative col-span-1 md:col-span-5 h-[450px] md:h-[600px] lg:h-[750px] order-1 md:order-2 -mt-10 md:mt-0">
          <Image
            src={HeroImg}
            alt="How it works hero"
            fill
            priority
            className="object-contain object-bottom md:object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

