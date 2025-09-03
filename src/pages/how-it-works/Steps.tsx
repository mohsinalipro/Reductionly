"use client";
import Image from "next/image";
import GlobalBtn from "@/pages/_components/GlobalBtn";
import TickIcon from "../../_assets/svgs/green-tick.svg";

type Step = {
  id: string;
  heading: string;
  subheading?: string;
  intro?: string;
  note?: string;
  points: string[];
  listHeading?: string; 
};

const steps: Step[] = [
  {
    id: "01",
    heading: "SECURELY CONNECT YOUR STUDENT LOAN INFORMATION",
    intro: "We get things off to the basics — securely and privately.",
    points: ["SAFE AND ENCRYPTED", "NO HARD CREDIT PULLS", "NO PAPERWORK HEADACHES"],
    subheading:"Our system pulls your loan details, servicer information, and current status to analyze all your repayment and consolidation options in minutes"
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
    subheading: "Reductionly prepares your necessary applications and documents — all you have to do is review, sign electronically, and submit",
    points: ["FILLED OUT CORRECTLY", "MATCHED TO THE RIGHT SERVICERS", "SUBMITTED ON TIME"],
    note: "No guesswork. No missed deadlines.",
    listHeading: "We make sure everything is:"
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[#F8FDE9] rounded-t-[50px] pt-[50px] md:pt-16 lg:pt-20 pb-20">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="text-center text-[32px] md:text-[44px] leading-[115%] font-semibold text-[#062014] ">
          HERE’S HOW OUR SIMPLE, STEP-
          <br className="hidden md:block" />
          BY-STEP PROCESS WORKS:
        </div>

        <div className="rounded-3xl mb-11 md:mb-16 lg:mb-24">
          {steps.map((s, i) => (
            <div key={s.id} className={`pt-12 md:pt-14 lg:pt-20`}>
              <div className="h-px bg-[#004725] w-full mx-auto mb-8 md:mb-14 lg:mb-20 opacity-35" />
              <div className="md:flex justify-between gap-6 md:gap-10 items-start">
                <div className="text-center md:text-left md:pb-4">
                  <div className="text-[90px] font-bold text-[#062014] num-outline leading-[88%] mb-7 md:mb-10">{s.id}</div>
                  <h3 className="text-2xl md:text-[28px] lg:text-[32px] leading-7 md:leading-8 font-bold text-[#062014] md:max-w-xs uppercase tracking-wide max-w-[406px] mx-auto md:mx-auto md:w-[406px]">
                    {s.heading}
                  </h3>
                  <div className="h-px bg-[#004725] w-full mx-auto my-9 md:hidden opacity-35" />
                  {i === steps.length - 1 && (
                    <div className="mt-5 hidden md:block">
                      <GlobalBtn
                        className="h-12 w-[156px] bg-[#BADA50] !text-[#062014] justify-center rounded-xl text-center text-sm uppercase font-semibold shadow-[4px_4px_0px_#062014]"
                        text="GET STARTED"
                      />
                    </div>
                  )}
                </div>

                <div className="max-w-[464px] mx-auto md:mx-0 md:w-[464px]">
                  {s.intro && (
                    <p className="text-lg leading-[153%] text-[#062014] font-semibold">{s.intro}</p>
                  )}
                  {s.subheading && (
                    <p className="text-sm md:text-base tracking-wide text-[#062014] my-5 opacity-80">{s.subheading}</p>
                  )}
                  {s.listHeading && (
                    <p className="text-lg leading-[153%] text-[#062014] font-semibold mb-5">{s.listHeading}</p>
                  )}
                  <ul className="space-y-3">
                    {s.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-[#062014]">
                        <Image src={TickIcon} alt="" className="w-4" />
                        <span className="text-base leading-[115%] font-semibold">{p}</span>
                      </li>
                    ))}
                  </ul>
                  {s.note && (
                    <p className={`text-lg text-[#062014] mt-5 ${s.id === "03" && "font-semibold"}`}>{s.note}</p>
                  )}
                </div>

                {i === steps.length - 1 && (
                  <div className="mt-8 md:hidden">
                    <GlobalBtn
                      className="h-12 w-full md:w-[156px] bg-[#BADA50] !text-[#062014] justify-center rounded-xl text-center text-sm uppercase font-semibold shadow-[4px_4px_0px_#062014]"
                      text="GET STARTED"
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
