"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PlusIcon from "../../_assets/svgs/plus-icon.svg";
import MinusIcon from "../../_assets/svgs/minus-icon.svg";
import BgImg from "../../_assets/pngs/faqs-card-bg.png";
import Image from "next/image";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "WHAT IS REDUCTIONLY?",
    answer: `Reductionly is a software platform that helps borrowers lower their student loan payments,
consolidate loans, or get back on track after default.

We guide you through programs like Income-Based Repayment (IBR), student loan rehabilitation,
and loan consolidation — all in one easy-to-use system.`,
  },
  {
    question: "HOW DOES REDUCTIONLY LOWER MY MONTHLY PAYMENT?",
    answer: "Answer explaining how monthly payment is lowered.",
  },
  {
    question: "WHAT IF MY LOANS ARE ALREADY IN DEFAULT?",
    answer: "Answer about loans already in default.",
  },
  {
    question: "IS REDUCTIONLY A LOAN SERVICER?",
    answer: "Answer explaining if Reductionly is a loan servicer.",
  },
  {
    question: "IS MY INFORMATION SAFE WITH REDUCTIONLY?",
    answer: "Answer about data safety and security.",
  },
  {
    question: "HOW MUCH DOES IT COST TO USE REDUCTIONLY?",
    answer: "Answer about cost of using Reductionly.",
  },
  {
    question: "WHAT TYPES OF STUDENT LOANS DOES REDUCTIONLY WORK WITH?",
    answer: "Answer about loan types supported.",
  },
  {
    question: "HOW LONG DOES THE PROCESS TAKE?",
    answer: "Answer about process timeline.",
  },
  {
    question: "WHAT HAPPENS AFTER I SUBMIT MY DOCUMENTS?",
    answer: "Answer about next steps after submission.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const router = useRouter();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8FDE9] pt-10 md:pt-20 lg:pt-28 pb-24 md:pb-28 lg:pb-32 px-4 rounded-t-[50px] md:mx-3">
      <div className="max-w-5xl mx-auto px-1">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${index !== faqs.length - 1 ? "border-b border-gray-300" : ""}`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-8 text-left"
            >
              <span className="font-semibold text-lg md:text-xl uppercase tracking-wide text-[#062014]">
                {faq.question}
              </span>
              <span className="text-xl font-bold text-[#062014]">
                {openIndex === index ? (
                  <Image src={MinusIcon} alt="" className="min-w-5" />
                ) : (
                  <Image src={PlusIcon} alt="" className="min-w-5" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="pb-5 text-[#062014] text-[19px] md:text-lg leading-7 whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

        <div
          className="mt-5 min-h-[267px] text-center text-[#F8FDE9] py-10 px-6 rounded-[32px] flex items-center justify-center bg-cover"
          style={{
            backgroundImage: `url('${BgImg.src}')`,
            backgroundPosition: "left right",
          }}
        >
          <div className="max-w-[600px]">
            <p className="text-base md:text-xl uppercase tracking-wide mb-3">
              OUR TEAM IS HERE TO HELP!
            </p>
            <h2 className="text-[36px] md:text-[44px] font-semibold mb-6 md:mb-4">
              STILL HAVE QUESTIONS?
            </h2>
            <p className="text-base">
              <button
                onClick={() => router.push("/contact-us")}
                className="underline"
              >
                Contact Us
              </button>{" "}
              for personalized assistance, or{" "}
              <button
                onClick={() => router.push("/get-started")}
                className="underline"
              >
                Get Started Now
              </button>{" "}
              to begin your journey toward affordable student loan payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
