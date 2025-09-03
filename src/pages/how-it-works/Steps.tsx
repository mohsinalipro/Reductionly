"use client";
import Image from "next/image";
import GlobalBtn from "@/pages/_components/GlobalBtn";
import TickIcon from "../../_assets/svgs/tick.svg";

type Step = {
  id: string;
  heading: string;
  subheading?: string;
  intro?: string;
  note?: string;
  points: string[];
};

const steps: Step[] = [
  {
    id: "01",
    heading: "SECURELY CONNECT YOUR STUDENT LOAN INFORMATION",
    intro: "We get things off to the basics — securely and privately.",
    points: ["SAFE AND ENCRYPTED", "NO HARD CREDIT PULLS", "NO PAPERWORK HEADACHES"],
  },
  {
    id: "02",
    heading: "GET A PERSONALIZED STUDENT LOAN PLAN",
    intro:
      "Based on your income, family size, and loan types, we create a personalized roadmap.",
    subheading: "Our software automatically matches you with programs like",
    points: [
      "INCOME-BASED REPAYMENT (IBR)",
      "PAY AS YOU EARN (PAYE) AND REVISED PAYE (REPAYE)",
      "PUBLIC SERVICE LOAN FORGIVENESS (PSLF) ELIGIBILITY",
      "STUDENT LOAN REHABILITATION FOR DEFAULTED LOANS",
      "DIRECT CONSOLIDATION OPTIONS",
    ],
    note:
      "You'll see clear recommendations to lower your payments, prevent default, or simplify your repayment.",
  },
  {
    id: "03",
    heading: "COMPLETE YOUR APPLICATIONS SEAMLESSLY",
    intro: "Forget the confusing forms and red tape.",
    subheading: "We make sure everything is:",
    points: ["FILLED OUT CORRECTLY", "MATCHED TO THE RIGHT SERVICERS", "SUBMITTED ON TIME"],
    note: "No guesswork. No missed deadlines.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[#F8FDE9] rounded-[50px] pt-20 pb-28">
      <div className="max-w-screen-xl mx-auto px-5">
        <h2 className="text-center text-[36px] md:text-[44px] font-semibold text-[#062014] mb-4 md:mb-6">
          HERE’S HOW OUR SIMPLE, STEP-
          <br className="hidden md:block" />
          BY-STEP PROCESS WORKS:
        </h2>
        <div className="h-px bg-[#E3EDDC] max-w-3xl mx-auto mb-8 md:mb-10" />

        <div className="rounded-3xl">
          {steps.map((s, i) => (
            <div key={s.id} className={`py-8 md:py-12 ${i !== 0 ? 'border-t border-[#E3EDDC]' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-10 items-start">
                {/* Left column */}
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-[#C7DAB6] num-outline mb-4">{s.id}</div>
                  <h3 className="text-[22px] md:text-[28px] leading-7 md:leading-8 font-bold text-[#062014] max-w-xs uppercase tracking-wide">
                    {s.heading}
                  </h3>
                  {i === steps.length - 1 && (
                    <div className="mt-5">
                      <GlobalBtn
                        className="h-12 w-[156px] bg-[#BADA50] !text-[#062014] justify-center rounded-xl text-center text-sm uppercase font-semibold shadow-[4px_4px_0px_#062014]"
                        text="GET STARTED"
                      />
                    </div>
                  )}
                </div>

                {/* Right column */}
                <div>
                  {s.intro && (
                    <p className="text-[19px] md:text-lg leading-7 text-[#062014] mb-3">{s.intro}</p>
                  )}
                  {s.subheading && (
                    <p className="text-sm md:text-base tracking-wide text-[#062014] mb-3 opacity-80">{s.subheading}</p>
                  )}
                  <ul className="space-y-3">
                    {s.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#062014]">
                        <Image src={TickIcon} alt="" className="w-5 md:w-6 mt-1" />
                        <span className="text-[19px] md:text-lg leading-7">{p}</span>
                      </li>
                    ))}
                  </ul>
                  {s.note && (
                    <p className="text-sm md:text-base text-[#062014] opacity-70 mt-3">{s.note}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
