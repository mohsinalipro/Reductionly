"use client";
import Image from "next/image";
import GlobalBtn from "@/pages/_components/GlobalBtn";
import TickIcon from "../../_assets/svgs/tick.svg";

type Step = {
  id: string;
  title: string;
  points: string[];
};

const steps: Step[] = [
  {
    id: "01",
    title: "Securely connect your student loan information",
    points: [
      "We don't store your credentials — security prioritized",
      "Automatic import of your loan details",
      "Instant eligibility checks",
      "Clear next steps",
    ],
  },
  {
    id: "02",
    title: "Get a personalized student loan plan",
    points: [
      "Payment plans for your income, family size, and goals",
      "Options for consolidation and rehabilitation",
      "Compare monthly payments before you decide",
      "See potential forgiveness timelines",
    ],
  },
  {
    id: "03",
    title: "Complete your applications seamlessly",
    points: [
      "Step-by-step guidance with no guesswork",
      "Auto-fill forms with your data",
      "Submission-ready paperwork",
      "Reminders to stay compliant",
    ],
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[#F2F8ED] rounded-t-[40px] md:rounded-t-[54px] -mt-8 md:-mt-12 pb-14 md:pb-24">
      <div className="max-w-screen-xl mx-auto px-5">
        <h2 className="text-center text-[36px] md:text-[44px] font-semibold text-[#062014] mb-6 md:mb-10">
          Here's how our simple, step-by-step process works:
        </h2>
        <div className="divide-y divide-[#E3EDDC] bg-white/0 rounded-3xl">
          {steps.map((s, i) => (
            <div key={s.id} className="py-7 md:py-10 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 items-start">
              <div className="flex md:block items-center justify-center">
                <div className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-[0_2px_0_#DCEAD1]">
                  <span className="text-4xl md:text-5xl font-bold text-[#9EBF6A]">{s.id}</span>
                </div>
              </div>
              <div className="bg-[#F8FDE9] rounded-2xl p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-[#062014] mb-4 capitalize">{s.title}</h3>
                <ul className="space-y-3">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#062014]">
                      <Image src={TickIcon} alt="" className="w-5 md:w-6 mt-1" />
                      <span className="text-[19px] md:text-lg leading-7">{p}</span>
                    </li>
                  ))}
                </ul>
                {i === steps.length - 1 && (
                  <div className="mt-6">
                    <GlobalBtn
                      className="h-12 w-[156px] bg-[#004725] text-[#F8FDE9] justify-center rounded-xl text-center text-sm uppercase font-semibold shadow-[4px_4px_0px_#BADA50]"
                      text="Get Started"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

